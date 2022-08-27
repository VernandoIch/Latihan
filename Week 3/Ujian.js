// function disnilen (umur,tinggi){
//     if(umur < 1){
//         console.log('dilarang masuk');
//     }
//     else if(umur === 2 && umur === 3){
//         console.log('Tari: 30000');
//         if (tinggi >70 && tinggi <120){
//             console.log('Tarif: +10000');
//         }
//     }    
//     else if(umur >=4 && umur <7){
//         console.log('Tarif: 40000');
//     }
//         if (tinggi >120 && tinggi <150){
//             console.log('Tarif: +15000');
//         }
//     else if(umur >=8 && umur <10){
//         console.log('Tarif: 50000');
//         }
//         if (tinggi >150){
//             console.log('Tarif: +20000');
//         }
//     else if(umur >10){
//         console.log('Tarif: 80000');
//         }
// }

// disnilen(5,125)


// function isibensin(tipebensin,uang,biaya){
//     if (tipebensin === '' || uang === ''){
//         console.log('tidak ada tipe bensin atau uang');
//     }
//     else if(tipebensin === 'solar' && biaya === 5000 * uang){
//         console.log(biaya*uang);
//     }
//     else if(tipebensin === 'premium'){
//         console.log('biaya 7500/liter');
//     }
//     else if(tipebensin === 'pertamax'){
//         console.log('biaya 10000/liter');
//     }
//     else if(tipebensin === 'pertamax'){
//         console.log('biaya 10000/liter');
//     }
// }

// isibensin('solar',100000)


// Bima 

// function disnilen(umur, tinggi) {
//     if (umur < 1) {
//       console.log("dilarang masuk");
//     } else {
//       if (umur === 2 && umur === 3) {
//         console.log("Tari: 30000");
//         if (tinggi > 70 && tinggi < 120) {
//           console.log("Tarif: +10000");
//         }
//       } else if (umur >= 4 && umur < 7) {
//         console.log("Tarif: 40000");
//         if (tinggi > 120 && tinggi < 150) {
//           console.log("Tarif: +15000");
//         }
//       } else if (umur >= 8 && umur < 10) {
//         console.log("Tarif: 50000");
//         if (tinggi > 150) {
//           console.log("Tarif: +20000");
//         }
//       } else if (umur > 10) {
//         console.log("Tarif: 80000");
//       }
//     }
//   }
  
//   disnilen(4, 125);

// Nando 

// function isibensin(tipebensin, uang, biaya) {
//   if (tipebensin === "" || uang === "") {
//     console.log("tidak ada tipe bensin atau uang");
//   } else {
//     if (tipebensin === "solar") {
//       let hasil = uang / 5000;
//       console.log("abis isi bensin sebanyak", uang, "dapetnya", hasil, "liter");
//     } else if (tipebensin === "premium") {
//       let hasil = uang / 7500;
//       console.log("biaya 7500/liter", hasil);
//     } else if (tipebensin === "pertamax") {
//       let hasil = uang / 10000;
//       console.log("biaya 10000/liter", hasil);
//     }
//   }
// }

// isibensin("solar", 100000);

function belimakanan(tipemakanan,uang){
   if (tipemakanan === '' || uang === ''){
    console.log('mau beli apa bro');
    
   }else {
    if (tipemakanan === 'mie ayam'){
        let kembalian = uang-18000
        if (uang<18000){
            console.log('gak cukup bro');
        } else {
            console.log('harganye',18000,'kembaliannye',kembalian);
        }
    }
    else if (tipemakanan === 'nasi goreng'){
        let kembalian = uang-15000
        if (uang<15000){
            console.log('gak cukup bro');
        }
        else {
            console.log('harganye',15000,'kembaliannye',kembalian);
    
        }
    }
    else if (tipemakanan === 'pecel lele'){
        let kembalian = uang-12000
        if (uang<12000){
            console.log('gak cukup bro');
        }else {
            console.log('harganye',12000,'kembaliannye',kembalian);
        }
    }
    else if (tipemakanan === 'ketopraaakk'){
        let kembalian = uang-10000
        if (uang<10000){
            console.log('gak cukup bro');
        }else {
            console.log('harganye',10000,'kembaliannye',kembalian);

            }
        }
    }
}

belimakanan('',0)