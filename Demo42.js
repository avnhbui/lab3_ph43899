// npm i multer
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3006;
//cai hinh luu anh
const storage = multer.diskStorage({
    destination: (res,file,cb)=>{
        cb(null, 'upload');
    },
    file: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});
//sdung bien upload
const upload = multer({storage});
//dinh nghia get
app.get('/upload',(req, res)=>{
    res.sendFile(__dirname+ '/Demo42.html');
});
app.post('/upload', upload.single('image'),
(req,res)=>{
    res.send('upload thanh cong')
});
app.listen(port,()=>{
    console.log('server đang chạy');
})