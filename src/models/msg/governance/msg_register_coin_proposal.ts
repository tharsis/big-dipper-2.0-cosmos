import numeral from 'numeral';

class MsgRegisterCoinProposal {
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
    return new MsgRegisterCoinProposal({
      type: json['@type'],
      title: json.title,
      description: json.description,
      recipient: json.recipient,
      metadata: {
          base: json.metadata.base,
          name: json.metadata.name,
          symbol: json.metadata.symbol,
          display: json.metadata.display,
          denom_units: json?.metadata.denom_units.map((y) => {
            return ({
              denom: y?.denom,
              aliases: y?.aliases,
              exponent: y.exponent,
            });
      }),
    },
    });
  }
}

export default MsgRegisterCoinProposal;
