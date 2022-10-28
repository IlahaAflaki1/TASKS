console.log('OUTPUT OF THE QUESTION NUMBER 1');
// TASK NUMBER ONE::::  Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və tərs
//  ardıcıllıqla yazılmış eyni elementlərdən ibarət massivi qaytaran 
// reverseArray () funksiyasını yazın.

const normalArr = ['you', "are", "how", "friend", "my", "Hello"];
function reverseArray(arr) {
    console.log(arr.reverse())
}
reverseArray(normalArr);







console.log('OUTPUT OF THE QUESTION NUMBER 2');
//  TASK NUMBER TWO::::  Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və tərs
// ardıcıllıqla yazılmış eyni elementlərdən ibarət massivi qaytaran 
// reverseArray () funksiyasını yazın.


const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
function greetAliens(arr) {
    arr.forEach(element => {
        console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`)
    });
}
greetAliens(aliens);





console.log('OUTPUT OF THE QUESTION NUMBER 3');
// 2 massivi parametr kimi qəbul edən və onların eyni dəyərli elementlərin konsola çıxaran justCoolStuff () funksiyasını yazın.


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'my room', 'temporary tattoos'];
const myStuff = ['sweaters', 'skateboards', 'family-night', 'my room',
];
const sameStuff = [];
function justCoolStuff(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameStuff.push(arr1[i])
            }
        }
    }
    console.log(sameStuff);
}
justCoolStuff(myStuff, coolStuff);




console.log('OUTPUT OF THE QUESTION NUMBER 4');
// Parametr kimi { ad: “Yeməyin adı”, içərik: “bitki, ət və ya süd” } formatında yeməklər massivini qəbul edən və onların hamısının vegetarian olub - olmadığını müəyyən edən isTheDinnerVegan() funksiyasını yazın.

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
];
const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
];
 var veganScores = true;

const isTheDinnerVegan = (arr) => {
    for(i = 0; i < arr.length; i++){
        if(arr[i].source == 'meat'){
        veganScores = false;
        } 
    }
    console.log(veganScores)
}
isTheDinnerVegan(meal);
isTheDinnerVegan(dinner);



