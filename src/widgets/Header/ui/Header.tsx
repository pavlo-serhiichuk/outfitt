import React from 'react';
import s from './Header.module.scss'
import {cls} from "@/shared/lib/cls/cls";
import {getHStack} from "@/shared/ui/Stack";

const Header = () => {
  return (
    <div  className={cls(s.Header, {}, getHStack({justify: 'between', align: 'center'}))}>
      <div>OUTFITT</div>
    </div>
  );
};

export default Header;