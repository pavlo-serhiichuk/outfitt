import React, {useEffect} from 'react';
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getOutfitsData, getOutfitsLoading} from "../../module/selectors/getOutfitsSchemaSelectors";
import {fetchOutfits} from "../../module/service/fetchOutfits";
import s from "./OutfitList.module.scss";
import {OutfitListItem} from "@/entities/Outfit";
import {HStack} from "@/shared/ui/Stack";

export const OutfitList = () => {
  const dispatch = useAppDispatch()
  const outfits = useSelector(getOutfitsData)
  const isLoading = useSelector(getOutfitsLoading)

  useEffect(() => {
    dispatch(fetchOutfits())
  }, []);

  if(isLoading || !outfits?.length) {
    return <span>Loading</span>
  }

  return (
    <HStack className={s.OutfitList} justify={'center'}>
      {outfits.map(outfitItem => <OutfitListItem key={outfitItem.id} outfitItem={outfitItem} />)}
    </HStack>
  );
};

