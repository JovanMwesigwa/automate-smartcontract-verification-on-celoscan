const { ethers } = require('hardhat')
const { verifyContract } = require('../utils/verifyContract')

async function main() {
  const Contract = await ethers.getContractFactory('Blogger')
  const blogger = await Contract.deploy()

  await blogger.deployed()

  const contractAddress = blogger.address

  console.log(`Blogger deployed to ${blogger.address}`)

  console.log('Verifying contract -----------')

  await verifyContract(blogger.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
