DROP TABLE dbo.watchedRecipes
DROP TABLE dbo.recipesImages
DROP TABLE dbo.recipes
DROP TABLE dbo.users


/* 1-Mor-personal */
INSERT INTO dbo.recipes VALUES (default, 'namor', 'Creamy Mushroom Pasta', 'https://i.pinimg.com/originals/13/70/b3/1370b37c9503be5794b2e52f5dbcfc90.jpg', '30 Minutes', 1, 0, 0, 4, 'Mor Nahum',
'','','[					
"160g fettuccine or linguine",
"2 tbsp (30g) unsalted butter",
"1/2 tbsp olive oil", 
"300g mushrooms , sliced",
"2 garlic cloves , finely chopped",
"1/2 cup (125 ml) white wine , dry",
"3/4 cup (185ml) cream , heavy",
"1/3 cup (30g) parmesan , finely grated",
"1/2 tsp salt and pepper , each"
]','{
 "1" : "Cook pasta in salted water for 1 minute less than time per packet (start this mid mushroom cook). Just before draining, scoop out 1 cup cooking water, then drain.",
 "2" : "Melt butter and heat oil in a large skillet over high heat.",
 "3" : "Add mushrooms and cook, stirring regularly. When they start to sweat, add a pinch of salt and pepper.", 
 "4" : "When pretty golden (about 4 - 5 minutes), add garlic and cook until garlic is golden and mushroom is golden.",
 "5" : "Stand back and add wine (it will be steamy!!), stir, scraping the bottom of the skillet. Simmer rapidly until wine is mostly evaporated and winey smell is gone.",
 "6" : "Add cream, parmesan, salt and pepper. Stir to dissolve parmesan and simmer for 2 minutes, stirring regularly.",
 "7" : "Transfer pasta into sauce, toss for 1 - 2 minutes until sauce thickens and coats pasta. If sauce gets too thick (rather than slick, see video), add a splash of reserved pasta cooking water.",
 "8" : "Garnish with parsley and serve immediately with extra parmesan."
        }', 1); 


/* 2-Mor-personal */
INSERT INTO dbo.recipes VALUES (default, 'namor', 'Stuffed Peppers', 'https://img.mako.co.il/2017/11/12/IMG_0046_i.jpg', '1.5 Hours', 0, 0, 1, 5,'Mor Nahum',
'','','[					
"1/2 cup uncooked rice",
"2 tbsp extra-virgin olive oil, plus more for drizzling",
"1 medium onion, chopped",
"1 tbsp tomato paste",
"3 cloves garlic, minced",
"1 lb ground beef",
"1 (14.5-oz.) canned diced tomatoes",
"1 tsp dried oregano",
"salt",
"Freshly ground black pepper",
"6 bell peppers, tops and cores removed",
"Freshly chopped parsley, for garnish"
]','{
 "1" : "Preheat oven to 200 degrees.",
 "2" : ""In a small saucepan, prepare rice according to package instructions.",
 "3" : "In a large skillet over medium heat, heat oil. Cook onion until soft, about 5 minutes.", 
 "4" : "Stir in tomato paste and garlic and cook until fragrant, about 1 minute more.",
 "5" : "Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.", 
 "6" : "Return beef mixture to skillet, then stir in cooked rice and diced tomatoes. Season with oregano, salt, and pepper. Let simmer until liquid has reduced slightly, about 5 minutes.",
 "7" : "Place peppers cut side-up in a 9"-x-13" baking dish and drizzle with oil. Spoon beef mixture into each pepper, then cover baking dish with foil.",
 "8" : "Bake until peppers are tender, about 35 minutes. Uncover and bake for 10 minutes more.",
 "9" : "Garnish with parsley before serving."
        }', 1); 

 /* 3-Mor-personal */
