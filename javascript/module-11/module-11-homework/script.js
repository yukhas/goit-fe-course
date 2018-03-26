const btnArea = document.querySelector(".button-area");
const resultArea = document.querySelector(".result-area");
const getAllBtn = document.querySelector(".get-all");
const getUserBtn = document.querySelector(".get-user");
const addUserBtn = document.querySelector(".add-user");
const removeUserBtn = document.querySelector(".remove-user");
const updateUserBtn = document.querySelector(".update-user");

btnArea.addEventListener("click", function (event) {
    if (event.target === getAllBtn) {
        getUsers();
    } else if (event.target === getUserBtn) {
        getUserById(document.getElementById('add').value);
    } else if (event.target === addUserBtn) {
        addUser(document.getElementById('add-name').value, document.getElementById('add-age').value);
    } else if (event.target === removeUserBtn) {
        removeUser(document.getElementById('remove').value);
    } else if (event.target === updateUserBtn) {
        updateUser(document.getElementById('update').value, { name: document.getElementById('update-name').value, age: document.getElementById('update-age').value });
    }
});

function getUsers() {
    fetch("https://test-users-api.herokuapp.com/users/", {
        method: "get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => {
            JSON.stringify(data);
            console.log(data);
            const html = document.getElementById("table").textContent.trim();
            const compiled = _.template(html);
            const result = compiled(data);
            resultArea.innerHTML = result; 
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

function getUserById(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: "get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) {
                console.log("ok");
                return response.json();
            };
        })
        .then(data => {
            JSON.stringify(data);
            console.log(data);
            const html = document.getElementById("row-user").textContent.trim();
            const compiled = _.template(html);
            const result = compiled(data);
            resultArea.innerHTML = result;
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

function addUser(name, age) {
    fetch(`https://test-users-api.herokuapp.com/users`, {
        method: "post",
        body: JSON.stringify({ name: name, age: age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) {
                console.log("ok");
                return response.json();
            };
        })
        .then(data => {
            JSON.stringify(data);
            console.log(data);
            getUsers();
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: "delete",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) {
                console.log("ok");
                return response.json();
            };
        })
        .then(data => {
            JSON.stringify(data);
            console.log(data);
            getUsers();
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

function  updateUser(id, user) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: "put",
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) {
                console.log("ok");
                return response.json();
            };
        })
        .then(data => {
            JSON.stringify(data);
            console.log(data);
            getUsers();
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}


