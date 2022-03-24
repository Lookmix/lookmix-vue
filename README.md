# lookmix

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
git checkout gh-pages

git rebase main

npm run build

git add .

git commit -m "Updating dist"

git push origin `git subtree split --prefix dist gh-pages`:gh-pages --force```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### RUN IN LOCAL
chromium-browser --disable-web-security --user-data-dir=/home/vinicius/chromium