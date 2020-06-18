require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name radar office clutch grace immense army genre'; 
let testAccounts = [
"0x93e48c36556d3d00404b6f867105d7bcfb7c31b23f381241054a6c5ca98d51d3",
"0x07aa71a1e30a62b6b4dbb6b381cdc460295bc6c8b463f63d57e7941f758cb2e0",
"0xea9c5982cd9acc83deddc9f808ebba081c402df9b0392ada2b0abb96e052ddd1",
"0xff280a5b19262c20061adcfc79869ec9c307328f2b74d27f1f02119e4adc2824",
"0xab88a9756cc3cdfbb2cea4d3169439bc5a5c28b3f0e7ac3984b4959eca6271d9",
"0xd7a2bc0b584e86412c32f07726ad1c26e318b02edfb082a1ef1f83fd90f73e7f",
"0x44586b81689c08ed3c5aa360d15e84fd18a69f4ca83d5c9196af3dd135fa984d",
"0x55b200c66a8dcd42400086e1da7eb405f9328e9d0a1385739954a9e55c75a8c1",
"0xe248cfbc38caa18e334aef9b2245ceedbb7712710edb1e5b982ed2c5e7ab81d9",
"0xb163da85fe4bdb0c628fb37b237ebb0af0afd51f785eb27a64528c6169314b3c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
