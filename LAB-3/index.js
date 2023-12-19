const send = document.getElementById("btn")


send.addEventListener('click',(e)=>{
    const id = document.getElementById("id").value
    const web = new XMLHttpRequest();

    web.open('GET',`https://jsonplaceholder.typicode.com/todos/${id}`,true)

    web.onreadystatechange = function(){
        if(web.readyState ==4 && web.status ==200){
            console.log(this.readyState)
            console.log(this.status)
            console.log(web)
            let data = JSON.parse(web.responseText)
            let res = document.getElementById("res")

            res.innerHTML = '<p> userId : '+data.userId+'<p></br>'+'<p> id : '+data.id+'<p></br>'
                            + '<p> title : '+data.title+'<p></br>'+'<p> completed : '+data.completed+'<p></br>'

        }
    }
    web.send()
})