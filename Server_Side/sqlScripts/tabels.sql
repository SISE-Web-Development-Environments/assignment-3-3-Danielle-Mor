
CREATE TABLE [dbo].[users](
    [user_id] [UNIQUEIDENTIFIER] PRIMARY KEY NOT NULL default NEWID(),
	[username] [varchar](30) NOT NULL UNIQUE,
	[password] [varchar](300) NOT NULL,
	[firstName] [varchar](30) NOT NULL,
	[lastName] [varchar](30) NOT NULL,
	[country] [varchar](30) NOT NULL,
	[email] [varchar](30) NOT NULL,
	[profilePicture] [varchar](500) NOT NULL,
	[lastWatched] [varchar] (100),
	[favorites] [varchar] (300) 
)

CREATE TABLE [dbo].[watchedRecipes](
	[recipe_id] [int] NOT NULL,
	[username] [varchar](30) NOT NULL,
    PRIMARY KEY (username, recipe_id),	
    FOREIGN KEY (username) REFERENCES users(username)
)

CREATE TABLE [dbo].[recipes](
	[recipe_id] [UNIQUEIDENTIFIER] PRIMARY KEY NOT NULL default NEWID(),
	[username] [varchar](30) NOT NULL,
	[recipe_name] [varchar](300) NOT NULL,
	[recipeImage] [varchar](500) NOT NULL,
	[timeToPrepare] [varchar](100) NOT NULL,
    [vegetarian] [BIT] NOT NULL,
	[vegan] [BIT] NOT NULL,
	[glutenFree] [BIT] NOT NULL,
	[amountOfServings] [varchar] (100) NOT NULL,	
	[author] [varchar](40) NOT NULL,
	[relative] [varchar](40),
	[special_event] [varchar](300),
	[ingredients] [varchar](500) NOT NULL,
	[instructions] [varchar](5000) NOT NULL,
	[familyOrPersonal] [BIT] NOT NULL
)

CREATE TABLE [dbo].[recipesImages](
	[recipe_id] [UNIQUEIDENTIFIER] NOT NULL,
	[username] [varchar](30) NOT NULL,
	[step] [int] NOT NULL,
	[recipe_image] [varchar](300) NOT NULL,
	PRIMARY KEY (recipe_id, recipe_image),
	FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
)

