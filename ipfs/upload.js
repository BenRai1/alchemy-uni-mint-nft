async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First NFT",
      attributes: [
        {
          trait_type: "Fure",
          value: "white",
        },
        {
          trait_type: "Earing",
          value: "yes",
        },
        {
          trait_type: "Mustach",
          value: "gray",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmXNmmxNVnhs3c9CkFNYh2TazjQ29EYpHGwivjDqhBvs5y",
      description: "PirateApe 787",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
