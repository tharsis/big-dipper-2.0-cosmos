import React from 'react';
import {
  TelegramIcon,
  TwitterIcon,
  GithubIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/EvmosOrg',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/EvmosOrg',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/tharsis/evmos',
  },
];