INSERT INTO dbo.recipes VALUES (default, 'namor', 'Asian Beef Ramen Noodles', 'https://i.ytimg.com/vi/KM7VeayxdBk/maxresdefault.jpg', '20 Minutes', 0,0,0,2,'Mor Nahum',
'','','[					
"2 packets ramen or other instant noodles , discard seasoning",
"1 tsp oil",
"2 tsp sesame oil (or more oil)",
"2 garlic cloves , minced",
"1/2 onion , sliced",
"200g beef mince (ground beef)",
"1 1/4 cups (315 ml) water, plus more as needed",
"Big handful bean sprouts",
"1 tbsp dark soy sauce",
"Finely sliced green onion / shallots",
"Sesame seeds"
]','{
 "1" : "Mix Sauce.",
 "2" : "Heat oils in a medium skillet over high heat. Add onion and garlic, cook for 1 1/2 minutes until starting to go golden.",
 "3" : "Add beef and cook, breaking it up as you go, until it changes from pink to light brown.", 
 "4" : "Add Sauce and cook for 2 to 3 minutes until well caramelised.",
 "5" : "Push beef to the side to make enough space for the noodles. Add water, place noodles in water.",
 "6" : "Leave for 45 seconds then turn.",
 "7" : "Leave for 30 seconds, then untangle the noodles, then toss through the beef.",
 "8" : "Add beansprouts, toss for 1 minute until sauce reduces to coat the noodles and the noodles are cooked. ",
 "9" : "Serve immediately, garnished with green onions and sesame seeds."
        }', 1); 


/* 1-Mor-family */
INSERT INTO dbo.recipes VALUES ('071443e1-0e11-4187-862e-682db655991a', 'namor', 'Stuffed Grape Leaves', 'https://medias.hashulchan.co.il/www/uploads/2019/01/%D7%93%D7%95%D7%9C%D7%9E%D7%93%D7%A1-%D7%93%D7%9F-%D7%A4%D7%A8%D7%A5-%D7%9E%D7%AA%D7%95%D7%9A-%D7%94%D7%A1%D7%A4%D7%A8-%D7%92%D7%A8%D7%A7%D7%95-%D7%9E%D7%98%D7%91%D7%97-%D7%99%D7%95%D7%95%D7%A0%D7%99-600x600.jpg', '2 Hours', 1,1,1,30,'Simha Nahum',
'Grandmother','Passover','[					
"2 cups uncooked long-grain white rice",
"1 large onion, chopped",
"½ cup chopped fresh dill",
"½ cup chopped fresh mint leaves",
"2 quarts chicken broth",
"¾ cup fresh lemon juice, divided",
"60 eaches grape leaves, drained and rinsed",
"hot water as needed",
"1 cup olive oil"
]','{
 "1" : "In a large saucepan over medium-high heat, saute the rice, onion, dill, and mint for about 5 minutes, or until onion is soft.",
 "2" : "Pour in 1 quart of broth, reduce heat to low and simmer for another 10 to 15 minutes, or until rice is almost cooked. Stir in 1/2 of lemon juice and remove from heat.",
 "3" : "Take one leaf, shiny side down, and place 1 teaspoon of the rice mixture at the bottom (stem) end of the leaf. Fold both sides of the leaf towards the center, roll up from the broad bottom to the top, and place into a 4-quart pot.", 
 "4" : "Repeat with all leaves, leaving no gaps as leaves are placed in pot (to prevent from opening while cooking). ",
 "5" : "Sprinkle with remaining lemon juice and with olive oil.",
 "6" : "Pour chicken broth over all to cover grape leaves. ",
 "7" : "Cover pot and simmer for about 1 hour (do not boil, because this will make the stuffing burst out of the leaves). ",
 "8" : "Remove from heat, remove cover and let cool for 1/2 hour. Transfer to serving dish and serve."
        }', 0); 

/* Stuffed Grape Leaves images */
INSERT INTO dbo.recipesImages VALUES('071443e1-0e11-4187-862e-682db655991a','namor',3,'https://www.americangarden.us/wp-content/uploads/2017/06/How-to-roll-grape-leaves.jpg')

 /* 2-Mor-family */
