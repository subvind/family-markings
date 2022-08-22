import { AbstractFactory, ConcreteFactorySymbolpath } from '../index'

const factory: AbstractFactory = new ConcreteFactorySymbolpath();

const alphabetUpper = factory.createProductUpper();
const alphabetLower = factory.createProductLower();

let uppercase = alphabetUpper.getUpper()
let lowercase = alphabetLower.getLower(uppercase)

let braided = alphabetLower.mergeWithLower(alphabetUpper)

console.log('family symbolpath:', uppercase, '+', lowercase, '=', braided)