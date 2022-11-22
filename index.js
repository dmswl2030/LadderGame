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