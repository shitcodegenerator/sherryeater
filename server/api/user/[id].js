const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593'
  }
]

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return users.find((user) => user.id === parseInt(id)) || {}
})
