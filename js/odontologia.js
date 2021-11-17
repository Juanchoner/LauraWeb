const d = document;

function implantesInfo(info, btnRecina, btnImplantes, btnProtesis, btnCerrar){
    let myInfo = d.getElementById("information");

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnRecina)){
            myInfo.style.display = "block";
            d.querySelector(info).innerHTML = `
            <div class="more-information">
                <h5>Recina o composite</h5>
                <p>Son tratamientos sencillos que permiten mejorar en gran medida la estetica de la sonrisa, que se pueden utilizar en dientes dañados o careados, en el cual el material que se utiliza se trabaja semejando el color del diente  por lo que  el resultado es una restauracion cosmetica y agradable.</p>
                <div class="button-flex">
                    <button id="cerrar">Cerrar</button>
                </div>
            </div>`
        }

        if(e.target.matches(btnImplantes)){
            myInfo.style.display = "block";
            d.querySelector(info).innerHTML = `
            <div class="more-information">
                <h5>Implantes</h5>
                <p>Es el procedimiento de elección cuando hay pérdida de piezas. Se trata de un tornillo de titanio que sostiene un diente artificial. Se inserta al hueso y la pieza posee la apariencia y la función de un diente o muela natural.</p>
                <div class="button-flex">
                    <button id="cerrar">Cerrar</button>
                </div>
            </div>`
        }

        if(e.target.matches(btnProtesis)){
            myInfo.style.display = "block";
            d.querySelector(info).innerHTML = `
            <div class="more-information">
                <h5>Prótesis</h5>
                <p>Esta área se encarga de reemplazar los dientes perdidos.
                Existen varios tipos de prótesis dentales, para determinar qué tipo de prótesis es la adecuada el paciente necesitará un estudio minucioso e individual de su caso, adaptándose a sus expectativas y posibilidades estas pueden ser:</p>
                <ul>
                    <li>Prótesis parcial removible</li>
                    <li>Prótesis fija sobre diente</li>
                    <li>Prótesis fija sobre implante</li>
                    <li>Prótesis removible mucoimplantosoportada</li>
                </ul>
                <div class="button-flex">
                    <button id="cerrar">Cerrar</button>
                </div>
            </div>`
        }

        if(e.target.matches(btnCerrar)){
            myInfo.style.display = "none";
        }
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
    implantesInfo("#information", "#recina", "#implantes", "#protesis", "#cerrar")
});