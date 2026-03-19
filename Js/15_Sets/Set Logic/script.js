// union() method returns the union of two sets.


const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
const C = A.union(B);
console.log(C)

// intersection() method returns new set containing the elements which are in this set and in the argument set:
const D = A.intersection(B);
console.log(D);

// difference() method returns the difference between two sets.
const E = A.difference(B);
console.log(E)
const F = B.difference(A);
console.log(F);

// symmetricDifference() method returns the symmetric difference between to sets. ( that are not in both set)
const G = A.symmetricDifference(B);
console.log(G);

//  isSupersetOf() method returns true if all elements in the argument set are also in this set:
// A superset is a set that contains all elements of another set.
console.log(A.isSupersetOf(B)); // false

// isDisjointFrom() method returns true if this set has no elements in common with the argument set:
// Two sets are disjoint if they share no common elements
console.log(A.isDisjointFrom(B)); // false