import { AbstractFactory, ConcreteFactoryNumberline } from '../index'

const factory: AbstractFactory = new ConcreteFactoryNumberline();

const alphabetUpper = factory.createProductUpper();
const alphabetLower = factory.createProductLower();

let uppercase = alphabetUpper.getUpper()
let lowercase = alphabetLower.getLower(uppercase)

let braided = alphabetLower.mergeWithLower(alphabetUpper)

console.log('family numberline:', uppercase, '+', lowercase, '=', braided)