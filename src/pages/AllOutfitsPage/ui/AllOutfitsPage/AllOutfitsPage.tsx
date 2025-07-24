import React, {useEffect} from 'react';
import s from './AllOutfitsPage.module.scss';
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {fetchOutfits} from "../../module/service/fetchOutfits/fetchOutfits";
import {OutfitList} from "../OutfitList/OutfitList";

export const AllOutfitsPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchOutfits())
  }, []);

  return (
    <div className={s.AllOutfitsPage}>
      <OutfitList/>
    </div>
  );
};
