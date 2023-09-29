def ProductToDictionary(Producto):
    if Producto == None:
        return None

    dictionary = {}
    dictionary["username"] = Producto.ProductId
    dictionary["ProductName"] = Producto.ProductName
    dictionary["info"] = Producto.info
    dictionary["tiendaId"] = Producto.tiendaId

    return dictionary

def ProductInfoToDictionary(Producto):
    if Producto == None:
        return None

    dictionary = {}
    dictionary["ProductInfoId"] = Producto.ProductInfoId
    dictionary["precio"] = Producto.precio
    dictionary["Disponibilidad"] = Producto.Disponibilidad
    dictionary["Imagen"] = Producto.Imagen
    dictionary["Descripcion"] = Producto.Descripcion
    dictionary["categoria"] = Producto.categoria
    dictionary["link"] = Producto.link

    return dictionary