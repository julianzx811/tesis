using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Dto
{
    public class BusquedaDTO
    {
        [Required]
        public int UsuarioId { get; set; }
        [Required]
        [StringLength(35, ErrorMessage = "La Cantidad maxima son 35 caracteres")]
        public string Busqueda { get; set; } = string.Empty;
    }
}
