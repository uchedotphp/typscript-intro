const email: HTMLElement | null = document.getElementById('email')
const password = document.querySelector('address')


function login(email: string, password?: string) {
    return `Your email address is ${email} and password is ${password?.toUpperCase()}`
}

console.log(login('uchedotphp@gmail.com', '@#$@$@$@$'));