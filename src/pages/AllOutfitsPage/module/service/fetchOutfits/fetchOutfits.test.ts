import axios from 'axios';
import {mockOutfits} from "@/entities/Outfit";
import {fetchOutfits} from "@/pages/AllOutfitsPage/module/service/fetchOutfits/fetchOutfits";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "@/app/providers/StoreProvider/StateSchema";
jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('fetchOutfits', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  test('success', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({data: mockOutfits }));
    const action = fetchOutfits();
    const result = await action(dispatch, getState, undefined)
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(dispatch).toHaveBeenCalledTimes(2);
  })

  test('error', async () => {
    mockedAxios.get.mockReturnValue(Promise.reject({ status: 403 }));
    const action = fetchOutfits();
    const result = await action(dispatch, getState, undefined)
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected')
  })
})