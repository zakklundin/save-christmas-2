# Save Christmas part 2. (a.k.a. fler algoritmer) :santa:

Jultomten har bett oss att implementera algoritmer för att sortera arrayer. Han behöver dem för att sortera julklappar, barn, med mera.

## Förberedelser

Kolla igenom filen `helpers.js`. Där ser du två stycken funktioner varav den ena **exporteras**. Det betyder att den kan **importeras** och användas i andra filer. Mycket användbart!

Innan du fortsätter:
* Vad heter funktionen i `helpers.js` som exporteras?
* Vad gör den?

## Algoritm 1. Byta plats på två element

Hur byter vi plats på två element i en array?

Vad blir resultatet av dessa rader? Vad blir fel?
````javascript
// a är en array
a[3] = a[5]
a[5] = a[3]
````

<details>
<summary>Svar</summary>

Båda elementen kommer ha värdet `a[5]`.

Värdet av `a[3]` tappas bort.
</details>

Vi tänker alltså fel, det här fungerar inte. 

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

### Swap

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

## Algoritm 2. Bubble sort

Den första sorteringsalgoritmen man brukar få lära sig heter **Bubble Sort**.

Kolla på [detta klipp]() som förklarar hur Bubble Sort  fungerar.

* Öppna filen `sorting.js`. 
* Importera funktionen `swap` från `helpers.js`
* Implementera Bubble Sort

<details>
<summary>Ledtråd 1</summary>

````javascript
// för varje element i arrayen
//      Om a[i] är större än a[i+1], byt plats på dem
````
</details>

<details>
<summary>Ledtråd 2</summary>

Du behöver en loop som ligger i en annan loop.
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

# Inbyggda funktioner

Ho ho hoppsan! Det finns visst en inbyggd sortering i javascript.

Skapa en ny fil `playground.js`.

Importera funktionen `randomArray` från `helpers.js` och skapa en ny array av längd 100.

Använd den inbyggda Array-metoden [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) för att sortera arrayen.

# Fördjupning

Varför ska man lära sig sorteringsalgoritmer om de redan finns implementerade?

1. Det är bra övning
2. Se punkt 1.

## Selection sort

Kolla på [detta klipp]() som förklarar hur selection sort fungerar.

Skapa en funktion `selectionSort` i `sorting.js` som sorterar en array med hjälp av **Selection Sort**

## Insertion sort

Kolla på [detta klipp]() som förklarar hur insertion sort fungerar.

Implementera i en funktion med namnet `insertionSort`.

## Vilken sorteringsalgoritm är bäst?

Kolla klippet nedan (klicka på bilden).

[![bla](https://img.youtube.com/vi/ZZuD6iUe3Pc/0.jpg)](https://www.youtube.com/watch?v=ZZuD6iUe3Pc)

Hitta någon annan algoritm att sätta tänderna i!
