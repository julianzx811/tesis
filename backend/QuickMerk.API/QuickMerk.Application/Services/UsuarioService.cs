using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
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
        public Task<List<Cuenta>> GetCuentas(int usuarioId) { 
           var cuentas = usuarioRepository.GetCuentas(usuarioId);
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
    }
}
