const btnF = document.querySelectorAll('.btn-f');
const pot = document.querySelectorAll('.pot');
const cashShow = document.querySelector('#cash');

let flower;
let price;
let cash = 1800;

let last;

btnF.forEach(element => {
    element.addEventListener('click', function () {
        if (last) {
            last.classList.remove('active');
        }

        flower = this.id;
        price  = this.textContent;

        this.classList.add('active');
        last = this;
    });
});

pot.forEach(element => {
    element.addEventListener('click', function () {
        if (flower) {
            // Xẻng
            const potFlower = this.querySelector('.flower');
            if (flower == 'xeng') {
                potFlower.setAttribute('src', '');
            }
            // Hoa
            else {
                if (cash >= price) {
                    if(potFlower.getAttribute('src') == '') {
                        cash -= price;
                        cashShow.textContent = cash;
                        potFlower.setAttribute('src', `public/images/${flower}.png`);
                    }
                    else {
                        alert('Đã có hoa');
                    }
                }
                else {
                    alert('Không đủ tiền!');
                }
            }
        }
        else {
            alert('Chưa chọn');
        }
    })
});