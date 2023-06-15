const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scholarmatch_db',
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) throw err;
  console.log('Terhubung ke database MySQL');
});

// Set template engine
app.set('view engine', 'ejs');

// Endpoint untuk menampilkan halaman input
app.get('/', (req, res) => {
  const fields = [
    'program_name',
    'organizer',
    'funds_in_rupiah',
    'gpa',
    'religion',
    'gpa_status',
    'identity',
    'underrepresented_minority',
    'volunteering',
    'first_generation',
    'parental_status',
    'total_awardee',
    'essay',
    'SMP-SMA',
    'SMA',
    'Sarjana',
    'SMP-SMA-Sarjana',
    'SMA-Sarjana',
    'Sarjana-Fresh_Graduate',
    'Fresh_Graduate',
    'SMP-SMA-Sarjana-Fresh_Graduate',
    // Tambahkan field-field lainnya di sini
  ];
  res.render('form', { fields });
});

// Endpoint untuk menyimpan data
app.post('/data', (req, res) => {
  const data = req.body;

  // Simpan data ke tabel database
  const sql = 'INSERT INTO inputed_data SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log('Data tersimpan ke database');
    res.send('Data tersimpan');
  });
});

// Menjalankan server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
