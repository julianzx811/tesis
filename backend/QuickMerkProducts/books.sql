--initial categories

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Electrónica',
           'phone-portrait')

		   
INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Ropa',
           'shirt')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Hogar',
           'home')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Alimentación ',
           'pizza')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Salud',
           'heart')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Deportes',
           'football')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Juguetes ',
           'rocket')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Belleza ',
           'color-wand')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Libros',
           'book')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Entretenimiento',
           'tv')

INSERT INTO [dbo].[AImodel_Producto_categoria]
           ([Categoria]
           ,[icono])
     VALUES
           ('Otros',
           'globe')

-- insertando productos:
--LIBROS:
--producto info
INSERT INTO AImodel_Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Oxford University Press','http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('HarperFlamingo Canada','http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('HarperPerennial','http://images.amazon.com/images/P/0060973129.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0060973129.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Farrar Straus Giroux','http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('W. W. Norton &amp; Company','http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Putnam Pub Group','http://images.amazon.com/images/P/0399135782.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0399135782.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,<Disponibilidad,categoria) VALUES ('Berkley Publishing Group','http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Audioworks','http://images.amazon.com/images/P/0671870432.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Random House','http://images.amazon.com/images/P/0679425608.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0679425608.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Scribner','http://images.amazon.com/images/P/074322678X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Emblem Editions','http://images.amazon.com/images/P/0771074670.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0771074670.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Citadel Press','http://images.amazon.com/images/P/080652121X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/080652121X.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('House of Anansi Press','http://images.amazon.com/images/P/0887841740.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0887841740.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Mira Books','http://images.amazon.com/images/P/1552041778.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1552041778.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Health Communications','http://images.amazon.com/images/P/1558746218.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1558746218.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Brilliance Audio - Trade','http://images.amazon.com/images/P/1567407781.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1567407781.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Kensington Publishing Corp.','http://images.amazon.com/images/P/1575663937.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1575663937.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('River City Pub','http://images.amazon.com/images/P/1881320189.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1881320189.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Dell','http://images.amazon.com/images/P/0440234743.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Plume','http://images.amazon.com/images/P/0452264464.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Three Rivers Press','http://images.amazon.com/images/P/0609804618.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0609804618.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Ryland Peters &amp; Small Ltd','http://images.amazon.com/images/P/1841721522.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1841721522.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Cypress House','http://images.amazon.com/images/P/1879384493.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/1879384493.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('HarperEntertainment','http://images.amazon.com/images/P/0061076031.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0061076031.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Scholastic','http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Aladdin','http://images.amazon.com/images/P/0689821166.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0689821166.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Too Far','http://images.amazon.com/images/P/0971880107.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0971880107.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Ballantine Books','http://images.amazon.com/images/P/0345402871.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0345402871.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Ballantine Books','http://images.amazon.com/images/P/0345417623.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0345417623.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Scribner','http://images.amazon.com/images/P/0684823802.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0684823802.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Random House Trade Paperbacks','http://images.amazon.com/images/P/0375759778.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0375759778.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Berkley Publishing Group','http://images.amazon.com/images/P/0425163091.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0425163091.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('L�?¼bbe','http://images.amazon.com/images/P/3404921038.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/3404921038.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Goldmann','http://images.amazon.com/images/P/3442353866.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/3442353866.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Goldmann','http://images.amazon.com/images/P/3442410665.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/3442410665.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Goldmann','http://images.amazon.com/images/P/3442446937.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/3442446937.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Alfred A. Knopf','http://images.amazon.com/images/P/0375406328.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0375406328.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Little Brown &amp; Company','http://images.amazon.com/images/P/0446310786.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Ballantine Books','http://images.amazon.com/images/P/0449005615.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0449005615.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Harpercollins','http://images.amazon.com/images/P/0060168013.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0060168013.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Avon','http://images.amazon.com/images/P/038078243X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/038078243X.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Bantam','http://images.amazon.com/images/P/055321215X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/055321215X.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Fireside','http://images.amazon.com/images/P/067176537X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/067176537X.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('HarperTorch','http://images.amazon.com/images/P/0061099686.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0061099686.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Bantam Books','http://images.amazon.com/images/P/0553582909.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0553582909.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Pocket','http://images.amazon.com/images/P/0671888587.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0671888587.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Bantam Books','http://images.amazon.com/images/P/0553582747.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0553582747.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Berkley Publishing Group','http://images.amazon.com/images/P/0425182908.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/0425182908.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);
INSERT INTO Producto_info(Descripcion,Imagen,link,precio,Disponibilidad,categoria) VALUES ('Berkley Publishing Group','http://images.amazon.com/images/P/042518630X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/042518630X.01.LZZZZZZZ.jpg', ROUND(RAND() * (250000 - 100000) + 100000, 2),'online',8);


--producto
INSERT INTO Producto(ProductName, info) VALUES ('Classical Mythology', 1);
INSERT INTO Producto(ProductName, info) VALUES ('Clara Callan', 2);
INSERT INTO Producto(ProductName, info) VALUES ('Decision in Normandy', 3);
INSERT INTO Producto(ProductName, info) VALUES ('Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It', 4);
INSERT INTO Producto(ProductName, info) VALUES ('The Mummies of Urumchi', 5);
INSERT INTO Producto(ProductName, info) VALUES ('The Kitchen God''s Wife', 6);
INSERT INTO Producto(ProductName, info) VALUES ('What If?: The World''s Foremost Military Historians Imagine What Might Have Been', 7);
INSERT INTO Producto(ProductName, info) VALUES ('PLEADING GUILTY', 8);
INSERT INTO Producto(ProductName, info) VALUES ('Under the Black Flag: The Romance and the Reality of Life Among the Pirates', 9);
INSERT INTO Producto(ProductName, info) VALUES ('Where You''ll Find Me: And Other Stories', 10);
INSERT INTO Producto(ProductName, info) VALUES ('Nights Below Station Street', 11);
INSERT INTO Producto(ProductName, info) VALUES ('Hitler''s Secret Bankers: The Myth of Swiss Neutrality During the Holocaust', 12);
INSERT INTO Producto(ProductName, info) VALUES ('The Middle Stories', 13);
INSERT INTO Producto(ProductName, info) VALUES ('Jane Doe', 14);
INSERT INTO Producto(ProductName, info) VALUES ('A Second Chicken Soup for the Woman''s Soul (Chicken Soup for the Soul Series)', 15);
INSERT INTO Producto(ProductName, info) VALUES ('The Witchfinder (Amos Walker Mystery Series)', 16);
INSERT INTO Producto(ProductName, info) VALUES ('More Cunning Than Man: A Social History of Rats and Man', 17);
INSERT INTO Producto(ProductName, info) VALUES ('Goodbye to the Buttermilk Sky', 18);
INSERT INTO Producto(ProductName, info) VALUES ('The Testament', 19);
INSERT INTO Producto(ProductName, info) VALUES ('Beloved (Plume Contemporary Fiction)', 20);
INSERT INTO Producto(ProductName, info) VALUES ('Our Dumb Century: The Onion Presents 100 Years of Headlines from America''s Finest News Source', 21);
INSERT INTO Producto(ProductName, info) VALUES ('New Vegetarian: Bold and Beautiful Recipes for Every Occasion', 22);
INSERT INTO Producto(ProductName, info) VALUES ('If I''d Known Then What I Know Now: Why Not Learn from the Mistakes of Others? : You Can''t Afford to Make Them All Yourself', 23);
INSERT INTO Producto(ProductName, info) VALUES ('Mary-Kate & Ashley Switching Goals (Mary-Kate and Ashley Starring in)', 24);
INSERT INTO Producto(ProductName, info) VALUES ('Tell Me This Isn''t Happening', 25);
INSERT INTO Producto(ProductName, info) VALUES ('Flood : Mississippi 1927', 26);
INSERT INTO Producto(ProductName, info) VALUES ('Wild Animus', 27);
INSERT INTO Producto(ProductName, info) VALUES ('Airframe', 28);
INSERT INTO Producto(ProductName, info) VALUES ('Timeline', 29);
INSERT INTO Producto(ProductName, info) VALUES ('OUT OF THE SILENT PLANET', 30);
INSERT INTO Producto(ProductName, info) VALUES ('Prague : A Novel', 31);
INSERT INTO Producto(ProductName, info) VALUES ('Chocolate Jesus', 32);
INSERT INTO Producto(ProductName, info) VALUES ('Wie Barney es sieht.', 33);
INSERT INTO Producto(ProductName, info) VALUES ('Der Fluch der Kaiserin. Ein Richter- Di- Roman.', 34);
INSERT INTO Producto(ProductName, info) VALUES ('Sturmzeit. Roman.', 35);
INSERT INTO Producto(ProductName, info) VALUES ('Tage der Unschuld.', 36);
INSERT INTO Producto(ProductName, info) VALUES ('Lying Awake', 37);
INSERT INTO Producto(ProductName, info) VALUES ('To Kill a Mockingbird', 38);
INSERT INTO Producto(ProductName, info) VALUES ('Seabiscuit: An American Legend', 39);
INSERT INTO Producto(ProductName, info) VALUES ('Pigs in Heaven', 40);
INSERT INTO Producto(ProductName, info) VALUES ('Miss Zukas and the Raven''s Dance', 41);
INSERT INTO Producto(ProductName, info) VALUES ('Pride and Prejudice', 42);
INSERT INTO Producto(ProductName, info) VALUES ('The Therapeutic Touch: How to Use Your Hands to Help or to Heal', 43);
INSERT INTO Producto(ProductName, info) VALUES ('Downtown', 44);
INSERT INTO Producto(ProductName, info) VALUES ('Icebound', 45);
INSERT INTO Producto(ProductName, info) VALUES ('I''ll Be Seeing You', 46);
INSERT INTO Producto(ProductName, info) VALUES ('From the Corner of His Eye', 47);
INSERT INTO Producto(ProductName, info) VALUES ('Isle of Dogs', 48);
INSERT INTO Producto(ProductName, info) VALUES ('Purity in Death', 49);

-- peliculas
--producto info
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('In a city of humanoid animals, a hustling theater impresario''s attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists'' find that their lives will never be the same.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('European mercenaries searching for black powder become embroiled in the defense of the Great Wall of China against a horde of monstrous creatures.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A jazz pianist falls for an aspiring actress in Los Angeles.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A has-been actor best known for playing the title character in the 1980s detective series "Mindhorn" must work with the police when a serial killer says that he will only speak with Detective Mindhorn, whom he believes to be a real person.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A true-life drama, centering on British explorer Col. Percival Fawcett, who disappeared while searching for a mysterious city in the Amazon in the 1920s.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The adventures of writer Newt Scamander in New York''s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches an impetuous Chieftain''s daughter''s island, she answers the Ocean''s call to seek out the Demigod to set things right.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Gloria is an out-of-work party girl forced to leave her life in New York City, and move back home. When reports surface that a giant creature is destroying Seoul, she gradually comes to the realization that she is somehow connected to this phenomenon.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The CIA''s most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia. 25 years later, he sets out to find his lost family.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Kenny Wells, a prospector desperate for a lucky break, teams up with a similarly eager geologist and sets off on a journey to find gold in the uncharted jungle of Indonesia.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A depressed uncle is asked to take care of his teenage nephew after the boy''s father dies.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A cold-blooded predatory couple while cruising the streets in search of their next victim, will stumble upon a 17-year-old high school girl, who will be sedated, abducted and chained in the strangers'' guest room.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Two decades after the first Independence Day invasion, Earth is faced with a new extra-Solar threat. But will mankind''s new space defenses be enough?',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Fiona visits Paris for the first time to assist her myopic Aunt Martha. Catastrophes ensue, mainly involving Dom, a homeless man who has yet to have an emotion or thought he was afraid of expressing.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('In ancient India, an adventurous and daring man becomes involved in a decades old feud between two warring people.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A young woman must save herself and her friends from an ancient evil that stalks its victims through the real-life phenomenon of sleep paralysis.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('When three overworked and under-appreciated moms are pushed beyond their limits, they ditch their conventional responsibilities for a jolt of long overdue freedom, fun, and comedic self-indulgence.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A holiday gathering threatens to go off the rails when Ned Fleming realizes that his daughter''s Silicon Valley millionaire boyfriend is about to pop the question.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A wealthy art gallery owner is haunted by her ex-husband''s novel, a violent thriller she interprets as a symbolic revenge tale.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('After the re-emergence of the world''s first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Alice returns to where the nightmare began: The Hive in Raccoon City, where the Umbrella Corporation is gathering its forces for a final strike against the only remaining survivors of the apocalypse.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Political interference in the Avengers'' activities causes a rift between former allies Captain America and Iron Man.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Seven gunmen in the old west gradually come together to help a poor village against savage thieves.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Alienated, hopeful-filmmaker Pat Johnson''s epic story growing up in rural Illinois, falling in love, and becoming the first fan of the movie that changed everything.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A sausage strives to discover the truth about his existence.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A group of friends are going on a camping trip to celebrate graduating college. But once they enter the woods, the proverbial shit starts to hit the fan.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The story of Ray Kroc, a salesman who turned two brothers'' innovative fast food eatery, McDonald''s, into one of the biggest restaurant businesses in the world with a combination of ambition, persistence, and ruthlessness.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A young street artist in East Los Angeles is caught between his father''s obsession with lowrider car culture, his ex-felon brother and his need for self-expression.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('In the high-stakes world of political power-brokers, Elizabeth Sloane is the most sought after and formidable lobbyist in D.C. But when taking on the most powerful opponent of her career, she finds winning may come at too high a price.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A young girl finds herself in a reform school after therapy since she was blamed for the death of a young boy. At the school she finds herself drawn to a fellow student, unaware that he is an angel, and has loved her for thousands of years.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy who puts them and everything the Federation stands for to the test.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A director (Charlize Theron) of an international aid agency in Africa meets a relief aid doctor (Javier Bardem) amidst a political/social revolution, and together face tough choices ... See full summary »',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Vampire death dealer, Selene (Kate Beckinsale) fights to end the eternal war between the Lycan clan and the Vampire faction that betrayed her.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Three generations come together in the week leading up to Mother''s Day.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('An ex-hitman comes out of retirement to track down the gangsters that took everything from him.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the Dark Knight must come to terms with one of the greatest psychological tests of his ability to fight injustice.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('In the 17th century, two Portuguese Jesuit priests travel to Japan in an attempt to locate their mentor, who is rumored to have committed apostasy, and to propagate Catholicism.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn''t as helpless as he seems.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A girl in a small town forms an unlikely bond with a recently-paralyzed man she''s taking care of.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A former secretary, newly appointed as a scriptwriter for propaganda films, joins the cast and crew of a major production while the Blitz rages around them.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('The story of Chesley Sullenberger, an American pilot who became a hero after landing his damaged plane on the Hudson River in order to save the flight''s passengers and crew.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A father and son, both coroners, are pulled into a complex mystery while attempting to identify the body of a young woman, who was apparently harboring dark secrets.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
INSERT INTO Producto_info(Descripcion,precio,Disponibilidad,Imagen,categoria,link) VALUES ('A divorcee becomes entangled in a missing persons investigation that promises to send shockwaves throughout her life.',ROUND(RAND() * (50000 - 150000) + 150000, 2),'online','imagenxd',10,'linkxd');
--producto 
INSERT INTO Producto(ProductName, info) VALUES ('Guardians of the Galaxy', 1);
INSERT INTO Producto(ProductName, info) VALUES ('Prometheus', 2);
INSERT INTO Producto(ProductName, info) VALUES ('Split', 3);
INSERT INTO Producto(ProductName, info) VALUES ('Sing', 4);
INSERT INTO Producto(ProductName, info) VALUES ('Suicide Squad', 5);
INSERT INTO Producto(ProductName, info) VALUES ('The Great Wall', 6);
INSERT INTO Producto(ProductName, info) VALUES ('La La Land', 7);
INSERT INTO Producto(ProductName, info) VALUES ('Mindhorn', 8);
INSERT INTO Producto(ProductName, info) VALUES ('The Lost City of Z', 9);
INSERT INTO Producto(ProductName, info) VALUES ('Passengers', 10);
INSERT INTO Producto(ProductName, info) VALUES ('Fantastic Beasts and Where to Find Them', 11);
INSERT INTO Producto(ProductName, info) VALUES ('Hidden Figures', 12);
INSERT INTO Producto(ProductName, info) VALUES ('Rogue One', 13);
INSERT INTO Producto(ProductName, info) VALUES ('Moana', 14);
INSERT INTO Producto(ProductName, info) VALUES ('Colossal', 15);
INSERT INTO Producto(ProductName, info) VALUES ('The Secret Life of Pets', 16);
INSERT INTO Producto(ProductName, info) VALUES ('Hacksaw Ridge', 17);
INSERT INTO Producto(ProductName, info) VALUES ('Jason Bourne', 18);
INSERT INTO Producto(ProductName, info) VALUES ('Lion', 19);
INSERT INTO Producto(ProductName, info) VALUES ('Arrival', 20);
INSERT INTO Producto(ProductName, info) VALUES ('Gold', 21);
INSERT INTO Producto(ProductName, info) VALUES ('Manchester by the Sea', 22);
INSERT INTO Producto(ProductName, info) VALUES ('Hounds of Love', 23);
INSERT INTO Producto(ProductName, info) VALUES ('Trolls', 24);
INSERT INTO Producto(ProductName, info) VALUES ('Independence Day: Resurgence', 25);
INSERT INTO Producto(ProductName, info) VALUES ('Paris pieds nus', 26);
INSERT INTO Producto(ProductName, info) VALUES ('Bahubali: The Beginning', 27);
INSERT INTO Producto(ProductName, info) VALUES ('Dead Awake', 28);
INSERT INTO Producto(ProductName, info) VALUES ('Bad Moms', 29);
INSERT INTO Producto(ProductName, info) VALUES ('Assassin''s Creed', 30);
INSERT INTO Producto(ProductName, info) VALUES ('Why Him?', 31);
INSERT INTO Producto(ProductName, info) VALUES ('Nocturnal Animals', 32);
INSERT INTO Producto(ProductName, info) VALUES ('X-Men: Apocalypse', 33);
INSERT INTO Producto(ProductName, info) VALUES ('Deadpool', 34);
INSERT INTO Producto(ProductName, info) VALUES ('Resident Evil: The Final Chapter', 35);
INSERT INTO Producto(ProductName, info) VALUES ('Captain America: Civil War', 36);
INSERT INTO Producto(ProductName, info) VALUES ('Interstellar', 37);
INSERT INTO Producto(ProductName, info) VALUES ('Doctor Strange', 38);
INSERT INTO Producto(ProductName, info) VALUES ('The Magnificent Seven', 39);
INSERT INTO Producto(ProductName, info) VALUES ('5- 25- 77', 40);
INSERT INTO Producto(ProductName, info) VALUES ('Sausage Party', 41);
INSERT INTO Producto(ProductName, info) VALUES ('Moonlight', 42);
INSERT INTO Producto(ProductName, info) VALUES ('Don''t Fuck in the Woods', 43);
INSERT INTO Producto(ProductName, info) VALUES ('The Founder', 44);
INSERT INTO Producto(ProductName, info) VALUES ('Lowriders', 45);
INSERT INTO Producto(ProductName, info) VALUES ('Pirates of the Caribbean: On Stranger Tides', 46);
INSERT INTO Producto(ProductName, info) VALUES ('Miss Sloane', 47);
INSERT INTO Producto(ProductName, info) VALUES ('Fallen', 48);
INSERT INTO Producto(ProductName, info) VALUES ('Star Trek Beyond', 49);
INSERT INTO Producto(ProductName, info) VALUES ('The Last Face', 50);
INSERT INTO Producto(ProductName, info) VALUES ('Star Wars: Episode VII - The Force Awakens', 51);
INSERT INTO Producto(ProductName, info) VALUES ('Underworld: Blood Wars', 52);
INSERT INTO Producto(ProductName, info) VALUES ('Mother''s Day', 53);
INSERT INTO Producto(ProductName, info) VALUES ('John Wick', 54);
INSERT INTO Producto(ProductName, info) VALUES ('The Dark Knight', 55);
INSERT INTO Producto(ProductName, info) VALUES ('Silence', 56);
INSERT INTO Producto(ProductName, info) VALUES ('Don''t Breathe', 57);
INSERT INTO Producto(ProductName, info) VALUES ('Me Before You', 58);
INSERT INTO Producto(ProductName, info) VALUES ('Their Finest', 59);
INSERT INTO Producto(ProductName, info) VALUES ('Sully', 60);
INSERT INTO Producto(ProductName, info) VALUES ('Batman v Superman: Dawn of Justice', 61);
INSERT INTO Producto(ProductName, info) VALUES ('The Autopsy of Jane Doe', 62);
INSERT INTO Producto(ProductName, info) VALUES ('The Girl on the Train', 63);


