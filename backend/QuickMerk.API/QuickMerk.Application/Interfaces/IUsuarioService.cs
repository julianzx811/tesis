using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Application.Interfaces
{
    public interface IUsuarioService
    {
        Task<List<Usuario>> GetUsuarios();
        Task<List<Cuenta>> GetCuentas(int usuarioId);
        UsuarioDTO CreateUsuario(UsuarioDTO usuarioDTO);
        Task<CuentaDTO> CreateCuenta(CuentaDTO cuentaDTO);
    }
}
