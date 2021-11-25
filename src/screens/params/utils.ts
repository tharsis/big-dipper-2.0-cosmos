import {
  nanoToSeconds, secondsToDays,
} from '@utils/time';
import numeral from 'numeral';
import {
  Staking,
  Slashing,
  Minting,
  Distribution,
  Gov,
  Evm,
} from './types';

export const formatStaking = (data: Staking, t: any) => {
  return ([
    {
      label: t('bondDenom'),
      detail: data.bondDenom,
    },
    {
      label: t('unbondingTime'),
      detail: t('days', {
        day: secondsToDays(nanoToSeconds(data.unbondingTime)),
      }),
    },
    {
      label: t('maxEntries'),
      detail: numeral(data.maxEntries).format('0,0'),
    },
    {
      label: t('historicalEntries'),
      detail: numeral(data.historicalEntries).format('0,0'),
    },
    {
      label: t('maxValidators'),
      detail: numeral(data.maxValidators).format('0,0'),
    },
  ]);
};

export const formatSlashing = (data: Slashing, t: any) => {
  return ([
    {
      label: t('downtimeJailDuration'),
      detail: t('seconds', {
        second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
      }),
    },
    {
      label: t('minSignedPerWindow'),
      detail: `${data.minSignedPerWindow * 100}%`,
    },
    {
      label: t('signedBlockWindow'),
      detail: numeral(data.signedBlockWindow).format('0,0'),
    },
    {
      label: t('slashFractionDoubleSign'),
      detail: `${data.slashFractionDoubleSign * 100} / 100`,
    },
    {
      label: t('slashFractionDowntime'),
      detail: `${data.slashFractionDowntime * 10000} / ${numeral(10000).format('0,0')}`,
    },
  ]);
};

export const formatMinting = (data: Minting, t: any) => {
  return ([
    {
      label: t('blocksPerYear'),
      detail: numeral(data.blocksPerYear).format('0,0'),
    },
    {
      label: t('goalBonded'),
      detail: `${data.goalBonded * 100}%`,
    },
    {
      label: t('inflationMax'),
      detail: `${data.inflationMax * 100}%`,
    },
    {
      label: t('inflationMin'),
      detail: `${data.inflationMin * 100}%`,
    },
    {
      label: t('inflationRateChange'),
      detail: `${data.inflationRateChange * 100}%`,
    },
    {
      label: t('mintDenom'),
      detail: data.mintDenom,
    },
  ]);
};

export const formatDistribution = (data: Distribution, t: any) => {
  return ([
    {
      label: t('baseProposerReward'),
      detail: `${data.baseProposerReward * 100}%`,
    },
    {
      label: t('bonusProposerReward'),
      detail: `${data.bonusProposerReward * 100}%`,
    },
    {
      label: t('communityTax'),
      detail: `${data.communityTax * 100}%`,
    },
    {
      label: t('withdrawAddressEnabled'),
      detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
    },
  ]);
};


export const formatEvm = (data: Evm, t: any) => {
  return ([
    {
      label: t('evmDenom'),
      detail: `${data.evmDenom}`,
    },
    {
      label: t('enableCreate'),
      detail: `${data.enableCreate}`,
    },
    {
      label: t('enableCall'),
      detail: `${data.enableCall}`,
    },
    {
      label: t('berlinBlock'),
      detail: `${data.berlinBlock}`,
    },
    {
      label: t('byzantiumBlock'),
      detail: `${data.byzantiumBlock}`,
    },
    {
      label: t('constantinopleBlock'),
      detail: `${data.constantinopleBlock}`,
    },
    {
      label: t('daoForkBlock'),
      detail: `${data.daoForkBlock}`,
    },
    {
      label: t('daoForkSupport'),
      detail: `${data.daoForkSupport}`,
    },
    {
      label: t('eip150Block'),
      detail: `${data.eip150Block}`,
    },
    {
      label: t('eip150Hash'),
      detail: `${data.eip150Hash}`,
    },
    {
      label: t('eip155Block'),
      detail: `${data.eip155Block}`,
    },
    {
      label: t('eip158Block'),
      detail: `${data.eip158Block}`,
    },

    {
      label: t('homesteadBlock'),
      detail: `${data.homesteadBlock}`,
    },
    {
      label: t('istanbulBlock'),
      detail: `${data.istanbulBlock}`,
    },
    {
      label: t('londonBlock'),
      detail: `${data.londonBlock}`,
    },
    {
      label: t('muirGlacierBlock'),
      detail: `${data.muirGlacierBlock}`,
    },
    {
      label: t('petersburgBlock'),
      detail: `${data.petersburgBlock}`,
    },
  ]);
};

export const formatGov = (data: Gov, t: any) => {
  return ([
    {
      label: t('minDeposit'),
      detail: `${data.minDeposit.value} ${data.minDeposit.denom.toUpperCase()}`,
    },
    {
      label: t('maxDepositPeriod'),
      detail: t('days', {
        day: secondsToDays(nanoToSeconds(data.maxDepositPeriod)),
      }),
    },
    {
      label: t('quorum'),
      detail: `${data.quorum * 100}%`,
    },
    {
      label: t('threshold'),
      detail: `${data.threshold * 100}%`,
    },
    {
      label: t('vetoThreshold'),
      detail: `${data.vetoThreshold * 100}%`,
    },
    {
      label: t('votingPeriod'),
      detail: t('days', {
        day: secondsToDays(nanoToSeconds(data.votingPeriod)),
      }),
    },
  ]);
};
