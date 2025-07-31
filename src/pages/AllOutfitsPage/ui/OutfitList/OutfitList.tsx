import React from 'react';
// import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getOutfitsData, getOutfitsLoading} from "@/pages/AllOutfitsPage/module/selectors/getOutfitsSchemaSelectors";
import s from "./OutfitList.module.scss";
import {OutfitListItem} from "../OutfitListItem/OutfitListItem";
import {HStack} from "@/shared/ui/Stack";

export const OutfitList = () => {
  // const dispatch = useAppDispatch()
  const outfits = useSelector(getOutfitsData)
  const isLoading = useSelector(getOutfitsLoading)
  console.log('outfits', outfits)
  if(isLoading || !outfits?.length) {
    return <span>Loading</span>
  }

  return (
    <HStack className={s.OutfitList} justify={'center'}>
      {outfits.map(outfitItem => <OutfitListItem key={outfitItem.id} outfitItem={outfitItem} />)}
    </HStack>
  );
};

