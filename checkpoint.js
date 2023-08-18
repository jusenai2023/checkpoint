const hobbies = ['andar de bike', 'assistir serie', 'jogar volei'];

console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[0] = 'andar de bike';
console.log(hobbies);

hobbies.length;
console.log (hobbies.length);

hobbies.push('assistir serie'); 
console.log(hobbies);

hobbies.pop(); 
console.log(hobbies);

let posicao = hobbies.indexOf('Jogar volêi'); 
hobbies.splice(posicao, 1); 
console.log(hobbies);
hobbies.splice(1, 1); 
console.log(hobbies);

const hobbiesDoAmigo = ['cantar', 'dançar', 'tocar violão'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo); 
console.log(todosOsHobbies);

const hobbiesMusicais = ['letras de música', 'tocar pandeiro', 'escutar música'];
const hobbiesEsportivos = ['corrida', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar', 'escrever histórias', 'fazer esculturas'];
const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];
console.log(categoriasDeHobbies);

console.log(categoriasDeHobbies[0][0]); 
console.log(categoriasDeHobbies[0][2]);