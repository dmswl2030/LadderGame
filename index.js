// process.argv를 이용하여 사다리 게임에 참여할 인원을 입력받는다.
// 예: node index.js 3 로 실행하면 3을 읽도록 함.
// 만약 사다리 인원이 2명 미만이거나 8명을 초과할 경우 프로그램을 종료한다.

if(process.argv.length <= 2) {
  console.log("인원을 입력해 주세요")
  return;
}
const playerNum = parseInt(process.argv[2]);
if(playerNum < 2 || playerNum > 8) {
  console.log("인원은 2명이상 8명 이하여야 한다.");
  return;
}

// 사다리 높이는 4개라고 가정한다.
// 참여 인원과 높이를 매개변수로 받아서 사다리를 출력하는 printLadder() 함수를 구현한다.
// 가로 개수는 참여 인원 - 1, 세로 개수는 사다리 높이와 동일한 Int 타입 2차원 배열을 만들고
// Math.random으로 랜덤하게 사다리 발판이 있으면 -를 출력하고, 없으면 공백을 출력한다.
// 발판 사이에는 |로 표시한다.
// 실행해서 콘솔에 출력되는지 확인한다.

const ladderHeigth = 4;

function printLadder(playerNum, ladderHeigth) {
  for(let y = 0; y < ladderHeigth; y += 1) {
    //사다리가  "| |-|"  이게 한줄이라고 했을 때 처음엔 아무것도 없음
    let row = '';
    row += '|' //왼쪽에 한줄 채움

    for(let x = 0; x < playerNum - 1; x += 1) { 
      //다리를 놓아주는 변수
      const shouldPutPipe = Math.random() > 0.5;

      if(shouldPutPipe) {
        row += '-';
      } else {
        row += ' ';
      }
      row += '|' //오른쪽에 한줄 채움 
    }
    console.log(row);
  }
}
printLadder(playerNum, ladderHeigth);
