const { url } = require("inspector")
const path=require("path")
console.log(path.join('first','second')) //join linux tabanlı işletim sistemlerinde otomatik slash değiştirir. dosyalamayı kullanırken gerekli.

console.log(path.join(__dirname,'..')) //iki nokta 2 üste çıkartır. dirname tam uzantıyı verir

console.log(path.resolve('first')) //olduğumuz yere kadar yazar sonrasını biz ekleriz

console.log(path.resolve('/first','second')) //c:\first\second için.

const fullpath=path.resolve("first.jpeg")  
console.log(path.basename(fullpath))    //fullpathi aldıktan sonra yalnız istediğimiz kısmı ayarlayabiliyoruz.
console.log(path.extname(fullpath))  //yalnız uzantıyı alır.




const pageURL="http://localhost:9001/user?id=400"

const url1 = new URL(pageURL)
console.log(url1)