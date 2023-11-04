// Decorators are a feature in TypeScript that allow you to add metadata to classes, 
// properties, methods, or parameters

// Custom decorator to log method calls

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
  report() {
    return `Hello, ${this.title}`;
  }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
