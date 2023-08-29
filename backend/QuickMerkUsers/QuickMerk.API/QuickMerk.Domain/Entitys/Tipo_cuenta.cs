namespace QuickMerk.Domain.Entitys
{
    public class Tipo_cuenta
    {
        public int Id { get; set; }
        public string tipo_cuenta { get; set; } = string.Empty;
        public List<Cuenta>? cuentas { get; set; }
    }
}
