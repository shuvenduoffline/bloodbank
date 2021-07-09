export const BLOOD_BANK_ADDRESS = '0x4DDc498BB78b755077eA0Fd90E1900869e8E63d4'

export const BLOOD_BANK_ABI = [
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
				"internalType": "uint256",
				"name": "_BloodGroup",
				"type": "uint256"
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
		"name": "AddBloodDetails",
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
		"name": "DeliverBloodBottle",
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
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
				"internalType": "enum BloodBank.BloodGroup",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "bloodGroup",
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
				"internalType": "uint256",
				"name": "BloodGroup",
				"type": "uint256"
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
				"internalType": "enum BloodBank.BloodBottleStatus",
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
				"internalType": "struct BloodBank.Agency",
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
						"internalType": "uint256",
						"name": "BloodGroup",
						"type": "uint256"
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
						"internalType": "enum BloodBank.BloodBottleStatus",
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
				"internalType": "struct BloodBank.BloodBottle",
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
				"internalType": "uint256",
				"name": "_BloodGroup",
				"type": "uint256"
			}
		],
		"name": "GetBloodBottleGroupTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalNoOfAgencies",
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
		"name": "totalSupply",
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

export const CONTRACT_OWNER = '0x1142F4720cE7CCDA94E3aa2FD563Af2A371110Cd'