using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Entitys
{
    public class Cuenta
    {
        public int Id { get; set; }
        [JsonIgnore]
        public Tipo_cuenta tipo_Cuenta { get; set; }
        public int usuarioId { get; set; }
        [JsonIgnore]
        public Usuario usuario { get; set; }
        public DateTime Creacion { get; set; }
    }
}
