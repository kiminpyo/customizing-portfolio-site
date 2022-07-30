
# 프로젝트 정보

**Project Name: portfolio**

**project excution period: 2022.07.10 ~ 프로젝트를 만들 때마다**

**site: <a href="https://kipsportfoliosite.netlify.app/">포트폴리오 사이트</a>**

**editor: vscode**

---


# 프로젝트 설명


- 저를 소개하는 포트폴리오 사이트입니다.
- 웹페이지 제작 및 클론코딩 등의 프로젝트들을 모으고, 진행하고 있는 프로젝트의 기술들을 전체적으로 이용해 이 프로젝트에 재사용 할 계획입니다.


# 사용한 라이브러리 및 API, CDN 등
- fontAwesome
- googleFonts
- normalize.css
- netlify(hosting-site)

# 세부정보


**헤더쪽**

- 다크모드/화이트모드를 도입했습니다.

1.새로고침 시에 적용되지 않는문제 -> localStorage에 색을 담았다가, 새로고침시에는 상태가 유지되게끔 구현할 예정입니다.
2.현재 body태그가 아닌 wrapper태그에 background를 변경시켜 scale을 110%로 늘리면 사이드쪽 background 적용이 안되고 있습니다.
-> body태그로 background설정 후 개별적인 item들에 대해 배경색을 적용.

- 폰트크기를 바꿔보았습니다.

1.다크모드와 같이 새로고침 시에는 적용되지 않는 문제-> 똑같이 해결 예정

**컨텐츠**

- 이미지에 호버를 적용해 preview처럼 미리보기

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/93189402/181909844-4475e1d8-a8a4-47ed-8a60-41ebf8d02589.gif)

---


