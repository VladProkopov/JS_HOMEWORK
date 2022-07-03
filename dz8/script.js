let title = document.createElement('title');
title.innerHTML = 'New html document';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);
h1.style.fontWeight = '400';
h1.style.fontStyle = 'normal';
h1.style.fontSize = '36px';
h1.style.lineHeight = '48px';
h1.style.textAlign = 'center';
h1.style.color = '#212121';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('p1');
document.body.appendChild(p1);

// Не разобрался как подключить шрифты

// /*<link href="https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@400;700&family=Open+Sans:wght@300&display=swap" rel="stylesheet"> */
// let font = document.createElement('link');
// font.setAttribute('<link href="https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@400;700&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>');
// document.head.appendChild(font);

let styleP1 = document.createElement('style');
styleP1.innerHTML = `
    body {
        margin-top: 50px;
    }

    .p1 {
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #9FA3A7;
        margin-top: -15px;
    }

    .p2 {
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #9FA3A7;
        margin-top: -15px;
        width: 220px;
    }
    
    .list {
        list-style: none;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title_h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: #9FA3A7;
        text-transform: uppercase;
    }

    .title_h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        width: 250px;
    }

    .btn {
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        background-color: Transparent;
        margin-top: 30px;
    }

    .link {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 15px;
        color: #212121;
        text-transform: uppercase;
        text-decoration: none;
    }

    .Container {
        display: flex;
        
        border: 1px solid #E8E9ED;
        border-radius: 15px;
        margin: 50px auto;
        width: 700px;
        height: 400px;
    }
    
    .divLeft {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .divLeft:hover {
        background-color: #8F75BE;
        border-radius: 15px;
    }

    .divLeft:hover .title_h2 {
        color: #FFC80A;
    }

    .divLeft:hover .title_h1 {
        color: #fff;
    }

    .divLeft:hover .p2 {
        color: #fff;
    }

    .divLeft:hover .link {
        color: #fff;
    }

    .divRight {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .divRight:hover {
        background-color: #8F75BE;
        border-radius: 15px;
    }

    .divRight:hover .title_h2 {
        color: #FFC80A;
    }
    
    .divRight:hover .title_h1 {
        color: #fff;
    }

    .divRight:hover .p2 {
        color: #fff;
    }

    .divRight:hover .link {
        color: #fff;
    }
`;
document.head.appendChild(styleP1);

let div1 = document.createElement('div');
div1.innerHTML = '';
div1.classList.add('Container');
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.innerHTML = `
<ul class = 'list' >
    <li><h2 class = 'title_h2'>Freelancer</h2></li>
    <li><h1 class = 'title_h1'>Initially designed to</h1></li>
    <li><p class = 'p2'>But I must explain to you how all this mistaken idea of denouncing</p></li>
    <li><button class = 'btn'><a class = 'link' href="#">Start here</a></button></li>
</ul>                
`;
div2.classList.add('divLeft');
div1.appendChild(div2);

let div3 = document.createElement('div');
div3.innerHTML = `
<ul class = 'list' >
    <li><h2 class = 'title_h2'>Studio</h2></li>
    <li><h1 class = 'title_h1'>Initially designed to</h1></li>
    <li><p class = 'p2'>But I must explain to you how all this mistaken idea of denouncing</p></li>
    <li><button class = 'btn'><a class = 'link' href="#">Start here</a></button></li>
</ul>                
`;
div3.classList.add('divRight');
div1.appendChild(div3);
















