const { assert } = require("chai");
const { artifacts, contract } = require("hardhat");

const NFT = artifacts.require('./NFT.sol')


contract('NFT', (accounts) => {
  let contract

  before(async() => {
    contract = await NFT.deployed()

  })
  describe('deployment', async () => {
    it('deployes succesfully', async () => {
      const address = contract.address
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)

    })

    it('has a name', async () => {
      const name = await contract.name()
      assert.equal(name, 'NFT')

    })

    it('has a symbol', async () => {
      const symbol = await contract.symbol()
      assert.equal(symbol, 'MNFT')

    })
  })
})