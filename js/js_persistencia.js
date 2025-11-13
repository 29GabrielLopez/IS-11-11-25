let carro = JSON.parse(localStorage.getItem("carro")) || [];

const carroLista = document.getElementById("carroLista");

if(carro.length>0){
    renderCarro();
}

function renderCarro(){
    carroLista.innerHTML = "";
    carro.forEach(nombre=>{
        const li = document.createElement("li");
        li.textContent = nombre;
        carroLista.appendChild(li);
    })
}

contenedor.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON"){
        const nombre = e.target.parentElement.querySelector("h3").textContent;
        carro.push(nombre);

        localStorage.setItem("carro",JSON.stringify(carro));
        
        renderCarro();
    }
});