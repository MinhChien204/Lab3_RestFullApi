const express = require('express');
const port = 3000;
const app = express();

const mongoose = require('mongoose');
const uri = 'mongodb+srv://nmchien2204:chien1234@cluster0.4b0kubq.mongodb.net/md18305';

const svModel = require('./studentModel');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', async (req, res) => {
  await mongoose.connect(uri);

  let sinhviens = await svModel.find();
  console.log(sinhviens);

  res.send(sinhviens);
});

app.get('/add_sv', async (req, res) => {
  await mongoose.connect(uri);

 let sv={
    name: 'Tran Phuong Anh',
    tuoi: 24,
    mssv: 'PH14523',
    daRaTruong: false
  };

  let kq = await svModel.create(sv);

  console.log(kq);

  let sinhviens = await svModel.find();

  res.send(sinhviens);
});

app.get('/sua/:name', async (req, res) => {
  await mongoose.connect(uri);

console.log('Kết nối Db thành công');

let ten = req.params.name;
console.log(ten);

let tenmoi = ten + 'Phien ban moi 2024';

await svModel.updateOne({name: ten},{name: tenmoi})

let newname = await svModel.find({})

res.send(newname);
})

app.get('/xoa/:id', async (req, res) => {
  await mongoose.connect(uri);

  let id = req.params.id;
  console.log(id);

  //xử lí lỗi khi id không đúng
  await svModel.deleteOne({_id:id});
  res.redirect('../');
})