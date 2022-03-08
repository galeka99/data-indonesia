const fs = require('fs');
const axios = require('axios').default;
const cities = require('./results/kota.json');

(async () => {
  Promise.all(
    cities.map(async city => {
      return new Promise(async (resolve, reject) => {
        const response = await axios({
          method: 'GET',
          baseURL: 'https://ibnux.github.io/data-indonesia',
          url: `/kecamatan/${city.id}.json`,
        });
        const arr = response.data.map(subdistrict => {
          return {
            id: parseInt(subdistrict.id),
            city_id: parseInt(city.id),
            nama: subdistrict.nama,
          };
        });
        resolve(arr);
      });
    })
  ).then(res => {
    const subdistricts = [];
    res.forEach(res1 => {
      res1.forEach(res2 => subdistricts.push(res2));
    });
    fs.writeFileSync('./results/kecamatan.json', JSON.stringify(subdistricts, '\r\n', 2));
  });
})();