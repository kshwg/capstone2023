from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import json

# Inisialisasi aplikasi Flask
app = Flask(__name__)

# Impor model TensorFlow yang telah ada
model = tf.keras.models.load_model('model.h5')

# Definisikan route API
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Menerima data dari permintaan POST

    # Lakukan prediksi menggunakan model TensorFlow
    features = np.array(data['features'])
    prediction = model.predict(np.expand_dims(features, axis=0))
    class_index = np.argmax(prediction, axis=1)[0]

    # Predicted Class
    class_names = ["Fresh graduate", "SMA", "SMA-Sarjana", "SMP-SMA", "SMP-SMA-Sarjana", "SMP-SMA-Sarjana-Fresh graduate", "Sarjana", "Sarjana-Fresh graduate"]
    predicted_class = class_names[class_index]

    # Mengembalikan hasil prediksi dalam format JSON
    response = {
        'predicted_class': predicted_class
    }
    return jsonify(response)

# Jalankan aplikasi Flask
if __name__ == '__main__':
    app.run()
