const remoteURL = "http://localhost:3002";

export default {
    addUser(newUser) {
        return fetch(`{remoteURL}/users`, {
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
        return fetch(`${remoteURL}/users?userName=${username}`)
       .then(e => e.json()
    )
  }
}
   







// export default {

//   getAll(resource) {
//     return fetch(`${url}/${resource}`).then(newObj => newObj.json());
//   },
  
//   delete(resource, id) {
//     return fetch(`${url}/${resource}/${id}`, {
//       method: "DELETE"
//     }).then(newObj => newObj.json());
//   },
//   put(resource, editObj) {
//     return fetch(`${url}/${resource}/${editObj.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(editObj)
//     }).then(editObj => editObj.json());
//   },
 
 
// };
