const billInput=document.querySelector("#bill");
const peopleInput=document.querySelector("#people");
const customInput=document.querySelector('#custom');

let bill=0;
let tip=0;
let nOfPeople=0;

let update = () => {
    if(nOfPeople!=0){
        document.querySelector('#total').innerHTML=((bill)/(nOfPeople)+(bill*tip)/(100*nOfPeople)).toFixed(2)+"$";
        document.querySelector("#tipAmount").innerHTML=((bill*tip)/(100*nOfPeople)).toFixed(2)+"$";
    }
};

let removeHighlight = () => {
    var buttons = document.getElementsByClassName("tip");
    for (var i = 0; i < buttons.length; i++) {
        buttons.item(i).classList.remove("clicked");
    }
};

//the highlighting stuff on focus 

billInput.addEventListener('focus', e => {
    document.querySelector("#b").style.border="2px solid hsl(172, 67%, 45%)";
    document.querySelector("#b").style.transition="all 0.05s ease";
    customInput.style.border="none";
    if(!(document.querySelector("#p").style.border=="2px solid rgb(206, 0, 0)")){
        document.querySelector("#p").style.border="none";
        document.querySelector(".e").setAttribute("id","error");
    }
    
});
peopleInput.addEventListener('focus', e => {
    customInput.style.border="none";
    document.querySelector("#b").style.border="none";
    if(!(document.querySelector("#p").style.border=="2px solid rgb(206, 0, 0)")){
        document.querySelector("#p").style.border="2px solid hsl(172, 67%, 45%)";  
    }
});
customInput.addEventListener('focus', e => {
    customInput.style.border="2px solid hsl(172, 67%, 45%)";
    customInput.style.transition="all 0.05s ease";
    document.querySelector("#b").style.border="none";
    removeHighlight();
    tip=0;
    update();
    if(!(document.querySelector("#p").style.border=="2px solid rgb(206, 0, 0)")){
        document.querySelector("#p").style.border="none";
        document.querySelector(".e").setAttribute("id","error");
    }
});

//people input
 
peopleInput.addEventListener('input', e=> {
    nOfPeople=e.target.value;
    if(e.target.value==0){
        //changing the own color
        document.querySelector("#tipAmount").innerHTML="0.00$"
        document.querySelector('#total').innerHTML="0.00$"
        document.querySelector("#p").style.border="2px solid rgb(206, 0, 0)";
        document.querySelector("#p").style.transition="all 0.05s ease";
        document.querySelector(".e").removeAttribute('id'); 
    }
    else {    
        nOfPeople=e.target.value;
        document.querySelector("#p").style.border="2px solid hsl(172, 67%, 45%)";
        document.querySelector(".e").setAttribute("id","error");
        update();
    }
});

// bill input 

billInput.addEventListener('input', e=> {
    bill=e.target.value;
    if(e.target.value==""){
        document.querySelector('#total').innerHTML="0.00$"
    } else update();
});

// tip calculation

//standard values

document.querySelector(".tips div:nth-child(1)").addEventListener("click", e => {
    tip=5;
    removeHighlight();
    customInput.style.border="none";
    e.target.classList.add("clicked");
    update();
    
});
document.querySelector(".tips div:nth-child(2)").addEventListener("click", e => {
    tip=10;
    removeHighlight();
    customInput.style.border="none";
    e.target.classList.add("clicked");
    update();
});
document.querySelector(".tips div:nth-child(3)").addEventListener("click", e => {
    tip=15;
    removeHighlight();
    customInput.style.border="none";
    e.target.classList.add("clicked");
    update();
});
document.querySelector(".tips div:nth-child(4)").addEventListener("click", e => {
    tip=25;
    removeHighlight();
    customInput.style.border="none";
    e.target.classList.add("clicked");
    update();
});
document.querySelector(".tips div:nth-child(5)").addEventListener("click", e => {
    tip=50;
    removeHighlight();
    customInput.style.border="none";
    e.target.classList.add("clicked");
    update();
});

//custom values

customInput.addEventListener('input', e=> {
    tip=e.target.value;
    update();
});

//reset button
document.querySelector(".reset-button").addEventListener("click", e => {
    bill=0;
    tip=0;
    update();
    nOfPeople=0;
    document.querySelectorAll('input').forEach(input => input.value='');
});