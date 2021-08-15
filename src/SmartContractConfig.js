export const BLOOD_BANK_ADDRESS = "0x7ed03bc1e03B325C525c12658A1afa7C60Cfee13";

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
    name: "AddBloodDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "BloodBottleIdNo",
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
        name: "start",
        type: "uint256",
      },
    ],
    name: "BloodBottleList",
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
        name: "_BloodBottleId",
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
    name: "DeliverBloodBottle",
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
    ],
    name: "GetBloodBottleGroupTotal",
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
    name: "HealthCareAgencyList",
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
        internalType: "struct BloodBank2.HealthCareAgency[50]",
        name: "temp",
        type: "tuple[50]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TotalNoOfAgencies",
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
    name: "TotalNoOfHealthCareAgencies",
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
        name: "",
        type: "address",
      },
    ],
    name: "agencyCollection",
    outputs: [
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
    name: "bloodCollection",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum BloodBank2.BloodGroup",
        name: "",
        type: "uint8",
      },
    ],
    name: "bloodGroup",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "healthCareAgency",
    outputs: [
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

export const CONTRACT_OWNER = "0x1142F4720cE7CCDA94E3aa2FD563Af2A371110Cd";
