const fetchData = fetch('./data.json')
.then((res) => res.json())
.then((data) => {
    return data;
}) 

console.log(fetchData)