//const fullName = 'Amer Alomayri';

//let firstName = fullName.split(' ')[0];

//console.log(firstName);

//const firstNameArrow = (fullName) => fullName.split(' ')[0];

//console.log(firstNameArrow('Amer Alomayri'));

const user = {
    'name':'Amer',
    'cities':['Wellington','Auckland','Christchurch'],
    printPlaces(){
        return this.cities.map((city) => this.name +' has lived in ' + city);
    }
}
console.log(user.printPlaces())
const multiplier = {
    numbers:[1,2,3,4],
    multiplyBy:6,
    multipy(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    //  multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
}
console.log(multiplier.multipy());