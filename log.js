/* Buttons */
plus = document.querySelector(".plus")
check = document.querySelector(".check")
calendar = document.querySelector(".calendar")

/*things in html */
main_main = document.querySelector(".main_main")

/* input */
input_info = document.querySelector(".input_info")


function abreInput(){
    return `
    <input type="text" class="input_lista">
    <button class="confirma_input"><i class="fi fi-br-check"></i></button>
    <button class="deleta_input"><i class="fi fi-br-cross"></i></button>
    `
}

function fazList(putput){
    return `
    <ul class="list-item">
            <li class="minhaLista">${putput}<button class="deleta_lista">X</button></li>
    </ul>
    `
}


plus.addEventListener("click", ()=>{
    /* Abre o input */
    input_info.innerHTML = abreInput()

    /* Tira o input da tela */
    deleta_input = document.querySelector(".deleta_input")
    deleta_input.addEventListener("click", ()=>{
        input_info.innerHTML = ""
    })
})


