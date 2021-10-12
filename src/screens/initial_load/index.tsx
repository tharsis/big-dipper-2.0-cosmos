import React from 'react';
import * as R from 'ramda';
import { useSettingsContext } from '@contexts';
import { LinearProgress } from '@material-ui/core';
import { chainConfig } from '@configs';
import { useStyles } from './styles';
import EvmosLogo from '@assets/evmos-white-logo.svg';
const InitialLoad = () => {
  const { theme } = useSettingsContext();
  const classes = useStyles();

  const logoUrl = R.pathOr(chainConfig.logo.default, ['logo', theme], chainConfig);

  return (
    <div className={classes.root}>
      <div>
      <div className="footer__logo--container">
        {theme === 'light' ? (
          <EvmosLogo className={classes.logoblack} />
        ) : (
          <EvmosLogo className={classes.logo} />
        )}
        </div>
        <LinearProgress className={classes.divider} />
      </div>
    </div>
  );
};

export default InitialLoad;
