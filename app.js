// object literal syntax
const circle = {
  radius: 1,
  draw: () => {
    console.log("draw");
  },
};
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw");
    },
  };
}
// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}
// stopwatch

function Stopwatch() {
  this.duration = 0;
  this.start = () => {
    if (this.duration === 0) {
      this.duration = Date.now();
    } else {
      throw new Error("Stopwatch has already started.");
    }
  };
  this.stop = () => {
    if (this.duration !== 0) {
      this.duration = Date.now() - this.duration;
    } else {
      throw new Error("Stopwatch is not started.");
    }
  };
  this.reset = () => {
    this.duration = 0;
  };
}
const sw = new Stopwatch();
sw.start();
sw.stop();
console.log(sw.duration);
sw.reset();
console.log(sw.duration);
