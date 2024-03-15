const mongoose=require('mongoose');
const sinhvienSchema=new mongoose.Schema({
    masv:{
        type: String,
        required: true
    },
    tensv:{
        type: String,
        required: true
    },
});
const sinhvien=mongoose.model('sinhvien',sinhvienSchema);
module.exports=sinhvien;