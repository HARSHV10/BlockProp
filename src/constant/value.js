export const address= '0xcd414b9356aCee25ceA4706F885708Db0844EE8f'

export const abi =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "nomineeAddress",
				"type": "address"
			}
		],
		"name": "addNominee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "changeStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "increase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "SellProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getAllProperty",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "OwnerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "ownerAcc",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "nominee",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "propertyID",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "ownerHistory",
						"type": "address[]"
					},
					{
						"internalType": "address",
						"name": "sellable",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Registration.LandRecord[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPropertyCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getPropertyDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "OwnerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "ownerAcc",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "nominee",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "propertyID",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "ownerHistory",
						"type": "address[]"
					},
					{
						"internalType": "address",
						"name": "sellable",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Registration.LandRecord",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRandomNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]