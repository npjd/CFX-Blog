async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Blog = await ethers.getContractFactory("Blog");
  const blog = await Blog.deploy("ESpace Blog");

  await blog.deployed();

  console.log("Greeter deployed to:", blog.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
