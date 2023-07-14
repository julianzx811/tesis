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
        Task<Cuenta> GetCuenta(int usuarioId);
        Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO);
        Task<BusquedaDTO> CreateBusqueda(BusquedaDTO busquedaDto);
        Task<IList<string>> GetBusquedas(int CuentaId, int cantidad);
        Task<DocumentoDTO> GetDocumento(int cuentaID);
    }
}
