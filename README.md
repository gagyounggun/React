# 202330101 가경건

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

주소 : https://ko.react.dev/




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
|---|---|---|
| 역할 | 프로젝트의 기본 정보와 의존성을 정의 | 설치된 패키지의 정확한 버전 정보 저장 |
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