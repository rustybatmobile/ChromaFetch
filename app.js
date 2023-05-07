const usersUl = document.querySelector("ul");

fetchUsers().then(users => {


    usersUl.innerHTML = users.map(user => {
        return (
            `<li>${user.username}</li>`
        )
    }).join("");

})

async function fetchUsers() {

    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respone.json();

    return Promise.resolve(data.slice(0, 3))

}