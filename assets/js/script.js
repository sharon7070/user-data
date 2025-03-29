document.getElementById("loadData").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#usertable tbody");
            tableBody.innerHTML = "";

            data.forEach(user => {

                if (user.id && user.name && user.email && user.phone) {
                    tableBody.innerHTML += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td></tr>`;
                }
            });
        })
});