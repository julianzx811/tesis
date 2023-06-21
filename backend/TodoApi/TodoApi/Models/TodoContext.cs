using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class TodoContext: DbContext
    {
        /* con :base(options) estamos llamando al constructor de Dbcontext y le estamos mandando options
         que es el contexto de nuestra base de datos*/
        public TodoContext(DbContextOptions<TodoContext> options) :base(options) { 
        }
        public DbSet<TodoItem> todoItems { get; set; } = null!;
    }
}
