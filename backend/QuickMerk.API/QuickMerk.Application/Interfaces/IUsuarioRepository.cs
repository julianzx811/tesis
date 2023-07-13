using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Application.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<List<Usuario>> GetUsuarios();
        Task<List<Cuenta>> GetCuentas(int usuarioId);
        Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO);
        Task<BusquedaDTO> CreateBusqueda(BusquedaDTO busquedaDto);
    }
}
