const usersUl = document.querySelector(".users");

fetchUsers().then(users => {

    let str = "";

    users.forEach(user => {

        str = str.concat(`<li>${user.name}</li>`)
    })

    usersUl.innerHTML = str;

})

async function fetchUsers() {

    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respone.json();

    return Promise.resolve(data.slice(0, 3))

}