import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

const RegisterCoin: React.FC<{
  className?: string;
  base: string;
  name: string;
  symbol: string;
  display: string;
  denom_units: {
    denom: string;
    aliases: string[];
    exponent: number;
  }[]
}> = ({
  base,
  name,
  symbol,
  display,
  denom_units
}) => {
  const { t } = useTranslation('proposals');
  return (
    <div
      style={{
        overflow: 'auto', whiteSpace: 'nowrap',
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{t('base')}</TableCell>
            <TableCell>{base}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('name')}</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('symbol')}</TableCell>
            <TableCell>{symbol}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('display')}</TableCell>
            <TableCell>{display}</TableCell>
          </TableRow>
          
          
          <TableBody>
            <TableCell></TableCell>
            <TableRow>
                <TableCell>{t('denom')}</TableCell>
                <TableCell>{t('aliases')}</TableCell>
                <TableCell>{t('exponent')}</TableCell>
              </TableRow>
            {denom_units.map((row) => (
              <TableRow key={row.denom}>
                <TableCell>{row.denom}</TableCell>
                <TableCell>{row.aliases}</TableCell>
                <TableCell>{row.exponent}</TableCell>
              </TableRow>
            ))}
           </TableBody>
        </TableBody>
      </Table>
    </div>
  );
};

export default RegisterCoin;
