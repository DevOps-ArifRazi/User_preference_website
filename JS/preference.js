//Selection part
const fontSize = document.querySelector("#fontSize");
const bgColor = document.querySelector("#selectbg");
const button = document.querySelector(".btn");
const mainElement = document.querySelector("#main");


///function
//get item from local storage
const localStorageData = () =>{
    const localStorageFontSize = localStorage.getItem("fontSize");
    const localStorageBgColor = localStorage.getItem("backgroundColor");
    if(localStorageFontSize && localStorageBgColor){
        fontSize.value = localStorageFontSize ;
        bgColor.value = localStorageBgColor;
        mainElement.style.fontSize = localStorageFontSize ;
        mainElement.style.backgroundColor = localStorageBgColor;

    }
    if(!localStorageFontSize && !localStorageBgColor){
        fontSize.value = "14px" ;
        bgColor.value = "White";
        mainElement.style.fontSize = "14px"  ;
        mainElement.style.backgroundColor = "White";
    }
    if(localStorageFontSize && !localStorageBgColor){
        fontSize.value = localStorageFontSize ;
        bgColor.value = "White";
        mainElement.style.fontSize = localStorageFontSize ;
        mainElement.style.backgroundColor = "White";
    }
    if(!localStorageFontSize && localStorageBgColor){
        fontSize.value = "14px" ;
        bgColor.value = localStorageBgColor;
        mainElement.style.fontSize = "14px"  ;
        mainElement.style.backgroundColor = localStorageBgColor;
    }
}

//change font size
const changeFontSize=(event)=>{
    //console.log(event.target.value);
    mainElement.style.fontSize = event.target.value;
    localStorage.setItem("fontSize",event.target.value);
}

//change bg color
const changeBgColor = (event)=>{
    //console.log(event.target.value);
    mainElement.style.backgroundColor = event.target.value;
    localStorage.setItem("backgroundColor",event.target.value);
}

//clear local storage
const clearLocalStorage = (event)=>{
    localStorage.removeItem("backgroundColor",event.target.value);
    localStorage.removeItem("fontSize",event.target.value);
    mainElement.style.fontSize = "14px"  ;
    mainElement.style.backgroundColor = "white";

};






//Add eventLisner 
fontSize.addEventListener("change",changeFontSize);
bgColor.addEventListener("change",changeBgColor);
button.addEventListener("click",clearLocalStorage);
localStorageData();