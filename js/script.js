const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
//question 1

const cat = {
    complain: function() {
        console.log("Meow");
    }
}
cat.complain();

//question 2
const heading = document.querySelector("h3")
heading.innerHTML = "Updated heading";

//question 3
heading.style.fontSize = "2em";

//question 4
heading.classList.add("subheading");

//question 5
let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++ ) {
    paragraphs[i].style.color = "red";
}

//question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";

//question 7
function typesOfCats(list){
    for (let i = 0; i < cats.length; i++ ){
        console.log(cats[i].name);
    }
}
typesOfCats(cats);


//question 8
const catsContainer = document.querySelector(".cat-container");
 
if (cats.age === undefined){
    let catsAge = cats.age = "Unknown";
 } else{
    catsAge = cats.age;
}
console.log(cats);
function createCats(cats){
    let listCats = "";
    for (let i = 0; i < cats.length; i++){
       listCats.innerHTML = listCats + "<div>" + cats[i] + "</div>";
        catsContainer.innerHTML= `
        <div> ${i} 
        <h5>Name: ${cats[i].name} </h5>
        <p>Age: ${cats[i].age} </p></div>
        `;
    }
    const returnHtml = "<div>" + listCats + "</div>";
    return returnHtml;
    } 
createCats(cats);
