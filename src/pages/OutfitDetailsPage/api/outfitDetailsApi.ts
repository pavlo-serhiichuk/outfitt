import {rtkApi} from "@/shared/api/rtkApi"
import {Outfit} from "@/entities/Outfit"

const outfitDetailsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchOutfitDetailsById: build.query<Outfit, string>({
      query: (id) => ({
        url: `/api/clothes/${id}`
      })
    })
  })
})

export const {useFetchOutfitDetailsByIdQuery: useFetchOutfitDetailsById} = outfitDetailsApi