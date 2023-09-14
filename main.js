
function addBrava(){  
    var arrayBravas = JSON.parse(localStorage.getItem('bravesArray')) || [];
    let authorInput =  $('#authorInput').val()
    let bravaInput =  $('#bravaInput').val()

    if(authorInput!="" && bravaInput!=""){
        var newBrave  = [authorInput,bravaInput]
        arrayBravas.push(newBrave)
        localStorage.setItem('bravesArray',JSON.stringify(arrayBravas))
        location.reload()
    }else{
        alert("Preencha todos os campos!")
    } 
}


window.onload = function() {    
    var arrayBravas = JSON.parse(localStorage.getItem('bravesArray')) || [];
    document.querySelector("#bravasValue").innerHTML = arrayBravas.length
    for(let i=0;i<arrayBravas.length;i++){
        console.log(arrayBravas[i])
    }
    for(let i=0;i<arrayBravas.length;i++){

        document.querySelector(".bravaList").innerHTML+=
        `
        <div class="bravaContent">
            <p>Autor: <span id="bravaAuthor">${arrayBravas[i][0]}</span></p>
            <p>Brava: <span id="bravaMessage">${arrayBravas[i][1]}</span></p>
        </div>
        `
    }
   
};


