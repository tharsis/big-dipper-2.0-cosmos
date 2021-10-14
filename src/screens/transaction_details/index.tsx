import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useStyles } from './styles';
import {
  Overview,
  Messages,
} from './components';
import { useTransactionDetails } from './hooks';

const TransactionDetails = () => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    state,
    onMessageFilterCallback,
    toggleMessageDisplay,
    filterMessages,
  } = useTransactionDetails();
  const {
    overview,
    messages,
  } = state;

  var evmhash = ""
  const filteredMessages = filterMessages(messages.items)
  if (filteredMessages.length >= 1 && '@type' in filteredMessages[0]['json'] && filteredMessages[0]['json']['@type'] ==="/ethermint.evm.v1.MsgEthereumTx")
    evmhash = filteredMessages[0]['json']['hash']

  return (
    <>
      <NextSeo
        title={t('transactionDetails')}
        openGraph={{
          title: t('transactionDetails'),
        }}
      />
      <Layout navTitle={t('transactionDetails')}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <span className={classes.root}>
            <Overview
              data={overview}
              evmhash={evmhash}
            />
            <Messages
              className={classes.messages}
              messages={filteredMessages}
              viewRaw={messages.viewRaw}
              toggleMessageDisplay={toggleMessageDisplay}
              onMessageFilterCallback={onMessageFilterCallback}
            />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default TransactionDetails;
