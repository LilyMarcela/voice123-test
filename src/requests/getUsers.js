import apiRequest from '../api/apiRequest'

export const getListUsers =  async params  => {
    if(params === undefined) {
        params = ''
    }
    const {data: {providers} } = await apiRequest.get(`/search/?service=voice_over&keywords=${params}`)
    return providers
}


