
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>console.log(users))
    .catch(err=>console.error(err));

fetch('https://pokeapi.co/api/v2/pokemon/7')
    .then(res=>res.json())
    .then(squirtle=>console.log(squirtle))
    .catch(err=>console.error(err));
