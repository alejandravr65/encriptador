const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje");


function botonEncriptar(){
    const textoDesencriptado = encriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    console.table(matrizCodigo);
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }  
    }
    return stringEncriptada
}


function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage =  "none";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    console.table(matrizCodigo);
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}



function botoncopiar(){
    var solucion = document.querySelector(".mensaje").value;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = solucion;
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select(); 
    document.execCommand("copy");
    document.body.removeChild(tempTextArea); 

    alert("Texto copiado al portapapeles");
}