import React from 'react';
import classnames from 'classnames';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import EvmosLogo from '@assets/evmos-white-logo.svg';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import {
  chainConfig, generalConfig,
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
  const year = new Date().getFullYear();

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
      <div className="footer__closing--container">
        <Typography className="footer__closing--text">
          <Trans
            i18nKey="common:copyright"
            components={[
              (
                // eslint-disable-next-line
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE"
                />
              ),
            ]}
            values={{
              name: generalConfig.maintainer.name,
            }}
          />
          {' '}
          {year}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
