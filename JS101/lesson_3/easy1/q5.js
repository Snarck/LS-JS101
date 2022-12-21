// what will the following output

console.log(false == '0');
console.log(false === '0');

//true, false. was right.  top is a non-strict equal to, and the bottom is strict.
//top uses implicit coercion.  false === 0. 