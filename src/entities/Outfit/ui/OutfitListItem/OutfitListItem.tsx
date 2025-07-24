import React from 'react';
import {Outfit} from "@/entities/Outfit";
import s from './OutfitListItem.module.scss';

interface OutfitListItemProps {
  outfitItem: Outfit
}

export const OutfitListItem = ({outfitItem}: OutfitListItemProps) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  if (!outfitItem) return null;
  const onChangeImageIndex = () => {
    if (imageIndex + 1 < outfitItem.images.length) {
      setImageIndex(prev => prev + 1);
    } else {
      setImageIndex(0);
    }
  }

  return (
    <div className={s.OutfitListItem}>
      <div className={s.outfitNameContainer}>
        <div className={s.outfitName}>{outfitItem?.name}</div>
        <div className={s.outfitDescription}>{outfitItem.description}</div>
      </div>
      <img src={outfitItem.images[imageIndex]} className={s.image} onClick={onChangeImageIndex}/>
    </div>
  );
};
