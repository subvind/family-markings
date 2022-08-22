import { AbstractFactory, ConcreteFactory1, ConcreteFactory2 } from '../index'

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function demo(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

function test() {
  /**
    * The client code can work with any concrete factory class.
    */
  console.log('DEMO: Testing first factory type...');
  demo(new ConcreteFactory1());

  console.log('');

  console.log('DEMO: Testing second factory type...');
  demo(new ConcreteFactory2());
}

test();