import {allOutfitsReducer, allOutfitsActions} from './allOutfitsSlice'
describe('allOutfitsSlice', () => {
  test('allOutfitsReducer', () => {
    expect(allOutfitsReducer({searchValue: ''}, allOutfitsActions.setSearchValue('value'))).toEqual({searchValue: 'value'})
  })
})