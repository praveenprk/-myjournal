let dateArea = document.querySelector("#curDt")
let jTitle = document.querySelector("#jTitle")
let jDesc = document.querySelector("#jDesc")
let jBtn = document.querySelector("#jBtn")
let jHtmlView = document.querySelector("#allJournals")
let journal = []
const showJournals = () => {
    let lists = JSON.parse(localStorage.getItem("myJournals"))
    // console.log(lists)
    jHtmlView.innerHTML = ''
    jHtmlView.innerHTML += 
    lists.map( (value, index) => `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${value.title}</h5>
      <p class="card-text">${value.desc}</p>
      <button class="btn btn-danger delBtn" id="${index}" onclick="del(this.id)">Delete</button>
    </div>
    </div>`)
}
// let tmpObj = {}
dateArea.innerHTML = Date('d,m,y')
showJournals()

const setJournal = () => {
    let tmpObj = {
        title: jTitle.value,
        desc: jDesc.value
    }
    journal.push(tmpObj)
    localStorage.setItem("myJournals", JSON.stringify(journal))
    console.log(journal)
    showJournals()

}


jBtn.addEventListener("click", setJournal)

function del(index) {
    // console.log(index)
    let lists = JSON.parse(localStorage.getItem("myJournals"))
    if(lists.length>0) {
        lists.splice(index,1)
        localStorage.setItem("myJournals", JSON.stringify(lists))
        showJournals()
    }
}
