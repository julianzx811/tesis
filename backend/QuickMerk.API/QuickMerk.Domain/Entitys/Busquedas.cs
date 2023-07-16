namespace QuickMerk.Domain.Entitys
{
    public class Busquedas
    {
        public int Id { get; set; }
        public string busquedas { get; set; } = string.Empty;
        public int usuarioId { get; set; }
        public Usuario? usuario { get; set; }
    }
}
