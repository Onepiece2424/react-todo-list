const getGitUsername = async() => {
  const message = 'GitユーザーのIDは、'
  const url = `https://api.github.com/users/Onepiece2424`

  const json = await fetch(url)
    .then(res => {
      console.log('これは非同期処理成功時のメッセージです。')
      return res.json()
    }).catch(error => {
      console.error('これは非同期処理失敗時のメッセージです。', error)
      return null
    });

    const username = json.login;
    console.log(message + username)
}

getGitUsername();
