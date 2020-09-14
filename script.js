card1 = document.getElementById('c1');
card2 = document.getElementById('c2');
card3 = document.getElementById('c3');
card4 = document.getElementById('c4');
card5 = document.getElementById('c5');
card6 = document.getElementById('c6');
card7 = document.getElementById('c7');
card8 = document.getElementById('c8');
card9 = document.getElementById('c9');
card10 = document.getElementById('c10');
card11 = document.getElementById('c11');
card12 = document.getElementById('c12');
var green = 0;

function close(a) {
    a.style.removeProperty('transform');
    a.querySelector('.back').style.backgroundColor = 'white';
    a.querySelector('.back').style.border = '5px solid white';
}
function allClose() {
    close(card1);
    close(card2);
    close(card3);
    close(card4);
    close(card5);
    close(card6);
    close(card7);
    close(card8);
    close(card9);
    close(card10);
    close(card11);
    close(card12);
    massive = [[0,card1],[0,card2],[0,card3],[0,card4],[0,card5],[0,card6],[0,card7],[0,card8],
        [0,card9],[0,card10],[0,card11],[0,card12]];
    green = 0;
    document.getElementById('finalWin').style.display = 'none';
    document.getElementById('finalWindow').style.display = 'none';
    document.getElementById('finalText').style.display = 'none';
}
function sort() {
    var massive = [];
    for (var i = 0; i < 12; i++) {
        massive[i] = i + 1;
    }
    currentIndex = 0
    while (12 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex += 1;
        temporaryValue = massive[currentIndex];
        massive[currentIndex] = massive[randomIndex];
        massive[randomIndex] = temporaryValue;
    }
    card1.style.order = String(massive[0]);
    card2.style.order = String(massive[1]);
    card3.style.order = String(massive[3]);
    card4.style.order = String(massive[4]);
    card5.style.order = String(massive[5]);
    card6.style.order = String(massive[6]);
    card7.style.order = String(massive[7]);
    card8.style.order = String(massive[8]);
    card9.style.order = String(massive[9]);
    card10.style.order = String(massive[10]);
    card11.style.order = String(massive[11]);
    card12.style.order = String(massive[12]);
}
function game() {
    function win() {
        clearInterval(timerInterval);
        clearTimeout(cancelTimer);
        document.getElementById('finalWindow').style.display = 'block';
        document.getElementById('plenka').style.display = 'block';
        document.getElementById('finalWin').style.display = 'flex';
    }
    allClose();
    document.getElementById('c1').onclick = function () {
        if (massive[0][0] !== 3 && massive[0][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[0][0] = 1;
            k++;
            if (k == 2 && massive[1][0] == 1) {
                card1.style.transform = 'rotateY(180deg)';
                card1.querySelector('.back').style.backgroundColor = '#5AD66F';
                card1.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[0][0] = 3;
                card2.style.transform = 'rotateY(180deg)';
                card2.querySelector('.back').style.backgroundColor = '#5AD66F';
                card2.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[1][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[1][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c2').onclick = function () {
        if (massive[1][0] !== 3 && massive[1][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[1][0] = 1;
            k++;
            if (k == 2 && massive[0][0] == 1) {
                card1.style.transform = 'rotateY(180deg)';
                card1.querySelector('.back').style.backgroundColor = '#5AD66F';
                card1.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[0][0] = 3;
                card2.style.transform = 'rotateY(180deg)';
                card2.querySelector('.back').style.backgroundColor = '#5AD66F';
                card2.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[1][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[0][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c3').onclick = function () {
        if (massive[2][0] !== 3 && massive[2][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[2][0] = 1;
            k++;

            if (k == 2 && massive[3][0] == 1) {
                card3.style.transform = 'rotateY(180deg)';
                card3.querySelector('.back').style.backgroundColor = '#5AD66F';
                card3.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[2][0] = 3;
                card4.style.transform = 'rotateY(180deg)';
                card4.querySelector('.back').style.backgroundColor = '#5AD66F';
                card4.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[3][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[3][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c4').onclick = function () {
        if (massive[3][0] !== 3 && massive[3][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[3][0] = 1;
            k++;
            if (k == 2 && massive[2][0] == 1) {
                card3.style.transform = 'rotateY(180deg)';
                card3.querySelector('.back').style.backgroundColor = '#5AD66F';
                card3.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[2][0] = 3;
                card4.style.transform = 'rotateY(180deg)';
                card4.querySelector('.back').style.backgroundColor = '#5AD66F';
                card4.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[3][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[2][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c5').onclick = function () {
        if (massive[4][0] !== 3 && massive[4][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[4][0] = 1;
            k++;
            if (k == 2 && massive[5][0] == 1) {
                card5.style.transform = 'rotateY(180deg)';
                card5.querySelector('.back').style.backgroundColor = '#5AD66F';
                card5.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[4][0] = 3;
                card6.style.transform = 'rotateY(180deg)';
                card6.querySelector('.back').style.backgroundColor = '#5AD66F';
                card6.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[5][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[5][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c6').onclick = function () {
        if (massive[5][0] !== 3 && massive[5][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[5][0] = 1;
            k++;
            if (k == 2 && massive[4][0] == 1) {
                card5.style.transform = 'rotateY(180deg)';
                card5.querySelector('.back').style.backgroundColor = '#5AD66F';
                card5.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[4][0] = 3;
                card6.style.transform = 'rotateY(180deg)';
                card6.querySelector('.back').style.backgroundColor = '#5AD66F';
                card6.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[5][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[4][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c7').onclick = function () {
        if (massive[6][0] !== 3 && massive[6][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[6][0] = 1;
            k++;
            if (k == 2 && massive[7][0] == 1) {
                card7.style.transform = 'rotateY(180deg)';
                card7.querySelector('.back').style.backgroundColor = '#5AD66F';
                card7.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[6][0] = 3;
                card8.style.transform = 'rotateY(180deg)';
                card8.querySelector('.back').style.backgroundColor = '#5AD66F';
                card8.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[7][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[7][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c8').onclick = function () {
        if (massive[7][0] !== 3 && massive[7][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[7][0] = 1;
            k++;
            if (k == 2 && massive[6][0] == 1) {
                card7.style.transform = 'rotateY(180deg)';
                card7.querySelector('.back').style.backgroundColor = '#5AD66F';
                card7.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[6][0] = 3;
                card8.style.transform = 'rotateY(180deg)';
                card8.querySelector('.back').style.backgroundColor = '#5AD66F';
                card8.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[7][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[6][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c9').onclick = function () {
        if (massive[8][0] !== 3 && massive[8][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[8][0] = 1;
            k++;
            if (k == 2 && massive[9][0] == 1) {
                card9.style.transform = 'rotateY(180deg)';
                card9.querySelector('.back').style.backgroundColor = '#5AD66F';
                card9.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[8][0] = 3;
                card10.style.transform = 'rotateY(180deg)';
                card10.querySelector('.back').style.backgroundColor = '#5AD66F';
                card10.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[9][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[9][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c10').onclick = function () {
        if (massive[9][0] !== 3 && massive[9][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[9][0] = 1;
            k++;
            if (k == 2 && massive[8][0] == 1) {
                card9.style.transform = 'rotateY(180deg)';
                card9.querySelector('.back').style.backgroundColor = '#5AD66F';
                card9.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[8][0] = 3;
                card10.style.transform = 'rotateY(180deg)';
                card10.querySelector('.back').style.backgroundColor = '#5AD66F';
                card10.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[9][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[8][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c11').onclick = function () {
        if (massive[10][0] !== 3 && massive[10][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[10][0] = 1;
            k++;
            if (k == 2 && massive[11][0] == 1) {
                card11.style.transform = 'rotateY(180deg)';
                card11.querySelector('.back').style.backgroundColor = '#5AD66F';
                card11.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[10][0] = 3;
                card12.style.transform = 'rotateY(180deg)';
                card12.querySelector('.back').style.backgroundColor = '#5AD66F';
                card12.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[11][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[11][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    document.getElementById('c12').onclick = function () {
        if (massive[11][0] !== 3 && massive[11][0] !== 1) {
            var k = 0;
            for (var i = 0; i < 12; i++) {
                if (massive[i][0] == 1) {
                    k++;
                }
            }
            if (k == 2) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.removeProperty('transform');
                        massive[i][1].querySelector('.back').style.backgroundColor = 'white';
                        massive[i][1].querySelector('.back').style.border = '5px solid white';
                        massive[i][0] = 0;
                    }
                }
            }
            massive[11][0] = 1;
            k++;
            if (k == 2 && massive[10][0] == 1) {
                card11.style.transform = 'rotateY(180deg)';
                card11.querySelector('.back').style.backgroundColor = '#5AD66F';
                card11.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[10][0] = 3;
                card12.style.transform = 'rotateY(180deg)';
                card12.querySelector('.back').style.backgroundColor = '#5AD66F';
                card12.querySelector('.back').style.border = '5px solid #5AD66F';
                massive[11][0] = 3;
                k = 0;
                green += 1;
            }
            if (k == 2 && massive[10][0] == 0) {
                for (var i = 0; i < 12; i++) {
                    if (massive[i][0] == 1) {
                        massive[i][1].style.transform = 'rotateY(180deg)';
                        massive[i][1].querySelector('.back').style.backgroundColor = '#F44336';
                        massive[i][1].querySelector('.back').style.border = '5px solid #F44336';
                    }
                }
            }
        }
        if (green == 6){win();}
    }
    var sd = 5, se = 9;
    var timer = '00:' + sd + se;
    var time = document.getElementById('timer');
    time.innerText = timer;
    var t = 0;
    function func1() {
        if (t ==1){
            t++;
        }
        if (se > 0) {
            se -= 1;
            timer = '00:' + sd + se;
            time.innerText = timer;
        }
        if (se ==0 && sd !== 0 && t == 0){
            t++;
            timer = '00:' + sd + se;
            time.innerText = timer;
        }
        if (se == 0 && sd !== 0 && t == 2) {
            se = 9;
            sd -= 1;
            timer = '00:' + sd + se;
            time.innerText = timer;
            t = 0;
        }
    }

    var timerInterval = setInterval(func1, 1000);
    var cancelTimer = setTimeout(() => {
        clearInterval(timerInterval);
        document.getElementById('finalWindow').style.display = 'block';
        document.getElementById('plenka').style.display = 'block';
        document.getElementById('finalText').style.display = 'flex';
    }, 60000);
    document.getElementById('button').onclick = function () {
        document.getElementById('finalWindow').style.display = 'none';
        document.getElementById('plenka').style.display = 'none';
        clearInterval(timerInterval);
        sort();
        game();
    }
}
sort();
game();
var massive = [[0,card1],[0,card2],[0,card3],[0,card4],[0,card5],[0,card6],[0,card7],[0,card8],
    [0,card9],[0,card10],[0,card11],[0,card12]];