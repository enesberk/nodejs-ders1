// const fs=require("fs")
// const path = require("path")

// fs.mkdirSync(path.resolve(__dirname,"dir")) //klasör açıyor


// fs.mkdir(path.resolve(__dirname,"dir"),(err)=>{
//     if(err){
//         console.log("err")
//     }
//     console.log("file")
// })



// fs.rmdir(path.resolve(__dirname,"dir"),(err)=>{
//     if(err){
//         console.log("err")
//     }
// })


// fs.writeFile(path.resolve(__dirname,"text.txt"), 'Ali Veli 1 2 3',(err)=> {
//     if(err){
//         console.log(err)
//     }
// })

// fs.appendFile(path.resolve(__dirname,"text.txt"), 'Add something',(err)=> {
//     if(err){
//         console.log(err)
//     }
// })

// fs.appendFile(path.resolve(__dirname,"text.txt"), 'Add something',(err)=> {
//     if(err){
//         console.log(err)
//     }
// })

// //promise

// const writeFileAsync = async (path,data)=>{
//     return new Promise((resolve,reject)=>fs.writeFile(path,data,(err)=>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// r
// const appendFileAsync = async (path,data)=>{
//     return new Promise((resolve,reject)=>fs.appendFile(path,data,(err)=>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
//     .then(() => appendFileAsync(path.resolve(__dirname,"text.txt"),"Merhaba"))  //thenleri sırayla yazar.
//     .catch(err=>console.log(err))



//                                          bunu bitir.
// writeFileAsync(path.resolve(_dirname,"tx.txt"),'data')
// .then(()=>readFileAsync(path.resolve(_dirname,"tx.text"))
// .then(()=>)




//     const {count} = require("console")
//     const fs=require("fs")
//     const {resolve} = require("path")
//     const path = require("path")
//     const text = "BIL 4 2 5"

//     const writeFileAsync = async (path,data)=>{
//     return new Promise((resolve,reject)=>fs.writeFile(path,data,(err)=>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }


//     const readFileAsync = async (path) => (){
//         return new Promise(res,rej)=> fs.readFile(path,)
//     }
//--------------------------------




const text="BIL 4 2 5"
const fsPromise = requrie('fs').promises;
const fileRead=async()=>{
    try{
        await fsPromise.writeFile(pat.resolve(_dirname,"tx.txt"),("data"))  //await kullanınca bu işlemi yapmasını bekliyor.

    }
    catch(error){

    }
}