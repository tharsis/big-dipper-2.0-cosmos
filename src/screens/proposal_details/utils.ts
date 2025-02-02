export const getProposalType = (proposalType: string) => {
  let type = proposalType;
  if (proposalType === '/cosmos.gov.v1beta1.TextProposal') {
    type = 'textProposal';
  }

  if (proposalType === '/cosmos.params.v1beta1.ParameterChangeProposal') {
    type = 'parameterChangeProposal';
  }

  if (proposalType === '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal') {
    type = 'softwareUpgradeProposal';
  }

  if (proposalType === '/evmos.intrarelayer.v1.RegisterCoinProposal') {
    type = 'registerCoinProposal';
  }

  if (proposalType === '/evmos.intrarelayer.v1.RegisterERC20Proposal') {
    type = 'registerErc20Proposal';
  }

  return type;
};

export const shouldShowData = (status: string) => (
  [
    'PROPOSAL_STATUS_VOTING_PERIOD',
    'PROPOSAL_STATUS_PASSED',
    'PROPOSAL_STATUS_REJECTED',
    'PROPOSAL_STATUS_FAILED',
  ].includes(status)
);
