import { randomArray } from './helpers.js'

const arr = randomArray(100, 10)
arr.sort((a, b) => a - b)
console.log(arr)


const storage = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]
storage.sort() //bokstavsordning by default
console.log(storage)


const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' }
]
kids.sort((a, b) => (a.naughtyScore > b.naughtyScore) ? 1 : ((b.naughtyScore > a.naughtyScore) ? -1 : 0)) //if-else sats i arrowfunktion
console.log(kids)

//ett annat sätt, med age denna gång
function compare (a, b) {
    if (a.age < b.age){
        return -1
    }
    if (a.age > b.age){
        return 1
    }
    return 0
}

kids.sort(compare)
console.log(kids)

//med namn nu
kids.sort((a, b) => (a.name > b.name) ? 1 : -1)
console.log(kids)