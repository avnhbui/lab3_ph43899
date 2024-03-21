// npm i nodemailer
const express = require('express');
const nodemailer = require('nodemailer');
// tạo server
const app = express();
// cấu hình gửi mail
let guimail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aduangvanh@gmail.com',
        pass: 'dplv fjkv pyzc buwq'
    },
    tls: {
        rejectUnauthorized: false
    }
});
// thiết lập nội dung gửi
let noidung ={
    from:'aduangvanh@gmail.com',
    to:'vanhbui04@gmail.com',
    subject: 'test mail',
    text: 'hello cảnh dz khoai to'
};//
// gửi
guimail.sendMail(noidung,(err,info)=>{
    if(err){
        console.log('loi',err);
    }else{
        console.log('đã gửi thành công'+ info.messageId);
    }
});
// chạy server
app.listen(3004,()=>{
    console.log('server đang chạy 3004');
})