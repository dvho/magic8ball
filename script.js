var t = 0;
var tt = 0;
var ttt = 0;
const magicBall = document.getElementById('magic-ball');
const tetrahedron = document.getElementById('tetrahedron');
const perpText = document.getElementById('perp-text');
const text = document.getElementById('text');

magicBall.addEventListener('click', shake);

function textUpdate() {
    let fortune = Math.ceil(Math.random() * 20);
    let f1, f2, f3, f4, f5, f6, f7 ,f8, f9, f10, f11, f12, f13, f14, f15, f16, f17 ,f18, f19, f20;

    f1 = `<p class="answer"><br><br><br>It is certain.<br><br><br></p>`;
    f2 = `<p class="answer"><br><br>It is<br>decidedly so.<br><br></p>`;
    f3 = `<p class="answer"><br><br>Without<br>a doubt.<br><br></p>`;
    f4 = `<p class="answer"><br><br>Yes,<br>definitely.<br><br></p>`;
    f5 = `<p class="answer"><br><br>You<br>may rely<br>on it.<br><br><br></p>`;
    f6 = `<p class="answer"><br><br>As I<br>see it, yes.<br><br></p>`;
    f7 = `<p class="answer"><br><br><br>Most likely.<br><br><br></p>`;
    f8 = `<p class="answer"><br><br>Outlook<br>good.<br><br></p>`;
    f9 = `<p class="answer"><br><br><br>Yes.<br><br><br></p>`;
    f10 = `<p class="answer"><br><br>Signs<br>point to yes.<br><br></p>`;
    f11 = `<p class="answer"><br><br><br>Signs hazy,<br>try again.<br><br><br></p>`;
    f12 = `<p class="answer"><br><br>Ask<br>again later.<br><br></p>`;
    f13 = `<p class="answer"><br><br>Better<br>not tell<br>you now.<br><br></p>`;
    f14 = `<p class="answer"><br><br>Cannot<br>predict now.<br><br></p>`;
    f15 = `<p class="answer"><br><br><br>Concentrate<br>and ask again.<br><br><br></p>`;
    f16 = `<p class="answer"><br><br>Don't<br>count on it.<br><br></p>`;
    f17 = `<p class="answer"><br><br>My<br>reply is<br>no.<br><br></p>`;
    f18 = `<p class="answer"><br><br>My<br>sources<br>say no.<br><br></p>`;
    f19 = `<p class="answer"><br><br>Outlook<br>not so good.<br><br></p>`;
    f20 = `<p class="answer"><br><br>Very<br>doubtful.<br><br></p>`;



    if (fortune === 1) {
        text.innerHTML = f1;
        perpText.innerHTML =f1;
    }
    if (fortune === 2) {
        text.innerHTML = f2;
        perpText.innerHTML = f2;
    }
    if (fortune === 3) {
        text.innerHTML = f3;
        perpText.innerHTML = f3;
    }
    if (fortune === 4) {
        text.innerHTML = f4;
        perpText.innerHTML = f4;
    }
    if (fortune === 5) {
        text.innerHTML = f5;
        perpText.innerHTML = f5;
    }
    if (fortune === 6) {
        text.innerHTML = f6;
        perpText.innerHTML = f6;
    }
    if (fortune === 7) {
        text.innerHTML = f7;
        perpText.innerHTML = f7;
    }
    if (fortune === 8) {
        text.innerHTML = f8;
        perpText.innerHTML = f8;
    }
    if (fortune === 9) {
        text.innerHTML = f9;
        perpText.innerHTML = f9;
    }
    if (fortune === 10) {
        text.innerHTML = f10;
        perpText.innerHTML = f10;
    }
    if (fortune === 11) {
        text.innerHTML = f11;
        perpText.innerHTML = f11;
    }
    if (fortune === 12) {
        text.innerHTML = f12;
        perpText.innerHTML = f12;
    }
    if (fortune === 13) {
        text.innerHTML = f13;
        perpText.innerHTML = f13;
    }
    if (fortune === 14) {
        text.innerHTML = f14;
        perpText.innerHTML = f14;
    }
    if (fortune === 15) {
        text.innerHTML = f15;
        perpText.innerHTML = f15;
    }
    if (fortune === 16) {
        text.innerHTML = f16;
        perpText.innerHTML = f16;
    }
    if (fortune === 17) {
        text.innerHTML = f17;
        perpText.innerHTML = f17;
    }
    if (fortune === 18) {
        text.innerHTML = f18;
        perpText.innerHTML = f18;
    }
    if (fortune === 19) {
        text.innerHTML = f19;
        perpText.innerHTML = f19;
    }
    if (fortune === 20) {
        text.innerHTML = f20;
        perpText.innerHTML = f20;
    }
}

function allowClickAgain() {
    magicBall.addEventListener('click', shake);
}

function perpTextToggle() {
    perpText.classList.toggle('perp-text__active');
}

function textToggle() {
    text.classList.toggle('text__active');
}

function tetrahedronToggle() {
    tetrahedron.classList.toggle('tetrahedron__active');
}

function ballToggle() {
    magicBall.classList.toggle('magic-ball__2');
}

function shake() {
    magicBall.removeEventListener('click', shake);
    ballToggle();
    tetrahedronToggle();
    textToggle();
    perpTextToggle();
    setTimeout(textUpdate, 3500);
    setTimeout(ballToggle, 4500);
    setTimeout(tetrahedronToggle, 6000);
    setTimeout(textToggle, 6000);
    setTimeout(perpTextToggle, 6000);
    setTimeout(allowClickAgain, 10500);
}

perpTextToggle();
textToggle();
text.innerHTML = `<p class="intro">8</p>`;
