
function formatData(obj) {
  let staging = [];
  for (key in obj) {
    if (typeof obj[key] === 'string') staging.push(`${key}: ${obj[key]}`);
  }
  return staging;
}

function displayLibraries() {
  let container = document.getElementsByClassName('container')[0];
  let lib = myLibrary();
  for (section in lib) {
    let headingText = `My List of ${section}:`;
    let headingElement = document.createElement('h2');
    let card = document.createElement('div');
    card.classList.add('card')
    headingElement.textContent = headingText;
    card.append(headingElement);
    let staging = formatData(lib[section]);
    staging.forEach(item => {
      let li = document.createElement('h3');
      li.textContent = item;
      card.append(li);
    })
    container.append(card)
  }
}
displayLibraries();