var selected = "GeneEng";
function switchCont(context,id){
    window.location = '#'+context+'-more';
    document.getElementById(context+'-ToC').classList.add("selected");
    document.getElementById(selected+'-ToC').classList.remove("selected");
    selected = context
}

function toggleToC(){
    var ToC = document.getElementById("table-contents");
    if(ToC.classList.contains("table-contents")){
        ToC.classList.add("table-contents-hide");
        ToC.classList.remove("table-contents") 
        console.log("lol");

        var textCont = document.getElementsByClassName("text-container");
        // textCont.width = "100vw"
        console.log(textCont);

        for (let x = 0; x < textCont.length; x++) {
            const element = textCont[x];
            // element.style.width = "90vw"
            setTimeout(element.style.width = "90vw", 1000*x);
        }
    }
    else if(ToC.classList.contains("table-contents-hide")){
        ToC.classList.add("table-contents");
        ToC.classList.remove("table-contents-hide") 
        console.log("lol");

        var textCont = document.getElementsByClassName("text-container");
        // textCont.width = "100vw"
        console.log(textCont);

        for (let x = 0; x < textCont.length; x++) {
            const element = textCont[x];
            element.style.width = "70vw"
        }
    }
}