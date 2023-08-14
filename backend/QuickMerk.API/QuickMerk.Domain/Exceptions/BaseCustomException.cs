using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Exceptions
{
    public class BaseCustomException: Exception
    {
        public BaseCustomException(string? error): base(error) { }

    }
}
