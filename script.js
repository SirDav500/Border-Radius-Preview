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