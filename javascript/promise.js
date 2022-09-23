const getGitUsername = () => {
  return new Promise((resolve, reject) => {

    const url = 'https://api.github.com/users/Onepiece2424'

    fetch(url).then(res => res.json())
      .then(json => {
        console.log('これは非同期処理成功時のメッセージです。')
        return resolve(json.login)
      }).catch(error => {
        console.error('これは非同期処理失敗時のメッセージです。', error)
        return reject(null)
      })
  })
};

const message = `GitユーザーIDは`
getGitUsername().then(username => {
  console.log(message + username);
})
