//const instaUser = new Object() // singleton object

 const instaUser = {} //non singleton object

instaUser.id = "123 abc"
instaUser.name = "sultan"
instaUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "sultan",
            lastName: "ghani"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);