// readonly property -> value cannot be changed after it is initialized
// once value is assigned, typescript will not allow it to modify the readonly property

type Aadhar = {
  readonly aadharID: number;
  address: string;
};

const citizen: Aadhar = {
  aadharID: 65478912354,
  address: "bangalore",
};
console.log(citizen);
// { aadharID: 65478912354, address: 'bangalore' }

// citizen.aadharID = 12345689; // Cannot assign to 'aadharID' because it is a read-only property.

citizen.address = "bangalore, bellandur 560103";
console.log(citizen);
// { aadharID: 65478912354, address: 'bangalore, bellandur 560103' }