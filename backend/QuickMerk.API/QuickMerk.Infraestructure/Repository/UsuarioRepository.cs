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

        public async Task<CuentaDTO> CreateCuenta(CuentaDTO cuentaDTO) {
            var usuario = await userDbContext.usuarios.FindAsync(cuentaDTO.UsuarioID);
            var cuenta = new Cuenta
            {
                Name = cuentaDTO.Name,
                usuario = usuario
            };
            userDbContext.cuentas.Add(cuenta);
            userDbContext.SaveChanges();
            return cuentaDTO;
        }

        public UsuarioDTO CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var usuario = new Usuario
            {
                Name = usuarioDTO.Name,
                age = usuarioDTO.age,
                cuentas = new List<Cuenta>(),
            };
            userDbContext.usuarios.Add(usuario);
            userDbContext.SaveChanges();
            return usuarioDTO;
        }
    }
}
