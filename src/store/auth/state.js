export default function () {
  return {
    users:[
      {
        email: 'guest@gmail.com',
        name: 'adi',
        password: 'testing',
        status: 'aktif'
      },
      {
        email: 'budi@gmail.com',
        name: 'budi',
        password: 'testing',
        status: 'baru'
      }
    ],
    useractive:{},
    token: localStorage.getItem('token') || '',
    alumnireg:{}
  }
}
