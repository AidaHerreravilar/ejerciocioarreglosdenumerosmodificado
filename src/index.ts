let nromes: number[] = [0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < nromes.length; index++) {
  nromes[index] = Number(prompt("ingrese un numero"));
}

for (let i = 0; i < nromes.length; i++) {
  console.log(`ingrese el numero en la posicion, ${i}, es, ${nromes[i]}`);
}
