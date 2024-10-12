//Ejercicio de codigo JS para calcular la determinante de una matriz cuadrada de cualquier orden utilizando recursividad

function determinante2x2(m) {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

function determinante3x3(m) {
  const a = m[0][0] * m[1][1] * m[2][2] + m[1][0] * m[2][1] * m[0][2] + m[0][1] * m[1][2] * m[2][0]
  const b = m[2][0] * m[1][1] * m[0][2] + m[2][1] * m[1][2] * m[0][0] + m[1][0] * m[0][1] * m[2][2]
  return a - b;
}

function esDeOrdenCuadrada(m) {
  const orden = m.length

  for(let i = 0; i < orden; i++) {
    if(m[i].length !== orden) {
      return false;
    }
  }

  return true;
}

function nuevaMatriz(m, columna) {
  let nuevaMatriz = m.slice(1)
  nuevaMatriz = nuevaMatriz.map(row => row.filter((_, index) => index !== columna));
  return nuevaMatriz;
}

function calcularDeterminante(m) {
  const orden = m.length
  if(orden === 1) return m[0][0]
  if(orden === 2) return determinante2x2(m)
  if(orden === 3) return determinante3x3(m)
  
  //recursividad orden superior
  let total = 0;
  for(let i = 0; i < orden; i++) {
    const multiplicador = m[0][i]
    const subMatriz = nuevaMatriz(m, i)

    if(i % 2 == 0) {
      total += calcularDeterminante(subMatriz) * multiplicador;
    } else {
      total -= calcularDeterminante(subMatriz) * multiplicador;
    }
  }

  return total
}

const m1 = [
  [2, -4, -5],
  [1, 0, 4],
  [2, 3, -6]
]

const m2 = [
  [2, -1, 0, 5],
  [0, 2, 3, 1],
  [1, 0, -1, 4],
  [2, 1, -2, 8]
]

console.log(calcularDeterminante(m2))