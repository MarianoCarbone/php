// //scope
// var numero1 = 100 //variables del tipo global
// var numero2 = 200



// //Esta funcion lo que hace es sumar dos .....
// function sumarNumeros(a,b) {

//     return a+b

// }

// function restarNumeros(a,b){

//     return a-b
// }

// var resultSumar = sumarNumeros(numero1,numero2)

// var resultRestar = restarNumeros(numero1, numero2)

// if(resultSumar>resultRestar) {
//     console.log("sumar es mayor")
// }else{
//     console.log("restar es mayor")
// }


// function soyRobot(nombre, edad, humano){


//     return humano

// }


// var alumno = ['alejandro',25,true]

// soyRobot(alumno[0],alumno[1],alumno[2])


// var estudiantes = {
    
//     nombre: "gaspar",
//     edad: 36,
//     robot: true
// }

// soyRobot(estudiantes.nombre,estudiantes.edad,estudiantes.robot)


//metodos....

// var comision = Number(prompt('ingrese el numero de comision'))

// var encabezado = document.getElementById('header-title')

// var outputDiv = document.getElementById('output')

// if(comision == 2164) {


// encabezado.textContent = 'Comision 2164'

// outputDiv.textContent = 'Ustedes son paquete Premium'

// }else{


//     encabezado.textContent = 'No es de la comision favorita'

//     outputDiv.textContent = 'Es usuario Basico'

// }


var items = document.getElementsByClassName('list-group-item')

// console.log(items[0])
// console.log(items[3])

// console.log(items[5])

for(var i =0; i<items.length;i++)
{
    //items[i].style.backgroundColor="yellow"// a todos aplica el fonde de color
    if(i%2==0)//solo me cambia los pares0,2,4..etc
    {
    console.log(items[i].textContent='hola')//cambiamos el nombre de item por hola
    items[i].style.color="red"
    items[i].style.backgroundColor="yellow"//backgroundColor el Color siempre con mayuscula en js
    //solo a los pares aplica el color de fondo
    }
    else{
        console.log(items[i].textContent='impar')
        items[i].style.color="blue"//metodo cambia el color a la letra
    }
}

var botonInput=document.getElementById('inputUnico')
console.log(botonInput.value)

function hacerClick() 
{
        var divOut=document.getElementById('output')
        console.log(divOut)

        divOut.style.backgroundColor="red"

        divOut.textContent=botonInput.value*2//tomo el valor del input

        //divOut.style.display="none" me lo desaparece

        //agregando clase para el modo oscuro
        divOut.classList.add='probandoModoOscuro'
        //remover clase para el modo oscuro
        divOut.classList.remove='probandoModoOscuro'
    
    console.log("Hola probando click con funcion externa")
    console.log(botonInput.value)//muestro el valor de un input

    if (botonInput.value>200) 
    {
        alert("Hola sobre paso su saldo")    
    }
}

function onFocus() 
{
    console.log("hola probando onfocus")    
}
function onBlur() 
{
    console.log("hola probando onBlur")   
    alert('saliste del input sin rellenar') 
}
function onChange() 
{
    console.log("hola probando onChange") 
    alert('saliste del input sin rellenar')   
}
function onInput() 
{
    console.log("hola probando onInput")   
    alert('saliste del input sin rellenar') 
}

//Agregando clase
//.classList.add='probandoModoOscuro'
//.classList.remove='probandoModoOscuro'






