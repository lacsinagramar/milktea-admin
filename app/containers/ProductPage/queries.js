import request from 'utils/request'

export const getProducts = async () => {
  try {
    const req = await request.get('/products')

    return req.data
  } catch (err) {
    throw err
  }
}
