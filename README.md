# sarasa

Base64 image save project

## setup

```
$ npm i
```

## run

$TARGET: base64 image file

```
$ npm run build
$ node dist/main.js $TARGET
```

## dev

### watching build

```
$ npm run dev
```

### test

```
$ npm test
```

### for yanmaga

```
$ $$(".-cv-page-content canvas").filter((e) => e.getBoundingClientRect().y === 0 &&  e.getBoundingClientRect().x > 0 )[0].toDataURL("image/png")
```
