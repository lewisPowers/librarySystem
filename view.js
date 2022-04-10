
// // import myLibrary from '/librarySystem.js';

// // export default (function() {
// //   return displayLibraries();
// // })()

// function formatData(obj) {
//   let staging = [];
//   for (key in obj) {
//     if (typeof obj[key] === 'string') staging.push(`${key}: ${obj[key]}`);
//   }
//   return staging;
// }

// function displayLibraries() {
//   let container = document.getElementsByClassName('container')[0];
//   let lib = myLibrary();
//   for (section in lib) {
//     let headingText = `My List of ${section}:`;
//     let headingElement = document.createElement('h2');
//     let card = document.createElement('div');
//     card.classList.add('card')
//     headingElement.textContent = headingText;
//     card.append(headingElement);
//     let staging = formatData(lib[section]);
//     staging.forEach(item => {
//       let li = document.createElement('h3');
//       li.textContent = item;
//       card.append(li);
//     })
//     container.append(card)
//   }
// }

// myLibrary('dogs', function() {
//   return {
//     'My Dog': 'Bear',
//     'A Big Dog': 'Great Dane',
//     'A  Little Dog': 'Pug'
//   }
// })
// myLibrary('family', function() {
//   return {
//     'My Daughter': 'Tula',
//     'My Son': 'Jesse',
//     'My Mother': 'Marsha',
//     'My Sister': 'Joan'
//   }
// })
// myLibrary('groceries', function() {
//   return {
//     'Bread': 'Wheat',
//     'Cheese': 'Cheddar',
//     'Meat': 'Roast Beef',
//     'Condiment One': 'Mayo',
//     'Condiment Two': 'Mustard'
//   }
// })


// displayLibraries();