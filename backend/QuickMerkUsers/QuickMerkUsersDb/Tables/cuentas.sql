USE [Peopledb]
GO

/****** Object:  Table [dbo].[cuentas]    Script Date: 16/07/2023 4:25:54 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[cuentas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[tipo_CuentaId] [int] NOT NULL,
	[usuarioId] [int] NOT NULL,
	[Creacion] [datetime2](7) NOT NULL,
	[correo] [nvarchar](max) NOT NULL,
	[contrasena] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_cuentas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[cuentas]  WITH CHECK ADD  CONSTRAINT [FK_cuentas_tipo_Cuentas_tipo_CuentaId] FOREIGN KEY([tipo_CuentaId])
REFERENCES [dbo].[tipo_Cuentas] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[cuentas] CHECK CONSTRAINT [FK_cuentas_tipo_Cuentas_tipo_CuentaId]
GO

ALTER TABLE [dbo].[cuentas]  WITH CHECK ADD  CONSTRAINT [FK_cuentas_usuarios_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[usuarios] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[cuentas] CHECK CONSTRAINT [FK_cuentas_usuarios_usuarioId]
GO

