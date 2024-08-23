
import { menu } from "./menu.js";

//select elements from html file....................................
const sectionCenter = document.getElementById("menu-section");
const btnContainer = document.querySelectorAll(".btn-container");


const categarys = menu.reduce(function(values , items){
    if(!values.includes(items.category)){
        values.push(items.category);
    };
    return values;
} , ["all"]);

const categaryBtn = categarys.map(function(categary){
    return `<button class="filter-bnt" type="button" data-id="${categary}">${categary}</button>`
}).join("");

btnContainer[0].innerHTML = categaryBtn;

const styleBtn = document.querySelectorAll(".filter-bnt");

//event listiner for buttons .............
Array.from(btnContainer).forEach(function(btn){

    btn.addEventListener("click" , (e)=>{
        let categary  = e.target.dataset.id;
        //select btn style.........
        styleBtn.forEach((b) =>{
            if(e.target.classList === b.classList){
               e.target.classList.add("toggle");
            };
            if(e.target.classList !== b.classList){
                b.classList.remove("toggle");
            };
        });

        let filterCatogary = menu.filter(function(menuItem){
            if(menuItem.category === categary){
                return menuItem;
            };
        });
        if(categary === "all"){
            displayMenuItems(menu);
        }else{
            displayMenuItems(filterCatogary);
        };
     
    });
});
function displayMenuItems(menu){

    let displayItems = menu.map(function(items){
    
           return `<article class="menu-items">
                        <img src="${items.img}" class="photo" alt="${items.title}">
                        <div class="menu-info">
                            <header>
                                <h4 class="title">${items.title}</h4>
                                <h4 class="prise">${items.price}</h4>
                            </header>
                            <p class="item-text">${items.deac}</p>
                        </div>
                    </article>`;
        });
        displayItems = displayItems.join("");
        sectionCenter.innerHTML = displayItems;
};
displayMenuItems(menu);


