var db = new PouchDB('test')

var nameInput = document.getElementById('name')
var yearInput = document.getElementById('year')
var numInput = document.getElementById('number')
var btn = document.getElementById('submit')
var docDetails = document.getElementById('doc-details')

btn.addEventListener('click', async ()=>{
    try {
        var res = await db.upsert('f15723bd-56b6-4335-a4f4-c9ad6c568585', (doc) => {
            doc.data = {[nameInput.value]: {[yearInput.value]: numInput.value}}

            return doc
        })
    } catch(err) {
        console.log(err)
    }
     finally {
         var docz = await db.get('f15723bd-56b6-4335-a4f4-c9ad6c568585')
         console.log(JSON.stringify(docz.data))
         docDetails.innerHTML = JSON.stringify(docz.data)
     }
})