# Components
---
### Component 란?
    UI를구성하는 자생적, 독립적 엔티티
    Code, structure, API 로 이루어짐

### Props 와 state
  - Props
      - component는 props 을 받아 JSX 코드를 넘겨줌
      - 부모 component로부터 전달받으며 자식 component는 전달받은 props를 수정할수 없음. **Read only!**
  - State
      - 현재 컴포넌트에서만 적용
      - 필요할때마다 업데이트 가능

### Class components VS Functional Components
  - Functional Components
      - 걍 javascript 함수
  - Class components
      - 더많은 feature 제공
      - 주로 State 때문에 많이 씀

### Stateful components VS stateless components
  - Stateful components
      - 늘 class components
      - 생성자에서 초기화되는 state가 있음
      - setState 으로 state 업데이트가능
          - 비동기
          - setState가 여러번 호출될 경우엔 prevState 사용해서 이전 state 참조
  - Stateless components
      - state를 사용하지 않음
      - Lifecycle…..?
      - <mark>TODO: 그래서 왜 stateless 로 많이 쓰는지...?</mark>

### Container components VS presentational components
  - Presentational components
      - 뷰와 관련있음
      - 재사용가능
      - 동적레이어와 분리되어 있어야함
      - props를 통해 데이터와 callback을 받음
      - state가 필요할시 실 데이터가 아닌 UI state 관여해야함
      - Redux store와 상호작용하거나 API 호출 X
  - Container components
      - 동작과 관련한 부분을 다룸
      - Presentational components 에게 props를 이용해 어떻게 렌더링되어야 하는지 알려줌
      - DOM 마크업, 스타일 포함 X
      - API 호출하거나 components의 state로 결과값을 저장하는 등,,
