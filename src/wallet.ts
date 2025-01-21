import { ethers, Wallet } from "ethers";

// 지갑 생성 함수
export function createWallet() {
    const wallet = ethers.Wallet.createRandom();

    console.log("Private Key:", wallet.privateKey);
    console.log("Public Key:", wallet.publicKey);
    console.log("New Wallet Address:", wallet.address);
    console.log("Mnemonic Phrase:", wallet.mnemonic?.phrase);
    return wallet;
}

// 잔액 조회 함수
export async function getBalance(provider: ethers.JsonRpcProvider, address: string) {
    const balance = await provider.getBalance(address);

    console.log("Wallet Balance (ETH): ", ethers.formatEther(balance));
    return balance;
}