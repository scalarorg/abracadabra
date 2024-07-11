export default [
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getBorrowFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getCollateralPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isStable",
        type: "bool",
      },
    ],
    name: "getHealthFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getInterestPerYear",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getLiquidationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMarketInfoCauldronV2",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cauldron",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumCollateralRatio",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestPerYear",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "marketMaxBorrow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userMaxBorrow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleExchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralPrice",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct MarketLens.AmountValue",
            name: "totalCollateral",
            type: "tuple",
          },
        ],
        internalType: "struct MarketLens.MarketInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV3",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMarketInfoCauldronV3",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cauldron",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumCollateralRatio",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestPerYear",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "marketMaxBorrow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userMaxBorrow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleExchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralPrice",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct MarketLens.AmountValue",
            name: "totalCollateral",
            type: "tuple",
          },
        ],
        internalType: "struct MarketLens.MarketInfo",
        name: "marketInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMaxMarketBorrowForCauldronV2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV3",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMaxMarketBorrowForCauldronV3",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMaxUserBorrowForCauldronV2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV3",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMaxUserBorrowForCauldronV3",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getMaximumCollateralRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getOracleExchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBentoBoxV1",
        name: "bentoBox",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getTokenInBentoBox",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getTotalBorrowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
    ],
    name: "getTotalCollateral",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct MarketLens.AmountValue",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserBorrow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserCollateral",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct MarketLens.AmountValue",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserLiquidationPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidationPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserLtv",
    outputs: [
      {
        internalType: "uint256",
        name: "ltvBps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserMaxBorrow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserPosition",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cauldron",
            type: "address",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "ltvBps",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowValue",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct MarketLens.AmountValue",
            name: "collateral",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "liquidationPrice",
            type: "uint256",
          },
        ],
        internalType: "struct MarketLens.UserPosition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICauldronV2",
        name: "cauldron",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "getUserPositions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cauldron",
            type: "address",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "ltvBps",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowValue",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct MarketLens.AmountValue",
            name: "collateral",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "liquidationPrice",
            type: "uint256",
          },
        ],
        internalType: "struct MarketLens.UserPosition[]",
        name: "positions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
