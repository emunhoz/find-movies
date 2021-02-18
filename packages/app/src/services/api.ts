import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

const HTTP_CLIENT = applyCaseMiddleware(axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`
}))

export default HTTP_CLIENT
