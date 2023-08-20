const ProductMappers = (product,info) => {
    return{
        ProductId: product.ProductId,
        ProductName: product.ProductName,
        info: product.info,
        tiendaId: product.tiendaId,
        ProductInfoId: info.ProductInfoId,
        precio: info.precio,
        Disponibilidad: info.Disponibilidad,
        Imagen: info.Imagen,
        Descripcion: info.Descripcion,
        categoria: info.categoria,
    }
}

module.exports = { ProductMappers };