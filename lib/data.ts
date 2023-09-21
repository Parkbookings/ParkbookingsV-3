export const info = [
  {
    park: "AI-AIS/RICHTERSVELD TRANSFRONTIER PARK",
    camps: [
      "DE HOOP",
      "POTJIESPRAM",
      "SENDELINGSDRIF",
      "GANAKOURIEP",
      "KOKERBOOMKLOOF",
      "RICHTERSBURG",
      "TATASBERG",
    ],
  },
  {
    park: "ADDO ELEPHANT NATIONAL PARK",
    camps: [
      "ADDO RESTCAMP",
      "NARINA BUSH CAMP",
      "MATYHOLWENI CAMP",
      "NYATHI CAMP",
      "SPEKBOOM TENTED",
    ],
  },
  {
    park: "AGULHAS NATIONAL PARK",
    camps: ["AGULHUS RESTCAMP"],
  },
  {
    park: "AUGRABIES FALLS NATIONAL PARK",
    camps: ["AUGRABIES REST CAMP"],
  },
  {
    park: "BONTEBOK NATIONAL PARK",
    camps: ["LANG ELSIE'S KRAAL REST CAMP"],
  },
  {
    park: "CAMDEBOO NATIONAL PARK",
    camps: ["LAKEVIEW TENTED CAMP (CTT2)", "NQWEBA CAMP SITES (CK6P)"],
  },
  {
    park: "GARDEN ROUTE NATIONAL PARK",
    camps: [
      "EBB-AND-FLOW (WILDERNESS SECTION)",
      "KNYSNA (KNYSNA LAKES SECTION)",
      "NATURE'S VALLEY (TSITSIKAMMA SECTION)",
      "STORMS RIVER MOUTH (TSITSIKAMMA SECTION)",
    ],
  },
  {
    park: "GOLDEN GATE HIGHLANDS NATIONAL PARK",
    camps: [
      "GLEN REENEN REST CAMP",
      "HIGHLANDS MOUNTAIN RETREAT",
      "NOORDT BRABANT GUEST HOUSE",
    ],
  },
  {
    park: "KAROO NATIONAL PARK",
    camps: ["KAROO REST CAMP"],
  },
  {
    park: "KGALAGADI TRANSFRONTIER PARK",
    camps: [
      "TWEE RIVIEREN",
      "NOSSOB",
      "MATA-MATA",
      "BITTERPAN",
      "GROOTKOLK",
      "KIELIEKRANKIE",
      "GHARAGAB",
      "URIKARUUS",
      "KALAHARI TENTED CAMP",
    ],
  },
  {
    park: "KRUGER NATIONAL PARK",
    camps: [
      "BALULE",
      "BATELEUR",
      "BIYAMITI",
      "BERG-EN-DAL",
      "CROCODILE BRIDGE",
      "MALELANE",
      "LETABA",
      "LOWER SABIE",
      "BOULDERS",
      "MAROELA",
      "MOPANI",
      "ORPEN",
      "OLIFANTS",
      "PAFURI BORDER CAMP",
      "PRETORIUSKOP",
      "SABLE HIDE",
      "SHIMUWINI",
      "SHIPANDANI",
      "SIRHENI",
      "TALAMATI    ",
      "TAMBOTI",
      "PUNDA MARIA",
      "ROODEWAL",
      "SATARA",
      "SHINGWEDZI",
      "SKUKUZA",
      "TSENDZE RUSTIC CAMP",
    ],
  },
  {
    park: "MAPUNGUBWE NATIONAL PARK",
    camps: [
      "LEOKWE CAMP",
      "LIMPOPO FOREST TENTED CAMP",
      "MAZHOU CAMP SITE",
      "TSHUGULU LODGE",
      "VHEMBE BUSH CAMP",
    ],
  },
  {
    park: "MARAKELE NATIONAL PARK",
    camps: ["BONTLE REST CAMP", "TLOPI TENTED CAMP"],
  },
  {
    park: "MOKALA NATIONAL PARK",
    camps: [
      "HAAK-EN-STEEK",
      "LILYDALE REST CAMP",
      "MOSU LODGE",
      "MOTSWEDI CAMP SITE",
    ],
  },
  {
    park: "MOUNTAIN ZEBRA NATIONAL PARK",
    camps: ["MOUNTAIN ZEBRA RESTCAMP"],
  },
  {
    park: "NAMAQUA NATIONAL PARK",
    camps: ["GROENRIVIER COASTAL REST CAMP", "SKILPAD REST CAMP"],
  },
  {
    park: "TABLE MOUNTAIN NATIONAL PARK",
    camps: ["TABLE MOUNTAIN"],
  },
  {
    park: "TANKWA KAROO NATIONAL PARK",
    camps: ["ELANDSBERG REST CAMP", "TANKWA KAROO REST CAMP"],
  },
  {
    park: "WEST COAST NATIONAL PARK",
    camps: ["WEST COAST"],
  },
]

export const parkData = info.map((item) => {
  return {
    label: item.park,
    value: item.park.toLowerCase(),
  }
})

export const campFromPark = (park: string) => {
  const index = info.findIndex((item) => item.park.toLowerCase() === park)

  return info[index].camps.map((item) => {
    return {
      label: item,
      value: item.toLowerCase(),
    }
  })
}
