const calc = function() {

        let conclusio = document.querySelector('.calc_conclusion');
        conclusio.innerHTML = '0';

        let buttons = document.querySelectorAll('#button1');
        let buttonsOperat = document.querySelectorAll('#button2');

        let num1 = 0;
        let num2 = 0;
        let result = 0;
        let operation = '';

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if(conclusio.innerHTML === '0') conclusio.innerHTML = ''; {
                    conclusio.innerHTML += this.innerHTML;
                    num1 += this.innerHTML;
                    if(operation != '') {
                        return num1;
                    }
                    console.log(num1)
                }
            })
        })

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if(operation != '' && num1 != '') {
                    num2 += this.innerHTML;
                    console.log(num2)
                }
            })
        })

        buttonsOperat.forEach(function(btnOper) {
            btnOper.addEventListener('click', function() {
                if(conclusio.innerHTML = '0') {
                    conclusio.innerHTML = btnOper.innerHTML;
                    operation = this.innerHTML;
                }

                switch(true) {
                    case operation == 'C':
                        conclusio.innerHTML = '0';
                        location.reload();
                    break;
                    case operation == '+/-':
                        
                    break;
                    case operation == '%':
                        
                    break;
                    case operation == '&#247;':
                        result = +num1 / +num2;
                    break;
                    case operation == '&#215;':
                        result = +num1 * +num2;
                    break;
                    case operation == '-':
                        result = (+num1 - +num2);
                        console.log(typeof num1)
                    break;
                    case operation == '+':
                        result = +num1 + +num2;
                    break;
                    case operation == '=':
                        conclusio.innerHTML = result;
                    break;
                }
            })
        }) 
}


window.addEventListener('load', function() {
    calc();
})


