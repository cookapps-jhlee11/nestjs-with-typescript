import { BadRequestException } from '@nestjs/common';

function MinLength(min: number) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    target.validators = {
      minLength: function (args: string[]) {
        return args[parameterIndex].length >= min;
      }
    }
  }
}

function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = function(...args) {
    Object.keys(target.validators).forEach(key => {
      if (!target.validators[key](args)) {
        throw new BadRequestException();
      }
    })
    method.apply(this, args);
  }
}

class User {
  private name: string;

  @Validate
  setName(@MinLength(3) name: string) {
    this.name = name;
  }
}

const tt= new User();
tt.setName('Dexter');
console.log('----------')
tt.setName('De');
