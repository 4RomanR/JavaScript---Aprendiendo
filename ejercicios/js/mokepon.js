function start (){
    alert("💕Welcome to Mokepon💕")
    var btnPetPlayer = document.getElementById("btn-select")
    btnPetPlayer.addEventListener("click", selectPetP)
}

function selectPetP (){
    let petit = document.getElementById("petit").checked;
    let giant = document.getElementById("giant").checked;
    let potato = document.getElementById("potato").checked;
    let coroco = document.getElementById("coroco").checked;
    
    
    if(petit){
        alert ("Petit seleted")
        document.getElementById("petP").innerHTML = "Petit";
    } else if(giant){
        alert ("Giant seleted")
        document.getElementById("petP").innerHTML = "Giant";
    } else if(potato){
        alert ("Potato seleted")
        document.getElementById("petP").innerHTML = "Potato";
    } else if(coroco){
        alert ("Coroco seleted")
        document.getElementById("petP").innerHTML = "Coroco";
    } else{
        alert ("Select a Pet")
    }
    console.log("💕Mokepon Player selected💕")
    selectCPU()
    console.log("💕Mokepon CPU selected💕")
}

function selectCPU (){
    let CPU = randomCPU(1, 4);
    let selectedCPU = document.getElementById("petCPU");
    if (CPU == 1){
        alert("Enemy select Petit")
        selectedCPU.innerHTML = "Petit";
    } else if (CPU == 2){
        alert("Enemy select Giant")
        selectedCPU.innerHTML = "Giant";
    } else if (CPU == 3){
        alert("Enemy select Potato")
        selectedCPU.innerHTML = "Potato";
    } else if (CPU == 4){
        alert("Enemy select Coroco")
        selectedCPU.innerHTML = "Coroco";
    }
}

function randomCPU (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", start)
