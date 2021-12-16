import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

const RegisterErc20: React.FC<{
  className?: string;
  address: string;
}> = ({
  address,
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
            <TableCell>{t('address')}</TableCell>
            <TableCell>{address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RegisterErc20;
