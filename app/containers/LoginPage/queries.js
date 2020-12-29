import request from 'utils/request'

export const login = async payload => {
  const req = await request.post('/admin/login', payload)
  return req.data
}
