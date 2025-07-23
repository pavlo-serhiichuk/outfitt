import React from 'react';
import s from './Header.module.scss'
import {cls} from "@/shared/lib/cls/cls";
import {getHStack} from "@/shared/ui/Stack";
import {SearchInput} from "@/features/SearchInput";

const Header = () => {
  return (
    <div  className={cls(s.Header, {}, getHStack({justify: 'between', align: 'center'}))}>
      <h4 className={s.logo}>OUTFITT</h4>
      <SearchInput />
      <div />
    </div>
  );
};

export default Header;