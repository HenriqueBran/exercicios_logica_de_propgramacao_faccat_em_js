 
let votosbrancos, votosnulos, votosvalidos, totaldeeleitores, pvotosbrancos;


console.log("Total de votos brancos:");
votosbrancos = parseFloat(prompt());

console.log("Total de votos nulos:");
votosnulos = parseFloat(prompt());

console.log("Total de votos válidos:");
votosvalidos = parseFloat(prompt());


totaldeeleitores = votosbrancos + votosnulos + votosvalidos;
pvotosbrancos = (votosbrancos * 100 / totaldeeleitores);


console.log("A porcentagem de votos brancos é:", pvotosbrancos.toFixed(2) + "%");
