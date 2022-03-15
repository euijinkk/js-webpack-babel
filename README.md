## webpack 관련 설치

`npm install webpack webpack-cli html-webpack-plugin webpack-dev-server style-loader css-loader file-loader clean-webpack-plugin babel-loader @babel/preset-env @babel/plugin-transform-runtime -D`

- webpack-cli : Command Line으로 webpack을 실행
- html-webpack-plugin : HTML을 읽어온다. script tag를 삽입한다. (플러그인)
- webpack-dev-server : 자동 build
- style-loader : css를 스타일 태그로 만들어서 head 내부에 넣어준다. (모듈)
- mini-css-extract-plugin : head에 style tag로 넣는 것이 아니라, 외부 import 방식
- css-loader : css 파일을 읽어준다. (모듈)
- file-loader : img 파일을 불러온다.
- clean-webpack-plugin : build 시 사용하지 않은 파일을 제거해준다.
- babel-loader : babel.config.js를 사용하지 않아도 babel을 처리해준다.
- @babel/preset-env : 기본적인 babel 플러그인을 합쳐놓은 것
- @babel/plugin-transform-runtime : babel에서 async/await 문법을 지원한다.

## build, start 명령어

- "build": "webpack --mode=production",
- "start": "webpack serve --open --mode=development"

## jest 사용을 위한 babel 설치

`npm install jest babel-jest @babel/core -D`

## gh-pages 배포

- `npm install gh-pages`
- "deploy": "gh-pages -d dist"
- `npm run deploy`
