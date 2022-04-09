const priceOverNight = 200;
let total = 0;
function calculateAdditionalPrice(dateInInput, dateOutInput) {
    let dayIn = dateInInput.getDay();
    let hoursIn = dateInInput.getHours();
    let dayOut = dateOutInput.getDay();
    let hoursOut = dateOutInput.getHours();
    if (hoursIn > 12) {
        hoursIn = 12;
    }
    let dayStay = dayOut - dayIn;
    let hourStay = hoursOut - hoursIn;
    switch (dayStay) {
        case 0:
            if (hourStay > 0 && hourStay < 7) {
                total += hourStay * 30;
            }
            if (hourStay > 6) {
                total += priceOverNight;
            }
            break;
        default:
            if (hourStay > 0 && hourStay < 7) {
                total += hourStay * 30;
            }
            if (hourStay > 6) {
                total += priceOverNight;
            }
            total += priceOverNight * dayStay;
            break;
    }
    return total;
}
console.log('Test 200k In: 2022-04-06 13:00:00; out: 2022-04-07 11:00:00');
console.log('toltal: ' + calculateAdditionalPrice(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 11:00:00')));
total = 0;
console.log('Test 230k In: 2022-04-06 13:00:00; out: 2022-04-07 13:00:00');
console.log('toltal: ' + calculateAdditionalPrice(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 13:00:00')));
total = 0;
console.log('Test 290k In: 2022-04-06 13:00:00; out: 2022-04-07 15:00:00');
console.log('toltal: ' + calculateAdditionalPrice(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 15:00:00')));
total = 0;
console.log('Test 400K In: 2022-04-06 13:00:00; out: 2022-04-07 20:00:00');
console.log('toltal: ' + calculateAdditionalPrice(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 20:00:00')));
total = 0;
console.log('Test 230k In: 2022-04-06 10:00:00; out: 2022-04-07 11:00:00');
console.log('toltal: ' + calculateAdditionalPrice(new Date('2022-04-06 10:00:00'), new Date('2022-04-07 11:00:00')));