INSERT INTO dbo.recipes VALUES ('9f898eaf-6790-47b2-9475-d123f56b55c8', 'namor', 'Sfenj', 'https://shimrit.co.il/wp-content/uploads/2017/07/%D7%A1%D7%A4%D7%99%D7%A0%D7%922.jpg', '40 Minutes', 1, 0, 0, 10, 'Simha Nahum',
'Grandmother','Hanukkah','[					
"2 teaspoons yeast",
"1 1/4 cups warm water",
"3 cups all-purpose flour",
"1 teaspoon salt",
"Vegetable oil for frying",
"Optional: Granulated sugar or powdered sugar"
]','{
 "1" : "In a small bowl, dissolve the yeast in 1/4 cup warm water and set aside to proof for 10 or 15 minutes.",
 "2" : "In a large bowl, combine the flour with the salt and 1 cup warm water. Add the yeast mixture and stir vigorously with your hand or a heavy wooden spoon until smooth. The dough should be too sticky to knead or shape, almost like a thick batter.",
 "3" : "Cover the bowl with a towel and leave the dough to rise for 3 to 4 hours, until double or triple in bulk.", 
 "4" : "In a wide, deep pot, heat 2 to 3 inches of vegetable oil over medium heat until hot.",
 "5" : "Set out a bowl of water. Dip your hands in the water, then pull off a piece of dough about the size of a small plum. Use your fingers to make a hole in the ball of dough, stretch the hole wide to make a ring, and place the dough in the hot oil.",
 "6" : "Repeat with additional portions of dough, until you have added as many sfenj as will fit comfortably in your pot; do not overcrowd. Wet your hands as necessary to keep the dough from sticking as you work with it.",
 "7" : "Fry the sfenj until golden brown, turning once or twice. Remove the cooked sfenj to a plate lined with paper towels to drain.",
 "8" : "Repeat shaping and frying until you have used up all the dough.",
 "9" : "If desired, finish the hot sfenj by dipping in granulated sugar or by dusting with powdered sugar.",
 "10" : "Serve the sfenj hot or warm; they lose their texture and appeal when cold. Sfenj will not stay fresh very long at room temperature; its best to freeze leftover sfenj and then reheat in the oven when needed."
        }', 0); 

