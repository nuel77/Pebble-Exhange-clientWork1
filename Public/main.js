let bitcoin=require('bitcoinjs-lib')
let bip39=require('bip39')

getSeed= async function(phrase){
    const seed = await bip39.mnemonicToSeed(phrase)
    return seed;
  }