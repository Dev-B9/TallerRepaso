
// Crear las siguientes funciones:


const main = document.getElementById("main")
// 1. Cree una función que liste todos los nombres con sus respectiva edad.

import {people} from './people.js';

let contents = document.getElementById("listPersons");
let btn_data_name_age = document.getElementById("nameANDage")

 btn_data_name_age.addEventListener("click", () => {
    const data_request = people.map(personsANDage =>{
    
    const listPerson = document.createElement("li")
    listPerson.textContent = `su nombre es: ${personsANDage.name} y su edad es : ${personsANDage.age} ` 
    contents.appendChild(listPerson)

    })
 

});


// // 2. Liste solamente los nombres que tengan una edad mayor a 20.

let btn_greaters = document.getElementById("greaters")
let greaters = document.getElementById("listGreaters")
btn_greaters.addEventListener("click", ()=>{
    const data_request = people.map( age_conditional =>{
          if(age_conditional.age > 20){
            const listPerson = document.createElement("li")
             listPerson.textContent = `su nombre es: ${age_conditional.name} y su edad es  : ${age_conditional.age}`;
             greaters.appendChild(listPerson)
            }
           })
           contents.innerHTML = " "

})


// // 3. ¿Cuál es el porcentaje de mujeres que hay en el grupo?
// function data_percentage_women() {

const  btn_data_percentage_women = document.getElementById("percentageWomans")
const percentage = document.getElementById("percentage")
btn_data_percentage_women .addEventListener("click", () =>{
  let quantityWomans = 0
  let quantityPersons = 0
  
    const data_request = people.map( gender_conditional =>{
      quantityPersons++
      if(gender_conditional.gender === "Feminine"){
      quantityWomans++
      }
    })
  
    let womansPercentage = (quantityWomans *100) / quantityPersons
    percentage.textContent = `el porcentaje de mujeres en el grupo de personas es de ${womansPercentage.toFixed()} %`;
    greaters.innerHTML = " "
  }
    
    
)

// // 4. Agregue una foto a cada personaje, y muestrelos en el navegador
const personsCards = document.getElementById("conteCards")

const add_photo = document.getElementById("showCards")

add_photo.addEventListener("click", ()=>
{
  const data_request = people.map( photoPersons => {
    
    const conteCard = document.createElement('div');
    conteCard.classList.add("card")
    const imgCard = document.createElement('img');
    // imgCard.classList.add("imgCard")
      const nameCard = document.createElement('p')
      nameCard.classList.add("nameCard")
      
      const ageCard = document.createElement('p')
      const genderCard = document.createElement('p')
      nameCard.textContent = ` Nombre: ${photoPersons.name}`;
      ageCard.textContent = ` Edad: ${photoPersons.age}`;
      genderCard.textContent = `Genero : ${photoPersons.gender}`;
      ageCard.classList.add("nameCard")
      genderCard.classList.add("nameCard")

      
      nameCard.classList.add("nameCard")
      
      imgCard.setAttribute('src', './img/apple.png');
      // imgCard.setAttribute('alt',`${name}`);
      
      personsCards.appendChild(conteCard)
      conteCard.appendChild(imgCard);
      conteCard.appendChild(nameCard);
      conteCard.appendChild(ageCard);
      conteCard.appendChild(genderCard);
    })
    percentage.innerHTML= " "
  }) 
  
  let imgSelected = " "
// // 5. Cree un nuevo personaje desde el navegador incluyendo imagen.

const containerNewP = document.getElementById("newPerson").style.display = "none";
const containerNew = document.getElementById("showNewPerson")

containerNew.addEventListener("click", () => {
  
const containerNewP = document.getElementById("newPerson")
  containerNewP.style.display = "block"
  personsCards.innerHTML= " "
}
  )

const newName = document.getElementById("new-name")
const newAge = document.getElementById("new-age")
const newGender = document.getElementById("new-gender")
const newImg = document.getElementById("new-img")
const newPerson = document.getElementById("createPerson")

newImg.addEventListener("change", (event) =>{
  const currentImg = event.target.files[0];
  const objectURL = URL.createObjectURL(currentImg);
  imgSelected = objectURL;
})


newPerson.addEventListener("click", ()=>{
  const namePerson = newName.value
  const agePerson =  Number(newAge.value)
  const genderPerson = newGender.value

  const newPersons= {name: namePerson, age: agePerson, img:imgSelected, gender: genderPerson};

  people.push(newPersons)

}
)



