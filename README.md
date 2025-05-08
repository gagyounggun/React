# 202330101 가경건
### 0508 
- React를 사용하게 되면 우리가 고려하고 있는 디자인이나 많은 앱들에 대한 생각을 바꿀 수 있습니다.
- React는 사용자 인터페이스를 빌드할 때, 먼저 이를 컴포넌트라는 조각으로 나눕니다.
- 그리고 각 컴포넌트의 마찬가지 시각적 상태들을 정의합니다.
- 마지막으로 컴포넌트들을 연결하여 데이터가 그 사이를 흘러가게 합니다.
- 이 자습서에서는 React 경험할 수 있는 작은 티켓을 만드는 과정을 체계적으로 안내해 드리겠습니다.

* React는 component기반으로 개발 합니다. 이 번 장을 통해서 component의 조각 들이 어떻게 App으로 완성되는지 다시 한번 확인해 보세요.

## Step 1: UI 컴포넌트 계층으로 쪼개기
- 모든 컴포넌트와 하위 컴포넌트 주변에 박스를 그리고, 이름을 붙이면서 시작
- 디자이너와 함께 일한다면, 이름을 정해서 여쭈어보자

- 디자인을 컴포넌트롤 나누는 방법에 대한 관점이 달라질 수 있다.
- programming:  함수나 객체를 만드는 방식이나 같은 방법
단일책임을 원칙으로 반영하고자 한다면 컴포넌트는 이상적으로는 한 번에 한 가지 일만!
- 컴포넌트가 커진다면, 작은 컴포넌트로 쪼개져야함
- css: 클래스 선택자를 무엇으로 만들지 생각해보자
- Design : 디자인 계층을 어떤식으로 구성할 지 생각

1. FilterableProductTable(회색) : 예시 전체를 포괄합니다.
2. SearchBar(파란색) : 사용자의 입력을 받습니다.
3. ProductTable(라벤더색) : 데이터 리스트를 보여주고, 사용자의 입력을 기반으롤 필터링함.
4. ProductCategoryRow(초록색) : 각 카테고리의 헤더를 보여줌
5. ProductRow(노란색) : 각 제품의 해당하는 행을 보여줌

디자인을 보고 컴포넌트를 나누어야 함. 로직이 하나의 로직으로 나누는 거. 하나의 로직이 하나의 컴포넌트로


## Step 2: React로 정적인 버전 구현하기 
- 먼저 정적인 버전을 만들고 상호작용 기능을 추가하는 거
- 정적 버전은 타이핑은 필요! 생각은 적음.
- 상호작용 기능을 추가하는 것은 많은 생각이 필요하지만, 타이핑은 그리 많이 필요하지 않음

- 데이터 모델을 렌터링하는 앱의 정적인 버전을 만들기 위해서는 
- 다른 컴포넌트를 재사용하고, props를 이용하고 데이터를 넘겨주는 컴포넌트를 구현

- 정적 버전을 만들 때는 state를 쓰지말자
- 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용합시다
- 정적 버전을 만들고 있기 때문에 지금은 필요하지 않습니다.

-    1. FilterableProductTable 부터 하양식(top-down)으로 만드는 방법
- ProductRow 부터 상향식(bottom-up)으로 만들 수도 있음
- 보통 하향식을 만드는게 쉽지만, 프로젝트가 커지면 상향식으로 만들고 개발하는 게 더 쉬움

- 공식문서의 첫 번째 코드는 state를 사용하기 전 완성된 코드입니다. 천천히 component 하나씩 완성해 봅시다.

## Step 3: 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기
- UI 상호작용(interactive)하게 만들려면, 사용자가 기반 데이터 모델을 변경할 수 있게
- Reate는 state를 통해 기반 뎅이터 모델을 변경할 수 있음

