export const BLOOD_BANK_ADDRESS = "0x7d5DB1dF22DfffB608BE5625982eAb4D3Ba591CC";

export const BLOOD_BANK_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "BloodBottleID",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "BloodBottleStatusEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "BloodBottleVerifiedEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_NoOfBottles",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_BloodGroup",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_Remarks",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_PatientName",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_PatientAge",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_PatientMedicalDetails",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_PatientContactNo",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_doctorDetails",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_DateDemanded",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_DateProvided",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_healthCareAgencyindex",
        type: "uint256",
      },
    ],
    name: "BulkDeliveryBloodBottle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_BloodBottleId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_Remarks",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_PatientName",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_PatientAge",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_PatientMedicalDetails",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_PatientContactNo",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_doctorDetails",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_DateDemanded",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_DateProvided",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_healthCareAgencyindex",
        type: "uint256",
      },
    ],
    name: "DeliverBloodBottle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_agencyType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_agencyName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_addressID",
        type: "address",
      },
      {
        internalType: "string",
        name: "_contactPerson",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_contactNo",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_agencyAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pincode",
        type: "uint256",
      },
    ],
    name: "addAgency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_BloodGroup",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_Quality",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_Remarks",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_DonerName",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_DonerAge",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_DonerMedicalDetails",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_DonerContactNo",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_DateCreated",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_DateUpdated",
        type: "bytes32",
      },
    ],
    name: "addBloodDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_agencyType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_agencyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_contactPerson",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_contactNo",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_agencyAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pincode",
        type: "uint256",
      },
    ],
    name: "addHealthCareAgency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressID",
        type: "address",
      },
    ],
    name: "getAgencyData",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "agencyType",
            type: "string",
          },
          {
            internalType: "string",
            name: "agencyName",
            type: "string",
          },
          {
            internalType: "address",
            name: "addressID",
            type: "address",
          },
          {
            internalType: "string",
            name: "contactPerson",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "contactNo",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "agencyAddress",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "pincode",
            type: "uint256",
          },
        ],
        internalType: "struct BloodBank2.Agency",
        name: "agency",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_BloodGroup",
        type: "uint256",
      },
    ],
    name: "getBloodBottleGroupTotal",
    outputs: [
      {
        internalType: "uint256",
        name: "a",
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
        name: "start",
        type: "uint256",
      },
    ],
    name: "getBloodBottleList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "BloodGroup",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "Quality",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "Remarks",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "DonerName",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "DonerAge",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "DonerMedicalDetails",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "DonerContactNo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "BloodBottleId",
            type: "uint256",
          },
          {
            internalType: "enum BloodBank2.BloodBottleStatus",
            name: "Status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "DateCreated",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "DateUpdated",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "agency",
            type: "address",
          },
        ],
        internalType: "struct BloodBank2.BloodBottle[10]",
        name: "temp",
        type: "tuple[10]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
    ],
    name: "getHealthCareAgencyList",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "agencyType",
            type: "string",
          },
          {
            internalType: "string",
            name: "agencyName",
            type: "string",
          },
          {
            internalType: "string",
            name: "contactPerson",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "contactNo",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "agencyAddress",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "pincode",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "NoBottlesDemanded",
            type: "uint256",
          },
        ],
        internalType: "struct BloodBank2.HealthCareAgency[30]",
        name: "temp",
        type: "tuple[30]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_BloodBottleId",
        type: "uint256",
      },
    ],
    name: "getbloodBottleData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "BloodGroup",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "Quality",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "Remarks",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "DonerName",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "DonerAge",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "DonerMedicalDetails",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "DonerContactNo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "BloodBottleId",
            type: "uint256",
          },
          {
            internalType: "enum BloodBank2.BloodBottleStatus",
            name: "Status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "DateCreated",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "DateUpdated",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "agency",
            type: "address",
          },
        ],
        internalType: "struct BloodBank2.BloodBottle",
        name: "_bloodBottle",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAgency",
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
    name: "totalSupply",
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
        name: "_BloodBottleId",
        type: "uint256",
      },
    ],
    name: "verifyBloodBottle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const CONTRACT_OWNER = "0x3CD5ce84cE3497F85B1b569a698cA6a682c28194";
