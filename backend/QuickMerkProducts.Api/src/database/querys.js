const querys = {
  getAllProducts: "SELECT  * from Producto",
  getAllcategories: "SELECT  * from Producto_categoria",
  getProducById: "select * from Producto where ProductId = @Id",
  GetProductByName:"SELECT * FROM Producto WHERE ProductName LIKE  CONCAT('%', @ProductoName, '%')",
  PostProductInfo:
    "INSERT INTO Producto_info(precio,Disponibilidad,Imagen,Descripcion) VALUES (@precio,@Disponibilidad,@Imagen,@Descripcion); SELECT SCOPE_IDENTITY() AS id;",
  PostProduct:
    "INSERT INTO Producto(ProductName,info,tiendaId) VALUES (@ProductName,@info,@tiendaId);",
  ProductoInfoId: "SELECT info from Producto where ProductId = @Id;",
  DeleteProduct:
    "DELETE FROM Producto WHERE ProductId = @ProductId; DELETE FROM Producto_info WHERE ProductInfoId = @ProductInfoId;",
  UpdateProduct:
    "UPDATE Producto SET ProductName = @ProductName, tiendaId = @tiendaId WHERE ProductId=@ProductId;",
  UpdateProductInfo:
    "UPDATE Producto_info SET precio = @precio, Disponibilidad = @Disponibilidad, Imagen = @Imagen, Descripcion = @Descripcion WHERE ProductInfoId=@ProductInfoId;",
  GetProductByCategoria:"select * from Producto_info where categoria = @categoria",  
};

module.exports = { querys };
