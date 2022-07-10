let body = document.querySelector(`body`);
let content = body.querySelector(`.content`);
let contentList = content.querySelector(`.content_list`);
let input = contentList.querySelector('.content_list_input');
let liTasks = contentList.querySelector(`.content_list_add`);

input.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {

        let length = liTasks.children.length;

        let inputElem = document.querySelector('.content_list_input');

        let li = document.createElement('li');
        li.classList.add('addedTask' + (length + 1));

        let span = document.createElement('span');
        span.classList.add('addedSpan' + (length + 1));
        span.innerHTML = inputElem.value;

        let inputCkeck = document.createElement('input');
        inputCkeck.setAttribute('type', 'checkbox');
        inputCkeck.setAttribute('id', 'addedTask_checkbox' + (length + 1));

        let btn = document.createElement('button');
        btn.classList.add('btn_revome');

        let btn2 = document.createElement('button');
        btn2.classList.add('btn_change');


        li.appendChild(inputCkeck);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(btn2);

        liTasks.appendChild(li);
        inputElem.value = '';


        btn.onclick = () => li.remove();

        btn2.addEventListener('click', function() {
            span.textContent = prompt('Введите другую задачу');
            if(span.textContent == true) {
                return span.textContent;
            }else {
                return span;
            }
                
            
        });

    };
    

});