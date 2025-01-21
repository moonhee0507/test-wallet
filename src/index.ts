import { ethers } from "ethers";
import { createWallet, getBalance } from "./wallet";
import { sendTransaction } from "./transaction";

async function main() {
  // Ganache (로컬) 네트워크 연결
  // JsonRpcProvider: 이더리움 네트워크와 상호작용하기 위한 인터페이스를 반환. JSON-RPC를 통해 이더리움 노드와 통신.
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  const testWallet = new ethers.Wallet("0x1fc589dd91e260e74a7248f2c2c5d4fe184468531b5d32611b116faa361e8639", provider);

//   const wallet = createWallet();
  const wallet = testWallet;

  // 잔액 조회
  await getBalance(provider, wallet.address);

  // 테스트 트랜잭션 전송
  await sendTransaction(provider, wallet);

  // 잔액 재조회
  await getBalance(provider, wallet.address);

}

main().catch((err) => {
    console.error("Error:", err);
});