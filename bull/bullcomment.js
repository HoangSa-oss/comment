import schemaurlpost from "../models/schemaurlpost.js";
import Queue from 'bull';

const queueComment = new Queue('queueComment','redis://127.0.0.1:6379')

// const linkpost = await schemaurlpost.find({}).select('-_id -processInfo')
// const detailpost = await  schemadetailurltrue.find({}).select('-_id')
// detailpost.map(async(x)=>{
   
//     queueComment.add(x)
//     await schemaurlpost.updateOne(x,{processCmt:true})
    
// })
queueComment.add({urlVideo:"https://www.tiktok.com/@ivnqna05/video/7228169427613682950"})
await queueComment.obliterate({ force: true });