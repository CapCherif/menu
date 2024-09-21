

var menu = [
    {
        nom:"Pizza Fromage",
        prix:450,
        img:"imgs/fromage.jfif",
        category:"pizza"
    },
    {
        nom:"Pizza Italienne",
        prix:500,
        img:"imgs/italienne.jfif",
        category:"pizza"
    },
    {
        nom:"Pizza Saumon",
        prix:450,
        img:"imgs/saumon.jfif",
        category:"pizza"
    },
    {
        nom:"Chicken",
        prix:450,
        img:"imgs/chicken.jfif",
        category:"burger"
    },
    {
        nom:"Boeuf",
        prix:450,
        img:"imgs/boeuf.jfif",
        category:"burger"
    },
    {
        nom:"Shawarma",
        prix:450,
        img:"imgs/shawarma.jfif",
        category:"burger"
    },

    {
        nom:"Cheescake",
        prix:550,
        img:"imgs/cheescake.jfif",
        category:"dessert"
    },
    {
        nom:"Glace",
        prix:450,
        img:"imgs/glace.jfif",
        category:"dessert"
    },
    {
        nom:"Tarte Citron",
        prix:350,
        img:"imgs/tarte.jfif",
        category:"dessert"
    },
]

var choix = []

function CreateMenu(category){

    var html = ""
    menu.forEach((m, index)=>{
        if(m.category == category){
            html += `
            <div class="menu">
                <img src="${m.img}" alt="" onclick="AddChoice(${index})">
                <h4>${m.nom}</h4>
                <p>${m.prix} DA</p>
            </div>
            `
        }
        
    })

    var resultat = document.querySelector('#menu-detail')
    resultat.innerHTML = html
}

// au démarrage

CreateMenu("pizza")


// var button = document.querySelector('button')

// button.addEventListener("click", function(){
//     var category = document.querySelector('select').value
//     CreateMenu(category)
// })

var select = document.querySelector('select')

select.addEventListener("change", function(){
    var category = document.querySelector('select').value
    CreateMenu(category)
})


function ChangeColor(){
    document.querySelector('h2').style.color="red"
}


function AddChoice(index){
    var obj = menu[index]
    var exist = false

    choix.forEach((c)=>{
        if(obj.nom == c.nom){
            exist = true
        }
    })

    if(exist == true){
        obj["qt"] = obj["qt"] + 1
    }
    else{
        obj["qt"] = 1
        choix.unshift(obj)
    }
    
    
    console.log(choix)
}

// var myObj = {
//     nom:"Glace",
//     img:"img",
//     prix:345
// }

// myObj['qt'] = 1

// console.log(myObj)
