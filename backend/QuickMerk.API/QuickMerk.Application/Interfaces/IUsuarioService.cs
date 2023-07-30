using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace QuickMerk.Application.Interfaces
{
    public interface IUsuarioService
    {
        Task<Usuario> GetUsuarios(int usuarioId);
        Task<Cuenta> GetCuenta(int usuarioId);
        Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO);
        Task<BusquedaDTO> CreateBusqueda(BusquedaDTO busquedaDto);
        Task<IList<string>> GetBusquedas(int CuentaId, int cantidad);
        Task<DocumentoDTO> GetDocumento(int cuentaID);
        Token Autenticacion(cuenta Cuenta);
        Task<List<string>> GetTiposDocumentos();
        Task<UsuarioUpdateDTO> UpdateUser(UsuarioUpdateDTO usuarioDTO,int usuarioId);
        Task<ActionResult> UpdateCorreo(string correo, int usuarioId);
        Task<ActionResult> UpdateContrasena(string contrasena, int usuarioId);
    }
}
