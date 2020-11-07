// const generarGrillaCuadrada = (tamanio) => {
//     let matriz = []

//     for (let i = 0; i < tamanio; i++) {
//         matriz[i] = []
//         for (let j = 0; j < tamanio; j++) {
//             matriz[i][j] = "hola"

//         }

//     }
//     return matriz
// }

// console.log(generarGrillaCuadrada(3))

// const generarGrillaSimple = (filas, columnas) => {
//     let matriz = []

//     for (let i = 0; i < filas; i++) {
//         matriz[i] = []
//         for (let j = 0; j < columnas; j++) {
//             matriz[i][j] = "hola"

//         }

//     }
//     return matriz
// }

// console.log(generarGrillaSimple(3, 2))

const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']
const numeroAlAzar = (array) => {
    return Math.floor(Math.random(1, 5) * array.length)
}

const grilla = document.querySelector('.contenedor-grilla')
const generarGrilla = (filas, columnas, array) => {
    let matriz = []

    for (let i = 0; i < filas; i++) {
        matriz[i] = []
        for (let j = 0; j < columnas; j++) {
            
            matriz[i][j] = `<div class="grilla">
                            ${array[numeroAlAzar(array)]}
                            </div>`

            grilla.innerHTML += `${matriz[i][j]}`
        }
    }
    return grilla
}

generarGrilla(4, 4, items)




