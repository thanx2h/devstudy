### 환경 구성
- Windows : https://dev-yakuza.posstree.com/ko/react-native/install-on-windows/
- Mac : https://dev-yakuza.posstree.com/ko/react-native/install-on-mac/
    - Expo 프레임워크를 사용하기도 하지만, Expo에 종속되어 발생하는 단점이 있기 때문에, 위의 방법으로 하기를 권장
    - 참고 : https://shin1303.tistory.com/entry/React-Native-%EA%B0%9C%EB%B0%9C-%EB%B0%A9%EB%B2%95-%EC%A4%91-Expo%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC

### 현재 환경 구성 관련 버전
- Android
    - Nodejs : v14.17.0 
        > react-native는 Javascript이고 컴퓨터에서 실행시킬수 있게 Javascript의 런타임인 Nodejs가 필요
    - react-native-cli: 2.0.1
    - react-native: 0.66.2
    - Chocolatey : v0.10.15
        > 윈도우용 패키지 관리 프로그램
    - Python : 2.7.18
        > react native 빌드 시스템은 python에 의존하고 있기 때문에 설치 필요
    - Java(openjdk) : "14.0.1" 2020-04-14

### Git 연동
- VS Code
    - Source control > Initialize Repository로 신규생성
    - 로컬저장소에 먼저 commit필요
        1. Source control > Changes 아이콘 중 + 아이콘 클릭
        2. 체크 아이콘 클릭 > 메모 작성하여 엔터
    - github에 업로드
        1. Views > Terminal
        2. 원격 저장소 지정 명령어 : git remote add origin [저장소 url 주소]
        3. 원격 저장소의 내용을 로컬 저장소로 반영 : git pull origin main --allow-unrelated-histories
        4. 로컬 저장소에 push한 내용을 원격 저장소에 반영 : git push -u origin master
        5. push 내용을 github에서 확인