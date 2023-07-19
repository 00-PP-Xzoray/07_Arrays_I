"use strict";

/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */
// let arr;
// arr = new Array(); // Konstruktor
// arr = [2, 8, 12, 20, 100]; // Literal
// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index 0 (1. Position im Array)
// output(arr[arr.length-1]); // Letzte Position im Array

/* 02a. Theorie: Schleifen (for-schleife) */

/* For -Schleifen als allg. Wiederholungs-Struktur */

// for (let i = 0; i < 10; i++) {
//     output(i);
// }

// Dekrement (obere Grenze --> untere Grenze)

// for (let i = 20; i > 0; i--) {
//     output(i);
// }

// Inkrement (var. Schrittweite)

// for (let i = 70; i > 0; i-=3.5) {
//     output(i);
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
// let arr = ["Ich","bin","der","schwule","Cagri","Kurt"];
// for (let i = 0; i < arr.length; i++) {
//     output(arr[i]);
// }






/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","der","coole","Sohrab","Arenja"));

function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 + PUNCT;
return str;
}

// *** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentence("Ich","bin","der","coole","Sohrab","Arenja"));

// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + PUNCT;
// return str;
// }

/*** 01b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...
output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str; 

    for (let i = 0; i < arr.length; i++) {
    output(arr[i]); // Array-Index --> Mapping
    }
    return str;

}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}