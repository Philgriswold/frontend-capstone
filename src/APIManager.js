const remoteURL = "http://localhost:3002";
// http://localhost:3002/favorites?userId=1&shopId=4

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
    },
    getFavoriteLocations() {
        return fetch(`${remoteURL}/favorites`)
            .then(result => result.json())
            .then(response => {
                return response
            })
    },
    getMyFavorite(userId, shopId) {
        return fetch(`${remoteURL}/favorites?userId=${userId}&shopId=${shopId}`).then(response => response.json());
    },
    getMyFavoriteShops(userId, shopId) {
        return fetch(`${remoteURL}/favorites?userId=${userId}&shopId=${shopId}&_expand=shop`).then(response => response.json());
    },
    saveFavorite(favorite) {
        return fetch(`${remoteURL}/favorites/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(favorite)
            })
            .then(data => data.json())
    },
    deleteFavoriteLocation(id) {
        return fetch(`${remoteURL}/favorites/${id}`,
            {
                method: "DELETE"
            }).then(response => response.json());
    },

    getAllReviews() {
    return fetch(`${remoteURL}/reviews?_sort=rating&_order=desc`)
        .then(result => result.json())
    },
    getReview(shopId) {
    return fetch(`${remoteURL}/reviews?shopId=${shopId}`)
        .then(response => response.json());
    },
    postReview(newReview) {
    return fetch(`${remoteURL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    })
        .then(data => data.json())
    },
    deleteReview(id) {
    return fetch(`${remoteURL}/reviews/${id}`,
        {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    editReview(editedReview, id) {
        console.log("editedReview", editedReview, id)
    return fetch(`${remoteURL}/reviews/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedReview)
    })
        .then(response => response.json());
}

}
