

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
]


function CreateMenu(category){

    var html = ""
    menu.forEach((m)=>{
        if(m.category == category){
            html += `
            <div class="menu">
                <img src="${m.img}" alt="">
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


var button = document.querySelector('button')

button.addEventListener("click", function(){
    var category = document.querySelector('select').value
    CreateMenu(category)
})