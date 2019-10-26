const remoteURL = "http://localhost:3002";

export default {
    addUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    get(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`).then(newObj => newObj.json());
    },
    searchUsername(username) {
        return fetch(`${remoteURL}/users?username=${username}`)
            .then(e => e.json()
            )
    },
    getShop() {
        console.log("API.getShop")
        return fetch(`${remoteURL}/shops`).then(response => response.json());
    },
    getShopById(id) {
        return fetch(`${remoteURL}/shops/${id}`).then(response => response.json());
    }

}







