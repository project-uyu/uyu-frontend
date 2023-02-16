![UYU_LOGO](https://media.discordapp.net/attachments/802076592825827332/1075756109240995952/xc2ryIAkTF0AAAAASUVORK5CYII.png)

<div align='center'>
    <h1>🥛우유🥛 : 우리들의 URL</h1>

```
  "쉽고 간편한 북마크 관리 서비스, 우유" 프로젝트
  (2023.01.15 - ~)
```

</div>

<br><br>

# 🚀Deployment

```bash
# 준비중입니다!
```

<br>
<br>
<br>

# 🥛 목차

1. [🥛 프로젝트 소개](#-프로젝트-소개)
2. [🎖️ 핵심 기능](#-핵심-기능)
3. [📚 사용 기술](#-사용-기술)
4. [📖 프로젝트 구조](#-프로젝트-구조)
5. [🙏 Git Flow / Rules](#-Git-Flow-/-Rules)

---

<br>
<br>
<br>
<br>

# 🙋‍♂️ 프로젝트 소개

### 1️⃣ 직관적인 북마크 필터링 / 정렬 서비스

**관련 있는 북마크별**로 필터링하여 관리해보세요!

### 2️⃣ 북마크 폴더 관리 서비스

여러 북마크를 한번에 관리해보세요.

**북마크 여러개를 한 폴더**에 넣어 태그 별로 관리할 수 있어요!

### 3️⃣ 북마크 정기 알림 서비스

추가해두고 오랫동안 확인하지않아, 까먹기 쉬운 북마크들을 **주기적으로 알림**을 받아보세요!

<br>
<br>

# 🎖️ 핵심 기능

-   다양한 북마크 필터링/정렬 기능으로 북마크 쉽게 관리하기
-   추가해놓고 까먹기 쉬운 URL에 대해 정기 알림 기능
-   폴더 및 태그 단위로 URL 분류 기능
-   추가한 URL Card 태그별 시각화 기능

<br>
<br>

# 📚 사용 기술

## 📃 Languages / Libraries

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white)

```bash
# 일부 더 추가할 예정입니다!
```

<br>

## 🛠 Tools

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<br>

## 🧐 Linters

![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

<br>

## 🧐 Deploy

```bash
# 회의 진행 후 더 추가할 예정입니다!
```

<br>
<br>

# 📖 프로젝트 구조

```bash
# 회의 진행 후 더 추가할 예정입니다!
# Docker Image라던가 등 그런 구조임.
```

<br>
<br>

# 🙏 Git Flow / Rules

## 1️⃣ Commit Convention

-   Commit Type만 영어로 작성합니다.

```bash
# Notion에 있는 내용을 옮겨둘 계획입니다.
```

<br>

## 3️⃣ Branch

### (1) develop

-   작업한 내용들이 최종적으로 합쳐지는 Branch
-   Feature Branch 기능 완성 시, `rebase` 및 `PR`

### (2) main

-   배포를 위한 Branch

### (3) Issue 관련 Branch

-   Issue 단위로 브랜치를 생성하고 작업합니다.

<br>

## 4️⃣ Code Review

-   우선적으로 **기능의 정상 동작 검사**
-   가독성 / 컨벤션

<br>

## 5️⃣ Folder Structure

```bash
# 이하 내용은 예시입니다. 실제로 정해지면 수정할 계획입니다.

|-- UYU-Front
    |
    |-- components
    |       |-- common
    |
    |
    |-- hooks
    |   ...// custom hooks
    |
    |
    |-- pages
    |   ...// 페이지 모음
    |
    |
    |-- public
    |      |-- icon
    |      |   ...//icon 모음
    |      |-- image
    |          ...//image 모음
    |
    |
    |-- store
    |   ...//전역 store
    |
    |
    |-- styles
    |   ...//css초기화, 전역 스타일
    |
    |
    |-- types
    |   ...//공통 타입 정의
    |
    |
    |-- utils
    |   ...// 유틸 함수
    |      |-- apis
    |          ...//api 정의
    |
    |
    |-- package.json //설치 모듈 및 버전
```
