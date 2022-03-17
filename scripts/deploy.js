const { Conflux } = require('js-conflux-sdk');
const { abi, bytecode } = require("../artifacts/contracts/Blog.sol/Blog.json");

const mainnet = " https://main.confluxrpc.com";
const testnet = "https://test.confluxrpc.com";
async function main() {
  const cfx = new Conflux({
    url: testnet,
    networkId: 1,
    logger: console,
  });

  const acct = cfx.wallet.addPrivateKey("ENTER PRIV");

  const contract = cfx.Contract({ abi, bytecode });

  const txReceipt = await contract.constructor("myBlog").sendTransaction({from:acct}).executed()
  console.log(txReceipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
