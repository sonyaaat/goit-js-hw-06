const list=document.querySelectorAll('li.item')
console.log(`Number of categories: ${list.length}`)

const names=[]
const count=[]
list.forEach((el,index)=>
    {
        names.push(el.querySelector("h2").textContent)
        count.push(el.querySelectorAll("li").length)
        console.log(`Category: ${names[index]}`)
        console.log(`Elements: ${count[index]}`)
    })

