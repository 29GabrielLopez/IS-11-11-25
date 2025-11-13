const from = document.getElementById("form");
const input = document.getElementById("nombre");
const msg = document.getElementById("mensaje");

from.addEventListener("submit", (e)=>{
    e.preventDefault();
    try{
        if(input.value.trim()===""){
            throw new Error("El nombre no puede estar en blanco");
        }
        msg.textContent= `Bienvenido usuario: ${input.value} a tu sistema de inscripciones`
        msg.style.color="green";
    }catch(error){
        msg.textContent = `Ocurrió un error: ${error.message}`
        msg.style.color="red";
    }
}
);