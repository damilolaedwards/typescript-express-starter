"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
  _format: "hh-sol-artifact-1",
  contractName: "Tipshot",
  sourceName: "contracts/Tipshot.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
      ],
      name: "BuyerRefunded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "option",
          type: "uint8",
        },
      ],
      name: "ClosingVoteSubmitted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "DepositCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bool",
          name: "lock_status",
          type: "bool",
        },
      ],
      name: "IsLocked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lockedBalance",
          type: "uint256",
        },
      ],
      name: "LockedFundsTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "MinerNFTAndStakingFeeWithdrawn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "miner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "minerEarnings",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "refunded",
          type: "bool",
        },
      ],
      name: "MinerSettled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "nominee",
          type: "address",
        },
      ],
      name: "NewOwnerNominated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "option",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "enum Tipshot.State",
          name: "state",
          type: "uint8",
        },
      ],
      name: "OpeningVoteSubmitted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "ipfsHash",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
      ],
      name: "PredictionCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "PredictionPurchased",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "ipfsHash",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
      ],
      name: "PredictionUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "seller",
          type: "address",
        },
      ],
      name: "PredictionWithdrawn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "sellerEarnings",
          type: "uint256",
        },
      ],
      name: "SellerSettled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "miner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ValidationAssigned",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "miningFee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "minerStakingFee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "minerPercentage",
          type: "uint32",
        },
      ],
      name: "VariableUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
      ],
      name: "Withdrawal",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "Balances",
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
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "BoughtPredictions",
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
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "Index",
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
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "LockedFunds",
      outputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "lastPushDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "releaseDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalInstances",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "NFT_CONTRACT_ADDRESS",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "OwnedPredictions",
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
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "OwnedValidations",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "key",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "PredictionStats",
      outputs: [
        {
          internalType: "uint8",
          name: "validatorCount",
          type: "uint8",
        },
        {
          internalType: "uint8",
          name: "upvoteCount",
          type: "uint8",
        },
        {
          internalType: "uint8",
          name: "downvoteCount",
          type: "uint8",
        },
        {
          internalType: "uint8",
          name: "wonVoteCount",
          type: "uint8",
        },
        {
          internalType: "uint8",
          name: "lostVoteCount",
          type: "uint8",
        },
        {
          internalType: "uint64",
          name: "buyCount",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "Predictions",
      outputs: [
        {
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          internalType: "string",
          name: "ipfsHash",
          type: "string",
        },
        {
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "createdAt",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "startTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "endTime",
          type: "uint256",
        },
        {
          internalType: "uint32",
          name: "odd",
          type: "uint32",
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          internalType: "enum Tipshot.Status",
          name: "status",
          type: "uint8",
        },
        {
          internalType: "enum Tipshot.State",
          name: "state",
          type: "uint8",
        },
        {
          internalType: "bool",
          name: "withdrawnEarnings",
          type: "bool",
        },
        {
          internalType: "enum Tipshot.ValidationStatus",
          name: "winningOpeningVote",
          type: "uint8",
        },
        {
          internalType: "enum Tipshot.ValidationStatus",
          name: "winningClosingVote",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "Purchases",
      outputs: [
        {
          internalType: "bool",
          name: "purchased",
          type: "bool",
        },
        {
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          internalType: "bool",
          name: "refunded",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "TokenOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "User",
      outputs: [
        {
          internalType: "string",
          name: "profile",
          type: "string",
        },
        {
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "wonCount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "lostCount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalPredictions",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "spot",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "Validations",
      outputs: [
        {
          internalType: "address",
          name: "miner",
          type: "address",
        },
        {
          internalType: "bool",
          name: "assigned",
          type: "bool",
        },
        {
          internalType: "enum Tipshot.ValidationStatus",
          name: "opening",
          type: "uint8",
        },
        {
          internalType: "enum Tipshot.ValidationStatus",
          name: "closing",
          type: "uint8",
        },
        {
          internalType: "bool",
          name: "settled",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "activePool",
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
          internalType: "string",
          name: "_profileData",
          type: "string",
        },
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
      ],
      name: "addProfile",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_ipfsHash",
          type: "string",
        },
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_startTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_endTime",
          type: "uint256",
        },
        {
          internalType: "uint16",
          name: "_odd",
          type: "uint16",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
      ],
      name: "createPrediction",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "dummyList",
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
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "dummyValidations",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "key",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "freeTipsQuota",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getActivePoolLength",
      outputs: [
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "buyer",
          type: "address",
        },
      ],
      name: "getBoughtPredictionsLength",
      outputs: [
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMiningPoolLength",
      outputs: [
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "seller",
          type: "address",
        },
      ],
      name: "getOwnedPredictionsLength",
      outputs: [
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "miner",
          type: "address",
        },
      ],
      name: "getOwnedValidationsLength",
      outputs: [
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "index",
          type: "uint8",
        },
      ],
      name: "getRecentPrediction",
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
      inputs: [],
      name: "lock",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "locked",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minerPercentage",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minerStakingFee",
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
      inputs: [],
      name: "miningFee",
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
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "miningPool",
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
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      name: "nominateNewOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "nominatedOwner",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC721Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
      ],
      name: "purchasePrediction",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "refundBuyer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
      ],
      name: "requestValidation",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "_quota",
          type: "uint8",
        },
      ],
      name: "setFreeTipsQuota",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_NftAddress",
          type: "address",
        },
      ],
      name: "setNftAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_miningFee",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minerStakingFee",
          type: "uint256",
        },
        {
          internalType: "uint32",
          name: "_minerPercentage",
          type: "uint32",
        },
      ],
      name: "setVariables",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "settleMiner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "settleSeller",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "_option",
          type: "uint8",
        },
      ],
      name: "submitClosingVote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "_option",
          type: "uint8",
        },
      ],
      name: "submitOpeningVote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "transferLockedFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "unlock",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_ipfsHash",
          type: "string",
        },
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_startTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_endTime",
          type: "uint256",
        },
        {
          internalType: "uint16",
          name: "_odd",
          type: "uint16",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
      ],
      name: "updatePrediction",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "usedFreeQuota",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "withdrawFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "withdrawMinerNftandStakingFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "withdrawPrediction",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
  bytecode:
    "0x60806040526000805460ff60a01b1916905534801561001d57600080fd5b50600080546001600160a01b03191633179055615fcc80620000406000396000f3fe60806040526004361061031d5760003560e01c80637e0db31f116101ab578063b1d6c120116100f7578063da70d22711610095578063eacbc1f81161006f578063eacbc1f814610b84578063eb672ad114610ba4578063f83d08ba14610bc4578063f883ff4514610bd957600080fd5b8063da70d22714610ac9578063dd5f74de14610b02578063e5d00d2414610b2257600080fd5b8063bde959ef116100d1578063bde959ef14610a38578063befcf95f14610a58578063c942bdee14610a78578063cf30901214610a9857600080fd5b8063b1d6c120146109cb578063ba52583b146109eb578063bc4bc9c814610a0b57600080fd5b8063992d9b6311610164578063a4e474631161013e578063a4e4746314610961578063a69df4b514610974578063a8ec4c4214610989578063afc36984146109b657600080fd5b8063992d9b63146108fc5780639aff309f1461091c578063a26664521461093257600080fd5b80637e0db31f1461081f5780637e1bed5114610855578063880ad0af146108875780638da5cb5b1461089c578063927b6bbe146108bc57806396615137146108dc57600080fd5b80632d7a0bf31161026a5780635729bd4c116102235780635d69201f116101fd5780635d69201f146107a35780636b006899146107b65780636db9cf0d146107c95780637a529f48146107ff57600080fd5b80635729bd4c1461074e578063579dac2e1461076e5780635d62d9731461078357600080fd5b80632d7a0bf31461065c578063303109c41461068b57806335bc9546146106bc57806339292763146106dc57806345059cc4146106fc57806353a47bb71461071657600080fd5b8063150b7a02116102d757806318656182116102b1578063186561821461055857806321286a68146105d4578063230eb9c6146105f457806323448cf91461062657600080fd5b8063150b7a02146104ba578063155dd5ee146105185780631627540c1461053857600080fd5b80629207601461034d57806302c7f4761461036f57806304afd0381461038f5780630b102d1a146103b85780630b237869146103d857806313c5a0b51461040e57600080fd5b36610348573360009081526009602052604081208054349290610341908490615dde565b9091555050005b600080fd5b34801561035957600080fd5b5061036d610368366004615996565b610bf9565b005b34801561037b57600080fd5b5061036d61038a3660046158ad565b611211565b34801561039b57600080fd5b506103a560145481565b6040519081526020015b60405180910390f35b3480156103c457600080fd5b5061036d6103d3366004615691565b6113fc565b3480156103e457600080fd5b506103a56103f3366004615691565b6001600160a01b03166000908152600e602052604090205490565b34801561041a57600080fd5b506104756104293660046158ad565b60056020526000908152604090205460ff80821691610100810482169162010000820481169163010000008104821691600160201b82041690600160281b90046001600160401b031686565b6040805160ff9788168152958716602087015293861693850193909352908416606084015290921660808201526001600160401b0390911660a082015260c0016103af565b3480156104c657600080fd5b506104ff6104d53660046156c9565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b6040516001600160e01b031990911681526020016103af565b34801561052457600080fd5b5061036d6105333660046158ad565b611470565b34801561054457600080fd5b5061036d610553366004615691565b6115d3565b34801561056457600080fd5b506105c3610573366004615996565b60066020908152600092835260408084209091529082529020546001600160a01b0381169060ff600160a01b8204811691600160a81b8104821691600160b01b8204811691600160b81b90041685565b6040516103af959493929190615ac4565b3480156105e057600080fd5b506103a56105ef366004615762565b6116d7565b34801561060057600080fd5b5061061461060f366004615691565b611708565b6040516103af96959493929190615c0b565b34801561063257600080fd5b506103a5610641366004615691565b6001600160a01b03166000908152600d602052604090205490565b34801561066857600080fd5b5061067c610677366004615762565b611850565b6040516103af93929190615bb9565b34801561069757600080fd5b506018546106aa90610100900460ff1681565b60405160ff90911681526020016103af565b3480156106c857600080fd5b5061036d6106d7366004615996565b61190d565b3480156106e857600080fd5b5061036d6106f73660046158ad565b611b29565b34801561070857600080fd5b506018546106aa9060ff1681565b34801561072257600080fd5b50600154610736906001600160a01b031681565b6040516001600160a01b0390911681526020016103af565b34801561075a57600080fd5b506103a56107693660046158ad565b611dc9565b34801561077a57600080fd5b506016546103a5565b34801561078f57600080fd5b5061036d61079e3660046158ff565b611dea565b61036d6107b13660046158c5565b611edc565b61036d6107c4366004615821565b6121d1565b3480156107d557600080fd5b506103a56107e4366004615691565b6001600160a01b03166000908152600c602052604090205490565b34801561080b57600080fd5b50600b54610736906001600160a01b031681565b34801561082b57600080fd5b5061073661083a3660046158ad565b600f602052600090815260409020546001600160a01b031681565b34801561086157600080fd5b506015546108729063ffffffff1681565b60405163ffffffff90911681526020016103af565b34801561089357600080fd5b5061036d6123d6565b3480156108a857600080fd5b50600054610736906001600160a01b031681565b3480156108c857600080fd5b5061036d6108d73660046158ad565b6124d7565b3480156108e857600080fd5b5061036d6108f73660046159f7565b6127ed565b34801561090857600080fd5b506103a5610917366004615762565b612c3c565b34801561092857600080fd5b506103a560135481565b34801561093e57600080fd5b5061095261094d366004615762565b612c58565b6040516103af93929190615da8565b61036d61096f3660046158c5565b612d27565b34801561098057600080fd5b5061036d612ead565b34801561099557600080fd5b506103a56109a4366004615691565b60096020526000908152604090205481565b3480156109c257600080fd5b506017546103a5565b3480156109d757600080fd5b5061036d6109e63660046159f7565b612f24565b3480156109f757600080fd5b5061036d610a06366004615a2b565b613334565b348015610a1757600080fd5b506103a5610a263660046158ad565b60086020526000908152604090205481565b348015610a4457600080fd5b50610952610a53366004615762565b613374565b348015610a6457600080fd5b5061036d610a733660046158ad565b613390565b348015610a8457600080fd5b5061036d610a933660046157c1565b6134f8565b348015610aa457600080fd5b50600054610ab990600160a01b900460ff1681565b60405190151581526020016103af565b348015610ad557600080fd5b50610ae9610ae43660046158ad565b613544565b6040516103af9d9c9b9a99989796959493929190615b08565b348015610b0e57600080fd5b506103a5610b1d3660046158ad565b6136d8565b348015610b2e57600080fd5b50610b64610b3d366004615691565b600a6020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016103af565b348015610b9057600080fd5b5061036d610b9f3660046159b7565b6136e8565b348015610bb057600080fd5b506103a5610bbf36600461578d565b61377b565b348015610bd057600080fd5b5061036d6137c3565b348015610be557600080fd5b506103a5610bf4366004615762565b61383c565b600054600160a01b900460ff1615610c2c5760405162461bcd60e51b8152600401610c2390615cb7565b60405180910390fd5b6003600083815260046020819052604090912060080154610100900460ff1690811115610c6957634e487b7160e01b600052602160045260246000fd5b1480610caf57506004600083815260046020819052604090912060080154610100900460ff1690811115610cad57634e487b7160e01b600052602160045260246000fd5b145b610cfb5760405162461bcd60e51b815260206004820152601860248201527f4e6f7420616e206163746976652070726564696374696f6e00000000000000006044820152606401610c23565b60008181526006602090815260408083208584529091529020546001600160a01b03163314610d585760405162461bcd60e51b81526020600482015260096024820152682737ba1036b4b732b960b91b6044820152606401610c23565b6000818152600660209081526040808320858452909152902054600160b81b900460ff1615610dc15760405162461bcd60e51b8152602060048201526015602482015274135a5b995c88185b1c9958591e481cd95d1d1b1959605a1b6044820152606401610c23565b610dce610e106006615e66565b600083815260046020526040902060050154610dee9161ffff1690615dde565b4211610e325760405162461bcd60e51b8152602060048201526013602482015272139bdd0818dbdbdb195908191bdddb881e595d606a1b6044820152606401610c23565b6003600083815260046020819052604090912060080154610100900460ff1690811115610e6f57634e487b7160e01b600052602160045260246000fd5b14156110b057600082815260046020526040902060088101805461ff00191661040017905560070154158015610eae5750601854610100900460ff1615155b15610eeb576001601860018282829054906101000a900460ff16610ed29190615ec6565b92506101000a81548160ff021916908360ff1602179055505b610ef482613858565b6000838152600460205260409020600801805463ff00000019166301000000836002811115610f3357634e487b7160e01b600052602160045260246000fd5b0217905550610f4182613893565b6000838152600460205260409020600801805464ff000000001916600160201b836002811115610f8157634e487b7160e01b600052602160045260246000fd5b02179055506001600083815260046020526040902060080154600160201b900460ff166002811115610fc357634e487b7160e01b600052602160045260246000fd5b141561100c576000828152600460209081526040808320546001600160a01b0316835260109091528120600201805460019290611001908490615dde565b9091555061104a9050565b6000828152600460209081526040808320546001600160a01b0316835260109091528120600301805460019290611044908490615dde565b90915550505b6000828152600460208181526040808420546001600160a01b031684526010909152822001805460019290611080908490615dde565b90915550506000828152600460205260409020546110a7906001600160a01b0316836138c4565b6110b0826139a2565b6000806110bd8484613a95565b90506001600085815260046020526040902060080154600160201b900460ff1660028111156110fc57634e487b7160e01b600052602160045260246000fd5b141561115f5760155460008581526005602090815260408083205460049092529091206007015460649263ffffffff169161114891600160281b9091046001600160401b031690615e90565b6111529190615e90565b61115c9190615e46565b91505b60008381526006602090815260408083208784528252808320546001600160a01b0316835260099091528120805484929061119b908490615dde565b90915550506000838152600660209081526040808320878452825291829020805460ff60b81b1916600160b81b1790558151848152831515918101919091528491869133917fda5931ff2d4d1f9b991a8582802ed53580b6d6023225eee1373db2428622b786910160405180910390a450505050565b60008181526004602052604090205481906001600160a01b031633146112495760405162461bcd60e51b8152600401610c2390615c59565b600082815260056020526040902054829060ff16156112a55760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb88185b1c9958591e481b5a5b995960421b6044820152606401610c23565b6001600084815260046020819052604090912060080154610100900460ff16908111156112e257634e487b7160e01b600052602160045260246000fd5b14156113305760405162461bcd60e51b815260206004820152601d60248201527f50726564696374696f6e20616c72656164792077697468647261776e210000006044820152606401610c23565b6000838152600460205260409020600801805461ff001916610100179055601661135b600185615eaf565b8154811061137957634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101829055601354858352600482526040808420546001600160a01b0316845260099092529082208054919290916113bd908490615dde565b909155505060405133815283907fd024803ecdc257de5f7a60c3ac511ab249f5908eef8d4775f5801395fccc1ee69060200160405180910390a2505050565b6000546001600160a01b031633146114265760405162461bcd60e51b8152600401610c2390615cee565b806001600160a01b03811661144d5760405162461bcd60e51b8152600401610c2390615d71565b50600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600054600160a01b900460ff161561149a5760405162461bcd60e51b8152600401610c2390615cb7565b336000908152600960205260409020548111156114ee5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152606401610c23565b336000908152600960205260408120805483929061150d908490615eaf565b9091555050604051600090339083908381818185875af1925050503d8060008114611554576040519150601f19603f3d011682016040523d82523d6000602084013e611559565b606091505b5050905080611587573360009081526009602052604081208054849290611581908490615dde565b90915550505b33600081815260096020908152604091829020548251868152918201527fdf273cb619d95419a9cd0ec88123a0538c85064229baa6363788f743fff90deb910160405180910390a25050565b6000546001600160a01b031633146115fd5760405162461bcd60e51b8152600401610c2390615cee565b806001600160a01b0381166116245760405162461bcd60e51b8152600401610c2390615d71565b6000546001600160a01b03838116911614156116825760405162461bcd60e51b815260206004820181905260248201527f4f776e657220616464726573732063616e2774206265206e6f6d696e617465646044820152606401610c23565b600180546001600160a01b0319166001600160a01b0384169081179091556040519081527f4b8d098f259d8e813c68a57f09712ee062e342e1c2bc9063f1827c45b4900a999060200160405180910390a15050565b601160205281600052604060002081815481106116f357600080fd5b90600052602060002001600091509150505481565b60106020526000908152604090208054819061172390615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461174f90615ee9565b801561179c5780601f106117715761010080835404028352916020019161179c565b820191906000526020600020905b81548152906001019060200180831161177f57829003601f168201915b5050505050908060010180546117b190615ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546117dd90615ee9565b801561182a5780601f106117ff5761010080835404028352916020019161182a565b820191906000526020600020905b81548152906001019060200180831161180d57829003601f168201915b50505050600283015460038401546004850154600f909501549394919390925060ff1686565b60076020908152600092835260408084209091529082529020805460018201805460ff909216929161188190615ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546118ad90615ee9565b80156118fa5780601f106118cf576101008083540402835291602001916118fa565b820191906000526020600020905b8154815290600101906020018083116118dd57829003601f168201915b5050506002909301549192505060ff1683565b600081815260066020908152604080832085845290915290205482908290600160a01b900460ff1615156001146119565760405162461bcd60e51b8152600401610c2390615d1b565b6000838152600f602052604090205483906001600160a01b0316331461198e5760405162461bcd60e51b8152600401610c2390615d4a565b6002600086815260046020819052604090912060080154610100900460ff16908111156119cb57634e487b7160e01b600052602160045260246000fd5b14611a185760405162461bcd60e51b815260206004820152601760248201527f50726564696374696f6e206e6f742072656a65637465640000000000000000006044820152606401610c23565b6000848152600660209081526040808320888452909152902054600160b81b900460ff1615611a895760405162461bcd60e51b815260206004820152601c60248201527f5374616b696e672066656520616c726561647920726566756e646564000000006044820152606401610c23565b60008481526006602090815260408083208884528252808320805460ff60b81b1916600160b81b179055601454878452600f8352818420546001600160a01b0316845260099092528220805491929091611ae4908490615dde565b90915550611af3905084613f72565b6040518490869033907f79a2ae576a397cf36ec68b4fce2e422f55312f76bd758c8f8a945fc1ba7bc50a90600090a45050505050565b600054600160a01b900460ff1615611b535760405162461bcd60e51b8152600401610c2390615cb7565b6004600082815260046020819052604090912060080154610100900460ff1690811115611b9057634e487b7160e01b600052602160045260246000fd5b14611bd85760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb881b9bdd0818dbdb98db1d59195960421b6044820152606401610c23565b33600090815260076020908152604080832084845290915290205460ff161515600114611c475760405162461bcd60e51b815260206004820152601960248201527f4e6f20707572636861736520686973746f727920666f756e64000000000000006044820152606401610c23565b33600090815260076020908152604080832084845290915290206002015460ff1615611ca85760405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e481c99599d5b99195960821b6044820152606401610c23565b6002600082815260046020526040902060080154600160201b900460ff166002811115611ce557634e487b7160e01b600052602160045260246000fd5b14611d235760405162461bcd60e51b815260206004820152600e60248201526d283932b234b1ba34b7b7103bb7b760911b6044820152606401610c23565b60008181526004602090815260408083206007015433845260099092528220805491929091611d53908490615dde565b90915550503360008181526007602081815260408084208685528252808420600201805460ff19166001179055600490915291829020015490518392917f84b8af1d735f5816c4c2b28d3bfe238ce86550a865d88cdb8961bffa236f758791611dbe91815260200190565b60405180910390a350565b60178181548110611dd957600080fd5b600091825260209091200154905081565b60008781526004602052604090205487906001600160a01b03163314611e225760405162461bcd60e51b8152600401610c2390615c59565b600088815260056020526040902054889060ff1615611e7e5760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb88185b1c9958591e481b5a5b995960421b6044820152606401610c23565b611e8d89898989898989614174565b88336001600160a01b03167f29eb68a6f27d76e328e331a797bdaa1e6475a3d1902ab7311b81d1ef01b701668a8a604051611ec9929190615be6565b60405180910390a3505050505050505050565b600054600160a01b900460ff1615611f065760405162461bcd60e51b8152600401610c2390615cb7565b8142600460008381526020019081526020016000206004015411611f645760405162461bcd60e51b8152602060048201526015602482015274115d995b9d08185b1c9958591e481cdd185c9d1959605a1b6044820152606401610c23565b826003600082815260046020819052604090912060080154610100900460ff1690811115611fa257634e487b7160e01b600052602160045260246000fd5b14611fef5760405162461bcd60e51b815260206004820152601d60248201527f50726564696374696f6e2063757272656e746c7920696e6163746976650000006044820152606401610c23565b60008481526004602052604090206007015434101561209a57600084815260046020526040902060070154612025903490615eaf565b3360009081526009602052604090205410156120535760405162461bcd60e51b8152600401610c2390615c89565b600084815260046020526040902060070154612070903490615eaf565b336000908152600960205260408120805490919061208f908490615eaf565b909155506120e59050565b6000848152600460205260408120600701546120b69034615eaf565b905080156120e35733600090815260096020526040812080548392906120dd908490615dde565b90915550505b505b6120ed61430d565b3360009081526007602090815260408083208784528252909120805460ff191660019081178255855161212893919092019190860190615369565b50600084815260056020819052604090912080546001929061215b908490600160281b90046001600160401b0316615df6565b82546001600160401b039182166101009390930a928302919092021990911617905550336000818152600c602090815260408083208054600181018255908452918320909101879055518692917ff1d2f3e12a47cafdb98595442e29b70eebb267a952e336890afce9fc09dc2c0091a350505050565b600054600160a01b900460ff16156121fb5760405162461bcd60e51b8152600401610c2390615cb7565b60648261ffff161161224f5760405162461bcd60e51b815260206004820152601a60248201527f4f6464206d7573742062652067726561746572207468616e20310000000000006044820152606401610c23565b6013543410156122c9576122656013543461449c565b3360009081526009602052604090205410156122935760405162461bcd60e51b8152600401610c2390615c89565b61229f6013543461449c565b33600090815260096020526040812080549091906122be908490615eaf565b909155506123069050565b60006122d73460135461449c565b905080156123045733600090815260096020526040812080548392906122fe908490615dde565b90915550505b505b612314600280546001019055565b600061231f60025490565b905061233081888888888888614174565b601680546001810182556000919091527fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b51242890181905561236d6144ff565b336000818152600d6020908152604080832080546001810182559084529190922001839055518291907f47c517a39d8f6695dfd038c970ccad21662d57de634e3bd8ca9cde91a5e81c7f906123c5908b908b90615be6565b60405180910390a350505050505050565b6001546001600160a01b031661242e5760405162461bcd60e51b815260206004820152601760248201527f4e6f6d696e61746564206f776e6572206e6f74207365740000000000000000006044820152606401610c23565b6001546001600160a01b031633146124805760405162461bcd60e51b81526020600482015260156024820152742737ba1030903737b6b4b730ba32b21037bbb732b960591b6044820152606401610c23565b600154600080546001600160a01b0319166001600160a01b0390921691821790556040519081527f04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc686163906020015b60405180910390a1565b600054600160a01b900460ff16156125015760405162461bcd60e51b8152600401610c2390615cb7565b60008181526004602052604090205481906001600160a01b031633146125395760405162461bcd60e51b8152600401610c2390615c59565b6004600083815260046020819052604090912060080154610100900460ff169081111561257657634e487b7160e01b600052602160045260246000fd5b146125be5760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb881b9bdd0818dbdb98db1d59195960421b6044820152606401610c23565b60008281526004602052604090206008015462010000900460ff161561261b5760405162461bcd60e51b815260206004820152601260248201527122b0b93734b733b9903bb4ba34323930bbb760711b6044820152606401610c23565b6001600083815260046020526040902060080154600160201b900460ff16600281111561265857634e487b7160e01b600052602160045260246000fd5b146126985760405162461bcd60e51b815260206004820152601060248201526f50726564696374696f6e206c6f73742160801b6044820152606401610c23565b6015546000838152600560209081526040808320546004909252822060070154919260649263ffffffff909116916126e191600160281b9091046001600160401b031690615e90565b6126eb9190615e90565b6126f59190615e46565b600084815260056020526040812054919250906127159060ff1683615e90565b60008581526005602090815260408083205460049092528220600701549293509091839161275491600160281b9091046001600160401b031690615e90565b61275e9190615eaf565b600086815260046020908152604080832060088101805462ff0000191662010000179055546001600160a01b0316835260099091528120805492935083929091906127aa908490615dde565b9091555050604051818152859033907fc494369ed300ae486cff01b6b0c95c080fbffa52fac4c7187df8ba4f10f2044a9060200160405180910390a35050505050565b824260046000838152602001908152602001600020600401541161284b5760405162461bcd60e51b8152602060048201526015602482015274115d995b9d08185b1c9958591e481cdd185c9d1959605a1b6044820152606401610c23565b6000838152600f602052604090205483906001600160a01b031633146128835760405162461bcd60e51b8152600401610c2390615d4a565b600084815260066020908152604080832088845290915290205485908590600160a01b900460ff1615156001146128cc5760405162461bcd60e51b8152600401610c2390615d1b565b8460ff16600114806128e157508460ff166002145b6129295760405162461bcd60e51b815260206004820152601960248201527824b73b30b634b2103b30b634b230ba34b7b71037b83a34b7b760391b6044820152606401610c23565b6000808781526006602090815260408083208b8452909152902054600160a81b900460ff16600281111561296d57634e487b7160e01b600052602160045260246000fd5b146129ba5760405162461bcd60e51b815260206004820152601960248201527f4f70656e696e6720766f746520616c72656164792063617374000000000000006044820152606401610c23565b8460ff1660011415612a2f5760008681526006602090815260408083208a84528252808320805460ff60a81b1916600160a81b179055600590915290208054600191908290612a12908290610100900460ff16615e21565b92506101000a81548160ff021916908360ff160217905550612a96565b60008681526006602090815260408083208a84528252808320805460ff60a81b1916600160a91b17905560059091529020805460019190600290612a7d90849062010000900460ff16615e21565b92506101000a81548160ff021916908360ff1602179055505b600087815260056020526040902054610100900460ff1660031415612b2a576000878152600460205260409020600801805461ff001916610300179055612adc876146fe565b600087815260046020526040902060070154612b2a576001601860018282829054906101000a900460ff16612b119190615e21565b92506101000a81548160ff021916908360ff1602179055505b60008781526005602052604090205462010000900460ff1660031415612b9f576000878152600460205260409020600801805461ff0019166102001790556016612b75600189615eaf565b81548110612b9357634e487b7160e01b600052603260045260246000fd5b60009182526020822001555b601354600090612bb190600590615e46565b33600090815260096020526040812080549293508392909190612bd5908490615dde565b90915550506000888152600460205260409081902060080154905188918a917fd29ae96de2bbecb897474e0adfca6e3cbdeb915f288e6746027ddc09fd2d08bb91612c2a918b91610100900460ff1690615dc7565b60405180910390a35050505050505050565b600c60205281600052604060002081815481106116f357600080fd5b60126020528160005260406000208181548110612c7457600080fd5b906000526020600020906003020160009150915050806000015490806001015490806002018054612ca490615ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054612cd090615ee9565b8015612d1d5780601f10612cf257610100808354040283529160200191612d1d565b820191906000526020600020905b815481529060010190602001808311612d0057829003601f168201915b5050505050905083565b600054600160a01b900460ff1615612d515760405162461bcd60e51b8152600401610c2390615cb7565b601454341015612dcf5734601454612d699190615eaf565b336000908152600960205260409020541015612d975760405162461bcd60e51b8152600401610c2390615c89565b34601454612da59190615eaf565b3360009081526009602052604081208054909190612dc4908490615eaf565b90915550612e0e9050565b600060145434612ddf9190615eaf565b90508015612e0c573360009081526009602052604081208054839290612e06908490615dde565b90915550505b505b601654612e515760405162461bcd60e51b81526020600482015260116024820152706d696e696e6720706f6f6c20656d70747960781b6044820152606401610c23565b612e59614753565b612e6282614945565b6000612e6e8383614c17565b604051338152909150839082907fbe10ae21ca4fb40e188c785df2f785606e4a921db8252b99d8644fc1e78422499060200160405180910390a3505050565b6000546001600160a01b03163314612ed75760405162461bcd60e51b8152600401610c2390615cee565b6000805460ff60a01b1916908190556040517f34b31e61a2baf88ffda83bb8d6443ee3dc3bff0ac4bef8f406d7fd16c7d82e23916124cd91600160a01b90910460ff161515815260200190565b826003600082815260046020819052604090912060080154610100900460ff1690811115612f6257634e487b7160e01b600052602160045260246000fd5b14612faf5760405162461bcd60e51b815260206004820152601d60248201527f50726564696374696f6e2063757272656e746c7920696e6163746976650000006044820152606401610c23565b6000838152600f602052604090205483906001600160a01b03163314612fe75760405162461bcd60e51b8152600401610c2390615d4a565b600084815260066020908152604080832088845290915290205485908590600160a01b900460ff1615156001146130305760405162461bcd60e51b8152600401610c2390615d1b565b8460ff166001148061304557508460ff166002145b61308d5760405162461bcd60e51b815260206004820152601960248201527824b73b30b634b2103b30b634b230ba34b7b71037b83a34b7b760391b6044820152606401610c23565b61309a610e106002615e66565b6000888152600460205260409020600501546130ba9161ffff1690615dde565b42116131085760405162461bcd60e51b815260206004820152601b60248201527f43616e2774206361737420636c6f73696e6720766f7465206e6f7700000000006044820152606401610c23565b6000808781526006602090815260408083208b8452909152902054600160b01b900460ff16600281111561314c57634e487b7160e01b600052602160045260246000fd5b146131995760405162461bcd60e51b815260206004820152601960248201527f436c6f73696e6720766f746520616c72656164792063617374000000000000006044820152606401610c23565b6131a6610e106006615e66565b6000888152600460205260409020600501546131c69161ffff1690615dde565b42106132145760405162461bcd60e51b815260206004820152601a60248201527f566f74652077696e646f7720706572696f6420657870697265640000000000006044820152606401610c23565b8460ff166001141561328c5760008681526006602090815260408083208a84528252808320805460ff60b01b1916600160b01b1790556005909152902080546001919060039061326f9084906301000000900460ff16615e21565b92506101000a81548160ff021916908360ff1602179055506132f4565b60008681526006602090815260408083208a84528252808320805460ff60b01b1916600160b11b179055600590915290208054600191906004906132db908490600160201b900460ff16615e21565b92506101000a81548160ff021916908360ff1602179055505b6132fd86613f72565b60405160ff86168152869088907fcdc90f517e1a5ca6dd066d189214dfa975686ab515a2e100d0075f6a7bc1f457906020016123c5565b6000546001600160a01b0316331461335e5760405162461bcd60e51b8152600401610c2390615cee565b6018805460ff191660ff92909216919091179055565b600e6020528160005260406000208181548110612c7457600080fd5b600054600160a01b900460ff16156133ba5760405162461bcd60e51b8152600401610c2390615cb7565b336000908152600a602052604090205481111561340e5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152606401610c23565b336000908152600a602052604090206002015442116134655760405162461bcd60e51b815260206004820152601360248201527220b9b9b2ba399039ba34b63610333937bd32b760691b6044820152606401610c23565b336000908152600a602052604081208054839290613484908490615eaf565b909155505033600090815260096020526040812080548392906134a8908490615dde565b9091555050336000818152600a6020908152604091829020548251858152918201527f675ef43c7a08d92fcd9cf2d6980839fcfaab5cee86d6567823385cf88095d4e2910160405180910390a250565b336000908152601060209081526040909120835161351892850190615369565b50336000908152601060209081526040909120825161353f92600190920191840190615369565b505050565b600460205260009081526040902080546001820180546001600160a01b03909216929161357090615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461359c90615ee9565b80156135e95780601f106135be576101008083540402835291602001916135e9565b820191906000526020600020905b8154815290600101906020018083116135cc57829003601f168201915b5050505050908060020180546135fe90615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461362a90615ee9565b80156136775780601f1061364c57610100808354040283529160200191613677565b820191906000526020600020905b81548152906001019060200180831161365a57829003601f168201915b505050600384015460048501546005860154600687015460078801546008909801549697939692955090935063ffffffff16919060ff80821691610100810482169162010000820481169163010000008104821691600160201b909104168d565b60168181548110611dd957600080fd5b6000546001600160a01b031633146137125760405162461bcd60e51b8152600401610c2390615cee565b601383905560148290556015805463ffffffff191663ffffffff83169081179091556040805185815260208101859052908101919091527feee896e21d1e33c3657aa10b14a193ac2ce297c8843345cb849ac135b7b5bfd09060600160405180910390a1505050565b6001600160a01b038216600090815260106020526040812060050160ff8316600a81106137b857634e487b7160e01b600052603260045260246000fd5b015490505b92915050565b6000546001600160a01b031633146137ed5760405162461bcd60e51b8152600401610c2390615cee565b6000805460ff60a01b1916600160a01b908117918290556040517f34b31e61a2baf88ffda83bb8d6443ee3dc3bff0ac4bef8f406d7fd16c7d82e23926124cd92900460ff161515815260200190565b600d60205281600052604060002081815481106116f357600080fd5b60008181526005602052604081205460ff620100008204811661010090920416111561388657506001919050565b506002919050565b919050565b60008181526005602052604081205460ff600160201b82048116630100000090920416111561388657506001919050565b6001600160a01b0382166000908152601060205260409020600f015460ff16600a141561390f576001600160a01b0382166000908152601060205260409020600f01805460ff191690555b6001600160a01b0382166000908152601060205260409020600f81015460ff1690829060050182600a811061395457634e487b7160e01b600052603260045260246000fd5b01556001600160a01b0383166000908152601060205260408120600f0180546001929061398590849060ff16615e21565b92506101000a81548160ff021916908360ff160217905550505050565b600081815260086020526040902054601780546139c190600190615eaf565b815481106139df57634e487b7160e01b600052603260045260246000fd5b906000526020600020015460178281548110613a0b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200181905550806008600060178481548110613a3f57634e487b7160e01b600052603260045260246000fd5b90600052602060002001548152602001908152602001600020819055506017805480613a7b57634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590555050565b60008181526006602090815260408083208584528252808320815160a08101835281546001600160a01b038116825260ff600160a01b8204811615159583019590955285949193840191600160a81b909104166002811115613b0757634e487b7160e01b600052602160045260246000fd5b6002811115613b2657634e487b7160e01b600052602160045260246000fd5b81528154602090910190600160b01b900460ff166002811115613b5957634e487b7160e01b600052602160045260246000fd5b6002811115613b7857634e487b7160e01b600052602160045260246000fd5b81529054600160b81b900460ff161515602091820152600086815260048252604080822081516101a0810190925280546001600160a01b0316825260018101805495965092949193909290840191613bcf90615ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054613bfb90615ee9565b8015613c485780601f10613c1d57610100808354040283529160200191613c48565b820191906000526020600020905b815481529060010190602001808311613c2b57829003601f168201915b50505050508152602001600282018054613c6190615ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054613c8d90615ee9565b8015613cda5780601f10613caf57610100808354040283529160200191613cda565b820191906000526020600020905b815481529060010190602001808311613cbd57829003601f168201915b505050918352505060038281015460208301526004830154604083015260058301546060830152600683015463ffffffff166080830152600783015460a0830152600883015460c09092019160ff1690811115613d4757634e487b7160e01b600052602160045260246000fd5b6003811115613d6657634e487b7160e01b600052602160045260246000fd5b81526020016008820160019054906101000a900460ff166004811115613d9c57634e487b7160e01b600052602160045260246000fd5b6004811115613dbb57634e487b7160e01b600052602160045260246000fd5b8152600882015460ff6201000082048116151560208401526040909201916301000000909104166002811115613e0157634e487b7160e01b600052602160045260246000fd5b6002811115613e2057634e487b7160e01b600052602160045260246000fd5b81526020016008820160049054906101000a900460ff166002811115613e5657634e487b7160e01b600052602160045260246000fd5b6002811115613e7557634e487b7160e01b600052602160045260246000fd5b81525050905060008161016001516002811115613ea257634e487b7160e01b600052602160045260246000fd5b83604001516002811115613ec657634e487b7160e01b600052602160045260246000fd5b148015613f1957508161018001516002811115613ef357634e487b7160e01b600052602160045260246000fd5b83606001516002811115613f1757634e487b7160e01b600052602160045260246000fd5b145b15613f595760145483516001600160a01b031660009081526009602052604081208054909190613f4a908490615dde565b9091555060019150613f699050565b613f698360000151601454614ece565b95945050505050565b6000818152600f602052604090205481906001600160a01b03163314613faa5760405162461bcd60e51b8152600401610c2390615d4a565b6000828152600f60205260409020546001600160a01b031680613fdf5760405162461bcd60e51b8152600401610c2390615d71565b600b546001600160a01b0316806140085760405162461bcd60e51b8152600401610c2390615d71565b6000848152600f60205260409081902054600b549151632142170760e11b81523060048201526001600160a01b0391821660248201819052604482018890529291909116906342842e0e90606401600060405180830381600087803b15801561407057600080fd5b505af1158015614084573d6000803e3d6000fd5b5050600b546040516331a9108f60e11b8152600481018990523393506001600160a01b039091169150636352211e9060240160206040518083038186803b1580156140ce57600080fd5b505afa1580156140e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061410691906156ad565b6001600160a01b0316146141525760405162461bcd60e51b81526020600482015260136024820152721b999d081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610c23565b505050600091825250600f6020526040902080546001600160a01b0319169055565b83836141808282615006565b6141cc5760405162461bcd60e51b815260206004820152601e60248201527f446f65736e2774206d6565742074696d6520726571756972656d656e747300006044820152606401610c23565b600089815260046020908152604090912080546001600160a01b031916331781558951614201926001909201918b0190615369565b5060008981526004602090815260409091208851614227926002909201918a0190615369565b50600089815260046020819052604090912042600382015590810187905560058101869055600601805463ffffffff191661ffff8616179055614269336150b9565b1561428757600089815260046020526040902060070183905561429a565b6000898152600460205260408120600701555b6000898152600460205260409020600701546143025760185460ff80821661010090920416106143025760405162461bcd60e51b8152602060048201526013602482015272467265652071756f746120757365642075702160681b6044820152606401610c23565b505050505050505050565b336000908152600c602052604090205461432357565b60005b336000908152600c602052604090205481101561445a57336000908152600c6020526040812080548390811061436c57634e487b7160e01b600052603260045260246000fd5b60009182526020822001549150600082815260046020526040902060080154600160201b900460ff1660028111156143b457634e487b7160e01b600052602160045260246000fd5b14806143fa57506002600082815260046020526040902060080154600160201b900460ff1660028111156143f857634e487b7160e01b600052602160045260246000fd5b145b156144475733600090815260076020908152604080832084845290915290206002015460ff1661444757336000908152601160209081526040822080546001810182559083529120018190555b508061445281615f24565b915050614326565b50336000908152601160209081526040808320600c909252909120815461448192906153ed565b5033600090815260116020526040812061449a9161542d565b565b6000828211156144ee5760405162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f7700006044820152606401610c23565b6144f88284615eaf565b9392505050565b336000908152600d602052604090205461451557565b60005b336000908152600d60205260409020548110156146d757336000908152600d6020526040812080548390811061455e57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015490506001600082815260046020819052604090912060080154610100900460ff16908111156145a957634e487b7160e01b600052602160045260246000fd5b14806145ef57506002600082815260046020819052604090912060080154610100900460ff16908111156145ed57634e487b7160e01b600052602160045260246000fd5b145b156145fa57506146c5565b60008082815260046020526040902060080154600160201b900460ff16600281111561463657634e487b7160e01b600052602160045260246000fd5b148061467c57506001600082815260046020526040902060080154600160201b900460ff16600281111561467a57634e487b7160e01b600052602160045260246000fd5b145b156146c35760008181526004602052604090206008015462010000900460ff166146c357336000908152601160209081526040822080546001810182559083529120018190555b505b806146cf81615f24565b915050614518565b50336000908152601160209081526040808320600d909252909120815461448192906153ed565b601780546001818101835560008390527fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c1590910183905590546147419190615eaf565b60009182526008602052604090912055565b336000908152600e602052604090205461476957565b60005b336000908152600e602052604090205481101561490557336000908152600e602052604081208054839081106147b257634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160405180606001604052908160008201548152602001600182015481526020016002820180546147ef90615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461481b90615ee9565b80156148685780601f1061483d57610100808354040283529160200191614868565b820191906000526020600020905b81548152906001019060200180831161484b57829003601f168201915b505050919092525050506020818101516000908152600682526040808220845183529092522054909150600160b81b900460ff166148f257336000908152601260209081526040808320805460018181018355918552938390208551600390950201938455848301519084015583015180518493926148ee926002850192910190615369565b5050505b50806148fd81615f24565b91505061476c565b50336000908152601260209081526040808320600e909252909120815461492c929061544e565b5033600090815260126020526040812061449a916154d4565b600b546001600160a01b03168061496e5760405162461bcd60e51b8152600401610c2390615d71565b600b546040516331a9108f60e11b81526004810184905233916001600160a01b031690636352211e9060240160206040518083038186803b1580156149b257600080fd5b505afa1580156149c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906149ea91906156ad565b6001600160a01b03161415614b3257600b54604051632142170760e11b8152336004820152306024820152604481018490526001600160a01b03909116906342842e0e90606401600060405180830381600087803b158015614a4b57600080fd5b505af1158015614a5f573d6000803e3d6000fd5b5050600b546040516331a9108f60e11b8152600481018690523093506001600160a01b039091169150636352211e9060240160206040518083038186803b158015614aa957600080fd5b505afa158015614abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614ae191906156ad565b6001600160a01b031614614b2d5760405162461bcd60e51b81526020600482015260136024820152721b999d081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610c23565b614bf6565b600b546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e9060240160206040518083038186803b158015614b7657600080fd5b505afa158015614b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614bae91906156ad565b6001600160a01b031614614bf65760405162461bcd60e51b815260206004820152600f60248201526e111bd95cdb89dd081bdddb88139195608a1b6044820152606401610c23565b506000908152600f6020526040902080546001600160a01b03191633179055565b6000806003546001614c299190615dde565b9050601660035481548110614c4e57634e487b7160e01b600052603260045260246000fd5b906000526020600020015460001480614c92575060008181526004602081905260409091200154614c82610e106002615e66565b614c909061ffff1642615dde565b115b15614cb557614ca2600354615230565b6003819055614cb2906001615dde565b90505b60165460035410614d085760405162461bcd60e51b815260206004820152601b60248201527f4d696e696e6720706f6f6c2063757272656e746c7920656d70747900000000006044820152606401610c23565b614d15610e106004615e66565b600082815260046020526040902060030154614d359161ffff1690615dde565b421015614d845760405162461bcd60e51b815260206004820152601860248201527f4e6f7420617661696c61626c6520666f72206d696e696e6700000000000000006044820152606401610c23565b600084815260066020908152604080832084845282528083208054600160a01b6001600160a81b03199091163360ff60a01b19161717905560059091528120805460019290614dd790849060ff16615e21565b825460ff9182166101009390930a928302919092021990911617905550336000908152600e60209081526040808320815160608101835285815280840189815292810188815282546001818101855593875295859020825160039097020195865592519185019190915590518051919392614e5a92600285019290910190615369565b505050600081815260056020819052604090912054829160ff9091161415614ec657601660035481548110614e9f57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009055600160036000828254614ec09190615dde565b90915550505b949350505050565b816001600160a01b038116614ef55760405162461bcd60e51b8152600401610c2390615d71565b6001600160a01b0383166000908152600a602052604081208054849290614f1d908490615dde565b90915550506001600160a01b0383166000908152600a6020526040902060010154614f8357614f6242614f5d614f566018610e10615295565b601e615295565b61530a565b6001600160a01b0384166000908152600a6020526040902060020155614fc4565b614f93614f566018610e10615295565b6001600160a01b0384166000908152600a602052604081206002018054909190614fbe908490615dde565b90915550505b6001600160a01b0383166000908152600a60205260408120426001808301919091556003909101805491929091614ffc908490615dde565b9091555050505050565b60008282116150575760405162461bcd60e51b815260206004820152601d60248201527f456e642074696d65206c657373207468616e2073746172742074696d650000006044820152606401610c23565b8261506942614f5d6008610e10615295565b1180615084575061508142614f5d6018610e10615295565b83115b806150a357506150976018610e10615295565b6150a1838561449c565b115b156150b0575060006137bd565b50600192915050565b6001600160a01b038116600090815260106020526040812060040154600a11156150e557506000919050565b6127106000805b6001600160a01b0385166000526010602052600a81101561520f5760016001600160a01b03861660009081526010602052604081206004919060050184600a811061514757634e487b7160e01b600052603260045260246000fd5b01548152602081019190915260400160002060080154600160201b900460ff16600281111561518657634e487b7160e01b600052602160045260246000fd5b14156151fd576001600160a01b03851660009081526010602052604081206151f09160049160050184600a81106151cd57634e487b7160e01b600052603260045260246000fd5b0154815260208101919091526040016000206006015463ffffffff16600a615295565b6151fa9083615dde565b91505b8061520781615f24565b9150506150ec565b508161ffff16811115615226575060019392505050565b5060009392505050565b60008061523e836001615dde565b90505b6016548110156137bd576016818154811061526c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154600014615283576137bd565b61528e600182615dde565b9050615241565b6000826152a4575060006137bd565b60006152b08385615e90565b9050826152bd8583615e46565b146144f85760405162461bcd60e51b815260206004820181905260248201527f536166654d6174683a6d756c7469706c69636174696f6e206f766572666c6f776044820152606401610c23565b6000806153178385615dde565b9050838110156144f85760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610c23565b82805461537590615ee9565b90600052602060002090601f01602090048101928261539757600085556153dd565b82601f106153b057805160ff19168380011785556153dd565b828001600101855582156153dd579182015b828111156153dd5782518255916020019190600101906153c2565b506153e99291506154f5565b5090565b8280548282559060005260206000209081019282156153dd5760005260206000209182015b828111156153dd578254825591600101919060010190615412565b508054600082559060005260206000209081019061544b91906154f5565b50565b8280548282559060005260206000209060030281019282156154c85760005260206000209160030282015b828111156154c8578282600082015481600001556001820154816001015560028201816002019080546154ab90615ee9565b6154b692919061550a565b50505091600301919060030190615479565b506153e9929150615584565b508054600082556003029060005260206000209081019061544b9190615584565b5b808211156153e957600081556001016154f6565b82805461551690615ee9565b90600052602060002090601f01602090048101928261553857600085556153dd565b82601f1061554957805485556153dd565b828001600101855582156153dd57600052602060002091601f01602090048201828111156153dd578254825591600101919060010190615412565b808211156153e9576000808255600182018190556155a560028301826155ae565b50600301615584565b5080546155ba90615ee9565b6000825580601f106155ca575050565b601f01602090049060005260206000209081019061544b91906154f5565b600082601f8301126155f8578081fd5b81356001600160401b038082111561561257615612615f6b565b604051601f8301601f19908116603f0116810190828211818310171561563a5761563a615f6b565b81604052838152866020858801011115615652578485fd5b8360208701602083013792830160200193909352509392505050565b803561ffff8116811461388e57600080fd5b803560ff8116811461388e57600080fd5b6000602082840312156156a2578081fd5b81356144f881615f81565b6000602082840312156156be578081fd5b81516144f881615f81565b6000806000806000608086880312156156e0578081fd5b85356156eb81615f81565b945060208601356156fb81615f81565b93506040860135925060608601356001600160401b038082111561571d578283fd5b818801915088601f830112615730578283fd5b81358181111561573e578384fd5b89602082850101111561574f578384fd5b9699959850939650602001949392505050565b60008060408385031215615774578182fd5b823561577f81615f81565b946020939093013593505050565b6000806040838503121561579f578182fd5b82356157aa81615f81565b91506157b860208401615680565b90509250929050565b600080604083850312156157d3578182fd5b82356001600160401b03808211156157e9578384fd5b6157f5868387016155e8565b9350602085013591508082111561580a578283fd5b50615817858286016155e8565b9150509250929050565b60008060008060008060c08789031215615839578081fd5b86356001600160401b038082111561584f578283fd5b61585b8a838b016155e8565b97506020890135915080821115615870578283fd5b5061587d89828a016155e8565b955050604087013593506060870135925061589a6080880161566e565b915060a087013590509295509295509295565b6000602082840312156158be578081fd5b5035919050565b600080604083850312156158d7578182fd5b8235915060208301356001600160401b038111156158f3578182fd5b615817858286016155e8565b600080600080600080600060e0888a031215615919578081fd5b8735965060208801356001600160401b0380821115615936578283fd5b6159428b838c016155e8565b975060408a0135915080821115615957578283fd5b506159648a828b016155e8565b955050606088013593506080880135925061598160a0890161566e565b915060c0880135905092959891949750929550565b600080604083850312156159a8578182fd5b50508035926020909101359150565b6000806000606084860312156159cb578081fd5b8335925060208401359150604084013563ffffffff811681146159ec578182fd5b809150509250925092565b600080600060608486031215615a0b578081fd5b8335925060208401359150615a2260408501615680565b90509250925092565b600060208284031215615a3c578081fd5b6144f882615680565b60058110615a5557615a55615f55565b9052565b60048110615a5557615a55615f55565b60038110615a5557615a55615f55565b60008151808452815b81811015615a9e57602081850181015186830182015201615a82565b81811115615aaf5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386168152841515602082015260a08101615ae96040830186615a69565b615af66060830185615a69565b82151560808301529695505050505050565b6001600160a01b038e1681526101a060208201819052600090615b2d9083018f615a79565b8281036040840152615b3f818f615a79565b9150508b60608301528a60808301528960a083015263ffffffff891660c08301528760e0830152615b74610100830188615a59565b615b82610120830187615a45565b841515610140830152615b99610160830185615a69565b615ba7610180830184615a69565b9e9d5050505050505050505050505050565b8315158152606060208201526000615bd46060830185615a79565b90508215156040830152949350505050565b604081526000615bf96040830185615a79565b8281036020840152613f698185615a79565b60c081526000615c1e60c0830189615a79565b8281036020840152615c308189615a79565b91505085604083015284606083015283608083015260ff831660a0830152979650505050505050565b60208082526016908201527527b7363c90383932b234b1ba34b7b71039b2b63632b960511b604082015260600190565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b60208082526018908201527f436f6e747261637420696e206c6f636b65642073746174650000000000000000604082015260600190565b602080825260139082015272556e617574686f72697a65642061636365737360681b604082015260600190565b6020808252601590820152742737ba1030b9b9b4b3b732b2103a379036b4b732b960591b604082015260600190565b6020808252600d908201526c2737ba1027232a1027bbb732b960991b604082015260600190565b60208082526018908201527f43616e6e6f742073706563696679203020616464726573730000000000000000604082015260600190565b838152826020820152606060408201526000613f696060830184615a79565b60ff83168152604081016144f86020830184615a45565b60008219821115615df157615df1615f3f565b500190565b60006001600160401b03808316818516808303821115615e1857615e18615f3f565b01949350505050565b600060ff821660ff84168060ff03821115615e3e57615e3e615f3f565b019392505050565b600082615e6157634e487b7160e01b81526012600452602481fd5b500490565b600061ffff80831681851681830481118215151615615e8757615e87615f3f565b02949350505050565b6000816000190483118215151615615eaa57615eaa615f3f565b500290565b600082821015615ec157615ec1615f3f565b500390565b600060ff821660ff841680821015615ee057615ee0615f3f565b90039392505050565b600181811c90821680615efd57607f821691505b60208210811415615f1e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415615f3857615f38615f3f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461544b57600080fdfea264697066735822122009122db78b2d0e2969ef00c6f71d116427c85452ac7ed4b95f83b5b86e931ca564736f6c63430008040033",
  deployedBytecode:
    "0x60806040526004361061031d5760003560e01c80637e0db31f116101ab578063b1d6c120116100f7578063da70d22711610095578063eacbc1f81161006f578063eacbc1f814610b84578063eb672ad114610ba4578063f83d08ba14610bc4578063f883ff4514610bd957600080fd5b8063da70d22714610ac9578063dd5f74de14610b02578063e5d00d2414610b2257600080fd5b8063bde959ef116100d1578063bde959ef14610a38578063befcf95f14610a58578063c942bdee14610a78578063cf30901214610a9857600080fd5b8063b1d6c120146109cb578063ba52583b146109eb578063bc4bc9c814610a0b57600080fd5b8063992d9b6311610164578063a4e474631161013e578063a4e4746314610961578063a69df4b514610974578063a8ec4c4214610989578063afc36984146109b657600080fd5b8063992d9b63146108fc5780639aff309f1461091c578063a26664521461093257600080fd5b80637e0db31f1461081f5780637e1bed5114610855578063880ad0af146108875780638da5cb5b1461089c578063927b6bbe146108bc57806396615137146108dc57600080fd5b80632d7a0bf31161026a5780635729bd4c116102235780635d69201f116101fd5780635d69201f146107a35780636b006899146107b65780636db9cf0d146107c95780637a529f48146107ff57600080fd5b80635729bd4c1461074e578063579dac2e1461076e5780635d62d9731461078357600080fd5b80632d7a0bf31461065c578063303109c41461068b57806335bc9546146106bc57806339292763146106dc57806345059cc4146106fc57806353a47bb71461071657600080fd5b8063150b7a02116102d757806318656182116102b1578063186561821461055857806321286a68146105d4578063230eb9c6146105f457806323448cf91461062657600080fd5b8063150b7a02146104ba578063155dd5ee146105185780631627540c1461053857600080fd5b80629207601461034d57806302c7f4761461036f57806304afd0381461038f5780630b102d1a146103b85780630b237869146103d857806313c5a0b51461040e57600080fd5b36610348573360009081526009602052604081208054349290610341908490615dde565b9091555050005b600080fd5b34801561035957600080fd5b5061036d610368366004615996565b610bf9565b005b34801561037b57600080fd5b5061036d61038a3660046158ad565b611211565b34801561039b57600080fd5b506103a560145481565b6040519081526020015b60405180910390f35b3480156103c457600080fd5b5061036d6103d3366004615691565b6113fc565b3480156103e457600080fd5b506103a56103f3366004615691565b6001600160a01b03166000908152600e602052604090205490565b34801561041a57600080fd5b506104756104293660046158ad565b60056020526000908152604090205460ff80821691610100810482169162010000820481169163010000008104821691600160201b82041690600160281b90046001600160401b031686565b6040805160ff9788168152958716602087015293861693850193909352908416606084015290921660808201526001600160401b0390911660a082015260c0016103af565b3480156104c657600080fd5b506104ff6104d53660046156c9565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b6040516001600160e01b031990911681526020016103af565b34801561052457600080fd5b5061036d6105333660046158ad565b611470565b34801561054457600080fd5b5061036d610553366004615691565b6115d3565b34801561056457600080fd5b506105c3610573366004615996565b60066020908152600092835260408084209091529082529020546001600160a01b0381169060ff600160a01b8204811691600160a81b8104821691600160b01b8204811691600160b81b90041685565b6040516103af959493929190615ac4565b3480156105e057600080fd5b506103a56105ef366004615762565b6116d7565b34801561060057600080fd5b5061061461060f366004615691565b611708565b6040516103af96959493929190615c0b565b34801561063257600080fd5b506103a5610641366004615691565b6001600160a01b03166000908152600d602052604090205490565b34801561066857600080fd5b5061067c610677366004615762565b611850565b6040516103af93929190615bb9565b34801561069757600080fd5b506018546106aa90610100900460ff1681565b60405160ff90911681526020016103af565b3480156106c857600080fd5b5061036d6106d7366004615996565b61190d565b3480156106e857600080fd5b5061036d6106f73660046158ad565b611b29565b34801561070857600080fd5b506018546106aa9060ff1681565b34801561072257600080fd5b50600154610736906001600160a01b031681565b6040516001600160a01b0390911681526020016103af565b34801561075a57600080fd5b506103a56107693660046158ad565b611dc9565b34801561077a57600080fd5b506016546103a5565b34801561078f57600080fd5b5061036d61079e3660046158ff565b611dea565b61036d6107b13660046158c5565b611edc565b61036d6107c4366004615821565b6121d1565b3480156107d557600080fd5b506103a56107e4366004615691565b6001600160a01b03166000908152600c602052604090205490565b34801561080b57600080fd5b50600b54610736906001600160a01b031681565b34801561082b57600080fd5b5061073661083a3660046158ad565b600f602052600090815260409020546001600160a01b031681565b34801561086157600080fd5b506015546108729063ffffffff1681565b60405163ffffffff90911681526020016103af565b34801561089357600080fd5b5061036d6123d6565b3480156108a857600080fd5b50600054610736906001600160a01b031681565b3480156108c857600080fd5b5061036d6108d73660046158ad565b6124d7565b3480156108e857600080fd5b5061036d6108f73660046159f7565b6127ed565b34801561090857600080fd5b506103a5610917366004615762565b612c3c565b34801561092857600080fd5b506103a560135481565b34801561093e57600080fd5b5061095261094d366004615762565b612c58565b6040516103af93929190615da8565b61036d61096f3660046158c5565b612d27565b34801561098057600080fd5b5061036d612ead565b34801561099557600080fd5b506103a56109a4366004615691565b60096020526000908152604090205481565b3480156109c257600080fd5b506017546103a5565b3480156109d757600080fd5b5061036d6109e63660046159f7565b612f24565b3480156109f757600080fd5b5061036d610a06366004615a2b565b613334565b348015610a1757600080fd5b506103a5610a263660046158ad565b60086020526000908152604090205481565b348015610a4457600080fd5b50610952610a53366004615762565b613374565b348015610a6457600080fd5b5061036d610a733660046158ad565b613390565b348015610a8457600080fd5b5061036d610a933660046157c1565b6134f8565b348015610aa457600080fd5b50600054610ab990600160a01b900460ff1681565b60405190151581526020016103af565b348015610ad557600080fd5b50610ae9610ae43660046158ad565b613544565b6040516103af9d9c9b9a99989796959493929190615b08565b348015610b0e57600080fd5b506103a5610b1d3660046158ad565b6136d8565b348015610b2e57600080fd5b50610b64610b3d366004615691565b600a6020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016103af565b348015610b9057600080fd5b5061036d610b9f3660046159b7565b6136e8565b348015610bb057600080fd5b506103a5610bbf36600461578d565b61377b565b348015610bd057600080fd5b5061036d6137c3565b348015610be557600080fd5b506103a5610bf4366004615762565b61383c565b600054600160a01b900460ff1615610c2c5760405162461bcd60e51b8152600401610c2390615cb7565b60405180910390fd5b6003600083815260046020819052604090912060080154610100900460ff1690811115610c6957634e487b7160e01b600052602160045260246000fd5b1480610caf57506004600083815260046020819052604090912060080154610100900460ff1690811115610cad57634e487b7160e01b600052602160045260246000fd5b145b610cfb5760405162461bcd60e51b815260206004820152601860248201527f4e6f7420616e206163746976652070726564696374696f6e00000000000000006044820152606401610c23565b60008181526006602090815260408083208584529091529020546001600160a01b03163314610d585760405162461bcd60e51b81526020600482015260096024820152682737ba1036b4b732b960b91b6044820152606401610c23565b6000818152600660209081526040808320858452909152902054600160b81b900460ff1615610dc15760405162461bcd60e51b8152602060048201526015602482015274135a5b995c88185b1c9958591e481cd95d1d1b1959605a1b6044820152606401610c23565b610dce610e106006615e66565b600083815260046020526040902060050154610dee9161ffff1690615dde565b4211610e325760405162461bcd60e51b8152602060048201526013602482015272139bdd0818dbdbdb195908191bdddb881e595d606a1b6044820152606401610c23565b6003600083815260046020819052604090912060080154610100900460ff1690811115610e6f57634e487b7160e01b600052602160045260246000fd5b14156110b057600082815260046020526040902060088101805461ff00191661040017905560070154158015610eae5750601854610100900460ff1615155b15610eeb576001601860018282829054906101000a900460ff16610ed29190615ec6565b92506101000a81548160ff021916908360ff1602179055505b610ef482613858565b6000838152600460205260409020600801805463ff00000019166301000000836002811115610f3357634e487b7160e01b600052602160045260246000fd5b0217905550610f4182613893565b6000838152600460205260409020600801805464ff000000001916600160201b836002811115610f8157634e487b7160e01b600052602160045260246000fd5b02179055506001600083815260046020526040902060080154600160201b900460ff166002811115610fc357634e487b7160e01b600052602160045260246000fd5b141561100c576000828152600460209081526040808320546001600160a01b0316835260109091528120600201805460019290611001908490615dde565b9091555061104a9050565b6000828152600460209081526040808320546001600160a01b0316835260109091528120600301805460019290611044908490615dde565b90915550505b6000828152600460208181526040808420546001600160a01b031684526010909152822001805460019290611080908490615dde565b90915550506000828152600460205260409020546110a7906001600160a01b0316836138c4565b6110b0826139a2565b6000806110bd8484613a95565b90506001600085815260046020526040902060080154600160201b900460ff1660028111156110fc57634e487b7160e01b600052602160045260246000fd5b141561115f5760155460008581526005602090815260408083205460049092529091206007015460649263ffffffff169161114891600160281b9091046001600160401b031690615e90565b6111529190615e90565b61115c9190615e46565b91505b60008381526006602090815260408083208784528252808320546001600160a01b0316835260099091528120805484929061119b908490615dde565b90915550506000838152600660209081526040808320878452825291829020805460ff60b81b1916600160b81b1790558151848152831515918101919091528491869133917fda5931ff2d4d1f9b991a8582802ed53580b6d6023225eee1373db2428622b786910160405180910390a450505050565b60008181526004602052604090205481906001600160a01b031633146112495760405162461bcd60e51b8152600401610c2390615c59565b600082815260056020526040902054829060ff16156112a55760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb88185b1c9958591e481b5a5b995960421b6044820152606401610c23565b6001600084815260046020819052604090912060080154610100900460ff16908111156112e257634e487b7160e01b600052602160045260246000fd5b14156113305760405162461bcd60e51b815260206004820152601d60248201527f50726564696374696f6e20616c72656164792077697468647261776e210000006044820152606401610c23565b6000838152600460205260409020600801805461ff001916610100179055601661135b600185615eaf565b8154811061137957634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101829055601354858352600482526040808420546001600160a01b0316845260099092529082208054919290916113bd908490615dde565b909155505060405133815283907fd024803ecdc257de5f7a60c3ac511ab249f5908eef8d4775f5801395fccc1ee69060200160405180910390a2505050565b6000546001600160a01b031633146114265760405162461bcd60e51b8152600401610c2390615cee565b806001600160a01b03811661144d5760405162461bcd60e51b8152600401610c2390615d71565b50600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600054600160a01b900460ff161561149a5760405162461bcd60e51b8152600401610c2390615cb7565b336000908152600960205260409020548111156114ee5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152606401610c23565b336000908152600960205260408120805483929061150d908490615eaf565b9091555050604051600090339083908381818185875af1925050503d8060008114611554576040519150601f19603f3d011682016040523d82523d6000602084013e611559565b606091505b5050905080611587573360009081526009602052604081208054849290611581908490615dde565b90915550505b33600081815260096020908152604091829020548251868152918201527fdf273cb619d95419a9cd0ec88123a0538c85064229baa6363788f743fff90deb910160405180910390a25050565b6000546001600160a01b031633146115fd5760405162461bcd60e51b8152600401610c2390615cee565b806001600160a01b0381166116245760405162461bcd60e51b8152600401610c2390615d71565b6000546001600160a01b03838116911614156116825760405162461bcd60e51b815260206004820181905260248201527f4f776e657220616464726573732063616e2774206265206e6f6d696e617465646044820152606401610c23565b600180546001600160a01b0319166001600160a01b0384169081179091556040519081527f4b8d098f259d8e813c68a57f09712ee062e342e1c2bc9063f1827c45b4900a999060200160405180910390a15050565b601160205281600052604060002081815481106116f357600080fd5b90600052602060002001600091509150505481565b60106020526000908152604090208054819061172390615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461174f90615ee9565b801561179c5780601f106117715761010080835404028352916020019161179c565b820191906000526020600020905b81548152906001019060200180831161177f57829003601f168201915b5050505050908060010180546117b190615ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546117dd90615ee9565b801561182a5780601f106117ff5761010080835404028352916020019161182a565b820191906000526020600020905b81548152906001019060200180831161180d57829003601f168201915b50505050600283015460038401546004850154600f909501549394919390925060ff1686565b60076020908152600092835260408084209091529082529020805460018201805460ff909216929161188190615ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546118ad90615ee9565b80156118fa5780601f106118cf576101008083540402835291602001916118fa565b820191906000526020600020905b8154815290600101906020018083116118dd57829003601f168201915b5050506002909301549192505060ff1683565b600081815260066020908152604080832085845290915290205482908290600160a01b900460ff1615156001146119565760405162461bcd60e51b8152600401610c2390615d1b565b6000838152600f602052604090205483906001600160a01b0316331461198e5760405162461bcd60e51b8152600401610c2390615d4a565b6002600086815260046020819052604090912060080154610100900460ff16908111156119cb57634e487b7160e01b600052602160045260246000fd5b14611a185760405162461bcd60e51b815260206004820152601760248201527f50726564696374696f6e206e6f742072656a65637465640000000000000000006044820152606401610c23565b6000848152600660209081526040808320888452909152902054600160b81b900460ff1615611a895760405162461bcd60e51b815260206004820152601c60248201527f5374616b696e672066656520616c726561647920726566756e646564000000006044820152606401610c23565b60008481526006602090815260408083208884528252808320805460ff60b81b1916600160b81b179055601454878452600f8352818420546001600160a01b0316845260099092528220805491929091611ae4908490615dde565b90915550611af3905084613f72565b6040518490869033907f79a2ae576a397cf36ec68b4fce2e422f55312f76bd758c8f8a945fc1ba7bc50a90600090a45050505050565b600054600160a01b900460ff1615611b535760405162461bcd60e51b8152600401610c2390615cb7565b6004600082815260046020819052604090912060080154610100900460ff1690811115611b9057634e487b7160e01b600052602160045260246000fd5b14611bd85760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb881b9bdd0818dbdb98db1d59195960421b6044820152606401610c23565b33600090815260076020908152604080832084845290915290205460ff161515600114611c475760405162461bcd60e51b815260206004820152601960248201527f4e6f20707572636861736520686973746f727920666f756e64000000000000006044820152606401610c23565b33600090815260076020908152604080832084845290915290206002015460ff1615611ca85760405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e481c99599d5b99195960821b6044820152606401610c23565b6002600082815260046020526040902060080154600160201b900460ff166002811115611ce557634e487b7160e01b600052602160045260246000fd5b14611d235760405162461bcd60e51b815260206004820152600e60248201526d283932b234b1ba34b7b7103bb7b760911b6044820152606401610c23565b60008181526004602090815260408083206007015433845260099092528220805491929091611d53908490615dde565b90915550503360008181526007602081815260408084208685528252808420600201805460ff19166001179055600490915291829020015490518392917f84b8af1d735f5816c4c2b28d3bfe238ce86550a865d88cdb8961bffa236f758791611dbe91815260200190565b60405180910390a350565b60178181548110611dd957600080fd5b600091825260209091200154905081565b60008781526004602052604090205487906001600160a01b03163314611e225760405162461bcd60e51b8152600401610c2390615c59565b600088815260056020526040902054889060ff1615611e7e5760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb88185b1c9958591e481b5a5b995960421b6044820152606401610c23565b611e8d89898989898989614174565b88336001600160a01b03167f29eb68a6f27d76e328e331a797bdaa1e6475a3d1902ab7311b81d1ef01b701668a8a604051611ec9929190615be6565b60405180910390a3505050505050505050565b600054600160a01b900460ff1615611f065760405162461bcd60e51b8152600401610c2390615cb7565b8142600460008381526020019081526020016000206004015411611f645760405162461bcd60e51b8152602060048201526015602482015274115d995b9d08185b1c9958591e481cdd185c9d1959605a1b6044820152606401610c23565b826003600082815260046020819052604090912060080154610100900460ff1690811115611fa257634e487b7160e01b600052602160045260246000fd5b14611fef5760405162461bcd60e51b815260206004820152601d60248201527f50726564696374696f6e2063757272656e746c7920696e6163746976650000006044820152606401610c23565b60008481526004602052604090206007015434101561209a57600084815260046020526040902060070154612025903490615eaf565b3360009081526009602052604090205410156120535760405162461bcd60e51b8152600401610c2390615c89565b600084815260046020526040902060070154612070903490615eaf565b336000908152600960205260408120805490919061208f908490615eaf565b909155506120e59050565b6000848152600460205260408120600701546120b69034615eaf565b905080156120e35733600090815260096020526040812080548392906120dd908490615dde565b90915550505b505b6120ed61430d565b3360009081526007602090815260408083208784528252909120805460ff191660019081178255855161212893919092019190860190615369565b50600084815260056020819052604090912080546001929061215b908490600160281b90046001600160401b0316615df6565b82546001600160401b039182166101009390930a928302919092021990911617905550336000818152600c602090815260408083208054600181018255908452918320909101879055518692917ff1d2f3e12a47cafdb98595442e29b70eebb267a952e336890afce9fc09dc2c0091a350505050565b600054600160a01b900460ff16156121fb5760405162461bcd60e51b8152600401610c2390615cb7565b60648261ffff161161224f5760405162461bcd60e51b815260206004820152601a60248201527f4f6464206d7573742062652067726561746572207468616e20310000000000006044820152606401610c23565b6013543410156122c9576122656013543461449c565b3360009081526009602052604090205410156122935760405162461bcd60e51b8152600401610c2390615c89565b61229f6013543461449c565b33600090815260096020526040812080549091906122be908490615eaf565b909155506123069050565b60006122d73460135461449c565b905080156123045733600090815260096020526040812080548392906122fe908490615dde565b90915550505b505b612314600280546001019055565b600061231f60025490565b905061233081888888888888614174565b601680546001810182556000919091527fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b51242890181905561236d6144ff565b336000818152600d6020908152604080832080546001810182559084529190922001839055518291907f47c517a39d8f6695dfd038c970ccad21662d57de634e3bd8ca9cde91a5e81c7f906123c5908b908b90615be6565b60405180910390a350505050505050565b6001546001600160a01b031661242e5760405162461bcd60e51b815260206004820152601760248201527f4e6f6d696e61746564206f776e6572206e6f74207365740000000000000000006044820152606401610c23565b6001546001600160a01b031633146124805760405162461bcd60e51b81526020600482015260156024820152742737ba1030903737b6b4b730ba32b21037bbb732b960591b6044820152606401610c23565b600154600080546001600160a01b0319166001600160a01b0390921691821790556040519081527f04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc686163906020015b60405180910390a1565b600054600160a01b900460ff16156125015760405162461bcd60e51b8152600401610c2390615cb7565b60008181526004602052604090205481906001600160a01b031633146125395760405162461bcd60e51b8152600401610c2390615c59565b6004600083815260046020819052604090912060080154610100900460ff169081111561257657634e487b7160e01b600052602160045260246000fd5b146125be5760405162461bcd60e51b8152602060048201526018602482015277141c99591a58dd1a5bdb881b9bdd0818dbdb98db1d59195960421b6044820152606401610c23565b60008281526004602052604090206008015462010000900460ff161561261b5760405162461bcd60e51b815260206004820152601260248201527122b0b93734b733b9903bb4ba34323930bbb760711b6044820152606401610c23565b6001600083815260046020526040902060080154600160201b900460ff16600281111561265857634e487b7160e01b600052602160045260246000fd5b146126985760405162461bcd60e51b815260206004820152601060248201526f50726564696374696f6e206c6f73742160801b6044820152606401610c23565b6015546000838152600560209081526040808320546004909252822060070154919260649263ffffffff909116916126e191600160281b9091046001600160401b031690615e90565b6126eb9190615e90565b6126f59190615e46565b600084815260056020526040812054919250906127159060ff1683615e90565b60008581526005602090815260408083205460049092528220600701549293509091839161275491600160281b9091046001600160401b031690615e90565b61275e9190615eaf565b600086815260046020908152604080832060088101805462ff0000191662010000179055546001600160a01b0316835260099091528120805492935083929091906127aa908490615dde565b9091555050604051818152859033907fc494369ed300ae486cff01b6b0c95c080fbffa52fac4c7187df8ba4f10f2044a9060200160405180910390a35050505050565b824260046000838152602001908152602001600020600401541161284b5760405162461bcd60e51b8152602060048201526015602482015274115d995b9d08185b1c9958591e481cdd185c9d1959605a1b6044820152606401610c23565b6000838152600f602052604090205483906001600160a01b031633146128835760405162461bcd60e51b8152600401610c2390615d4a565b600084815260066020908152604080832088845290915290205485908590600160a01b900460ff1615156001146128cc5760405162461bcd60e51b8152600401610c2390615d1b565b8460ff16600114806128e157508460ff166002145b6129295760405162461bcd60e51b815260206004820152601960248201527824b73b30b634b2103b30b634b230ba34b7b71037b83a34b7b760391b6044820152606401610c23565b6000808781526006602090815260408083208b8452909152902054600160a81b900460ff16600281111561296d57634e487b7160e01b600052602160045260246000fd5b146129ba5760405162461bcd60e51b815260206004820152601960248201527f4f70656e696e6720766f746520616c72656164792063617374000000000000006044820152606401610c23565b8460ff1660011415612a2f5760008681526006602090815260408083208a84528252808320805460ff60a81b1916600160a81b179055600590915290208054600191908290612a12908290610100900460ff16615e21565b92506101000a81548160ff021916908360ff160217905550612a96565b60008681526006602090815260408083208a84528252808320805460ff60a81b1916600160a91b17905560059091529020805460019190600290612a7d90849062010000900460ff16615e21565b92506101000a81548160ff021916908360ff1602179055505b600087815260056020526040902054610100900460ff1660031415612b2a576000878152600460205260409020600801805461ff001916610300179055612adc876146fe565b600087815260046020526040902060070154612b2a576001601860018282829054906101000a900460ff16612b119190615e21565b92506101000a81548160ff021916908360ff1602179055505b60008781526005602052604090205462010000900460ff1660031415612b9f576000878152600460205260409020600801805461ff0019166102001790556016612b75600189615eaf565b81548110612b9357634e487b7160e01b600052603260045260246000fd5b60009182526020822001555b601354600090612bb190600590615e46565b33600090815260096020526040812080549293508392909190612bd5908490615dde565b90915550506000888152600460205260409081902060080154905188918a917fd29ae96de2bbecb897474e0adfca6e3cbdeb915f288e6746027ddc09fd2d08bb91612c2a918b91610100900460ff1690615dc7565b60405180910390a35050505050505050565b600c60205281600052604060002081815481106116f357600080fd5b60126020528160005260406000208181548110612c7457600080fd5b906000526020600020906003020160009150915050806000015490806001015490806002018054612ca490615ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054612cd090615ee9565b8015612d1d5780601f10612cf257610100808354040283529160200191612d1d565b820191906000526020600020905b815481529060010190602001808311612d0057829003601f168201915b5050505050905083565b600054600160a01b900460ff1615612d515760405162461bcd60e51b8152600401610c2390615cb7565b601454341015612dcf5734601454612d699190615eaf565b336000908152600960205260409020541015612d975760405162461bcd60e51b8152600401610c2390615c89565b34601454612da59190615eaf565b3360009081526009602052604081208054909190612dc4908490615eaf565b90915550612e0e9050565b600060145434612ddf9190615eaf565b90508015612e0c573360009081526009602052604081208054839290612e06908490615dde565b90915550505b505b601654612e515760405162461bcd60e51b81526020600482015260116024820152706d696e696e6720706f6f6c20656d70747960781b6044820152606401610c23565b612e59614753565b612e6282614945565b6000612e6e8383614c17565b604051338152909150839082907fbe10ae21ca4fb40e188c785df2f785606e4a921db8252b99d8644fc1e78422499060200160405180910390a3505050565b6000546001600160a01b03163314612ed75760405162461bcd60e51b8152600401610c2390615cee565b6000805460ff60a01b1916908190556040517f34b31e61a2baf88ffda83bb8d6443ee3dc3bff0ac4bef8f406d7fd16c7d82e23916124cd91600160a01b90910460ff161515815260200190565b826003600082815260046020819052604090912060080154610100900460ff1690811115612f6257634e487b7160e01b600052602160045260246000fd5b14612faf5760405162461bcd60e51b815260206004820152601d60248201527f50726564696374696f6e2063757272656e746c7920696e6163746976650000006044820152606401610c23565b6000838152600f602052604090205483906001600160a01b03163314612fe75760405162461bcd60e51b8152600401610c2390615d4a565b600084815260066020908152604080832088845290915290205485908590600160a01b900460ff1615156001146130305760405162461bcd60e51b8152600401610c2390615d1b565b8460ff166001148061304557508460ff166002145b61308d5760405162461bcd60e51b815260206004820152601960248201527824b73b30b634b2103b30b634b230ba34b7b71037b83a34b7b760391b6044820152606401610c23565b61309a610e106002615e66565b6000888152600460205260409020600501546130ba9161ffff1690615dde565b42116131085760405162461bcd60e51b815260206004820152601b60248201527f43616e2774206361737420636c6f73696e6720766f7465206e6f7700000000006044820152606401610c23565b6000808781526006602090815260408083208b8452909152902054600160b01b900460ff16600281111561314c57634e487b7160e01b600052602160045260246000fd5b146131995760405162461bcd60e51b815260206004820152601960248201527f436c6f73696e6720766f746520616c72656164792063617374000000000000006044820152606401610c23565b6131a6610e106006615e66565b6000888152600460205260409020600501546131c69161ffff1690615dde565b42106132145760405162461bcd60e51b815260206004820152601a60248201527f566f74652077696e646f7720706572696f6420657870697265640000000000006044820152606401610c23565b8460ff166001141561328c5760008681526006602090815260408083208a84528252808320805460ff60b01b1916600160b01b1790556005909152902080546001919060039061326f9084906301000000900460ff16615e21565b92506101000a81548160ff021916908360ff1602179055506132f4565b60008681526006602090815260408083208a84528252808320805460ff60b01b1916600160b11b179055600590915290208054600191906004906132db908490600160201b900460ff16615e21565b92506101000a81548160ff021916908360ff1602179055505b6132fd86613f72565b60405160ff86168152869088907fcdc90f517e1a5ca6dd066d189214dfa975686ab515a2e100d0075f6a7bc1f457906020016123c5565b6000546001600160a01b0316331461335e5760405162461bcd60e51b8152600401610c2390615cee565b6018805460ff191660ff92909216919091179055565b600e6020528160005260406000208181548110612c7457600080fd5b600054600160a01b900460ff16156133ba5760405162461bcd60e51b8152600401610c2390615cb7565b336000908152600a602052604090205481111561340e5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152606401610c23565b336000908152600a602052604090206002015442116134655760405162461bcd60e51b815260206004820152601360248201527220b9b9b2ba399039ba34b63610333937bd32b760691b6044820152606401610c23565b336000908152600a602052604081208054839290613484908490615eaf565b909155505033600090815260096020526040812080548392906134a8908490615dde565b9091555050336000818152600a6020908152604091829020548251858152918201527f675ef43c7a08d92fcd9cf2d6980839fcfaab5cee86d6567823385cf88095d4e2910160405180910390a250565b336000908152601060209081526040909120835161351892850190615369565b50336000908152601060209081526040909120825161353f92600190920191840190615369565b505050565b600460205260009081526040902080546001820180546001600160a01b03909216929161357090615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461359c90615ee9565b80156135e95780601f106135be576101008083540402835291602001916135e9565b820191906000526020600020905b8154815290600101906020018083116135cc57829003601f168201915b5050505050908060020180546135fe90615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461362a90615ee9565b80156136775780601f1061364c57610100808354040283529160200191613677565b820191906000526020600020905b81548152906001019060200180831161365a57829003601f168201915b505050600384015460048501546005860154600687015460078801546008909801549697939692955090935063ffffffff16919060ff80821691610100810482169162010000820481169163010000008104821691600160201b909104168d565b60168181548110611dd957600080fd5b6000546001600160a01b031633146137125760405162461bcd60e51b8152600401610c2390615cee565b601383905560148290556015805463ffffffff191663ffffffff83169081179091556040805185815260208101859052908101919091527feee896e21d1e33c3657aa10b14a193ac2ce297c8843345cb849ac135b7b5bfd09060600160405180910390a1505050565b6001600160a01b038216600090815260106020526040812060050160ff8316600a81106137b857634e487b7160e01b600052603260045260246000fd5b015490505b92915050565b6000546001600160a01b031633146137ed5760405162461bcd60e51b8152600401610c2390615cee565b6000805460ff60a01b1916600160a01b908117918290556040517f34b31e61a2baf88ffda83bb8d6443ee3dc3bff0ac4bef8f406d7fd16c7d82e23926124cd92900460ff161515815260200190565b600d60205281600052604060002081815481106116f357600080fd5b60008181526005602052604081205460ff620100008204811661010090920416111561388657506001919050565b506002919050565b919050565b60008181526005602052604081205460ff600160201b82048116630100000090920416111561388657506001919050565b6001600160a01b0382166000908152601060205260409020600f015460ff16600a141561390f576001600160a01b0382166000908152601060205260409020600f01805460ff191690555b6001600160a01b0382166000908152601060205260409020600f81015460ff1690829060050182600a811061395457634e487b7160e01b600052603260045260246000fd5b01556001600160a01b0383166000908152601060205260408120600f0180546001929061398590849060ff16615e21565b92506101000a81548160ff021916908360ff160217905550505050565b600081815260086020526040902054601780546139c190600190615eaf565b815481106139df57634e487b7160e01b600052603260045260246000fd5b906000526020600020015460178281548110613a0b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200181905550806008600060178481548110613a3f57634e487b7160e01b600052603260045260246000fd5b90600052602060002001548152602001908152602001600020819055506017805480613a7b57634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590555050565b60008181526006602090815260408083208584528252808320815160a08101835281546001600160a01b038116825260ff600160a01b8204811615159583019590955285949193840191600160a81b909104166002811115613b0757634e487b7160e01b600052602160045260246000fd5b6002811115613b2657634e487b7160e01b600052602160045260246000fd5b81528154602090910190600160b01b900460ff166002811115613b5957634e487b7160e01b600052602160045260246000fd5b6002811115613b7857634e487b7160e01b600052602160045260246000fd5b81529054600160b81b900460ff161515602091820152600086815260048252604080822081516101a0810190925280546001600160a01b0316825260018101805495965092949193909290840191613bcf90615ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054613bfb90615ee9565b8015613c485780601f10613c1d57610100808354040283529160200191613c48565b820191906000526020600020905b815481529060010190602001808311613c2b57829003601f168201915b50505050508152602001600282018054613c6190615ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054613c8d90615ee9565b8015613cda5780601f10613caf57610100808354040283529160200191613cda565b820191906000526020600020905b815481529060010190602001808311613cbd57829003601f168201915b505050918352505060038281015460208301526004830154604083015260058301546060830152600683015463ffffffff166080830152600783015460a0830152600883015460c09092019160ff1690811115613d4757634e487b7160e01b600052602160045260246000fd5b6003811115613d6657634e487b7160e01b600052602160045260246000fd5b81526020016008820160019054906101000a900460ff166004811115613d9c57634e487b7160e01b600052602160045260246000fd5b6004811115613dbb57634e487b7160e01b600052602160045260246000fd5b8152600882015460ff6201000082048116151560208401526040909201916301000000909104166002811115613e0157634e487b7160e01b600052602160045260246000fd5b6002811115613e2057634e487b7160e01b600052602160045260246000fd5b81526020016008820160049054906101000a900460ff166002811115613e5657634e487b7160e01b600052602160045260246000fd5b6002811115613e7557634e487b7160e01b600052602160045260246000fd5b81525050905060008161016001516002811115613ea257634e487b7160e01b600052602160045260246000fd5b83604001516002811115613ec657634e487b7160e01b600052602160045260246000fd5b148015613f1957508161018001516002811115613ef357634e487b7160e01b600052602160045260246000fd5b83606001516002811115613f1757634e487b7160e01b600052602160045260246000fd5b145b15613f595760145483516001600160a01b031660009081526009602052604081208054909190613f4a908490615dde565b9091555060019150613f699050565b613f698360000151601454614ece565b95945050505050565b6000818152600f602052604090205481906001600160a01b03163314613faa5760405162461bcd60e51b8152600401610c2390615d4a565b6000828152600f60205260409020546001600160a01b031680613fdf5760405162461bcd60e51b8152600401610c2390615d71565b600b546001600160a01b0316806140085760405162461bcd60e51b8152600401610c2390615d71565b6000848152600f60205260409081902054600b549151632142170760e11b81523060048201526001600160a01b0391821660248201819052604482018890529291909116906342842e0e90606401600060405180830381600087803b15801561407057600080fd5b505af1158015614084573d6000803e3d6000fd5b5050600b546040516331a9108f60e11b8152600481018990523393506001600160a01b039091169150636352211e9060240160206040518083038186803b1580156140ce57600080fd5b505afa1580156140e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061410691906156ad565b6001600160a01b0316146141525760405162461bcd60e51b81526020600482015260136024820152721b999d081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610c23565b505050600091825250600f6020526040902080546001600160a01b0319169055565b83836141808282615006565b6141cc5760405162461bcd60e51b815260206004820152601e60248201527f446f65736e2774206d6565742074696d6520726571756972656d656e747300006044820152606401610c23565b600089815260046020908152604090912080546001600160a01b031916331781558951614201926001909201918b0190615369565b5060008981526004602090815260409091208851614227926002909201918a0190615369565b50600089815260046020819052604090912042600382015590810187905560058101869055600601805463ffffffff191661ffff8616179055614269336150b9565b1561428757600089815260046020526040902060070183905561429a565b6000898152600460205260408120600701555b6000898152600460205260409020600701546143025760185460ff80821661010090920416106143025760405162461bcd60e51b8152602060048201526013602482015272467265652071756f746120757365642075702160681b6044820152606401610c23565b505050505050505050565b336000908152600c602052604090205461432357565b60005b336000908152600c602052604090205481101561445a57336000908152600c6020526040812080548390811061436c57634e487b7160e01b600052603260045260246000fd5b60009182526020822001549150600082815260046020526040902060080154600160201b900460ff1660028111156143b457634e487b7160e01b600052602160045260246000fd5b14806143fa57506002600082815260046020526040902060080154600160201b900460ff1660028111156143f857634e487b7160e01b600052602160045260246000fd5b145b156144475733600090815260076020908152604080832084845290915290206002015460ff1661444757336000908152601160209081526040822080546001810182559083529120018190555b508061445281615f24565b915050614326565b50336000908152601160209081526040808320600c909252909120815461448192906153ed565b5033600090815260116020526040812061449a9161542d565b565b6000828211156144ee5760405162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f7700006044820152606401610c23565b6144f88284615eaf565b9392505050565b336000908152600d602052604090205461451557565b60005b336000908152600d60205260409020548110156146d757336000908152600d6020526040812080548390811061455e57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015490506001600082815260046020819052604090912060080154610100900460ff16908111156145a957634e487b7160e01b600052602160045260246000fd5b14806145ef57506002600082815260046020819052604090912060080154610100900460ff16908111156145ed57634e487b7160e01b600052602160045260246000fd5b145b156145fa57506146c5565b60008082815260046020526040902060080154600160201b900460ff16600281111561463657634e487b7160e01b600052602160045260246000fd5b148061467c57506001600082815260046020526040902060080154600160201b900460ff16600281111561467a57634e487b7160e01b600052602160045260246000fd5b145b156146c35760008181526004602052604090206008015462010000900460ff166146c357336000908152601160209081526040822080546001810182559083529120018190555b505b806146cf81615f24565b915050614518565b50336000908152601160209081526040808320600d909252909120815461448192906153ed565b601780546001818101835560008390527fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c1590910183905590546147419190615eaf565b60009182526008602052604090912055565b336000908152600e602052604090205461476957565b60005b336000908152600e602052604090205481101561490557336000908152600e602052604081208054839081106147b257634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160405180606001604052908160008201548152602001600182015481526020016002820180546147ef90615ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461481b90615ee9565b80156148685780601f1061483d57610100808354040283529160200191614868565b820191906000526020600020905b81548152906001019060200180831161484b57829003601f168201915b505050919092525050506020818101516000908152600682526040808220845183529092522054909150600160b81b900460ff166148f257336000908152601260209081526040808320805460018181018355918552938390208551600390950201938455848301519084015583015180518493926148ee926002850192910190615369565b5050505b50806148fd81615f24565b91505061476c565b50336000908152601260209081526040808320600e909252909120815461492c929061544e565b5033600090815260126020526040812061449a916154d4565b600b546001600160a01b03168061496e5760405162461bcd60e51b8152600401610c2390615d71565b600b546040516331a9108f60e11b81526004810184905233916001600160a01b031690636352211e9060240160206040518083038186803b1580156149b257600080fd5b505afa1580156149c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906149ea91906156ad565b6001600160a01b03161415614b3257600b54604051632142170760e11b8152336004820152306024820152604481018490526001600160a01b03909116906342842e0e90606401600060405180830381600087803b158015614a4b57600080fd5b505af1158015614a5f573d6000803e3d6000fd5b5050600b546040516331a9108f60e11b8152600481018690523093506001600160a01b039091169150636352211e9060240160206040518083038186803b158015614aa957600080fd5b505afa158015614abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614ae191906156ad565b6001600160a01b031614614b2d5760405162461bcd60e51b81526020600482015260136024820152721b999d081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610c23565b614bf6565b600b546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e9060240160206040518083038186803b158015614b7657600080fd5b505afa158015614b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190614bae91906156ad565b6001600160a01b031614614bf65760405162461bcd60e51b815260206004820152600f60248201526e111bd95cdb89dd081bdddb88139195608a1b6044820152606401610c23565b506000908152600f6020526040902080546001600160a01b03191633179055565b6000806003546001614c299190615dde565b9050601660035481548110614c4e57634e487b7160e01b600052603260045260246000fd5b906000526020600020015460001480614c92575060008181526004602081905260409091200154614c82610e106002615e66565b614c909061ffff1642615dde565b115b15614cb557614ca2600354615230565b6003819055614cb2906001615dde565b90505b60165460035410614d085760405162461bcd60e51b815260206004820152601b60248201527f4d696e696e6720706f6f6c2063757272656e746c7920656d70747900000000006044820152606401610c23565b614d15610e106004615e66565b600082815260046020526040902060030154614d359161ffff1690615dde565b421015614d845760405162461bcd60e51b815260206004820152601860248201527f4e6f7420617661696c61626c6520666f72206d696e696e6700000000000000006044820152606401610c23565b600084815260066020908152604080832084845282528083208054600160a01b6001600160a81b03199091163360ff60a01b19161717905560059091528120805460019290614dd790849060ff16615e21565b825460ff9182166101009390930a928302919092021990911617905550336000908152600e60209081526040808320815160608101835285815280840189815292810188815282546001818101855593875295859020825160039097020195865592519185019190915590518051919392614e5a92600285019290910190615369565b505050600081815260056020819052604090912054829160ff9091161415614ec657601660035481548110614e9f57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009055600160036000828254614ec09190615dde565b90915550505b949350505050565b816001600160a01b038116614ef55760405162461bcd60e51b8152600401610c2390615d71565b6001600160a01b0383166000908152600a602052604081208054849290614f1d908490615dde565b90915550506001600160a01b0383166000908152600a6020526040902060010154614f8357614f6242614f5d614f566018610e10615295565b601e615295565b61530a565b6001600160a01b0384166000908152600a6020526040902060020155614fc4565b614f93614f566018610e10615295565b6001600160a01b0384166000908152600a602052604081206002018054909190614fbe908490615dde565b90915550505b6001600160a01b0383166000908152600a60205260408120426001808301919091556003909101805491929091614ffc908490615dde565b9091555050505050565b60008282116150575760405162461bcd60e51b815260206004820152601d60248201527f456e642074696d65206c657373207468616e2073746172742074696d650000006044820152606401610c23565b8261506942614f5d6008610e10615295565b1180615084575061508142614f5d6018610e10615295565b83115b806150a357506150976018610e10615295565b6150a1838561449c565b115b156150b0575060006137bd565b50600192915050565b6001600160a01b038116600090815260106020526040812060040154600a11156150e557506000919050565b6127106000805b6001600160a01b0385166000526010602052600a81101561520f5760016001600160a01b03861660009081526010602052604081206004919060050184600a811061514757634e487b7160e01b600052603260045260246000fd5b01548152602081019190915260400160002060080154600160201b900460ff16600281111561518657634e487b7160e01b600052602160045260246000fd5b14156151fd576001600160a01b03851660009081526010602052604081206151f09160049160050184600a81106151cd57634e487b7160e01b600052603260045260246000fd5b0154815260208101919091526040016000206006015463ffffffff16600a615295565b6151fa9083615dde565b91505b8061520781615f24565b9150506150ec565b508161ffff16811115615226575060019392505050565b5060009392505050565b60008061523e836001615dde565b90505b6016548110156137bd576016818154811061526c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154600014615283576137bd565b61528e600182615dde565b9050615241565b6000826152a4575060006137bd565b60006152b08385615e90565b9050826152bd8583615e46565b146144f85760405162461bcd60e51b815260206004820181905260248201527f536166654d6174683a6d756c7469706c69636174696f6e206f766572666c6f776044820152606401610c23565b6000806153178385615dde565b9050838110156144f85760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610c23565b82805461537590615ee9565b90600052602060002090601f01602090048101928261539757600085556153dd565b82601f106153b057805160ff19168380011785556153dd565b828001600101855582156153dd579182015b828111156153dd5782518255916020019190600101906153c2565b506153e99291506154f5565b5090565b8280548282559060005260206000209081019282156153dd5760005260206000209182015b828111156153dd578254825591600101919060010190615412565b508054600082559060005260206000209081019061544b91906154f5565b50565b8280548282559060005260206000209060030281019282156154c85760005260206000209160030282015b828111156154c8578282600082015481600001556001820154816001015560028201816002019080546154ab90615ee9565b6154b692919061550a565b50505091600301919060030190615479565b506153e9929150615584565b508054600082556003029060005260206000209081019061544b9190615584565b5b808211156153e957600081556001016154f6565b82805461551690615ee9565b90600052602060002090601f01602090048101928261553857600085556153dd565b82601f1061554957805485556153dd565b828001600101855582156153dd57600052602060002091601f01602090048201828111156153dd578254825591600101919060010190615412565b808211156153e9576000808255600182018190556155a560028301826155ae565b50600301615584565b5080546155ba90615ee9565b6000825580601f106155ca575050565b601f01602090049060005260206000209081019061544b91906154f5565b600082601f8301126155f8578081fd5b81356001600160401b038082111561561257615612615f6b565b604051601f8301601f19908116603f0116810190828211818310171561563a5761563a615f6b565b81604052838152866020858801011115615652578485fd5b8360208701602083013792830160200193909352509392505050565b803561ffff8116811461388e57600080fd5b803560ff8116811461388e57600080fd5b6000602082840312156156a2578081fd5b81356144f881615f81565b6000602082840312156156be578081fd5b81516144f881615f81565b6000806000806000608086880312156156e0578081fd5b85356156eb81615f81565b945060208601356156fb81615f81565b93506040860135925060608601356001600160401b038082111561571d578283fd5b818801915088601f830112615730578283fd5b81358181111561573e578384fd5b89602082850101111561574f578384fd5b9699959850939650602001949392505050565b60008060408385031215615774578182fd5b823561577f81615f81565b946020939093013593505050565b6000806040838503121561579f578182fd5b82356157aa81615f81565b91506157b860208401615680565b90509250929050565b600080604083850312156157d3578182fd5b82356001600160401b03808211156157e9578384fd5b6157f5868387016155e8565b9350602085013591508082111561580a578283fd5b50615817858286016155e8565b9150509250929050565b60008060008060008060c08789031215615839578081fd5b86356001600160401b038082111561584f578283fd5b61585b8a838b016155e8565b97506020890135915080821115615870578283fd5b5061587d89828a016155e8565b955050604087013593506060870135925061589a6080880161566e565b915060a087013590509295509295509295565b6000602082840312156158be578081fd5b5035919050565b600080604083850312156158d7578182fd5b8235915060208301356001600160401b038111156158f3578182fd5b615817858286016155e8565b600080600080600080600060e0888a031215615919578081fd5b8735965060208801356001600160401b0380821115615936578283fd5b6159428b838c016155e8565b975060408a0135915080821115615957578283fd5b506159648a828b016155e8565b955050606088013593506080880135925061598160a0890161566e565b915060c0880135905092959891949750929550565b600080604083850312156159a8578182fd5b50508035926020909101359150565b6000806000606084860312156159cb578081fd5b8335925060208401359150604084013563ffffffff811681146159ec578182fd5b809150509250925092565b600080600060608486031215615a0b578081fd5b8335925060208401359150615a2260408501615680565b90509250925092565b600060208284031215615a3c578081fd5b6144f882615680565b60058110615a5557615a55615f55565b9052565b60048110615a5557615a55615f55565b60038110615a5557615a55615f55565b60008151808452815b81811015615a9e57602081850181015186830182015201615a82565b81811115615aaf5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386168152841515602082015260a08101615ae96040830186615a69565b615af66060830185615a69565b82151560808301529695505050505050565b6001600160a01b038e1681526101a060208201819052600090615b2d9083018f615a79565b8281036040840152615b3f818f615a79565b9150508b60608301528a60808301528960a083015263ffffffff891660c08301528760e0830152615b74610100830188615a59565b615b82610120830187615a45565b841515610140830152615b99610160830185615a69565b615ba7610180830184615a69565b9e9d5050505050505050505050505050565b8315158152606060208201526000615bd46060830185615a79565b90508215156040830152949350505050565b604081526000615bf96040830185615a79565b8281036020840152613f698185615a79565b60c081526000615c1e60c0830189615a79565b8281036020840152615c308189615a79565b91505085604083015284606083015283608083015260ff831660a0830152979650505050505050565b60208082526016908201527527b7363c90383932b234b1ba34b7b71039b2b63632b960511b604082015260600190565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b60208082526018908201527f436f6e747261637420696e206c6f636b65642073746174650000000000000000604082015260600190565b602080825260139082015272556e617574686f72697a65642061636365737360681b604082015260600190565b6020808252601590820152742737ba1030b9b9b4b3b732b2103a379036b4b732b960591b604082015260600190565b6020808252600d908201526c2737ba1027232a1027bbb732b960991b604082015260600190565b60208082526018908201527f43616e6e6f742073706563696679203020616464726573730000000000000000604082015260600190565b838152826020820152606060408201526000613f696060830184615a79565b60ff83168152604081016144f86020830184615a45565b60008219821115615df157615df1615f3f565b500190565b60006001600160401b03808316818516808303821115615e1857615e18615f3f565b01949350505050565b600060ff821660ff84168060ff03821115615e3e57615e3e615f3f565b019392505050565b600082615e6157634e487b7160e01b81526012600452602481fd5b500490565b600061ffff80831681851681830481118215151615615e8757615e87615f3f565b02949350505050565b6000816000190483118215151615615eaa57615eaa615f3f565b500290565b600082821015615ec157615ec1615f3f565b500390565b600060ff821660ff841680821015615ee057615ee0615f3f565b90039392505050565b600181811c90821680615efd57607f821691505b60208210811415615f1e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415615f3857615f38615f3f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461544b57600080fdfea264697066735822122009122db78b2d0e2969ef00c6f71d116427c85452ac7ed4b95f83b5b86e931ca564736f6c63430008040033",
  linkReferences: {},
  deployedLinkReferences: {},
};
