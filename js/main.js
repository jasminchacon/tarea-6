function generar_fibonacci(limite) {
    let fib = [0, 1];
    while (true) {
        let siguiente = fib[fib.length - 1] + fib[fib.length - 2];
        if (siguiente > limite) break;
        fib.push(siguiente);
    }
    return fib;
}
function clasificar_pares_impares(numeros) {
    let pares = numeros.filter(num => num % 2 === 0);
    let impares = numeros.filter(num => num % 2 !== 0);
    return {pares, impares};
}
const limite = 1000;
const fibonacci = generar_fibonacci(limite);
const {pares, impares } = clasificar_pares_impares(fibonacci);
console.log("secuencia de fibonacci (0 - 1000):", fibonacci);
console.log("numeros_pares", pares);
console.log("numeros_impares", impares);

// 2do arreglo

const numero_a_letras = {
    0: "cero",
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro", 
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve",
    10: "diez",
};
function convertir_numeros_a_letras(arreglo_numeros) {
    return arreglo_numeros.map(num => {
        const nombre = numero_a_letras[num];
    return nombre ? nombre.toUpperCase() : "DESCONOCIDO";
});
}
const numeros = [0, 1, 2, 5, 9, 10];
const numeros_en_letras = convertir_numeros_a_letras(numeros);
console.log("arreglo de numeros :", numeros);
console.log("arreglo en letras :", numeros_en_letras);

//3er arreglo

const pokemones = [
    { nombre: "pikachu", tipo: "electrico" },
    { nombre: "bulbasaur", tipo: "planta" },
    { nombre: "charmander", tipo: "fuego"},
    { nombre: "squirle", tipo: "agua"},
    { nombre: "vulpix", tipo: "fuego"},
];
function filtrar_pokemon_tipo_fuego(pokemones) {
    return pokemones.filter(pokemon => pokemon.tipo.toLowerCase() === "fuego");
}
const pokemones_tipo_fuego = filtrar_pokemon_tipo_fuego(pokemones);
console.log("pokemon tipo fuego", pokemones_tipo_fuego);

