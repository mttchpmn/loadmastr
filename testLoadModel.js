module.exports = {
  flightDetails: {
    date: "Moment.js date",
    route: "QN - MF//",
    aircraftType: "GA8",
    aircraftRego: "ZK-SLD",
    pilot: "M Chapman",
    coPilot: null
  },
  paxDetails: [
    {
      name: "John Smith",
      weight: 83,
      hasBaggage: false,
      baggageWeight: 0,
      hasInfant: false,
      infantWeight: 0
    },
    {
      name: "Sally Smith",
      weight: 56,
      hasBaggage: false,
      baggageWeight: 0,
      hasInfant: true,
      infantWeight: 13
    },
    {
      name: "Carl Smith",
      weight: 36,
      hasBaggage: false,
      baggageWeight: 0,
      hasInfant: false,
      infantWeight: 0
    }
  ],
  flightTotals: {
    basicEmptyWeight: 0,
    crewWeight: 0,
    paxWeight: 0,
    zeroFuelWeight: 0,
    fuelWeight: 0,
    takeoffWeight: 0,
    burnWeight: 0,
    landingWeight: 0
  }
};
