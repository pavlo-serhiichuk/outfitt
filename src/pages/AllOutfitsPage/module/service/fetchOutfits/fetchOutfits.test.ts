import axios from 'axios'
import {mockOutfits} from "@/entities/Outfit"
import {fetchOutfits} from "@/pages/AllOutfitsPage/module/service/fetchOutfits/fetchOutfits"
import {TestAsyncThunk} from "@/shared/lib/jest/TestAsyncThunk/TestAsyncThunk"

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('fetchOutfits', () => {
  test('success', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({data: mockOutfits }))
    const thunk = new TestAsyncThunk(fetchOutfits)
    const result = await thunk.callThunk()
    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })

  test('error', async () => {
    mockedAxios.get.mockReturnValue(Promise.reject({ status: 403 }))
    const thunk = new TestAsyncThunk(fetchOutfits)
    const result = await thunk.callThunk()
    expect(mockedAxios.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})