import React, {useEffect} from 'react';
import s from './MainPage.module.scss';
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {fetchOutfits} from "@/entities/Outfit/module/service/fetchOutfits";
import {OutfitList} from "@/entities/Outfit";

export const MainPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchOutfits())
  }, []);

  return (
    <div className={s.MainPage}>
      <OutfitList/>
    </div>
  );
};
