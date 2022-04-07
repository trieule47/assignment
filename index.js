//object so sánh vùng nhớ
//LÊ NGỌC VĨNH TRIỀU
console.log('hello tien phong cua ban la:')

const giaQuaDem = 200
//test
////200k
const dateVao = new Date('2022-04-06 13:00:00')
const dateRa = new Date('2022-04-07 11:00:00')
// ////230k
// const dateVao = new Date('2022-04-06 13:00:00')
// const dateRa = new Date('2022-04-07 13:00:00')
// ////290k
// const dateVao = new Date('2022-04-06 13:00:00')
// const dateRa = new Date('2022-04-07 15:00:00')
// ////400k
// const dateVao = new Date('2022-04-06 13:00:00')
// const dateRa = new Date('2022-04-07 20:00:00')
// ////230k
// const dateVao = new Date('2022-04-06 10:00:00')
// const dateRa = new Date('2022-04-07 11:00:00')

var total=0;

total = tinhTienPhong(dateVao, dateRa)
console.log('total: ' + total)

function tinhTienPhong(dateVao, dateRa) {

    var ngayVao = dateVao.getDay();
    console.log("ngay vao: "+ngayVao);

    var gioVao = dateVao.getHours();
    var phutVao = dateVao.getMinutes();

    var ngayRa = dateRa.getDay();
    console.log("ngay ra: "+ngayRa);

    var gioRa = dateRa.getHours();
    var phutRa = dateRa.getMinutes();

    if(gioVao > 12) {
        gioVao = 12;
    }

    var ngay = ngayRa - ngayVao;
    var gio = gioRa - gioVao;

    switch (ngay) {
        case 0:
            if(gio > 0 && gio < 7) { 
                total += gio * 30;
            }

            if(gio > 6) {
                total += 200;
            }
            break;
        default: 
            //30k * 7 = 210k >200k giora > giovao mơi tính
            console.log("gio vuot: "+gio);
            if(gio > 0 && gio < 7) { 
                total += gio * 30;
            }

            if( gio > 6) {
                total += 200;
            }

            total += 200*ngay;
            console.log("tong tien: " +total);
            break;
        
    }
    return total;
}