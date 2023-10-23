USE QuickMerkDB
GO

/****** Object:  Table [dbo].[busquedas]    Script Date: 16/07/2023 4:25:42 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[busquedas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[busquedas] [nvarchar](max) NOT NULL,
	[usuarioId] [int] NOT NULL,
 CONSTRAINT [PK_busquedas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[busquedas]  WITH CHECK ADD  CONSTRAINT [FK_busquedas_usuarios_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[usuarios] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[busquedas] CHECK CONSTRAINT [FK_busquedas_usuarios_usuarioId]
GO

