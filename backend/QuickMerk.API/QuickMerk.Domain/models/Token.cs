using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.models
{
    public class Token
    {
        public string token { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
    }
}
