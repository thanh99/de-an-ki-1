let listSanPham = [
    {
        "img": "./img-de-an/chinhtri/cachnghidethangcong.jpg",
        "name": "Cách Nghĩ Để Thành Công",
        "price": 100000,
        "type": "Chính Trị",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/chinhtri/ctrithegioi.jpg",
        "name": "Chính Trị Thế Giới",
        "price": 120000,
        "type": "Chính Trị",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/chinhtri/dacnhantam.jpg",
        "name": "Đăc Nhân Tâm",
        "price": 300000,
        "type": "Chính Trị",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/chinhtri/ditimlesong.jpg",
        "name": "Đi Tìm Lẽ Sống",
        "price": 210000,
        "type": "Chính Trị",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/chinhtri/hoikictri.jpg",
        "name": "Hồi Kí Chính Trị",
        "price": 180000,
        "type": "Chính Trị",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/chinhtri/tutotdenvidai.jpg",
        "name": "Từ Tốt Đến Vĩ Đại",
        "price": 210000,
        "type": "Chính Trị",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/batsongcamxuc.jpg",
        "name": "Bắt Sóng Cảm Xúc",
        "price": 110000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        
        "img": "./img-de-an/kinagsong/chienthangconquytrongbban.jpg",
        "name": "Chiến Thắng Con Quỷ Trong Bạn",
        "price": 89000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/dammuoc.jpg",
        "name": "Dám Mơ Ước",
        "price": 123000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/gieosuynghigapthanhcong.jpg",
        "name": "Gieo Suy Nghĩ Gặp Thành Công",
        "price": 99000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/kinangdecanbangcongviec.jpg",
        "name": "Kĩ Năng Để Cân Bằng Công Việc",
        "price": 100000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/ngethuatthuyetphuc.jpg",
        "name": "Nghệ Thuật Thuyết Phục",
        "price": 120000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/qualytg.jpg",
        "name": "Quản Lý Thời Gian",
        "price": 79000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/toituduytoi.jpg",
        "name": "Tôi Tư Duy Tôi",
        "price": 77000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kinagsong/tuduytichcuc.jpg",
        "name": "Tư Duy Tích Cực",
        "price": 101000,
        "type": "Kĩ Năng Sống",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kte/bimattuduytrieuphu.jpg",
        "name": "Bí Mật Tư Duy Triệu Phú",
        "price": 120000,
        "type": "Kinh Tế",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kte/chienthangconquy.jpg",
        "name": "Chiến Thắng Con Quỷ Trong Bạn",
        "price": 88000,
        "type": "Kinh Tế",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kte/damnghilon.jpg",
        "name": "Dám Nghĩ Lớn",
        "price": 89000,
        "type": "Kinh Tế",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kte/nghigiaulamgiau.jpg",
        "name": "Nghĩ Giàu Và Làm Giàu",
        "price": 98000,
        "type": "Kinh Tế",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kte/nhungkexuatchung.jpg",
        "name": "Những Kẻ Xuất Chúng",
        "price": 80000,
        "type": "Kinh Tế",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/kte/thegioiphang.jpg",
        "name": "Thế Giới Phẳng",
        "price": 200000,
        "type": "Kinh Tế",
        "countTotal": 0,
        "issale": 0
    },
    {
       
        "img": "./img-de-an/lichsu/daivietsuki.jpg",
        "name": "Đại Việt Sử Kí Toàn Thư",
        "price": 99000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/daumotienbac.jpg",
        "name": "Dầu Mỏ,Tiền Bạc Và Quyền Lực",
        "price": 65000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/dottuyetchungthu6.jpg",
        "name": "Đợt Tuyệt Chủng Thứ Sáu",
        "price": 77000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/lstuonglai.jpg",
        "name": "Lịch Sử Tương Lai",
        "price": 65000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/lsvanvat.jpg",
        "name": "Lịch Sử Vạn Vật",
        "price": 70000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/soluocveloainguoi.jpg",
        "name": "Sơ Lược Về Loài Người",
        "price": 75000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/sungthep.jpg",
        "name": "Súng Vi Trùng Và Thép",
        "price": 82000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/lichsu/trattuthegioi.jpg",
        "name": "Trật Tự Thế Giới",
        "price": 76000,
        "type": "Lịch Sử",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/chuatechiecnhan.jpg",
        "name": "Chúa Tể Của Những Chiếc Nhẫn",
        "price": 130000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/cuocchiendautien.jpg",
        "name": "Cuộc Chiến Đầu Tiên",
        "price": 99000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/harypoter.jpg",
        "name": "Harry Potter",
        "price": 150000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/hoangtube.jpg",
        "name": "Hoàng Tử Bé",
        "price": 65000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/neuhcicon1ngaydesong.jpg",
        "name": "Nếu Chỉ Còn Một Ngày Để Sống",
        "price": 113000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/thanhphongaytayeunha.jpg",
        "name": "Thành Phố Ngày Ta Yêu Nhau",
        "price": 56000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/toisedbanneuroi.jpg",
        "name": "Tôi Sẽ Đỡ Bạn Nếu Rơi",
        "price": 75000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/truyen/tuoitrredanggiabaonhieu.jpg",
        "name": "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        "price": 112000,
        "type": "Truyện",
        "countTotal": 0,
        "issale": 0
    },
    {
        "img": "./img-de-an/vhoa/cosovanhoavn.jpg",
        "name": "Cơ Sở Văn Hóa Việt Nam",
        "price": 65000,
        "type": "Văn Hóa",
        "countTotal": 0,
        "issale": 0
    },
    {      
        "img": "./img-de-an/vhoa/hanhtrinhvephuongdong.jpg",
        "name": "Hành Trình Về Phương Đông",
        "price": 74000,
        "type": "Văn Hóa",
        "countTotal": 0,
        "issale": 0
    },
    {       
        "img": "./img-de-an/vhoa/langvanhoa.jpg",
        "name": "Làng Văn Hóa",
        "price": 78000,
        "type": "Văn Hóa",
        "countTotal": 0,
        "issale": 0
    },
    {     
        "img": "./img-de-an/vhoa/nhungcaunnoihay.jpg",
        "name": "Những Câu Nói Hay Về Văn Hóa",
        "price": 56000,
        "type": "Văn Hóa",
        "countTotal": 0,
        "issale": 0
    },
    {       
        "img": "./img-de-an/vhoa/vanhoavn.jpg",
        "name": "Văn Hóa Việt Nam",
        "price": 71000,
        "type": "Văn Hóa",
        "countTotal": 0,
        "issale": 0
    },
    {      
        "img": "./img-de-an/vhoa/vnphongtuc.jpg",
        "name": "Việt Nam Phong Tục",
        "price": 100000,
        "type": "Văn Hóa",
        "countTotal": 0,
        "issale": 0
    },
]
let listCoupon = [
    {
        noiDungCoupon: '1',
        giaTri: 50000,
        timeB: '20-11-2019',
        timeE: '30-12-2019',
    },
    {
        noiDungCoupon: 'h2',
        giaTri: 50000,
        timeB: '20-11-2019',
        timeE: '30-12-2019',
    },
    {
        noiDungCoupon: 'ch2',
        giaTri: 50000,
        timeB: '20-11-2019',
        timeE: '30-12-2019',
    }
]
// localStorage.setItem("listSanPhamLocalStorage", JSON.stringify(listSanPham));
// let hoaDon = []
// localStorage.setItem('hoaDonLocalStorage', JSON.stringify(hoaDon));
// let storage = localStorage.getitem('listSanPhamLocalStorage');
// if (storage == undefined){
//     localStorage.setItem('listSanPhamLocalStorage', JSON.stringify(listSanPham))
// }
function madeData() {
    if (typeof (Storage) !== "undefined") {
        let hoaDon = []
        let storageOfListSanPham = localStorage.getItem('listSanPhamLocalStorage');
        let storageOfCoupon = localStorage.getItem('listCouponLocalStorage');
        let storageOfHoaDon = localStorage.getItem('listSanPhamLocalStorage');
        if (storageOfListSanPham == undefined || storageOfHoaDon == undefined || storageOfCoupon == undefined ) {
            localStorage.setItem('listSanPhamLocalStorage', JSON.stringify(listSanPham));
            localStorage.setItem('hoaDonLocalStorage', JSON.stringify(hoaDon))
            localStorage.setItem('listCouponLocalStorage', JSON.stringify(listCoupon));
        }
    }
    else {
        alert('Sorry! No Web Storage support..')
    }
}
madeData();