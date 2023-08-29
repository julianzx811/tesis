using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Dto
{
    public class DocumentoDTO
    {
        [Required]
        [StringLength(11, ErrorMessage = "La Cantidad maxima son 11 caracteres")]
        public string DocumentoName { get; set; } = string.Empty;
        [Required]
        public string TipoDeDocumento { get; set; } = string.Empty;
    }
}
