declare function HandleError(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare class Greeter {
    hello(): void;
}
declare const greeter: Greeter;
