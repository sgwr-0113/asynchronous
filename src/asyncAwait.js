// 一番オススメ！

import fetch from 'node-fetch';

const getUsername = async () => {  // 関数にasyncをつけて
    const message = 'GitのユーザーIDは';
    const url = 'https://jsonplaceholder.typicode.com/users/1'

    const json = await fetch(url)  // 非同期の処理にawaitをつけるだけ！
        .then(res => {
            console.log('これは非同期処理成功時のメッセージです')
            return res.json()
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        });

    const username = json.name;
    console.log(message + username)
}

getUsername()