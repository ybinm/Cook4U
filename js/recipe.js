var recipe_info = {
    "ShrimpPotatoPancake": {
        "name": "Shrimp Potato Pancake",
        "pic": ["images/spp0.jpg", "images/spp1.jpg", "images/spp2.jpg", "images/spp3.jpg"],
        "main-ingredient": ["shrimp", "potato", "oil"],
        "ingredient": ["leek", "salt"],
        "tool": ["stove"],
        "time": 20,
        "difficulty": 2
    },
    "ShrimpPotatoBall": {
        "name": "Shrimp Potato Ball",
        "pic": ["images/spb0.jpg", "images/spb1.jpg", "images/spb2.jpg", "images/spb3.jpg"],
        "main-ingredient": ["shrimp", "potato", "Flour", "oil"],
        "ingredient": ["cheese", "salt"],
        "tool": ["stove"],
        "time": 40,
        "difficulty": 4
     },
    "PotatoShrimpPizza": {
      "name": "Potato Shrimp Pizza",
      "pic": ["images/psp0.jpg", "images/psp1.jpg", "images/psp2.jpg", "images/psp3.jpg"],
      "main-ingredient": ["shrimp", "potato", "Flour", "cheese", "tomato"],
      "ingredient": ["olive"],
      "tool": ["oven"],
      "time": 60,
      "difficulty": 3
     },
    "BasilPestoTomatoPasta": {
        "name": "Basil Pesto Tomato Pasta",
        "pic": ["images/btp0.jpg", "images/btp1.jpg", "images/btp2.jpg", "images/btp3.jpg"],
        "main-ingredient": ["basil-pesto", "tomato", "garlik", "noodle", "oil"],
        "ingredient": ["onion", "parsley"],
        "tool": ["stove"],
        "time": 20,
        "difficulty": 2 
     }
}

function setValue(txt1, txt2) {
    window.location.href = "search.html?" + txt1 + "&" + txt2;
}

(function () {
    var parameters = (location.href.slice(location.href.indexOf('?') + 1)).split('&');

    for(var i=0; i<2; i++) {
        if (parameters[i]) {
            document.getElementById('txt').value = parameters[i];
        }
    }
})()