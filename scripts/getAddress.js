const {address} = require("js-conflux-sdk")

const base32Address = 'cfxtest:aasu99grat5yt5udua6awx2dsmmmbdpw36ewbenuhx';
const mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);

console.log(mappedAddress);