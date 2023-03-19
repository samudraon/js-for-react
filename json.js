const obj = {
    name: 'x',
    roll: 123,
    address: 'Mym'
}
const json = JSON.stringify(obj);
console.log(json);

const object = JSON.parse(json);
console.log(object);

/* api fetching 1. json file, url */
/* fetch and async await */
// will use most of the time
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))

const api = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}