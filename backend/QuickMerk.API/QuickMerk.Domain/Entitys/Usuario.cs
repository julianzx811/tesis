using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Entitys
{
    public class Usuario
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public int age { get; set; }
        public List<Cuenta> cuentas { get; set; }
    }
}
