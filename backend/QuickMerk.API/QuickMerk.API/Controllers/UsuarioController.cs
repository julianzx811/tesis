using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;

namespace QuickMerk.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;
        public UsuarioController(IUsuarioService usuarioService)
        {
            this.usuarioService = usuarioService;
        }

        [HttpGet("~/GetUsuarios")]
        public async Task<ActionResult<List<UsuarioDTO>>> GetUsuarios()
        {
            var usuarios = await usuarioService.GetUsuarios();
            return Ok(usuarios);
        }

        [HttpGet("~/GetCuenta")]
        public async Task<ActionResult<Cuenta>> GetCuenta(int usuarioId)
        {
            var cuenta = await usuarioService.GetCuenta(usuarioId);
            return Ok(cuenta);
        }

        [HttpPost("~/CreateUsuario")]
        public async Task<ActionResult<UsuarioDTO>> CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var usuario = await usuarioService.CreateUsuario(usuarioDTO);
            return Ok(usuario);
        }
        [HttpPost("~/CreateBusqueda")]
        public async Task<ActionResult<BusquedaDTO>> CreateBusqueda(BusquedaDTO busquedaDto)
        {
            var busquedaDTO = await usuarioService.CreateBusqueda(busquedaDto);
            return Ok(busquedaDTO);
        }

        [HttpGet("~/GetBusquedas")]
        public async Task<ActionResult<List<string>>> GetBusquedas(int CuentaId, int cantidad) {
            var Busquedas = await usuarioService.GetBusquedas(CuentaId, cantidad);
            return Ok(Busquedas);
        }
        [HttpGet("~/GetDocumento")]
        public async Task<ActionResult<DocumentoDTO>> GetDocumento(int UsuarioId)
        {
            var cuentaID = await usuarioService.GetCuenta(UsuarioId);
            var documento =  await usuarioService.GetDocumento(cuentaID.Id);
            return Ok(documento);
        }
    }
}
