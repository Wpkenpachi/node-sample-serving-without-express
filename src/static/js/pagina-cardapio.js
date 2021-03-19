const instance = axios.create({
  baseURL: `http://localhost:3000/`,
});


function getList() {
  instance.get('list').then(response => {
    const { data, status } = response;
    if (status == 200) {
      data.map(item => {
        const li = document.createElement('li')
        li.textContent = item
        document.getElementById('lista').appendChild(li)
      })
    } else {
      console.log(data)
    }

  })
}