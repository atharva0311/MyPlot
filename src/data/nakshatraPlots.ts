import { Plot } from '@/types/plot';

export interface Landmark {
  id: string;
  name: string;
  nameMr: string;
  category: 'river' | 'stay' | 'commercial' | 'locality' | 'resort' | 'scenic' | 'transit' | 'health';
  position: [number, number];
  distanceMeters: number;
  iconType: string;
  description: string;
}

// Center anchor point for Nakshatra Layout Masterplan in Kolhapur Outskirts (Kalamba Lake Corridor)
export const MASTERPLAN_CENTER: [number, number] = [16.6628, 74.2235];
export const DEFAULT_ZOOM = 18.8;

export const MASTERPLAN_INFRASTRUCTURE = {
  "entranceRoad": [
    [
      16.661732,
      74.2224859
    ],
    [
      16.6616544,
      74.2225896
    ],
    [
      16.6621286,
      74.223024
    ],
    [
      16.662533,
      74.2232465
    ],
    [
      16.6625995,
      74.2231577
    ],
    [
      16.6622449,
      74.2228685
    ]
  ],
  "entryGate": [
    [
      16.661743,
      74.2224711
    ],
    [
      16.6616433,
      74.2226044
    ],
    [
      16.6617142,
      74.2226622
    ],
    [
      16.6618139,
      74.222529
    ]
  ],
  "oxygenPark": [
    [
      16.6618261,
      74.2227415
    ],
    [
      16.661958,
      74.2230994
    ],
    [
      16.6623812,
      74.223373
    ],
    [
      16.662492,
      74.223225
    ],
    [
      16.6621341,
      74.2230166
    ]
  ],
  "clubhouse": [
    [
      16.6641497,
      74.2241835
    ],
    [
      16.6640278,
      74.2243464
    ],
    [
      16.6638293,
      74.2241844
    ],
    [
      16.6639512,
      74.2240216
    ]
  ],
  "partyPlot": [
    [
      16.6640963,
      74.224438
    ],
    [
      16.6638082,
      74.2248228
    ],
    [
      16.6634891,
      74.2245626
    ],
    [
      16.6637772,
      74.2241777
    ]
  ],
  "boxCricket": [
    [
      16.6637475,
      74.2247972
    ],
    [
      16.6635702,
      74.225034
    ],
    [
      16.6633717,
      74.2248721
    ],
    [
      16.663549,
      74.2246353
    ]
  ],
  "childrenPark": [
    [
      16.6642767,
      74.2238461
    ],
    [
      16.6641326,
      74.2240385
    ],
    [
      16.6639057,
      74.2238535
    ],
    [
      16.6640498,
      74.223661
    ]
  ],
  "mainRoad1": [
    [
      16.6627047,
      74.223017
    ],
    [
      16.6626105,
      74.2231429
    ],
    [
      16.663816,
      74.2241259
    ],
    [
      16.6639102,
      74.2240001
    ]
  ],
  "mainRoad2": [
    [
      16.6624942,
      74.2232983
    ],
    [
      16.6623945,
      74.2234315
    ],
    [
      16.6635999,
      74.2244146
    ],
    [
      16.6636996,
      74.2242814
    ]
  ],
  "topAvenue": [
    [
      16.6636952,
      74.2237533
    ],
    [
      16.6630304,
      74.2246415
    ],
    [
      16.6632644,
      74.2248323
    ],
    [
      16.6639292,
      74.2239441
    ]
  ],
  "outerBoundary": [
    [
      16.6625419,
      74.2223955
    ],
    [
      16.66435,
      74.2238701
    ],
    [
      16.6642348,
      74.2242529
    ],
    [
      16.6636409,
      74.2251989
    ],
    [
      16.6621873,
      74.2240135
    ],
    [
      16.6622161,
      74.223441
    ],
    [
      16.6616056,
      74.2228836
    ],
    [
      16.6616943,
      74.2223837
    ],
    [
      16.6625419,
      74.2223955
    ]
  ]
};

