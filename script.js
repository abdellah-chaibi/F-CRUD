let form1 = document.forms.form1
let table1 = document.getElementById("table1")
let nominput = document.querySelector("#nominput")
let prenominput = document.querySelector("#prenominput")
let ageinput = document.querySelector("#ageinput")
let paysoption = document.querySelector("#paysoption")
let sexe = document.querySelectorAll('input[name="sexe"]')
let Di = document.querySelectorAll('input[type="checkbox"]')
let el = ""

let text1 = /^[a-zA-Z]+$/
let y = []
let x = []
let datastorage = {}
let datalist =[]
form1.onsubmit = e=>{
   e.preventDefault();

    if(!text1.test(nominput.value)){
        return false
    }
    if(!text1.test(prenominput.value)){
        return false
    }
    Di.forEach(e=>{
        if(e.checked == true){
            y.push(e.value)
            el = y.join("<br>")
        }
    })
    if(y.length == 0){
            return false
        }
    sexe.forEach(e=>{
        if(e.checked){
            x.push(e.value)
        }
    })
    
   
    html = `<tr class="data">
        <td>${nominput.value}</td>
        <td>${prenominput.value}</td>
        <td>${ageinput.value}</td>
        <td>${paysoption.value}</td>
        <td>${x.join("")}</td>
        <td>${el}</td>
        <td><button class="sup" >super</button><button class="edit" >edit</button></td>
        
    </tr>`
    datastorage["1"] = nominput.value
    datastorage["2"] = prenominput.value
    datastorage["3"] = ageinput.value
    datastorage["4"] = paysoption.value
    datastorage["5"] = x.join("")
    datastorage["6"] = el
  
    datalist.push(datastorage)
    console.log(datalist)
        table1.innerHTML += html
        y = []
        el = ""
        x = []
let buttonall = document.querySelectorAll(".sup")

buttonall.forEach(e=>{
    e.onclick = function(){
        if(confirm("test message")){
            e.parentNode.parentNode.remove()
        }
        
    }
})
let data = document.querySelectorAll(".data")
data.forEach(e=>{
e.onmouseover = function(){
    e.style.backgroundColor = "red"
}
e.onmouseout = function(){
    e.style.backgroundColor = ""
}
})
let edit = document.querySelectorAll(".edit")
let data2 = {}
edit.forEach(e=>{
    e.onclick = function(){
        let hy = e.parentNode.parentNode
        data2["nom"] = hy.children[0].textContent
        data2["prenom"] = hy.children[1].textContent
        data2["age"] = hy.children[2].textContent
        data2["Pays"] = hy.children[3].textContent
        data2["Sexe"] = hy.children[4].textContent
        data2["Discipline"] = hy.children[5].textContent
        nominput.value = data2["nom"]
        prenominput.value = data2["prenom"]
        ageinput.value = data2["age"]
        e.parentNode.parentNode.remove()
        
    }
})

}
function send(){
    localStorage.setItem('data',JSON.stringify(datalist))
}
function getdata(){
    let yt = JSON.parse(localStorage.getItem('data'))
    yt.forEach(e=>{
        html = `<tr class="data">
     
        <td>${e[1]}</td>
        <td>${e[2]}</td>
        <td>${e[3]}</td>
        <td>${e[4]}</td>
        <td>${e[5]}</td>
        <td>${e[6]}</td>
        <td><button class="sup" >super</button><button class="edit" >edit</button></td>
    </tr>`
     table1.innerHTML += html 
    })
    
}


