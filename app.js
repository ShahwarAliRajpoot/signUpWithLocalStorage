
const userName = document.getElementById("username")
const email = document.getElementById("email")
const country = document.getElementById("country")
const number = document.getElementById("number")
const password = document.getElementById("password")

const signUp = (sign) => {
    const userObj = {
        userName: userName.value,
        email: email.value,
        country: country.value,
        number: number.value,
        password: password.value
    }

    const users = JSON.parse(localStorage.getItem("users")) || []
    // console.log(users)

    const userIndex = users.findIndex((value) => {
        return value.email === userObj.email
    })
    console.log(userIndex)
    if (userIndex === -1) {
        users.push(userObj)
        localStorage.setItem("users", JSON.stringify(users))
        sign.setAttribute("action", "./login.html")
        alert("Your Account Create Successfully")
    }
    else {
        alert("This Email  Already Exists")
    }
}

const login = (log) => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)

    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("You Have Successfully Login")
        log.setAttribute("action", "./dashboard.html")
    }
    else {
        alert("invalid User")
    }

}

const showPass = (e) => {
    const password = document.getElementById("password")

    if (e.className === "fas fa-eye show") {
        e.className = "fas fa-eye-slash show";
        password.type = "text"
    }
    else {
        e.className = "fas fa-eye show";
        password.type = "password";
    }
}

const yourData = () => {
    const tr1 = document.getElementById("tr1")
    const tr2 = document.getElementById("tr2")
    const tr3 = document.getElementById("tr3")
    const tr4 = document.getElementById("tr4")

    const data = JSON.parse(localStorage.getItem("currentUser"));

    tr1.innerHTML =  `<td>Username: ${data.userName}</td>`
    tr2.innerHTML =  `<td>Email: ${data.email}</td>`
    tr3.innerHTML =  `<td>Country: ${data.country}</td>`
    tr4.innerHTML =  `<td>Number: ${data.number}</td>`
}

const logOut = () => {
    localStorage.removeItem("currentUser")
    window.location.assign("./login.html")
}