export const NEARBY_LANDMARKS: Landmark[] = [
  {
    "id": "kalamba-lake",
    "name": "Kalamba Lake & Bird Sanctuary",
    "nameMr": "काळांबा तलाव व पक्षी अभयारण्य",
    "category": "river",
    "position": [
      16.671,
      74.226
    ],
    "distanceMeters": 480,
    "iconType": "waves",
    "description": "Historical 1880s freshwater lake and lush migratory bird sanctuary"
  },
  {
    "id": "gargoti-highway",
    "name": "Kolhapur-Gargoti State Highway",
    "nameMr": "कोल्हापूर-गारगोटी राज्य महामार्ग",
    "category": "transit",
    "position": [
      16.658,
      74.221
    ],
    "distanceMeters": 280,
    "iconType": "navigation",
    "description": "Major four-lane arterial corridor connecting to Kolhapur City and Gargoti"
  },
  {
    "id": "sai-synergy-lawns",
    "name": "Sai Synergy Resort & Celebration Lawns",
    "nameMr": "साई सिनर्जी रिसॉर्ट व सेलिब्रेशन लॉन्स",
    "category": "resort",
    "position": [
      16.666,
      74.229
    ],
    "distanceMeters": 390,
    "iconType": "party",
    "description": "Luxury celebration gardens, open-air banquet lawns, and resort suites"
  },
  {
    "id": "rankala-lake",
    "name": "Rankala Lake & Shalini Palace",
    "nameMr": "रंकाळा तलाव व शालिनी पॅलेस",
    "category": "scenic",
    "position": [
      16.687,
      74.215
    ],
    "distanceMeters": 2800,
    "iconType": "camera",
    "description": "Famous heritage lakefront promenade and royal palace heritage spot"
  },
  {
    "id": "dypatil-hospital",
    "name": "D.Y. Patil Medical College & Hospital",
    "nameMr": "डी. वाय. पाटील वैद्यकीय महाविद्यालय व रुग्णालय",
    "category": "health",
    "position": [
      16.678,
      74.24
    ],
    "distanceMeters": 1900,
    "iconType": "hospital",
    "description": "Leading multi-specialty tertiary healthcare and medical university"
  },
  {
    "id": "shahu-botanical",
    "name": "Chhatrapati Shahu Botanical Park",
    "nameMr": "छत्रपती शाहू वनस्पती उद्यान",
    "category": "locality",
    "position": [
      16.655,
      74.228
    ],
    "distanceMeters": 520,
    "iconType": "home",
    "description": "Lush eco-friendly municipal park and green nature reserve"
  },
  {
    "id": "mahalaxmi-corridor",
    "name": "To Mahalaxmi (Ambabai) Temple & City Center",
    "nameMr": "महालक्ष्मी (अंबाबाई) मंदिर व शहर केंद्राकडे",
    "category": "transit",
    "position": [
      16.695,
      74.23
    ],
    "distanceMeters": 3600,
    "iconType": "navigation",
    "description": "Direct road towards the historic Karveer Nivasini Mahalaxmi Temple"
  },
  {
    "id": "nh48-junction",
    "name": "Pune-Bengaluru NH48 Highway Bypass",
    "nameMr": "पुणे-बंगळुरू NH48 राष्ट्रीय महामार्ग बायपास",
    "category": "transit",
    "position": [
      16.642,
      74.265
    ],
    "distanceMeters": 4200,
    "iconType": "navigation",
    "description": "Key access junction to national industrial and logistics corridor"
  }
];

