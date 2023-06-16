const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://schoolient-ml-pcwabiafva-et.a.run.app/predict',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type, Authorization'
}));


// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: '34.101.217.229',
  user: 'root',
  password: 'VDL[mH,M7<Qsp6yg',
  database: 'schoolient_db',
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
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
  // Membuat permintaan HTTP POST ke endpoint API machine learning
 
  fetch('https://schoolient-ml-pcwabiafva-et.a.run.app/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    features: ["data.funds_in_rupiah", "data.gpa", "data.religion", "gpa.status","data.identity", "data.underrepresented_minority","data.volunteering","data.first_generation","data.parental_status","data.total_awardee","data.essay","data.SMP-SMA","data.SMA","data.Sarjana","data.SMP-SMA-Sarjana","data.SMA-Sarjana","data.Sarjana-Fresh_Graduate","data.Sarjana-Fresh_Graduate","data.Fresh_Graduate","data.SMP-SMA-Sarjana-Fresh_Graduate"]
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.send(data);
    // Lakukan sesuatu dengan data hasil prediksi
  })
  .catch(error => {
    console.error(error);
    // Tangani kesalahan
  });
});

//Endpoint untuk menampilkan hasil dari Data yang diolah oleh Machine learning 
// Mengirim data ke endpoint API machine learning


// Menjalankan server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
