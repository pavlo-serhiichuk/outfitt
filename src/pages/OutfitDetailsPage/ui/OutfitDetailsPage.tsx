import React from 'react';
import {useFetchOutfitDetailsById} from "../api/outfitDetailsApi";
import {useParams} from "react-router";
import s from './OutfitDetailsPage.module.scss'

const OutfitDetailsPage = () => {
  const {id: outfitId} = useParams<{ id: string }>()
  const {data: outfitDetails, isLoading, isError} = useFetchOutfitDetailsById(outfitId)

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <div className={s.OutfitDetailsPage}>
      {JSON.stringify(outfitDetails, null, 2)}
    </div>
  );
};

export default OutfitDetailsPage;