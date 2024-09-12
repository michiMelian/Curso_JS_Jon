 
 //Ejercicio 1 CHATGPT
 /*
 function contar(cadena){

    if (typeof cadena === "string") {
        return cadena.length
    } else {
        throw new Error("La cadena debe ser una string.");

    }
    
}
let resultado1 = contar()
console.log(resultado1)

//Ejercicio 1  Forma de Jon No tan eficiente
function contarCadena(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena")
    } else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres. `)
    }
}
contarCadena( )



//Ejercicio2

function texCortado(cadena,numCaract){
    if (typeof cadena === "string" && numCaract > 0) {
        return cadena.substring(0,numCaract)
    } else if (typeof cadena !=="string" ){
        throw new Error("La cadena debe ser una string.");

    } if(numCaract <= 0){
        return "Entra en caja viejo"
    }
}
let miCadena="hola mundo"
let resultado = texCortado(miCadena,8)
console.log(resultado)

//Forma de Jon No tan eficiente
const recortarTexto=(cadena="", longitud= undefined)=>
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :(longitud===undefined )
        ?console.warn("no ingresaste la longuitud para acortar el texto")
        :console.info(cadena.slice(0,longitud))

        recortarTexto("Hola Mundo",8)




//Ejercicio 3

function miFuncion(cadena){
    if (typeof cadena === "string" ) {
        let array = cadena.split(" ")
        console.log(array)
        
    } else {
        throw new Error("La cadena debe ser una string.");
}
    
}
miFuncion("guasa guasa")

//Forma de Jon
const cadenaAArreglo =(cadena="",separador=undefined)=>
    (!cadena)
?console.warn("No ingresaste una cadena de texto")
:(separador===undefined )
?console.warn("no ingresaste el caracter separador")
:console.info(cadena.split(separador))
cadenaAArreglo("lorem")

//Ejercicio 4
*
function repetir(cadena,numVeces){
    if (typeof cadena === "string" && numVeces > 0) {
        let resultado = cadena.repeat(numVeces).split(cadena).join(cadena + ", ")
        resultado = resultado.slice(0,-2)
        console.log(resultado)
    } else {
        throw new Error("La cadena debe ser una string.");
        
    }
}
 
//repetir("mamadora", 6)

//Forma de Jon 
const repetirTexto=(texto=" ",veces=undefined)=>{
    if (!texto) return console.warn("No ingresaste un texto")
    
    if(veces===undefined) return console.warn("No ingresaste el numero de veces a repetir el texto")
        
    if(veces===0) return console.error("El numero de veces no puede ser 0")

    if(Math.sign(veces)===-1) return console.error("El numero de veces no puede ser negativo")

    for(let i=0;i<veces;i++) console.info(`${texto},${i}`)
    }

   // repetirTexto("kikesr kirtd", 5)

   //Ejercicio 5

 /*  function invertirPalabras(cadena) {
    let palabras = cadena.split(" ");
    let palabrasInvertidas = palabras.map(palabra => {
      return palabra.split("").reverse().join("");
    });
    let cadenaInvertida = palabrasInvertidas.reverse().join(" ");
    return cadenaInvertida;
  }
  
  let texto = "Hola Mundo";
  let textoInvertido = invertirPalabras(texto);
  console.log(textoInvertido); 
  *
//Forma de Jon Mejorada a la forma de Michi
    const invertirCadena =(cadena="")=>
       (!cadena)
       ?console.warn("No ingresaste una cadena")
       :(typeof cadena !=="string")
       ?console.error("No ingresaste un String")
       :console.info(cadena.split("").reverse().join(""))
       invertirCadena("mimi")

  //Ejercicio 6
  *
  function contarPalabras(cadena, palabra) {
    // Divide la cadena en un array de palabras
    let palabras = cadena.toLowerCase().split(" ");
    let contador = 0;
    palabras.forEach(p => {
      if (p === palabra.toLowerCase()) {
        contador++;
      }
    });
  
    return contador;
  }
  let texto = "Hola mundo hola Mundo hola";
  let palabraABuscar = "hola";
  let conteo = contarPalabras(texto, palabraABuscar);
  console.log(`La palabra "${palabraABuscar}" se repite ${conteo} veces.`); // Salida: La palabra "hola" se repite 3 veces.
  *
  //Forma de Jon
  const contCadena=(cadena="",palabra="")=>{
   if (!cadena) return console.warn("No ingresaste una cadena")
   if (!palabra) return console.warn("No ingresaste una palabra a evaluar")

    let i =0,
     cont = 0

    while(i!==-1){
        i=cadena.indexOf(palabra,i)
        if(i!==-1){
            i++
            cont++
        }
    }
    return console.info(`La palabra ${palabra} se repite ${cont} veces`)
  }

    //contCadena("hola hola hola","hola")

  //Ejercicio 7
  function essPalindromo(cadena) {
    let cadenaLimpia = cadena.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
  }
  
  let palabra = "Anita lava la tina";
  //console.log(esPalindromo(palabra)); 
  
  palabra = "hola";
 // console.log(esPalindromo(palabra)); 
  
 //Forma de Jon
const esPalindromo = (texto="")=>{
    if (!texto) return console.warn("No ingresaste un texto o frase")
        texto=texto.toLowerCase()
    let textoInver =texto.split("").reverse().join("")
    return texto===textoInver

}
let palabras="anita lava la tina"
console.info(esPalindromo(palabra))

*
// Ejercicio 8 ChatGPT

function eliminarPatron(cadena, patron) {
    let regex = new RegExp(patron, 'g');
    let nuevoTexto = cadena.replace(regex, '');
    return nuevoTexto;
}

let texto = "Hola, este es un texto de ejemplo. Este texto contiene un patrón.";
let patron = "texto"; 
let resultado = eliminarPatron(texto, patron);

//console.log(resultado);

//Forma de Jon
const eliminarCaracteres=(texto="",patron="")=>
    (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
    ?console.warn("No ingresaste un patron de caracteres")
    :console.info(texto.replace(new RegExp(patron,"ig"),""))

    //eliminarCaracteres("hola")
    //eliminarCaracteres("hola","")

//Ejercicio 9

const obtenerNumero=(min,max)=>
    (min<=0 || max<=0) 
        ?console.warn("Seras come kk")
        :console.info(Math.floor(Math.random()*(max-min+1))+min)

        //obtenerNumero(1,5)

//Forma de Jon
        const aleatorio =()=> console.info(Math.round((Math.random()*100)+500))
            //aleatorio()


 //Ejercicio 10 
 const esCapicua =(numero="")=>{
    if (!numero) return console.warn("estas comiendo kk") 
        const numeroString=numero.toString()
    const numeroInvertido=numeroString.split("").reverse().join("")
    return numeroString===numeroInvertido
}

    //console.log(esCapicua("hola"))

// Ejercicio 11

const numeroPrimo=(numero=undefined)=>{
   if(numero===undefined) return console.warn("No ingresaste ningun numero")

    if(typeof numero !=="number") return console.error(`El valor ${numero} ingresado, no es un numero`)

    if(numero === 0)return console.error("el numero no puede ser 0")

    if(numero === 1)return console.error("el numero no puede ser 1")

    if(Math.sign(numero)===-1) return console.error("El numero no puede ser negativo")

    let divisible= false
    for(let i =2;i<numero;i++){
        if((numero%i)===0){
            divisible=true
            break
        }
    }
    return (divisible)
    ?console.info(`El numero ${numero}, NO es primo`)
    :console.info(`El numero ${numero}, Si es primo`)

}

*
//Ejercicio 27

class pelicula{
constructor({id,titulo,director,estreno,pais,genero,calificacion}){
 this.id=id;
 this.titulo=titulo;     
 this.director=director;     
 this.estreno=estreno;     
 this.pais=pais;     
 this.genero=genero;     
 this.calificacion=calificacion;     
      
 this.validarIMDB(id)
}

    validarCadena(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`)

        if(typeof valor!== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`)
    
          return true
        }

 validarIMDB(id){
     if(this.validarCadena("IMDB id",id)){
        if (!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros
                letras minusculas, los 7 restantes numeros.`)
        }
     }
 }
}

//CONTINUARA Seguire con las demas clases 
*/

//SECCION 44









