// Global varialbe to determine the current turn X or O
let turn = 1;       // 1 for X

let X = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let O = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const showTurn = document.getElementById('turn');

// 1 means X won, 2 means O won, 0 means noone yet.
function CheckWinner1 (playerCells) {
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



function init() {
    if(turn == 1)
        showTurn.textContent = "Turn is for X";
    else 
        showTurn.textContent = "Turn is for O"
}
