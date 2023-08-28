using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace QuickMerk.Application.Services
{
    public class UsuarioService: IUsuarioService
    {
        private readonly IUsuarioRepository usuarioRepository;
        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            this.usuarioRepository = usuarioRepository;
        }
        public Task<Usuario> GetUsuarios(int usuarioId)
        {
            var usuarios = usuarioRepository.GetUsuarios(usuarioId);
            return usuarios;
        }
        public async Task<Cuenta> GetCuenta(int usuarioId) { 
           var cuentas = await usuarioRepository.GetCuenta(usuarioId);
            return cuentas;
        }
        public Task<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var usuario = usuarioRepository.CreateUsuario(usuarioDTO);
            return usuario;
        }
        public Task<BusquedaDTO> CreateBusqueda(BusquedaDTO busquedaDto)
        {
            var usuario = usuarioRepository.CreateBusqueda(busquedaDto);
            return usuario;
        }
        public async Task<IList<string>> GetBusquedas(int CuentaId,int cantidad) 
        {
            var busquedasObj = await usuarioRepository.GetBusquedas(CuentaId,cantidad);
            IList<string> busquedas = new List<string>();
            for (int i = 0; i < busquedasObj.Count; i++)
            {
                busquedas.Add(busquedasObj[i].busquedas);
            }
            return busquedas;
        }

        public async Task<DocumentoDTO> GetDocumento(int cuentaIDs)
        {
            (string documento, string tipoDocumento) Documento = await usuarioRepository.GetDocumento(cuentaIDs);
            var documentoDTO = new DocumentoDTO() 
            {
                DocumentoName = Documento.documento,
                TipoDeDocumento = Documento.tipoDocumento,
            };
            return documentoDTO;
        }

        public Token Autenticacion(cuenta Cuenta) 
        {
            var token = usuarioRepository.Autenticacion(Cuenta);        
            return token;
        }
        public async Task<List<string>> GetTiposDocumentos()
        { 
            List<Tipo_documento> Tipos = await usuarioRepository.GetTiposDocumentos();
            List<string> tipoDocumentos = new List<string>();
            foreach (var tipo in Tipos) 
            {
                tipoDocumentos.Add(tipo.TipoDeDocumento);
            }
            return tipoDocumentos;
        }
        public async Task<UsuarioUpdateDTO> UpdateUser(UsuarioUpdateDTO usuarioDTO, int usuarioId) 
        { 
            var user = await usuarioRepository.UpdateUser(usuarioDTO, usuarioId);
            return user;
        }
        public async Task<ActionResult> UpdateCorreo(string correo, int usuarioId) 
        {
            var Correo = await usuarioRepository.UpdateCorreo(correo, usuarioId);
            return Correo;
        }
        public async Task<ActionResult> UpdateContrasena(string contrasena, int usuarioId)
        {
            var Contrasena = await usuarioRepository.UpdateContrasena(contrasena, usuarioId);
            return Contrasena;
        }
    }
}
