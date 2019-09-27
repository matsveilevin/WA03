class Human {
  die() {
    return `${this.constructor.name}: die`;
  }
}

// exports = Human; // It will not work with `new Human();`
// exports.Human = Human; // It will require `new Human.Human();` to work 
module.exports = Human;
