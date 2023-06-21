import Queue from "bull";
import schematiktoksource from "../models/schematiktoksource.js";


const tiktoksource = await schematiktoksource.find({}).select('-_id')
const queueLinkPost = new Queue('queueLinkPost','redis://127.0.0.1:6379')
const urlVdideo = [
   
    "https://www.tiktok.com/@homecreditvn",
    "https://www.tiktok.com/@shopee_vn",
    "https://www.tiktok.com/@paulaschoice.vn",
    "https://www.tiktok.com/@seriinreview",
    "https://www.tiktok.com/@banker.vn"
    

    ]
    for(let i=0;i<urlVdideo.length;i++){
        queueLinkPost.add({authorUrl:`${urlVdideo[i]}`})

}
console.log(urlVdideo.length)
// tiktoksource.map(x=>{
//         console.log(x)
//         queueLinkPost.add(x)
//     })


// await queueLinkPost.obliterate({ force: true });
