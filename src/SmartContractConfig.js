export const BLOOD_BANK_ADDRESS = '0xAC23538589b31AE5715EBff6D8e1b8Ff5b19A091'

export const BLOOD_BANK_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "BloodBottleStatusEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_BloodBottleId",
				"type": "uint256"
			}
		],
		"name": "DeliverBloodBottle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_agencyType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_agencyName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_addressID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_contactPerson",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contactNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_agencyAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_pincode",
				"type": "uint256"
			}
		],
		"name": "addAgency",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "agencyCollection",
		"outputs": [
			{
				"internalType": "string",
				"name": "agencyType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "agencyName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "addressID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "contactPerson",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "contactNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "agencyAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "pincode",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bloodsCollection",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "BloodGroup",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "Quality",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "Remarks",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "DonerName",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "DonerAge",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "DonerMedicalDetails",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "DonerContactNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "BloodBottleId",
				"type": "uint256"
			},
			{
				"internalType": "enum BoodBank.BloodBottleStatus",
				"name": "Status",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "DateCreated",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "DateUpdated",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressID",
				"type": "address"
			}
		],
		"name": "getAgencyData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "agencyType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "agencyName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "addressID",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "contactPerson",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "contactNo",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "agencyAddress",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "pincode",
						"type": "uint256"
					}
				],
				"internalType": "struct BoodBank.Agency",
				"name": "agency",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_BloodBottleId",
				"type": "uint256"
			}
		],
		"name": "getbloodBottleData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "BloodGroup",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Quality",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Remarks",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "DonerName",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "DonerAge",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "DonerMedicalDetails",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "DonerContactNo",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "BloodBottleId",
						"type": "uint256"
					},
					{
						"internalType": "enum BoodBank.BloodBottleStatus",
						"name": "Status",
						"type": "uint8"
					},
					{
						"internalType": "bytes32",
						"name": "DateCreated",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "DateUpdated",
						"type": "bytes32"
					}
				],
				"internalType": "struct BoodBank.BloodBottle",
				"name": "_bloodBottle",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_BloodGroup",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Quality",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Remarks",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_DonerName",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_DonerAge",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_DonerMedicalDetails",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_DonerContactNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_BloodBottleId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_DateCreated",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_DateUpdated",
				"type": "bytes32"
			}
		],
		"name": "setBloodDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_BloodBottleId",
				"type": "uint256"
			}
		],
		"name": "verifyBloodBottle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]