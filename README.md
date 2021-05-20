Manager-User 3.0 example

React.js로 구현된 manager-user 3.0 로그인/로그아웃을 테스트 할 수 있는 example project입니다.

- manager-user backend host : http://api.manager-user.dev-myrealtrip.net
- local server host : http://local.myrealtrip.net:3000
- google oauth만 지원
- localStorage에 token저장


Flow
1. http://api.manager-user.dev-myrealtrip.net/oauth2/login/authorize/google?redirect_uri=http://local.myrealtrip.net:3000/oauth2/login/redirect
2. Google 페이지에서의 인증 진행
3. 인증 완료 후 redirect_uri인 "http://local.myrealtrip.net:3000/oauth2/login/redirect"으로 이동
4. redirect에서 localStorage에 token 저장
5. Profile page : http://api.manager-user.dev-myrealtrip.net/api/v1/user "Authorition Bearer {token}" Header
