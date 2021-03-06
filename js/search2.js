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
        tool: ["oven", "stove"],
        time: 60,
        difficulty: "★★★★"
    },
    {
        name: "Basil Pesto Tomato Pasta",
        pic: ["images/btp0.jpg", "images/btp1.jpg", "images/btp2.jpg", "images/btp3.jpg", "images/btp4.jpg"],
        main_ingredient: ["basil-pesto", "tomato", "garlik", "noodle", "oil"],
        ingredient: ["onion", "parsley"],
        tool: ["stove"],
        time: 20,
        difficulty: "★★"
    },
    {
        name: "Cream Shrimp",
        pic: ["images/cs0.jpg", "images/cs1.jpg", "images/cs2.jpg", "images/cs3.jpg", "images/cs4.jpg"],
        main_ingredient: ["flour", "shrimp", "mayonnaise", "lemon", "oil"],
        ingredient: ["sugar", "pepper"],
        tool: ["stove"],
        time: 20,
        difficulty: "★★"
    },
    {
        name: "Nutty Cookie",
        pic: ["images/nc0.jpg", "images/nc1.jpg", "images/nc2.jpg", "images/nc3.jpg", "images/nc4.jpg"],
        main_ingredient: ["flour", "fresh-cream", "milk", "almond-chip"],
        ingredient: ["cranberry", "chocolate-chip", "sugar", "salt"],
        tool: ["air-fryer"],
        time: 60,
        difficulty: "★★★"
    }
]

function get() {
    
}

(function() {
    document.getElementById('recipeName1').value = recipe_info[0].name;
    document.getElementById('recipeImage1').src = recipe_info[0].pic[0];

    for(var i=0; i<recipe_info[0].main_ingredient.length; i++) {
        document.getElementById('recipeMIngred1').value += recipe_info[0].main_ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[0].ingredient.length; i++) {
        document.getElementById('recipeIngred1').value += recipe_info[0].ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[0].tool.length; i++) {
        document.getElementById('recipeTool1').value += recipe_info[0].tool[i] + "  ";
    }

    document.getElementById('recipeTime1').value = recipe_info[0].time;
    document.getElementById('recipeDiff1').value = recipe_info[0].difficulty;

    document.getElementById('recipeName2').value = recipe_info[1].name;
    document.getElementById('recipeImage2').src = recipe_info[1].pic[0];

    for(var i=0; i<recipe_info[1].main_ingredient.length; i++) {
        document.getElementById('recipeMIngred2').value += recipe_info[1].main_ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[1].ingredient.length; i++) {
        document.getElementById('recipeIngred2').value += recipe_info[1].ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[1].tool.length; i++) {
        document.getElementById('recipeTool2').value += recipe_info[1].tool[i] + "  ";
    }

    document.getElementById('recipeTime2').value = recipe_info[1].time;
    document.getElementById('recipeDiff2').value = recipe_info[1].difficulty;

    document.getElementById('recipeName3').value = recipe_info[2].name;
    document.getElementById('recipeImage3').src = recipe_info[2].pic[0];

    for(var i=0; i<recipe_info[2].main_ingredient.length; i++) {
        document.getElementById('recipeMIngred3').value += recipe_info[2].main_ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[2].ingredient.length; i++) {
        document.getElementById('recipeIngred3').value += recipe_info[2].ingredient[i] + "  ";
    }

    for(var i=0; i<recipe_info[2].tool.length; i++) {
        document.getElementById('recipeTool3').value += recipe_info[2].tool[i] + "  ";
    }

    document.getElementById('recipeTime3').value = recipe_info[2].time;
    document.getElementById('recipeDiff3').value = recipe_info[2].difficulty;
})()

/* var parameters = document.getElementById('txt').value.split(',');
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
    count = 0;
}

for(var i=0; i<3; i++) {
    for(var j=0; j<3; j++) {
        if(searchName[0][i] == searchName[1][j]) {
            document.getElementById('recipeName1').value = searchName[0][i];
        }
    }
} */

