using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Entitys
{
    public class Cuenta
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Usuario usuario { get; set; }
        //public int usuarioId { get; set; }
    }
}
