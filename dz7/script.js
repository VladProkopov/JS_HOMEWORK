let Fan = function() {
    this.get = function() {
        this.w = +prompt('Введите количество Вт(W) вашего вентилятора');
        this.t = +prompt('Сколько времени будет работать вентилятор? Введите в (Часах)');
        this.p = +prompt('Введите цену за 1кВТ/ч', '0.0433');
        this.v = confirm('ON/OFF');
        this.sum = 0;
        this.sumPrice = 0;
        this.operation();
    };
    

    this.operation = function() {
        if(this.v === true) {
            this.sum = this.w * this.t / 1000;
            alert('Ваш вентилятор потребляет' + ' ' + this.sum + 'кВт' + ' ' + 'за'+ ' ' + this.t + ' ' + 'час');
        }

        this.show();
    };

    this.show = function() {
        if(this.v === true) {
            this.sumPrice = this.sum * this.p;
            alert('Значит за' + ' ' + this.t + 'час, пользование нужно заплатить' + ' ' + this.sumPrice + ' ' + 'бел. руб.');
        }else { 
            alert('Включите пожалуйста вентилятор для рассчетов!');
        }
    };
};

let ven = new Fan;
ven.get();
console.log(ven);