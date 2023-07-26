using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.models;
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
        Task<Domain.Entitys.Cuenta> GetCuenta(int usuarioId);
        Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO);
        Task<BusquedaDTO> CreateBusqueda(BusquedaDTO busquedaDto);
        Task<List<Busquedas>> GetBusquedas(int CuentaId, int cantidad);
        Task<(string documento, string tipoDocumento)> GetDocumento(int cuentaID);
        Token Autenticacion(cuenta Cuenta);
        Task<List<Tipo_documento>> GetTiposDocumentos();
        Task<UsuarioDTO> UpdateUser(UsuarioDTO usuarioDTO, int usuarioId);
    }
}
