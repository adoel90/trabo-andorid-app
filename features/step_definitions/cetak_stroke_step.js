const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const moment = require('moment');

function cetakStroke(nameCustomer, beratBersih, totalHarga, date){
    
    let data = {
        nameCustomer: nameCustomer != null ? nameCustomer : null,
        beratBersih: beratBersih != null && typeof beratBersih == "number" ? beratBersih : parseInt(beratBersih),
        totalHarga: parseInt(totalHarga),
        // date: moment(date, 'DD MMMM YYYY').format()
        // date: moment(date).format('Do MMMM YYYY')
        date: moment().format('Do MMMM YYYY, h:mm:ss a')
    };

    console.log(data);

    return data;
};

Given('Nama Customer adalah {string}, pakaiannya {int} kg, total harga Rp {string}, di ambil pada tanggal {string}', function (nameCustomer, beratBersih, totalHarga, date) {
    
    cetakStroke(nameCustomer, beratBersih, totalHarga, date);

});

When('Nina laundry', function () {
    return null;
});

Then('Nina get stroke', function () {
    
return null;
});

