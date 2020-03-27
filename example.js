const fetch = require('node-fetch')
const Users = (() => {
  const resource = 'https://jsonplaceholder.typicode.com/users'

  return {
    list: async () => {
       return fetch(resource).then(res => res.json())
    },
    create: async (data) => {
      return fetch(resource, { type: 'POST', body: JSON.stringify(data)}).then(res => res.json())
    }
  }
})()

const listData = async () => {
  console.log(await Users.list())

}

listData()