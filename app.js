const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Data applicant (masih contoh sederhana)
let applicant = [];

// Endpoint untuk penginputan identitas applicant
app.post('/applicant', (req, res) => {
  const { name, age, grade } = req.body;
  
  // Validasi data yang diberikan
  if (!name || !age || !grade) {
    return res.status(400).json({ message: 'Nama, usia, dan kelas harus diisi.' });
  }

  // Buat objek applicant baru
  const newApplicant = {
    id: applicant.length + 1,
    name,
    age,
    grade
  };
  
  // Tambahkan siswa baru ke dalam array
  applicant.push(newApplicant);

  // Kirim respons ke client
  res.status(201).json({ message: 'Identitas Applicant berhasil ditambahkan.', applicant: newApplicant });
});

// Endpoint untuk mendapatkan semua data applicant
app.get('/applicant', (req, res) => {
    res.json(applicant);
  });
  
  // Endpoint untuk mendapatkan data siswa berdasarkan ID
  app.get('/applicant/:id', (req, res) => {
    const applicantId = parseInt(req.params.id);
    const appl = applicant.find((applicant) => applicant.id === applicantId);
  
    if (!applicant) {
      res.status(404).json({ message: 'Siswa Tidak Ditemukan!' });
    } else {
      res.json(appl);
    }
  });

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
