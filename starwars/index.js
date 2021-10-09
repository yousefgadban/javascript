
url = 'https://swapi.dev/api/people/'

let arr = [];
let charactersArray = []

async function fetchAsync (url) {
    // let response = await fetch(url);
    // let data = await response.json();
    // return data;

    for (let i = 1 ; i < 11; i++) {
        const request = await (await fetch(`https://swapi.dev/api/people/${i}`)).json()
        // console.log(request);
        const homeWorld = await (await fetch(request.homeworld)).json()

        let person = {
            name: request.name,
            height: request.height,
            hair_color: request.hair_color,
            planet: {
                homeWorld: homeWorld.name,
                popualtion: homeWorld.population
            }
        }

        charactersArray.push(person);
        console.log(person);
        //
        addCharacterToTable(i-1)
    }

    addCharacterToTable(0)
    
}

// Start function
const getData = async function(id) {
    let data = await fetchAsync(url+id)
    arr.push(data)
    //console.log(data);
}
  
  // Call start
 getData(2);



// promiseArray = [getData(1), getData(2), getData(3), getData(4), getData(5)];

// Promise.all(promiseArray).then(()=>{
//     console.log(arr);
    
//     arr.forEach(async(char, i) => {
//         // console.log('name ' + char.name);
//         let response = await fetch(char.homeworld);
//         let data = await response.json(); 

//         let character = {name: char.name, hair_color: char.hair_color, gender: char.gender, height: char.height, birth_year: char.birth_year, planet: {name: data.name, population: data.population}}
//         charactersArray.push(character);
//         addCharacterToTable(i-1)
//         console.log('charactersArray ' + charactersArray[0].name);
//     });

// }).catch((err) => {
//     console.log(err);
// })


const container = document.createElement('div');
container.style.width = '95vw';
container.style.height = '100vh';
//container.style.display = 'flex';
// container.style.backgroundColor = 'blue';

document.body.append(container)

const table = document.createElement('table');
table.style.width = '100%';
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

container.append(table);

const headtr = document.createElement('tr');
const th = document.createElement('th');
th.colSpan = "5";
th.innerHTML = 'Star wars'

// th.style.color = 'white'
// th.style.backgroundColor = 'green'
// th.style.textAlign = 'center'


headtr.append(th);
table.append(headtr)

addHeadersRow()

function addHeadersRow() {
    const tr = document.createElement('tr');
    tr.classList.add('oddTr');

    const td1 = document.createElement('td');
    td1.innerHTML = 'name'
    tr.append(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = 'hair_color'
    tr.append(td2);

    const td3 = document.createElement('td');
    td3.innerHTML = 'height'
    tr.append(td3);

    const td4 = document.createElement('td');
    td4.innerHTML = 'gender'
    tr.append(td4);

    const td5 = document.createElement('td');
    td5.innerHTML = 'birth year'
    tr.append(td5);

    table.append(tr)

}

function addCharacterToTable(ind) {

    const tr = document.createElement('tr');
    if (ind%2 == 0) {
        tr.classList.add('evenTr');
    } else {
        tr.classList.add('oddTr');
    }
    

    const td1 = document.createElement('td');
    td1.innerHTML = charactersArray[ind].name
    tr.append(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = charactersArray[ind].hair_color
    tr.append(td2);

    const td3 = document.createElement('td');
    td3.innerHTML = charactersArray[ind].height
    tr.append(td3);

    const td4 = document.createElement('td');
    td4.innerHTML = charactersArray[ind]['planet'].homeWorld
    tr.append(td4);

    const td5 = document.createElement('td');
    td5.innerHTML = charactersArray[ind].planet.popualtion
    tr.append(td5);

    table.append(tr);

}







// let warriors=[];
// async function tenPeople(){
    
//     for(let i=1;i<=10;i++){
//      let person= await (await fetch(`https://swapi.dev/api/people/${i}`)).json()
  
//     let planet=await (await fetch(`${person.homeworld}`)).json()
 
//     let obj={
//         hair:person.hair_color,
//         height:person.height,
//         name:person.name,
//         planet:{
//             name: planet.name,
//             population:planet.population
//                 }
//     };
//     warriors.push(obj)
//    }
// return warriors;
// }
// tenPeople().then((data)=>createTable(data))

// function createTable(warriors){
    
//     let table=
//    `<table style="width:100%">
//   <tr>
//     <th>name</th>
//     <th>hair</th>
//     <th>height</th>
//     <th>planet name</th>
//     <th>planet population</th>
//   </tr>`
//   for(let warrior of warriors){

//    table+=
//    `<tr>
//    <td>${warrior.name}</td>
//    <td>${warrior.hair}</td>
//    <td>${warrior.height}</td>
//    <td>${warrior.planet.name}</td>
//    <td>${warrior.planet.population}</td>
//    </tr>`

//   }

//   table+='</table>'

//   document.body.innerHTML=table;
// }

