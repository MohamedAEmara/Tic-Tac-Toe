// Global varialbe to determine the current turn X or O
let turn = 1;       // 1 for X

let X = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let O = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let vis = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let cnt = 0;

const all = document.getElementById('all');
const title = document.getElementById('title');
const winner = document.getElementById('winner');
const result = document.getElementById('result');
const showTurn = document.getElementById('turn');
const btn = document.getElementById('again');

// 1 means X won, 2 means O won, 0 means noone yet.
function CheckWinner1 () {
    n = 3;
    for(i=0; i<n; i++) {
        if(X[i][0] == 1 && X[i][1] == 1 && X[i][2] == 1)
            return 1;
        if(X[0][i] == 1 && X[1][i] == 1 && X[2][i] == 1)
            return 1;
        if(O[i][0] == 1 && O[i][1] == 1 && O[i][2] == 1)
            return 2;
        if(O[0][i] == 1 && O[1][i] == 1 && O[2][i] == 1)
            return 2;
    }

    // Check for diagonal in X & O
    if(X[0][0] == 1 && X[1][1] == 1 && X[2][2] == 1)
        return 1;
    if(X[0][2] == 1 && X[1][1] == 1 && X[2][0] == 1)
        return 1;
    
    if(O[0][0] == 1 && O[1][1] == 1 && O[2][2] == 1)
        return 2;
    if(O[0][2] == 1 && O[1][1] == 1 && O[2][0] == 1)
        return 2;

    return 0;
}

function ResetGrid() {
    for(i=0; i<3; i++) {
        for(j=0; j<3; j++) {
            vis[i][j] = 0;
            X[i][j] = 0;
            O[i][j] = 0;
        }
    }

    oneone.style.backgroundColor = 'plum';
    onetwo.style.backgroundColor = 'plum';
    onethree.style.backgroundColor = 'plum';
    twoone.style.backgroundColor = 'plum';
    twotwo.style.backgroundColor = 'plum';
    twothree.style.backgroundColor = 'plum';
    twothree.style.backgroundColor = 'plum';
    threeone.style.backgroundColor = 'plum';
    threetwo.style.backgroundColor = 'plum';
    threethree.style.backgroundColor = 'plum';

    oneone.textContent = '';
    onetwo.textContent = '';
    onethree.textContent = '';
    twoone.textContent = '';
    twotwo.textContent = '';
    twothree.textContent = '';
    threeone.textContent = '';
    threetwo.textContent = '';
    threethree.textContent = '';

}

function winnerX() {
    cnt = 0;
    // disable all divs
    // blur all the grid
    // display message that X won
    all.style.filter = 'blur(12px)';
    title.style.filter = 'blur(12px)';
    title.classList.add('disable');
    all.classList.add('disable');

    winner.classList.add('enable');
    result.textContent = 'X is the Winner';
    // winner.setAttribute("id", 'enable');
    // console.log('hellow');
    // winner.setAttribute('class', 'test');
    // winner.setAttribute('name', 'sl;dfjka;lsdkfj');

    btn.addEventListener('click', () => {
        all.style.filter = 'blur(0px)';
        title.style.filter = 'blur(0px)';
        title.classList.remove('disable');
        all.classList.remove('disable');
        winner.classList.remove('enable');
        ResetGrid();
    })

    turn = 1;

}


function winnerO() {
    cnt = 0;
    // disable all divs
    // blur all the grid
    // display message that O won
    all.style.filter = 'blur(12px)';
    title.style.filter = 'blur(12px)';
    title.classList.add('disable');
    all.classList.add('disable');

    winner.classList.add('enable');
    result.textContent = 'O is the Winner';
    // winner.setAttribute("id", 'enable');
    // console.log('hellow');
    // winner.setAttribute('class', 'test');
    // winner.setAttribute('name', 'sl;dfjka;lsdkfj');

    btn.addEventListener('click', () => {
        all.style.filter = 'blur(0px)';
        title.style.filter = 'blur(0px)';
        title.classList.remove('disable');
        all.classList.remove('disable');
        winner.classList.remove('enable');
        ResetGrid();
    })

    turn = 2;

}

