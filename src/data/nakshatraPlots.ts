import { Plot } from '@/types/plot';

// Center anchor point for Nakshatra Layout Masterplan (angled layout matching Screenshot 2)
export const MASTERPLAN_CENTER: [number, number] = [17.4455, 78.3780];
export const DEFAULT_ZOOM = 18.2;

export const MASTERPLAN_INFRASTRUCTURE = {
  "entranceRoad": [
    [
      17.444432,
      78.3769817
    ],
    [
      17.4443544,
      78.3770857
    ],
    [
      17.4448286,
      78.377522
    ],
    [
      17.445233,
      78.3777454
    ],
    [
      17.4452995,
      78.3776562
    ],
    [
      17.4449449,
      78.3773659
    ]
  ],
  "entryGate": [
    [
      17.444443,
      78.3769668
    ],
    [
      17.4443433,
      78.3771006
    ],
    [
      17.4444142,
      78.3771587
    ],
    [
      17.4445139,
      78.3770249
    ]
  ],
  "oxygenPark": [
    [
      17.4445261,
      78.3772384
    ],
    [
      17.444658,
      78.3775977
    ],
    [
      17.4450812,
      78.3778725
    ],
    [
      17.445192,
      78.3777238
    ],
    [
      17.4448341,
      78.3775145
    ]
  ],
  "clubhouse": [
    [
      17.4468497,
      78.3786864
    ],
    [
      17.4467278,
      78.3788499
    ],
    [
      17.4465293,
      78.3786873
    ],
    [
      17.4466512,
      78.3785238
    ]
  ],
  "partyPlot": [
    [
      17.4467963,
      78.3789419
    ],
    [
      17.4465082,
      78.3793284
    ],
    [
      17.4461891,
      78.3790671
    ],
    [
      17.4464772,
      78.3786806
    ]
  ],
  "boxCricket": [
    [
      17.4464475,
      78.3793026
    ],
    [
      17.4462702,
      78.3795405
    ],
    [
      17.4460717,
      78.3793779
    ],
    [
      17.446249,
      78.37914
    ]
  ],
  "childrenPark": [
    [
      17.4469767,
      78.3783475
    ],
    [
      17.4468326,
      78.3785408
    ],
    [
      17.4466057,
      78.3783549
    ],
    [
      17.4467498,
      78.3781617
    ]
  ],
  "mainRoad1": [
    [
      17.4454047,
      78.377515
    ],
    [
      17.4453105,
      78.3776414
    ],
    [
      17.446516,
      78.3786286
    ],
    [
      17.4466102,
      78.3785022
    ]
  ],
  "mainRoad2": [
    [
      17.4451942,
      78.3777974
    ],
    [
      17.4450945,
      78.3779312
    ],
    [
      17.4462999,
      78.3789184
    ],
    [
      17.4463996,
      78.3787846
    ]
  ],
  "topAvenue": [
    [
      17.4463952,
      78.3782544
    ],
    [
      17.4457304,
      78.3791463
    ],
    [
      17.4459644,
      78.3793379
    ],
    [
      17.4466292,
      78.378446
    ]
  ],
  "outerBoundary": [
    [
      17.4452419,
      78.3768909
    ],
    [
      17.44705,
      78.3783717
    ],
    [
      17.4469348,
      78.3787561
    ],
    [
      17.4463409,
      78.3797061
    ],
    [
      17.4448873,
      78.3785156
    ],
    [
      17.4449161,
      78.3779408
    ],
    [
      17.4443056,
      78.377381
    ],
    [
      17.4443943,
      78.376879
    ],
    [
      17.4452419,
      78.3768909
    ]
  ]
};

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
        17.4459734,
        78.3775977
      ],
      [
        17.4458959,
        78.3777018
      ],
      [
        17.4458235,
        78.3776425
      ],
      [
        17.4459011,
        78.3775385
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
        17.4460514,
        78.3776616
      ],
      [
        17.4459739,
        78.3777656
      ],
      [
        17.4459015,
        78.3777064
      ],
      [
        17.4459791,
        78.3776024
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
        17.4461294,
        78.3777255
      ],
      [
        17.4460519,
        78.3778295
      ],
      [
        17.4459795,
        78.3777703
      ],
      [
        17.4460571,
        78.3776662
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
        17.4462074,
        78.3777893
      ],
      [
        17.4461299,
        78.3778934
      ],
      [
        17.4460575,
        78.3778342
      ],
      [
        17.4461351,
        78.3777301
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
        17.4462854,
        78.3778532
      ],
      [
        17.4462078,
        78.3779573
      ],
      [
        17.4461355,
        78.377898
      ],
      [
        17.4462131,
        78.377794
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
        17.4463634,
        78.3779171
      ],
      [
        17.4462858,
        78.3780212
      ],
      [
        17.4462135,
        78.3779619
      ],
      [
        17.4462911,
        78.3778579
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
        17.4464414,
        78.377981
      ],
      [
        17.4463638,
        78.378085
      ],
      [
        17.4462915,
        78.3780258
      ],
      [
        17.4463691,
        78.3779217
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
        17.4465194,
        78.3780449
      ],
      [
        17.4464418,
        78.3781489
      ],
      [
        17.4463695,
        78.3780897
      ],
      [
        17.4464471,
        78.3779856
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
        17.4465974,
        78.3781087
      ],
      [
        17.4465198,
        78.3782128
      ],
      [
        17.4464475,
        78.3781536
      ],
      [
        17.4465251,
        78.3780495
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
        17.4466754,
        78.3781726
      ],
      [
        17.4465978,
        78.3782767
      ],
      [
        17.4465255,
        78.3782174
      ],
      [
        17.4466031,
        78.3781134
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
        17.4452639,
        78.3772321
      ],
      [
        17.4451891,
        78.3773324
      ],
      [
        17.4451239,
        78.377279
      ],
      [
        17.4451987,
        78.3771787
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
        17.4453334,
        78.377289
      ],
      [
        17.4452586,
        78.3773893
      ],
      [
        17.4451934,
        78.3773359
      ],
      [
        17.4452681,
        78.3772356
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
        17.4454029,
        78.3773459
      ],
      [
        17.4453281,
        78.3774463
      ],
      [
        17.4452628,
        78.3773928
      ],
      [
        17.4453376,
        78.3772925
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
        17.4454724,
        78.3774028
      ],
      [
        17.4453976,
        78.3775032
      ],
      [
        17.4453323,
        78.3774497
      ],
      [
        17.4454071,
        78.3773494
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
        17.4455418,
        78.3774597
      ],
      [
        17.4454671,
        78.3775601
      ],
      [
        17.4454018,
        78.3775066
      ],
      [
        17.4454766,
        78.3774063
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
        17.4456113,
        78.3775166
      ],
      [
        17.4455365,
        78.377617
      ],
      [
        17.4454713,
        78.3775636
      ],
      [
        17.4455461,
        78.3774632
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
        17.4456808,
        78.3775735
      ],
      [
        17.445606,
        78.3776739
      ],
      [
        17.4455408,
        78.3776205
      ],
      [
        17.4456156,
        78.3775201
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
        17.4457503,
        78.3776305
      ],
      [
        17.4456755,
        78.3777308
      ],
      [
        17.4456103,
        78.3776774
      ],
      [
        17.4456851,
        78.377577
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
        17.4458198,
        78.3776874
      ],
      [
        17.445745,
        78.3777877
      ],
      [
        17.4456798,
        78.3777343
      ],
      [
        17.4457546,
        78.3776339
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
        17.4458893,
        78.3777443
      ],
      [
        17.4458145,
        78.3778446
      ],
      [
        17.4457493,
        78.3777912
      ],
      [
        17.4458241,
        78.3776909
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
        17.4451402,
        78.3774899
      ],
      [
        17.4450682,
        78.3775865
      ],
      [
        17.4449959,
        78.3775273
      ],
      [
        17.4450679,
        78.3774307
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
        17.4450627,
        78.377594
      ],
      [
        17.4449907,
        78.3776906
      ],
      [
        17.4449183,
        78.3776314
      ],
      [
        17.4449904,
        78.3775347
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
        17.4452182,
        78.3775538
      ],
      [
        17.4451462,
        78.3776504
      ],
      [
        17.4450739,
        78.3775912
      ],
      [
        17.4451459,
        78.3774946
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
        17.4451407,
        78.3776579
      ],
      [
        17.4450687,
        78.3777545
      ],
      [
        17.4449963,
        78.3776952
      ],
      [
        17.4450684,
        78.3775986
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
        17.4452962,
        78.3776177
      ],
      [
        17.4452242,
        78.3777143
      ],
      [
        17.4451519,
        78.3776551
      ],
      [
        17.4452239,
        78.3775584
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
        17.4452187,
        78.3777217
      ],
      [
        17.4451467,
        78.3778184
      ],
      [
        17.4450743,
        78.3777591
      ],
      [
        17.4451463,
        78.3776625
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
        17.4453742,
        78.3776815
      ],
      [
        17.4453022,
        78.3777782
      ],
      [
        17.4452299,
        78.3777189
      ],
      [
        17.4453019,
        78.3776223
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
        17.4452967,
        78.3777856
      ],
      [
        17.4452247,
        78.3778822
      ],
      [
        17.4451523,
        78.377823
      ],
      [
        17.4452243,
        78.3777264
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
        17.4459772,
        78.3778163
      ],
      [
        17.4459052,
        78.3779129
      ],
      [
        17.4458357,
        78.377856
      ],
      [
        17.4459077,
        78.3777594
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
        17.4460517,
        78.3778773
      ],
      [
        17.4459797,
        78.3779739
      ],
      [
        17.4459102,
        78.377917
      ],
      [
        17.4459822,
        78.3778203
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
        17.4461261,
        78.3779382
      ],
      [
        17.4460541,
        78.3780349
      ],
      [
        17.4459846,
        78.3779779
      ],
      [
        17.4460566,
        78.3778813
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
        17.4462006,
        78.3779992
      ],
      [
        17.4461286,
        78.3780958
      ],
      [
        17.4460591,
        78.3780389
      ],
      [
        17.4461311,
        78.3779423
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
        17.446275,
        78.3780602
      ],
      [
        17.446203,
        78.3781568
      ],
      [
        17.4461335,
        78.3780999
      ],
      [
        17.4462055,
        78.3780033
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
        17.4463495,
        78.3781212
      ],
      [
        17.4462775,
        78.3782178
      ],
      [
        17.446208,
        78.3781609
      ],
      [
        17.44628,
        78.3780642
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
        17.4464239,
        78.3781821
      ],
      [
        17.4463519,
        78.3782787
      ],
      [
        17.4462824,
        78.3782218
      ],
      [
        17.4463544,
        78.3781252
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
        17.4464984,
        78.3782431
      ],
      [
        17.4464264,
        78.3783397
      ],
      [
        17.4463569,
        78.3782828
      ],
      [
        17.4464289,
        78.3781862
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
        17.4465728,
        78.3783041
      ],
      [
        17.4465008,
        78.3784007
      ],
      [
        17.4464313,
        78.3783438
      ],
      [
        17.4465034,
        78.3782472
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
        17.4466473,
        78.378365
      ],
      [
        17.4465753,
        78.3784617
      ],
      [
        17.4465058,
        78.3784048
      ],
      [
        17.4465778,
        78.3783081
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
        17.4458106,
        78.3778713
      ],
      [
        17.4457386,
        78.377968
      ],
      [
        17.4456762,
        78.3779168
      ],
      [
        17.4457482,
        78.3778202
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
        17.4458779,
        78.3779265
      ],
      [
        17.4458059,
        78.3780231
      ],
      [
        17.4457435,
        78.377972
      ],
      [
        17.4458155,
        78.3778754
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
        17.4459453,
        78.3779817
      ],
      [
        17.4458733,
        78.3780783
      ],
      [
        17.4458109,
        78.3780272
      ],
      [
        17.4458829,
        78.3779306
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
        17.4460127,
        78.3780368
      ],
      [
        17.4459407,
        78.3781335
      ],
      [
        17.4458783,
        78.3780823
      ],
      [
        17.4459503,
        78.3779857
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
        17.44608,
        78.378092
      ],
      [
        17.446008,
        78.3781886
      ],
      [
        17.4459456,
        78.3781375
      ],
      [
        17.4460176,
        78.3780409
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
        17.4461474,
        78.3781472
      ],
      [
        17.4460754,
        78.3782438
      ],
      [
        17.446013,
        78.3781927
      ],
      [
        17.446085,
        78.3780961
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
        17.4462148,
        78.3782023
      ],
      [
        17.4461427,
        78.378299
      ],
      [
        17.4460803,
        78.3782479
      ],
      [
        17.4461524,
        78.3781512
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
        17.4462821,
        78.3782575
      ],
      [
        17.4462101,
        78.3783541
      ],
      [
        17.4461477,
        78.378303
      ],
      [
        17.4462197,
        78.3782064
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
        17.4463495,
        78.3783127
      ],
      [
        17.4462775,
        78.3784093
      ],
      [
        17.4462151,
        78.3783582
      ],
      [
        17.4462871,
        78.3782616
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
        17.4464168,
        78.3783678
      ],
      [
        17.4463448,
        78.3784645
      ],
      [
        17.4462824,
        78.3784134
      ],
      [
        17.4463544,
        78.3783167
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
        17.4464842,
        78.378423
      ],
      [
        17.4464122,
        78.3785196
      ],
      [
        17.4463498,
        78.3784685
      ],
      [
        17.4464218,
        78.3783719
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
        17.4465516,
        78.3784782
      ],
      [
        17.4464795,
        78.3785748
      ],
      [
        17.4464172,
        78.3785237
      ],
      [
        17.4464892,
        78.3784271
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
        17.4454328,
        78.3777654
      ],
      [
        17.445358,
        78.3778657
      ],
      [
        17.4452956,
        78.3778146
      ],
      [
        17.4453704,
        78.3777143
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
        17.4455001,
        78.3778206
      ],
      [
        17.4454253,
        78.3779209
      ],
      [
        17.4453629,
        78.3778698
      ],
      [
        17.4454377,
        78.3777695
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
        17.4455675,
        78.3778757
      ],
      [
        17.4454927,
        78.3779761
      ],
      [
        17.4454303,
        78.377925
      ],
      [
        17.4455051,
        78.3778246
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
        17.4456349,
        78.3779309
      ],
      [
        17.4455601,
        78.3780312
      ],
      [
        17.4454977,
        78.3779801
      ],
      [
        17.4455725,
        78.3778798
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
        17.4457022,
        78.3779861
      ],
      [
        17.4456274,
        78.3780864
      ],
      [
        17.445565,
        78.3780353
      ],
      [
        17.4456398,
        78.377935
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
        17.4457696,
        78.3780412
      ],
      [
        17.4456948,
        78.3781416
      ],
      [
        17.4456324,
        78.3780905
      ],
      [
        17.4457072,
        78.3779901
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
        17.4458369,
        78.3780964
      ],
      [
        17.4457622,
        78.3781967
      ],
      [
        17.4456998,
        78.3781456
      ],
      [
        17.4457745,
        78.3780453
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
        17.4459043,
        78.3781516
      ],
      [
        17.4458295,
        78.3782519
      ],
      [
        17.4457671,
        78.3782008
      ],
      [
        17.4458419,
        78.3781005
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
        17.4453164,
        78.3779215
      ],
      [
        17.4452416,
        78.3780218
      ],
      [
        17.4451792,
        78.3779707
      ],
      [
        17.445254,
        78.3778704
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
        17.4453838,
        78.3779767
      ],
      [
        17.445309,
        78.378077
      ],
      [
        17.4452466,
        78.3780259
      ],
      [
        17.4453214,
        78.3779256
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
        17.4454512,
        78.3780318
      ],
      [
        17.4453764,
        78.3781322
      ],
      [
        17.445314,
        78.3780811
      ],
      [
        17.4453888,
        78.3779807
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
        17.4455185,
        78.378087
      ],
      [
        17.4454437,
        78.3781873
      ],
      [
        17.4453813,
        78.3781362
      ],
      [
        17.4454561,
        78.3780359
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
        17.4455859,
        78.3781422
      ],
      [
        17.4455111,
        78.3782425
      ],
      [
        17.4454487,
        78.3781914
      ],
      [
        17.4455235,
        78.3780911
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
        17.4456532,
        78.3781973
      ],
      [
        17.4455785,
        78.3782977
      ],
      [
        17.4455161,
        78.3782466
      ],
      [
        17.4455908,
        78.3781462
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
        17.4457206,
        78.3782525
      ],
      [
        17.4456458,
        78.3783528
      ],
      [
        17.4455834,
        78.3783017
      ],
      [
        17.4456582,
        78.3782014
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
        17.445788,
        78.3783077
      ],
      [
        17.4457132,
        78.378408
      ],
      [
        17.4456508,
        78.3783569
      ],
      [
        17.4457256,
        78.3782566
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
        17.4452905,
        78.3781157
      ],
      [
        17.4452157,
        78.378216
      ],
      [
        17.4451504,
        78.3781626
      ],
      [
        17.4452252,
        78.3780622
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
        17.4453614,
        78.3781737
      ],
      [
        17.4452866,
        78.3782741
      ],
      [
        17.4452213,
        78.3782207
      ],
      [
        17.4452961,
        78.3781203
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
        17.4454323,
        78.3782318
      ],
      [
        17.4453575,
        78.3783321
      ],
      [
        17.4452923,
        78.3782787
      ],
      [
        17.445367,
        78.3781784
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
        17.4455032,
        78.3782899
      ],
      [
        17.4454284,
        78.3783902
      ],
      [
        17.4453632,
        78.3783368
      ],
      [
        17.4454379,
        78.3782365
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
        17.4455741,
        78.3783479
      ],
      [
        17.4454993,
        78.3784483
      ],
      [
        17.4454341,
        78.3783949
      ],
      [
        17.4455089,
        78.3782945
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
        17.445645,
        78.378406
      ],
      [
        17.4455702,
        78.3785064
      ],
      [
        17.445505,
        78.3784529
      ],
      [
        17.4455798,
        78.3783526
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
        17.4457159,
        78.3784641
      ],
      [
        17.4456411,
        78.3785644
      ],
      [
        17.4455759,
        78.378511
      ],
      [
        17.4456507,
        78.3784107
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
        17.4457868,
        78.3785222
      ],
      [
        17.445712,
        78.3786225
      ],
      [
        17.4456468,
        78.3785691
      ],
      [
        17.4457216,
        78.3784687
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
        17.4462038,
        78.3784806
      ],
      [
        17.4461594,
        78.3785401
      ],
      [
        17.4460318,
        78.3784355
      ],
      [
        17.4460761,
        78.3783761
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
        17.4461567,
        78.3785438
      ],
      [
        17.4461124,
        78.3786032
      ],
      [
        17.4459847,
        78.3784987
      ],
      [
        17.446029,
        78.3784392
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
        17.4461096,
        78.3786069
      ],
      [
        17.4460653,
        78.3786664
      ],
      [
        17.4459376,
        78.3785619
      ],
      [
        17.4459819,
        78.3785024
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
        17.4460625,
        78.3786701
      ],
      [
        17.4460182,
        78.3787296
      ],
      [
        17.4458905,
        78.3786251
      ],
      [
        17.4459349,
        78.3785656
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
        17.4460154,
        78.3787333
      ],
      [
        17.4459711,
        78.3787928
      ],
      [
        17.4458435,
        78.3786882
      ],
      [
        17.4458878,
        78.3786288
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
        17.4459683,
        78.3787965
      ],
      [
        17.445924,
        78.3788559
      ],
      [
        17.4457964,
        78.3787514
      ],
      [
        17.4458407,
        78.378692
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
        17.4459212,
        78.3788597
      ],
      [
        17.4458769,
        78.3789191
      ],
      [
        17.4457493,
        78.3788146
      ],
      [
        17.4457936,
        78.3787551
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
        17.4458741,
        78.3789228
      ],
      [
        17.4458298,
        78.3789823
      ],
      [
        17.4457022,
        78.3788778
      ],
      [
        17.4457465,
        78.3788183
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
        17.445827,
        78.378986
      ],
      [
        17.4457827,
        78.3790455
      ],
      [
        17.4456551,
        78.3789409
      ],
      [
        17.4456994,
        78.3788815
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
        17.44578,
        78.3790492
      ],
      [
        17.4457356,
        78.3791087
      ],
      [
        17.445608,
        78.3790041
      ],
      [
        17.4456523,
        78.3789447
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
        17.4453924,
        78.3784385
      ],
      [
        17.4453176,
        78.3785389
      ],
      [
        17.4452524,
        78.3784854
      ],
      [
        17.4453272,
        78.3783851
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
        17.4454633,
        78.3784966
      ],
      [
        17.4453885,
        78.3785969
      ],
      [
        17.4453233,
        78.3785435
      ],
      [
        17.4453981,
        78.3784432
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
        17.4455342,
        78.3785547
      ],
      [
        17.4454594,
        78.378655
      ],
      [
        17.4453942,
        78.3786016
      ],
      [
        17.445469,
        78.3785012
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
        17.4456051,
        78.3786127
      ],
      [
        17.4455303,
        78.3787131
      ],
      [
        17.4454651,
        78.3786597
      ],
      [
        17.4455399,
        78.3785593
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
        17.445676,
        78.3786708
      ],
      [
        17.4456012,
        78.3787712
      ],
      [
        17.445536,
        78.3787177
      ],
      [
        17.4456108,
        78.3786174
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
        17.4457469,
        78.3787289
      ],
      [
        17.4456721,
        78.3788292
      ],
      [
        17.4456069,
        78.3787758
      ],
      [
        17.4456817,
        78.3786755
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
        17.4458178,
        78.378787
      ],
      [
        17.445743,
        78.3788873
      ],
      [
        17.4456778,
        78.3788339
      ],
      [
        17.4457526,
        78.3787335
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
        17.4458887,
        78.378845
      ],
      [
        17.445814,
        78.3789454
      ],
      [
        17.4457487,
        78.3788919
      ],
      [
        17.4458235,
        78.3787916
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
        17.4459596,
        78.3789031
      ],
      [
        17.4458849,
        78.3790034
      ],
      [
        17.4458196,
        78.37895
      ],
      [
        17.4458944,
        78.3788497
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
        17.4460306,
        78.3789612
      ],
      [
        17.4459558,
        78.3790615
      ],
      [
        17.4458905,
        78.3790081
      ],
      [
        17.4459653,
        78.3789077
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
        17.4452558,
        78.3785421
      ],
      [
        17.4451782,
        78.3786462
      ],
      [
        17.4451144,
        78.3785939
      ],
      [
        17.445192,
        78.3784899
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
        17.4453253,
        78.378599
      ],
      [
        17.4452477,
        78.3787031
      ],
      [
        17.4451839,
        78.3786508
      ],
      [
        17.4452615,
        78.3785468
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
        17.4453948,
        78.3786559
      ],
      [
        17.4453172,
        78.37876
      ],
      [
        17.4452534,
        78.3787077
      ],
      [
        17.445331,
        78.3786037
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
        17.4454643,
        78.3787128
      ],
      [
        17.4453867,
        78.3788169
      ],
      [
        17.4453229,
        78.3787646
      ],
      [
        17.4454004,
        78.3786606
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
        17.4455338,
        78.3787698
      ],
      [
        17.4454562,
        78.3788738
      ],
      [
        17.4453924,
        78.3788216
      ],
      [
        17.4454699,
        78.3787175
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
        17.4456032,
        78.3788267
      ],
      [
        17.4455257,
        78.3789307
      ],
      [
        17.4454619,
        78.3788785
      ],
      [
        17.4455394,
        78.3787744
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
        17.4456727,
        78.3788836
      ],
      [
        17.4455952,
        78.3789876
      ],
      [
        17.4455314,
        78.3789354
      ],
      [
        17.4456089,
        78.3788313
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
        17.4457422,
        78.3789405
      ],
      [
        17.4456647,
        78.3790445
      ],
      [
        17.4456008,
        78.3789923
      ],
      [
        17.4456784,
        78.3788882
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
        17.4458117,
        78.3789974
      ],
      [
        17.4457342,
        78.3791014
      ],
      [
        17.4456703,
        78.3790492
      ],
      [
        17.4457479,
        78.3789451
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
        17.4458812,
        78.3790543
      ],
      [
        17.4458036,
        78.3791584
      ],
      [
        17.4457398,
        78.3791061
      ],
      [
        17.4458174,
        78.379002
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
        17.4459507,
        78.3791112
      ],
      [
        17.4458731,
        78.3792153
      ],
      [
        17.4458093,
        78.379163
      ],
      [
        17.4458869,
        78.3790589
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
        17.4460202,
        78.3791681
      ],
      [
        17.4459426,
        78.3792722
      ],
      [
        17.4458788,
        78.3792199
      ],
      [
        17.4459564,
        78.3791159
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
        17.4460897,
        78.379225
      ],
      [
        17.4460121,
        78.3793291
      ],
      [
        17.4459483,
        78.3792768
      ],
      [
        17.4460259,
        78.3791728
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
        17.4461592,
        78.3792819
      ],
      [
        17.4460816,
        78.379386
      ],
      [
        17.4460178,
        78.3793337
      ],
      [
        17.4460953,
        78.3792297
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
        17.4462286,
        78.3793388
      ],
      [
        17.4461511,
        78.3794429
      ],
      [
        17.4460873,
        78.3793906
      ],
      [
        17.4461648,
        78.3792866
      ]
    ],
    "isCornerPlot": true,
    "vastuCompliant": true,
    "roadWidthFt": 60,
    "description": "Plot #109 in Premium Enclave, East facing with direct road connectivity."
  }
];
