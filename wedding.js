function verifyAllEqual(list1, list2) {
  if (list1.length !== list2.length) return false;

  let map = {};

  for (num of list1) {
    if (map[num] == null) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  console.log(map);

  for (num of list2) {
    if (map[num] == null) return false;
    map[num]--;
  }

  console.log(map);

  for (val in map) {
    if (map[val] !== 0) return false;
  }

  return true;
}

let l1 = ['2', '5', '6', '1', '6', '8', '1', '3', '3', '3'];
let l2 = ['8', '1', '4', '7', '5', '8', '1', '4', '7', '2'];
let l3 = ['2', '1', '6', '8', '5', '6', '3', '1', '3', '3'];

console.log(verifyAllEqual(l1, l3));
