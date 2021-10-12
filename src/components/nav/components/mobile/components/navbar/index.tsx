import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import {
  useSettingsContext,
} from '@contexts';

import { HOME } from '@utils/go_to_page';
import EvmosLogo from '@assets/evmos-white-logo.svg';
import { useStyles } from './styles';
import { NavbarProps } from './types';

const Navbar = (props:NavbarProps) => {
  const classes = useStyles();
  const { theme } = useSettingsContext();
  const {
    isOpen,
    toggleNavMenus,
  } = props;

  return (
    <div className={classes.root}>
      <Link href={HOME}>
        <a className={classes.a}>
          {theme === 'light' ? (
            <EvmosLogo className={classes.logo} />
          ) : (
            <EvmosLogo className={classes.logo} />
          )}
        </a>
      </Link>
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={classnames(classes.hamburger, {
            active: isOpen,
          })}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
