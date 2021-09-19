let obj1 = { name : 'name1'}
let obj2 = { name : 'name2'}
let obj3 = { name : 'name3'}


const map = new Map();
map.set(obj1 , 'id1');
map.set(obj2 , 'id2');
map.set(obj3 , 'id3');

console.log(map);

for (const [key, value] of map) {
    console.log(key.name, value);
}

for (const m of map) {
    console.log(m);
}