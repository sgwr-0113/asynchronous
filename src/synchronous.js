// 同期処理
const synchronousFunc = () => {
  console.log('寄り道して同期処理実行中');
  return '完了！';
};

const message = '同期処理';
const result = synchronousFunc();
console.log(message + result);
