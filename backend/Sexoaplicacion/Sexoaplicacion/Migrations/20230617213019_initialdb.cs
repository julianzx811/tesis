using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sexoaplicacion.Migrations
{
    /// <inheritdoc />
    public partial class initialdb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CategoriaUsuario",
                columns: table => new
                {
                    Id_categoria = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriaUsuario", x => x.Id_categoria);
                });

            migrationBuilder.CreateTable(
                name: "usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Second_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Edad = table.Column<int>(type: "int", nullable: false),
                    Sex = table.Column<bool>(type: "bit", nullable: false),
                    Id_categoria = table.Column<int>(type: "int", nullable: false),
                    CategoriaUsuarioId_categoria = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usuarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_usuarios_CategoriaUsuario_CategoriaUsuarioId_categoria",
                        column: x => x.CategoriaUsuarioId_categoria,
                        principalTable: "CategoriaUsuario",
                        principalColumn: "Id_categoria");
                });

            migrationBuilder.CreateIndex(
                name: "IX_usuarios_CategoriaUsuarioId_categoria",
                table: "usuarios",
                column: "CategoriaUsuarioId_categoria");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "usuarios");

            migrationBuilder.DropTable(
                name: "CategoriaUsuario");
        }
    }
}
