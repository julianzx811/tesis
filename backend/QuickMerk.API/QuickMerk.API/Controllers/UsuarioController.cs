using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickMerk.Application.Interfaces;
using QuickMerk.Domain.Dto;
using QuickMerk.Domain.Entitys;
using QuickMerk.Domain.models;

namespace QuickMerk.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;
        public UsuarioController(IUsuarioService usuarioService)
        {
            this.usuarioService = usuarioService;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("~/GetDocumentos")]
        public async Task<ActionResult<List<string>>> GetTiposDocumentos()
        {
            var documentos = await usuarioService.GetTiposDocumentos();
            return Ok(documentos);
        }

        [HttpGet("~/GetBusquedas")]
        public async Task<ActionResult<List<string>>> GetBusquedas(int CuentaId, int cantidad)
        {
            var Busquedas = await usuarioService.GetBusquedas(CuentaId, cantidad);
            return Ok(Busquedas);
        }

        [HttpGet("~/GetDocumento")]
        public async Task<ActionResult<DocumentoDTO>> GetDocumento(int UsuarioId)
        {
            var cuentaID = await usuarioService.GetCuenta(UsuarioId);
            var documento = await usuarioService.GetDocumento(cuentaID.Id);
            return Ok(documento);
        }

        [HttpGet("~/GetUsuario")]
        public async Task<ActionResult<UsuarioDTO>> GetUsuario(int usuarioId)
        {
            var usuarios = await usuarioService.GetUsuarios(usuarioId);
            return Ok(usuarios);
        }

        [HttpGet("~/GetCuenta")]
        public async Task<ActionResult<Cuenta>> GetCuenta(int usuarioId)
        {
            var cuenta = await usuarioService.GetCuenta(usuarioId);
            return Ok(cuenta);
        }

        [AllowAnonymous]
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

        [AllowAnonymous]
        [HttpPost]
        [Route("~/Login")]
        public IActionResult Authenticate(cuenta Cuenta)
        {
            var token = usuarioService.Autenticacion(Cuenta);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(token);
        }

        [HttpPut]
        [Route("~/UpdateUsuario")]
        public async Task<ActionResult<UsuarioDTO>> UpdateUsuario(UsuarioUpdateDTO usuarioDTO,int usuarioId)
        {
            var usuario = await usuarioService.UpdateUser(usuarioDTO, usuarioId);
            return Ok(usuario);
        }

        [HttpPut]
        [Route("~/UpdateCorreo")]
        public async Task<System.Web.Mvc.ActionResult> UpdateCorreo(string correo,int usuarioId)
        {
            var Correo = await usuarioService.UpdateCorreo(correo, usuarioId);
            return Correo;

        }

        [HttpPut]
        [Route("~/UpdateContrasena")]
        public async Task<System.Web.Mvc.ActionResult> UpdateContrasena(string contrasena,int usuarioId)
        {
            var Correo = await usuarioService.UpdateContrasena(contrasena, usuarioId);
            return Correo;
        }
    }
}