function time(id) {
    document.getElementById(id).className = "is-active";
    for(var i=5; i>id; i--)
      document.getElementById(i).className = "";
    for(var i=1; i<id; i++)
      document.getElementById(i).className = "is-complete";

    if(id == 2) {
        if(document.getElementById('7').className == "is-active" || document.getElementById('7').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        document.getElementById('recipe2').style.display = "none";
        document.getElementById('recipe3').style.display = "none";
    }
    if(id == 3) {
        if(document.getElementById('7').className == "is-active" || document.getElementById('7').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        if(document.getElementById('9').className == "is-active" || document.getElementById('9').className == "is-complete-star") {
            document.getElementById('recipe2').style.display = "block";
        }
        document.getElementById('recipe3').style.display = "none";
    }
    if(id == 4) {
        if(document.getElementById('7').className == "is-active" || document.getElementById('7').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        if(document.getElementById('9').className == "is-active" || document.getElementById('9').className == "is-complete-star") {
            document.getElementById('recipe2').style.display = "block";
        }
        if(document.getElementById('9').className == "is-active" || document.getElementById('9').className == "is-complete-star") {
            document.getElementById('recipe3').style.display = "block";
        }
    }
    if(id == 5) {
        if(document.getElementById('7').className == "is-active" || document.getElementById('7').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        if(document.getElementById('9').className == "is-active" || document.getElementById('9').className == "is-complete-star") {
            document.getElementById('recipe2').style.display = "block";
        }
        if(document.getElementById('9').className == "is-active" || document.getElementById('9').className == "is-complete-star") {
            document.getElementById('recipe3').style.display = "block";
        }
    }
}
  
function star(id) {
    document.getElementById(id).className = "is-active";
    for(var i=10; i>id; i--)
      document.getElementById(i).className = "";
    for(var i=6; i<id; i++)
      document.getElementById(i).className = "is-complete-star";

    if(id == 6) {
        document.getElementById('recipe1').style.display = "none";
        document.getElementById('recipe2').style.display = "none";
        document.getElementById('recipe3').style.display = "none";
    }
    if(id == 7) {
        if(document.getElementById('2').className == "is-active" || document.getElementById('2').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        document.getElementById('recipe2').style.display = "none";
        document.getElementById('recipe3').style.display = "none";
    }
    if(id == 8) {
        if(document.getElementById('2').className == "is-active" || document.getElementById('2').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        document.getElementById('recipe2').style.display = "none";
        document.getElementById('recipe3').style.display = "none";
    }
    if(id == 9) {
        if(document.getElementById('2').className == "is-active" || document.getElementById('2').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        if(document.getElementById('3').className == "is-active" || document.getElementById('3').className == "is-complete-star") {
            document.getElementById('recipe2').style.display = "block";
        }
        if(document.getElementById('4').className == "is-active" || document.getElementById('4').className == "is-complete-star") {
            document.getElementById('recipe3').style.display = "block";
        }
    }
    if(id == 10) {
        if(document.getElementById('2').className == "is-active" || document.getElementById('2').className == "is-complete-star") {
            document.getElementById('recipe1').style.display = "block";
        }
        if(document.getElementById('3').className == "is-active" || document.getElementById('3').className == "is-complete-star") {
            document.getElementById('recipe2').style.display = "block";
        }
        if(document.getElementById('4').className == "is-active" || document.getElementById('4').className == "is-complete-star") {
            document.getElementById('recipe3').style.display = "block";
        }
    }
}

$(document).ready(function() {
    $("#tool3").change(function(){
        if($("#tool3").is(":checked")) {
            document.getElementById('recipe1').style.display = "block";
            document.getElementById('recipe2').style.display = "block";
            if($("#tool2").is(":checked")) {
                document.getElementById('recipe3').style.display = "block";
            }
            else {
                document.getElementById('recipe3').style.display = "none";
            }
        }
        else {
            document.getElementById('recipe1').style.display = "none";
            document.getElementById('recipe2').style.display = "none";
            document.getElementById('recipe3').style.display = "none";
        }
        if($("#tool1, #tool2, #tool3, #tool4, #tool5, #tool6").is(":checked")) {
        }
        else {
            document.getElementById('recipe1').style.display = "block";
            document.getElementById('recipe2').style.display = "block";
            document.getElementById('recipe3').style.display = "block";
        }
    });
    $("#tool1, #tool2, #tool4, #tool5, #tool6").change(function(){
        if($("#tool3").is(":checked")) {
            document.getElementById('recipe1').style.display = "block";
            document.getElementById('recipe2').style.display = "block";
            if($("#tool2").is(":checked")) {
                document.getElementById('recipe3').style.display = "block";
            }
            else {
                document.getElementById('recipe3').style.display = "none";
            }
        }
        else {
            document.getElementById('recipe1').style.display = "none";
            document.getElementById('recipe2').style.display = "none";
            document.getElementById('recipe3').style.display = "none";
        }
        if($("#tool1, #tool2, #tool3, #tool4, #tool5, #tool6").is(":checked")) {
        }
        else {
            document.getElementById('recipe1').style.display = "block";
            document.getElementById('recipe2').style.display = "block";
            document.getElementById('recipe3').style.display = "block";
        }
    });
});