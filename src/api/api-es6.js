import request from '@src/utils/request'

// 获取首页帖子列表数据
export const getTopics = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  })
}
