# 202330101 가경건


## 0403 (4주차) Tic Tac Toe

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