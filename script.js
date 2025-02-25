const preview = document.getElementById("preview");
const code = document.getElementById("code");

function updateBorderRadius(){
    const topLeft = document.getElementById("topLeft").value;
    const topRight = document.getElementById("topRight").value;
    const bottomLeft = document.getElementById("bottomLeft").value;
    const bottomRight = document.getElementById("bottomRight").value;
    
    const borderRadius = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;
    preview.style.borderRadius = borderRadius;
    code.textContent = `border-radius: ${borderRadius}`;
}

// function copyCode() {
//     updateBorderRadius(); // Garante que o código está atualizado antes de copiar
//     navigator.clipboard.writeText(code.textContent).then(() => {
//         alert("Código copiado!");
//     }).catch(err => {
//         console.error("Erro ao copiar código:", err);
//     });
// }

async function copyCode() {
    try{
        await navigator.clipboard.writeText(code.textContent);
        alert("Código CSS copiado!");
    } catch(err){
        console.error("Erro ao copiado o código", err)
    }
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateBorderRadius);
});


//border-radius: 34px 8px 35px 12px border-radius: 32px 56px 39px 70px border-radius: 32px 56px 39px 70px border-radius: 100px 23px 0px 19px
//border-radius: 0px 0px 35px 16px border-radius: 50px 0px 59px 100px border-radius: 50px 0px 59px 100px  Border-radius: 0px 0px 0px 0px border-radius: 0px 26px 42px 0px border-radius: 0px 26px 42px 0px