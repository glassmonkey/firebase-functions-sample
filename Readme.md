# firebase functions sample + es6
This sample is firebase functions using es6

# Install

```
$ git clone https://github.com/glassmonkey/firebase-functions-sample
$ cd firebase-functions-sample
$ npm install
```

# Configure 

* edit `<your-project-id>` in `.firebaserc`
```
"default": "<your-project-id>"
```
* login firebase
 ```
 $ npx firebase login
 ```

# Optional configure 
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


# Debug
```
$ npm run serve
```
or
```
$ make up
```

# Test
```
$ npm run test
```
or
```
make test
```

# Deploy
```
$ npm run deploy
```
or 
```
make deploy
```
