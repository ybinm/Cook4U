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
        name: "no manu",
        pic: ["images/nc0.jpg", "images/nc1.jpg", "images/nc2.jpg", "images/nc3.jpg", "images/nc4.jpg"],
        main_ingredient: ["", "", "", "", ""],
        ingredient: ["salt"],
        tool: [""],
        time: 20,
        difficulty: "★★",
        description: ["", "", "", ""]
    },
    {
        name: "Nutty Cookie",
        pic: ["images/nc0.jpg", "images/nc1.jpg", "images/nc2.jpg", "images/nc3.jpg", "images/nc4.jpg"],
        main_ingredient: ["nut", "flour", "", "", ""],
        ingredient: ["salt"],
        tool: ["oven"],
        time: 90,
        difficulty: "★★★★★",
        description: ["", "", "", ""]
    }
]

function setName(name) {
    window.location.href = "recipe.html?" + name;
}

(function() {
    var parameters = (location.href.slice(location.href.indexOf('?') + 1)).split('&');
    var num = parameters[1];
    num = parseInt(num);

    document.getElementById('recipeName').value = recipe_info[num].name;
    document.getElementById('recipeImage0').src = recipe_info[num].pic[0];

    for(var i=0; i<recipe_info[num].main_ingredient.length; i++) {
        document.getElementById('recipeMIngred').value += recipe_info[num].main_ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[num].ingredient.length; i++) {
        document.getElementById('recipeIngred').value += recipe_info[num].ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[num].tool.length; i++) {
        document.getElementById('recipeTool').value += recipe_info[num].tool[i] + "  ";
    }

    document.getElementById('recipeTime').value = recipe_info[num].time;
    document.getElementById('recipeDiff').value = recipe_info[num].difficulty;

    for(var i=1; i<5; i++) {
        document.getElementById('recipeImage'+i).src = recipe_info[num].pic[i];
    }

    for(var i=0; i<4; i++) {
        document.getElementById('recipeDescrip'+i).value = recipe_info[num].description[i];
    }

    var ranNum;
    ranNum = Math.floor(Math.random()*(num+1));

    document.getElementById('num').innerHTML = "Recommend ♥" + ranNum;
})()

var count = 0;

function changeHeart(num) {
    var parameter = num.split('♥');
    var heartNum = parameter[1];
    heartNum = parseInt(heartNum);

    var col = "";

    count++;

    if(count%2 == 1) {
        heartNum += 1;
        col = "#ff9d21";
    }
    else {
        heartNum -= 1;
        col = "#888";
    }

    document.getElementById('num').innerHTML = "Recommend ♥" + heartNum;
    document.getElementById('num').style.color = col;
}