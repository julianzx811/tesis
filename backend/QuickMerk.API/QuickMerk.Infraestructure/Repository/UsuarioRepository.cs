using Microsoft.EntityFrameworkCore;
using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Infraestructure.Context;

namespace QuickMerk.Infraestructure.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly UserDbContext userDbContext;
        public UsuarioRepository(UserDbContext userDbContext)
        {
            this.userDbContext = userDbContext;
        }

        public async Task<List<Usuario>> GetUsuarios() {
            var usuarios = await userDbContext.usuarios.ToListAsync();
            return usuarios;
        }

        public async Task<List<Cuenta>> GetCuentas(int usuarioId)
        {
            var cuentas = from c in userDbContext.cuentas select c;
            cuentas = cuentas.Where(c => c.usuario.Id == usuarioId);
            return await cuentas.ToListAsync();
        }

        public async Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var usuario = new Usuario
            {
                Nombre = usuarioDTO.Nombre,
                Apellido = usuarioDTO.Apellido,
                Edad = usuarioDTO.Edad,
                Nacimiento = usuarioDTO.Nacimiento,
                Sexo = usuarioDTO.Sexo,
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
            };
            var documento = new Documento
            {
                DocumentoName = usuarioDTO.Documento,
                tipo_Documento = await userDbContext.tipo_Documentos.FindAsync(1),
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
    }
}
