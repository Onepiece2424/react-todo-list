const getGitUsername = () => {
  const url = 'https://api.github.com/users/Onepiece2424'

  fetch(url).then(res => res.json())
    .then(json => {
      console.log('これは非同期処理成功時のメッセージです。')
      return json.login
    }).catch(error => {
      console.error('これは非同期処理失敗時のメッセージです。', error)
      return null
    })
  };

const message = `GitユーザーIDは`
const username = getGitUsername();
console.log(message + username);
