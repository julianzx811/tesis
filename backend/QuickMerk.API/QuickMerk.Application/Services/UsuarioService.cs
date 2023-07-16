using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Application.Services
{
    public class UsuarioService: IUsuarioService
    {
        private readonly IUsuarioRepository usuarioRepository;
        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            this.usuarioRepository = usuarioRepository;
        }
        public Task<List<Usuario>> GetUsuarios()
        {
            var usuarios = usuarioRepository.GetUsuarios();
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
    }
}
