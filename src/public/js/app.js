/* 
Fetches the short URL
*/
function urlSaver() {
  const urlPost = '/api/v1/url'
  const urlVal = document.getElementById('longUrl').value;
  if (!urlVal) {
    alert('Empty URL');
    return;
  };
  const payload = {
    url: urlVal,
  };

  fetch(urlPost, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    res.json().then(body => {
      if (res.status !== 200) {
        alert('Invalid Url');
        return;
      }
      const shortUrl = body.data.url;
      document.getElementById('outputUrl').style.display = 'block';
      document.getElementById('short').href = shortUrl;
      document.getElementById('short').text = shortUrl;
    })
  }).catch(err => {
    alert('API request went wrong!')
  });
}

/* 
Opens the short URL in a new tab
*/
function openUrl() {
  const code = document.getElementById('code').value;
  if (!code) {
    alert('Empty Code');
    return;
  };
  window.open(`/${code}`);
}