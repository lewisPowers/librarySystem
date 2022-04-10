(function(root, undefined) {
  let storageObject = {};
  // let libProto = {
  //   findDescription: function(lib, name) {
  //     for (key in lib) {
  //       if (lib[key] === name) return key;
  //     }
  //     return `Couldn't find anything that matches ${name}`
  //   },
  //   storeNew: function(lib, key, value) {
  //     lib[key] = value;
  //   }
  // }


  let view = function() {
    function formatData(obj) {
      let staging = [];
      for (key in obj) {
        if (typeof obj[key] === 'string') staging.push(`${key}: ${obj[key]}`);
      }
      return staging;
    }

    function displayLibraries() {
      let container = document.getElementsByClassName('container')[0];
      container.innerHTML = '';
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
  };





  function LibraryFunctions(lib) {
    this.libraryName = lib;
    this.library = librarySystem(lib);
    this.findDescription = function(name) {
      for (key in this.library) {
        if (this.library[key] === name) return key;
      }
    };
    this.findName = function(description) {
      for (key in this.library) {
        if (key === description) return this.library[key];
      }
    };
    this.storeNew = function(key, value) {
      this.library[key] = value;
      return this.library[key]
    }
  }

  function isLibraryPresent(name) {
    for (item in myLibrary()) {
      if (item === name) return true;
    }
    return false;
  }

  function librarySystem(name, callback) {
    if ( arguments.length < 1 ) return storageObject;
    if ( arguments.length < 2 ) return storageObject[name];
    storageObject[name] = callback();
    storageObject[name]._ = new LibraryFunctions(name);
  }

  root.myLibrary = librarySystem;

  let controls = function() {
    let libInputElement = document.getElementById('library');
    let desInputElement = document.getElementById('description');
    let nameInputElement = document.getElementById('name');
    let addButton = document.getElementById('submit');

    // libInputElement.addEventListener('keyup', function(e) {
    //   console.log(e.target.value)
    // })

    nameInputElement.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') updateDOM(e);
    })

    addButton.addEventListener('click', updateDOM);

    function updateDOM(e) {
      let libraryName = libInputElement.value;
      let description = desInputElement.value;
      let name = nameInputElement.value;
      if (!libraryName || ! description || !name) return;
      console.table(libraryName, description, name);
      if (isLibraryPresent(libraryName)) {
        // add key/value to lib obj
        myLibrary()[libraryName][description] = name;
      } else {
        librarySystem(libraryName, function() {
          return {
            [description]: name
          }
        })
      }
      // libInputElement.value = '';
      desInputElement.value = '';
      nameInputElement.value = '';
      desInputElement.focus();
      view();
    }
  }

  myLibrary('dogs', function() {
    return {
      'My Dog': 'Bear',
      'A Big Dog': 'Great Dane',
      'A  Little Dog': 'Pug'
    }
  })
  myLibrary('family', function() {
    return {
      'My Daughter': 'Tula',
      'My Son': 'Jesse',
      'My Mother': 'Marsha',
      'My Sister': 'Joan'
    }
  })
  myLibrary('groceries', function() {
    return {
      'Bread': 'Wheat',
      'Cheese': 'Cheddar',
      'Meat': 'Roast Beef',
      'Condiment One': 'Mayo',
      'Condiment Two': 'Mustard'
    }
  })


  view();
  controls();

})(this)