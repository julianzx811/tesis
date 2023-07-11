CREATE TABLE Tipo_documentos(
    TipoDocumentoId int  NOT NULL,
	TipoDocumento varchar(50)  NOT NULL CHECK (len(TipoDocumento)>14),
	PRIMARY KEY (TipoDocumentoId)
);

CREATE TABLE Documentos(
    Documento_id int  NOT NULL,
	Documento varchar(12)  NOT NULL CHECK (len(Documento)=12),
	Tipo_documento int  NOT NULL,
	PRIMARY KEY (Documento_id),
	FOREIGN KEY (Tipo_documento) REFERENCES Tipo_documentos(TipoDocumentoId)
);

CREATE TABLE Tipo_cuenta(
    TipoCuentaId int NOT NULL,
	TipoCuenta varchar(50) NOT NULL,
	PRIMARY KEY (TipoCuentaId)
);

CREATE TABLE Cuentas(
    CuentaId int  NOT NULL,
	Tipo_cuenta int NOT NULL,
	Creacion DATETIME  NOT NULL,
	PRIMARY KEY (CuentaId),
	FOREIGN KEY (Tipo_cuenta) REFERENCES Tipo_cuenta(TipoCuentaId)
);

CREATE TABLE Usuarios (
    Usuario_id int NOT NULL,
    Nombre varchar(50) NOT NULL CHECK (len(Nombre)>4),
    Apellido varchar(50) NOT NULL CHECK (len(Apellido)>4),
	Edad int NOT NULL CHECK (Edad > 8 AND Edad < 90),
	Nacimiento DATE CHECK (YEAR(Nacimiento) > 1900),
	Sexo NOT NULL ENUM('hombre','mujer'),
	Telefono varchar(11) NOT NULL CHECK (len(Telefono)=11),
    Address varchar(255),
    Ciudad varchar(255) NOT NULL,
	Documento_identidad int NOT NULL,
	Cuenta int NOT NULL,
	PRIMARY KEY (Usuario_id),
	FOREIGN KEY (Documento_identidad) REFERENCES Documentos(Documento_id),
	FOREIGN KEY (Cuenta) REFERENCES Cuentas(CuentaId)
);

CREATE TABLE Busquedas(
    Id_busqueda int  NOT NULL,
	Busqueda varchar(50)  NOT NULL,
	Usuario int  NOT NULL,
	PRIMARY KEY (Id_busqueda),
	FOREIGN KEY (Usuario) REFERENCES Usuarios(Usuario_id)
);
