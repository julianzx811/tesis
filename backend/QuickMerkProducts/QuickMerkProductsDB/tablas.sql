CREATE TABLE Empresa (
    EmpresaId int IDENTITY(1, 1) NOT NULL ,
    Empresa_Nombre varchar(255) NOT NULL,
    link varchar(255),
    PRIMARY KEY (EmpresaId)
);

CREATE TABLE Producto_categoria (
    CategoriaID int IDENTITY(1, 1) NOT NULL ,
    Categoria varchar(255) NOT NULL,
    icono varchar(255) NOT NULL,
	PRIMARY KEY (CategoriaID)
);

CREATE TABLE Tienda (
    TiendaId int IDENTITY(1, 1) NOT NULL,
    Tienda_Nombre varchar(255) NOT NULL,
    latitude float NOT NULL,
    longitude float NOT NULL,
    latitudeDelta float NOT NULL,
    longitudeDelta float NOT NULL,
    empresaId int NULL,
    PRIMARY KEY (TiendaId),
    FOREIGN KEY (empresaId) REFERENCES Empresa(EmpresaId)
);

CREATE TABLE Producto_info (
    ProductInfoId int IDENTITY(1, 1) NOT NULL,
    precio float,
    Disponibilidad varchar(10),
    Imagen varchar(255),
    Descripcion  varchar(5000),
    categoria int NULL,
    link VARCHAR(1000) NULL;
    PRIMARY KEY (ProductInfoId),
    FOREIGN KEY (categoria) REFERENCES Producto_categoria(CategoriaID),
);

CREATE TABLE Producto (
    ProductId int IDENTITY(1, 1),
    ProductName varchar(255),
    info int,
    -- en caso de que no se encuentre tienda debe ser null
    -- investigar que se puede hacer en este caso
    tiendaId int NULL,
    PRIMARY KEY (ProductId),
    FOREIGN KEY (info) REFERENCES Producto_info(ProductInfoId),
);


