var selected = "GeneEng";

function switchContent(id,selfid){
    Array.from(document.getElementById('more-content').children).forEach(element => {
        element.classList.remove("more-content-show")
    });

    Array.from(document.getElementById('selection-container').children).forEach(element => {
        element.classList.remove("selected")
    });

    selected = id

    document.getElementById(id).classList.add("more-content-show")
    document.getElementById(selfid).classList.add("selected")
}