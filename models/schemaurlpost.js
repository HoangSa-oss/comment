import mongoose from 'mongoose';
import mongo_info from './connectmongo.js';
const {Schema,model} = mongoose;


mongoose.connect(mongo_info.name_colection);
const profileSchema = new Schema({
        authorUrl:String,
  
        urlPost:String,
        date:Number,
}, { versionKey: false })
export default model('2autho11r',profileSchema);
