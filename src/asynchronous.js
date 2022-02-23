// 非同期処理とは
import fetch from 'node-fetch';

// 非同期処理をおこなう関数
const getUsername = () => {
  const url = 'https://jsonplaceholder.typicode.com/users/1';

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(`非同期処理に成功!取得した値は${json.name}`);
      return json.name;
    })
    .catch((error) => {
      console.error('非同期処理に失敗', error);
      return null;
    });
};

const message = 'ユーザーの名前は';
const username = getUsername(); // 非同期処理だがPromiseにしていないので結果を待たずに先に進んでしまう
console.log(message + username); // 結果としてundefinedのまま出力される