- state는! 앱기 기억해야 하는 변경할 수 있는 데이터의 최소 집합
- state는! 구조화 하는 데 가장 중요한 원칙은 중복배제원칙 (Don't Repeat Yourself)
- state를 가장 최소한의 state를 파악하고 나머지는 모든 것들은 필요헤 따라 실시간 계산
- 상품 아이템의 개수를 노출하고 싶다면, 따로 state 값으로 가지는 게 아니라 단순하게 배열의 길이만 쓰면 됨

다음 데이터를 가지고 있음!
1. 제품의 원본 목록
2. 사용자가 입력한 검색어
3. 체크박스의 값
4. 필터링된 제품

- 이중에 어떤것이 state가 되어야 할까?
1. 시간이 지나도 변하지 않나요? :  state X
2. 부모로 부터 props를 통해 전달 됨? :  state X
3. 컴포넌트 안의 다른 state나 prop를 가지고 계산이 가능한가요? :  state X
- 이 외에 남는 건 state다






### 0418 (보강) Tic Tac Toe

## 한 번 더 state 끌어올리기
6. 다음 플레이어와 플레이 기록을 추적하기 위해 Game 컴포넌트에 몇 개의 state를 추가

```
      export default function Game() {
            const [xIsNext, setXIsNext] = useState(true);
            const [history, sethistory] = useState(Array(9).fill(null));
      }
```
7. square을 연동하려면, history에서 마지막 squares의 배열을 읽어야함.

8. 계산할 수 있는 충분한 정보가 있으므로 useState는 필요X
```
      export default function Game() {
            const [xIsNext, setXIsNext] = useState(true);
            const [history, sethistory] = useState(Array(9).fill(null));
            const currentSquares = history[history.lengh - 1];
      }
```

9. Game 컴포넌트 안의 Board 컴포넌트가 게임을 업데이트할 때 호출할 handlePlay 함께

10. 

11. Board 컴포넌트가 xIsNext, squares, onPlay 함수를 props로 받을 수 있도록 변경
 - 업데이트된 squares를 배열로 호출할 수 있는 새로운 함수

12. Board 함수에서 useState를 호출하는 처음 두줄을 제거

13. setSquares 및 setXIsNext 호출은 새로운 onPlay 함수에 대한 단일 호출로 대체 

- Board 컴포넌트는 Game컴포넌트가 전달한 props에 의해 완전히 제어
- Game 컴포넌트에ㅔ서 handlePlay함수를 구현
- handlePlay 함수는 더이상 호출할수 있는 setSquares 함수가 없다
- 대신하기위해 history state 변수를 사용함
- 새 히스토리 항목으로 추가하여 history 업데이트해야하고, Board에서 했던 것 처럼 xIsNext 값을 반전

- [...history, nextSquares] 는 history에 있는 모든 항목을 포함하는 새 배열을 만들고 후에 nextSquares를 만든다.

- ...history 전개 구문을 사용하면 "history 의 모든 항목 열거"로 읽을 수 있다.



## 과거 움직임 보여주기
- 일반 JavaScript 객체이므로 애플리케이션에서 전달
- JavaScript에서 한 배열을ㄹ 다른 배열로 변환하려면 배열 map 메서드를 사용하면 됩니다.
```
      [1, 2, 3].map((x) => x * 2) // [2, 4, 6]
```
1. history 배열을 화면에 나타내는 React 엘리먼트로 변환한다.
2. 과거의 플레이로 이동하는 버튼을 만들자
3. 이 것을 구현하기 위해 Game 컴포넌트에서 history를 map을 이용해보자

```
      const moves = history.map((squares, move) => { })
```

1. history.map은 history는 모든 플레이를 저장하는 배열, history에 map 함수를 적용한다는 의미 
2. history 각각의 요소 index를 순회하면서 squares 추출합니다.
3. 각 요소는 { }안의 실행문을 실행하면서 버튼을 생성
4. 생성된 버튼은 moves 객체(배열)에 다시 저장
5. move는 최종 rendering에 사용

### map함수의 사용
```
      const moves = history.map((squares, move) => { })
```
- 원본 배열 (history) : map이 호출된 원본 배열.
- 원본 배열 인덱스 (move): 현재 순환 중인 원본 배열 요소의 인덱스.
- 요소 값 (squares) : 현재 순회 중인 요소 배열의 값.

6. 틱택토 게임 history의 각 플레이에 대한 버튼, list 를 생성

## Key 선택하기

- 리스트를 렌더링 할때 React는 렌더링 된 각 리스트 항목에 대한 몇 가지 정보를 저장
- 업데이트할 때 React는 무엇이 변경되었는지 확인
- 항복은 추가, 제거, 재정렬 또는 업데이트가 될 수 ㅣㅇㅆ음
```
// 예를 들어
      
      <li> Alexa:</li>
      <li> Ben </li>

      ---------------------

      <li> Ben </>
      <li> Groia</li>
      <li> Alexa </li>
```
- 컴퓨터라 이것을 구분하여 이해하지 못함...

- 만약 데이터베이스에서 데이터를 불러와서 사용한다면 , 데이터베이스 ID를 key로 사용할 수 있음
```
      <li key={user.id}>
        {user.name}: {user.taskCount} tasks left
      </li>
```
- 각 리스트 항목의 key를 가져와서 이전 리스트의 항목에서 일치하는 key를 탐색
- 이전에는 존재하지 않았던 key가 있으면 React는 컴포넌트를 생성
- key를 가지고 있지 않다면 React는 그 key를 가진 컴포넌트를 제거
- 두 key가 일치한다면 컴포넌트는 이동
- 각 React가 각 컴포넌트를 구별 하도록 React가 해당 컴포넌트의 state를 유지
- key가 변하면 컴포넌트는 제거되고 새로운 state 와 함께 다시 생성

- key는 특별하게 미리 지정된 프로퍼티
- 반환되는 엘리먼트에 직접 key를 저장
- 자동으로 key를 사용해 업데이트 할 컴포넌트를 결정
- 적절한 key가 없는 경우 데이터 -> 재구성
- key가 지정되지 않은 경우, React는 경고 배열의 인덱스를 기본 key로 사용
- 배열의 인덱스를 기본 key로 사용하면 항목의 순서를 바꾸거나 항목을 추가/제거할 때 문제가 발생
- 명시적으로 key={i}를 전달하면 경고는 사라지지만, 추천 X 

- 배열의 인덱스를 key로 하면 안좋음, 바뀔 수 있으니까, 명시적으로 지정해라 차라리, hash값을 지정하는 게 젤 현명

- key는 전역적으로 고유할 필요는 없으며, 컴포넌트와 해당 컴포넌트의 형제 컴포넌트 사이에서만 고유하면 됩니다.



## 시간 여행 구현하기
- 과거의 각 플레이에는 해당 플레이의 고유한 일련번호인 ID가 있습니다.
- 중간에 순서를 바꾸거나 삭제하거나 삽입할 수 없기 때문에 플레이 인덱슬르 key로 사용하는 것이 안전

1. <li key ={move}>로 key를 추가할 수 있으며 다시 로드하면 React의 "key"에러가 사라질 것

```
       <li key ={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
       </li>
```

## 시간 여행 구현하기2
 - jumpTo 사용자가 현재 어떤 단계를 보고 있는지 추적할 수 있는 state가 하나 더 필요합니다.

 1. 이를 위해 초기값이 0인 currentMove 라는 새 state 변수를 만든다.

 2. Game 내부 jumpTo 함수를 수정해서, currentMove를 업데이트
 3. currentMove를 변경하는 숫자가 짝수면 xIsNext를 true로 설정
 - handlePlat 함수 내용중 두가지를 변경
 4. 새로운 플레이를 하는 경우 해당 시점까지의 히스토리만 유지 history(...전개구문) 하는 대신에 history.slice(0, currentMove + 1)의 모든 항목 뒤에 추가
 5. 이동할 때마다 최신 히스토리 항목을 가리키도록 currentMove를 업데이트
 ```
 function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
    setcurrentMove(nextHistory.length-1);
  }
 ```
 6. 현재 선택한 동작을 렌더링하도록 Game 컴포넌트를 수정 (history.length - 1) -> (currentMove)

  ```
 export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]); // 배열 안에 배열로 초기화
  const [currentMove, setcurrentMove] = useState(0);
  const currentSquares = history[currentMove];
 ```

## 최종정리
- xIsNext state 와 setXIsnext가 필요하지 않음

++ 
1. 현재 이동에 대해서만 버튼 대신 "당신은 #번째 순서에 있습니다." 를 표시
2. Board를 코딩대신 두개의 루프를 사용하여 사각형을 만들도고
3. 오름차순 내림차순으로 정렬할 수 있는 토글 버튼
4. 누군가가 승리한다면 원인이 된 세 개의 사각형을 강조표시







### 0417 (6주차) Tic Tac Toe


## state 끌어올리기
- i를 handleClick에 전달
- 부모 Board 컴포넌트는 자식 Square 컴포넌트가 올바르게 표시도리 수 있도록 props를 전달
- Square를 클릭하면 자식 Square,

1.
- button이 Square로부터 onClick prop으로 받은 함수가 실행
- Square컴포넌트는 -> Board에서 해당 함수를 onSquareClick props로 받음
- Board 컴포넌트는 -> JSX에서 해당함수를 직접정의
- 0을 인수로 handleClick을 호출

2. null에서 X로 업데이트

3. Squares state가 업데이트 되어 Board와 그 모든 자식이 다시 렌더링 됨
-> Square 컴포넌트의 value prop이 null에서 X로 변경


- 이벤트를 나타내는 prop는 onSomething과 같은 이름 사용하고, 
- 이벤트를 처리하는 함수를 정의 할 때는 handleSomething 과 같은 이름


```
<div className="board-row">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0)} />

        //  화살표 함수 로 함수를 짧게 정의하는 방법, handleClick(0)가 화살표 함수 호출하고 
```

```
      function handleClick() {
            const nextSquares = squares.slice();
            nextSquares[0] = "X";
            setSquares(nextSquares);
      }

```

## 불변성이 왜 중요할까요
- slice()를 호출하여 squares 배열의 사본을 생성하는 방법에 주목하세요.
- 데이터를 변경하는 방법에는 2가지 가있다.
1. 첫 번째 방법은 데이터 값을 직접 변경하여 데이터를 변형하는 것
2. 두 번째 방법은 변경 사항이 있는 새 복사본으로 데이터를 대체하는 것
```
const squares = [null, null, null, null, null, null, null, null];
squares[0] = 'X';
// squares 배열을 직접 변경

```
```
const squares = [null, null, null, null, null, null, null, null];
const nextsquares = ['X', null, null, null, null, null, null, null, null];
// squares 배열을 복사 대체

```
 최종 결과는 같지만, 직접 변형하지 않음으로써 몇 가지 이점을 얻을 수 있다.
 1. 리렌더링 자체를 피할 수 있음. 
 2. 데이터의 변경 여부를 저렴한 비용으로 판단할 수 있음.


 ## 교대로 두기
 - O,X 번갈아 한 번씩 두기, X가 두었는지 아닌지 현재의 상태 X차례면 true, O차례면 false

 ```
 const [xIsNext, setXIsNext] = useState(true);
 const [squares, setSquares] = useState(Array(9).fill(null));

 function handleClick(i) {
      const nextSquares = squares.slice();
      if (xIsNext) {
            nextSquares[i] = "X";
      } else{
            nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
 }

 ```

## 승자 결정하기
- 게임의 승자가 결정되어 더 이상 차례를 만들 필요가 없을 때도 표시
- 9개의 사각형 배열에서 승자를 화가인하고 'X','O' 또는 null을 반환하는 calculateWinner를 추가

- calculateWinner를 추가 해야함

- calculateWinner를 앞이든 뒤에는 정의해 주어야함.

1. 먼저 승리할 수 있는 경우의 자리를 2차원 배열로 선언
2. 선언된 배열 line과 squares를 비교하기 위한 for문 작성
3. 구조 분해 할당 
```
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
return null;
}
  ```


## 구조 분해 할당
- 배열이나 객체의 구조를 해체하여 내부 값을 개별 변수에 쉽게 할당하는 방법
- 이를 통해 코드의 간결성과 가독성을 높일 수 있다

``` 
const paires = [
 [1,2], [3,4], [5,6]
];

pairs.map(([x, y]) => {
      console.log(`x: ${x}, y: ${y}`);
});
// 배열의 경우
```

``` 
const users = [
  {id: 1, name : "Alice" },
  {id: 2, name : "Bob" },
];

users.map(({id, name}) => {
      console.log(`${id} : ${name}`);
});
// 객체의 경우
```

## 승자 결정하기
4. calculateWinner(squares)를 호출하여 플레이어가 이겼는지 확인
5. 사용자가 이미 X 또는 O가 있는 사각형을 클릭했는지 확인 하는 것과 동시에 수행할 수 있음.
6. 두 경우 모두 함수 즉시 종료

``` 
 function handleClick(i) {
      if ( squares[i] || calculateWinner(squares)) {
            return;
      }
      const nextSquares =squares.slice();
 }
 ```


## 승자 결정하기 2
7. 게임이 끝났을 때 Winner: X 또는 Winner:O 라고 표시.
8. Board 컴포넌트에 status 구역을 추가
9. 게임이 끝나면 statues는 승자 표시 하고, 진행중이라면 다음 플레이어 표시
```
      const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }


```

## 시간여행 추가하기
- "시간을 거슬러 올라가" 기능

[플레이 히스토리 저장하기]
-  과거 상태들을 저장하고 탐색하는 것



## 한 번 더 state 끌어올리기
1. export default가 있는 Game 컴포넌트 추가
2. Board 컴포넌트를 랜더링
3. export default 컴포넌트는 하나만 존재
4. index.js 파일 Board 컴포넌트 대신 Game 컴포넌트를 최상위 컴포넌트로 사용
5. 보드에 추가할 게임 정보를 위한 공간을 확보
- -주의- 
 - 최상위 컴포넌트와 파일이름은 일치, 최상위에 선언.
 ```
 function Board() {
  // ...
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```










### 0410 (5주차) Tic Tac Toe

## Tic Tac Toe props를 통해 데이터 전달하기 
- React의 component architecture를 사용해서 재사용할 수 있는 component를 만듬
- component를 만드는 이유는 재사용성을 높이기 위해서,
- Board component를 만들고, Square component의 내용을 복사함
- Square component의 button을 하나만 남기고 모두 삭제
- 


``` 
      function foo(a,b) {
            return a+b;
      } 
      bar = foo(100, 32)
```


## Tic Tac Toe 사용자와 상호작용하는 컴포넌트 만들기
- 클릭된 것을 기억하고 X로 채워지게 하기
- 기억하기 위해 state를 사용
- React는 상태 기억을 위해 useState라는 Hook을 제공함
- state에 저장하고 Square가 클릭하면 값이 변경되도록

1. useState를 import
2. Square 컴포넌트에서 value prop을 제거 대신 useState를 사용
3. Square 컴포넌트의 시작 부분에 useState를 호출하고, value라는 이름의 state변수를 반환

```
      import { useStatee } from 'react';

      function Square() {
            const [value, setValue] - useState(null);
      }

      function handleClick() {
            //.......
      }
```

- value는 값을 저장하는 변수, setValue는 값을 변경하는 함수
- useState null은 이 state 변수의 초기값

## Tic Tac Toe_ React Developer Tools

### 1. state 끌어올리기
- state를 기억하고 있고,
- Board가 각각의 Square에 state를 요청하는 것은 어렵고, 버그에 취약하기에 >
- state를 각 Square가 아닌 부모 컴포넌트인 Bord에 저장
- 여러 자식 컴포넌트에서 데이터를 수집, 서로 통신, 부모 컴포넌트에서 공유 state를 선언
- props를 통해 해당 state를 자식 컴포넌트에 전달
- 자식 컴포넌트 서로동기화, 부모 컴포넌트와도 동기화

- React 컴포넌트를 리팩토링할 때 부모 컴포넌트로 state를 끌어올리는 것
1. 9개의 null의 배열을 기본값으로 state 변수 squares를 선언
```
      export default function Board() {
            const [squares, setSquarse] = useState(Array(9).fill(null));
            return (
               //...
            );
      }
```
- Array(9).fill(null)은 9개의 앨리먼트로 배역을 생성하고, 각 앨리먼트를 null로 설정-
- 그리고 state 변수 squares와 함수 setSquares 선업
- 보드를 체우며 squares 배열은 이와 같은 모양
```
      ['0', null, 'X', 'X', 'X', 'O', 'O', null, null]
```

* component 분리 
Board component가 export default로 선언, component 분리



[ 남은 작업은 ... ]
- 이제 각 Square는 'X', 'O'
- Square 에서 컴포넌트가 클릭 될 때 호출할 함수 부터 -> onSquareClick으로 호출
```
      function Square({ value, onSquareClick })  {
  return (
    <div>
      <button className="square" onClick={{onSquareClick}}>
        {value}
      </button>
    </div>
    )
}
```





### 2. 불변성이 왜 중요할까요
### 3. 순서 정하기
### 4. 승자 결정하기










### 0403 (4주차) Tic Tac Toe

components, props, state에 대해 학습
3개의 말을 한줄로 완성하면 승리

- App component는 default export로 선업
-

## 보드만들기
Square component에는 사각형이 하나 뿐이지만 게임을 진행하려면 9개 필요
fragment Tag나 division Tag를 사용해 wrpping 해 줌
block 형태로





### 0403 (4주차)
## 9. 화면 업데이트하기
component가 특정 정보를 "기억"해 두었다가 표시, 예) 버튼 클릭한 횟수 -> 하려면 component에 state를 추가
- React에서 useState를 import합니다.
- useState는 react 파일 안에 Named Exports 선언되어 있는 여러 개 component 중 하나
* 이제 component 내부에 state 변수를 선언 할 수 있음
```
function MyButton() {
      const [count, setCount] = useState(0);
      // ...
}
```
- useState로 부터 현재의 state를 저장할 수 있는 변수인 count와 이를 업데이트할 수 있는 함수인 setCount를 얻을 수 있습니다.
- 이름은 = [something, setSomething]으로 작성하는 것이 일반적
- 변수 이름과 이름 앞에 set를 붙인 업데이트 함수가 관용적
```
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

App.js에 CountState compont를 호출
2개 이상의 버튼을 만들어야함

## Hook 사용하기
 - use 로 시작하는 함수
 - useState는 React에서 제공하는 내장 Hook
 - 기존의 것을 조립하여 기존의 Hook를 작성
 - Hook은 다른 함수 보다 더 제한적
 - component 또는 다른 Hook의 상단에서만 Hook을 호출할 수 있음
 
 (Rules of Hooks)
 렌더링 및 상태 관리 메커니즘과 밀접하게 연결되어 있음

```
// 잘못된 예제
function MyComponent() {
      if (someCondition) {
            useState(0);
      }
}

