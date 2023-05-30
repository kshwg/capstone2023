const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Data siswa (contoh sederhana)
let students = [];

// Endpoint untuk penginputan identitas siswa
app.post('/students', (req, res) => {
  const { name, age, grade } = req.body;
  
  // Validasi data yang diberikan
  if (!name || !age || !grade) {
    return res.status(400).json({ message: 'Nama, usia, dan kelas harus diisi.' });
  }

  // Buat objek siswa baru
  const newStudent = {
    id: students.length + 1,
    name,
    age,
    grade
  };
  
  // Tambahkan siswa baru ke dalam array
  students.push(newStudent);

  // Kirim respons ke client
  res.status(201).json({ message: 'Identitas siswa berhasil ditambahkan.', student: newStudent });
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
