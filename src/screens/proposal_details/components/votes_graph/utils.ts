import numeral from 'numeral';
import { ThemeOptions } from '@material-ui/core/styles';
import { TallyType } from '../../types';
import { formatDenom } from '@utils/format_denom';

export const formatGraphData = (data:TallyType, theme:ThemeOptions) => {

  if (BigInt(data.total) == BigInt(0)) data.total = 1
  return ([
    {
      name: 'yes',
      value: data.yes,
      display: ""+formatDenom(data.yes, "aphoton").value,
      percentage: `${numeral((BigInt(data.yes) / BigInt(data.total)) * BigInt(100)).format('0.[00]')}%`,
      color: theme.palette.custom.charts.one,
    },
    {
      name: 'no',
      value: data.no,
      display: ""+formatDenom(data.no, "aphoton").value,
      percentage: `${numeral((BigInt(data.no) / BigInt(data.total)) * BigInt(100)).format('0.[00]')}%`,
      color: theme.palette.custom.charts.two,
    },
    {
      name: 'veto',
      value: data.veto,
      display: ""+formatDenom(data.veto, "aphoton").value,
      percentage: `${numeral((BigInt(data.veto) / BigInt(data.total)) * BigInt(100)).format('0.[00]')}%`,
      color: theme.palette.custom.charts.three,
    },
    {
      name: 'abstain',
      value: data.abstain,
      display: ""+formatDenom(data.abstain, "aphoton").value,
      percentage: `${numeral((BigInt(data.abstain) / BigInt(data.total)) * BigInt(100)).format('0.[00]')}%`,
      color: theme.palette.custom.charts.four,
    },
  ]);
};
