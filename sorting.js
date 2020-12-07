import { swap, randomArray } from './helpers.js'

const a = randomArray(100, 10)

console.log(a)

function bubbleSort(a){
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < a.length; i++) {
            if(a[i] > a[i + 1]) {
                swap (a, i, i + 1)
            }
        }
    }
    return a
}

console.log(bubbleSort(a))

console.log(bubbleSort([9, 1, 6, 8, 4]))