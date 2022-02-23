// Promiseを用いた非同期処理
import fetch from 'node-fetch';

const getUsername = () => {
  return new Promise((resolve, reject) => {
    // Promise型を宣言
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log('非同期処理に成功!');
        return resolve(json.name);
      })
      .catch((error) => {
        console.error('非同期処理に失敗', error);
        return reject(null);
      });
  });
};

const message = 'ユーザーの名前は';
getUsername().then((username) => {
  // thenでチェインする
  console.log(message + username);
});
