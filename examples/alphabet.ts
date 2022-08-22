import { AbstractFactory, ConcreteFactoryAlphabet } from '../index'

const factory: AbstractFactory = new ConcreteFactoryAlphabet();

const alphabetUpper = factory.createProductUpper();
const alphabetLower = factory.createProductLower();

let uppercase = alphabetUpper.getUpper()
let lowercase = alphabetLower.getLower(uppercase)

let braided = alphabetLower.mergeWithLower(alphabetUpper)

console.log('family alphabet:', uppercase, '+', lowercase, '=', braided)