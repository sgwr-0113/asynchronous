import fetch from 'node-fetch';

// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1'

    // GitHub APIをFetchメソッドで実行
    fetch(url).then(res => res.json())
        .then(data => {
            console.log(`非同期処理に成功!取得した値は${data.name}`)
            return data.name
        }).catch(error => {
            console.error('非同期処理に失敗', error)
            return null
        })

};

const message = 'GitのユーザーIDは'
const username = getGitUsername()
console.log(message + username)