(function(root, undefined) {
  let storageObject = {};
  function librarySystem(name, callback) {
    if ( arguments.length < 2 ) return storageObject[name];
    storageObject[name] = callback();
  }
  root.myLibrary = librarySystem;
})(this)