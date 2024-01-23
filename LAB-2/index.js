const btn = document.querySelector('form')

btn.addEventListener('submit',(e) => {

    e.preventDefault()
    const l = document.createElement('li')

    let name = document.getElementById("name").value + ""
    let email = document.getElementById("email").value + ""
    let sem = document.getElementById("sem").value + ""
    console.log(sem)

    l.innerHTML = `<pre> information
    <h5 class ="name1"> name : ${name}
    <h5 class ="email1"> email : ${email}
    <h5 class ="sem1"> sem : ${sem}
    </pre> `

    const ul = document.getElementById('uil')

    const b = document.createElement("button")
    b.textContent = 'remove'

    b.addEventListener('click', (e)=> {
        ul.removeChild(l)
    })

    l.appendChild(b)
    ul.appendChild(l)

     document.getElementById("name").value = ""
     document.getElementById("email").value = ""
     document.getElementById("sem").value = ""

})

const cname = document.getElementById('cname')
const cemail = document.getElementById('cemail')
const csem = document.getElementById('csem')

cname.addEventListener('click', () => {
   let names = document.querySelectorAll('.name1');
   names.forEach(name => {
       name.style.color = 'green';
   });
});

cemail.addEventListener('click', () => {
   let emails = document.querySelectorAll('.email1');
   emails.forEach(email => {
       email.style.color = 'black';
   });
});

csem.addEventListener('click', () => {
   let sems = document.querySelectorAll('.sem1');
   sems.forEach(sem => {
       sem.style.color = 'red';
   });
});