export const braidArrays = (...arrays) => {
  const braided = [];
  for (let i = 0; i < Math.max(...arrays.map(a => a.length)); i++) {
    arrays.forEach((array) => {
      if (array[i] !== undefined) braided.push(array[i]);
    });
  }
  return braided;
};

// braidArrays(['a','b','c','d'], [1,2,3], [99,98,97,96,95]);
// ['a', 1, 99, 'b', 2, 98, 'c', 3, 97, 'd', 96, 95]
