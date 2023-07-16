using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.Enums;
using QuickMerk.Domain.models;
using QuickMerk.Infraestructure.Context;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace QuickMerk.Infraestructure.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly UserDbContext userDbContext;
        private readonly IConfiguration _configuration;
        public UsuarioRepository(UserDbContext userDbContext, IConfiguration _configuration)
        {
            this.userDbContext = userDbContext;
            this._configuration = _configuration;
        }

        public async Task<List<Usuario>> GetUsuarios() {
            var usuarios = await userDbContext.usuarios.ToListAsync();
            return usuarios;
        }

        public async Task<Cuenta> GetCuenta(int usuarioId)
        {
            var cuentas = await userDbContext.cuentas.FindAsync(usuarioId);
            return cuentas;
        }

        public async Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var sex = (SexoTipo)usuarioDTO.Sexo;
            var usuario = new Usuario
            {
                Nombre = usuarioDTO.Nombre,
                Apellido = usuarioDTO.Apellido,
                Edad = usuarioDTO.Edad,
                Nacimiento = usuarioDTO.Nacimiento,
                Sexo = sex.ToString(),
                Telefono = usuarioDTO.Telefono,
                direcion = usuarioDTO.direcion,
                Ciudad = usuarioDTO.Ciudad,
                Busquedas = new List<Busquedas>(),
            };
            var cuenta = new Cuenta
            {   
                tipo_Cuenta = await userDbContext.tipo_Cuentas.FindAsync(1),
                usuario = usuario,
                Creacion = DateTime.Now,
                correo = usuarioDTO.Correo,
                contrasena = usuarioDTO.contrasena
            };
            var documento = new Documento
            {
                DocumentoName = usuarioDTO.Documento,
                tipo_Documento = await userDbContext.tipo_Documentos.FindAsync(usuarioDTO.Tipo_Documento_id),
                usuario = usuario
            };
            usuario.Cuenta = cuenta;
            usuario.Documento = documento;

            userDbContext.cuentas.Add(cuenta);
            userDbContext.documentos.Add(documento);
            
            userDbContext.usuarios.Add(usuario);
            userDbContext.SaveChanges();
            return usuarioDTO;
        }

        public async Task<BusquedaDTO> CreateBusqueda(BusquedaDTO busquedaDto)
        {
            var usuario = await userDbContext.usuarios.FindAsync(busquedaDto.UsuarioId);
            var busqueda = new Busquedas
            {
                busquedas = busquedaDto.Busqueda,
                usuario = usuario
            };

            userDbContext.busquedas.Add(busqueda);
            userDbContext.SaveChanges();
            return busquedaDto;
        }

        public async Task<List<Busquedas>> GetBusquedas(int CuentaId, int cantidad) 
        {
            var busquedas = await userDbContext.busquedas.Where(b => b.usuarioId == CuentaId).Take(cantidad).ToListAsync();
            return  busquedas;
        }

        public async Task<(string documento, string tipoDocumento)> GetDocumento(int cuentaID) { 
            var documento = await userDbContext.documentos.FindAsync(cuentaID);
            var tipo_documento = await userDbContext.tipo_Documentos.FindAsync(documento.tipo_DocumentoId);
            return (documento.DocumentoName, tipo_documento.TipoDeDocumento);
        }

        public Token Autenticacion(cuenta cuenta) 
        {
            var cuentaVerificacion = userDbContext.cuentas.Where(
                c => c.correo ==  cuenta.Correo &&
                c.contrasena == cuenta.Password);

            if (!cuentaVerificacion.Any())
            {
                return null;
            }

            //We have Authenticated
            //Generate JSON Web Token
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes(_configuration["JWT:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
              {
             new Claim(ClaimTypes.Name, cuenta.Correo)
              }),
                Expires = DateTime.UtcNow.AddHours(24),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenKey), 
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Token { token = tokenHandler.WriteToken(token) };
        }
    }
}
