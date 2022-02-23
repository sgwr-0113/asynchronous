// async,awaitを用いた方法 一番オススメ！
import fetch from 'node-fetch';

const getUsername = async () => {
  // 関数にasyncをつけて
  const message = 'ユーザーの名前は';
  const url = 'https://jsonplaceholder.typicode.com/users/1';

  const json = await fetch(url) // 非同期の処理にawaitをつけると、これが終わるまで先に進まない
    .then((res) => {
      console.log('非同期処理に成功!');
      return res.json();
    })
    .catch((error) => {
      console.error('非同期処理に失敗', error);
      return null;
    });

  const username = json.name;
  console.log(message + username);
};

getUsername();
