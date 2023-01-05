let fieldOfPlay = [
  "X", "X", "O", "O", "B", "O", "C", "X", "O",
];

function displayBoard(fieldOfPlay) {
  let fop = fieldOfPlay;
  const BOARD_OUROBOROS = ("");
  const BOARD_VERT = ('     |     |');
  const BOARD_HOR = ('-----+-----+-----');
  let topRow = `  ${fop[0]}  |  ${fop[1]}  |   ${fop[2]}  `;
  let midRow = `  ${fop[3]}  |  ${fop[4]}  |   ${fop[5]}  `;
  let botRow = `  ${fop[6]}  |  ${fop[7]}  |   ${fop[8]}  `;

  let board = [
    BOARD_OUROBOROS,
    BOARD_VERT, topRow, BOARD_VERT,
    BOARD_HOR,
    BOARD_VERT, midRow, BOARD_VERT,
    BOARD_HOR,
    BOARD_VERT, botRow, BOARD_VERT,
    BOARD_OUROBOROS
  ];

  board.forEach(element => console.log(element));
}

function initFieldOfPlay(fieldOfPlay) {
  fieldOfPlay.fill(" ", 0, 8);
}








displayBoard(fieldOfPlay);
initFieldOfPlay(fieldOfPlay);
displayBoard(fieldOfPlay);