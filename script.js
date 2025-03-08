//SELEÇÃO DOS ELEMENTOS DA DOM
const preview = document.getElementById("preview");
const code = document.getElementById("code");

//Função que atualiza o border radius
function updateBorderRadius(){
    //Essa função pega os valores dos inputs (topLeft, topRight, bottomLeft, bottomRight), que são campos <input> no HTML.
    const topLeft = document.getElementById("topLeft").value;
    const topRight = document.getElementById("topRight").value;
    const bottomLeft = document.getElementById("bottomLeft").value;
    const bottomRight = document.getElementById("bottomRight").value;
    //Esses valores são combinados em uma string no formato esperado pelo border-radius CSS ("10px 20px 30px 40px").
    const borderRadius = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;
    //Depois, aplica o border-radius no elemento preview.
    preview.style.borderRadius = borderRadius;
    //Também atualiza o conteúdo do elemento code, mostrando o código CSS gerado.
    code.textContent = `border-radius: ${borderRadius}`;
}
//Função para copiar o código CSS gerado.
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