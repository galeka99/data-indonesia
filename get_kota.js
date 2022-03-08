const fs = require('fs');
const axios = require('axios').default;
const provinces = require('./results/provinsi.json');

(async () => {
  Promise.all(
    provinces.map(async province => {
      return new Promise(async (resolve, reject) => {
        const response = await axios({
          method: 'GET',
          baseURL: 'https://ibnux.github.io/data-indonesia',
          url: `/kabupaten/${province.id}.json`,
        });
        const arr = response.data.map(city => {
          return {
            id: parseInt(city.id),
            province_id: parseInt(province.id),
            nama: city.nama,
          };
        });
        resolve(arr);
      });
    })
  ).then(res => {
    const cities = [];
    res.forEach(res1 => {
      res1.forEach(res2 => cities.push(res2));
    });
    fs.writeFileSync('./results/kota.json', JSON.stringify(cities, '\r\n', 2));
  });
})();