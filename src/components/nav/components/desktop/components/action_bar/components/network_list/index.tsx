import React from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core';
import { Networks } from '@src/components/nav/components';
import { useSettingsContext } from '@contexts';
import EvmosLogo from '@assets/evmos-white-logo.svg';
import { useStyles } from './styles';

const NetworkList: React.FC<{
  className?: string;
  actionHeight?: number;
}> = ({
  className, actionHeight,
}) => {
  const classes = useStyles();
  const { theme } = useSettingsContext();

  return (
    <Box
      boxShadow={3}
      className={classnames(className, classes.root)}
    >
      <div
        style={{
          height: actionHeight,
        }}
      >
        {theme === 'light' ? (
          <EvmosLogo />
        ) : (
          <EvmosLogo />
        )}
      </div>
      <Networks className={classes.content} />
    </Box>
  );
};

export default NetworkList;
