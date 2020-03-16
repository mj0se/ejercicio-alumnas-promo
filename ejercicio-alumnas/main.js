'use strict';


let promoText = document.querySelector('.js-result');

const promos = [{
    promo: 'A',
    name: 'Ada',
    students: [{
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [{
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [{
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];
// function exerciseOne() {

//   let htmlCode = `<ul>`;
//   for (let promo of promos) {

//     console.log(promo.name);
//     htmlCode += `<li>${promo.name}</li>`;

//   }

//   htmlCode += `</ul>`;

//   promoText.innerHTML = htmlCode;
// }


// exerciseOne();



// function exerciseTwo() {

//   let htmlCode = `<ul>`

//   for (let promo of promos) {
//     htmlCode += `<li>`
//     htmlCode += `<p>`
//     htmlCode += `Nombre: ${promo.name}`
//     htmlCode += `</p>`
//     htmlCode += `<p>`
//     htmlCode += `Promo: ${promo.promo}`
//     htmlCode += `</p>`
//     htmlCode += `<p>`
//     htmlCode += `Número de alumnas: ${promo.students.length}`
//     htmlCode += `</p>`
//     htmlCode += `</li>`

//   }

//   htmlCode += `</ul>`

//   promoText.innerHTML = htmlCode;
// }


// exerciseTwo();


// function exerciseFour() {

//   let htmlCode = `</ul>`
//   for (let promo of promos) {
//     htmlCode += `<li>`
//     htmlCode += ` <p> Nombre: ${promo.name} </p>`
//     htmlCode += `<ul>`

//     for (let student of promo.students) {
//       console.log(student.name);
//       htmlCode += `<li>`
//       htmlCode += `${student.name}: ${student.age}`
//       htmlCode += `</li>`
//     }
//     htmlCode += `</ul>`
//     htmlCode += `</li>`
//     console.log(promo);
//   }
//   htmlCode += `</ul>`
//   promoText.innerHTML = htmlCode;

// }

// exerciseFour();

// function exerciseFive() {
//   let htmlCode = `<ul>`
//   for (let promo of promos) {
//     htmlCode += `<li>`
//     htmlCode += `<p>Nombre: ${promo.name}</p>`
//     htmlCode += `<ul>`
//     for (let student of promo.students) {
//       htmlCode += `<li id =${student.id}>`
//       htmlCode += `${student.name}, ${student.age}`
//       htmlCode += `</li>`
//       console.log(student.id, student.name, student.age);
//     }
//     htmlCode += `</ul>`
//     htmlCode += `</li>`
//   }
//   htmlCode += `</ul>`
//   promoText.innerHTML = htmlCode;
// }


// exerciseFive()



// function exerciseSix() {

//   let htmlCode = `<ul>`
//   for (let promo of promos) {

//     htmlCode += `<li>`
//     htmlCode += `<p>Nombre: ${promo.name}</p>`
//     htmlCode += `<ul>`



//     for (let student of promo.students) {

//       if (student.age % 2 === 0) {
//         htmlCode += `<li id =${student.id}>`
//         htmlCode += `${student.name}, ${student.age}`
//         htmlCode += `</li>`
//         console.log(student.id, student.name, student.age);
//       }
//     }
//     htmlCode += `</ul>`
//     htmlCode += `</li>`
//   }
//   htmlCode += `</ul>`
//   promoText.innerHTML = htmlCode;


// } {

// }


// exerciseSix()



//  exercise eigth
