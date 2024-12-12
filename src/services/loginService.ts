import api from "./api"

interface LoginParams {
    email: string
    password: string
}

const loginService = {
    login: async (params: LoginParams) => {
        const res = await api.post("/login", params).catch((error) => {
            if (error.response.status === 400 || error.response.status === 401) {
                return error.response
            }
            return error
        })

        if(res.status === 200 || res.status === 204) {
            sessionStorage.setItem("trevoambiental-token", res.data.token)
        }
        return res
    }
}

export default loginService