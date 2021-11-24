### React-Native 작동 방식
- JSX
    - XML처럼 보이는 Javascript의 구문 확장, JSX가 없어도 되지만, 가독성, 유지보수에 좋다.
    ``` 예시
        const App: () => Node = () => {
            return (
            <View style={styles.container}>
                <Text>Hello Dev Study</Text>
            </View>
            );
        };
    ```

- 스레드 처리
    - 네이티브 기기와 통신하는 모든 JavaScript의 기능은 별도 스레드로 처리됨
    - 네이티브 안쪽의 변화가 필요할 때는 일괄 처리해서 네이티브 쪽으로 전달
    - 이러한 작업은 React Native 이벤트 루프 마지막 단계에서 매번 이루어진다.
    - 이때문에 대부분의 경우 리액트 네이티브 앱은 비즈니스 로직을 Javascript 레벨에서 처리한다.

- 단반향 데이터 흐름(One-way Data Flow)
    -  데이터는 Parent로부터 Clild로 흐른다. 하위 컴포넌트는 상위 컴포넌트에 대해 거의 알 수 없다. (Props)
    -  데이터에 의해 뷰가 갱신
