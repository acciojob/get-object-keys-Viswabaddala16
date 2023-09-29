//your JS code here. If required.
// Create the student object with a 'name' property
const student = {
  name: 'John'
};

// Add a 'getKeys' method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Now you can use the 'getKeys' method on any object to get its keys
const keys = student.getKeys();

console.log(keys); // Output: ['name']
