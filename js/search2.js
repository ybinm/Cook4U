var recipe_info = [
    {
        name: "Shrimp Potato Pancake",
        pic: ["images/spp0.jpg", "images/spp1.jpg", "images/spp2.jpg", "images/spp3.jpg", "images/spp4.jpg"],
        main_ingredient: ["shrimp", "potato", "oil"],
        ingredient: ["leek", "salt"],
        tool: ["stove"],
        time: 20,
        difficulty: "★★",
        description: ["Grind the potatoes after peeling off", "Sift the grind potatoes for 5 minutes", "Mix the powder with eggs, potatoes and shrimp", "Pour oil on the pan and start frying"]
    },
    {
        name: "Shrimp Potato Ball",
        pic: ["images/spb0.jpg", "images/spb1.jpg", "images/spb2.jpg", "images/spb3.jpg", "images/spb4.jpg"],
        main_ingredient: ["shrimp", "potato", "flour", "oil"],
        ingredient: ["cheese", "salt"],
        tool: ["stove"],
        time: 40,
        difficulty: "★★★★"
    },
    {
        name: "Potato Shrimp Pizza",
        pic: ["images/psp0.jpg", "images/psp1.jpg", "images/psp2.jpg", "images/psp3.jpg", "images/psp4.jpg"],
        main_ingredient: ["shrimp", "potato", "flour", "cheese", "tomato"],
        ingredient: ["olive"],
        tool: ["oven"],
        time: 60,
        difficulty: "★★★"
    },
    {
        name: "Basil Pesto Tomato Pasta",
        pic: ["images/btp0.jpg", "images/btp1.jpg", "images/btp2.jpg", "images/btp3.jpg", "images/btp4.jpg"],
        main_ingredient: ["basil-pesto", "tomato", "garlik", "noodle", "oil"],
        ingredient: ["onion", "parsley"],
        tool: ["stove"],
        time: 20,
        difficulty: "★★",
        description: ["Blanch tomatoes and peel them", "Stir-fry garlic in olive oil", "Stir-fry vegetables including tomato", "Add the boiled noodles and basil pesto"]
    },
    {
        name: "Cream Shrimp",
        pic: ["images/cs0.jpg", "images/cs1.jpg", "images/cs2.jpg", "images/cs3.jpg", "images/cs4.jpg"],
        main_ingredient: ["flour", "shrimp", "mayonnaise", "lemon", "oil"],
        ingredient: ["sugar", "pepper"],
        tool: ["stove"],
        time: 20,
        difficulty: "★★",
        description: ["Mix mayonnaise, lemon juice, sugar, and pepper to make sauce", "Mix flour with water and shrimp", "Fry the shrimp once", "Fry them one more time"]
    },
    {
        name: "Nutty Cookie",
        pic: ["images/nc0.jpg", "images/nc1.jpg", "images/nc2.jpg", "images/nc3.jpg", "images/nc4.jpg"],
        main_ingredient: ["flour", "fresh-cream", "milk", "almond-chip"],
        ingredient: ["cranberry", "chocolate-chip", "sugar", "salt"],
        tool: ["air-fryer"],
        time: 60,
        difficulty: "★★★",
        description: ["Mix flour with fresh cream milk, sugar and salt", "Add chocolate chips, cranberries, almond chips", "Divide the dough as small balls", "Put the divided scones in the air fryer and cook for 30 minutes  at 150 degrees"]
    }
]

var parameters = document.getElementById('txt').value.split(',');
var searchName = [[],[]];
var count = 0;

for(var i=0; i<parameters.length; i++) {
    for(var num=0; num<6; num++) {
        for(var num2=0; num2<5; num2++) {
            if(parameters[i] == recipe_info[num].main_ingredient[num2]) {
                searchName[i][count] = recipe_info[num].name;
                count++;
            }
        }
    }
}

for(var i=0; i<3; i++) {
    for(var j=0; j<3; j++) {
        if(searchName[1][i] == searchName[2][j]) {
            document.getElementById('nameSearchName').value = searchName[1][i];
        }
    }
}

function time(id) {
    document.getElementById(id).className = "is-active";
    for(var i=5; i>id; i--)
      document.getElementById(i).className = "";
    for(var i=1; i<id; i++)
      document.getElementById(i).className = "is-complete";
  }
  
  function star(id) {
    document.getElementById(id).className = "is-active";
    for(var i=10; i>id; i--)
      document.getElementById(i).className = "";
    for(var i=6; i<id; i++)
      document.getElementById(i).className = "is-complete-star";
  }
  