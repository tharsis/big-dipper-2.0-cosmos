class MsgRegisterErc20Proposal {
  public type: string;
  public title: string;
  public description: string;
  public recipient: string;
  public metadata: {
    base: string;
    name: string;
    symbol: string;
    display: string;
    denom_units: {
      denom: string;
      aliases: string[];
      exponent: number;
    }[]
  };

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
    this.recipient = payload.recipient;
    this.metadata = payload.metadata;
  }

  static fromJson(json: any) {
    console.log(json)
    return new MsgRegisterErc20Proposal({
      type: json['@type'],
      title: json.title,
      description: json.description,
      recipient: json.recipient,
    });
  }
}

export default MsgRegisterErc20Proposal;
