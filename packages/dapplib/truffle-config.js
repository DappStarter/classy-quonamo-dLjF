require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name reward stick universe gesture hidden slot gasp'; 
let testAccounts = [
"0xde4ee5f0cbc5a84dd647a14efe217752f58bea3d3bc41b4f7b3683d019a91cb2",
"0x52bf8a4c8e923870b777ca04da30f3bd48d241c1246c899a7db99f05439b5674",
"0x51088d850aac51d4553cbc7f6bb16eb0f8b40ac5e3bc96e1a2957f8121d85def",
"0x0fc3a02de053fd8970b6ce106a8cac3584bc7812e028b12eb625460518b35912",
"0x7b4913b1c94c59884ad1474febe7153aa6868ecaabb7f788c6b7a6c9e467147b",
"0xce3dbee91748f90bcb0e0f51417a9cde84e42bf18bff0df1b7cbd90fec0490b1",
"0x06de886f4e5e326e8a54c50072f0297a7e5bb82f71a9a34965e3f5b0c9038b1f",
"0xef1697a26be17585ce0fa7371295a2508285e57475b9ee8f670cebff9f4f294c",
"0xe51b61f9c3881ae621d4d46310a5c1bba2a2dd82f9183fbb713e2328ce152551",
"0x5659cfe9195312789dbce271812d0c027639653ca28656a28da527106862bb21"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

