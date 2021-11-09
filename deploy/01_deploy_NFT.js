

let { netwrokConfig } = require('../helper-hardhat-config')
module.exports = async({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const{deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = await getChainId()

    const NFT = await deploy("NFT", {
        from: deployer,
        log: true
    })
    log('deployed an NFT contract')

    const NFTcontract = await ethers.getContractFactory("NFT")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const Nft = new ethers.Contract(NFT.address, NFTcontract.interface, signer)
    const networkName = netwrokConfig[chainId]['name']


}
