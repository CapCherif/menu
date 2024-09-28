

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



var select = document.querySelector('select')

select.addEventListener("change", function(){
    var category = document.querySelector('select').value
    CreateMenu(category)
})



function AddChoice(index){
    // faire une copie de profonde de l'objet
    var obj = JSON.parse(JSON.stringify(menu[index]));
    var exist = false

    // voir si l'objet existe, si oui j'incrémente la qt
    choix.forEach((c)=>{
        if(obj.nom == c.nom){         
            exist = true 
            c.qt = c.qt + 1
        }
    })

    // si l'objet n'existe, je créer une qt = 1, et je l'ajoute dans
    // mes choix

    if(exist == false){   
        obj["qt"] = 1
        choix.unshift(obj)
    }
        
    console.log(choix)
    CreateChoice()
}


// une fonction pour créer template des choix

function CreateChoice(){
    var html = ""
    choix.forEach((m, index)=>{
        
        html += `
            <div class="choix">
                
                <img src="${m.img}" alt="">
                <p>${m.nom}</p>
                <p>${m.prix} DA</p>
                <p>${m.qt}</p>            
                <button onclick="DeleteChoice(${index})">X</button>
                
            </div>
            `
        
        
    })

    var resultat = document.querySelector('#resultat')
    resultat.innerHTML = html
}




var myObj = {
    nom:"Glace",
    img:"img",
    prix:345
}

console.log(myObj)
var txt = JSON.stringify(myObj)
console.log(txt)
console.log(JSON.parse(txt))
// myObj.qt = 1

// console.log(myObj)



// Fonction asynchrone pour tester une API gratuite avec fetch
// async function fetchData() {
//     try {
//         // Appel à l'API publique JSONPlaceholder
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        
//         // Conversion de la réponse en format JSON
//         let data = await response.json();
        
//         // Affiche les données reçues
//         console.log('Données des utilisateurs:', data);
        
//     } catch (error) {
//         // En cas d'erreur, affiche un message d'erreur
//         console.error('Une erreur est survenue :', error);
//     }
// }

// // Appelle la fonction fetchData
// fetchData().then(()=>{
//     console.log('working with data')
// });