function draw() {
    cnt = 0;
    console.log("DRAWWWW");
    result.textContent = `It's Draw!!`;

    all.style.filter = 'blur(12px)';
    title.style.filter = 'blur(12px)';
    title.classList.add('disable');
    all.classList.add('disable');

    winner.classList.add('enable');
    // result.textContent = 'X is the Winner';
    // winner.setAttribute("id", 'enable');
    // console.log('hellow');
    // winner.setAttribute('class', 'test');
    // winner.setAttribute('name', 'sl;dfjka;lsdkfj');

    btn.addEventListener('click', () => {
        all.style.filter = 'blur(0px)';
        title.style.filter = 'blur(0px)';
        title.classList.remove('disable');
        all.classList.remove('disable');
        winner.classList.remove('enable');
        ResetGrid();
        
    })
    console.log('drawww');
}
function init() {
    if(turn == 1)
        showTurn.textContent = "Turn is for X";
    else 
        showTurn.textContent = "Turn is for O"
}


const oneone = document.getElementById('cell 11');
const onetwo = document.getElementById('cell 12');
const onethree = document.getElementById('cell 13');
const twoone = document.getElementById('cell 21');
const twotwo = document.getElementById('cell 22');
const twothree = document.getElementById('cell 23');
const threeone = document.getElementById('cell 31');
const threetwo = document.getElementById('cell 32');
const threethree = document.getElementById('cell 33');

// oneone.addEventListener('click', handleClick);

// function handleClick(e) {

//     console.log('clicked');
//     if(e.target.id == 'cell-11') {
//         console.log('one one')
//     }
// }


oneone.addEventListener('click', handclick11);
onetwo.addEventListener('click', handclick12);
onethree.addEventListener('click', handclick13);
twoone.addEventListener('click', handclick21);
twotwo.addEventListener('click', handclick22);
twothree.addEventListener('click', handclick23);
threeone.addEventListener('click', handclick31);
threetwo.addEventListener('click', handclick32);
threethree.addEventListener('click', handclick33);

function handclick11(e) {
    if(!vis[0][0]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[0][0] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[0][0] = 1;
        }
        vis[0][0] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick12(e) {
    if(!vis[0][1]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[0][1] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[0][1] = 1;
        }
        vis[0][1] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick13(e) {
    if(!vis[0][2]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[0][2] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[0][2] = 1;
        }
        vis[0][2] = 1; 
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}
// ujyghjvbhdfedw    
function handclick21(e) {
    if(!vis[1][0]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[1][0] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[1][0] = 1;
        }
        vis[1][0] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick22(e) {
    if(!vis[1][1]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[1][1] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[1][1] = 1;
        }
        vis[1][1] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick23(e) {
    if(!vis[1][2]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[1][2] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[1][2] = 1;
        } 
        vis[1][2] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick31(e) {
    if(!vis[2][0]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[2][0] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[2][0] = 1;
        }
        vis[2][0] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick32(e) {
    if(!vis[2][1]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[2][1] = 1;
        }
        else {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[2][1] = 1;
        }
        vis[2][1] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        }else if(cnt == 9) {
            draw();
        }
    }

}

function handclick33(e) { 
    if(!vis[2][2]) {
        cnt ++;
        if(turn == 1) {
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'aquamarine';
            turn = 2;
            X[2][2] = 1;
        }
        else {
            e.target.textContent = 'O';
            // threethree.classList.add('changecolor');
            e.target.style.backgroundColor = 'aquamarine';
            turn = 1;
            O[2][2] = 1;
        }
        vis[2][2] = 1;
        console.log
        res = CheckWinner1();

        if(res == 1) {
            // X won
            console.log('X won');
            winnerX();
        }
        else if(res == 2) {
            // O won
            console.log(' O won');
            winnerO();
        } else if(cnt == 9) {
            draw();
        }
    }

}

// console.log(CheckWinner1());