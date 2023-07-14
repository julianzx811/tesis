namespace QuickMerk.Domain.Entitys
{
    public class Busquedas
    {
        public int Id { get; set; }
        public string? busquedas { get; set; }
        public int usuarioId { get; set; }
        public Usuario? usuario { get; set; }
    }
}
