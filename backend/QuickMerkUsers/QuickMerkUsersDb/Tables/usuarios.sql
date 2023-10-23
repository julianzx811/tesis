USE QuickMerkDB
GO

/****** Object:  Table [dbo].[usuarios]    Script Date: 16/07/2023 4:27:10 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[usuarios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[Apellido] [nvarchar](max) NOT NULL,
	[Edad] [int] NOT NULL,
	[Nacimiento] [datetime2](7) NOT NULL,
	[Sexo] [nvarchar](max) NOT NULL,
	[Telefono] [nvarchar](max) NOT NULL,
	[direcion] [nvarchar](max) NOT NULL,
	[Ciudad] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_usuarios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

