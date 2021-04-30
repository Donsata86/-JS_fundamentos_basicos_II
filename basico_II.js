// Tamaño Grande - Dado un array, escribe una función que cambie todos
//  los números positivos en él, por el string “big”.
//  Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function grande(arreglo) {
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 0) {
            arreglo[i] = "Big";
        }
    }
    return arreglo;

}
console.log(grande([-1, 3, 5, -5]));

// Imprime (print) el menor, devuelve (return) el mayor - 
// Crea una función que tome un array de números. 
// La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

function printMenorRetornaMayor(arreglo) {
    min = 0;
    max = 0;
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
        if (arreglo[i] < min) {
            min = arreglo[i];
        }
    }
    console.log("el valor minimo del array es:" + min)
    return max;
}
console.log(printMenorRetornaMayor([-5, 13, 0, 2, -1]));

// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
// La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function printPenultimoReturnPrimero(arreglo) {
    primerImpar = 0
    for (i = 0; i < arreglo.length; i++) {
        console.log(arreglo[arreglo.length - 2]);
        if ((arreglo[i] % 2) !== 0) {
            primerImpar = arreglo[i];
            break;
        }
    }
    return primerImpar;
}
console.log(printPenultimoReturnPrimero([-3, 13, 0, 2, -1]));

// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
// Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(arreglo) {
    var arregloDoble = []
    for (i = 0; i < arreglo.length; i++) {
        arregloDoble[i] = arreglo[i] * 2;
    }
    return arregloDoble;
}
console.log(doble([1, 2, 3]));

// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor
//  con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) 
//  cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(arreglo) {
    positivos = 0
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 0) {
            positivos++;
        }
    }
    arreglo[arreglo.length - 1] = positivos;
    return arreglo;
}
console.log(contarPositivos([-1, -1, 1, 1]));

// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos,
// imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function paresImpares(arr) {
    var impares = 0;
    var pares = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            impares++;
            pares = 0;
        } else {
            pares++;
            impares = 0;
        }
        if (impares == 3) {
            console.log("¡Qué imparcial!");
            impares = 0;
        } else if (pares == 3) {
            console.log("¡Es para bien!");
            pares = 0;
        }
    }
}
paresImpares([1, 2, 3, 5, 7, 1, 2, 4, 6]);

// Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
// específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
// Luego, console.log cada valor del array y devuelve arr. 

function incrementaSegundos(arr) {

    for (var i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] + 1;
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementaSegundos([1, 1, 1, 1, 1, 1, 1]));



// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’)
//  que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) 
//  del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver
//   [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?


function longitudesPrevias(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;

}

console.log(longitudesPrevias(["programar", "dojo,", "genial"]));


// // Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original,
//  pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10]
//   en un nuevo array. 

function agregaSiete(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 7;
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(agregaSiete([1, 2, 3]));

// // Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
// Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3].
//  Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function invertir(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(invertir([2, 4, 6, 1, 3]));

// // Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original,
//  pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function todosNegativos(arr) {

    var newArr = [];
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(todosNegativos([1, -3, 5, 6, -7]))

// // Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores 
// sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function hambriento(arr) {
    var alimentos = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("yummy");
            alimentos = true;
        }
    }
    if (alimentos == false) {
        console.log("tengo hambre");
    }
}
hambriento([1, "conding", "sdf"]);


// // Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
//  Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true].
//   cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) 
//   el array esta vez. 


function cambiaHaciaElCentro(arr) {
    for (var i = 0; i < arr.length / 2; i += 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]));


// // Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num,
//  y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function escalaArray(arr, y) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * y;
    }
    return arr;

}
console.log(escalaArray([1, 2, 3], 3));