const BD_INMUEBLES = [
    {
        datosPropietario : {
            nombre : "Pedro", 
            documento : 19029372828, 
            genero : "M", 
            fechaNacimiento : "1984-10-25"
        }, 
        mensualidades : [
            {
                metrosCuadrados : 150, 
                tipoInmueble : "A", 
                numeroHabitantes : 3, 
                fechaMensualidad : "2020-01"
            }, 
            {
                metrosCuadrados : 140, 
                tipoInmueble : "A", 
                numeroHabitantes : 4, 
                fechaMensualidad : "2020-02"
            }
        ]
    }, 
    {
        datosPropietario : {
            nombre : "Maria", 
            documento : 119837462, 
            genero : "F", 
            fechaNacimiento : "1990-01-10"
        }, 
        mensualidades : [
            {
                metrosCuadrados : 300, 
                tipoInmueble : "C", 
                numeroHabitantes : 6, 
                fechaMensualidad : "2020-03"
            }
        ]
    }
]
/*var numero1 = 0
function suma(numero2){
    numero1 = guardarMensualidad()
    suma = numero1 + numero2
    return suma
}
function imprimirNumero1(){
    return numero1
}*/

var sumar = (n1, n2) => n1 + n2

let guardarMensualidad = event => {
    let a,  b,  sum
    a = 3
    b = 5
    sum = a + b
    console.log(event)
    console.log("Suma = ", sum)
}


document.querySelector("#btn-guardar-mensualidad-inmueble").addEventListener("click", e => {
    if(document.querySelector('#frm-mensualidad').reportValidity()){
        let nombre = document.querySelector("#nombre-propietario").value
        let documento = document.querySelector("#documento-propietario").value
        let metrosCuadrados = document.querySelector("#metros-inmueble").value
        let tipoInmueble = document.querySelector("[name='tipo-inmueble']:checked").value

        //let nombres = ["carlos",  "juan",  "manuela"]
        let datosDePropietario = {
            nombre : nombre, 
            documento : documento 
        }
        
        let datosInmueble = {
            metrosCuadrados : metrosCuadrados, 
            tipoInmueble : tipoInmueble, 
        }
        
        let dim = BD_INMUEBLES.push({
            datosPropietario : datosDePropietario, 
            mensualidades : [
                datosInmueble
            ]
        })
        
        alert("Se agrego un nuevo elemento. Dimensión: " + dim)

        console.log(BD_INMUEBLES);
        
        
        //let nombres = ["oscar", "andrea", "Juan", "david"]
       // nombres.push(nombre, "Mario")
       // console.log("nombre : ", nombre)
       // console.log("documento : ", documento)
        
        /*let i = 0
        while(i <= 5){
            console.log(i, nombres[i])
            i = i + 1 //i++
            i = i - 1 //i--
        } */
        /*
        for(let i = 0; i < nombres.length; i++){
            console.log(i, nombres[i])
        }
        */
       /*
       for (let i in nombres) {
            console.log(i, nombres[i])
       } */
       /*
       for (const nom of nombres) {
           console.log(nom)
       }
       */
      
      //let r = nombres.map( nombre => "Su nombre es " + nombre)
      //console.log("La respuesta es :",r)
    }
}
)