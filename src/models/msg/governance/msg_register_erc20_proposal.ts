class MsgRegisterErc20Proposal {
  public type: string;
  public title: string;
  public description: string;
  public recipient: string;
  public erc20address: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
    this.recipient = payload.recipient;
    this.erc20address = payload.erc20address;
  }

  static fromJson(json: any) {
    return new MsgRegisterErc20Proposal({
      type: json['@type'],
      title: json.title,
      description: json.description,
      recipient: json.recipient,
      erc20address: json.erc20address,
    });
  }
}

export default MsgRegisterErc20Proposal;
