# lookmix

### Lints and fixes files
```
npm run lint
```

### Run a prod bundle locally
(optional)
```
npx serve --help 
```

generate the bundle
```
npm run build
```

serve the bundle
```
npx serve dist -s --listen tcp://127.10.10.10:8080
```


### Run in local environment to get a browser without security
Ideal for test scenarios
```
chromium-browser --disable-web-security --user-data-dir=/home/vinicius/chromium
```