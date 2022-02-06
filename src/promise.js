import fetch from 'node-fetch';

const getUsername = () => {
    return new Promise((resolve, reject) => {  // Promise型を宣言
      const url = 'https://jsonplaceholder.typicode.com/users/1'

        fetch(url).then(res => res.json())
            .then(json => {
                console.log('これは非同期処理成功時のメッセージです')
                return resolve(json.name)
            }).catch(error => {
                console.error('これは非同期処理失敗時のメッセージです。', error)
                return reject(null)
            })

    })
};

const message = 'ユーザーの名前は'
getUsername().then(username => {  // thenでチェインする
    console.log(message + username)
});