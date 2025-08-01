import {getOutfitsData, getOutfitsLoading} from './getOutfitsSchemaSelectors'
import {StateSchema} from "@/app/providers/StoreProvider/StateSchema"
import {mocks} from "@/entities/Outfit"

describe('getOutfitsSchemaSelectors', () => {
  test('getOutfitsData works', () => {
    const state: DeepPartial<StateSchema> = {
      allOutfits: {
        data: [mocks, {...mocks, id: 2}, {...mocks, id: 3}]
      }
    }

    expect(getOutfitsData(state as StateSchema)).toHaveLength(3)
  })

  test('getOutfitsLoading works', () => {
    const state: DeepPartial<StateSchema> = {
      allOutfits: {
        isLoading: false
      }
    }

    expect(getOutfitsLoading(state as StateSchema)).toBe(true)
  })
})