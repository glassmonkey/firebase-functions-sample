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

# debug in local with emulating firebase functions
```
$ npm run serve
```

# test with jest
```
$ npm run test
```

# deploy to firebase
```
$ npm run deploy
```