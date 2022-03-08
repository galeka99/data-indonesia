# Data Seluruh Indonesia

#### PROVINSI - KOTA/KABUPATEN - KECAMATAN
Repository ini hanya untuk menggabungkan keseluruhan data menjadi 1 file JSON.\
Untuk sumber data diambil dari repository: [ibnux - Data Indonesia](https://ibnux.github.io/data-indonesia/)

---
#### Cara Penggunaan:
1. Install modul yang dibutuhkan
```bash
npm install
```
2. Ambil data kota dan kabupaten terlebih dahulu
```bash
node get_kota.js
```
3. Ambil data kecamatan
```bash
node get_kecamatan.js
```
  

**Catatan:** Data yang diambil akan disimpan pada folder **`results`**