import React, {ChangeEvent, useCallback} from 'react';
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getOutfitsSearchValue} from "@/pages/AllOutfitsPage/module/selectors/getOutfitsSchemaSelectors";
import {allOutfitsActions} from "@/pages/AllOutfitsPage";
import {searchByName} from "@/pages/AllOutfitsPage/module/service/searchByName/searchByName";

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(getOutfitsSearchValue)
  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(allOutfitsActions.setSearchValue(e.target.value))
    dispatch(searchByName())
  }, [dispatch])

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleSearch} />
    </div>
  );
};

