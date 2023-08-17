export const base = {
    id: 8453,
    name: "Base",
    network: "base-mainnet",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      public: { http: ["https://mainnet.base.org"] },
      default: { http: ["https://mainnet.base.org"] },
    },
    blockExplorers: {
      etherscan: { name: "Basescan", url: "https://basescan.org" },
      default: { name: "Basescan", url: "https://basescan.org" },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 5022,
      },
    },
  };
  