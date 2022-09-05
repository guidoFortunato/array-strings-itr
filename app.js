const btn = document.querySelector("#btn");
const resultadoArrays = document.querySelector("#resultadoArrays");

const arrayInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 31, 51];
let arrayStrings = [];

// let flag = 0
// while (flag !== '-1') {
//   let numeros = prompt('Ingrese números: ')
//   arrayInts.push(numeros)
//   flag = prompt('Ingrese -1 para terminar o cualquier tecla para continuar: ')
// }
// const arrayFizz = arrayInts.reduce( (prev, current) =>{
//   return prev + current
// } )

const llenarArray = () => {
  arrayInts.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      arrayStrings.push(` ${item}: FizzBuzz`);
    } else if (item % 3 === 0 || item.toString().includes(3)) {
      arrayStrings.push(` ${item}: Fizz`);
    } else if (item % 5 === 0 || item.toString().includes(5)) {
      arrayStrings.push(` ${item}: Buzz`);
    } else {
      arrayStrings.push(` ${item}`);
    }
  });
};

const mostrarArrays = () => {
  if (resultadoArrays.textContent.length === 0) {
    llenarArray();
    resultadoArrays.textContent = `[ ${arrayStrings} ]`;
    resultadoArrays.classList.remove("ocultar");
    btn.textContent = "Ocultar el array de strings";
  } else {
    resultadoArrays.textContent = "";
    btn.textContent = "Mostrar el array convertido a strings";
    arrayStrings = [];
    resultadoArrays.classList.add("ocultar");
  }
};

btn.addEventListener("click", mostrarArrays);
