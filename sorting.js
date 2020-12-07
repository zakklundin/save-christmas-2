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


function findMinIndex(a, m, n) {
    let Min = m
    for (let i = m; i < n + 1; i++) { //n+1 eftersom n motsvarar en position i ett array
        if(a[i] < a[Min]){
            Min = i
        }
    }
    return Min
}
const arr = [5, -6, 0, 3, -1]
console.log(findMinIndex(arr, 1, 3)) //borde ge 1 eftersom arr[1] är minst