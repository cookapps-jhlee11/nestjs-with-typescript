function format(formatString: string) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function getter() {
      return `${formatString} ${value}`;
    }

    function setter(newVal: string) {
      console.log("Setter called");
      value = newVal;
    }

    return {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    }
  }
}

class Greeter2 {
  @format('Hello')
  greeting: string;
}

const greeter2 = new Greeter2();
greeter2.greeting = 'World';
console.log(greeter2.greeting);
