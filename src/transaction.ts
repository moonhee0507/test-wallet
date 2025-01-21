import { ethers } from "ethers";

// 트랜잭션 전송 함수
export async function sendTransaction(provider: ethers.JsonRpcProvider, wallet: ethers.HDNodeWallet | ethers.Wallet) {
    const connectedWallet = wallet.connect(provider);

    const tx = await connectedWallet.sendTransaction({
        to: ethers.ZeroAddress, // 테스트용 주소
        value: ethers.parseEther("1.0") // 1 ETH 전송
    });

    console.log("Transaction Hash:", tx.hash);
    await tx.wait(); // 트랜잭션 마이닝 대기
    console.log("Transaction Done");
}