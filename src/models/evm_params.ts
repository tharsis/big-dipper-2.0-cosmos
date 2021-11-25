import * as R from 'ramda';

// {{aphoton true true [] {0 0 true 0 0x0000000000000000000000000000000000000000000000000000000000000000 0 0 0 0 0 0 0 0 0}} 47}


class EvmParams {
    public evmDenom: string
    public enableCall: boolean
    public enableCreate: boolean
    public chainConfig: string
    
    public berlinBlock : number
    public byzantiumBlock : number
    public constantinopleBlock : number
    public daoForkBlock : number
    public daoForkSupport : boolean
    public eip150Block : number
    public eip150Hash : string
    public eip155Block : number
    public eip158Block : number
    public homesteadBlock : number
    public istanbulBlock : number
    public londonBlock : number
    public muirGlacierBlock : number
    public petersburgBlock : number
    
// berlin_block: "0"
// byzantium_block: "0"
// constantinople_block: "0"
// dao_fork_block: "0"
// dao_fork_support: true

// eip150_block: "0"
// eip150_hash: "0x0000000000000000000000000000000000000000000000000000000000000000"
// eip155_block: "0"
// eip158_block: "0"
// homestead_block: "0"
// istanbul_block: "0"
// london_block: "0"
// muir_glacier_block: "0"
// petersburg_block: "0


  constructor(payload: any) {
    this.evmDenom = payload.evmDenom;
    this.enableCall = payload.enableCall;
    this.enableCreate = payload.enableCreate;
    //this.chainConfig = JSON.stringify(payload.chainConfig)
    
    this.berlinBlock = payload.berlinBlock
    this.byzantiumBlock = payload.byzantiumBlock
    this.constantinopleBlock = payload.constantinopleBlock
    this.daoForkBlock = payload.daoForkBlock
    this.daoForkSupport  = payload.daoForkSupport
    this.eip150Block = payload.eip150Block
    this.eip150Hash = payload.eip150Hash
    this.eip155Block = payload.eip155_block
    this.eip158Block = payload.eip158_block
    this.homesteadBlock = payload.homestead_block
    this.istanbulBlock = payload.istanbul_block
    this.londonBlock = payload.london_block
    this.muirGlacierBlock = payload.muir_glacier_block
    this.petersburgBlock = payload.petersburg_block
  }

  static fromJson(data: any) {
    let chainConfig = R.pathOr(0, ['chain_config'], data);
    return new EvmParams({
        evmDenom: R.pathOr(0, ['evm_denom'], data),
        enableCall: R.pathOr(0, ['enable_call'], data),
        enableCreate: R.pathOr(0, ['enable_create'], data),
        
        berlinBlock :  R.pathOr(0, ['berlin_block'], chainConfig),
        byzantiumBlock :  R.pathOr(0, ['byzantium_block'], chainConfig),
        constantinopleBlock :  R.pathOr(0, ['constantinople_block'], chainConfig),
        daoForkBlock :  R.pathOr(0, ['dao_fork_block'], chainConfig),
        daoForkSupport :  R.pathOr(0, ['dao_fork_support'], chainConfig),
        eip150Block :  R.pathOr(0, ['eip150_block'], chainConfig),
        eip150Hash :  R.pathOr(0, ['eip150_hash'], chainConfig),
        eip155_block :  R.pathOr(0, ['eip155_block'], chainConfig),
        eip158_block :  R.pathOr(0, ['eip158_block'], chainConfig),
        homestead_block :  R.pathOr(0, ['homestead_block'], chainConfig),
        istanbul_block :  R.pathOr(0, ['istanbul_block'], chainConfig),
        london_block :  R.pathOr(0, ['london_block'], chainConfig),
        muir_glacier_block :  R.pathOr(0, ['muir_glacier_block'], chainConfig),
        petersburg_block :  R.pathOr(0, ['petersburg_block'], chainConfig),
        
    });
  }
}

export default EvmParams;