// 올바른 예제
function MyComponent() {
      const [count, setCount] = useState(0);
}
```
React 함수형 component 또는 사용자  Hook 내부에서만 사용
 React의 동작을 예측 가능하고, 안정성을 높이기 위해,
 
 
 
 1. rendering 순서를 보장하기 위해
 - 조건문이나 반복문에서 Hooks를 사용하면 매 rendering 마다 Hook의 호출 순서다 달라질 수 도 있기에

 2. 불필요한 사이드 이펙트 방지
 - component가 여러 번 rendering될 때마다 동일한 순서로 Hook이 실행되어야 React가 의도한 동작을 수행할 수 있다.





## 11. component 간 데이터 공유
꼭 필요한 경우를 제외하고는 별도의 component를 만들자
- commit을 해두면 checkout을 통해 확인이 가능함
- 왜 번수는 count 하나인데 버튼 3개의 데이터가 모두 다른 state를 갖는 것일까?
- CountState component는 독립적인 count가 있는 것 처럼 동작했고, 클릭한 버튼의 count만 변경
- component 객체가 독립적으로 동작하기에 component는 하나지마, count 변수도 객체로 여러개 복사된 것이나 마찬가지


* 동일한 count를 표시하고 함께 업데이트하려면, state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 component 안으로 이동


- parent component(main component) 인 App에서 전달한 props을 읽을 수 있도록








### 0327 (3주차)
- component는 고유한 조릭과 모양을 가진 UI 일부
- component는 버튼 처럼 작을 수도, 전체 페이지처럼 클 수도 있다.
- component는 마크업 번환(return)하는 JavaScript 함수

### component의 생성 맟 nesting(중첩)
1. 어떤 디렉토리에 파일을 만들지       2. 파일 이름      3. 함수는 어떻게 구성할지

## export default와 export의 차이
* Named Exports (export)
      - 하나의 파일 안에 여러개의 component가 있을 때
 
* Default Exports (export default)
      - 하나의 파일 안에 하나의 component가 내보낼 때
      - 사용하는 쪽에서는 어떤 이름을 사용해도 상관 없음.

작성한 코드의 마크업 문법을 JSX라고 함
편의성을 위해 JSX를 사용하고, JSX는 HTML보다 더욱 엄격한 문법을 적용
여러 개의 component를 JSX 태그로 반환할 수 있음. <div>...</div> 또는 <>...</>을 해줘야함

className 으로 CSS 클래스를 지정함. React는 CSS파일을 추가하는 방법을 규정하지 않습니다.
<link> 태그 추가는 추천 안함.



Escape Back
return {
      <h1> {user.name}</h1>
}

return( <img className="avatar" src>)


### key props
- 리스트를 렌더링하기 위해 for 문 및 map() 함수
- <li>에 key 속성(attribute)
- 각 항목에 대해 고유하게 식별하는 문자열 또는 숫자를 전달
- 항목을 삽입, 삭제 또는 재정렬할 때, 어떤 일이 일어났는지 알기 위해 key를 사용









### 0320 (2주차)



## React 개요.
component 단위로 개발하여 레고를 조립하듯 앱을 완성합니다.
component는 작은 기능을 실행할 수 있는 하나의 모듈입니다.
* component의 조립 과정에만 집중해주세요

Thumbnail, LikeButton, 그리고 Video 등 react component를 생성하고, 이 component를 결합해 화면을 구성함

React component는 기본적으로 JavaScript함수
- 조건에 따라 화면 변화 -> if문
- 목록을 표시 하고 싶다 -> map()함수

### full-stack App 개발을 도와주는 React Framework

React의 component를 조합할 수는 있지만, 라우팅 및 데이터 가져오기 방법등을 규정하지는 않습니다.
 전체 앱을 빌드 하려면 Next.js 또는 Remix 와 같은 full-stack React Framework을 사용
하나의 아키텍처 소프트웨어 사이에서 유기적인 관계를 표현하고, 소프트웨어의 업그래이드를 통제하는 지침

Framework을 사용하면 서비에서 실행되거나 빌드중에서 비동기 component에서 데이터를 가져올 수 있다.

* full-stack App 개발하는 것이라면 Framework을 사용하자!

같은 기술을 사용하여, 웹 앰과 네이티브 앱을 모두 구축가능

모든 플랫폼에 잘 어울리는 인터페이스

-웹의 본질의 충실하기-
빠르게 로드되길 기대. 리엑트는 서버에서 데이터를 가져오는 동안 HTML을 먼저 스트리밍, JavaScript 코드가 load 되기 전에
컨텐츠를 점진적으로 채울 수 있다.
- 클라이언트 측에서 API를 사용해, 렌더링 도중에 UI를 반응하도록 할 수 있다

[진정한 네이티브 UX를 실현]
자신의 플랫폼과 같은 모양과 느낌, React Native 와 Expo 사용하면  Android, ios 등을 위한 앱을 React로 빌드
UI가 네이티브이기 때문에 그렇게 느껴짐.    
- Web View가 아니라, Android 및 iOs View를 사용하기 때문     

1. 웹 개발자도 네이티브 개발자도 될 수 있다.   
2. 사용자경험의 희생 없이 다양한 플랫폼에 앱을 출시.
3. 플랫폼 간의 장벽이 없음, 전체기능을 협업을 통해 개발할 수 있는 팀이 가능.

모든 React commit은 10억 명 이상의 사용자에 의해 여러 환경에서 테스트
모든 마이크레이션 전량의 검증을 지원함.


주소 : https://ko.react.dev/



----------------------

node modules/

public/
정적 코드

src/
- React 프로젝트의 주요 코드가 위치하는 디렉토리
- 
src/App.js 
- 
src/App.css
- App.js에 적용되는 스타일을 정의
src/index.js
- React 앱의 집입점
- App.js를 렌더링
src/index.css
- 전역 스타일을 정의

#### package.json
- 패키지의 의존성을 관리하는 파일.
- 의존성(Dependeny)란, 하나의 소프트웨어가 다른 소프트웨어에 의존하여 동작하는 관계
- 사용된 각종 패키지 등의 버전을 동일하게 유지

- 협업할 때는 같은 패키지들을 설치해서 동일한 개발환경을 구성
- node 패키지는 각 팀원들이 설치

#### [의존성을 관리하는 이유]
손쉬운 설치 및 업데이트

[ package.json과 package-look.json 차이 ]     
| 역할 | 프로젝트의 기본 정보와 의존성을 정의 | 설치된 패키지의 정확한 버전 정보 저장 |
|---|---|---|
| 내용 | 패키지 이름, 버전, 스크립트, 의존성 | 의존성 트리 및 패키지의 정확한 버전이 기록 |
| 업데이트 | 직접 수정 가능 | 직접 수정하지 않으며, npm install 시 자동 업데이트 |
| 버전 관리 | 일반적으로 ^ 또는 ~로 버전 범위를 지정 | 특정 버전이 고정되어 일관된 환경유지가능 |
| Git 관리 | 보통 Git에 포함됨 | 포함하는 것이 권장 되지만, node modules/처럼 무시할 수 도 있음 |


#### [ package.json을 유지해야 하는 이유 ]

#### [ node module의 재설치하는 경우 ]
- 팀 작업 하면서 clone 했을 경우
- 개인이 자신의 프로젝트를 다른 PC등에서 clone을 받아 개발하는 경우
- 프로젝트에 문제가 생겨서 다시설치하는 경우
clone 받은 프로젝트의 경우
- package.json과 package-lock.json을 참고하여 다시 철치

#### [ node module의 재설치]
1. node_modules 폴더와 package-lock.json 파일 삭제
      ``` $ rm -rf node_modules package-lock.json ```

      [package-lock.json 삭제하는 이유]
      - package-lock.json이 손상되었거나, 잘못된 의존성이 있을 때
      예) 의존성 충돌, 






------------------------------
### 0313 (1주차)
git hub연동 하는 법
JavaScript로 풀스택 개발이 가능하다.

#### 장점

- 컴포넌트 기반: 재사용 가능하여 유지보수 용이
- 가상 DOM: 성능 최적화
- 단방향 데이터 바인딩: 디버깅 용이
- 풍부한 생태계: 다양한 라이브러리 지원
- JSX 문법: 직관적인 UI 구성
- 상태 관리 용이: Redux, Recoil 등 지원

#### 단점

- 러닝 커브: 초보자에게 어려울 수 있음
- 빈번한 업데이트: 지속적인 학습 필요
- SEO 문제: CSR 방식으로 인덱싱 어려움 (SSR 필요)
- 상태 관리 복잡성: 대규모 앱에서는 추가 라이브러리 필요
- 번들 크기 문제: 최적화 필요