// Your JSON array
var jsonArray = [
  {
    precio: "2070323498",
    ProductName: "La soci\u00e9t\u00e9 de consommation",
    categoria: "Jean Baudrillard",
    "Year-Of-Publication": "1996",
    Descripcion: "Gallimard",
    link: "http://images.amazon.com/images/P/2070323498.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/2070323498.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/2070323498.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0590448307",
    ProductName: "Karen's Ducklings (Baby-Sitters Little Sister (Paperback))",
    categoria: "Ann M. Martin",
    "Year-Of-Publication": "1992",
    Descripcion: "Scholastic",
    link: "http://images.amazon.com/images/P/0590448307.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0590448307.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0590448307.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0590424955",
    ProductName: "Bsc Claudia and Great Search (Baby-Sitters Club, 33)",
    categoria: "Ann M. Martin",
    "Year-Of-Publication": "1990",
    Descripcion: "Scholastic Inc",
    link: "http://images.amazon.com/images/P/0590424955.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0590424955.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0590424955.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0553573837",
    ProductName: "Boone: A Novel Based on the Life and Times of Daniel Boone",
    categoria: "Cameron Judd",
    "Year-Of-Publication": "1995",
    Descripcion: "Bantam",
    link: "http://images.amazon.com/images/P/0553573837.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0553573837.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0553573837.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0590436457",
    ProductName: "Karen's in Love (Baby-Sitters Little Sister, 15)",
    categoria: "Ann M. Martin",
    "Year-Of-Publication": "1991",
    Descripcion: "Scholastic",
    link: "http://images.amazon.com/images/P/0590436457.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0590436457.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0590436457.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0590416677",
    ProductName: "Margaret's Moves",
    categoria: "Berniece Rabe",
    "Year-Of-Publication": "1988",
    Descripcion: "Scholastic Paperbacks (Mm)",
    link: "http://images.amazon.com/images/P/0590416677.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0590416677.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0590416677.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0316139947",
    ProductName: "Face-Off (Face Cff)",
    categoria: "Matthew F Christopher",
    "Year-Of-Publication": "1989",
    Descripcion: "Little, Brown",
    link: "http://images.amazon.com/images/P/0316139947.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0316139947.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0316139947.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0570041945",
    ProductName: "Danger at Half Moon Lake (Adventure Quest Ser)",
    categoria: "Joan Rawlins Biggar",
    "Year-Of-Publication": "1991",
    Descripcion: "Concordia Pub House",
    link: "http://images.amazon.com/images/P/0570041945.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0570041945.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0570041945.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0440476968",
    ProductName:
      "The Secret at the Polk Street School (Kids of the Polk Street School)",
    categoria: "Patricia Reilly Giff",
    "Year-Of-Publication": "1987",
    Descripcion: "Yearling Books",
    link: "http://images.amazon.com/images/P/0440476968.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0440476968.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0440476968.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0590435728",
    ProductName: "Stacey's Emergency (Baby-Sitters Club, 43)",
    categoria: "Ann M. Martin",
    "Year-Of-Publication": "1991",
    Descripcion: "Scholastic Paperbacks",
    link: "http://images.amazon.com/images/P/0590435728.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0590435728.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0590435728.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0590691821",
    ProductName: "Abby's Book (Baby-Sitters Club Portrait Collection)",
    categoria: "Ann M. Martin",
    "Year-Of-Publication": "1997",
    Descripcion: "Scholastic",
    link: "http://images.amazon.com/images/P/0590691821.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0590691821.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0590691821.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0345436733",
    ProductName: "Garfield Feeds the Kitty (Garfield (Numbered Paperback))",
    categoria: "Jim Davis",
    "Year-Of-Publication": "1999",
    Descripcion: "Ballantine Books",
    link: "http://images.amazon.com/images/P/0345436733.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0345436733.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0345436733.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0965866823",
    ProductName: "300 Incredible Things for Sports Fans on the Internet",
    categoria: "Ken Leebow",
    "Year-Of-Publication": "1999",
    Descripcion: "300Incredible.com",
    link: "http://images.amazon.com/images/P/0965866823.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0965866823.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0965866823.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0965866807",
    ProductName: "300 Incredible Things to Do on the Internet  -- Vol. I",
    categoria: "Ken Leebow",
    "Year-Of-Publication": "2000",
    Descripcion: "300incredible.com",
    link: "http://images.amazon.com/images/P/0965866807.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0965866807.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0965866807.01.LZZZZZZZ.jpg",
  },
  {
    precio: "002708230X",
    ProductName:
      "Save Sirrushany! also Agotha, Princess Gwyn, and all the fearsome beasts",
    categoria: "Betty Baker",
    "Year-Of-Publication": "1978",
    Descripcion: "Macmillan",
    link: "http://images.amazon.com/images/P/002708230X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/002708230X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/002708230X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0670894184",
    ProductName: "Back Roads",
    categoria: "Tawni O'Dell",
    "Year-Of-Publication": "2000",
    Descripcion: "Viking Books",
    link: "http://images.amazon.com/images/P/0670894184.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0670894184.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0670894184.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0373833458",
    ProductName: "Dr Texas (Heart Of Texas) (Harlequin Promo , No 4)",
    categoria: "Debbie Macomber",
    "Year-Of-Publication": "1998",
    Descripcion: "Harlequin",
    link: "http://images.amazon.com/images/P/0373833458.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0373833458.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0373833458.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0316473049",
    ProductName: "The Pugilist at Rest : Stories",
    categoria: "Thom Jones",
    "Year-Of-Publication": "1994",
    Descripcion: "Back Bay Books",
    link: "http://images.amazon.com/images/P/0316473049.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0316473049.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0316473049.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0449225925",
    ProductName: "Lady",
    categoria: "Tryon",
    "Year-Of-Publication": "1975",
    Descripcion: "Fawcett Books",
    link: "http://images.amazon.com/images/P/0449225925.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0449225925.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0449225925.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0830713042",
    ProductName:
      "Christ, B.C.: Becoming Closer Friends With the Hidden Christ of the Old Testament",
    categoria: "Bill, Myers",
    "Year-Of-Publication": "1990",
    Descripcion: "Gospel Light Pubns",
    link: "http://images.amazon.com/images/P/0830713042.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0830713042.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0830713042.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0836217691",
    ProductName:
      "Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series (Paper))",
    categoria: "Jack Canfield",
    "Year-Of-Publication": "1996",
    Descripcion: "Health Communications",
    link: "http://images.amazon.com/images/P/0836217691.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0836217691.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0836217691.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0515127213",
    ProductName: "Private Lies (Loveswept, No 556)",
    categoria: "Adrianne Lee",
    "Year-Of-Publication": "1999",
    Descripcion: "Jove Books",
    link: "http://images.amazon.com/images/P/0515127213.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0515127213.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0515127213.01.LZZZZZZZ.jpg",
  },
  {
    precio: "044023722X",
    ProductName: "Black Rose",
    categoria: "Nora Roberts",
    "Year-Of-Publication": "2001",
    Descripcion: "Dell",
    link: "http://images.amazon.com/images/P/044023722X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/044023722X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/044023722X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671519816",
    ProductName: "Julie of the Wolves (rack)",
    categoria: "Jean Craighead George",
    "Year-Of-Publication": "1993",
    Descripcion: "Pocket",
    link: "http://images.amazon.com/images/P/0671519816.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671519816.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671519816.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0312971346",
    ProductName: "Pretend You Don't See Her",
    categoria: "Mary Higgins Clark",
    "Year-Of-Publication": "1997",
    Descripcion: "St. Martin's Press",
    link: "http://images.amazon.com/images/P/0312971346.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0312971346.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0312971346.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0060087272",
    ProductName: "Girl with a Pearl Earring",
    categoria: "Tracy Chevalier",
    "Year-Of-Publication": "2001",
    Descripcion: "Dutton Books",
    link: "http://images.amazon.com/images/P/0060087272.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0060087272.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0060087272.01.LZZZZZZZ.jpg",
  },
  {
    precio: "059043389X",
    ProductName: "Claudia and the Perfect Boy (Baby-Sitters Club, 71)",
    categoria: "Ann M. Martin",
    "Year-Of-Publication": "1992",
    Descripcion: "Scholastic",
    link: "http://images.amazon.com/images/P/059043389X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/059043389X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/059043389X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0812511816",
    ProductName: "Mairelon the Magician",
    categoria: "Patricia C. Wrede",
    "Year-Of-Publication": "1992",
    Descripcion: "Tor Books",
    link: "http://images.amazon.com/images/P/0812511816.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0812511816.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0812511816.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0440184053",
    ProductName: "Pirate Latitudes",
    categoria: "Michael Crichton",
    "Year-Of-Publication": "1981",
    Descripcion: "Avon",
    link: "http://images.amazon.com/images/P/0440184053.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0440184053.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0440184053.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0875886073",
    ProductName: "Bears Guide to Earning College Degrees Nontraditionally",
    categoria: "John, Bear",
    "Year-Of-Publication": "1996",
    Descripcion: "Ten Speed Press",
    link: "http://images.amazon.com/images/P/0875886073.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0875886073.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0875886073.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0061050915",
    ProductName: "Hannibal",
    categoria: "Thomas Harris",
    "Year-Of-Publication": "1999",
    Descripcion: "HarperTorch",
    link: "http://images.amazon.com/images/P/0061050915.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0061050915.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0061050915.01.LZZZZZZZ.jpg",
  },
  {
    precio: "034540288X",
    ProductName: "The Book of Fate",
    categoria: "Brad Meltzer",
    "Year-Of-Publication": "1997",
    Descripcion: "Ballantine Books",
    link: "http://images.amazon.com/images/P/034540288X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/034540288X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/034540288X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671741192",
    ProductName: "Nora, Nora: A Novel",
    categoria: "Anne Rivers Siddons",
    "Year-Of-Publication": "2000",
    Descripcion: "Simon & Schuster",
    link: "http://images.amazon.com/images/P/0671741192.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671741192.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671741192.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0394588169",
    ProductName: "Out of Sight",
    categoria: "Elmore Leonard",
    "Year-Of-Publication": "1996",
    Descripcion: "Delacorte Press",
    link: "http://images.amazon.com/images/P/0394588169.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0394588169.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0394588169.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0061092207",
    ProductName:
      "People of the Silence: A Novel of North America's Forgotten Past",
    categoria: "Kathleen O'Neal Gear",
    "Year-Of-Publication": "1998",
    Descripcion: "HarperTorch",
    link: "http://images.amazon.com/images/P/0061092207.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0061092207.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0061092207.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0374517065",
    ProductName: "No Place to Hide: A Novel of the Vietnam War",
    categoria: "Murray,  David",
    "Year-Of-Publication": "1993",
    Descripcion: "Farrar, Straus and Giroux",
    link: "http://images.amazon.com/images/P/0374517065.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0374517065.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0374517065.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0399133143",
    ProductName: "Love Song",
    categoria: "Larson,  Carla",
    "Year-Of-Publication": "1984",
    Descripcion: "Putnam Publishing Group",
    link: "http://images.amazon.com/images/P/0399133143.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0399133143.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0399133143.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0446603090",
    ProductName: "A Night Without Armor : Poems",
    categoria: "Jewel",
    "Year-Of-Publication": "1998",
    Descripcion: "Warner Books",
    link: "http://images.amazon.com/images/P/0446603090.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0446603090.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0446603090.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671004536",
    ProductName: "Imzadi II: Triangle (Star Trek Next Generation (Unnumbered))",
    categoria: "Peter David",
    "Year-Of-Publication": "1999",
    Descripcion: "Star Trek",
    link: "http://images.amazon.com/images/P/0671004536.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671004536.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671004536.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0515121851",
    ProductName: "White Light",
    categoria: "Cait, London",
    "Year-Of-Publication": "1998",
    Descripcion: "Jove",
    link: "http://images.amazon.com/images/P/0515121851.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0515121851.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0515121851.01.LZZZZZZZ.jpg",
  },
  {
    precio: "006440188X",
    ProductName: "Racers Encyclopedia of Metals, Fibers and Materials",
    categoria: "Thau",
    "Year-Of-Publication": "2000",
    Descripcion: "HarperTrophy",
    link: "http://images.amazon.com/images/P/006440188X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/006440188X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/006440188X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0446600415",
    ProductName: "Summer Sisters",
    categoria: "Judy Blume",
    "Year-Of-Publication": "1999",
    Descripcion: "Warner Books",
    link: "http://images.amazon.com/images/P/0446600415.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0446600415.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0446600415.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451166892",
    ProductName: "JURASSIC PARK",
    categoria: "MICHAEL CRICHTON",
    "Year-Of-Publication": "1991",
    Descripcion: "SIGNET BOOK",
    link: "http://images.amazon.com/images/P/0451166892.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451166892.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451166892.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671021001",
    ProductName: "Phantoms",
    categoria: "Dean R. Koontz",
    "Year-Of-Publication": "1999",
    Descripcion: "Pocket",
    link: "http://images.amazon.com/images/P/0671021001.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671021001.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671021001.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451167317",
    ProductName: "Timeline",
    categoria: "Michael Crichton",
    "Year-Of-Publication": "2000",
    Descripcion: "Signet Book",
    link: "http://images.amazon.com/images/P/0451167317.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451167317.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451167317.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0440220602",
    ProductName: "Moonlight Becomes You",
    categoria: "Mary Higgins Clark",
    "Year-Of-Publication": "1997",
    Descripcion: "Dell Publishing Company",
    link: "http://images.amazon.com/images/P/0440220602.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0440220602.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0440220602.01.LZZZZZZZ.jpg",
  },
  {
    precio: "067166865X",
    ProductName: "Patriot Games (Jack Ryan Novels)",
    categoria: "Tom Clancy",
    "Year-Of-Publication": "1988",
    Descripcion: "Berkley",
    link: "http://images.amazon.com/images/P/067166865X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/067166865X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/067166865X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451137965",
    ProductName: "Cujo",
    categoria: "Stephen King",
    "Year-Of-Publication": "1982",
    Descripcion: "Signet",
    link: "http://images.amazon.com/images/P/0451137965.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451137965.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451137965.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451191153",
    ProductName: "The Two Dead Girls (Green Mile Series)",
    categoria: "Stephen King",
    "Year-Of-Publication": "1996",
    Descripcion: "Signet Book",
    link: "http://images.amazon.com/images/P/0451191153.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451191153.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451191153.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451167538",
    ProductName: "The Bad Place",
    categoria: "Dean R. Koontz",
    "Year-Of-Publication": "1997",
    Descripcion: "Signet",
    link: "http://images.amazon.com/images/P/0451167538.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451167538.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451167538.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451167716",
    ProductName: "Lightning",
    categoria: "Dean R. Koontz",
    "Year-Of-Publication": "1996",
    Descripcion: "Signet",
    link: "http://images.amazon.com/images/P/0451167716.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451167716.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451167716.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0375708221",
    ProductName: "Girl in Hyacinth Blue",
    categoria: "Susan Vreeland",
    "Year-Of-Publication": "1999",
    Descripcion: "Vintage Books USA",
    link: "http://images.amazon.com/images/P/0375708221.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0375708221.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0375708221.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0375702703",
    ProductName: "Snow Falling on Cedars",
    categoria: "David Guterson",
    "Year-Of-Publication": "1995",
    Descripcion: "Vintage Books USA",
    link: "http://images.amazon.com/images/P/0375702703.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0375702703.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0375702703.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671758895",
    ProductName: "The Temple of My Familiar",
    categoria: "Alice Walker",
    "Year-Of-Publication": "1990",
    Descripcion: "Pocket",
    link: "http://images.amazon.com/images/P/0671758895.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671758895.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671758895.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0679734503",
    ProductName: "The Book of Ruth (Oprah's Book Club (Paperback))",
    categoria: "Jane Hamilton",
    "Year-Of-Publication": "1990",
    Descripcion: "Vintage",
    link: "http://images.amazon.com/images/P/0679734503.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0679734503.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0679734503.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0380727501",
    ProductName: "The Joy Luck Club",
    categoria: "Amy Tan",
    "Year-Of-Publication": "1994",
    Descripcion: "HarperCollins",
    link: "http://images.amazon.com/images/P/0380727501.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0380727501.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0380727501.01.LZZZZZZZ.jpg",
  },
  {
    precio: "051513287X",
    ProductName: "Death Du Jour",
    categoria: "Kathy Reichs",
    "Year-Of-Publication": "2000",
    Descripcion: "Jove Books",
    link: "http://images.amazon.com/images/P/051513287X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/051513287X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/051513287X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "044021145X",
    ProductName: "The Firm",
    categoria: "John Grisham",
    "Year-Of-Publication": "1992",
    Descripcion: "Bantam",
    link: "http://images.amazon.com/images/P/044021145X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/044021145X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/044021145X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0553279378",
    ProductName: "The Cider House Rules",
    categoria: "John Irving",
    "Year-Of-Publication": "1999",
    Descripcion: "Bantam",
    link: "http://images.amazon.com/images/P/0553279378.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0553279378.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0553279378.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0312966098",
    ProductName: "On the Street Where You Live",
    categoria: "Mary Higgins Clark",
    "Year-Of-Publication": "2002",
    Descripcion: "St. Martin's Press",
    link: "http://images.amazon.com/images/P/0312966098.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0312966098.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0312966098.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0061097314",
    ProductName: "Open Season",
    categoria: "Linda Howard",
    "Year-Of-Publication": "2002",
    Descripcion: "Avon",
    link: "http://images.amazon.com/images/P/0061097314.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0061097314.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0061097314.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671776134",
    ProductName: "Contact",
    categoria: "Carl Sagan",
    "Year-Of-Publication": "1997",
    Descripcion: "Pocket",
    link: "http://images.amazon.com/images/P/0671776134.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671776134.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671776134.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0553582747",
    ProductName: "Candles Burning",
    categoria: "Tabitha King",
    "Year-Of-Publication": "2006",
    Descripcion: "Bantam",
    link: "http://images.amazon.com/images/P/0553582747.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0553582747.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0553582747.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671745988",
    ProductName: "The Remnant: On the Brink of Armageddon (Left Behind No. 10)",
    categoria: "Tim LaHaye",
    "Year-Of-Publication": "2002",
    Descripcion: "Tyndale House Descripcions",
    link: "http://images.amazon.com/images/P/0671745988.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671745988.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671745988.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0786011153",
    ProductName: "The Leper",
    categoria: "Steve Thayer",
    "Year-Of-Publication": "2002",
    Descripcion: "Pinnacle Books",
    link: "http://images.amazon.com/images/P/0786011153.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0786011153.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0786011153.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0671867174",
    ProductName: "Rising Sun",
    categoria: "Michael Crichton",
    "Year-Of-Publication": "1993",
    Descripcion: "Ivy Books",
    link: "http://images.amazon.com/images/P/0671867174.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0671867174.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0671867174.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0425099146",
    ProductName: "The Gunslinger (The Dark Tower, Book 1)",
    categoria: "Stephen King",
    "Year-Of-Publication": "1988",
    Descripcion: "Berkley",
    link: "http://images.amazon.com/images/P/0425099146.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0425099146.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0425099146.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0451191145",
    ProductName: "A Thousand Acres",
    categoria: "Jane Smiley",
    "Year-Of-Publication": "1992",
    Descripcion: "Signet Book",
    link: "http://images.amazon.com/images/P/0451191145.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0451191145.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0451191145.01.LZZZZZZZ.jpg",
  },
  {
    precio: "055321313X",
    ProductName: "The Count of Monte Cristo (Bantam Classics)",
    categoria: "Alexandre Dumas",
    "Year-Of-Publication": "1984",
    Descripcion: "Bantam Classics",
    link: "http://images.amazon.com/images/P/055321313X.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/055321313X.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/055321313X.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0345342968",
    ProductName: "The Hitchhiker's Guide to the Galaxy",
    categoria: "Douglas Adams",
    "Year-Of-Publication": "1984",
    Descripcion: "Del Rey",
    link: "http://images.amazon.com/images/P/0345342968.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0345342968.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0345342968.01.LZZZZZZZ.jpg",
  },
  {
    precio: "0316666343",
    ProductName: "The Secret Life of Bees",
    categoria: "Sue Monk Kidd",
    "Year-Of-Publication": "2002",
    Descripcion: "Viking Books",
    link: "http://images.amazon.com/images/P/0316666343.01.THUMBZZZ.jpg",
    Imagen: "http://images.amazon.com/images/P/0316666343.01.MZZZZZZZ.jpg",
    "Image-URL-L":
      "http://images.amazon.com/images/P/0316666343.01.LZZZZZZZ.jpg",
  },
];

// Loop through the array and delete the "Image-URL-L" attribute from each object
for (var i = 0; i < jsonArray.length; i++) {
  delete jsonArray[i]["Image-URL-L"];
  delete jsonArray[i]["Year-Of-Publication"];
}
var jsonString = JSON.stringify(jsonArray, null, 2).replace(
  /"([^"]+)":/g,
  '"$1":'
);
// The "Image-URL-L" attribute has been removed from each object
console.log(jsonString);
