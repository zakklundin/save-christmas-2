# Save Christmas part 2. (a.k.a. sorteringsalgoritmer) :santa:

Jultomten har bett oss att implementera algoritmer för att sortera arrayer. Han behöver dem för att sortera julklappar, barn, med mera.

## Förberedelser

Kolla igenom filen `helpers.js`. Där ser du två stycken funktioner varav den ena **exporteras**. Det betyder att den kan **importeras** och användas i andra filer. Mycket användbart!

Innan du fortsätter:
* Vad heter funktionen i `helpers.js` som exporteras?
* Vad gör den? Läs rad för rad.

## Bubble sort

Den första sorteringsalgoritmen heter **Bubble Sort**.

Kolla på [detta klipp](https://www.youtube.com/watch?v=xli_FI7CuzA). Förstår du vad som händer?

Som du ser behöver vi kunna **byta plats på två element i en array**. Hur gör man det?

Varför fungerar inte det här?
````javascript
// a är en array
a[3] = a[5]
a[5] = a[3]
````

<details>
<summary>Svar</summary>

````javascript
// Vi skriver över a[3] med a[5]
// Värdet av a[3] tappas bort
// Båda elementen blir därför a[5]
````
</details> 

Vad ska vi åtgärda?
<details>
<summary>Svar</summary>

Vi behöver införa en variabel och mellanlagra värdet av `a[3]`.

````javascript
// a är en array
let temp = a[3]
a[3] = a[5]
a[5] = temp
````

Ser du hur det fungerar?
</details>

<br>

### Swap :arrows_counterclockwise:

Implementera nu en funktion med namnet `swap` i filen `helpers.js`, som byter plats på två godtyckliga element i en array.

Den ska fungera såhär:
````javascript
const a = [5, 8, 10, 9]

swap(a, 1, 3) // byter plats på a[1] och a[3]

console.log(a) // [5, 9, 10, 8]
````

<details>
<summary>Ledtråd 1</summary>

Börja såhär:
````javascript
function swap(a, i, j) {
    
}
````
</details>

<details>
<summary>Ledtråd 2</summary>

````javascript
function swap(a, i, j) {
    // spara a[i] i en tillfällig variabel

    // ersätt a[i] med a[j]
    
    // ersätt a[j] med den tillfälliga variabeln
}
````
</details>

<details>
<summary>Ledtråd 3 (lösning)</summary>

Börja såhär:
````javascript
function swap(a, i, j) {
    let temp = a[i]
    a[i] = a[j]    
    a[j] = temp
}
````
</details>

<br>

Testa så att du vet att funktionen verkligen fungerar.

<br>

Innan du fortsätter:
* Vad returnerar funktionen `swap`?
* Gör så att funktionen `swap` exporteras, på samma sätt som `randomArray`

### Tillbaka till Bubble Sort

Öppna nu filen `sorting.js`. 

Importera funktionen `swap` från `helpers.js`, på samma sätt som `randomArray` är importerad.

````javascript
import { randomArray, swap } from './helpers.js'
// Resten av koden nedanför...
````

Implementera Bubble Sort! Har du glömt bort hur den fungerar? Se [klippet](https://www.youtube.com/watch?v=xli_FI7CuzA) igen.

<details>
<summary>Ledtråd 1</summary>

````javascript
// för varje element i arrayen
//      Om a[i] är större än a[i+1], byt plats på dem
````
</details>

<details>
<summary>Ledtråd 2</summary>

Du behöver en loop som ligger i en annan loop. På engelska säger man *nested* loops.
</details>
<details>
<summary>Ledtråd 3 (lösning)</summary>

````javascript
for (let j = 0; j < a.length - 1; j++) {
    for (let i = 0; i < a.length - 1 - j; i++) {
        if (a[i] > a[i + 1]) {
            swap(a, i, i + 1)
        }
    }
}
````
</details>

<br>

När du är klar, lägg din implementation i en funktion `bubbleSort` så att man kan använda den såhär:
````javascript
const arr =  [5, 8, 3, 1]
bubbleSort(arr)
console.log(arr) // [1, 3, 5, 8]
````

<details>
<summary>Lösning</summary>

````javascript
function bubbleSort(a) {
    for (let j = 0; j < a.length - 1; j++) {
        for (let i = 0; i < a.length - 1 - j; i++) {
            if (a[i] > a[i + 1]) {
                swap(a, i, i + 1)
            }
        }
    }
}
````
</details>

<br>

**När du kommer hem idag, förklara för en förälder eller ett syskon hur bubble sort fungerar.**

<br>

*Bubble-sort with Hungarian ("Csángó") folk dance*

[![BubbleSort](https://img.youtube.com/vi/lyZQPjUT5B4/0.jpg)]((https://www.youtube.com/watch?v=lyZQPjUT5B4&t=45))

<br>

# Inbyggda funktioner

## Array.sort()

Ho ho hoppsan! :santa: **Det finns visst inbyggd sortering i javascript!**

Låt oss undersöka hur den fungerar!

Skapa en ny fil `playground.js`.

Importera funktionen `randomArray` från `helpers.js` och skapa en ny array av längd 100.

Använd den inbyggda Array-metoden [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) för att sortera arrayen.

## Sortera array av strängar

````javascript
const storage = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]
````

Kan du sortera den här arrayen med `Array.sort()`? Prova!

## Hur sorterar man en array av objekt?

````javascript
const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' }
]
````

Om vi t.ex. vill sortera ovanstående på deras `naughtyScore` eller deras `ålder`, hur gör vi då?

Vi behöver skicka in en funktion som argument till `Array.sort()`.

Använd webben för att hitta svaret. Prova!

Du är klar när du kan sortera efter barnens namn, ålder och efter hur stygga de varit.

<details>
<summary>Ledtråd</summary>

Googla på *sort array of objects in javascript*

</details>

<br>

# Fördjupning

Varför ska man lära sig sorteringsalgoritmer om de redan finns implementerade?

1. Det är bra övning
2. Se punkt 1.

## Selection sort

Kolla på [detta klipp](https://www.youtube.com/watch?v=g-PGLbMth_g) som förklarar hur selection sort fungerar. Eller ta hjälp av [Select-sort with Gypsy folk dance](https://www.youtube.com/watch?v=Ns4TPTC8whw).

Som du såg i klippet är ett delsteg i denna algoritm **att hitta positionen för det minsta elementet i en del av arrayen**.

Börja därför med att implementera en funktion som heter `findMinIndex(a, m, n)`. Den ska returnera index för det minsta värdet mellan position m och n för en array.

Exempel:
````javascript
const arr = [5, 7, 0, 3, -1]
findMinIndex(arr, 1, 3) // Ger 3 eftersom arr[3] är 0, vilket är minst av a[0], a[1], a[2] och a[3]
````

<details>
<summary>Lösning</summary>

````javascript
function findMinIndex(a, m, n) {
    let minIndex = m
    for (let i = m; i < n + 1; i++) {
        if (a[i] < a[minIndex]) {
            minIndex = i
        }        
    }
    return minIndex
}
````
</details>

<br>

Klar? 

Implementera nu funktionen `selectionSort` i `sorting.js`. Använd `findMinIndex` som du skapade ovan.

<br>

**När du kommer hem idag, förklara för en förälder eller ett syskon hur selection sort fungerar.**

<br>

## Insertion sort

Kolla på [detta klipp](https://www.youtube.com/watch?v=JU767SDMDvA) som förklarar hur insertion sort fungerar.

*Eller varför inte lite "Insert-sort with Romanian folk dance"?*

[![](https://img.youtube.com/vi/ROalU379l3U/0.jpg)](https://www.youtube.com/watch?v=ROalU379l3U)

Implementera algoritmen i en funktion med namnet `insertionSort`.

**När du kommer hem idag, förklara för en förälder eller ett syskon hur insertion sort fungerar.**

## Vilken sorteringsalgoritm är bäst?

Kolla klippet nedan (klicka på bilden).

[![bla](https://img.youtube.com/vi/ZZuD6iUe3Pc/0.jpg)](https://www.youtube.com/watch?v=ZZuD6iUe3Pc)

Hitta någon annan algoritm att sätta tänderna i!
