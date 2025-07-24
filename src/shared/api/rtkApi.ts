import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    timeout: 2000
  }),
  endpoints: (build) => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
