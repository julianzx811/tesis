using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.Enums;
using QuickMerk.Domain.Exceptions;
using QuickMerk.Domain.models;
using QuickMerk.Infraestructure.Context;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Web.Mvc;

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

        public async Task<Usuario> GetUsuarios(int usuarioId) {
            var usuarios = await userDbContext.usuarios.FindAsync(usuarioId);
            return usuarios;
        }

        public async Task<Cuenta> GetCuenta(int usuarioId)
        {
            var cuentas = await userDbContext.cuentas.FindAsync(usuarioId);
            return cuentas;
        }

        public async Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var corrreoExist = await userDbContext.cuentas.Where(c => c.correo == usuarioDTO.Correo).AnyAsync();
            var cedulaoExist = await userDbContext.documentos.Where(d => d.DocumentoName == usuarioDTO.Documento).AnyAsync();
            if (!corrreoExist && !cedulaoExist)
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
            else 
            {
                throw new BaseCustomException("el correo o la documento ya se encuentran registradas");
            }
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
            var cuentaVerificacion =  userDbContext.cuentas.Where(
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
            return new Token { 
                token = tokenHandler.WriteToken(token) ,
                CuentaId = cuentaVerificacion.SingleOrDefault().usuarioId,
            };
        }
        public async Task<List<Tipo_documento>> GetTiposDocumentos() 
        { 
            var tiposDocumentos = await userDbContext.tipo_Documentos.ToListAsync();
            return tiposDocumentos;
        }
        public async Task<UsuarioUpdateDTO> UpdateUser(UsuarioUpdateDTO usuarioDTO,int UsuarioId) 
        {
            //updating user
            var usuario = await userDbContext.usuarios.FindAsync(UsuarioId);
            var sex = (SexoTipo)usuarioDTO.Sexo;
            //create a mapper for this
            usuario.Nombre = usuarioDTO.Nombre;
            usuario.Apellido = usuarioDTO.Apellido;
            usuario.Edad = usuarioDTO.Edad;
            usuario.Nacimiento = usuarioDTO.Nacimiento;
            usuario.Sexo = sex.ToString();
            usuario.Telefono = usuarioDTO.Telefono;
            usuario.direcion = usuarioDTO.direcion;
            usuario.Ciudad = usuarioDTO.Ciudad;

            userDbContext.usuarios.Update(usuario);
            userDbContext.SaveChanges();

            return usuarioDTO;
        }

        public async Task<ActionResult> UpdateCorreo(string correo, int usuarioId)
        {
            var corrreoExist = await userDbContext.cuentas.Where(c => c.correo == correo).AnyAsync();
            if (!corrreoExist)
            {
                var usuario = await userDbContext.usuarios.FindAsync(usuarioId);
                var cuenta = await userDbContext.cuentas.FindAsync(usuario.Id);
                if (cuenta != null)
                {
                    cuenta.correo = correo;
                    userDbContext.cuentas.Update(cuenta);
                    userDbContext.SaveChanges();
                    return new EmptyResult();
                }
                else
                {
                    throw new BaseCustomException("la cuenta no existe");
                }
            }
            else {
                throw new BaseCustomException("el correo ya se encuentra registrado");
            }
        }

        public async Task<ActionResult> UpdateContrasena(string contrasena, int usuarioId)
        {
            var usuario = await userDbContext.usuarios.FindAsync(usuarioId);
            var cuenta = await userDbContext.cuentas.FindAsync(usuario.Id);
            if (cuenta != null)
            {
                cuenta.contrasena = contrasena;
                userDbContext.cuentas.Update(cuenta);
                userDbContext.SaveChanges();
                return new EmptyResult();
            }
            else
            {
                return null;
            }
        }
    }
}
