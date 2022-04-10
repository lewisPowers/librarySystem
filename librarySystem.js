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

  function librarySystem(name, callback) {
    if ( arguments.length < 1 ) return storageObject;
    if ( arguments.length < 2 ) return storageObject[name];
    storageObject[name] = callback();
    storageObject[name]._ = new LibraryFunctions(name);
  }
  root.myLibrary = librarySystem;

})(this)