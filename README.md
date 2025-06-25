# Langton’s Ant 시뮬레이션 / Langton’s Ant Simulation

---

## 🇰🇷 한국어 설명

### 소개
Langton’s Ant는 단순한 규칙(흰 칸에서는 우회전, 검은 칸에서는 좌회전)을 따라 움직이면서  
놀라운 복잡한 궤적을 만들어 내는 셀룰러 오토마타입니다.  
이 시뮬레이션은 다음 기능을 포함합니다:

- **Play/Pause** 버튼  
- **실행 속도** 자동 가속 (1× → 2× → … → 최대 100×)  
- **하이웨이 패턴** 감지 시 자동 정지  

### 사용법
1. `index.html` 파일을 브라우저로 열거나, GitHub Pages를 통해 배포하세요.  
2. 화면 하단의 **Play** 버튼을 누르면 개미가 움직이기 시작합니다.  
3. **Play**가 **Pause**로 바뀌면, 다시 누르면 일시정지됩니다.  
4. 시뮬레이션 단계가 1,000 스텝을 넘을 때마다 속도가 2배씩 빨라집니다.  
5. 개미가 동일 방향으로 연속 200스텝 이상 움직이면 “하이웨이 패턴”으로 간주하고 자동으로 멈춥니다.

### 파일 설명
- `index.html` – 시뮬레이터 실행용 HTML  
- `style.css` – 기본 레이아웃 및 스타일  
- `langtons-ant.js` – 시뮬레이션 로직 구현  
- `README.md` – 이 설명서

### 라이선스
MIT License

---

## 🇺🇸 English Documentation

### Overview  
Langton’s Ant is a cellular automaton in which a “ant” moves on a grid,  
turning right on white cells and left on black cells, producing surprisingly complex paths.  
This web-based simulation features:

- **Play/Pause** control  
- **Automatic speed-up** (1× → 2× → … → up to 100×)  
- **Highway detection**: stops automatically when a straight “highway” emerges  

### How to Use  
1. Open `index.html` in your browser or deploy via GitHub Pages.  
2. Click **Play** to start the simulation; the button will toggle to **Pause**.  
3. Each time the ant takes 1,000 steps, the speed doubles.  
4. If the ant travels in the same direction for 200 consecutive steps, the sim detects a “highway” and stops automatically.  

### File Structure
- `index.html` – Entry point with canvas and controls  
- `style.css` – Layout and styling  
- `langtons-ant.js` – Core simulation code  
- `README.md` – This documentation

### License  
MIT License
