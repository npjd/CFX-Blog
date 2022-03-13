module.exports = {
  networks: {
    testnet: {
      host: "test.confluxrpc.com", // Conflux provides public RPC services for testnet
      port: 80,
      network_id: 1, // Conflux testnet networkId is 1
      privateKeys: [process.env.PRIVATE_KEY], //  Adding the account private key used for sending transactions
    },
  },

  compilers: {
    solc: {
      version: "^0.8.0", // This contract needs to be compiled with the 0.6.9 version compiler
    },
  },
};
