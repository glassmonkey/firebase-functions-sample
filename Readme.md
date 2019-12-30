# firebase functions sample + es6
This sample is firebase functions using es6

# install

```
$ git clone https://github.com/glassmonkey/firebase-functions-sample
$ cd firebase-functions-sample
$ npm install
```

# configure 

* edit `<your-project-id>` in `.firebaserc`
```
"default": "<your-project-id>"
```
* login firebase
 ```
 $ npx firebase login
 ```

# optional configure 
Using docker, required configure

* get login token
```
$ npx  firebase login:ci
```
* copy .env.example to .env
```
$ cp .env.example .env
```
* replace `anyPass` with `1//***` in `.env`
```
FIREBASE_TOKEN=anypass
->  FIREBASE_TOKEN=1//***
```


# debug
```
$ npm run serve
```
or
```
$ make up
```

# test
```
$ npm run test
```
or
```
make test
```

# deploy
```
$ npm run deploy
```
or 
```
make deploy
```