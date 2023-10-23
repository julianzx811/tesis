USE QuickMerkDB
GO

/****** Object:  Table [dbo].[documentos]    Script Date: 16/07/2023 4:26:13 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[documentos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DocumentoName] [nvarchar](max) NOT NULL,
	[tipo_DocumentoId] [int] NOT NULL,
	[usuarioId] [int] NOT NULL,
 CONSTRAINT [PK_documentos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[documentos]  WITH CHECK ADD  CONSTRAINT [FK_documentos_tipo_Documentos_tipo_DocumentoId] FOREIGN KEY([tipo_DocumentoId])
REFERENCES [dbo].[tipo_Documentos] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[documentos] CHECK CONSTRAINT [FK_documentos_tipo_Documentos_tipo_DocumentoId]
GO

ALTER TABLE [dbo].[documentos]  WITH CHECK ADD  CONSTRAINT [FK_documentos_usuarios_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[usuarios] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[documentos] CHECK CONSTRAINT [FK_documentos_usuarios_usuarioId]
GO

