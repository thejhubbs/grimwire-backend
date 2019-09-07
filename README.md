BUGS
"Join" in kind-model on pantheons doesn't work


*******
SYMBOL
*******
Has One Information- Parent
Has Many Pantheons- NonDep
Has One Kind- Child
Has Many Connections- Parent

GET /api/symbols- returns an array of simple symbol objects, symbol, kind and information/images
GET /api/symbols/:id- returns the full symbol object
POST /api/symbols/- create a new symbol object, takes in information object & symbol object
PUT /api/symbols/:id- edit the symbol object, takes in changes and id
DELETE /api/symbols/:id- delete the symbol & associated information


SYMBOL Object (Simple)
  -Union INFORMATION Object
  -Embed/Union IMAGES Object
  -Union IMAGES Thumbnail
  -Union KIND Object

SYMBOL Object (Full)
  -INFORMATION
    -IMAGES
  -KIND
  -PANTHEONS
  -CONNECTIONS

Symbol
  SymbolId: Primary Key,
  KindId: foreign Key, //one-to-many, required
  OtherSpellings: string,
  MeaningText: text,
  OrderNumber: integer,
  Info: text //json object stored as text

SymbolToPantheons- which pantheons use which symbol
  SymbolPantheonId //primary key
  PantheonId //foreign Key
  SymbolId //foreign Key

******
Connection- has one information
  ConnectionId: //primary key
  MainSymbolId: //Foreign key
  ConnectedSymbolId: //Foreign key
  relationship: integer
  strength: integer

******
Kind- has many pantheons, has one information, has many symbols
  KindId //primary key
  OriginalPantheonId //foriegn key, one to one
  historyText: text
  totalNumber: integer //0 for infinite
  specificOrder: false //boolean
  extraInfo: {} //Json object stored as text

KindToPantheons- Which pantheons use which collections
  KindPantheonId //primary key
  KindId //foreign key
  PantheonId  //foreign key

******
Pantheon- has many histories, has one information
  PantheonId //primary key
  HistoryText: text,
  CultureText: text,
  StartYear: integer
  EndYear: integer

PantheonHistory
  PantheonHistoryId //primary key
  InfluencerId //foreign pantheon key
  InfluencedId //foreign pantheon key

*****
Category- has many prereqs, has many kinds, has one information
  CategoryId: "",
  SourcesText: text,

CategoryPrerequisites
  CategoryPrerequisitesId //primary Key
  CategoryId //foreign Category Key
  PrerequisiteId //foreign Category Key

CategoryToKinds- which kinds/collections are included in the category/class
  CategoryKindId //primary key
  kindId //foriegn key
  CategoryId- //foreign key

*****
Information- has many images
  Name string
  Description string
  Overview text
  //images

Images
  ForeignId //foreign key
  ForeignClass //the type it is, symbol, pantheon, etc.
  ImageId //foreign key
  ImageUrl string
  Thumbnail boolean //unique among Ids
