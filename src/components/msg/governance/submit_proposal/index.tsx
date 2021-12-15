import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSubmitProposal } from '@models';
import { useChainContext } from '@contexts';

const SubmitProposal = (props: {
  message: MsgSubmitProposal;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const proposer = findAddress(message.proposer);
  const proposerMoniker = proposer ? proposer?.moniker : message.proposer;

  // TODO: MORE DETAILED PROPOSAL MESSAGE
  // if (message.content && message.content.type == "/evmos.intrarelayer.v1.RegisterCoinProposal"){

  //   return (
  //     <Typography>
  //       <Trans
  //         i18nKey="message_contents:txRegisterCoinContent"
  //         components={[
  //           (
  //             <Name
  //               address={message.proposer}
  //               name={proposerMoniker}
  //             />
  //           ),
  //         ]}
  //       />
  //     </Typography>
  //   );
  // }

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSubmitProposalContent"
        components={[
          (
            <Name
              address={message.proposer}
              name={proposerMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default SubmitProposal;
