const dropBtn = document.getElementById("dropdown-alamat");
const dropDownAddress = document.getElementById("input-dropdown");
const inputAddress = document.getElementById("input-address");
let pressed = true;
dropBtn.addEventListener('click', () => {
    dropBtn.classList.toggle("rotate180");
    dropDownAddress.classList.toggle("drop");
    if(pressed){
        inputAddress.focus();
        inputAddress.value = "";
    }
    if(!pressed){
        inputAddress.blur();
        inputAddress.value = "Jl. Puspitek, Tangerang Selatan";
    }
    pressed = !pressed;
});

inputAddress.addEventListener("focus", () => {inputAddress.value = "";});
inputAddress.addEventListener("blur", () => {inputAddress.value = "Jl. Puspitek, Tangerang Selatan";});