/* Sfenj images*/
INSERT INTO dbo.recipesImages VALUES('9f898eaf-6790-47b2-9475-d123f56b55c8','namor',5,'https://i8lnb3omswo28b2392u76oqf-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/%D7%91%D7%91.jpg')
INSERT INTO dbo.recipesImages VALUES('9f898eaf-6790-47b2-9475-d123f56b55c8','namor',7,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkejJv2gwLD9m99jBTL1jCTfsJY2tCGuyNdGbZudeo-ho3w_Tp&usqp=CAU')

/* 3-Mor-family */
INSERT INTO dbo.recipes VALUES ('ab59bf42-9c45-42f7-92ad-dc9c33cc39fc', 'namor', 'MOROCCAN EGGPLANT SALAD', 'https://myrecipelog.files.wordpress.com/2011/08/03.jpg', '60 Minutes', 1, 1, 1, 5,'Simha Nahum',
'Grandmother','Independence Day','[					
"1 large eggplant (peeled and chopped*)",
"4 large tomatoes (peeled, seeded and chopped)",
"3 cloves of garlic (finely chopped or pressed)",
"1/3 cup chopped fresh cilantro and parsley (mixed)",
"1 tablespoon paprika",
"1 tablespoon cumin",
"1 1/2 teaspoons salt",
"1/8 teaspoon cayenne pepper (optional)",
"1/4 cup olive oil",
"1/3 cup water",
"Small wedge of lemon (optional)"
]','{
 "1" : "Mix all ingredients in a large, deep skillet or pot.", 
 "2" : "Cover and simmer over medium to medium-high heat for 30 minutes, stirring occasionally. Adjust the heat if necessary to avoid burning the zaalouk.",
 "3" : "Use a spoon or potato masher to crush and blend the tomatoes and eggplant. If you like, a small wedge of lemon can be added to the pan at this time.", 
 "4" : "Continue simmering, uncovered, for 10 minutes or until the liquids are reduced and the zaalouk can be stirred into a heap in the center of the pan.",
 "5" : "Serve warm or cold with crusty bread."
       }', 0); 

/* MOROCCAN EGGPLANT SALAD*/
INSERT INTO dbo.recipesImages VALUES('ab59bf42-9c45-42f7-92ad-dc9c33cc39fc','namor',2,'https://img.mako.co.il/2014/10/14/177345443_c.jpg')




/* 1-Danielle-personal */
INSERT INTO dbo.recipes VALUES (default, 'lavida', 'Cheesy Eggplant Roll-Ups', 'https://i.ytimg.com/vi/ageCv-DIBeE/maxresdefault.jpg', '70 Minutes', 1,0,1,14,'Danielle Lavi',
'','','[					
"2 eggplants",
"2 cups ricotta cheese (500 g)",
"1 cup shredded mozzarella cheese (100 g)",
"½ cup shredded parmesan cheese (55 g)",
"¼ cup fresh basil (10 g), chopped",
"1 egg",
"salt",
"pepper",
"1 cup marinara sauce (260 g)"
]','{
 "1" : "Preheat oven to 350ºF (175ºC).",
 "2" : "Slice the ends the eggplants and slice them into ¼ -inch (½ cm) slices and lay them out on a baking sheet covered in parchment paper.",
 "3" : "Season with a pinch of salt on both sides of the eggplant slices and let them sweat for 20 minutes, then dry them with a paper towel. Once dried; add a pinch of pepper.",
 "4" : "Bake for 20 minutes, or until soft.",
 "5" : "Meanwhile, in a medium-size bowl, mix ricotta cheese, mozzarella cheese, parmesan cheese, basil, and egg.",
 "6" : "Remove eggplant slices from the oven and turn oven to 400ºF (200ºC).",
 "7" : "Spoon about 2 tablespoons of the mixture onto eggplant slice then roll it up, repeating for all slices.",
 "8" : "In a 11x17-inch (28 x 43cm) baking sheet, pour ½ of the marinara sauce, then add all the roll-ups seam down. Pour remaining ½ of marinara sauce, and top with basil and parmesan.",
 "9" : "Bake for 25 minutes, or until cheese is melted and golden brown."
        }', 1); 



/* 2-Danielle-personal */
INSERT INTO dbo.recipes VALUES (default, 'lavida', 'Oven-Baked Teriyaki Salmon', 'https://tipbuzz.com/wp-content/uploads/Baked-Teriyaki-Salmon-with-Green-Beans-and-Carrots.jpg', '1.5 Hours', 0,0,1,4 ,'Danielle Lavi',
'','','[					
"4 skinless salmon fillets",
"1 green onion, chopped (optional)",
"1/2 tsp sesame seeds, for serving (optional)",
"6 - 8 Tbsp low-sodium soy sauce, depending on how salty you like it",
"8 Tbsp water",
"3 Tbsp honey",
"2 Tbsp of brown sugar",
"1 Tbsp minced garlic (3 cloves)",
"1 Tbsp minced peeled fresh ginger",
"1 1/2 Tbsp fresh lemon juice",
"1 Tbsp cornstarch",
]','{
 "1" : "Preheat oven to 200 degrees and spray a baking dish* with non-stick cooking spray.",
 "2" : "In a small saucepan whisk together low-sodium soy sauce, 6 Tbsp water, honey, brown sugar, garlic, ginger and lemon juice and bring mixture to a light boil over medium heat.",
 "3" : "Whisk together cornstarch with remaining 2 Tbsp water, then add to sauce mixture in saucepan.", 
 "4" : "Let mixture boil, whisking constantly, for 1 minute. Remove from heat and let cool slightly.",
 "5" : "Place salmon in baking dish then pour teriyaki sauce evenly over salmon (I also like to lift the fillets up so the sauce runs right under). ",
 "6" : "Bake in preheated oven 12 - 15 minutes until salmon has cooked through (cooked time will vary depending on thickness of salmon). ",
 "7" : "Serve warm topped with some of the teriyaki sauce from the baking dish (use excess sauce for steamed asparagus or broccoli on the side) and chopped green onions and sesame seeds."
        }', 1); 



/* 3-Danielle-personal */
INSERT INTO dbo.recipes VALUES (default, 'lavida', 'Honey Garlic Chicken Breast', 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/04/1453741383-delish-honey-chicken.jpg','12 Minutes',0,0,1,2,'Danielle Lavi',
'','','[					
"500g chicken breast , boneless and skinless (2 pieces)",
"Salt and pepper",
"1/4 cup (60g) flour",
"3.5 tbsp (50g) coconut oil (or 2 1/2 tbsp olive oil)",
"2 garlic cloves , minced",
"1.5 tbsp apple cider vinegar (or white or other clear vinegar)",
"1 tbsp soy sauce , light or all purpose",
"1/3 cup (90g) honey (or maple syrup)"
]','{
 "1" : "Cut the breasts in half horizontally to create 4 steaks in total. Sprinkle each side with salt and pepper.",
 "2" : "Place flour in a shallow dish. Coat chicken in flour and shake off excess.",
 "3" : "Melt most of the coconut oil in a large skillet over high heat - hold back about 1 tsp for later.", 
 "4" : "Place chicken in skillet and cook for 2 - 3 minutes until golden. Turn and cook the other side for 1 minute.",
 "5" : "Turn heat down slightly to medium high.",
 "6" : "Make a bit of room in the pan and add garlic and top with remaining dab of coconut oil. Stir garlic briefly once coconut oil melts.",
 "7" : "Add vinegar, soy sauce and honey. Stir / shake pan to combine. Bring sauce to simmer, then simmer for 1 minute or until slightly thickened.",
 "8" : "Turn chicken to coat in sauce. If the sauce gets too thick, add a touch of water and stir.",
 "9" : "Remove from stove immediately. Place chicken on plates and drizzle over remaining sauce."
        }', 1); 



/* 1-Danielle-family */
INSERT INTO dbo.recipes VALUES ('2f814a75-e6a3-4dc9-b76c-b47dbbe3ec70', 'lavida', 'Mufleta', 'https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/04/14103526/281-Custom.jpg', '60 Minutes', 0,0,0,13,'Chana Abuatzira',
'Grandmother','Mimuna','[					
"1½ cups warm water",
"1 packet (2¼ tsp) active dry yeast",
"1 tsp sugar",
"4 cups all purpose flour, plus more if needed",
"1 tsp kosher salt",
"Oil as needed (sunflower, canola, or a neutral tasting oil)"
]','{
 "1" : "Combine the yeast and sugar with the warm water, make sure the water is not too hot or too cold, or your yeast won’t properly activate. Allow the yeast to get foamy and bubbly, about five minutes.",
 "2" : "Combine the flour and salt together.",
 "3" : "Make a well in the flour, and then add the water and yeast mixture. Using your hands, incorporate the water into the flour. The amount of flour you need can depend on the brand of the flour as well as the humidity/temperature in your kitchen. You want the dough to be slightly tacky to the touch, but it shouldn’t stick to your hands. If you find your dough is too sticky, add a little more flour as needed.", 
 "4" : "Once the dough is formed into a ball, knead the dough until smooth and elastic, about five minutes.",
 "5" : "Lightly grease the bowl with oil, and then place the dough into the bowl. Cover the bowl with a damp, clean dish towel and allow to rise for 40 minutes. Some folks form their dough into balls before letting it rise, and some prefer to do it after.",
 "6" : "Generously drizzle a baking sheet or pyrex with more oil. Pull off golfball-sized rounds of dough and form them into balls. Roll them in the oil and then let them rest for about 5 minutes.",
 "7" : "Form one round of dough into a paper-thin circle, about 10” in diameter. You want each layer to be as thin as possible, and you can do this by flattening and pressing the dough into a circle shape with your fingers, or with the help of a rolling pin. Don’t worry if a few small holes pop up here and there.",
 "8" : "Over medium heat, add a few teaspoons of oil to a large nonstick or castiron skillet. Place the first round of formed dough into the skillet. Turn down the heat slightly at this point and cook the mufleta over medium low, so that it doesn’t burn. Allow the mufleta to turn golden brown, and then flip it onto the other side. This is the only layer that will get browned on both sides.",
 "9" : "While the first side is browning, form the next layer of dough. Once you flip the first layer of the mufleta over, place the raw formed dough round on top of that cooked layer. Form another round of dough while the next layer is browning.",
 "10" : "Once golden brown, flip again and place another layer of raw dough on the top browned side of the mufleta while the bottom cooks. You can add a little more oil to the pan after each flip. Continue this process for as long as you can manage to flip the pile of layers. If the stack gets too big to flip, remove the entire stack, and begin a new one.",
 "11" : "Serve warm with melted butter and honey, or your favorite toppings."
        }', 0); 

/*mufleta-images*/
INSERT INTO dbo.recipesImages VALUES('2f814a75-e6a3-4dc9-b76c-b47dbbe3ec70','lavida',6,'https://www.myjewishlearning.com/wp-content/uploads/2018/04/mufleta-dough.jpg')
INSERT INTO dbo.recipesImages VALUES('2f814a75-e6a3-4dc9-b76c-b47dbbe3ec70','lavida',7,'https://www.myjewishlearning.com/wp-content/uploads/2018/04/mufleta-rolled.jpg')
INSERT INTO dbo.recipesImages VALUES('2f814a75-e6a3-4dc9-b76c-b47dbbe3ec70','lavida',8,'https://st1.foodsd.co.il/Images/Recipes/xxl/Recipe-3657-uKQbwCAM1UXdCYKm.jpg')



/* 2-Danielle-family */
INSERT INTO dbo.recipes VALUES ('3e08c244-651f-4183-bc85-176d98bec3b3', 'lavida', 'Kitchri', 'https://i.ytimg.com/vi/TFICrQOjruo/maxresdefault.jpg', '1 Hour', 0, 0, 0, 5, 'Berta Lavi',
'Grandmother', 'Weekends And Holidays','[					
"1.5 cups of basmati rice",
"3 cups water or chicken broth",
"4-6 cloves garlic, crushed",
"3 tablespoons tomato paste",
"1 large (540 mL) can of chickpeas.",
"0.5 teaspoon salt",
"0.5 teaspoon pepper",
"3 tablespoons cooking oil, vegetable, canola or sunflower.",
"3 tablespoons olive oil, preferably Middle Eastern and extra virgin"
]','{
 "1" : "Rinse rice, drain well in colander and set aside in a bowl.",
 "2" : "Dissolve 3 tablespoons tomato paste and the salt in the water (or chicken broth).",
 "3" : "Drain can of chickpeas in colander and set aside", 
 "4" : "Heat cooking oil in pot and place in pepper. Fry for 20 seconds.",
 "5" : "Add crushed garlic to oil and fry for 20 seconds. Do not burn!",
 "6" : "Add rice to oil and mix well for 1-2 minutes. Add more oil if needed.",
 "7" : "Add the tomato paste/salt/water (or chicken broth) mixture to the pot and stir well.",
 "8" : "Add chickpeas to the pot.",
 "9" : "Once it boils, turn down heat to medium/half (or lower if necessary).",
 "10" : "Set timer to 15 minutes.",
 "11" : "Turn off and pour contents of pot into separate large bowl.",
 "13" : "Add olive oil to bowl and mix well.",
 "14" : "Serve with or without yogurt on top."
        }', 0); 

INSERT INTO dbo.recipesImages VALUES('3e08c244-651f-4183-bc85-176d98bec3b3','lavida',6,'https://dafniamit.files.wordpress.com/2012/03/img_4645.jpg')

/* 3-Danielle-family */
INSERT INTO dbo.recipes VALUES ('267fb626-a72f-4187-a48c-985aa1a82a77', 'lavida', 'Zangula', 'https://i.ytimg.com/vi/WfDB-XhmEIk/maxresdefault.jpg', '2 Hours', 1,0,0, 15 ,'Berta Lavi',
'Grandmother','Weekends And Holidays','[					
"1 1/2 cups flour",
"1/4 tsp. salt",
"2 pkg. dry yeast",
"1 1/4 cups warm water (98.6-105 degrees)",
"2 cups corn oil",
"Plastic squirt bottle",
"1 cup sugar",
"3/4 cup water",
"Juice of 1/2 lemon",
"1 Tbsp. rosewater"
]','{
 "1" : "Combine flour and salt.",
 "2" : "In another bowl, dissolve yeast in 1/2 cup warm water for about five minutes, until proofed (foamy). Add to flour. Slowly add remaining water to form a creamy, sticky dough.",
 "3" : "Coat a large bowl with 1 Tbsp. oil. Cover with plastic wrap for 30 minutes.", 
 "4" : "Prepare syrup: Combine sugar and water in a saucepan. At medium heat, stir until sugar dissolves and mixture thickens. Add lemon juice and rosewater, cooking one minute. Cool. ",
 "5" : "Place dough into squirt bottle. In a large frying pan, heat remaining oil to 400 degrees. Squeeze dough into oil in circles and swirls. Turning once, fry until both sides are golden brown.",
 "6" : "Remove to paper towels. When cool enough to handle, dip into syrup and serve."
        }', 0); 


INSERT INTO dbo.recipesImages VALUES('267fb626-a72f-4187-a48c-985aa1a82a77','lavida',5,'https://pascalpr.co.il/wp-content/uploads/%D7%96%D7%A0%D7%92%D7%95%D7%9C%D7%942.png')
INSERT INTO dbo.recipesImages VALUES('267fb626-a72f-4187-a48c-985aa1a82a77','lavida',6,'https://www.pascalpr.co.il/wp-content/uploads/%D7%96%D7%A0%D7%92%D7%95%D7%9C%D7%94-3.png')
