// 캔버스 & 컨트롤 요소
const canvas = document.getElementById('antCanvas');
const ctx = canvas.getContext('2d');
const playBtn = document.getElementById('playPause');
const speedDisplay = document.getElementById('speedDisplay');

// 그리드 설정
const CELL = 5;
const COLS = canvas.width / CELL;
const ROWS = canvas.height / CELL;
const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

// 개미 초기 위치·방향
let x = Math.floor(COLS / 2), y = Math.floor(ROWS / 2);
let dir = 0; // 0=Up,1=Right,2=Down,3=Left

// 실행 상태 변수
let running = false;
let stepCount = 0;
let speed = 1;
let intervalId = null;

// 하이웨이 패턴 감지
const HIGHWAY_THRESHOLD = 200;
let sameDirCount = 0;
let lastDir = dir;

// 칸 그리기
function drawCell(r, c) {
  ctx.fillStyle = grid[r][c] ? '#000' : '#fff';
  ctx.fillRect(c * CELL, r * CELL, CELL, CELL);
}

// 한 스텝 실행
function step() {
  // 1) 현재 칸 색 뒤집기
  grid[y][x] ^= 1;
  drawCell(y, x);

  // 2) 방향 전환 (흑: 오른쪽, 백: 왼쪽)
  dir = (dir + (grid[y][x] ? 1 : 3)) % 4;

  // 3) 하이웨이 감지
  if (dir === lastDir) {
    sameDirCount++;
  } else {
    sameDirCount = 0;
    lastDir = dir;
  }
  if (sameDirCount >= HIGHWAY_THRESHOLD) {
    stopSimulation();
    return;
  }

  // 4) 전진
  if (dir === 0)       y = (y - 1 + ROWS) % ROWS;
  else if (dir === 1)  x = (x + 1) % COLS;
  else if (dir === 2)  y = (y + 1) % ROWS;
  else /* dir===3 */   x = (x - 1 + COLS) % COLS;

  stepCount++;

  // 5) 가속 로직: 1,000스텝마다 속도 ×2 (최대 100×)
  if (stepCount % 1000 === 0 && speed < 100) {
    speed *= 2;
    updateInterval();
  }
}

// setInterval 재설정
function updateInterval() {
  clearInterval(intervalId);
  // 속도 ×10 기준: 1000ms / (speed×10)
  const delay = 1000 / (speed * 10);
  intervalId = setInterval(step, delay);
  speedDisplay.textContent = speed + '×';
}

// 시작·정지 토글
function startSimulation() {
  if (!running) {
    running = true;
    playBtn.textContent = 'Pause';
    updateInterval();
  }
}
function stopSimulation() {
  running = false;
  playBtn.textContent = 'Play';
  clearInterval(intervalId);
  console.log('🛣️ 하이웨이 패턴 감지 — 시뮬레이션 종료');
}

// 버튼 이벤트
playBtn.addEventListener('click', () => {
  running ? stopSimulation() : startSimulation();
});

// 초기 캔버스 렌더
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    drawCell(r, c);
  }
}
