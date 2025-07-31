import React from 'react';
import s from './Header.module.scss'
import {cls} from "@/shared/lib/cls/cls";
import {getHStack} from "@/shared/ui/Stack";
import {SearchInput} from "@/features/SearchInput";
import {NavLink} from "react-router";
import ThemeSwitcher from "@/widgets/ThemeSwitcher/ui/ThemeSwitcher/ThemeSwitcher";

const Header = () => {

  return (
    <div className={cls(s.Header, {}, getHStack({justify: 'between', align: 'center'}))}>
      <NavLink to={'/'}>
        <h4 className={s.logo}>OUTFITT</h4>
      </NavLink>
      <SearchInput/>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;