const d = document;

function preguntasInfo(){
    const question = d.getElementsByClassName("pegable");

    for(let i = 0; i < question.length; i++){
        question[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if(content.style.display === "block"){
                content.style.display = "none";
            }else{
                content.style.display = "block";
            }
        });
    }
}

d.addEventListener("DOMContentLoaded", (e) => {
    preguntasInfo();
});