const magicBall = document.getElementById('magic-ball');
const tetra = document.getElementById('tetrahedron');
const perpText = document.getElementById('perp-text');
const words = document.getElementById('text');
const radiate = document.getElementById('tap-radiation');

function removeEvents() {
    ['click', 'touchstart'].forEach(function(e) { //Immediately remove both click and touchstart event listeners from both the tetra and the ball.
        tetra.removeEventListener(e, resetBall);
        magicBall.removeEventListener(e, shake);
        magicBall.removeEventListener(e, tapRadiation);
    });
};

function allowEvents() {
    ['click', 'touchstart'].forEach(function(e) { //Allow both click and touchstart event listeners for the tetra's reset, and for the ball's shake and radiate.
        tetra.addEventListener(e, resetBall);
        magicBall.addEventListener(e, shake);
        magicBall.addEventListener(e, tapRadiation);
    });
};

function resetRadate() {
    radiate.style.animation = ``;
};

function tapRadiation(e) {
    radiate.style.left = `${e.clientX + window.pageXOffset}px`;
    radiate.style.top = `${e.clientY + window.pageYOffset}px`;
    radiate.style.animation = `radiate 10.5s cubic-bezier(0,1,0,1)`;
    radiate.style.animationFillMode = `forwards`;
};

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
        words.innerHTML = f1;
        perpText.innerHTML =f1;
    }
    if (fortune === 2) {
        words.innerHTML = f2;
        perpText.innerHTML = f2;
    }
    if (fortune === 3) {
        words.innerHTML = f3;
        perpText.innerHTML = f3;
    }
    if (fortune === 4) {
        words.innerHTML = f4;
        perpText.innerHTML = f4;
    }
    if (fortune === 5) {
        words.innerHTML = f5;
        perpText.innerHTML = f5;
    }
    if (fortune === 6) {
        words.innerHTML = f6;
        perpText.innerHTML = f6;
    }
    if (fortune === 7) {
        words.innerHTML = f7;
        perpText.innerHTML = f7;
    }
    if (fortune === 8) {
        words.innerHTML = f8;
        perpText.innerHTML = f8;
    }
    if (fortune === 9) {
        words.innerHTML = f9;
        perpText.innerHTML = f9;
    }
    if (fortune === 10) {
        words.innerHTML = f10;
        perpText.innerHTML = f10;
    }
    if (fortune === 11) {
        words.innerHTML = f11;
        perpText.innerHTML = f11;
    }
    if (fortune === 12) {
        words.innerHTML = f12;
        perpText.innerHTML = f12;
    }
    if (fortune === 13) {
        words.innerHTML = f13;
        perpText.innerHTML = f13;
    }
    if (fortune === 14) {
        words.innerHTML = f14;
        perpText.innerHTML = f14;
    }
    if (fortune === 15) {
        words.innerHTML = f15;
        perpText.innerHTML = f15;
    }
    if (fortune === 16) {
        words.innerHTML = f16;
        perpText.innerHTML = f16;
    }
    if (fortune === 17) {
        words.innerHTML = f17;
        perpText.innerHTML = f17;
    }
    if (fortune === 18) {
        words.innerHTML = f18;
        perpText.innerHTML = f18;
    }
    if (fortune === 19) {
        words.innerHTML = f19;
        perpText.innerHTML = f19;
    }
    if (fortune === 20) {
        words.innerHTML = f20;
        perpText.innerHTML = f20;
    }
};

function perpTextToggle() {
    perpText.classList.toggle('perp-text__active');
};

function textToggle() {
    text.classList.toggle('text__active');
};

function tetrahedronToggle() {
    tetra.classList.toggle('tetrahedron__active');
};

function ballToggle() {
    magicBall.classList.toggle('magic-ball__2');
};

function resetBall() {
    text.innerHTML = `<p class="intro">8</p>`;
    perpText.innerHTML = '';
}

function shake() {
    removeEvents(); //Remove both click and touchstart event listeners that trigger both radiate and shake for the ball, and both click and touchstart event listeners that trigger reset for the tetra.
    ballToggle(); //Toggle the class of the ball from the opacity 0 to the opacity 1 class, which has a 4s animation applied, covering the black 8 ball behind them (toggling classes won't work for radial gradient property, so this is the workaround).
    tetrahedronToggle(); //Toggle the class of the tetrahedron from the (non existent) inactive class to the active class, which has 6s animation applied.
    textToggle(); //Toggle between the active text class, which has 6s animation applied, and the (non existent) inactive text class.
    perpTextToggle(); //Toggle between the active perpendicular text class, which has 6s animation applied, and the (non existent) inactive perpendicular text class.
    setTimeout(textUpdate, 3500); //At 3500ms, while text and perpendicular text are spinning, switch their innerHTMLs to 1 of the 20 strings at random.
    setTimeout(ballToggle, 4500); //At 4500ms toggle the class of the ball back from the opacity 1 to the opacity 0 class, which has a 7s animation applied, revealing once again the black 8 ball behind them.
    setTimeout(tetrahedronToggle, 6000); //At 6000ms toggle back to the (non existent) inactive tetrahedron class so that it can toggle to active again on next event fire.
    setTimeout(textToggle, 6000); //At 6000ms toggle back to the (non existent) inactive text class so that it can toggle to active again on next event fire.
    setTimeout(perpTextToggle, 6000); //At 6000ms toggle back to the (non existent) inactive perpendicular text class so that it can toggle to active again on next event fire.
    setTimeout(allowEvents, 10500); //after 10500ms allow event listeners again.
    setTimeout(resetRadate, 10500);
};

allowEvents(); //As soon as the script loads fire up all event listeners.
textToggle(); //As soon as the script loads toggle the text to the (non existent) inactive class.
perpTextToggle(); //As soon as the script loads toggle the perpendicular text to the (non existent) inactive class.
resetBall(); //As soon as the script loads set the text to '8' and perpText to an empty string.
