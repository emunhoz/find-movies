import HTTP_CLIENT from './api'

export const findMoviesByName = (name: string) => HTTP_CLIENT.get('', { params: { s: name }})
