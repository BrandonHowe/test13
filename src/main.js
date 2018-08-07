let hasnewgamestarted = 0;
let startnewgamenumberanimationobject = {
    bignumberdigits: 0,
    bignumbertens: 0,
    bignumberhundreds: 0,
    bignumberkilos: 0,
    bignumbertkilos: 0,
    timedelay: 500,
}

function O (i) {
    return document.getElementById(i);
}

function S (i) {
    return O(i).style;
}

function startnewgame () {
    if (hasnewgamestarted === 0) {
        hasnewgamestarted = 1;
        O('header').style.display = 'none';
        O('titlescreen').style.display = 'none';
        O('titlesetdateanimation').style.display = 'flex';
        O('titlesetdateanimationbox').style.display = 'flex';
        setTimeout(startnewgamenumberanimation, 1000);
    }
}

function startnewgamenumberanimation () {
        setTimeout(startnewgamenumberanimationloop, startnewgamenumberanimationobject.timedelay);
}

function startnewgamenumberanimationloop () {
    if (startnewgamenumberanimationobject.bignumberdigits != 9 && startnewgamenumberanimationobject.timedelay > 1) {
        startnewgamenumberanimationobject.bignumberdigits++;
        O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
    } else if (startnewgamenumberanimationobject.timedelay != 1) {
        if (startnewgamenumberanimationobject.bignumbertens != 9) {
            startnewgamenumberanimationobject.bignumberdigits = 0;
            startnewgamenumberanimationobject.bignumbertens++;
            O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
            O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
        } else {
            if (startnewgamenumberanimationobject.bignumberhundreds != 9) {
                startnewgamenumberanimationobject.bignumberdigits = 0;
                startnewgamenumberanimationobject.bignumbertens = 0;
                startnewgamenumberanimationobject.bignumberhundreds++;
                O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
                O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
                O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
            } else {
                if (startnewgamenumberanimationobject.bignumberkilos != 9) {
                    startnewgamenumberanimationobject.bignumberdigits = 0;
                    startnewgamenumberanimationobject.bignumbertens = 0;
                    startnewgamenumberanimationobject.bignumberhundreds = 0;
                    startnewgamenumberanimationobject.bignumberkilos++;
                    O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
                    O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
                    O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
                    O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
                } else {
                    if (startnewgamenumberanimationobject.bignumbertkilos != 9) {
                        startnewgamenumberanimationobject.bignumberdigits = 0;
                        startnewgamenumberanimationobject.bignumbertens = 0;
                        startnewgamenumberanimationobject.bignumberhundreds = 0;
                        startnewgamenumberanimationobject.bignumberkilos = 0;
                        startnewgamenumberanimationobject.bignumbertkilos++;
                        O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
                        O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
                        O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
                        O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
                        O('titlesetdateanimationhour1').innerHTML = startnewgamenumberanimationobject.bignumbertkilos;
                    }
                }
            }
        }
    } else {
        startnewgameanimationloopspeedup();
    }
    if (startnewgamenumberanimationobject.timedelay > 1) {
        startnewgamenumberanimationobject.timedelay -= 10;
    }
    startnewgamenumberanimation();
}

function startnewgameanimationloopspeedup () {
    startnewgamenumberanimationobject.bignumberdigits++;
    startnewgamenumberanimationobject.bignumbertens++;
    startnewgamenumberanimationobject.bignumberhundreds++;
    O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
    O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
    O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
    setTimeout(startnewgameanimationloopspeedup, 1);
}
