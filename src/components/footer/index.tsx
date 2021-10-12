import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import EvmosLogo from '@assets/evmos-white-logo.svg';
import {
  Divider,
} from '@material-ui/core';
import {
  chainConfig,
} from '@src/configs';
import { useSettingsContext } from '@contexts';
import { SocialMedia } from './components';
import {
  footerLinks,
} from './utils';
import { useStyles } from './styles';

const Footer: React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { theme } = useSettingsContext();

  // ============================
  // Footer
  // ============================

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classnames('footer')}>
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <div className="footer__logo--container">
          {theme === 'light' ? (
            <EvmosLogo className="footer__logo" />
          ) : (
            <EvmosLogo className="footer__logo" />
          )}
          <p className="footer__slogan">{chainConfig.title}</p>
        </div>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        <div className="footer__links">
          {footerLinks.map((group) => {
            return (
              <div key={group.key} className={`${group.key} links__group`}>
                <h3>{t(`common:${group.key}`)}</h3>
                {
                    group.links.map((x) => {
                      return (
                        <a
                          key={x.url}
                          href={x.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t(`common:${x.key}`)}
                        </a>
                      );
                    })
                  }
              </div>
            );
          })}
          {/* ============================= */}
          {/* social */}
          {/* ============================= */}
          <div className="footer__social">
            <h3>{t('common:community')}</h3>
            <SocialMedia />
            <div />
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Footer;
