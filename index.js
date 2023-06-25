let myLeads = []
const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let deletebtn = document.getElementById("delete-btn")
let tabbtn = document.getElementById("tab-btn")

const leadfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadfromlocalstorage)
{
    myLeads = leadfromlocalstorage
    renderlead()
}

tabbtn.addEventListener('click' , ()=>{
    chrome.tabs.query({active:true , currentWindow: true} , function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        renderlead()
    })
})

inputbtn.addEventListener('click' , ()=>{
    myLeads.push(inputEl.value)
    renderlead()
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    inputEl.value = ""
})

function renderlead()
{
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target = '_black' href = '${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

deletebtn.addEventListener('dblclick' , ()=>{
    deleteall()
})

function deleteall()
{
    myLeads = []
    localStorage.clear()
    renderlead()
}

console.log(1)