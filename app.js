

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// function randomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
// }



// Generuokite atsitiktinį skaičių, pasirenkate iki kokio dydžio skaičius programa galvos.
// • Gaukite duomenis kuriuos vartotojas įveda po mygtuko paspaudimo
// • Sukurkite funkciją kuri patikrintų, ar vartotojo įvesti duomenys yra sudaryti tik iš skaitmenų.
// • Sukurkite funkciją kuri patikrintų ar spėjimas yra didesnis, ar mažesnis, ar atspėtas.
// • Išveskite duomenis vartotojui apie jo spėjimo rezultatus.
// • Atspėjus skaičių puslapyje parodomas koks nors paveikslėlis.
// • Paspaudus mygtuką pradėti iš naujo, žaidimas prasideda iš naujo
// const
let userInput = 2;
let randomNum = Math.floor(rand(1, 10));
console.log(randomNum);

function evaluateGuess(){
    if(userInput === randomNum){
        console.log("Your guess is right!");
    } else if(userInput > randomNum){
        console.log("Too high!");
    } else if (userInput < randomNum){
        console.log("Too low!");
    }
}

evaluateGuess();