var recipe_info = [
    {
        name: "Shrimp Potato Pancake",
        pic: ["images/spp0.jpg", "images/spp1.jpg", "images/spp2.jpg", "images/spp3.jpg", "images/spp4.jpg"],
        main_ingredient: ["shrimp", "potato", "oil"],
        ingredient: ["leek", "salt"],
        tool: ["stove"],
        time: 20,
        difficulty: "★★"
    },
    {
        name: "Shrimp Potato Ball",
        pic: ["images/spb0.jpg", "images/spb1.jpg", "images/spb2.jpg", "images/spb3.jpg", "images/spb4.jpg"],
        main_ingredient: ["shrimp", "potato", "Flour", "oil"],
        ingredient: ["cheese", "salt"],
        tool: ["stove"],
        time: 40,
        difficulty: "★★★★"
    },
    {
        name: "Potato Shrimp Pizza",
        pic: ["images/psp0.jpg", "images/psp1.jpg", "images/psp2.jpg", "images/psp3.jpg", "images/psp4.jpg"],
        main_ingredient: ["shrimp", "potato", "Flour", "cheese", "tomato"],
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
})()

function setHeart(num) {
    var parameter = num.split('♥');
    var heartnum = parameter[1];
    heartnum = parseInt(heartnum);

    var heartcolor = "";

    if(heartnum == 5) {
        heartnum = 6;
        heartcolor = "#ff9d21";
    }
    else {
        heartnum = 5;
        heartcolor = "#888";
    }

    document.getElementById('num').innerHTML = "Recommend ♥" + heartnum;
    document.getElementById('num').style.color = heartcolor;
}