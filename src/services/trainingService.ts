import api from "./api"

export interface EpisodeType {
  id: number
  name: string
  synopsis: string
  order: number
  videoUrl: string
  secondsLong: number
}


export interface CourseType {
    id: number
    name: string
    thumbnailUrl: string
    synopsis: string
    Episodes?: EpisodeType[]
}



const trainingService = {
    all: async () => {
      const token = sessionStorage.getItem("trevoambiental-token");
      const res = api.get("/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).catch((error) => {
          console.log(error.response.data.message)
  
          return error
      })
      return res
    },
    getEpisodes: async (id: string) => {
      const token = sessionStorage.getItem("trevoambiental-token")

      const res = await api.get(`/courses/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).catch((error) => {
          console.log(error)
          return error.response
      })
      return res
  }
  };

export default trainingService