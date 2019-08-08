// for test
const testService = {
  getTest: params => {
    return request({
      url: '/news',
      method: 'get',
      params: params
    })
  }
}
