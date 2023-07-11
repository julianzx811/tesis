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

        [HttpGet("~/GetCuentas")]
        public async Task<ActionResult<List<Cuenta>>> GetCuentas(int usuarioId)
        {
            var cuentas = await usuarioService.GetCuentas(usuarioId);
            return Ok(cuentas);
        }

        [HttpPost("~/CreateUsuario")]
        public ActionResult<UsuarioDTO> CreateUsuario(UsuarioDTO usuarioDTO)
        {
            var usuario = usuarioService.CreateUsuario(usuarioDTO);
            return Ok(usuario);
        }

        [HttpPost("~/CreateCuenta")]
        public async Task<ActionResult<UsuarioDTO>> CreateCuenta(CuentaDTO cuentaDTO)
        {
            var cuenta = await usuarioService.CreateCuenta(cuentaDTO);
            return Ok(cuenta);
        }
    }
}
