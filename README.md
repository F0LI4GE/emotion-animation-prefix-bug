# Emotion/Stylis Prefixing Bug
This repo contains an example of a bug, where `animation` css property is not being prefixed in production bundle, 
unlike `flex` and etc.

## Steps to reproduce
1. Clone repo
2. Run `yarn (install)`
3. Run `yarn run dev`
4. Open `http://localhost:1234` website, open dev tools. You should see a lot of prefixed properties, including `animation` (`-webkit-animation`).
5. Stop current process, run `yarn run build`
6. (Optional) Install `serve`: `yarn add -G serve`
7. Run `serve build` and open the website again.
8. Open dev tools. You should now see no prefixes for `animation` property.

```css
box-sizing: border-box;
width: 200px;
height: 100px;
background-color: aliceblue;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
margin: 100px auto 0px;
animation: 1s ease 0s infinite normal none running animation-2383cq;
```
