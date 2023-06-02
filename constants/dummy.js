const NFTData = [
  {
    id: "NFT-01",
    name: "Abstractor #321",
    creator: "Anonymous",
    price: "1USD",
    description: "testing Abstractor",
    bids: [
      {
        id: "BTD-11",
        name: "Bider Anonymous",
        price: 4.25,
        date: 'December 12, 2023 at 12:00 PM',
      },
      {
        id: "BTD-12",
        name: "Bider Anonymous",
        price: 3.25,
        date: 'December 12, 2023 at 12:00 PM',
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Abstractor #321",
    creator: "Anonymous",
    price: "1USD",
    description: "Abstractor",
  },
];

const serializeNFTData = (data) => {
  const visited = new Set();

  const replacer = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (visited.has(value)) {
        return '[Circular Reference]';
      }
      visited.add(value);
    }
    return value;
  };

  return JSON.stringify(data, replacer);
};

const serializedNFTData = serializeNFTData(NFTData);
console.log(serializedNFTData);