export const NAKSHATRA_PLOTS: Plot[] = [
  {
    "id": "PLOT-001",
    "plotNumber": "001",
    "zone": "Block A",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 6000,
    "totalPrice": 9108000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6632734,
        74.2230994
      ],
      [
        16.6631959,
        74.223203
      ],
      [
        16.6631235,
        74.223144
      ],
      [
        16.6632011,
        74.2230404
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #001 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-002",
    "plotNumber": "002",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6633514,
        74.223163
      ],
      [
        16.6632739,
        74.2232666
      ],
      [
        16.6632015,
        74.2232076
      ],
      [
        16.6632791,
        74.223104
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #002 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-003",
    "plotNumber": "003",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6634294,
        74.2232266
      ],
      [
        16.6633519,
        74.2233302
      ],
      [
        16.6632795,
        74.2232713
      ],
      [
        16.6633571,
        74.2231676
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #003 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-004",
    "plotNumber": "004",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6635074,
        74.2232902
      ],
      [
        16.6634299,
        74.2233938
      ],
      [
        16.6633575,
        74.2233349
      ],
      [
        16.6634351,
        74.2232312
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #004 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-005",
    "plotNumber": "005",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6635854,
        74.2233538
      ],
      [
        16.6635078,
        74.2234575
      ],
      [
        16.6634355,
        74.2233985
      ],
      [
        16.6635131,
        74.2232949
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #005 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-006",
    "plotNumber": "006",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6636634,
        74.2234174
      ],
      [
        16.6635858,
        74.2235211
      ],
      [
        16.6635135,
        74.2234621
      ],
      [
        16.6635911,
        74.2233585
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #006 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-007",
    "plotNumber": "007",
    "zone": "Block A",
    "category": "Commercial Corner",
    "facing": "North-East",
    "status": "available",
    "areaSqFt": 2925,
    "areaSqYds": 325,
    "areaSqMeters": 271.7,
    "guntas": 2.69,
    "pricePerSqFt": 6000,
    "totalPrice": 17550000,
    "dimensions": {
      "north": 45,
      "south": 45,
      "east": 65,
      "west": 65
    },
    "polygon": [
      [
        16.6637414,
        74.2234811
      ],
      [
        16.6636638,
        74.2235847
      ],
      [
        16.6635915,
        74.2235257
      ],
      [
        16.6636691,
        74.2234221
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #007 in Block A, North-East facing with direct road connectivity."
  },
  {
    "id": "PLOT-008",
    "plotNumber": "008",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6638194,
        74.2235447
      ],
      [
        16.6637418,
        74.2236483
      ],
      [
        16.6636695,
        74.2235893
      ],
      [
        16.6637471,
        74.2234857
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #008 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-009",
    "plotNumber": "009",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 5500,
    "totalPrice": 8349000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6638974,
        74.2236083
      ],
      [
        16.6638198,
        74.2237119
      ],
      [
        16.6637475,
        74.2236529
      ],
      [
        16.6638251,
        74.2235493
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #009 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-010",
    "plotNumber": "010",
    "zone": "Block A",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1518,
    "areaSqYds": 169,
    "areaSqMeters": 141,
    "guntas": 1.39,
    "pricePerSqFt": 6000,
    "totalPrice": 9108000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6639754,
        74.2236719
      ],
      [
        16.6638978,
        74.2237755
      ],
      [
        16.6638255,
        74.2237165
      ],
      [
        16.6639031,
        74.2236129
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #010 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-011",
    "plotNumber": "011",
    "zone": "Block A",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 6000,
    "totalPrice": 7920000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6625639,
        74.2227353
      ],
      [
        16.6624891,
        74.2228352
      ],
      [
        16.6624239,
        74.222782
      ],
      [
        16.6624987,
        74.2226821
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #011 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-012",
    "plotNumber": "012",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6626334,
        74.222792
      ],
      [
        16.6625586,
        74.2228919
      ],
      [
        16.6624934,
        74.2228387
      ],
      [
        16.6625681,
        74.2227388
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #012 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-013",
    "plotNumber": "013",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6627029,
        74.2228486
      ],
      [
        16.6626281,
        74.2229486
      ],
      [
        16.6625628,
        74.2228954
      ],
      [
        16.6626376,
        74.2227954
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #013 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-014",
    "plotNumber": "014",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6627724,
        74.2229053
      ],
      [
        16.6626976,
        74.2230052
      ],
      [
        16.6626323,
        74.222952
      ],
      [
        16.6627071,
        74.2228521
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #014 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-015",
    "plotNumber": "015",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6628418,
        74.222962
      ],
      [
        16.6627671,
        74.2230619
      ],
      [
        16.6627018,
        74.2230087
      ],
      [
        16.6627766,
        74.2229088
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #015 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-016",
    "plotNumber": "016",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6629113,
        74.2230187
      ],
      [
        16.6628365,
        74.2231186
      ],
      [
        16.6627713,
        74.2230654
      ],
      [
        16.6628461,
        74.2229655
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #016 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-017",
    "plotNumber": "017",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6629808,
        74.2230753
      ],
      [
        16.662906,
        74.2231753
      ],
      [
        16.6628408,
        74.2231221
      ],
      [
        16.6629156,
        74.2230221
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #017 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-018",
    "plotNumber": "018",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6630503,
        74.223132
      ],
      [
        16.6629755,
        74.2232319
      ],
      [
        16.6629103,
        74.2231787
      ],
      [
        16.6629851,
        74.2230788
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #018 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-019",
    "plotNumber": "019",
    "zone": "Block A",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6631198,
        74.2231887
      ],
      [
        16.663045,
        74.2232886
      ],
      [
        16.6629798,
        74.2232354
      ],
      [
        16.6630546,
        74.2231355
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #019 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-020",
    "plotNumber": "020",
    "zone": "Block A",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 6000,
    "totalPrice": 7920000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6631893,
        74.2232453
      ],
      [
        16.6631145,
        74.2233453
      ],
      [
        16.6630493,
        74.2232921
      ],
      [
        16.6631241,
        74.2231921
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #020 in Block A, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-021",
    "plotNumber": "021",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 6000,
    "totalPrice": 8514000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6624402,
        74.2229921
      ],
      [
        16.6623682,
        74.2230883
      ],
      [
        16.6622959,
        74.2230293
      ],
      [
        16.6623679,
        74.2229331
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #021 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-022",
    "plotNumber": "022",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "booked",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 5500,
    "totalPrice": 7804500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6623627,
        74.2230957
      ],
      [
        16.6622907,
        74.2231919
      ],
      [
        16.6622183,
        74.2231329
      ],
      [
        16.6622904,
        74.2230367
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #022 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-023",
    "plotNumber": "023",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 5500,
    "totalPrice": 7804500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6625182,
        74.2230557
      ],
      [
        16.6624462,
        74.2231519
      ],
      [
        16.6623739,
        74.2230929
      ],
      [
        16.6624459,
        74.2229967
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #023 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-024",
    "plotNumber": "024",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 5500,
    "totalPrice": 7804500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6624407,
        74.2231593
      ],
      [
        16.6623687,
        74.2232555
      ],
      [
        16.6622963,
        74.2231965
      ],
      [
        16.6623684,
        74.2231003
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #024 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-025",
    "plotNumber": "025",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 5500,
    "totalPrice": 7804500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6625962,
        74.2231193
      ],
      [
        16.6625242,
        74.2232155
      ],
      [
        16.6624519,
        74.2231565
      ],
      [
        16.6625239,
        74.2230603
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #025 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-026",
    "plotNumber": "026",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 5500,
    "totalPrice": 7804500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6625187,
        74.2232229
      ],
      [
        16.6624467,
        74.2233191
      ],
      [
        16.6623743,
        74.2232601
      ],
      [
        16.6624463,
        74.2231639
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #026 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-027",
    "plotNumber": "027",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "booked",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 5500,
    "totalPrice": 7804500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6626742,
        74.2231829
      ],
      [
        16.6626022,
        74.2232791
      ],
      [
        16.6625299,
        74.2232201
      ],
      [
        16.6626019,
        74.2231239
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #027 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-028",
    "plotNumber": "028",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1419,
    "areaSqYds": 158,
    "areaSqMeters": 131.8,
    "guntas": 1.3,
    "pricePerSqFt": 6000,
    "totalPrice": 8514000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 33,
      "west": 33
    },
    "polygon": [
      [
        16.6625967,
        74.2232865
      ],
      [
        16.6625247,
        74.2233827
      ],
      [
        16.6624523,
        74.2233237
      ],
      [
        16.6625243,
        74.2232275
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #028 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-029",
    "plotNumber": "029",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 6000,
    "totalPrice": 8256000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6632772,
        74.2233171
      ],
      [
        16.6632052,
        74.2234133
      ],
      [
        16.6631357,
        74.2233566
      ],
      [
        16.6632077,
        74.2232604
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #029 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-030",
    "plotNumber": "030",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6633517,
        74.2233778
      ],
      [
        16.6632797,
        74.223474
      ],
      [
        16.6632102,
        74.2234173
      ],
      [
        16.6632822,
        74.2233211
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #030 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-031",
    "plotNumber": "031",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6634261,
        74.2234385
      ],
      [
        16.6633541,
        74.2235347
      ],
      [
        16.6632846,
        74.223478
      ],
      [
        16.6633566,
        74.2233818
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #031 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-032",
    "plotNumber": "032",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6635006,
        74.2234992
      ],
      [
        16.6634286,
        74.2235954
      ],
      [
        16.6633591,
        74.2235388
      ],
      [
        16.6634311,
        74.2234425
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #032 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-033",
    "plotNumber": "033",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "booked",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.663575,
        74.2235599
      ],
      [
        16.663503,
        74.2236561
      ],
      [
        16.6634335,
        74.2235995
      ],
      [
        16.6635055,
        74.2235033
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #033 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-034",
    "plotNumber": "034",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6636495,
        74.2236206
      ],
      [
        16.6635775,
        74.2237169
      ],
      [
        16.663508,
        74.2236602
      ],
      [
        16.66358,
        74.223564
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #034 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-035",
    "plotNumber": "035",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6637239,
        74.2236814
      ],
      [
        16.6636519,
        74.2237776
      ],
      [
        16.6635824,
        74.2237209
      ],
      [
        16.6636544,
        74.2236247
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #035 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-036",
    "plotNumber": "036",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6637984,
        74.2237421
      ],
      [
        16.6637264,
        74.2238383
      ],
      [
        16.6636569,
        74.2237816
      ],
      [
        16.6637289,
        74.2236854
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #036 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-037",
    "plotNumber": "037",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "West",
    "status": "booked",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 5500,
    "totalPrice": 7568000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6638728,
        74.2238028
      ],
      [
        16.6638008,
        74.223899
      ],
      [
        16.6637313,
        74.2238423
      ],
      [
        16.6638034,
        74.2237461
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #037 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-038",
    "plotNumber": "038",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1376,
    "areaSqYds": 153,
    "areaSqMeters": 127.8,
    "guntas": 1.26,
    "pricePerSqFt": 6000,
    "totalPrice": 8256000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 32,
      "west": 32
    },
    "polygon": [
      [
        16.6639473,
        74.2238635
      ],
      [
        16.6638753,
        74.2239597
      ],
      [
        16.6638058,
        74.2239031
      ],
      [
        16.6638778,
        74.2238068
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #038 in Block B, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-039",
    "plotNumber": "039",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 6000,
    "totalPrice": 7482000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6631106,
        74.2233719
      ],
      [
        16.6630386,
        74.2234681
      ],
      [
        16.6629762,
        74.2234172
      ],
      [
        16.6630482,
        74.223321
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #039 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-040",
    "plotNumber": "040",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6631779,
        74.2234268
      ],
      [
        16.6631059,
        74.223523
      ],
      [
        16.6630435,
        74.2234721
      ],
      [
        16.6631155,
        74.2233759
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #040 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-041",
    "plotNumber": "041",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6632453,
        74.2234817
      ],
      [
        16.6631733,
        74.223578
      ],
      [
        16.6631109,
        74.2235271
      ],
      [
        16.6631829,
        74.2234308
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #041 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-042",
    "plotNumber": "042",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6633127,
        74.2235367
      ],
      [
        16.6632407,
        74.2236329
      ],
      [
        16.6631783,
        74.223582
      ],
      [
        16.6632503,
        74.2234858
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #042 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-043",
    "plotNumber": "043",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.66338,
        74.2235916
      ],
      [
        16.663308,
        74.2236878
      ],
      [
        16.6632456,
        74.2236369
      ],
      [
        16.6633176,
        74.2235407
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #043 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-044",
    "plotNumber": "044",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6634474,
        74.2236465
      ],
      [
        16.6633754,
        74.2237428
      ],
      [
        16.663313,
        74.2236919
      ],
      [
        16.663385,
        74.2235957
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #044 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-045",
    "plotNumber": "045",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6635148,
        74.2237015
      ],
      [
        16.6634427,
        74.2237977
      ],
      [
        16.6633803,
        74.2237468
      ],
      [
        16.6634524,
        74.2236506
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #045 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-046",
    "plotNumber": "046",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6635821,
        74.2237564
      ],
      [
        16.6635101,
        74.2238526
      ],
      [
        16.6634477,
        74.2238017
      ],
      [
        16.6635197,
        74.2237055
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #046 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-047",
    "plotNumber": "047",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6636495,
        74.2238114
      ],
      [
        16.6635775,
        74.2239076
      ],
      [
        16.6635151,
        74.2238567
      ],
      [
        16.6635871,
        74.2237605
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #047 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-048",
    "plotNumber": "048",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6637168,
        74.2238663
      ],
      [
        16.6636448,
        74.2239625
      ],
      [
        16.6635824,
        74.2239116
      ],
      [
        16.6636544,
        74.2238154
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #048 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-049",
    "plotNumber": "049",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 5500,
    "totalPrice": 6858500,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6637842,
        74.2239212
      ],
      [
        16.6637122,
        74.2240174
      ],
      [
        16.6636498,
        74.2239666
      ],
      [
        16.6637218,
        74.2238703
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #049 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-050",
    "plotNumber": "050",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1247,
    "areaSqYds": 139,
    "areaSqMeters": 115.8,
    "guntas": 1.15,
    "pricePerSqFt": 6000,
    "totalPrice": 7482000,
    "dimensions": {
      "north": 43,
      "south": 43,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6638516,
        74.2239762
      ],
      [
        16.6637795,
        74.2240724
      ],
      [
        16.6637172,
        74.2240215
      ],
      [
        16.6637892,
        74.2239253
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #050 in Block B, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-051",
    "plotNumber": "051",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 6000,
    "totalPrice": 7656000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6627328,
        74.2232664
      ],
      [
        16.662658,
        74.2233663
      ],
      [
        16.6625956,
        74.2233154
      ],
      [
        16.6626704,
        74.2232155
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #051 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-052",
    "plotNumber": "052",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "booked",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6628001,
        74.2233213
      ],
      [
        16.6627253,
        74.2234212
      ],
      [
        16.6626629,
        74.2233704
      ],
      [
        16.6627377,
        74.2232704
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #052 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-053",
    "plotNumber": "053",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6628675,
        74.2233763
      ],
      [
        16.6627927,
        74.2234762
      ],
      [
        16.6627303,
        74.2234253
      ],
      [
        16.6628051,
        74.2233254
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #053 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-054",
    "plotNumber": "054",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6629349,
        74.2234312
      ],
      [
        16.6628601,
        74.2235311
      ],
      [
        16.6627977,
        74.2234802
      ],
      [
        16.6628725,
        74.2233803
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #054 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-055",
    "plotNumber": "055",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6630022,
        74.2234861
      ],
      [
        16.6629274,
        74.223586
      ],
      [
        16.662865,
        74.2235352
      ],
      [
        16.6629398,
        74.2234352
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #055 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-056",
    "plotNumber": "056",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "booked",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6630696,
        74.2235411
      ],
      [
        16.6629948,
        74.223641
      ],
      [
        16.6629324,
        74.2235901
      ],
      [
        16.6630072,
        74.2234902
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #056 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-057",
    "plotNumber": "057",
    "zone": "Block B",
    "category": "Standard Residential",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6631369,
        74.223596
      ],
      [
        16.6630622,
        74.2236959
      ],
      [
        16.6629998,
        74.223645
      ],
      [
        16.6630745,
        74.2235451
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #057 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-058",
    "plotNumber": "058",
    "zone": "Block B",
    "category": "Commercial Corner",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 6000,
    "totalPrice": 7656000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6632043,
        74.2236509
      ],
      [
        16.6631295,
        74.2237509
      ],
      [
        16.6630671,
        74.2237
      ],
      [
        16.6631419,
        74.2236
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #058 in Block B, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-059",
    "plotNumber": "059",
    "zone": "Block C",
    "category": "Commercial Corner",
    "facing": "South",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 6000,
    "totalPrice": 7656000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6626164,
        74.2234218
      ],
      [
        16.6625416,
        74.2235217
      ],
      [
        16.6624792,
        74.2234708
      ],
      [
        16.662554,
        74.2233709
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #059 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-060",
    "plotNumber": "060",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "South",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6626838,
        74.2234768
      ],
      [
        16.662609,
        74.2235767
      ],
      [
        16.6625466,
        74.2235258
      ],
      [
        16.6626214,
        74.2234259
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #060 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-061",
    "plotNumber": "061",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "South",
    "status": "booked",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6627512,
        74.2235317
      ],
      [
        16.6626764,
        74.2236316
      ],
      [
        16.662614,
        74.2235807
      ],
      [
        16.6626888,
        74.2234808
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #061 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-062",
    "plotNumber": "062",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "South",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6628185,
        74.2235866
      ],
      [
        16.6627437,
        74.2236865
      ],
      [
        16.6626813,
        74.2236357
      ],
      [
        16.6627561,
        74.2235357
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #062 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-063",
    "plotNumber": "063",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "South",
    "status": "sold",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6628859,
        74.2236416
      ],
      [
        16.6628111,
        74.2237415
      ],
      [
        16.6627487,
        74.2236906
      ],
      [
        16.6628235,
        74.2235907
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #063 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-064",
    "plotNumber": "064",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "South",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6629532,
        74.2236965
      ],
      [
        16.6628785,
        74.2237964
      ],
      [
        16.6628161,
        74.2237455
      ],
      [
        16.6628908,
        74.2236456
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #064 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-065",
    "plotNumber": "065",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "South",
    "status": "booked",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 5500,
    "totalPrice": 7018000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.6630206,
        74.2237514
      ],
      [
        16.6629458,
        74.2238514
      ],
      [
        16.6628834,
        74.2238005
      ],
      [
        16.6629582,
        74.2237005
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #065 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-066",
    "plotNumber": "066",
    "zone": "Block C",
    "category": "Commercial Corner",
    "facing": "South",
    "status": "available",
    "areaSqFt": 1276,
    "areaSqYds": 142,
    "areaSqMeters": 118.5,
    "guntas": 1.17,
    "pricePerSqFt": 6000,
    "totalPrice": 7656000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 29,
      "west": 29
    },
    "polygon": [
      [
        16.663088,
        74.2238064
      ],
      [
        16.6630132,
        74.2239063
      ],
      [
        16.6629508,
        74.2238554
      ],
      [
        16.6630256,
        74.2237555
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #066 in Block C, South facing with direct road connectivity."
  },
  {
    "id": "PLOT-067",
    "plotNumber": "067",
    "zone": "Block C",
    "category": "Commercial Corner",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 6000,
    "totalPrice": 7920000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6625905,
        74.2236152
      ],
      [
        16.6625157,
        74.2237151
      ],
      [
        16.6624504,
        74.2236619
      ],
      [
        16.6625252,
        74.223562
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #067 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-068",
    "plotNumber": "068",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6626614,
        74.223673
      ],
      [
        16.6625866,
        74.2237729
      ],
      [
        16.6625213,
        74.2237197
      ],
      [
        16.6625961,
        74.2236198
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #068 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-069",
    "plotNumber": "069",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6627323,
        74.2237308
      ],
      [
        16.6626575,
        74.2238308
      ],
      [
        16.6625923,
        74.2237776
      ],
      [
        16.662667,
        74.2236776
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #069 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-070",
    "plotNumber": "070",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6628032,
        74.2237887
      ],
      [
        16.6627284,
        74.2238886
      ],
      [
        16.6626632,
        74.2238354
      ],
      [
        16.6627379,
        74.2237355
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #070 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-071",
    "plotNumber": "071",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6628741,
        74.2238465
      ],
      [
        16.6627993,
        74.2239464
      ],
      [
        16.6627341,
        74.2238932
      ],
      [
        16.6628089,
        74.2237933
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #071 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-072",
    "plotNumber": "072",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.662945,
        74.2239043
      ],
      [
        16.6628702,
        74.2240042
      ],
      [
        16.662805,
        74.223951
      ],
      [
        16.6628798,
        74.2238511
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #072 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-073",
    "plotNumber": "073",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6630159,
        74.2239621
      ],
      [
        16.6629411,
        74.2240621
      ],
      [
        16.6628759,
        74.2240089
      ],
      [
        16.6629507,
        74.2239089
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #073 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-074",
    "plotNumber": "074",
    "zone": "Block C",
    "category": "Commercial Corner",
    "facing": "West",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 6000,
    "totalPrice": 7920000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6630868,
        74.22402
      ],
      [
        16.663012,
        74.2241199
      ],
      [
        16.6629468,
        74.2240667
      ],
      [
        16.6630216,
        74.2239668
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #074 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-075",
    "plotNumber": "075",
    "zone": "Premium Enclave",
    "category": "Commercial Corner",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6635038,
        74.2239786
      ],
      [
        16.6634594,
        74.2240378
      ],
      [
        16.6633318,
        74.2239337
      ],
      [
        16.6633761,
        74.2238745
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #075 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-076",
    "plotNumber": "076",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6634567,
        74.2240415
      ],
      [
        16.6634124,
        74.2241007
      ],
      [
        16.6632847,
        74.2239966
      ],
      [
        16.663329,
        74.2239374
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #076 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-077",
    "plotNumber": "077",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6634096,
        74.2241044
      ],
      [
        16.6633653,
        74.2241636
      ],
      [
        16.6632376,
        74.2240595
      ],
      [
        16.6632819,
        74.2240003
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #077 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-078",
    "plotNumber": "078",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "booked",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6633625,
        74.2241673
      ],
      [
        16.6633182,
        74.2242265
      ],
      [
        16.6631905,
        74.2241224
      ],
      [
        16.6632349,
        74.2240632
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #078 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-079",
    "plotNumber": "079",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6633154,
        74.2242302
      ],
      [
        16.6632711,
        74.2242894
      ],
      [
        16.6631435,
        74.2241854
      ],
      [
        16.6631878,
        74.2241261
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #079 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-080",
    "plotNumber": "080",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6632683,
        74.2242931
      ],
      [
        16.663224,
        74.2243524
      ],
      [
        16.6630964,
        74.2242483
      ],
      [
        16.6631407,
        74.2241891
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #080 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-081",
    "plotNumber": "081",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6632212,
        74.2243561
      ],
      [
        16.6631769,
        74.2244153
      ],
      [
        16.6630493,
        74.2243112
      ],
      [
        16.6630936,
        74.224252
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #081 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-082",
    "plotNumber": "082",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "booked",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.6631741,
        74.224419
      ],
      [
        16.6631298,
        74.2244782
      ],
      [
        16.6630022,
        74.2243741
      ],
      [
        16.6630465,
        74.2243149
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #082 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-083",
    "plotNumber": "083",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "North",
    "status": "available",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.663127,
        74.2244819
      ],
      [
        16.6630827,
        74.2245411
      ],
      [
        16.6629551,
        74.224437
      ],
      [
        16.6629994,
        74.2243778
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #083 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-084",
    "plotNumber": "084",
    "zone": "Premium Enclave",
    "category": "Commercial Corner",
    "facing": "North",
    "status": "sold",
    "areaSqFt": 1534,
    "areaSqYds": 170,
    "areaSqMeters": 142.5,
    "guntas": 1.41,
    "pricePerSqFt": 6500,
    "totalPrice": 9971000,
    "dimensions": {
      "north": 26,
      "south": 26,
      "east": 59,
      "west": 59
    },
    "polygon": [
      [
        16.66308,
        74.2245448
      ],
      [
        16.6630356,
        74.224604
      ],
      [
        16.662908,
        74.2244999
      ],
      [
        16.6629523,
        74.2244407
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #084 in Premium Enclave, North facing with direct road connectivity."
  },
  {
    "id": "PLOT-085",
    "plotNumber": "085",
    "zone": "Block C",
    "category": "Commercial Corner",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 6000,
    "totalPrice": 7920000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6626924,
        74.2239367
      ],
      [
        16.6626176,
        74.2240366
      ],
      [
        16.6625524,
        74.2239834
      ],
      [
        16.6626272,
        74.2238835
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #085 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-086",
    "plotNumber": "086",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6627633,
        74.2239945
      ],
      [
        16.6626885,
        74.2240944
      ],
      [
        16.6626233,
        74.2240412
      ],
      [
        16.6626981,
        74.2239413
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #086 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-087",
    "plotNumber": "087",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6628342,
        74.2240524
      ],
      [
        16.6627594,
        74.2241523
      ],
      [
        16.6626942,
        74.2240991
      ],
      [
        16.662769,
        74.2239992
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #087 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-088",
    "plotNumber": "088",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6629051,
        74.2241102
      ],
      [
        16.6628303,
        74.2242101
      ],
      [
        16.6627651,
        74.2241569
      ],
      [
        16.6628399,
        74.224057
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #088 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-089",
    "plotNumber": "089",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.662976,
        74.224168
      ],
      [
        16.6629012,
        74.2242679
      ],
      [
        16.662836,
        74.2242147
      ],
      [
        16.6629108,
        74.2241148
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #089 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-090",
    "plotNumber": "090",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6630469,
        74.2242258
      ],
      [
        16.6629721,
        74.2243258
      ],
      [
        16.6629069,
        74.2242726
      ],
      [
        16.6629817,
        74.2241726
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #090 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-091",
    "plotNumber": "091",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "booked",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6631178,
        74.2242837
      ],
      [
        16.663043,
        74.2243836
      ],
      [
        16.6629778,
        74.2243304
      ],
      [
        16.6630526,
        74.2242305
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #091 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-092",
    "plotNumber": "092",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6631887,
        74.2243415
      ],
      [
        16.663114,
        74.2244414
      ],
      [
        16.6630487,
        74.2243882
      ],
      [
        16.6631235,
        74.2242883
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #092 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-093",
    "plotNumber": "093",
    "zone": "Block C",
    "category": "Standard Residential",
    "facing": "West",
    "status": "sold",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 5500,
    "totalPrice": 7260000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6632596,
        74.2243993
      ],
      [
        16.6631849,
        74.2244992
      ],
      [
        16.6631196,
        74.224446
      ],
      [
        16.6631944,
        74.2243461
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": false,
    "roadWidthFt": 40,
    "description": "Plot #093 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-094",
    "plotNumber": "094",
    "zone": "Block C",
    "category": "Commercial Corner",
    "facing": "West",
    "status": "available",
    "areaSqFt": 1320,
    "areaSqYds": 147,
    "areaSqMeters": 122.6,
    "guntas": 1.21,
    "pricePerSqFt": 6000,
    "totalPrice": 7920000,
    "dimensions": {
      "north": 44,
      "south": 44,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6633306,
        74.2244571
      ],
      [
        16.6632558,
        74.2245571
      ],
      [
        16.6631905,
        74.2245039
      ],
      [
        16.6632653,
        74.2244039
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": false,
    "roadWidthFt": 60,
    "description": "Plot #094 in Block C, West facing with direct road connectivity."
  },
  {
    "id": "PLOT-095",
    "plotNumber": "095",
    "zone": "Premium Enclave",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6625558,
        74.2240399
      ],
      [
        16.6624782,
        74.2241435
      ],
      [
        16.6624144,
        74.2240914
      ],
      [
        16.662492,
        74.2239878
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #095 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-096",
    "plotNumber": "096",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6626253,
        74.2240965
      ],
      [
        16.6625477,
        74.2242001
      ],
      [
        16.6624839,
        74.2241481
      ],
      [
        16.6625615,
        74.2240445
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #096 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-097",
    "plotNumber": "097",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6626948,
        74.2241532
      ],
      [
        16.6626172,
        74.2242568
      ],
      [
        16.6625534,
        74.2242048
      ],
      [
        16.662631,
        74.2241012
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #097 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-098",
    "plotNumber": "098",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6627643,
        74.2242099
      ],
      [
        16.6626867,
        74.2243135
      ],
      [
        16.6626229,
        74.2242614
      ],
      [
        16.6627004,
        74.2241578
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #098 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-099",
    "plotNumber": "099",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6628338,
        74.2242665
      ],
      [
        16.6627562,
        74.2243702
      ],
      [
        16.6626924,
        74.2243181
      ],
      [
        16.6627699,
        74.2242145
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #099 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-100",
    "plotNumber": "100",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6629032,
        74.2243232
      ],
      [
        16.6628257,
        74.2244268
      ],
      [
        16.6627619,
        74.2243748
      ],
      [
        16.6628394,
        74.2242712
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #100 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-101",
    "plotNumber": "101",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6629727,
        74.2243799
      ],
      [
        16.6628952,
        74.2244835
      ],
      [
        16.6628314,
        74.2244315
      ],
      [
        16.6629089,
        74.2243278
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #101 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-102",
    "plotNumber": "102",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6630422,
        74.2244366
      ],
      [
        16.6629647,
        74.2245402
      ],
      [
        16.6629008,
        74.2244881
      ],
      [
        16.6629784,
        74.2243845
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #102 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-103",
    "plotNumber": "103",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6631117,
        74.2244932
      ],
      [
        16.6630342,
        74.2245968
      ],
      [
        16.6629703,
        74.2245448
      ],
      [
        16.6630479,
        74.2244412
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #103 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-104",
    "plotNumber": "104",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6631812,
        74.2245499
      ],
      [
        16.6631036,
        74.2246535
      ],
      [
        16.6630398,
        74.2246015
      ],
      [
        16.6631174,
        74.2244978
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #104 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-105",
    "plotNumber": "105",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "available",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6632507,
        74.2246066
      ],
      [
        16.6631731,
        74.2247102
      ],
      [
        16.6631093,
        74.2246581
      ],
      [
        16.6631869,
        74.2245545
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #105 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-106",
    "plotNumber": "106",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6633202,
        74.2246632
      ],
      [
        16.6632426,
        74.2247669
      ],
      [
        16.6631788,
        74.2247148
      ],
      [
        16.6632564,
        74.2246112
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #106 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-107",
    "plotNumber": "107",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6633897,
        74.2247199
      ],
      [
        16.6633121,
        74.2248235
      ],
      [
        16.6632483,
        74.2247715
      ],
      [
        16.6633259,
        74.2246679
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #107 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-108",
    "plotNumber": "108",
    "zone": "Premium Enclave",
    "category": "Villa Plot",
    "facing": "East",
    "status": "booked",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6634592,
        74.2247766
      ],
      [
        16.6633816,
        74.2248802
      ],
      [
        16.6633178,
        74.2248282
      ],
      [
        16.6633953,
        74.2247245
      ]
    ],
    "isCornerPlot": false,
    "vastuCompliant": true,
    "roadWidthFt": 40,
    "description": "Plot #108 in Premium Enclave, East facing with direct road connectivity."
  },
  {
    "id": "PLOT-109",
    "plotNumber": "109",
    "zone": "Premium Enclave",
    "category": "Commercial Corner",
    "facing": "East",
    "status": "sold",
    "areaSqFt": 1380,
    "areaSqYds": 153,
    "areaSqMeters": 128.2,
    "guntas": 1.27,
    "pricePerSqFt": 6500,
    "totalPrice": 8970000,
    "dimensions": {
      "north": 46,
      "south": 46,
      "east": 30,
      "west": 30
    },
    "polygon": [
      [
        16.6635286,
        74.2248332
      ],
      [
        16.6634511,
        74.2249369
      ],
      [
        16.6633873,
        74.2248848
      ],
      [
        16.6634648,
        74.2247812
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #109 in Premium Enclave, East facing with direct road connectivity."
  }
];
