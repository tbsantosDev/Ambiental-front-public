import api from "./api";

export interface UserType {
  name: string
}

const userService = {
  fetchCurrent: async () => {
    const token = sessionStorage.getItem("trevoambiental-token")

    const res = await api.get("/currentUser", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).catch((error) => {
      return error.response
    })
    return res.data
  },
}

export default userService