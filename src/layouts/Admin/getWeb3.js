import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Authereum from 'authereum';
import Torus from "@toruslabs/torus-embed";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: '1a3489db693d46ceb5ef9006f5ada61f'
        }
    },
    authereum: {
        package: Authereum,
        options: {}
    },
    torus: {
        package: Torus, // required
        options: {
            config: {
                enableLogging: false, // optional
                buttonPosition: "bottom-left", // optional
                buildEnv: "production", // optional
                showTorusButton: true, // optional
                enabledVerifiers: {
                    // optional
                    google: true,
                    facebook: true,
                    twitch: true,
                    reddit: true,
                    discord: true
                }
            }
        }
    }
};

const getWeb3 = async (noProvider) => {
    if (noProvider) return new Web3(Web3.givenProvider)

    try {
        const web3Modal = new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            providerOptions,
            theme: "dark"
        })
        // web3Modal.clearCachedProvider();

        const provider = await web3Modal.connect()
        // const provider = await web3Modal.connectTo("burnerconnect");

        let web3 = new Web3(provider)

        return web3
    } catch (e) {
        return new Web3(Web3.givenProvider)
    }
}

export default getWeb3;