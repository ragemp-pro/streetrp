// ----------------------------
// Collection structure for adminlogs
// ----------------------------
db.getCollection("adminlogs").drop();
db.createCollection("adminlogs");

// ----------------------------
// Collection structure for businesses
// ----------------------------
db.getCollection("businesses").drop();
db.createCollection("businesses");

// ----------------------------
// Documents of businesses
// ----------------------------
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e33fe"),
    paymentTime: null,
    paid: 1,
    name: "Паркинг",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e33ff"),
        x: -2030.14184570313,
        y: -465.561584472656,
        z: 11.6039781570435
    },
    price: 2000000,
    income: 60000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e3404"),
    paymentTime: null,
    paid: 1,
    name: "Автомойка",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e3405"),
        x: 37.6212005615234,
        y: -1405.52258300781,
        z: 29.343391418457
    },
    price: 6000000,
    income: 130000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e3400"),
    paymentTime: null,
    paid: 1,
    name: "АЗС",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e3401"),
        x: -1828.17919921875,
        y: 798.174865722656,
        z: 138.180618286133
    },
    price: 5000000,
    income: 100000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e3406"),
    paymentTime: null,
    paid: 1,
    name: "Магазин",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e3407"),
        x: 170.403823852539,
        y: -1799.39636230469,
        z: 29.3157978057861
    },
    price: 3000000,
    income: 60000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e340c"),
    paymentTime: null,
    paid: 1,
    name: "Алкомаркет",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e340d"),
        x: 97.6915435791016,
        y: -1309.61511230469,
        z: 29.2790641784668
    },
    price: 6000000,
    income: 135000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e340e"),
    paymentTime: null,
    paid: 1,
    name: "Свалка",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e340f"),
        x: 85.7828369140625,
        y: -1192.63366699219,
        z: 29.5517196655273
    },
    price: 1000000,
    income: 30000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7d827dc6f3d53f9d9e340a"),
    paymentTime: null,
    paid: 1,
    name: "Предприятие",
    position: {
        _id: ObjectId("5c7d827dc6f3d53f9d9e340b"),
        x: 355.228729248047,
        y: -1283.5810546875,
        z: 32.5250968933105
    },
    price: 15000000,
    income: 285000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7ab459d0afa226ecacd3d6"),
    paymentTime: null,
    paid: NumberInt("1"),
    name: "Автосалон",
    position: {
        _id: ObjectId("5c7ab459d0afa226ecacd3d7"),
        x: -50.5213394165039,
        y: -1089.72351074219,
        z: 26.4223499298096
    },
    price: 10000000,
    income: 165000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5c7ab459d0afa226ecacd3dc"),
    paymentTime: null,
    paid: 1,
    name: "Кафе",
    position: {
        _id: ObjectId("5c7ab459d0afa226ecacd3dd"),
        x: -1271.72094726563,
        y: -1200.08081054688,
        z: 5.3662486076355
    },
    price: 4000000,
    income: 85000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee17"),
    paymentTime: null,
    paid: 1,
    name: "Ремонт очков",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee18"),
        x: 931.679138183594,
        y: -1963.93591308594,
        z: 30.4074096679688
    },
    price: 1400000,
    income: 55000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee15"),
    paymentTime: null,
    paid: 1,
    name: "Паркинг",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee16"),
        x: -281.283050537109,
        y: -888.719970703125,
        z: 31.318021774292
    },
    price: 2000000,
    income: 80000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee11"),
    paymentTime: null,
    paid: 1,
    name: "АЗС",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee12"),
        x: -523.674072265625,
        y: -1229.98999023438,
        z: 18.4517021179199
    },
    price: 9500000,
    income: 140000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee13"),
    paymentTime: null,
    paid: 1,
    name: "Паркинг",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee14"),
        x: -451.178161621094,
        y: -793.900329589844,
        z: 30.5429229736328
    },
    price: 7000000,
    income: 155000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee19"),
    paymentTime: null,
    paid: 1,
    name: "Автомойка",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee1a"),
        x: 869.645629882813,
        y: -2327.3857421875,
        z: 30.6029510498047
    },
    price: 6500000,
    income: 140000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee1b"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Логистика",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee1c"),
        x: 766.526672363281,
        y: -2482.12719726563,
        z: 20.1583786010742
    },
    price: 12000000,
    income: 62000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee1f"),
    paymentTime: null,
    paid: 1,
    name: "Стройка",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee20"),
        x: 236.596038818359,
        y: -2506.52001953125,
        z: 6.48508024215698
    },
    price: 3800000,
    income: 75000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee21"),
    paymentTime: null,
    paid: 1,
    name: "Предприятие",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee22"),
        x: 998.463989257813,
        y: -1784.93469238281,
        z: 32.4669380187988
    },
    price: 12000000,
    income: 550000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee23"),
    paymentTime: null,
    paid: 1,
    name: "Магазин еды",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee24"),
        x: 1129.33666992188,
        y: -989.388732910156,
        z: 45.9678344726563
    },
    price: 6500000,
    income: 90000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee25"),
    paymentTime: null,
    paid: 1,
    name: "Ларек",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee26"),
        x: -1105.99670410156,
        y: -1699.99841308594,
        z: 4.37208604812622
    },
    price: 1100000,
    income: 42000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee27"),
    paymentTime: null,
    paid: 1,
    name: "Паркинг",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee28"),
        x: -1184.27685546875,
        y: -1509.46557617188,
        z: 4.64930534362793
    },
    price: 4200000,
    income: 92000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee29"),
    paymentTime: null,
    paid: 1,
    name: "Магазин одежды",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee2a"),
        x: -1176.02709960938,
        y: -1568.08325195313,
        z: 4.35606098175049
    },
    price: 1300000,
    income: 45000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee2d"),
    paymentTime: null,
    paid: 1,
    name: "Ресторан",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee2e"),
        x: -1161.52709960938,
        y: -1532.50756835938,
        z: 4.53738784790039
    },
    price: 4200000,
    income: 92000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ca50e21ac37684daec1ee2b"),
    paymentTime: null,
    paid: 1,
    name: "Магазин аксессуаров",
    position: {
        _id: ObjectId("5ca50e21ac37684daec1ee2c"),
        x: -1186.34387207031,
        y: -1553.94287109375,
        z: 4.36170387268066
    },
    price: 1100000,
    income: 38000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5cae43ee0ac8e41694cd6e57"),
    paymentTime: null,
    paid: 1,
    name: "Аренда апартаментов",
    position: {
        _id: ObjectId("5cae43ee0ac8e41694cd6e58"),
        x: -962.943786621094,
        y: -1428.81494140625,
        z: 7.67916679382324
    },
    price: 1000000,
    income: 30000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5cbc5181a1528d033a93bbb3"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Электростанция",
    position: {
        _id: ObjectId("5cbc5181a1528d033a93bbb4"),
        x: 531.970764160156,
        y: -1664.41198730469,
        z: 29.2869548797607
    },
    price: 30000000,
    income: 230000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5cdd64fcd88402109948eb83"),
    paymentTime: null,
    paid: 1,
    name: "Кинотеатр",
    position: {
        _id: ObjectId("5cdd64fcd88402109948eb84"),
        x: -1300.1240234375,
        y: -711.296569824219,
        z: 24.3201656341553
    },
    price: 20000000,
    income: 200000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ce9ad281b85fd1e89436507"),
    paymentTime: null,
    paid: 1,
    name: "Клуб",
    position: {
        _id: ObjectId("5ce9ad281b85fd1e89436508"),
        x: -1655.00012207031,
        y: -1000.16345214844,
        z: 13.0174980163574
    },
    price: 6000000,
    income: 132000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5cf12553fd8f9c5dd8e45f7d"),
    paymentTime: null,
    paid: 1,
    name: "Отель",
    position: {
        _id: ObjectId("5cf12553fd8f9c5dd8e45f7e"),
        x: -871.1591796875,
        y: -2157.2060546875,
        z: 8.9361743927002
    },
    price: 20000000,
    income: 200000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d1e3a14f18b881959e517f1"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: " Станция",
    position: {
        _id: ObjectId("5d1e3a14f18b881959e517f2"),
        x: 2854.89672851563,
        y: 1479.85766601563,
        z: 24.7356224060059
    },
    price: 40000000,
    income: 280000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d1e3ac2f18b881959e52360"),
    paymentTime: null,
    paid: 1,
    name: "Свалка",
    position: {
        _id: ObjectId("5d1e3ac2f18b881959e52361"),
        x: 2403.88525390625,
        y: 3127.76245117188,
        z: 48.1531753540039
    },
    price: 15000000,
    income: 150000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d1e3c06f18b881959e53814"),
    paymentTime: null,
    paid: 1,
    name: "Станция",
    position: {
        _id: ObjectId("5d1e3c06f18b881959e53815"),
        x: 2570.40209960938,
        y: 4667.78369140625,
        z: 34.0767631530762
    },
    price: 6000000,
    income: 130000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d2371e1f48b4f0265b1d6c8"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Предприятие",
    position: {
        _id: ObjectId("5d2371e1f48b4f0265b1d6c9"),
        x: 2872.87719726563,
        y: 4423.123046875,
        z: 48.737621307373
    },
    price: 40000000,
    income: 260000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d9124b500cf35204a86bc19"),
    paymentTime: null,
    paid: 1,
    name: "Ларек N1",
    position: {
        _id: ObjectId("5d9124b500cf35204a86bc1a"),
        x: -1635.76928710938,
        y: -1091.125,
        z: 13.0286340713501
    },
    price: 3200000,
    income: 30000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d91251700cf35204a86bc25"),
    paymentTime: null,
    paid: 1,
    name: "Пекарня",
    position: {
        _id: ObjectId("5d91251700cf35204a86bc26"),
        x: -3047.34252929688,
        y: 615.520812988281,
        z: 7.31401634216309
    },
    price: 10000000,
    income: 105000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d924c50e46df54801de8e58"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Автомойка",
    position: {
        _id: ObjectId("5d924c50e46df54801de8e59"),
        x: 2516.08447265625,
        y: 4203.14453125,
        z: 39.995044708252
    },
    price: 30000000,
    income: 200000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d924cdae46df54801de8e73"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Предприятие",
    position: {
        _id: ObjectId("5d924cdae46df54801de8e74"),
        x: 287.247161865234,
        y: 2843.72998046875,
        z: 44.7041893005371
    },
    price: 200000000,
    income: 2100000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d924da9e46df54801de8e95"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Паром",
    position: {
        _id: ObjectId("5d924da9e46df54801de8e96"),
        x: 1236.05065917969,
        y: -2912.23706054688,
        z: 25.329984664917
    },
    price: 120000000,
    income: 1100000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d924e68e46df54801de8eb7"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "АЗС",
    position: {
        _id: ObjectId("5d924e68e46df54801de8eb8"),
        x: 1698.51525878906,
        y: 6425.87353515625,
        z: 32.7639045715332
    },
    price: 50000000,
    income: 380000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5d924ee6e46df54801de8ec9"),
    paymentTime: null,
    paid: 1,
    name: "Автосервис",
    position: {
        _id: ObjectId("5d924ee6e46df54801de8eca"),
        x: 105.005500793457,
        y: 6613.59521484375,
        z: 32.3973503112793
    },
    price: 30000000,
    income: 280000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dcfea8c455cde09083f94fe"),
    paymentTime: null,
    paid: 1,
    name: "Кафе \"Monster Bites\"",
    position: {
        _id: ObjectId("5dcfea8c455cde09083f94ff"),
        x: 2544.5634765625,
        y: 2591.51782226563,
        z: 37.9448738098145
    },
    price: 1000000,
    income: 30000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dcfeb15455cde09083f9528"),
    paymentTime: null,
    paid: 1,
    name: "Супермаркет",
    position: {
        _id: ObjectId("5dcfeb15455cde09083f9529"),
        x: 1726.90551757813,
        y: 4765.9287109375,
        z: 41.9066696166992
    },
    price: 3000000,
    income: 55000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dd42829b6b37a38abc062a4"),
    paymentTime: null,
    paid: 1,
    name: "Автосалон \"Сэнди Шорс\"",
    position: {
        _id: ObjectId("5dd42829b6b37a38abc062a5"),
        x: 1289.45031738281,
        y: 2638.72216796875,
        z: 38.5500221252441
    },
    price: 20000000,
    income: 140000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dd428eab6b37a38abc062d5"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Тату Салон \"Сэнди Шорс\"",
    position: {
        _id: ObjectId("5dd428eab6b37a38abc062d6"),
        x: 1865.89404296875,
        y: 3760.37646484375,
        z: 33.0018310546875
    },
    price: 10000000,
    income: 88000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dd42952b6b37a38abc062e4"),
    paymentTime: null,
    paid: 1,
    name: "Бар \"У Джо\"",
    position: {
        _id: ObjectId("5dd42952b6b37a38abc062e5"),
        x: 1980.13977050781,
        y: 3049.19506835938,
        z: 50.4318771362305
    },
    price: 5000000,
    income: 47000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dd429cdb6b37a38abc062ff"),
    paymentTime: null,
    paid: 1,
    name: "Супермаркет \"Палето Бэй\"",
    position: {
        _id: ObjectId("5dd429cdb6b37a38abc06300"),
        x: -91.881103515625,
        y: 6515.07958984375,
        z: 32.0997848510742
    },
    price: 10000000,
    income: 100000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dd42a97b6b37a38abc06321"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Фабрика \"Лос Сантос\"",
    position: {
        _id: ObjectId("5dd42a97b6b37a38abc06322"),
        x: 1742.59655761719,
        y: -1623.27453613281,
        z: 112.413284301758
    },
    price: 40000000,
    income: 400000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5dd42b90b6b37a38abc06356"),
    paymentTime: null,
    paid: 1,
    name: "Ферма \"Грейпсид\"",
    position: {
        _id: ObjectId("5dd42b90b6b37a38abc06357"),
        x: 2309.93994140625,
        y: 4885.84716796875,
        z: 41.808277130127
    },
    price: 20000000,
    income: 185000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5de197b68c98d20216ae2aba"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Saving Bank",
    position: {
        _id: ObjectId("5de197b68c98d20216ae2abb"),
        x: -113.777862548828,
        y: 6473.5078125,
        z: 31.6267242431641
    },
    price: 100000000,
    income: 1600000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5de19bd38c98d20216ae2b33"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Гостиница Лес-Палето",
    position: {
        _id: ObjectId("5de19bd38c98d20216ae2b34"),
        x: -703.676147460938,
        y: 5790.1650390625,
        z: 17.5217895507813
    },
    price: 65000000,
    income: 920000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a7972c8127b46184c4b34"),
    paymentTime: null,
    paid: 1,
    name: "Станция тех.обслуживания",
    position: {
        _id: ObjectId("5e0a7972c8127b46184c4b35"),
        x: 905.692504882813,
        y: 3553.71533203125,
        z: 33.8204650878906
    },
    price: 50000000,
    income: 800000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a7a1cc8127b46184c4b63"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "АЗС Палето Бэй",
    position: {
        _id: ObjectId("5e0a7a1cc8127b46184c4b64"),
        x: -93.2443313598633,
        y: 6410.52001953125,
        z: 31.6404628753662
    },
    price: 80000000,
    income: 1200000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a7ab2c8127b46184c4b8c"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Магазин Одежды",
    position: {
        _id: ObjectId("5e0a7ab2c8127b46184c4b8d"),
        x: 1701.73217773438,
        y: 4829.2890625,
        z: 41.9705963134766
    },
    price: 50000000,
    income: 800000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a7fbec8127b46184c4d29"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Строительный Магазин",
    position: {
        _id: ObjectId("5e0a7fbec8127b46184c4d2a"),
        x: 2709.77294921875,
        y: 3455.03173828125,
        z: 56.3173332214355
    },
    price: 200000000,
    income: 2100000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a803bc8127b46184c4d44"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Paint SHOP",
    position: {
        _id: ObjectId("5e0a803bc8127b46184c4d45"),
        x: 1658.38891601563,
        y: 4839.005859375,
        z: 42.0326080322266
    },
    price: 50000000,
    income: 800000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a80abc8127b46184c4d5b"),
    paymentTime: null,
    paid: 1,
    name: "Магазин 24/7",
    position: {
        _id: ObjectId("5e0a80abc8127b46184c4d5c"),
        x: 1702.53369140625,
        y: 4916.3271484375,
        z: 42.0781364440918
    },
    price: 100000000,
    income: 1600000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a8179c8127b46184c4d8d"),
    paymentTime: null,
    paid: 1,
    name: "Магазин Фруктов",
    position: {
        _id: ObjectId("5e0a8179c8127b46184c4d8e"),
        x: 1791.80163574219,
        y: 4594.1044921875,
        z: 37.6829299926758
    },
    price: 25000000,
    income: 420000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a821cc8127b46184c4dad"),
    paymentTime: null,
    paid: 1,
    name: "АЗС",
    position: {
        _id: ObjectId("5e0a821cc8127b46184c4dae"),
        x: 2559.94897460938,
        y: 373.662780761719,
        z: 108.62126159668
    },
    price: 150000000,
    income: 2000000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e0a828fc8127b46184c4dc6"),
    paymentTime: null,
    paid: 1,
    name: "Bishop's Chickens",
    position: {
        _id: ObjectId("5e0a828fc8127b46184c4dc7"),
        x: 2580.8134765625,
        y: 464.327514648438,
        z: 108.61841583252
    },
    price: 55000000,
    income: 990000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e504d836182894ef3e69e6d"),
    paymentTime: null,
    paid: 1,
    name: "Ресторан \"Pearls\"",
    position: {
        _id: ObjectId("5e504d836182894ef3e69e6e"),
        x: -1830.49841308594,
        y: -1180.35095214844,
        z: 19.1685562133789
    },
    price: 50000000,
    income: 800000,
    __v: 0,
    owner: null,
    forSale: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e504de76182894ef3e69e8a"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Тюнинг центр \"LS Customs\"",
    position: {
        _id: ObjectId("5e504de76182894ef3e69e8b"),
        x: -1142.47180175781,
        y: -1992.89331054688,
        z: 13.1641521453857
    },
    price: 50000000,
    income: 800000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e504e4a6182894ef3e69e9d"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Hotel \"Crasstenbarg\"",
    position: {
        _id: ObjectId("5e504e4a6182894ef3e69e9e"),
        x: -878.442993164063,
        y: -2111.685546875,
        z: 9.91829299926758
    },
    price: 110000000,
    income: 1600000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e50517d6182894ef3e69f0e"),
    forSale: null,
    paymentTime: null,
    paid: NumberInt("7"),
    name: "Стадион PANIC",
    position: {
        _id: ObjectId("5e50517d6182894ef3e69f0f"),
        x: -282.343414306641,
        y: -1922.28662109375,
        z: 29.9460258483887
    },
    price: 322000000,
    income: 2000000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5e52c0fa6182894ef3e6ce56"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "Магазин",
    position: {
        _id: ObjectId("5e52c0fa6182894ef3e6ce57"),
        x: 1703.08386230469,
        y: 4841.185546875,
        z: 42.0255813598633
    },
    price: 80000000,
    income: 1400000,
    __v: 0,
    owner: null
} ]);
db.getCollection("businesses").insert([ {
    _id: ObjectId("5ea9631b8f68c04355aa32b0"),
    forSale: null,
    paymentTime: null,
    paid: 1,
    name: "FRIDGIT",
    position: {
        _id: ObjectId("5ea9631b8f68c04355aa32b1"),
        x: 868.657165527344,
        y: -1640.07507324219,
        z: 30.3371696472168
    },
    price: 100000000,
    income: 1000000,
    __v: 0,
    owner: null
} ]);

// ----------------------------
// Collection structure for characters
// ----------------------------
db.getCollection("characters").drop();
db.createCollection("characters");
db.getCollection("characters").createIndex({
    uid: NumberInt("1")
}, {
    name: "uid_1",
    background: true,
    unique: true
});


// ----------------------------
// Collection structure for clothes
// ----------------------------
db.getCollection("clothes").drop();
db.createCollection("clothes");

// ----------------------------
// Documents of clothes
// ----------------------------
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a419bfb51b8d885ab461d3"),
    gender: "female",
    category: "hat",
    style: NumberInt("4"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a419fcb51b8d885ab461d4"),
    gender: "female",
    category: "shirt",
    style: NumberInt("0"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509983730f6c9706e2676"),
    gender: "female",
    category: "hat",
    style: NumberInt("1"),
    price: NumberInt("100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509bb3730f6c9706e2677"),
    gender: "female",
    category: "hat",
    style: NumberInt("5"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509c53730f6c9706e2678"),
    gender: "female",
    category: "hat",
    style: NumberInt("7"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509cc3730f6c9706e2679"),
    gender: "female",
    category: "hat",
    style: NumberInt("9"),
    price: NumberInt("160"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509d53730f6c9706e267a"),
    gender: "female",
    category: "hat",
    style: NumberInt("12"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509ef3730f6c9706e267b"),
    gender: "female",
    category: "hat",
    style: NumberInt("13"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509f73730f6c9706e267c"),
    gender: "female",
    category: "hat",
    style: NumberInt("14"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a509ff3730f6c9706e267d"),
    gender: "female",
    category: "hat",
    style: NumberInt("20"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a093730f6c9706e267e"),
    gender: "female",
    category: "hat",
    style: NumberInt("21"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a113730f6c9706e267f"),
    gender: "female",
    category: "hat",
    style: NumberInt("22"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a193730f6c9706e2680"),
    gender: "female",
    category: "hat",
    style: NumberInt("23"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a203730f6c9706e2681"),
    gender: "female",
    category: "hat",
    style: NumberInt("24"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a283730f6c9706e2682"),
    gender: "female",
    category: "hat",
    style: NumberInt("25"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a2f3730f6c9706e2683"),
    gender: "female",
    category: "hat",
    style: NumberInt("28"),
    price: NumberInt("350"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a373730f6c9706e2684"),
    gender: "female",
    category: "hat",
    style: NumberInt("29"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a3f3730f6c9706e2685"),
    gender: "female",
    category: "hat",
    style: NumberInt("30"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a453730f6c9706e2686"),
    gender: "female",
    category: "hat",
    style: NumberInt("31"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a4a3730f6c9706e2687"),
    gender: "female",
    category: "hat",
    style: NumberInt("32"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a4f3730f6c9706e2688"),
    gender: "female",
    category: "hat",
    style: NumberInt("33"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a543730f6c9706e2689"),
    gender: "female",
    category: "hat",
    style: NumberInt("34"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a593730f6c9706e268a"),
    gender: "female",
    category: "hat",
    style: NumberInt("35"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a603730f6c9706e268b"),
    gender: "female",
    category: "hat",
    style: NumberInt("36"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a683730f6c9706e268c"),
    gender: "female",
    category: "hat",
    style: NumberInt("39"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a713730f6c9706e268d"),
    gender: "female",
    category: "hat",
    style: NumberInt("40"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a763730f6c9706e268e"),
    gender: "female",
    category: "hat",
    style: NumberInt("41"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a7e3730f6c9706e268f"),
    gender: "female",
    category: "hat",
    style: NumberInt("42"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a843730f6c9706e2690"),
    gender: "female",
    category: "hat",
    style: NumberInt("43"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a893730f6c9706e2691"),
    gender: "female",
    category: "hat",
    style: NumberInt("44"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a8d3730f6c9706e2692"),
    gender: "female",
    category: "hat",
    style: NumberInt("53"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a943730f6c9706e2693"),
    gender: "female",
    category: "hat",
    style: NumberInt("54"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50a993730f6c9706e2694"),
    gender: "female",
    category: "hat",
    style: NumberInt("55"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50aa33730f6c9706e2695"),
    gender: "female",
    category: "hat",
    style: NumberInt("56"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50aa93730f6c9706e2696"),
    gender: "female",
    category: "hat",
    style: NumberInt("64"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50aad3730f6c9706e2697"),
    gender: "female",
    category: "hat",
    style: NumberInt("65"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ab13730f6c9706e2698"),
    gender: "female",
    category: "hat",
    style: NumberInt("93"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50abd3730f6c9706e2699"),
    gender: "female",
    category: "hat",
    style: NumberInt("94"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ac43730f6c9706e269a"),
    gender: "female",
    category: "hat",
    style: NumberInt("95"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50acd3730f6c9706e269b"),
    gender: "female",
    category: "hat",
    style: NumberInt("96"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ad13730f6c9706e269c"),
    gender: "female",
    category: "hat",
    style: NumberInt("97"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ad63730f6c9706e269d"),
    gender: "female",
    category: "hat",
    style: NumberInt("98"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ade3730f6c9706e269e"),
    gender: "female",
    category: "hat",
    style: NumberInt("99"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ae93730f6c9706e269f"),
    gender: "female",
    category: "hat",
    style: NumberInt("100"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50aed3730f6c9706e26a0"),
    gender: "female",
    category: "hat",
    style: NumberInt("108"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50af83730f6c9706e26a1"),
    gender: "female",
    category: "hat",
    style: NumberInt("134"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b133730f6c9706e26a2"),
    gender: "female",
    category: "jacket",
    style: NumberInt("1"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b1b3730f6c9706e26a3"),
    gender: "female",
    category: "jacket",
    style: NumberInt("3"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b223730f6c9706e26a4"),
    gender: "female",
    category: "jacket",
    style: NumberInt("6"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b273730f6c9706e26a5"),
    gender: "female",
    category: "jacket",
    style: NumberInt("7"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b2e3730f6c9706e26a6"),
    gender: "female",
    category: "jacket",
    style: NumberInt("8"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b353730f6c9706e26a7"),
    gender: "female",
    category: "jacket",
    style: NumberInt("10"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b3c3730f6c9706e26a8"),
    gender: "female",
    category: "jacket",
    style: NumberInt("20"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b443730f6c9706e26a9"),
    gender: "female",
    category: "jacket",
    style: NumberInt("21"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b4f3730f6c9706e26aa"),
    gender: "female",
    category: "jacket",
    style: NumberInt("24"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b683730f6c9706e26ab"),
    gender: "female",
    category: "jacket",
    style: NumberInt("25"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b6e3730f6c9706e26ac"),
    gender: "female",
    category: "jacket",
    style: NumberInt("31"),
    price: NumberInt("550"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b773730f6c9706e26ad"),
    gender: "female",
    category: "jacket",
    style: NumberInt("34"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b7f3730f6c9706e26ae"),
    gender: "female",
    category: "jacket",
    style: NumberInt("35"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b8f3730f6c9706e26af"),
    gender: "female",
    category: "jacket",
    style: NumberInt("37"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50b983730f6c9706e26b0"),
    gender: "female",
    category: "jacket",
    style: NumberInt("44"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ba23730f6c9706e26b1"),
    gender: "female",
    category: "jacket",
    style: NumberInt("45"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bab3730f6c9706e26b2"),
    gender: "female",
    category: "jacket",
    style: NumberInt("50"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bb53730f6c9706e26b3"),
    gender: "female",
    category: "jacket",
    style: NumberInt("51"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bbb3730f6c9706e26b4"),
    gender: "female",
    category: "jacket",
    style: NumberInt("53"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bc53730f6c9706e26b5"),
    gender: "female",
    category: "jacket",
    style: NumberInt("54"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bca3730f6c9706e26b6"),
    gender: "female",
    category: "jacket",
    style: NumberInt("55"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bd13730f6c9706e26b7"),
    gender: "female",
    category: "jacket",
    style: NumberInt("58"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bd93730f6c9706e26b8"),
    gender: "female",
    category: "jacket",
    style: NumberInt("63"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bdf3730f6c9706e26b9"),
    gender: "female",
    category: "jacket",
    style: NumberInt("64"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bef3730f6c9706e26ba"),
    gender: "female",
    category: "jacket",
    style: NumberInt("65"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50bfb3730f6c9706e26bb"),
    gender: "female",
    category: "jacket",
    style: NumberInt("66"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c023730f6c9706e26bc"),
    gender: "female",
    category: "jacket",
    style: NumberInt("69"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c083730f6c9706e26bd"),
    gender: "female",
    category: "jacket",
    style: NumberInt("70"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c103730f6c9706e26be"),
    gender: "female",
    category: "jacket",
    style: NumberInt("71"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c1c3730f6c9706e26bf"),
    gender: "female",
    category: "jacket",
    style: NumberInt("72"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c263730f6c9706e26c0"),
    gender: "female",
    category: "jacket",
    style: NumberInt("77"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c2c3730f6c9706e26c1"),
    gender: "female",
    category: "jacket",
    style: NumberInt("78"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c303730f6c9706e26c2"),
    gender: "female",
    category: "jacket",
    style: NumberInt("80"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c353730f6c9706e26c3"),
    gender: "female",
    category: "jacket",
    style: NumberInt("81"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c393730f6c9706e26c4"),
    gender: "female",
    category: "jacket",
    style: NumberInt("87"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c403730f6c9706e26c5"),
    gender: "female",
    category: "jacket",
    style: NumberInt("90"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c443730f6c9706e26c6"),
    gender: "female",
    category: "jacket",
    style: NumberInt("91"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c493730f6c9706e26c7"),
    gender: "female",
    category: "jacket",
    style: NumberInt("92"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c4f3730f6c9706e26c8"),
    gender: "female",
    category: "jacket",
    style: NumberInt("95"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c543730f6c9706e26c9"),
    gender: "female",
    category: "jacket",
    style: NumberInt("97"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c583730f6c9706e26ca"),
    gender: "female",
    category: "jacket",
    style: NumberInt("98"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c603730f6c9706e26cb"),
    gender: "female",
    category: "jacket",
    style: NumberInt("99"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c693730f6c9706e26cc"),
    gender: "female",
    category: "jacket",
    style: NumberInt("102"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c783730f6c9706e26cd"),
    gender: "female",
    category: "jacket",
    style: NumberInt("103"),
    price: NumberInt("2001"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c803730f6c9706e26ce"),
    gender: "female",
    category: "jacket",
    style: NumberInt("104"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c863730f6c9706e26cf"),
    gender: "female",
    category: "jacket",
    style: NumberInt("106"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50c8d3730f6c9706e26d0"),
    gender: "female",
    category: "jacket",
    style: NumberInt("107"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ca73730f6c9706e26d1"),
    gender: "female",
    category: "jacket",
    style: NumberInt("108"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cab3730f6c9706e26d2"),
    gender: "female",
    category: "jacket",
    style: NumberInt("110"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cb43730f6c9706e26d3"),
    gender: "female",
    category: "jacket",
    style: NumberInt("112"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cbe3730f6c9706e26d4"),
    gender: "female",
    category: "jacket",
    style: NumberInt("113"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cc63730f6c9706e26d5"),
    gender: "female",
    category: "jacket",
    style: NumberInt("114"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ccb3730f6c9706e26d6"),
    gender: "female",
    category: "jacket",
    style: NumberInt("115"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ccf3730f6c9706e26d7"),
    gender: "female",
    category: "jacket",
    style: NumberInt("116"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cd83730f6c9706e26d8"),
    gender: "female",
    category: "jacket",
    style: NumberInt("121"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cde3730f6c9706e26d9"),
    gender: "female",
    category: "jacket",
    style: NumberInt("122"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ce43730f6c9706e26da"),
    gender: "female",
    category: "jacket",
    style: NumberInt("127"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ce93730f6c9706e26db"),
    gender: "female",
    category: "jacket",
    style: NumberInt("131"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50cee3730f6c9706e26dc"),
    gender: "female",
    category: "jacket",
    style: NumberInt("133"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d003730f6c9706e26de"),
    gender: "female",
    category: "jacket",
    style: NumberInt("135"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d053730f6c9706e26df"),
    gender: "female",
    category: "jacket",
    style: NumberInt("137"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d0a3730f6c9706e26e0"),
    gender: "female",
    category: "jacket",
    style: NumberInt("138"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d113730f6c9706e26e1"),
    gender: "female",
    category: "jacket",
    style: NumberInt("139"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d163730f6c9706e26e2"),
    gender: "female",
    category: "jacket",
    style: NumberInt("140"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d1e3730f6c9706e26e3"),
    gender: "female",
    category: "jacket",
    style: NumberInt("143"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d233730f6c9706e26e4"),
    gender: "female",
    category: "jacket",
    style: NumberInt("144"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d2b3730f6c9706e26e5"),
    gender: "female",
    category: "jacket",
    style: NumberInt("145"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d303730f6c9706e26e6"),
    gender: "female",
    category: "jacket",
    style: NumberInt("147"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d363730f6c9706e26e7"),
    gender: "female",
    category: "jacket",
    style: NumberInt("148"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d3c3730f6c9706e26e8"),
    gender: "female",
    category: "jacket",
    style: NumberInt("150"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d473730f6c9706e26e9"),
    gender: "female",
    category: "jacket",
    style: NumberInt("151"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d543730f6c9706e26ea"),
    gender: "female",
    category: "jacket",
    style: NumberInt("153"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d5a3730f6c9706e26eb"),
    gender: "female",
    category: "jacket",
    style: NumberInt("156"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d5f3730f6c9706e26ec"),
    gender: "female",
    category: "jacket",
    style: NumberInt("158"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d643730f6c9706e26ed"),
    gender: "female",
    category: "jacket",
    style: NumberInt("160"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d6c3730f6c9706e26ee"),
    gender: "female",
    category: "jacket",
    style: NumberInt("163"),
    price: NumberInt("3400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d713730f6c9706e26ef"),
    gender: "female",
    category: "jacket",
    style: NumberInt("164"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d7c3730f6c9706e26f0"),
    gender: "female",
    category: "jacket",
    style: NumberInt("165"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d833730f6c9706e26f1"),
    gender: "female",
    category: "jacket",
    style: NumberInt("166"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d883730f6c9706e26f2"),
    gender: "female",
    category: "jacket",
    style: NumberInt("172"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d8f3730f6c9706e26f3"),
    gender: "female",
    category: "jacket",
    style: NumberInt("174"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d963730f6c9706e26f4"),
    gender: "female",
    category: "jacket",
    style: NumberInt("178"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50d9b3730f6c9706e26f5"),
    gender: "female",
    category: "jacket",
    style: NumberInt("183"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50da13730f6c9706e26f6"),
    gender: "female",
    category: "jacket",
    style: NumberInt("184"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50da73730f6c9706e26f7"),
    gender: "female",
    category: "jacket",
    style: NumberInt("185"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50dad3730f6c9706e26f8"),
    gender: "female",
    category: "jacket",
    style: NumberInt("187"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50db13730f6c9706e26f9"),
    gender: "female",
    category: "jacket",
    style: NumberInt("189"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50db93730f6c9706e26fa"),
    gender: "female",
    category: "jacket",
    style: NumberInt("190"),
    price: NumberInt("5600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50dc33730f6c9706e26fb"),
    gender: "female",
    category: "jacket",
    style: NumberInt("192"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50dcf3730f6c9706e26fc"),
    gender: "female",
    category: "jacket",
    style: NumberInt("193"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50dd43730f6c9706e26fd"),
    gender: "female",
    category: "jacket",
    style: NumberInt("194"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50de53730f6c9706e26fe"),
    gender: "female",
    category: "jacket",
    style: NumberInt("196"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50dec3730f6c9706e26ff"),
    gender: "female",
    category: "jacket",
    style: NumberInt("198"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50df03730f6c9706e2700"),
    gender: "female",
    category: "jacket",
    style: NumberInt("200"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e053730f6c9706e2701"),
    gender: "female",
    category: "jacket",
    style: NumberInt("202"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e0d3730f6c9706e2702"),
    gender: "female",
    category: "jacket",
    style: NumberInt("206"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e143730f6c9706e2703"),
    gender: "female",
    category: "jacket",
    style: NumberInt("228"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e1a3730f6c9706e2704"),
    gender: "female",
    category: "jacket",
    style: NumberInt("240"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e223730f6c9706e2705"),
    gender: "female",
    category: "jacket",
    style: NumberInt("242"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e383730f6c9706e2706"),
    gender: "female",
    category: "jacket",
    style: NumberInt("248"),
    price: NumberInt("7000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e453730f6c9706e2707"),
    gender: "female",
    category: "jacket",
    style: NumberInt("253"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e543730f6c9706e2708"),
    gender: "female",
    category: "jacket",
    style: NumberInt("259"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e5a3730f6c9706e2709"),
    gender: "female",
    category: "jacket",
    style: NumberInt("265"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e613730f6c9706e270a"),
    gender: "female",
    category: "jacket",
    style: NumberInt("266"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e663730f6c9706e270b"),
    gender: "female",
    category: "jacket",
    style: NumberInt("267"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e713730f6c9706e270c"),
    gender: "female",
    category: "jacket",
    style: NumberInt("268"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e763730f6c9706e270d"),
    gender: "female",
    category: "jacket",
    style: NumberInt("271"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50e933730f6c9706e270e"),
    gender: "female",
    category: "jacket",
    style: NumberInt("275"),
    price: NumberInt("9000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ea03730f6c9706e270f"),
    gender: "female",
    category: "jacket",
    style: NumberInt("278"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50eab3730f6c9706e2710"),
    gender: "female",
    category: "jacket",
    style: NumberInt("292"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50eb43730f6c9706e2711"),
    gender: "female",
    category: "jacket",
    style: NumberInt("301"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ebb3730f6c9706e2712"),
    gender: "female",
    category: "jacket",
    style: NumberInt("307"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50eca3730f6c9706e2713"),
    gender: "female",
    category: "jacket",
    style: NumberInt("309"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ed93730f6c9706e2714"),
    gender: "female",
    category: "jacket",
    style: NumberInt("314"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ee23730f6c9706e2715"),
    gender: "female",
    category: "jacket",
    style: NumberInt("315"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50eea3730f6c9706e2716"),
    gender: "female",
    category: "jacket",
    style: NumberInt("316"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ef33730f6c9706e2717"),
    gender: "female",
    category: "jacket",
    style: NumberInt("318"),
    price: NumberInt("14000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50efb3730f6c9706e2718"),
    gender: "female",
    category: "jacket",
    style: NumberInt("319"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f093730f6c9706e2719"),
    gender: "female",
    category: "jacket",
    style: NumberInt("320"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f133730f6c9706e271a"),
    gender: "female",
    category: "jacket",
    style: NumberInt("322"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f313730f6c9706e271b"),
    gender: "female",
    category: "jacket",
    style: NumberInt("323"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f393730f6c9706e271c"),
    gender: "female",
    category: "jacket",
    style: NumberInt("341"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f3d3730f6c9706e271d"),
    gender: "female",
    category: "jacket",
    style: NumberInt("344"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f423730f6c9706e271e"),
    gender: "female",
    category: "jacket",
    style: NumberInt("345"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f4e3730f6c9706e271f"),
    gender: "female",
    category: "jacket",
    style: NumberInt("353"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f523730f6c9706e2720"),
    gender: "female",
    category: "jacket",
    style: NumberInt("354"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f643730f6c9706e2721"),
    gender: "female",
    category: "jacket",
    style: NumberInt("363"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f6c3730f6c9706e2722"),
    gender: "female",
    category: "jacket",
    style: NumberInt("365"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50f913730f6c9706e2723"),
    gender: "female",
    category: "watch",
    style: NumberInt("2"),
    price: NumberInt("12000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50fa13730f6c9706e2724"),
    gender: "female",
    category: "watch",
    style: NumberInt("3"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50faa3730f6c9706e2725"),
    gender: "female",
    category: "watch",
    style: NumberInt("4"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50fc33730f6c9706e2726"),
    gender: "female",
    category: "watch",
    style: NumberInt("5"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50fc83730f6c9706e2727"),
    gender: "female",
    category: "watch",
    style: NumberInt("6"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50fd13730f6c9706e2728"),
    gender: "female",
    category: "watch",
    style: NumberInt("7"),
    price: NumberInt("12000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50fda3730f6c9706e2729"),
    gender: "female",
    category: "watch",
    style: NumberInt("8"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50fe63730f6c9706e272a"),
    gender: "female",
    category: "watch",
    style: NumberInt("9"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50feb3730f6c9706e272b"),
    gender: "female",
    category: "watch",
    style: NumberInt("10"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a50ff63730f6c9706e272c"),
    gender: "female",
    category: "watch",
    style: NumberInt("19"),
    price: NumberInt("12000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510153730f6c9706e272d"),
    gender: "female",
    category: "watch",
    style: NumberInt("20"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5101c3730f6c9706e272e"),
    gender: "female",
    category: "watch",
    style: NumberInt("21"),
    price: NumberInt("9000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510233730f6c9706e272f"),
    gender: "female",
    category: "watch",
    style: NumberInt("22"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5102a3730f6c9706e2730"),
    gender: "female",
    category: "watch",
    style: NumberInt("23"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510353730f6c9706e2731"),
    gender: "female",
    category: "watch",
    style: NumberInt("24"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5103c3730f6c9706e2732"),
    gender: "female",
    category: "watch",
    style: NumberInt("25"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510453730f6c9706e2733"),
    gender: "female",
    category: "watch",
    style: NumberInt("26"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510573730f6c9706e2734"),
    gender: "female",
    category: "shirt",
    style: NumberInt("5"),
    price: NumberInt("250"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5105b3730f6c9706e2735"),
    gender: "female",
    category: "shirt",
    style: NumberInt("9"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510623730f6c9706e2736"),
    gender: "female",
    category: "shirt",
    style: NumberInt("11"),
    price: NumberInt("250"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510683730f6c9706e2737"),
    gender: "female",
    category: "shirt",
    style: NumberInt("13"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5106f3730f6c9706e2738"),
    gender: "female",
    category: "shirt",
    style: NumberInt("14"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510783730f6c9706e2739"),
    gender: "female",
    category: "shirt",
    style: NumberInt("15"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5107d3730f6c9706e273a"),
    gender: "female",
    category: "shirt",
    style: NumberInt("16"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510863730f6c9706e273b"),
    gender: "female",
    category: "shirt",
    style: NumberInt("17"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5108a3730f6c9706e273c"),
    gender: "female",
    category: "shirt",
    style: NumberInt("18"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510903730f6c9706e273d"),
    gender: "female",
    category: "shirt",
    style: NumberInt("19"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510963730f6c9706e273e"),
    gender: "female",
    category: "shirt",
    style: NumberInt("22"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5109c3730f6c9706e273f"),
    gender: "female",
    category: "shirt",
    style: NumberInt("23"),
    price: NumberInt("100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510a23730f6c9706e2740"),
    gender: "female",
    category: "shirt",
    style: NumberInt("26"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510a83730f6c9706e2741"),
    gender: "female",
    category: "shirt",
    style: NumberInt("27"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510af3730f6c9706e2742"),
    gender: "female",
    category: "shirt",
    style: NumberInt("30"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510b73730f6c9706e2743"),
    gender: "female",
    category: "shirt",
    style: NumberInt("32"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510ca3730f6c9706e2744"),
    gender: "female",
    category: "shirt",
    style: NumberInt("33"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510dd3730f6c9706e2745"),
    gender: "female",
    category: "shirt",
    style: NumberInt("36"),
    price: NumberInt("350"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510e33730f6c9706e2746"),
    gender: "female",
    category: "shirt",
    style: NumberInt("38"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510ec3730f6c9706e2747"),
    gender: "female",
    category: "shirt",
    style: NumberInt("40"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510f23730f6c9706e2748"),
    gender: "female",
    category: "shirt",
    style: NumberInt("49"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a510fe3730f6c9706e2749"),
    gender: "female",
    category: "shirt",
    style: NumberInt("67"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511053730f6c9706e274a"),
    gender: "female",
    category: "shirt",
    style: NumberInt("68"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5110d3730f6c9706e274b"),
    gender: "female",
    category: "shirt",
    style: NumberInt("73"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511123730f6c9706e274c"),
    gender: "female",
    category: "shirt",
    style: NumberInt("74"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511193730f6c9706e274d"),
    gender: "female",
    category: "shirt",
    style: NumberInt("75"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5111e3730f6c9706e274e"),
    gender: "female",
    category: "shirt",
    style: NumberInt("76"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511293730f6c9706e274f"),
    gender: "female",
    category: "shirt",
    style: NumberInt("83"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511303730f6c9706e2750"),
    gender: "female",
    category: "shirt",
    style: NumberInt("84"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511363730f6c9706e2751"),
    gender: "female",
    category: "shirt",
    style: NumberInt("86"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5113b3730f6c9706e2752"),
    gender: "female",
    category: "shirt",
    style: NumberInt("88"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5114f3730f6c9706e2753"),
    gender: "female",
    category: "shirt",
    style: NumberInt("101"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511593730f6c9706e2754"),
    gender: "female",
    category: "shirt",
    style: NumberInt("105"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5115f3730f6c9706e2755"),
    gender: "female",
    category: "shirt",
    style: NumberInt("109"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511633730f6c9706e2756"),
    gender: "female",
    category: "shirt",
    style: NumberInt("111"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5116c3730f6c9706e2757"),
    gender: "female",
    category: "shirt",
    style: NumberInt("117"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511713730f6c9706e2758"),
    gender: "female",
    category: "shirt",
    style: NumberInt("119"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511773730f6c9706e2759"),
    gender: "female",
    category: "shirt",
    style: NumberInt("125"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5117c3730f6c9706e275a"),
    gender: "female",
    category: "shirt",
    style: NumberInt("128"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511813730f6c9706e275b"),
    gender: "female",
    category: "shirt",
    style: NumberInt("130"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511893730f6c9706e275c"),
    gender: "female",
    category: "shirt",
    style: NumberInt("132"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5118e3730f6c9706e275d"),
    gender: "female",
    category: "shirt",
    style: NumberInt("136"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511933730f6c9706e275e"),
    gender: "female",
    category: "shirt",
    style: NumberInt("141"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511983730f6c9706e275f"),
    gender: "female",
    category: "shirt",
    style: NumberInt("142"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5119d3730f6c9706e2760"),
    gender: "female",
    category: "shirt",
    style: NumberInt("149"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511a33730f6c9706e2761"),
    gender: "female",
    category: "shirt",
    style: NumberInt("161"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511a83730f6c9706e2762"),
    gender: "female",
    category: "shirt",
    style: NumberInt("171"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511ad3730f6c9706e2763"),
    gender: "female",
    category: "shirt",
    style: NumberInt("173"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511b33730f6c9706e2764"),
    gender: "female",
    category: "shirt",
    style: NumberInt("208"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511b73730f6c9706e2765"),
    gender: "female",
    category: "shirt",
    style: NumberInt("235"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511bc3730f6c9706e2766"),
    gender: "female",
    category: "shirt",
    style: NumberInt("246"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511cf3730f6c9706e2767"),
    gender: "female",
    category: "shirt",
    style: NumberInt("249"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511d63730f6c9706e2768"),
    gender: "female",
    category: "shirt",
    style: NumberInt("269"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511da3730f6c9706e2769"),
    gender: "female",
    category: "shirt",
    style: NumberInt("279"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511e13730f6c9706e276a"),
    gender: "female",
    category: "shirt",
    style: NumberInt("280"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511ea3730f6c9706e276b"),
    gender: "female",
    category: "shirt",
    style: NumberInt("283"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511f03730f6c9706e276c"),
    gender: "female",
    category: "shirt",
    style: NumberInt("284"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511f63730f6c9706e276d"),
    gender: "female",
    category: "shirt",
    style: NumberInt("310"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a511fd3730f6c9706e276e"),
    gender: "female",
    category: "shirt",
    style: NumberInt("321"),
    price: NumberInt("4500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512023730f6c9706e276f"),
    gender: "female",
    category: "shirt",
    style: NumberInt("324"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5120d3730f6c9706e2770"),
    gender: "female",
    category: "shirt",
    style: NumberInt("335"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512133730f6c9706e2771"),
    gender: "female",
    category: "shirt",
    style: NumberInt("337"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512183730f6c9706e2772"),
    gender: "female",
    category: "shirt",
    style: NumberInt("349"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5121e3730f6c9706e2773"),
    gender: "female",
    category: "shirt",
    style: NumberInt("359"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512243730f6c9706e2774"),
    gender: "female",
    category: "shirt",
    style: NumberInt("368"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512293730f6c9706e2775"),
    gender: "female",
    category: "shirt",
    style: NumberInt("369"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512393730f6c9706e2776"),
    gender: "female",
    category: "pants",
    style: NumberInt("0"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5123e3730f6c9706e2777"),
    gender: "female",
    category: "pants",
    style: NumberInt("1"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512443730f6c9706e2778"),
    gender: "female",
    category: "pants",
    style: NumberInt("2"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5124b3730f6c9706e2779"),
    gender: "female",
    category: "pants",
    style: NumberInt("3"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512503730f6c9706e277a"),
    gender: "female",
    category: "pants",
    style: NumberInt("4"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512563730f6c9706e277b"),
    gender: "female",
    category: "pants",
    style: NumberInt("6"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5125b3730f6c9706e277c"),
    gender: "female",
    category: "pants",
    style: NumberInt("7"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512603730f6c9706e277d"),
    gender: "female",
    category: "pants",
    style: NumberInt("8"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512663730f6c9706e277e"),
    gender: "female",
    category: "pants",
    style: NumberInt("9"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5126b3730f6c9706e277f"),
    gender: "female",
    category: "pants",
    style: NumberInt("10"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512703730f6c9706e2780"),
    gender: "female",
    category: "pants",
    style: NumberInt("11"),
    price: NumberInt("650"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512783730f6c9706e2781"),
    gender: "female",
    category: "pants",
    style: NumberInt("12"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512803730f6c9706e2782"),
    gender: "female",
    category: "pants",
    style: NumberInt("14"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512853730f6c9706e2783"),
    gender: "female",
    category: "pants",
    style: NumberInt("15"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5128a3730f6c9706e2784"),
    gender: "female",
    category: "pants",
    style: NumberInt("16"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512903730f6c9706e2785"),
    gender: "female",
    category: "pants",
    style: NumberInt("17"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512963730f6c9706e2786"),
    gender: "female",
    category: "pants",
    style: NumberInt("18"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5129b3730f6c9706e2787"),
    gender: "female",
    category: "pants",
    style: NumberInt("19"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512a03730f6c9706e2788"),
    gender: "female",
    category: "pants",
    style: NumberInt("20"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512a53730f6c9706e2789"),
    gender: "female",
    category: "pants",
    style: NumberInt("23"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512aa3730f6c9706e278a"),
    gender: "female",
    category: "pants",
    style: NumberInt("24"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512b03730f6c9706e278b"),
    gender: "female",
    category: "pants",
    style: NumberInt("25"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512b63730f6c9706e278c"),
    gender: "female",
    category: "pants",
    style: NumberInt("26"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512bc3730f6c9706e278d"),
    gender: "female",
    category: "pants",
    style: NumberInt("27"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512c13730f6c9706e278e"),
    gender: "female",
    category: "pants",
    style: NumberInt("28"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512c73730f6c9706e278f"),
    gender: "female",
    category: "pants",
    style: NumberInt("30"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512cc3730f6c9706e2790"),
    gender: "female",
    category: "pants",
    style: NumberInt("31"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512d03730f6c9706e2791"),
    gender: "female",
    category: "pants",
    style: NumberInt("34"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512d43730f6c9706e2792"),
    gender: "female",
    category: "pants",
    style: NumberInt("36"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512db3730f6c9706e2793"),
    gender: "female",
    category: "pants",
    style: NumberInt("43"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512df3730f6c9706e2794"),
    gender: "female",
    category: "pants",
    style: NumberInt("44"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512e43730f6c9706e2795"),
    gender: "female",
    category: "pants",
    style: NumberInt("50"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512ee3730f6c9706e2796"),
    gender: "female",
    category: "pants",
    style: NumberInt("51"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512f43730f6c9706e2797"),
    gender: "female",
    category: "pants",
    style: NumberInt("52"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a512fb3730f6c9706e2798"),
    gender: "female",
    category: "pants",
    style: NumberInt("53"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513013730f6c9706e2799"),
    gender: "female",
    category: "pants",
    style: NumberInt("54"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513093730f6c9706e279a"),
    gender: "female",
    category: "pants",
    style: NumberInt("55"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5130f3730f6c9706e279b"),
    gender: "female",
    category: "pants",
    style: NumberInt("56"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513163730f6c9706e279c"),
    gender: "female",
    category: "pants",
    style: NumberInt("60"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5131b3730f6c9706e279d"),
    gender: "female",
    category: "pants",
    style: NumberInt("62"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5131f3730f6c9706e279e"),
    gender: "female",
    category: "pants",
    style: NumberInt("63"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513273730f6c9706e279f"),
    gender: "female",
    category: "pants",
    style: NumberInt("65"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5132d3730f6c9706e27a0"),
    gender: "female",
    category: "pants",
    style: NumberInt("67"),
    price: NumberInt("1150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513333730f6c9706e27a1"),
    gender: "female",
    category: "pants",
    style: NumberInt("71"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513373730f6c9706e27a2"),
    gender: "female",
    category: "pants",
    style: NumberInt("73"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5133b3730f6c9706e27a3"),
    gender: "female",
    category: "pants",
    style: NumberInt("74"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513433730f6c9706e27a4"),
    gender: "female",
    category: "pants",
    style: NumberInt("78"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513483730f6c9706e27a5"),
    gender: "female",
    category: "pants",
    style: NumberInt("80"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5134c3730f6c9706e27a6"),
    gender: "female",
    category: "pants",
    style: NumberInt("82"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513503730f6c9706e27a7"),
    gender: "female",
    category: "pants",
    style: NumberInt("87"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513553730f6c9706e27a8"),
    gender: "female",
    category: "pants",
    style: NumberInt("101"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5135a3730f6c9706e27a9"),
    gender: "female",
    category: "pants",
    style: NumberInt("103"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5135e3730f6c9706e27aa"),
    gender: "female",
    category: "pants",
    style: NumberInt("104"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513643730f6c9706e27ab"),
    gender: "female",
    category: "pants",
    style: NumberInt("106"),
    price: NumberInt("3600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513693730f6c9706e27ac"),
    gender: "female",
    category: "pants",
    style: NumberInt("107"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5136f3730f6c9706e27ad"),
    gender: "female",
    category: "pants",
    style: NumberInt("108"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513733730f6c9706e27ae"),
    gender: "female",
    category: "pants",
    style: NumberInt("123"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513793730f6c9706e27af"),
    gender: "female",
    category: "pants",
    style: NumberInt("124"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513883730f6c9706e27b0"),
    gender: "female",
    category: "shoes",
    style: NumberInt("0"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5138d3730f6c9706e27b1"),
    gender: "female",
    category: "shoes",
    style: NumberInt("1"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513933730f6c9706e27b2"),
    gender: "female",
    category: "shoes",
    style: NumberInt("2"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513983730f6c9706e27b3"),
    gender: "female",
    category: "shoes",
    style: NumberInt("3"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5139e3730f6c9706e27b4"),
    gender: "female",
    category: "shoes",
    style: NumberInt("4"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513a13730f6c9706e27b5"),
    gender: "female",
    category: "shoes",
    style: NumberInt("5"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513a73730f6c9706e27b6"),
    gender: "female",
    category: "shoes",
    style: NumberInt("6"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513ac3730f6c9706e27b7"),
    gender: "female",
    category: "shoes",
    style: NumberInt("7"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513af3730f6c9706e27b8"),
    gender: "female",
    category: "shoes",
    style: NumberInt("8"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513b43730f6c9706e27b9"),
    gender: "female",
    category: "shoes",
    style: NumberInt("10"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513bb3730f6c9706e27ba"),
    gender: "female",
    category: "shoes",
    style: NumberInt("11"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513bf3730f6c9706e27bb"),
    gender: "female",
    category: "shoes",
    style: NumberInt("13"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513c73730f6c9706e27bc"),
    gender: "female",
    category: "shoes",
    style: NumberInt("14"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513cc3730f6c9706e27bd"),
    gender: "female",
    category: "shoes",
    style: NumberInt("15"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513cf3730f6c9706e27be"),
    gender: "female",
    category: "shoes",
    style: NumberInt("16"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513d33730f6c9706e27bf"),
    gender: "female",
    category: "shoes",
    style: NumberInt("17"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513d83730f6c9706e27c0"),
    gender: "female",
    category: "shoes",
    style: NumberInt("19"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513e13730f6c9706e27c1"),
    gender: "female",
    category: "shoes",
    style: NumberInt("20"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513e53730f6c9706e27c2"),
    gender: "female",
    category: "shoes",
    style: NumberInt("22"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513e93730f6c9706e27c3"),
    gender: "female",
    category: "shoes",
    style: NumberInt("23"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513f13730f6c9706e27c4"),
    gender: "female",
    category: "shoes",
    style: NumberInt("27"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513f63730f6c9706e27c5"),
    gender: "female",
    category: "shoes",
    style: NumberInt("28"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513fb3730f6c9706e27c6"),
    gender: "female",
    category: "shoes",
    style: NumberInt("29"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a513ff3730f6c9706e27c7"),
    gender: "female",
    category: "shoes",
    style: NumberInt("30"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514043730f6c9706e27c8"),
    gender: "female",
    category: "shoes",
    style: NumberInt("31"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514103730f6c9706e27c9"),
    gender: "female",
    category: "shoes",
    style: NumberInt("32"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514153730f6c9706e27ca"),
    gender: "female",
    category: "shoes",
    style: NumberInt("37"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5141c3730f6c9706e27cb"),
    gender: "female",
    category: "shoes",
    style: NumberInt("42"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514243730f6c9706e27cc"),
    gender: "female",
    category: "shoes",
    style: NumberInt("43"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514293730f6c9706e27cd"),
    gender: "female",
    category: "shoes",
    style: NumberInt("44"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5142f3730f6c9706e27ce"),
    gender: "female",
    category: "shoes",
    style: NumberInt("47"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5143a3730f6c9706e27cf"),
    gender: "female",
    category: "shoes",
    style: NumberInt("49"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5143e3730f6c9706e27d0"),
    gender: "female",
    category: "shoes",
    style: NumberInt("50"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514443730f6c9706e27d1"),
    gender: "female",
    category: "shoes",
    style: NumberInt("60"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514523730f6c9706e27d2"),
    gender: "female",
    category: "shoes",
    style: NumberInt("61"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514583730f6c9706e27d3"),
    gender: "female",
    category: "shoes",
    style: NumberInt("67"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5145d3730f6c9706e27d4"),
    gender: "female",
    category: "shoes",
    style: NumberInt("68"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514613730f6c9706e27d5"),
    gender: "female",
    category: "shoes",
    style: NumberInt("69"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514673730f6c9706e27d6"),
    gender: "female",
    category: "shoes",
    style: NumberInt("77"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5146b3730f6c9706e27d7"),
    gender: "female",
    category: "shoes",
    style: NumberInt("78"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514753730f6c9706e27d8"),
    gender: "female",
    category: "shoes",
    style: NumberInt("79"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5147a3730f6c9706e27d9"),
    gender: "female",
    category: "shoes",
    style: NumberInt("80"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514843730f6c9706e27da"),
    gender: "female",
    category: "shoes",
    style: NumberInt("81"),
    price: NumberInt("14500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5148a3730f6c9706e27db"),
    gender: "female",
    category: "shoes",
    style: NumberInt("96"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5148e3730f6c9706e27dc"),
    gender: "female",
    category: "shoes",
    style: NumberInt("97"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514953730f6c9706e27dd"),
    gender: "female",
    category: "shoes",
    style: NumberInt("98"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514993730f6c9706e27de"),
    gender: "female",
    category: "shoes",
    style: NumberInt("99"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514a43730f6c9706e27df"),
    gender: "female",
    category: "glasses",
    style: NumberInt("0"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514aa3730f6c9706e27e0"),
    gender: "female",
    category: "glasses",
    style: NumberInt("1"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514af3730f6c9706e27e1"),
    gender: "female",
    category: "glasses",
    style: NumberInt("2"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514b63730f6c9706e27e2"),
    gender: "female",
    category: "glasses",
    style: NumberInt("3"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514bb3730f6c9706e27e3"),
    gender: "female",
    category: "glasses",
    style: NumberInt("4"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514c23730f6c9706e27e4"),
    gender: "female",
    category: "glasses",
    style: NumberInt("6"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514c73730f6c9706e27e5"),
    gender: "female",
    category: "glasses",
    style: NumberInt("7"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514cd3730f6c9706e27e6"),
    gender: "female",
    category: "glasses",
    style: NumberInt("8"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514d03730f6c9706e27e7"),
    gender: "female",
    category: "glasses",
    style: NumberInt("9"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514d53730f6c9706e27e8"),
    gender: "female",
    category: "glasses",
    style: NumberInt("10"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514db3730f6c9706e27e9"),
    gender: "female",
    category: "glasses",
    style: NumberInt("11"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514e03730f6c9706e27ea"),
    gender: "female",
    category: "glasses",
    style: NumberInt("14"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514e53730f6c9706e27eb"),
    gender: "female",
    category: "glasses",
    style: NumberInt("16"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514eb3730f6c9706e27ec"),
    gender: "female",
    category: "glasses",
    style: NumberInt("17"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514f03730f6c9706e27ed"),
    gender: "female",
    category: "glasses",
    style: NumberInt("18"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514f53730f6c9706e27ee"),
    gender: "female",
    category: "glasses",
    style: NumberInt("19"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514fb3730f6c9706e27ef"),
    gender: "female",
    category: "glasses",
    style: NumberInt("20"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a514ff3730f6c9706e27f0"),
    gender: "female",
    category: "glasses",
    style: NumberInt("21"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a515043730f6c9706e27f1"),
    gender: "female",
    category: "glasses",
    style: NumberInt("22"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a515093730f6c9706e27f2"),
    gender: "female",
    category: "glasses",
    style: NumberInt("24"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5150d3730f6c9706e27f3"),
    gender: "female",
    category: "glasses",
    style: NumberInt("25"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a515293730f6c9706e27f4"),
    gender: "female",
    category: "glasses",
    style: NumberInt("30"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5152e3730f6c9706e27f5"),
    gender: "female",
    category: "glasses",
    style: NumberInt("31"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516b83730f6c9706e2814"),
    gender: "female",
    category: "accessories",
    style: NumberInt("6"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516bf3730f6c9706e2815"),
    gender: "female",
    category: "accessories",
    style: NumberInt("7"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516c43730f6c9706e2816"),
    gender: "female",
    category: "accessories",
    style: NumberInt("9"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516cc3730f6c9706e2817"),
    gender: "female",
    category: "accessories",
    style: NumberInt("11"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516d33730f6c9706e2818"),
    gender: "female",
    category: "accessories",
    style: NumberInt("12"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516d83730f6c9706e2819"),
    gender: "female",
    category: "accessories",
    style: NumberInt("15"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516db3730f6c9706e281a"),
    gender: "female",
    category: "accessories",
    style: NumberInt("17"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516e03730f6c9706e281b"),
    gender: "female",
    category: "accessories",
    style: NumberInt("20"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516e33730f6c9706e281c"),
    gender: "female",
    category: "accessories",
    style: NumberInt("21"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516e73730f6c9706e281d"),
    gender: "female",
    category: "accessories",
    style: NumberInt("22"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516eb3730f6c9706e281e"),
    gender: "female",
    category: "accessories",
    style: NumberInt("23"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516f43730f6c9706e281f"),
    gender: "female",
    category: "accessories",
    style: NumberInt("36"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516f93730f6c9706e2820"),
    gender: "female",
    category: "accessories",
    style: NumberInt("37"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a516ff3730f6c9706e2821"),
    gender: "female",
    category: "accessories",
    style: NumberInt("38"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517043730f6c9706e2822"),
    gender: "female",
    category: "accessories",
    style: NumberInt("39"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5170b3730f6c9706e2823"),
    gender: "female",
    category: "accessories",
    style: NumberInt("40"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5170f3730f6c9706e2824"),
    gender: "female",
    category: "accessories",
    style: NumberInt("41"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517133730f6c9706e2825"),
    gender: "female",
    category: "accessories",
    style: NumberInt("42"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5171a3730f6c9706e2826"),
    gender: "female",
    category: "accessories",
    style: NumberInt("53"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5171e3730f6c9706e2827"),
    gender: "female",
    category: "accessories",
    style: NumberInt("54"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517223730f6c9706e2828"),
    gender: "female",
    category: "accessories",
    style: NumberInt("55"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5172a3730f6c9706e2829"),
    gender: "female",
    category: "accessories",
    style: NumberInt("56"),
    price: NumberInt("35000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5172d3730f6c9706e282a"),
    gender: "female",
    category: "accessories",
    style: NumberInt("57"),
    price: NumberInt("35000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517343730f6c9706e282b"),
    gender: "female",
    category: "accessories",
    style: NumberInt("58"),
    price: NumberInt("45000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517383730f6c9706e282c"),
    gender: "female",
    category: "accessories",
    style: NumberInt("59"),
    price: NumberInt("45000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5173c3730f6c9706e282d"),
    gender: "female",
    category: "accessories",
    style: NumberInt("60"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517403730f6c9706e282e"),
    gender: "female",
    category: "accessories",
    style: NumberInt("61"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517453730f6c9706e282f"),
    gender: "female",
    category: "accessories",
    style: NumberInt("62"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5174b3730f6c9706e2830"),
    gender: "female",
    category: "accessories",
    style: NumberInt("64"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517523730f6c9706e2831"),
    gender: "female",
    category: "accessories",
    style: NumberInt("65"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517563730f6c9706e2832"),
    gender: "female",
    category: "accessories",
    style: NumberInt("66"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5175a3730f6c9706e2833"),
    gender: "female",
    category: "accessories",
    style: NumberInt("67"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5175f3730f6c9706e2834"),
    gender: "female",
    category: "accessories",
    style: NumberInt("68"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517663730f6c9706e2835"),
    gender: "female",
    category: "accessories",
    style: NumberInt("69"),
    price: NumberInt("45000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5176a3730f6c9706e2836"),
    gender: "female",
    category: "accessories",
    style: NumberInt("70"),
    price: NumberInt("45000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5176f3730f6c9706e2837"),
    gender: "female",
    category: "accessories",
    style: NumberInt("71"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517733730f6c9706e2838"),
    gender: "female",
    category: "accessories",
    style: NumberInt("72"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517783730f6c9706e2839"),
    gender: "female",
    category: "accessories",
    style: NumberInt("73"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5177c3730f6c9706e283a"),
    gender: "female",
    category: "accessories",
    style: NumberInt("82"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517833730f6c9706e283b"),
    gender: "female",
    category: "accessories",
    style: NumberInt("83"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517883730f6c9706e283c"),
    gender: "female",
    category: "accessories",
    style: NumberInt("85"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5178d3730f6c9706e283d"),
    gender: "female",
    category: "accessories",
    style: NumberInt("86"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517903730f6c9706e283e"),
    gender: "female",
    category: "accessories",
    style: NumberInt("87"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517973730f6c9706e283f"),
    gender: "female",
    category: "accessories",
    style: NumberInt("90"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5179b3730f6c9706e2840"),
    gender: "female",
    category: "accessories",
    style: NumberInt("92"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517a13730f6c9706e2841"),
    gender: "female",
    category: "accessories",
    style: NumberInt("93"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517a53730f6c9706e2842"),
    gender: "female",
    category: "accessories",
    style: NumberInt("94"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a517ad3730f6c9706e2843"),
    gender: "female",
    category: "accessories",
    style: NumberInt("99"),
    price: NumberInt("40000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5800278256bf704e62601"),
    gender: "male",
    category: "jacket",
    style: NumberInt("3"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5800d78256bf704e62602"),
    gender: "male",
    category: "jacket",
    style: NumberInt("4"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5801778256bf704e62603"),
    gender: "male",
    category: "jacket",
    style: NumberInt("6"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5802078256bf704e62604"),
    gender: "male",
    category: "jacket",
    style: NumberInt("7"),
    price: NumberInt("650"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5802878256bf704e62605"),
    gender: "male",
    category: "jacket",
    style: NumberInt("10"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5803278256bf704e62606"),
    gender: "male",
    category: "jacket",
    style: NumberInt("11"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5803b78256bf704e62607"),
    gender: "male",
    category: "jacket",
    style: NumberInt("19"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5804278256bf704e62608"),
    gender: "male",
    category: "jacket",
    style: NumberInt("20"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5804f78256bf704e62609"),
    gender: "male",
    category: "jacket",
    style: NumberInt("21"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5805778256bf704e6260a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("23"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5806378256bf704e6260b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("24"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5807178256bf704e6260c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("25"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5807a78256bf704e6260d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("27"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5808478256bf704e6260e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("28"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5808b78256bf704e6260f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("35"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5809578256bf704e62610"),
    gender: "male",
    category: "jacket",
    style: NumberInt("37"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5809b78256bf704e62611"),
    gender: "male",
    category: "jacket",
    style: NumberInt("40"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580a578256bf704e62612"),
    gender: "male",
    category: "jacket",
    style: NumberInt("45"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580ab78256bf704e62613"),
    gender: "male",
    category: "jacket",
    style: NumberInt("46"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580bb78256bf704e62614"),
    gender: "male",
    category: "jacket",
    style: NumberInt("57"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580c878256bf704e62615"),
    gender: "male",
    category: "jacket",
    style: NumberInt("58"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580d678256bf704e62616"),
    gender: "male",
    category: "jacket",
    style: NumberInt("59"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580dd78256bf704e62617"),
    gender: "male",
    category: "jacket",
    style: NumberInt("61"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580e378256bf704e62618"),
    gender: "male",
    category: "jacket",
    style: NumberInt("62"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580ed78256bf704e62619"),
    gender: "male",
    category: "jacket",
    style: NumberInt("64"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a580f878256bf704e6261a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("68"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5810078256bf704e6261b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("69"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5811978256bf704e6261c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("70"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5814378256bf704e6261d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("72"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5814e78256bf704e6261e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("74"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5815578256bf704e6261f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("75"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5815c78256bf704e62620"),
    gender: "male",
    category: "jacket",
    style: NumberInt("76"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5816478256bf704e62621"),
    gender: "male",
    category: "jacket",
    style: NumberInt("77"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5817478256bf704e62622"),
    gender: "male",
    category: "jacket",
    style: NumberInt("78"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5818278256bf704e62623"),
    gender: "male",
    category: "jacket",
    style: NumberInt("79"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5818b78256bf704e62624"),
    gender: "male",
    category: "jacket",
    style: NumberInt("84"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5819178256bf704e62625"),
    gender: "male",
    category: "jacket",
    style: NumberInt("85"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5819678256bf704e62626"),
    gender: "male",
    category: "jacket",
    style: NumberInt("86"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581a778256bf704e62627"),
    gender: "male",
    category: "jacket",
    style: NumberInt("87"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581ad78256bf704e62628"),
    gender: "male",
    category: "jacket",
    style: NumberInt("88"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581bb78256bf704e62629"),
    gender: "male",
    category: "jacket",
    style: NumberInt("89"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581c278256bf704e6262a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("90"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581d978256bf704e6262b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("96"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581e478256bf704e6262c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("106"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581ee78256bf704e6262d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("107"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581f678256bf704e6262e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("108"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a581fd78256bf704e6262f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("110"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5820478256bf704e62630"),
    gender: "male",
    category: "jacket",
    style: NumberInt("111"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5821878256bf704e62631"),
    gender: "male",
    category: "jacket",
    style: NumberInt("112"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5821e78256bf704e62632"),
    gender: "male",
    category: "jacket",
    style: NumberInt("113"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5822678256bf704e62633"),
    gender: "male",
    category: "jacket",
    style: NumberInt("115"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5823d78256bf704e62634"),
    gender: "male",
    category: "jacket",
    style: NumberInt("116"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5824278256bf704e62635"),
    gender: "male",
    category: "jacket",
    style: NumberInt("118"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5824978256bf704e62636"),
    gender: "male",
    category: "jacket",
    style: NumberInt("119"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5825278256bf704e62637"),
    gender: "male",
    category: "jacket",
    style: NumberInt("120"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5825e78256bf704e62638"),
    gender: "male",
    category: "jacket",
    style: NumberInt("121"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5826578256bf704e62639"),
    gender: "male",
    category: "jacket",
    style: NumberInt("122"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5826d78256bf704e6263a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("124"),
    price: NumberInt("1250"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5827578256bf704e6263b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("125"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5827b78256bf704e6263c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("126"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5828578256bf704e6263d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("129"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5828d78256bf704e6263e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("130"),
    price: NumberInt("1350"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582a178256bf704e6263f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("134"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582a978256bf704e62640"),
    gender: "male",
    category: "jacket",
    style: NumberInt("136"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582b678256bf704e62641"),
    gender: "male",
    category: "jacket",
    style: NumberInt("138"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582bd78256bf704e62642"),
    gender: "male",
    category: "jacket",
    style: NumberInt("140"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582c478256bf704e62643"),
    gender: "male",
    category: "jacket",
    style: NumberInt("141"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582ca78256bf704e62644"),
    gender: "male",
    category: "jacket",
    style: NumberInt("142"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582d378256bf704e62645"),
    gender: "male",
    category: "jacket",
    style: NumberInt("143"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582e878256bf704e62646"),
    gender: "male",
    category: "jacket",
    style: NumberInt("145"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a582fa78256bf704e62647"),
    gender: "male",
    category: "jacket",
    style: NumberInt("147"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5830378256bf704e62648"),
    gender: "male",
    category: "jacket",
    style: NumberInt("148"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5830f78256bf704e62649"),
    gender: "male",
    category: "jacket",
    style: NumberInt("150"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5831778256bf704e6264a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("151"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5832378256bf704e6264b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("153"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5833478256bf704e6264c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("154"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5834178256bf704e6264d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("156"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5834978256bf704e6264e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("157"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5835078256bf704e6264f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("159"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5835778256bf704e62650"),
    gender: "male",
    category: "jacket",
    style: NumberInt("160"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5836478256bf704e62651"),
    gender: "male",
    category: "jacket",
    style: NumberInt("161"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5837378256bf704e62652"),
    gender: "male",
    category: "jacket",
    style: NumberInt("163"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5837978256bf704e62653"),
    gender: "male",
    category: "jacket",
    style: NumberInt("166"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5838578256bf704e62654"),
    gender: "male",
    category: "jacket",
    style: NumberInt("167"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5838b78256bf704e62655"),
    gender: "male",
    category: "jacket",
    style: NumberInt("168"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5839278256bf704e62656"),
    gender: "male",
    category: "jacket",
    style: NumberInt("169"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5839b78256bf704e62657"),
    gender: "male",
    category: "jacket",
    style: NumberInt("171"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a583b178256bf704e62658"),
    gender: "male",
    category: "jacket",
    style: NumberInt("172"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a583c278256bf704e62659"),
    gender: "male",
    category: "jacket",
    style: NumberInt("174"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a583cf78256bf704e6265a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("176"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a583d778256bf704e6265b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("182"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a583ea78256bf704e6265c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("184"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a583f478256bf704e6265d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("185"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5840278256bf704e6265e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("187"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5840978256bf704e6265f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("188"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5840f78256bf704e62660"),
    gender: "male",
    category: "jacket",
    style: NumberInt("189"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5841778256bf704e62661"),
    gender: "male",
    category: "jacket",
    style: NumberInt("190"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5841e78256bf704e62662"),
    gender: "male",
    category: "jacket",
    style: NumberInt("191"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5842578256bf704e62663"),
    gender: "male",
    category: "jacket",
    style: NumberInt("192"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5842d78256bf704e62664"),
    gender: "male",
    category: "jacket",
    style: NumberInt("194"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5843478256bf704e62665"),
    gender: "male",
    category: "jacket",
    style: NumberInt("196"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5843b78256bf704e62666"),
    gender: "male",
    category: "jacket",
    style: NumberInt("198"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5844578256bf704e62667"),
    gender: "male",
    category: "jacket",
    style: NumberInt("200"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5844c78256bf704e62668"),
    gender: "male",
    category: "jacket",
    style: NumberInt("203"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5845778256bf704e62669"),
    gender: "male",
    category: "jacket",
    style: NumberInt("204"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5845f78256bf704e6266a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("218"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5846778256bf704e6266b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("229"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5847878256bf704e6266c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("240"),
    price: NumberInt("7000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5848d78256bf704e6266d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("244"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a584b278256bf704e6266e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("245"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a584b978256bf704e6266f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("249"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a584cb78256bf704e62670"),
    gender: "male",
    category: "jacket",
    style: NumberInt("251"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a584eb78256bf704e62671"),
    gender: "male",
    category: "jacket",
    style: NumberInt("254"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a584f578256bf704e62672"),
    gender: "male",
    category: "jacket",
    style: NumberInt("256"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a584fb78256bf704e62673"),
    gender: "male",
    category: "jacket",
    style: NumberInt("257"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5850678256bf704e62674"),
    gender: "male",
    category: "jacket",
    style: NumberInt("258"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5850d78256bf704e62675"),
    gender: "male",
    category: "jacket",
    style: NumberInt("259"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5851978256bf704e62676"),
    gender: "male",
    category: "jacket",
    style: NumberInt("262"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5852878256bf704e62677"),
    gender: "male",
    category: "jacket",
    style: NumberInt("266"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5852e78256bf704e62678"),
    gender: "male",
    category: "jacket",
    style: NumberInt("269"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5853a78256bf704e62679"),
    gender: "male",
    category: "jacket",
    style: NumberInt("270"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5854078256bf704e6267a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("272"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5854b78256bf704e6267b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("279"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5855978256bf704e6267c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("281"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5856878256bf704e6267d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("288"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5856f78256bf704e6267e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("296"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5858378256bf704e6267f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("298"),
    price: NumberInt("7000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5859b78256bf704e62680"),
    gender: "male",
    category: "jacket",
    style: NumberInt("300"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585a278256bf704e62681"),
    gender: "male",
    category: "jacket",
    style: NumberInt("304"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585c078256bf704e62683"),
    gender: "male",
    category: "jacket",
    style: NumberInt("305"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585c878256bf704e62684"),
    gender: "male",
    category: "jacket",
    style: NumberInt("307"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585cf78256bf704e62685"),
    gender: "male",
    category: "jacket",
    style: NumberInt("309"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585de78256bf704e62686"),
    gender: "male",
    category: "jacket",
    style: NumberInt("324"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585e878256bf704e62687"),
    gender: "male",
    category: "jacket",
    style: NumberInt("326"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585f178256bf704e62688"),
    gender: "male",
    category: "jacket",
    style: NumberInt("329"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a585f678256bf704e62689"),
    gender: "male",
    category: "jacket",
    style: NumberInt("330"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5860378256bf704e6268a"),
    gender: "male",
    category: "jacket",
    style: NumberInt("332"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5860c78256bf704e6268b"),
    gender: "male",
    category: "jacket",
    style: NumberInt("336"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5861278256bf704e6268c"),
    gender: "male",
    category: "jacket",
    style: NumberInt("338"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5861778256bf704e6268d"),
    gender: "male",
    category: "jacket",
    style: NumberInt("339"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5861f78256bf704e6268e"),
    gender: "male",
    category: "jacket",
    style: NumberInt("341"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5862a78256bf704e6268f"),
    gender: "male",
    category: "jacket",
    style: NumberInt("344"),
    price: NumberInt("9500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586a378256bf704e62690"),
    gender: "male",
    category: "watch",
    style: NumberInt("0"),
    price: NumberInt("12000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586b578256bf704e62691"),
    gender: "male",
    category: "watch",
    style: NumberInt("1"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586c278256bf704e62692"),
    gender: "male",
    category: "watch",
    style: NumberInt("3"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586cf78256bf704e62693"),
    gender: "male",
    category: "watch",
    style: NumberInt("4"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586d678256bf704e62694"),
    gender: "male",
    category: "watch",
    style: NumberInt("5"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586e578256bf704e62695"),
    gender: "male",
    category: "watch",
    style: NumberInt("6"),
    price: NumberInt("28000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a586ef78256bf704e62696"),
    gender: "male",
    category: "watch",
    style: NumberInt("7"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5870678256bf704e62697"),
    gender: "male",
    category: "watch",
    style: NumberInt("8"),
    price: NumberInt("28000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5870f78256bf704e62698"),
    gender: "male",
    category: "watch",
    style: NumberInt("9"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5872078256bf704e62699"),
    gender: "male",
    category: "watch",
    style: NumberInt("10"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5872978256bf704e6269a"),
    gender: "male",
    category: "watch",
    style: NumberInt("11"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5873a78256bf704e6269b"),
    gender: "male",
    category: "watch",
    style: NumberInt("12"),
    price: NumberInt("12000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5874f78256bf704e6269c"),
    gender: "male",
    category: "watch",
    style: NumberInt("14"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5875a78256bf704e6269d"),
    gender: "male",
    category: "watch",
    style: NumberInt("15"),
    price: NumberInt("17000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5876d78256bf704e6269e"),
    gender: "male",
    category: "watch",
    style: NumberInt("16"),
    price: NumberInt("26000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5877678256bf704e6269f"),
    gender: "male",
    category: "watch",
    style: NumberInt("17"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5878278256bf704e626a0"),
    gender: "male",
    category: "watch",
    style: NumberInt("18"),
    price: NumberInt("14000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5879b78256bf704e626a1"),
    gender: "male",
    category: "watch",
    style: NumberInt("19"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587a778256bf704e626a2"),
    gender: "male",
    category: "watch",
    style: NumberInt("20"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587c178256bf704e626a3"),
    gender: "male",
    category: "watch",
    style: NumberInt("33"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587cf78256bf704e626a4"),
    gender: "male",
    category: "watch",
    style: NumberInt("31"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587d578256bf704e626a5"),
    gender: "male",
    category: "watch",
    style: NumberInt("32"),
    price: NumberInt("28000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587e278256bf704e626a6"),
    gender: "male",
    category: "watch",
    style: NumberInt("34"),
    price: NumberInt("35000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587eb78256bf704e626a7"),
    gender: "male",
    category: "watch",
    style: NumberInt("35"),
    price: NumberInt("17000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a587f978256bf704e626a8"),
    gender: "male",
    category: "watch",
    style: NumberInt("36"),
    price: NumberInt("23000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60a5881278256bf704e626a9"),
    gender: "male",
    category: "watch",
    style: NumberInt("37"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c1a9249ac4a954cdee9"),
    gender: "male",
    category: "hat",
    style: NumberInt("1"),
    price: NumberInt("100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c389249ac4a954cdeea"),
    gender: "male",
    category: "hat",
    style: NumberInt("2"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c459249ac4a954cdeeb"),
    gender: "male",
    category: "hat",
    style: NumberInt("4"),
    price: NumberInt("150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c539249ac4a954cdeec"),
    gender: "male",
    category: "hat",
    style: NumberInt("5"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c6c9249ac4a954cdeed"),
    gender: "male",
    category: "hat",
    style: NumberInt("6"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c799249ac4a954cdeee"),
    gender: "male",
    category: "hat",
    style: NumberInt("7"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c8e9249ac4a954cdeef"),
    gender: "male",
    category: "hat",
    style: NumberInt("12"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5c9d9249ac4a954cdef0"),
    gender: "male",
    category: "hat",
    style: NumberInt("13"),
    price: NumberInt("450"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5cb09249ac4a954cdef1"),
    gender: "male",
    category: "hat",
    style: NumberInt("14"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ccd9249ac4a954cdef2"),
    gender: "male",
    category: "hat",
    style: NumberInt("20"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5cd79249ac4a954cdef3"),
    gender: "male",
    category: "hat",
    style: NumberInt("21"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ce29249ac4a954cdef4"),
    gender: "male",
    category: "hat",
    style: NumberInt("22"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5cea9249ac4a954cdef5"),
    gender: "male",
    category: "hat",
    style: NumberInt("23"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5cf29249ac4a954cdef6"),
    gender: "male",
    category: "hat",
    style: NumberInt("24"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5cfb9249ac4a954cdef7"),
    gender: "male",
    category: "hat",
    style: NumberInt("25"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d049249ac4a954cdef8"),
    gender: "male",
    category: "hat",
    style: NumberInt("26"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d0a9249ac4a954cdef9"),
    gender: "male",
    category: "hat",
    style: NumberInt("27"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d1a9249ac4a954cdefa"),
    gender: "male",
    category: "hat",
    style: NumberInt("28"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d229249ac4a954cdefc"),
    gender: "male",
    category: "hat",
    style: NumberInt("29"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d289249ac4a954cdefd"),
    gender: "male",
    category: "hat",
    style: NumberInt("30"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d359249ac4a954cdefe"),
    gender: "male",
    category: "hat",
    style: NumberInt("31"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d3d9249ac4a954cdeff"),
    gender: "male",
    category: "hat",
    style: NumberInt("32"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d4c9249ac4a954cdf00"),
    gender: "male",
    category: "hat",
    style: NumberInt("33"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d539249ac4a954cdf01"),
    gender: "male",
    category: "hat",
    style: NumberInt("34"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d659249ac4a954cdf02"),
    gender: "male",
    category: "hat",
    style: NumberInt("35"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d759249ac4a954cdf03"),
    gender: "male",
    category: "hat",
    style: NumberInt("36"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d7c9249ac4a954cdf04"),
    gender: "male",
    category: "hat",
    style: NumberInt("37"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d869249ac4a954cdf05"),
    gender: "male",
    category: "hat",
    style: NumberInt("40"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d8e9249ac4a954cdf06"),
    gender: "male",
    category: "hat",
    style: NumberInt("41"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d939249ac4a954cdf07"),
    gender: "male",
    category: "hat",
    style: NumberInt("42"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5d9c9249ac4a954cdf08"),
    gender: "male",
    category: "hat",
    style: NumberInt("43"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5da59249ac4a954cdf09"),
    gender: "male",
    category: "hat",
    style: NumberInt("44"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5daa9249ac4a954cdf0a"),
    gender: "male",
    category: "hat",
    style: NumberInt("45"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5daf9249ac4a954cdf0b"),
    gender: "male",
    category: "hat",
    style: NumberInt("54"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5db69249ac4a954cdf0c"),
    gender: "male",
    category: "hat",
    style: NumberInt("55"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5dbf9249ac4a954cdf0d"),
    gender: "male",
    category: "hat",
    style: NumberInt("56"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5dc59249ac4a954cdf0e"),
    gender: "male",
    category: "hat",
    style: NumberInt("64"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5dd59249ac4a954cdf0f"),
    gender: "male",
    category: "hat",
    style: NumberInt("65"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ddc9249ac4a954cdf10"),
    gender: "male",
    category: "hat",
    style: NumberInt("66"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5deb9249ac4a954cdf11"),
    gender: "male",
    category: "hat",
    style: NumberInt("83"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5df29249ac4a954cdf12"),
    gender: "male",
    category: "hat",
    style: NumberInt("94"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5dfc9249ac4a954cdf13"),
    gender: "male",
    category: "hat",
    style: NumberInt("95"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e049249ac4a954cdf14"),
    gender: "male",
    category: "hat",
    style: NumberInt("96"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e0e9249ac4a954cdf15"),
    gender: "male",
    category: "hat",
    style: NumberInt("99"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e159249ac4a954cdf16"),
    gender: "male",
    category: "hat",
    style: NumberInt("100"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e1c9249ac4a954cdf17"),
    gender: "male",
    category: "hat",
    style: NumberInt("101"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e359249ac4a954cdf18"),
    gender: "male",
    category: "hat",
    style: NumberInt("110"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e459249ac4a954cdf19"),
    gender: "male",
    category: "hat",
    style: NumberInt("135"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e5b9249ac4a954cdf1a"),
    gender: "male",
    category: "shirt",
    style: NumberInt("1"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e669249ac4a954cdf1b"),
    gender: "male",
    category: "shirt",
    style: NumberInt("5"),
    price: NumberInt("250"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e719249ac4a954cdf1c"),
    gender: "male",
    category: "shirt",
    style: NumberInt("8"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e849249ac4a954cdf1d"),
    gender: "male",
    category: "shirt",
    style: NumberInt("9"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e8b9249ac4a954cdf1e"),
    gender: "male",
    category: "shirt",
    style: NumberInt("12"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e909249ac4a954cdf1f"),
    gender: "male",
    category: "shirt",
    style: NumberInt("13"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e959249ac4a954cdf20"),
    gender: "male",
    category: "shirt",
    style: NumberInt("14"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5e9f9249ac4a954cdf21"),
    gender: "male",
    category: "shirt",
    style: NumberInt("16"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ea49249ac4a954cdf22"),
    gender: "male",
    category: "shirt",
    style: NumberInt("17"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5eae9249ac4a954cdf23"),
    gender: "male",
    category: "shirt",
    style: NumberInt("18"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ec19249ac4a954cdf24"),
    gender: "male",
    category: "shirt",
    style: NumberInt("22"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ec89249ac4a954cdf25"),
    gender: "male",
    category: "shirt",
    style: NumberInt("26"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ece9249ac4a954cdf26"),
    gender: "male",
    category: "shirt",
    style: NumberInt("33"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ed39249ac4a954cdf27"),
    gender: "male",
    category: "shirt",
    style: NumberInt("36"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5eda9249ac4a954cdf28"),
    gender: "male",
    category: "shirt",
    style: NumberInt("38"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5eee9249ac4a954cdf29"),
    gender: "male",
    category: "shirt",
    style: NumberInt("39"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5efb9249ac4a954cdf2a"),
    gender: "male",
    category: "shirt",
    style: NumberInt("41"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f039249ac4a954cdf2b"),
    gender: "male",
    category: "shirt",
    style: NumberInt("42"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f089249ac4a954cdf2c"),
    gender: "male",
    category: "shirt",
    style: NumberInt("44"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f0e9249ac4a954cdf2d"),
    gender: "male",
    category: "shirt",
    style: NumberInt("47"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f179249ac4a954cdf2e"),
    gender: "male",
    category: "shirt",
    style: NumberInt("71"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f539249ac4a954cdf2f"),
    gender: "male",
    category: "shirt",
    style: NumberInt("73"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f599249ac4a954cdf30"),
    gender: "male",
    category: "shirt",
    style: NumberInt("80"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f5f9249ac4a954cdf31"),
    gender: "male",
    category: "shirt",
    style: NumberInt("81"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f6d9249ac4a954cdf32"),
    gender: "male",
    category: "shirt",
    style: NumberInt("82"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f729249ac4a954cdf33"),
    gender: "male",
    category: "shirt",
    style: NumberInt("83"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f789249ac4a954cdf34"),
    gender: "male",
    category: "shirt",
    style: NumberInt("92"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f7e9249ac4a954cdf35"),
    gender: "male",
    category: "shirt",
    style: NumberInt("93"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f849249ac4a954cdf36"),
    gender: "male",
    category: "shirt",
    style: NumberInt("95"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f8a9249ac4a954cdf37"),
    gender: "male",
    category: "shirt",
    style: NumberInt("105"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f8f9249ac4a954cdf38"),
    gender: "male",
    category: "shirt",
    style: NumberInt("117"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5f989249ac4a954cdf39"),
    gender: "male",
    category: "shirt",
    style: NumberInt("123"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fa19249ac4a954cdf3a"),
    gender: "male",
    category: "shirt",
    style: NumberInt("128"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fa69249ac4a954cdf3b"),
    gender: "male",
    category: "shirt",
    style: NumberInt("131"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fad9249ac4a954cdf3c"),
    gender: "male",
    category: "shirt",
    style: NumberInt("133"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fbc9249ac4a954cdf3d"),
    gender: "male",
    category: "shirt",
    style: NumberInt("135"),
    price: NumberInt("4500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fc29249ac4a954cdf3e"),
    gender: "male",
    category: "shirt",
    style: NumberInt("139"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fc99249ac4a954cdf3f"),
    gender: "male",
    category: "shirt",
    style: NumberInt("144"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fd89249ac4a954cdf40"),
    gender: "male",
    category: "shirt",
    style: NumberInt("152"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fe39249ac4a954cdf41"),
    gender: "male",
    category: "shirt",
    style: NumberInt("164"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5fea9249ac4a954cdf42"),
    gender: "male",
    category: "shirt",
    style: NumberInt("193"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad5ff09249ac4a954cdf43"),
    gender: "male",
    category: "shirt",
    style: NumberInt("225"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60059249ac4a954cdf44"),
    gender: "male",
    category: "shirt",
    style: NumberInt("226"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad600e9249ac4a954cdf45"),
    gender: "male",
    category: "shirt",
    style: NumberInt("235"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60179249ac4a954cdf46"),
    gender: "male",
    category: "shirt",
    style: NumberInt("241"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60219249ac4a954cdf47"),
    gender: "male",
    category: "shirt",
    style: NumberInt("250"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60319249ac4a954cdf48"),
    gender: "male",
    category: "shirt",
    style: NumberInt("260"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad603b9249ac4a954cdf49"),
    gender: "male",
    category: "shirt",
    style: NumberInt("271"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60469249ac4a954cdf4a"),
    gender: "male",
    category: "shirt",
    style: NumberInt("299"),
    price: NumberInt("4800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad604f9249ac4a954cdf4b"),
    gender: "male",
    category: "shirt",
    style: NumberInt("313"),
    price: NumberInt("4500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60579249ac4a954cdf4c"),
    gender: "male",
    category: "shirt",
    style: NumberInt("321"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60629249ac4a954cdf4d"),
    gender: "male",
    category: "shirt",
    style: NumberInt("323"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad606d9249ac4a954cdf4e"),
    gender: "male",
    category: "shirt",
    style: NumberInt("325"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad608a9249ac4a954cdf4f"),
    gender: "male",
    category: "shirt",
    style: NumberInt("334"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60a29249ac4a954cdf50"),
    gender: "male",
    category: "shirt",
    style: NumberInt("335"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60ad9249ac4a954cdf51"),
    gender: "male",
    category: "shirt",
    style: NumberInt("337"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60bc9249ac4a954cdf52"),
    gender: "male",
    category: "shirt",
    style: NumberInt("345"),
    price: NumberInt("1250"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60c89249ac4a954cdf53"),
    gender: "male",
    category: "shirt",
    style: NumberInt("348"),
    price: NumberInt("1130"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60d29249ac4a954cdf54"),
    gender: "male",
    category: "shirt",
    style: NumberInt("350"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad60f99249ac4a954cdf55"),
    gender: "male",
    category: "pants",
    style: NumberInt("0"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad610e9249ac4a954cdf56"),
    gender: "male",
    category: "pants",
    style: NumberInt("1"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad611c9249ac4a954cdf57"),
    gender: "male",
    category: "pants",
    style: NumberInt("3"),
    price: NumberInt("450"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61229249ac4a954cdf58"),
    gender: "male",
    category: "pants",
    style: NumberInt("4"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61279249ac4a954cdf59"),
    gender: "male",
    category: "pants",
    style: NumberInt("5"),
    price: NumberInt("200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61329249ac4a954cdf5a"),
    gender: "male",
    category: "pants",
    style: NumberInt("6"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61399249ac4a954cdf5b"),
    gender: "male",
    category: "pants",
    style: NumberInt("7"),
    price: NumberInt("350"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad613f9249ac4a954cdf5c"),
    gender: "male",
    category: "pants",
    style: NumberInt("8"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61469249ac4a954cdf5d"),
    gender: "male",
    category: "pants",
    style: NumberInt("9"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad614f9249ac4a954cdf5e"),
    gender: "male",
    category: "pants",
    style: NumberInt("10"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61549249ac4a954cdf5f"),
    gender: "male",
    category: "pants",
    style: NumberInt("12"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad615a9249ac4a954cdf60"),
    gender: "male",
    category: "pants",
    style: NumberInt("13"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61619249ac4a954cdf61"),
    gender: "male",
    category: "pants",
    style: NumberInt("14"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61679249ac4a954cdf62"),
    gender: "male",
    category: "pants",
    style: NumberInt("15"),
    price: NumberInt("550"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad616c9249ac4a954cdf63"),
    gender: "male",
    category: "pants",
    style: NumberInt("16"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61739249ac4a954cdf64"),
    gender: "male",
    category: "pants",
    style: NumberInt("17"),
    price: NumberInt("750"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61799249ac4a954cdf65"),
    gender: "male",
    category: "pants",
    style: NumberInt("18"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61819249ac4a954cdf66"),
    gender: "male",
    category: "pants",
    style: NumberInt("19"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61889249ac4a954cdf67"),
    gender: "male",
    category: "pants",
    style: NumberInt("20"),
    price: NumberInt("650"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61939249ac4a954cdf68"),
    gender: "male",
    category: "pants",
    style: NumberInt("22"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61999249ac4a954cdf69"),
    gender: "male",
    category: "pants",
    style: NumberInt("23"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61a29249ac4a954cdf6a"),
    gender: "male",
    category: "pants",
    style: NumberInt("24"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61a79249ac4a954cdf6b"),
    gender: "male",
    category: "pants",
    style: NumberInt("25"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61ad9249ac4a954cdf6c"),
    gender: "male",
    category: "pants",
    style: NumberInt("26"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61b59249ac4a954cdf6d"),
    gender: "male",
    category: "pants",
    style: NumberInt("27"),
    price: NumberInt("1150"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61bf9249ac4a954cdf6e"),
    gender: "male",
    category: "pants",
    style: NumberInt("28"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61c59249ac4a954cdf6f"),
    gender: "male",
    category: "pants",
    style: NumberInt("29"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61cd9249ac4a954cdf70"),
    gender: "male",
    category: "pants",
    style: NumberInt("32"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61d29249ac4a954cdf71"),
    gender: "male",
    category: "pants",
    style: NumberInt("35"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61da9249ac4a954cdf72"),
    gender: "male",
    category: "pants",
    style: NumberInt("37"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61e79249ac4a954cdf73"),
    gender: "male",
    category: "pants",
    style: NumberInt("42"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61ef9249ac4a954cdf74"),
    gender: "male",
    category: "pants",
    style: NumberInt("43"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61f99249ac4a954cdf75"),
    gender: "male",
    category: "pants",
    style: NumberInt("45"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad61ff9249ac4a954cdf76"),
    gender: "male",
    category: "pants",
    style: NumberInt("48"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62049249ac4a954cdf77"),
    gender: "male",
    category: "pants",
    style: NumberInt("49"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad620e9249ac4a954cdf78"),
    gender: "male",
    category: "pants",
    style: NumberInt("50"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62149249ac4a954cdf79"),
    gender: "male",
    category: "pants",
    style: NumberInt("51"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62189249ac4a954cdf7a"),
    gender: "male",
    category: "pants",
    style: NumberInt("52"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad621f9249ac4a954cdf7b"),
    gender: "male",
    category: "pants",
    style: NumberInt("53"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62249249ac4a954cdf7c"),
    gender: "male",
    category: "pants",
    style: NumberInt("54"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62299249ac4a954cdf7d"),
    gender: "male",
    category: "pants",
    style: NumberInt("55"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad622f9249ac4a954cdf7e"),
    gender: "male",
    category: "pants",
    style: NumberInt("58"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62359249ac4a954cdf7f"),
    gender: "male",
    category: "pants",
    style: NumberInt("60"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad623a9249ac4a954cdf80"),
    gender: "male",
    category: "pants",
    style: NumberInt("61"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad623f9249ac4a954cdf81"),
    gender: "male",
    category: "pants",
    style: NumberInt("62"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62459249ac4a954cdf82"),
    gender: "male",
    category: "pants",
    style: NumberInt("63"),
    price: NumberInt("700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad624d9249ac4a954cdf83"),
    gender: "male",
    category: "pants",
    style: NumberInt("64"),
    price: NumberInt("650"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62539249ac4a954cdf84"),
    gender: "male",
    category: "pants",
    style: NumberInt("65"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad625f9249ac4a954cdf85"),
    gender: "male",
    category: "pants",
    style: NumberInt("69"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62679249ac4a954cdf86"),
    gender: "male",
    category: "pants",
    style: NumberInt("71"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad626b9249ac4a954cdf87"),
    gender: "male",
    category: "pants",
    style: NumberInt("73"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62729249ac4a954cdf88"),
    gender: "male",
    category: "pants",
    style: NumberInt("75"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62789249ac4a954cdf89"),
    gender: "male",
    category: "pants",
    style: NumberInt("76"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad627f9249ac4a954cdf8a"),
    gender: "male",
    category: "pants",
    style: NumberInt("78"),
    price: NumberInt("1700"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62889249ac4a954cdf8b"),
    gender: "male",
    category: "pants",
    style: NumberInt("79"),
    price: NumberInt("1900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad628e9249ac4a954cdf8c"),
    gender: "male",
    category: "pants",
    style: NumberInt("80"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62929249ac4a954cdf8d"),
    gender: "male",
    category: "pants",
    style: NumberInt("81"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62999249ac4a954cdf8e"),
    gender: "male",
    category: "pants",
    style: NumberInt("82"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad629f9249ac4a954cdf8f"),
    gender: "male",
    category: "pants",
    style: NumberInt("96"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62af9249ac4a954cdf90"),
    gender: "male",
    category: "pants",
    style: NumberInt("98"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62c19249ac4a954cdf91"),
    gender: "male",
    category: "pants",
    style: NumberInt("99"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62cd9249ac4a954cdf92"),
    gender: "male",
    category: "pants",
    style: NumberInt("100"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62d29249ac4a954cdf93"),
    gender: "male",
    category: "pants",
    style: NumberInt("102"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62d89249ac4a954cdf94"),
    gender: "male",
    category: "pants",
    style: NumberInt("103"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62df9249ac4a954cdf95"),
    gender: "male",
    category: "pants",
    style: NumberInt("104"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62e49249ac4a954cdf96"),
    gender: "male",
    category: "pants",
    style: NumberInt("105"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62eb9249ac4a954cdf97"),
    gender: "male",
    category: "pants",
    style: NumberInt("116"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad62fb9249ac4a954cdf98"),
    gender: "male",
    category: "pants",
    style: NumberInt("117"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad630e9249ac4a954cdf99"),
    gender: "male",
    category: "pants",
    style: NumberInt("118"),
    price: NumberInt("4500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63179249ac4a954cdf9a"),
    gender: "male",
    category: "pants",
    style: NumberInt("128"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63289249ac4a954cdf9b"),
    gender: "male",
    category: "shoes",
    style: NumberInt("1"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63379249ac4a954cdf9c"),
    gender: "male",
    category: "shoes",
    style: NumberInt("3"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad633c9249ac4a954cdf9d"),
    gender: "male",
    category: "shoes",
    style: NumberInt("4"),
    price: NumberInt("600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63429249ac4a954cdf9e"),
    gender: "male",
    category: "shoes",
    style: NumberInt("5"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63489249ac4a954cdf9f"),
    gender: "male",
    category: "shoes",
    style: NumberInt("7"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63569249ac4a954cdfa0"),
    gender: "male",
    category: "shoes",
    style: NumberInt("8"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad635c9249ac4a954cdfa1"),
    gender: "male",
    category: "shoes",
    style: NumberInt("9"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63629249ac4a954cdfa2"),
    gender: "male",
    category: "shoes",
    style: NumberInt("10"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad636f9249ac4a954cdfa3"),
    gender: "male",
    category: "shoes",
    style: NumberInt("12"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63749249ac4a954cdfa4"),
    gender: "male",
    category: "shoes",
    style: NumberInt("14"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63799249ac4a954cdfa5"),
    gender: "male",
    category: "shoes",
    style: NumberInt("15"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad637e9249ac4a954cdfa6"),
    gender: "male",
    category: "shoes",
    style: NumberInt("16"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63899249ac4a954cdfa7"),
    gender: "male",
    category: "shoes",
    style: NumberInt("17"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad638f9249ac4a954cdfa8"),
    gender: "male",
    category: "shoes",
    style: NumberInt("18"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63969249ac4a954cdfa9"),
    gender: "male",
    category: "shoes",
    style: NumberInt("19"),
    price: NumberInt("950"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad639f9249ac4a954cdfaa"),
    gender: "male",
    category: "shoes",
    style: NumberInt("20"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63ac9249ac4a954cdfab"),
    gender: "male",
    category: "shoes",
    style: NumberInt("21"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63b29249ac4a954cdfac"),
    gender: "male",
    category: "shoes",
    style: NumberInt("22"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63b99249ac4a954cdfad"),
    gender: "male",
    category: "shoes",
    style: NumberInt("23"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63be9249ac4a954cdfae"),
    gender: "male",
    category: "shoes",
    style: NumberInt("26"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63ce9249ac4a954cdfaf"),
    gender: "male",
    category: "shoes",
    style: NumberInt("28"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63d79249ac4a954cdfb0"),
    gender: "male",
    category: "shoes",
    style: NumberInt("29"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63dc9249ac4a954cdfb1"),
    gender: "male",
    category: "shoes",
    style: NumberInt("30"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63e89249ac4a954cdfb2"),
    gender: "male",
    category: "shoes",
    style: NumberInt("31"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63f09249ac4a954cdfb3"),
    gender: "male",
    category: "shoes",
    style: NumberInt("32"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad63f79249ac4a954cdfb4"),
    gender: "male",
    category: "shoes",
    style: NumberInt("36"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64009249ac4a954cdfb5"),
    gender: "male",
    category: "shoes",
    style: NumberInt("38"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64089249ac4a954cdfb6"),
    gender: "male",
    category: "shoes",
    style: NumberInt("40"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64109249ac4a954cdfb7"),
    gender: "male",
    category: "shoes",
    style: NumberInt("41"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64169249ac4a954cdfb8"),
    gender: "male",
    category: "shoes",
    style: NumberInt("42"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad641c9249ac4a954cdfb9"),
    gender: "male",
    category: "shoes",
    style: NumberInt("43"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64229249ac4a954cdfba"),
    gender: "male",
    category: "shoes",
    style: NumberInt("45"),
    price: NumberInt("1200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64289249ac4a954cdfbb"),
    gender: "male",
    category: "shoes",
    style: NumberInt("46"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64329249ac4a954cdfbc"),
    gender: "male",
    category: "shoes",
    style: NumberInt("48"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64389249ac4a954cdfbd"),
    gender: "male",
    category: "shoes",
    style: NumberInt("49"),
    price: NumberInt("850"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad643d9249ac4a954cdfbe"),
    gender: "male",
    category: "shoes",
    style: NumberInt("51"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64439249ac4a954cdfbf"),
    gender: "male",
    category: "shoes",
    style: NumberInt("52"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64499249ac4a954cdfc0"),
    gender: "male",
    category: "shoes",
    style: NumberInt("54"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad644f9249ac4a954cdfc1"),
    gender: "male",
    category: "shoes",
    style: NumberInt("56"),
    price: NumberInt("1300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad645c9249ac4a954cdfc2"),
    gender: "male",
    category: "shoes",
    style: NumberInt("57"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64639249ac4a954cdfc3"),
    gender: "male",
    category: "shoes",
    style: NumberInt("58"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad646b9249ac4a954cdfc4"),
    gender: "male",
    category: "shoes",
    style: NumberInt("64"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64709249ac4a954cdfc5"),
    gender: "male",
    category: "shoes",
    style: NumberInt("65"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64769249ac4a954cdfc6"),
    gender: "male",
    category: "shoes",
    style: NumberInt("66"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad647d9249ac4a954cdfc7"),
    gender: "male",
    category: "shoes",
    style: NumberInt("69"),
    price: NumberInt("1400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64829249ac4a954cdfc8"),
    gender: "male",
    category: "shoes",
    style: NumberInt("73"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad648c9249ac4a954cdfc9"),
    gender: "male",
    category: "shoes",
    style: NumberInt("74"),
    price: NumberInt("1550"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64959249ac4a954cdfca"),
    gender: "male",
    category: "shoes",
    style: NumberInt("75"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad649b9249ac4a954cdfcb"),
    gender: "male",
    category: "shoes",
    style: NumberInt("76"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64ae9249ac4a954cdfcc"),
    gender: "male",
    category: "shoes",
    style: NumberInt("77"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64b79249ac4a954cdfcd"),
    gender: "male",
    category: "shoes",
    style: NumberInt("78"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64bd9249ac4a954cdfce"),
    gender: "male",
    category: "shoes",
    style: NumberInt("89"),
    price: NumberInt("1600"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64c49249ac4a954cdfcf"),
    gender: "male",
    category: "shoes",
    style: NumberInt("92"),
    price: NumberInt("4500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64d59249ac4a954cdfd0"),
    gender: "male",
    category: "shoes",
    style: NumberInt("93"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64da9249ac4a954cdfd1"),
    gender: "male",
    category: "shoes",
    style: NumberInt("94"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad64e49249ac4a954cdfd2"),
    gender: "male",
    category: "shoes",
    style: NumberInt("95"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65139249ac4a954cdfd3"),
    gender: "male",
    category: "glasses",
    style: NumberInt("2"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65199249ac4a954cdfd4"),
    gender: "male",
    category: "glasses",
    style: NumberInt("3"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad651e9249ac4a954cdfd5"),
    gender: "male",
    category: "glasses",
    style: NumberInt("4"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65259249ac4a954cdfd6"),
    gender: "male",
    category: "glasses",
    style: NumberInt("5"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad652b9249ac4a954cdfd7"),
    gender: "male",
    category: "glasses",
    style: NumberInt("7"),
    price: NumberInt("900"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65319249ac4a954cdfd8"),
    gender: "male",
    category: "glasses",
    style: NumberInt("8"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65379249ac4a954cdfd9"),
    gender: "male",
    category: "glasses",
    style: NumberInt("9"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad653c9249ac4a954cdfda"),
    gender: "male",
    category: "glasses",
    style: NumberInt("10"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65419249ac4a954cdfdb"),
    gender: "male",
    category: "glasses",
    style: NumberInt("12"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65479249ac4a954cdfdc"),
    gender: "male",
    category: "glasses",
    style: NumberInt("13"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad654e9249ac4a954cdfdd"),
    gender: "male",
    category: "glasses",
    style: NumberInt("15"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65529249ac4a954cdfde"),
    gender: "male",
    category: "glasses",
    style: NumberInt("16"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad655d9249ac4a954cdfdf"),
    gender: "male",
    category: "glasses",
    style: NumberInt("17"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65679249ac4a954cdfe0"),
    gender: "male",
    category: "glasses",
    style: NumberInt("18"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad656e9249ac4a954cdfe1"),
    gender: "male",
    category: "glasses",
    style: NumberInt("19"),
    price: NumberInt("5000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad657d9249ac4a954cdfe2"),
    gender: "male",
    category: "glasses",
    style: NumberInt("20"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65839249ac4a954cdfe3"),
    gender: "male",
    category: "glasses",
    style: NumberInt("21"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65899249ac4a954cdfe4"),
    gender: "male",
    category: "glasses",
    style: NumberInt("23"),
    price: NumberInt("1800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65939249ac4a954cdfe5"),
    gender: "male",
    category: "glasses",
    style: NumberInt("28"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad659a9249ac4a954cdfe6"),
    gender: "male",
    category: "glasses",
    style: NumberInt("29"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65c99249ac4a954cdfe7"),
    gender: "male",
    category: "accessories",
    style: NumberInt("10"),
    price: NumberInt("300"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65db9249ac4a954cdfe8"),
    gender: "male",
    category: "accessories",
    style: NumberInt("12"),
    price: NumberInt("350"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65e39249ac4a954cdfe9"),
    gender: "male",
    category: "accessories",
    style: NumberInt("18"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65e89249ac4a954cdfea"),
    gender: "male",
    category: "accessories",
    style: NumberInt("19"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65ef9249ac4a954cdfeb"),
    gender: "male",
    category: "accessories",
    style: NumberInt("21"),
    price: NumberInt("350"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65f59249ac4a954cdfec"),
    gender: "male",
    category: "accessories",
    style: NumberInt("22"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad65fe9249ac4a954cdfed"),
    gender: "male",
    category: "accessories",
    style: NumberInt("23"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66069249ac4a954cdfee"),
    gender: "male",
    category: "accessories",
    style: NumberInt("30"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66159249ac4a954cdfef"),
    gender: "male",
    category: "accessories",
    style: NumberInt("31"),
    price: NumberInt("1000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad662c9249ac4a954cdff0"),
    gender: "male",
    category: "accessories",
    style: NumberInt("32"),
    price: NumberInt("450"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66329249ac4a954cdff1"),
    gender: "male",
    category: "accessories",
    style: NumberInt("34"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66379249ac4a954cdff2"),
    gender: "male",
    category: "accessories",
    style: NumberInt("35"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66449249ac4a954cdff3"),
    gender: "male",
    category: "accessories",
    style: NumberInt("37"),
    price: NumberInt("370"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad664a9249ac4a954cdff4"),
    gender: "male",
    category: "accessories",
    style: NumberInt("38"),
    price: NumberInt("400"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66509249ac4a954cdff5"),
    gender: "male",
    category: "accessories",
    style: NumberInt("39"),
    price: NumberInt("450"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad665a9249ac4a954cdff6"),
    gender: "male",
    category: "accessories",
    style: NumberInt("49"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad666c9249ac4a954cdff7"),
    gender: "male",
    category: "accessories",
    style: NumberInt("51"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66749249ac4a954cdff8"),
    gender: "male",
    category: "accessories",
    style: NumberInt("52"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad667b9249ac4a954cdff9"),
    gender: "male",
    category: "accessories",
    style: NumberInt("53"),
    price: NumberInt("25000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66819249ac4a954cdffc"),
    gender: "male",
    category: "accessories",
    style: NumberInt("54"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad668c9249ac4a954cdffd"),
    gender: "male",
    category: "accessories",
    style: NumberInt("55"),
    price: NumberInt("26000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad669b9249ac4a954cdffe"),
    gender: "male",
    category: "accessories",
    style: NumberInt("85"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66a09249ac4a954cdfff"),
    gender: "male",
    category: "accessories",
    style: NumberInt("86"),
    price: NumberInt("19000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66a59249ac4a954ce000"),
    gender: "male",
    category: "accessories",
    style: NumberInt("87"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66ac9249ac4a954ce001"),
    gender: "male",
    category: "accessories",
    style: NumberInt("88"),
    price: NumberInt("22000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66b39249ac4a954ce002"),
    gender: "male",
    category: "accessories",
    style: NumberInt("89"),
    price: NumberInt("24000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66ba9249ac4a954ce003"),
    gender: "male",
    category: "accessories",
    style: NumberInt("90"),
    price: NumberInt("28000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66c49249ac4a954ce004"),
    gender: "male",
    category: "accessories",
    style: NumberInt("91"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66d29249ac4a954ce005"),
    gender: "male",
    category: "accessories",
    style: NumberInt("92"),
    price: NumberInt("12000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66dd9249ac4a954ce006"),
    gender: "male",
    category: "accessories",
    style: NumberInt("93"),
    price: NumberInt("18000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66e39249ac4a954ce007"),
    gender: "male",
    category: "accessories",
    style: NumberInt("94"),
    price: NumberInt("15000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66ee9249ac4a954ce008"),
    gender: "male",
    category: "accessories",
    style: NumberInt("111"),
    price: NumberInt("13000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66f59249ac4a954ce009"),
    gender: "male",
    category: "accessories",
    style: NumberInt("112"),
    price: NumberInt("800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad66fc9249ac4a954ce00a"),
    gender: "male",
    category: "accessories",
    style: NumberInt("114"),
    price: NumberInt("2000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad67049249ac4a954ce00b"),
    gender: "male",
    category: "accessories",
    style: NumberInt("117"),
    price: NumberInt("500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad67099249ac4a954ce00c"),
    gender: "male",
    category: "accessories",
    style: NumberInt("118"),
    price: NumberInt("1100"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad67109249ac4a954ce00d"),
    gender: "male",
    category: "accessories",
    style: NumberInt("120"),
    price: NumberInt("30000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad671f9249ac4a954ce00e"),
    gender: "male",
    category: "accessories",
    style: NumberInt("122"),
    price: NumberInt("32000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad672e9249ac4a954ce00f"),
    gender: "male",
    category: "accessories",
    style: NumberInt("123"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad67349249ac4a954ce010"),
    gender: "male",
    category: "accessories",
    style: NumberInt("124"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60ad673a9249ac4a954ce011"),
    gender: "male",
    category: "accessories",
    style: NumberInt("131"),
    price: NumberInt("40000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33049"),
    gender: "male",
    category: "mask",
    style: NumberInt("2"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3304a"),
    gender: "male",
    category: "mask",
    style: NumberInt("4"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3304b"),
    gender: "male",
    category: "mask",
    style: NumberInt("6"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3304c"),
    gender: "male",
    category: "mask",
    style: NumberInt("14"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3304d"),
    gender: "male",
    category: "mask",
    style: NumberInt("15"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3304e"),
    gender: "male",
    category: "mask",
    style: NumberInt("16"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3304f"),
    gender: "male",
    category: "mask",
    style: NumberInt("30"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33050"),
    gender: "male",
    category: "mask",
    style: NumberInt("35"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33051"),
    gender: "male",
    category: "mask",
    style: NumberInt("37"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33052"),
    gender: "male",
    category: "mask",
    style: NumberInt("50"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33053"),
    gender: "male",
    category: "mask",
    style: NumberInt("51"),
    price: NumberInt("2200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33054"),
    gender: "male",
    category: "mask",
    style: NumberInt("53"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33055"),
    gender: "male",
    category: "mask",
    style: NumberInt("54"),
    price: NumberInt("3500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33056"),
    gender: "male",
    category: "mask",
    style: NumberInt("57"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33057"),
    gender: "male",
    category: "mask",
    style: NumberInt("58"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33058"),
    gender: "male",
    category: "mask",
    style: NumberInt("99"),
    price: NumberInt("6000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33059"),
    gender: "male",
    category: "mask",
    style: NumberInt("102"),
    price: NumberInt("20000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3305a"),
    gender: "male",
    category: "mask",
    style: NumberInt("111"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3305b"),
    gender: "male",
    category: "mask",
    style: NumberInt("113"),
    price: NumberInt("3200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3305c"),
    gender: "male",
    category: "mask",
    style: NumberInt("114"),
    price: NumberInt("4200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3305d"),
    gender: "male",
    category: "mask",
    style: NumberInt("115"),
    price: NumberInt("4200"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3305e"),
    gender: "male",
    category: "mask",
    style: NumberInt("116"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3305f"),
    gender: "male",
    category: "mask",
    style: NumberInt("117"),
    price: NumberInt("3000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33060"),
    gender: "male",
    category: "mask",
    style: NumberInt("118"),
    price: NumberInt("3800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33061"),
    gender: "male",
    category: "mask",
    style: NumberInt("119"),
    price: NumberInt("3800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33062"),
    gender: "male",
    category: "mask",
    style: NumberInt("124"),
    price: NumberInt("5500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33063"),
    gender: "male",
    category: "mask",
    style: NumberInt("133"),
    price: NumberInt("14500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33064"),
    gender: "male",
    category: "mask",
    style: NumberInt("169"),
    price: NumberInt("2500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33065"),
    gender: "male",
    category: "mask",
    style: NumberInt("183"),
    price: NumberInt("5500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33066"),
    gender: "male",
    category: "mask",
    style: NumberInt("186"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33067"),
    gender: "male",
    category: "mask",
    style: NumberInt("187"),
    price: NumberInt("4500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33068"),
    gender: "male",
    category: "mask",
    style: NumberInt("11"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33069"),
    gender: "male",
    category: "mask",
    style: NumberInt("12"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3306a"),
    gender: "male",
    category: "mask",
    style: NumberInt("49"),
    price: NumberInt("1500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3306b"),
    gender: "male",
    category: "mask",
    style: NumberInt("43"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3306c"),
    gender: "male",
    category: "mask",
    style: NumberInt("44"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3306d"),
    gender: "male",
    category: "mask",
    style: NumberInt("45"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3306e"),
    gender: "male",
    category: "mask",
    style: NumberInt("47"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3306f"),
    gender: "male",
    category: "mask",
    style: NumberInt("48"),
    price: NumberInt("10000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33070"),
    gender: "male",
    category: "mask",
    style: NumberInt("13"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33071"),
    gender: "male",
    category: "mask",
    style: NumberInt("39"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33072"),
    gender: "male",
    category: "mask",
    style: NumberInt("40"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33073"),
    gender: "male",
    category: "mask",
    style: NumberInt("41"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33074"),
    gender: "male",
    category: "mask",
    style: NumberInt("42"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33075"),
    gender: "male",
    category: "mask",
    style: NumberInt("61"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33076"),
    gender: "male",
    category: "mask",
    style: NumberInt("62"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33077"),
    gender: "male",
    category: "mask",
    style: NumberInt("63"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33078"),
    gender: "male",
    category: "mask",
    style: NumberInt("64"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33079"),
    gender: "male",
    category: "mask",
    style: NumberInt("67"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3307a"),
    gender: "male",
    category: "mask",
    style: NumberInt("68"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3307b"),
    gender: "male",
    category: "mask",
    style: NumberInt("69"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3307c"),
    gender: "male",
    category: "mask",
    style: NumberInt("71"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3307d"),
    gender: "male",
    category: "mask",
    style: NumberInt("136"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3307e"),
    gender: "male",
    category: "mask",
    style: NumberInt("138"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3307f"),
    gender: "male",
    category: "mask",
    style: NumberInt("140"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33080"),
    gender: "male",
    category: "mask",
    style: NumberInt("155"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33081"),
    gender: "male",
    category: "mask",
    style: NumberInt("160"),
    price: NumberInt("4000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33082"),
    gender: "male",
    category: "mask",
    style: NumberInt("2"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33083"),
    gender: "male",
    category: "mask",
    style: NumberInt("3"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33084"),
    gender: "male",
    category: "mask",
    style: NumberInt("5"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33085"),
    gender: "male",
    category: "mask",
    style: NumberInt("7"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33086"),
    gender: "male",
    category: "mask",
    style: NumberInt("17"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33087"),
    gender: "male",
    category: "mask",
    style: NumberInt("18"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33088"),
    gender: "male",
    category: "mask",
    style: NumberInt("19"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33089"),
    gender: "male",
    category: "mask",
    style: NumberInt("20"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3308a"),
    gender: "male",
    category: "mask",
    style: NumberInt("21"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3308b"),
    gender: "male",
    category: "mask",
    style: NumberInt("22"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3308c"),
    gender: "male",
    category: "mask",
    style: NumberInt("23"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3308d"),
    gender: "male",
    category: "mask",
    style: NumberInt("24"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3308e"),
    gender: "male",
    category: "mask",
    style: NumberInt("25"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3308f"),
    gender: "male",
    category: "mask",
    style: NumberInt("26"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33090"),
    gender: "male",
    category: "mask",
    style: NumberInt("59"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33091"),
    gender: "male",
    category: "mask",
    style: NumberInt("60"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33092"),
    gender: "male",
    category: "mask",
    style: NumberInt("96"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33093"),
    gender: "male",
    category: "mask",
    style: NumberInt("97"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33094"),
    gender: "male",
    category: "mask",
    style: NumberInt("98"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33095"),
    gender: "male",
    category: "mask",
    style: NumberInt("100"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33096"),
    gender: "male",
    category: "mask",
    style: NumberInt("147"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33097"),
    gender: "male",
    category: "mask",
    style: NumberInt("149"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33098"),
    gender: "male",
    category: "mask",
    style: NumberInt("150"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd33099"),
    gender: "male",
    category: "mask",
    style: NumberInt("151"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3309a"),
    gender: "male",
    category: "mask",
    style: NumberInt("152"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3309b"),
    gender: "male",
    category: "mask",
    style: NumberInt("153"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3309c"),
    gender: "male",
    category: "mask",
    style: NumberInt("181"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3309d"),
    gender: "male",
    category: "mask",
    style: NumberInt("182"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3309e"),
    gender: "male",
    category: "mask",
    style: NumberInt("184"),
    price: NumberInt("2800"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd3309f"),
    gender: "male",
    category: "mask",
    style: NumberInt("8"),
    price: NumberInt("9500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a0"),
    gender: "male",
    category: "mask",
    style: NumberInt("9"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a1"),
    gender: "male",
    category: "mask",
    style: NumberInt("10"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a2"),
    gender: "male",
    category: "mask",
    style: NumberInt("31"),
    price: NumberInt("9000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a3"),
    gender: "male",
    category: "mask",
    style: NumberInt("33"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a4"),
    gender: "male",
    category: "mask",
    style: NumberInt("76"),
    price: NumberInt("8000"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a5"),
    gender: "male",
    category: "mask",
    style: NumberInt("77"),
    price: NumberInt("8500"),
    __v: NumberInt("0")
} ]);
db.getCollection("clothes").insert([ {
    _id: ObjectId("60bb8d9d2050db0a2cd330a6"),
    gender: "male",
    category: "mask",
    style: NumberInt("87"),
    price: NumberInt("8500"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for counters
// ----------------------------
db.getCollection("counters").drop();
db.createCollection("counters");
db.getCollection("counters").createIndex({
    _id: NumberInt("1"),
    seq: NumberInt("1")
}, {
    name: "_id_1_seq_1",
    background: true,
    unique: true
});

// ----------------------------
// Collection structure for factionlogs
// ----------------------------
db.getCollection("factionlogs").drop();
db.createCollection("factionlogs");

// ----------------------------
// Collection structure for factions
// ----------------------------
db.getCollection("factions").drop();
db.createCollection("factions");
db.getCollection("factions").createIndex({
    name: NumberInt("1")
}, {
    name: "name_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of factions
// ----------------------------
db.getCollection("factions").insert([ {
    _id: ObjectId("60637b03a2ea95f769dfd6d8"),
    money: 900,
    materials: 10250,
    inventory: [
        {
            name: "medkit",
            amount: NumberInt("1"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("179")
        },
        {
            name: "medkit",
            amount: NumberInt("1"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("178")
        }
    ],
    ranks: [
        {
            salary: NumberInt("500"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074ec"),
            name: "Студент",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1000"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074ed"),
            name: "Интерн",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1300"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074ee"),
            name: "Фельдшер",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1500"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074ef"),
            name: "Врач",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("2000"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f0"),
            name: "Нарколог",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("2800"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f1"),
            name: "Психиатр",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("3500"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f2"),
            name: "Терапевт",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("4000"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f3"),
            name: "Хирург",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("4500"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f4"),
            name: "Зам. начальника отделения",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("5000"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f5"),
            name: "Начальник отделения",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("6500"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f6"),
            name: "Зам.Гл. Врача",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true
            }
        },
        {
            salary: NumberInt("7000"),
            _id: ObjectId("6079d4a0b3e9dfe0e74074f7"),
            name: "Глав Врач",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                leader: true,
                members: true
            }
        }
    ],
    members: [ ],
    name: "ems",
    __v: NumberInt("0")
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("606f3422891a4797ca12a97a"),
    money: 122200,
    materials: 11302,
    inventory: [
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("46")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("31")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("30")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("42")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("50")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("51")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("47")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("45")
        },
        {
            name: "nightstick",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("54")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("49")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("48")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("43")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("44")
        },
        {
            name: "7.62mm",
            amount: NumberInt("36"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("23")
        },
        {
            name: "7.62mm",
            amount: NumberInt("45"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("22")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("55")
        },
        {
            name: "pistol",
            amount: NumberInt("4"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("0")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("1")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("2")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("3")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("4")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("5")
        },
        {
            name: "cocaine",
            amount: NumberInt("1"),
            cell: NumberInt("179")
        },
        {
            name: "cocaine",
            amount: NumberInt("3"),
            cell: NumberInt("13")
        },
        {
            name: "bat",
            amount: NumberInt("1"),
            cell: NumberInt("12")
        },
        {
            name: "7.62mm",
            amount: NumberInt("200"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("20")
        },
        {
            name: "12gauge",
            amount: NumberInt("100"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("19")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("6")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("24")
        },
        {
            name: "knife",
            amount: NumberInt("5"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("25")
        },
        {
            name: "12gauge",
            amount: NumberInt("100"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("18")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("9")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("100"),
                color: NumberInt("0")
            },
            cell: NumberInt("36")
        },
        {
            name: "pumpshotgun",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("14")
        },
        {
            name: "smg",
            amount: NumberInt("1"),
            data: {
                faction: "lspd"
            },
            cell: NumberInt("15")
        }
    ],
    ranks: [
        {
            salary: NumberInt("800"),
            _id: ObjectId("60788596a5a3ec40ca944e38"),
            name: "Кадет",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                wanted: false,
                members: false
            }
        },
        {
            salary: NumberInt("1000"),
            _id: ObjectId("60788596a5a3ec40ca944e39"),
            name: "Старший кадет",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                wanted: false,
                members: false
            }
        },
        {
            salary: NumberInt("1500"),
            _id: ObjectId("60788596a5a3ec40ca944e3a"),
            name: "Офицер стажер",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                wanted: false,
                members: false
            }
        },
        {
            salary: NumberInt("2000"),
            _id: ObjectId("60788596a5a3ec40ca944e3b"),
            name: "Капрал",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("2500"),
            _id: ObjectId("60788596a5a3ec40ca944e3c"),
            name: "Сержант",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("3000"),
            _id: ObjectId("60788596a5a3ec40ca944e3d"),
            name: "Штаб-Сержант",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("4500"),
            _id: ObjectId("60788596a5a3ec40ca944e3e"),
            name: "Лейтенант",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("5000"),
            _id: ObjectId("60788596a5a3ec40ca944e3f"),
            name: "Капитан",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("6000"),
            _id: ObjectId("60788596a5a3ec40ca944e40"),
            name: "Инспектор отдела",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("6500"),
            _id: ObjectId("60788596a5a3ec40ca944e41"),
            name: "Начальник отдела",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("7000"),
            _id: ObjectId("60788596a5a3ec40ca944e42"),
            name: "Заместитель Шефа",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                members: false
            }
        },
        {
            salary: NumberInt("8000"),
            _id: ObjectId("60788596a5a3ec40ca944e43"),
            name: "Шеф",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                wanted: true,
                leader: true,
                members: true
            }
        }
    ],
    members: [
        {
            userId: ObjectId("63613e7635608555c2bc299e"),
            rank: ObjectId("60788596a5a3ec40ca944e43")
        }
    ],
    name: "lspd"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("6071f816465856926b46564a"),
    money: 0,
    materials: 4024,
    inventory: [
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("12")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("14")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("76")
        },
        {
            name: "12gauge",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("62")
        },
        {
            name: "12gauge",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("63")
        },
        {
            name: "12gauge",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("65")
        },
        {
            name: "12gauge",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("61")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("13")
        },
        {
            name: "burger",
            amount: NumberInt("50"),
            cell: NumberInt("127")
        },
        {
            name: "burger",
            amount: NumberInt("50"),
            cell: NumberInt("126")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("3")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("4")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("5")
        },
        {
            name: "12gauge",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("64")
        },
        {
            name: "flashlight",
            amount: NumberInt("1"),
            cell: NumberInt("121"),
            data: { }
        },
        {
            name: "12gauge",
            amount: NumberInt("100"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("60")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("54")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("15")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("70"),
                color: NumberInt("0")
            },
            cell: NumberInt("67")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("48")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("6")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("7")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("8")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("9")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("10")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("11")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("16")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("17")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("18")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("19")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("20")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("21")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("22")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("23")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("51")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("50")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("52")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("53")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("49")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("27")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("28")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("29")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("30")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("31")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("32")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("33")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("34")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("35")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("37")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("72")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            cell: NumberInt("73")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("74")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            cell: NumberInt("75")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("57")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("58")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("59")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("55")
        },
        {
            name: "stungun",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("56")
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("78")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("38")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("39")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("40")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("41")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("42")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("43")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("44")
        },
        {
            name: "pistol50",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("36")
        },
        {
            name: "nightstick",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("80")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("81")
        },
        {
            name: "nightstick",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("84")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("82")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("83")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("87")
        },
        {
            name: "knife",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("88")
        },
        {
            name: "nightstick",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("79")
        },
        {
            name: "nightstick",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("85")
        },
        {
            name: "nightstick",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("86")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("24")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            cell: NumberInt("120"),
            data: { }
        },
        {
            name: "handcuffs",
            amount: NumberInt("1"),
            cell: NumberInt("77")
        },
        {
            name: "combatpdw",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("25")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("19"),
                color: NumberInt("0")
            },
            cell: NumberInt("90")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("70"),
                color: NumberInt("0")
            },
            cell: NumberInt("66")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("70"),
                color: NumberInt("0")
            },
            cell: NumberInt("68")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("70"),
                color: NumberInt("0")
            },
            cell: NumberInt("69")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("70"),
                color: NumberInt("0")
            },
            cell: NumberInt("70")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("70"),
                color: NumberInt("0")
            },
            cell: NumberInt("71")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("100"),
                color: NumberInt("0")
            },
            cell: NumberInt("91")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("100"),
                color: NumberInt("0")
            },
            cell: NumberInt("92")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("100"),
                color: NumberInt("0")
            },
            cell: NumberInt("93")
        },
        {
            name: "assaultrifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("96")
        },
        {
            name: "assaultrifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("97")
        },
        {
            name: "assaultrifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("98")
        },
        {
            name: "assaultrifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("99")
        },
        {
            name: "assaultrifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("100")
        },
        {
            name: "assaultrifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("101")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("104")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("105")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("106")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("107")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("108")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("109")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("110")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("111")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("112")
        },
        {
            name: "9mm",
            amount: NumberInt("145"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("115")
        },
        {
            name: "9mm",
            amount: NumberInt("240"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("116")
        },
        {
            name: "9mm",
            amount: NumberInt("240"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("117")
        },
        {
            name: "9mm",
            amount: NumberInt("240"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("118")
        },
        {
            name: "9mm",
            amount: NumberInt("240"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("119")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("168")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("175")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("174")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("179")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("178")
        },
        {
            name: "medkit",
            amount: NumberInt("1"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("158")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("159")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("160")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("161")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("167")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("166")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("165")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("164")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("173")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("163")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("162")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("169")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("170")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("171")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("172")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("176")
        },
        {
            name: "medkit",
            amount: NumberInt("4"),
            data: {
                faction: "ems"
            },
            cell: NumberInt("177")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("26")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("102")
        },
        {
            name: "pistol",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("123")
        },
        {
            name: "9mm",
            amount: NumberInt("11"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("124")
        },
        {
            name: "armor_medium",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("68"),
                color: NumberInt("0")
            },
            cell: NumberInt("89")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("2")
        },
        {
            name: "7.62mm",
            amount: NumberInt("120"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("103")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("100"),
                color: NumberInt("0")
            },
            cell: NumberInt("129")
        }
    ],
    ranks: [
        {
            salary: NumberInt("300"),
            _id: ObjectId("6079d765560106e37d92e6d6"),
            name: "Рядовой-рекрут",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("500"),
            _id: ObjectId("6079d765560106e37d92e6d7"),
            name: "Рядовой",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("800"),
            _id: ObjectId("6079d765560106e37d92e6d8"),
            name: "Капрал",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1000"),
            _id: ObjectId("6079d765560106e37d92e6d9"),
            name: "Сержант",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1300"),
            _id: ObjectId("6079d765560106e37d92e6da"),
            name: "Старший Сержант",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1500"),
            _id: ObjectId("6079d765560106e37d92e6db"),
            name: "Офицер",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("1800"),
            _id: ObjectId("6079d765560106e37d92e6dc"),
            name: "Старший Офицер",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("2000"),
            _id: ObjectId("6079d765560106e37d92e6dd"),
            name: "Лейтенант",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("2300"),
            _id: ObjectId("6079d765560106e37d92e6de"),
            name: "Старший Лейтенант",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("2500"),
            _id: ObjectId("6079d765560106e37d92e6df"),
            name: "Капитан",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("3000"),
            _id: ObjectId("6079d765560106e37d92e6e0"),
            name: "Майор",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("3500"),
            _id: ObjectId("6079d765560106e37d92e6e1"),
            name: "Подполковник",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("4000"),
            _id: ObjectId("6079d765560106e37d92e6e2"),
            name: "Полковник",
            permissions: {
                warehouse: false,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("5000"),
            _id: ObjectId("6079d765560106e37d92e6e3"),
            name: "Генерал-майор",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("6000"),
            _id: ObjectId("6079d765560106e37d92e6e4"),
            name: "Генерал-лейтенант",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true
            }
        },
        {
            salary: NumberInt("7000"),
            _id: ObjectId("6079d765560106e37d92e6e5"),
            name: "Генерал Армии",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                leader: true,
                members: true
            }
        }
    ],
    members: [ ],
    name: "sang"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("6074903232747d7853cf85ca"),
    money: 4,
    materials: 13676,
    inventory: [
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("3")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("4")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("5")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("10")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("156")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("166")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("163")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("162")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("157")
        },
        {
            name: "7.62mm",
            amount: NumberInt("60"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("160")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("117")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("118")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("119")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("111")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("112")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("113")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("102")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("105")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("2")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("11")
        },
        {
            name: "shoes",
            amount: NumberInt("1"),
            data: {
                style: NumberInt("1"),
                color: NumberInt("14")
            },
            cell: NumberInt("14")
        },
        {
            name: "armor_heavy",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("100"),
                color: NumberInt("0")
            },
            cell: NumberInt("155")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "armenian"
            },
            cell: NumberInt("150")
        }
    ],
    ranks: [
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d43"),
            name: "Спанах",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d44"),
            name: "Лав Тха",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d45"),
            name: "Хардах",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d46"),
            name: "Анцагорц",
            permissions: {
                warehouse: true,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d47"),
            name: "Джепкир",
            permissions: {
                warehouse: true,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d48"),
            name: "Ехпайр",
            permissions: {
                warehouse: true,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d49"),
            name: "Найох",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d4a"),
            name: "Гох",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d4b"),
            name: "Кероп",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d4c"),
            name: "Баир",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d4d"),
            name: "Кавор",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60a29ed2d4e763d1a6723d4e"),
            name: "Хегинакутун",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                leader: true,
                members: true
            }
        }
    ],
    members: [ ],
    name: "armenian"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("60e4bffc97d35b7f73fc4412"),
    money: 772650,
    materials: 6000,
    inventory: [ ],
    ranks: [
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b2b"),
            name: "Youngsta",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b2c"),
            name: "Beginner",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b2d"),
            name: "Checked Up",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b2e"),
            name: "Hustler",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b2f"),
            name: "Hoodlum",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b30"),
            name: "Black Flawless",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b31"),
            name: "Outlaw",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b32"),
            name: "Authority",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b33"),
            name: "Deputy Pac",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b34"),
            name: "Strawberry Pac",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true,
                leader: true
            }
        }
    ],
    members: [ ],
    name: "families"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("60e4c00597d35b7f73fc4413"),
    money: 776700,
    materials: 6000,
    inventory: [ ],
    ranks: [
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b35"),
            name: "New Blood",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b36"),
            name: "Young Gangster",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b37"),
            name: "Checked Up",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b38"),
            name: "Homie",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b39"),
            name: "Bastard",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b3a"),
            name: "Ghetto Soldier",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b3b"),
            name: "Destroyer",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b3c"),
            name: "Killa",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b3d"),
            name: "Playa",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b3e"),
            name: "East Side Pac",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true,
                leader: true
            }
        }
    ],
    members: [ ],
    name: "ballas"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("60e4c00e97d35b7f73fc4414"),
    money: 497700,
    materials: 6000,
    inventory: [ ],
    ranks: [
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b3f"),
            name: "Novato",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b40"),
            name: "Ordinario",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b41"),
            name: "Local",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b42"),
            name: "Buscando",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b43"),
            name: "Hermano",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b44"),
            name: "Soldado",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b45"),
            name: "El gangster viejo",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b46"),
            name: "Autoridad",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b47"),
            name: "Asesor",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b48"),
            name: "El Padre",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true,
                leader: true
            }
        }
    ],
    members: [ ],
    name: "vagos"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("60e4c02d97d35b7f73fc4415"),
    money: 653800,
    materials: 6000,
    inventory: [
        {
            name: "9mm",
            amount: NumberInt("100"),
            cell: NumberInt("175")
        },
        {
            name: "9mm",
            amount: NumberInt("100"),
            cell: NumberInt("174")
        }
    ],
    ranks: [
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b49"),
            name: "Forastero",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b4a"),
            name: "Jovenes",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b4b"),
            name: "Formado",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b4c"),
            name: "Bandido",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b4d"),
            name: "Verificado",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b4e"),
            name: "Matador",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b4f"),
            name: "Elegante",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b50"),
            name: "Suplente",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b51"),
            name: "Adjunto",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b52"),
            name: "Padre",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true,
                leader: true
            }
        }
    ],
    members: [ ],
    name: "marabunta"
} ]);
db.getCollection("factions").insert([ {
    _id: ObjectId("60e4c050b524c45692910ddd"),
    money: 178200,
    materials: 750,
    inventory: [
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("9")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("10")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("11")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("3")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("4")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("5")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("6")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("7")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("8")
        },
        {
            name: "9mm",
            amount: NumberInt("100"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("0")
        },
        {
            name: "12gauge",
            amount: NumberInt("10"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("1")
        },
        {
            name: "9mm",
            amount: NumberInt("200"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("2")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("12")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("13")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("14")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("15")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("16")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("17")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("18")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("20")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("21")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("22")
        },
        {
            name: "microsmg",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("23")
        },
        {
            name: "microsmg",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("24")
        },
        {
            name: "microsmg",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("25")
        },
        {
            name: "dbshotgun",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("29")
        },
        {
            name: "microsmg",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("26")
        },
        {
            name: "microsmg",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("27")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("28")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("30")
        },
        {
            name: "revolver",
            amount: NumberInt("1"),
            data: {
                faction: "bloods"
            },
            cell: NumberInt("31")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("32")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("33")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("34")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("35")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("36")
        },
        {
            name: "armor_light",
            amount: NumberInt("1"),
            data: {
                health: NumberInt("50"),
                color: NumberInt("0")
            },
            cell: NumberInt("37")
        }
    ],
    ranks: [
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b53"),
            name: "Settler",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: false,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b54"),
            name: "Young Gangster",
            permissions: {
                warehouse: false,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b55"),
            name: "Gangster",
            permissions: {
                warehouse: true,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b56"),
            name: "Thug Gangsta",
            permissions: {
                warehouse: true,
                inventory: false,
                garage: true,
                workshop: false,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b57"),
            name: "Ghetto Soldier",
            permissions: {
                warehouse: true,
                inventory: false,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b58"),
            name: "Cutthroat",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b59"),
            name: "Loc Killa",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: false
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b5a"),
            name: "Blood Mentor",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b5b"),
            name: "Advisor",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true
            }
        },
        {
            salary: NumberInt("0"),
            _id: ObjectId("60e4c365f72d16228ff64b5c"),
            name: "East Side Pac",
            permissions: {
                warehouse: true,
                inventory: true,
                garage: true,
                workshop: true,
                members: true,
                leader: true
            }
        }
    ],
    members: [
        {
            userId: ObjectId("63604f236f71591545e15eb6"),
            rank: ObjectId("60e4c365f72d16228ff64b5c")
        }
    ],
    name: "bloods"
} ]);

// ----------------------------
// Collection structure for gangzones
// ----------------------------
db.getCollection("gangzones").drop();
db.createCollection("gangzones");

// ----------------------------
// Documents of gangzones
// ----------------------------
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5eb"),
    position: {
        x: -200.8397,
        y: -1431.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.774Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5ec"),
    position: {
        x: -100.8397,
        y: -1431.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5ed"),
    position: {
        x: -0.8397,
        y: -1431.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5ee"),
    position: {
        x: 99.1603,
        y: -1431.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5ef"),
    position: {
        x: -200.8397,
        y: -1531.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f0"),
    position: {
        x: -100.8397,
        y: -1531.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f1"),
    position: {
        x: -0.8397,
        y: -1531.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f2"),
    position: {
        x: 99.1603,
        y: -1531.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f3"),
    position: {
        x: 199.1603,
        y: -1531.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f4"),
    position: {
        x: 299.1603,
        y: -1531.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-12T15:42:33.931Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f5"),
    position: {
        x: 399.1603,
        y: -1531.556,
        z: 30.18104
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.775Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f6"),
    position: {
        x: 499.1603,
        y: -1531.556,
        z: 30.18104
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f7"),
    position: {
        x: -200.8397,
        y: -1631.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f8"),
    position: {
        x: -100.8397,
        y: -1631.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5f9"),
    position: {
        x: -0.8397,
        y: -1631.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5fa"),
    position: {
        x: 99.1603,
        y: -1631.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5fb"),
    position: {
        x: 199.1603,
        y: -1631.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5fc"),
    position: {
        x: 299.1603,
        y: -1631.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-12T15:42:16.207Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5fd"),
    position: {
        x: 399.1603,
        y: -1631.556,
        z: 30.18104
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5fe"),
    position: {
        x: 599.1603,
        y: -1631.556,
        z: 30.18104
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de5ff"),
    position: {
        x: -100.8397,
        y: -1731.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de600"),
    position: {
        x: -0.8397,
        y: -1731.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-12T15:43:26.103Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de601"),
    position: {
        x: 99.1603,
        y: -1731.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-12T15:43:07.93Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de602"),
    position: {
        x: 199.1603,
        y: -1731.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-12T15:42:53.986Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de603"),
    position: {
        x: 299.1603,
        y: -1731.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de604"),
    position: {
        x: 399.1603,
        y: -1731.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de605"),
    position: {
        x: 499.1603,
        y: -1731.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de606"),
    position: {
        x: 599.1603,
        y: -1731.556,
        z: 30.18104
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de607"),
    position: {
        x: -0.8397,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de608"),
    position: {
        x: 99.1603,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de609"),
    position: {
        x: 199.1603,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de60a"),
    position: {
        x: 299.1603,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de60b"),
    position: {
        x: 399.1603,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de60c"),
    position: {
        x: 499.1603,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de60d"),
    position: {
        x: 599.1603,
        y: -1831.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de60e"),
    position: {
        x: 99.1603,
        y: -1931.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de60f"),
    position: {
        x: 199.1603,
        y: -1931.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de610"),
    position: {
        x: 299.1603,
        y: -1931.556,
        z: 30.18104
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-12T15:44:00.642Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de611"),
    position: {
        x: 399.1603,
        y: -1931.556,
        z: 30.18104
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-12T15:44:15.959Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de612"),
    position: {
        x: 499.1603,
        y: -1931.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de613"),
    position: {
        x: 599.1603,
        y: -1931.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de614"),
    position: {
        x: 199.1603,
        y: -2031.556,
        z: 30.18104
    },
    owner: "ballas",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de615"),
    position: {
        x: 299.1603,
        y: -2031.556,
        z: 30.18104
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-12T15:43:43.171Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de616"),
    position: {
        x: 399.1603,
        y: -2031.556,
        z: 30.18104
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de617"),
    position: {
        x: 499.1603,
        y: -2031.556,
        z: 30.18104
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de619"),
    position: {
        x: 399.1603,
        y: -2131.556,
        z: 30.18104
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.777Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de61a"),
    position: {
        x: 768.8984,
        y: -2401.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de61b"),
    position: {
        x: 868.8984,
        y: -2401.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de61c"),
    position: {
        x: 968.8984,
        y: -2401.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de61d"),
    position: {
        x: 1068.898,
        y: -2401.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de61e"),
    position: {
        x: 768.8984,
        y: -2301.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de61f"),
    position: {
        x: 868.8984,
        y: -2301.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de620"),
    position: {
        x: 968.8984,
        y: -2301.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de621"),
    position: {
        x: 1068.898,
        y: -2301.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de622"),
    position: {
        x: 768.8984,
        y: -2201.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de623"),
    position: {
        x: 868.8984,
        y: -2201.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de624"),
    position: {
        x: 968.8984,
        y: -2201.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de625"),
    position: {
        x: 1068.898,
        y: -2201.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de626"),
    position: {
        x: 768.8984,
        y: -2101.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de627"),
    position: {
        x: 868.8984,
        y: -2101.556,
        z: 28.17772
    },
    owner: "vagos",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de628"),
    position: {
        x: 968.8984,
        y: -2101.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de629"),
    position: {
        x: 1068.898,
        y: -2101.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de62a"),
    position: {
        x: 768.8984,
        y: -2001.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-12T15:46:10.51Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de62b"),
    position: {
        x: 868.8984,
        y: -2001.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-12T15:46:23.41Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de62c"),
    position: {
        x: 968.8984,
        y: -2001.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de62d"),
    position: {
        x: 1068.898,
        y: -2001.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de62e"),
    position: {
        x: 768.8984,
        y: -1901.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de62f"),
    position: {
        x: 868.8984,
        y: -1901.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de630"),
    position: {
        x: 968.8984,
        y: -1901.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de631"),
    position: {
        x: 1068.898,
        y: -1901.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de632"),
    position: {
        x: 768.8984,
        y: -1801.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de633"),
    position: {
        x: 868.8984,
        y: -1801.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de634"),
    position: {
        x: 1168.898,
        y: -1801.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de635"),
    position: {
        x: 1268.898,
        y: -1801.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de636"),
    position: {
        x: 768.8984,
        y: -1701.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de637"),
    position: {
        x: 868.8984,
        y: -1701.556,
        z: 28.17772
    },
    owner: "bloods",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de638"),
    position: {
        x: 1168.898,
        y: -1701.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de639"),
    position: {
        x: 1268.898,
        y: -1701.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de63a"),
    position: {
        x: 1368.898,
        y: -1701.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de63b"),
    position: {
        x: 1168.898,
        y: -1601.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de63c"),
    position: {
        x: 1268.898,
        y: -1601.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de63d"),
    position: {
        x: 1368.898,
        y: -1601.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de63e"),
    position: {
        x: 1268.898,
        y: -1501.556,
        z: 28.17772
    },
    owner: "ems",
    capturedAt: ISODate("2022-04-13T23:05:03.749Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de63f"),
    position: {
        x: 1368.898,
        y: -1501.556,
        z: 28.17772
    },
    owner: "marabunta",
    capturedAt: ISODate("2021-07-06T20:54:10.78Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de640"),
    owner: "bloods",
    position: {
        x: 499.1603,
        y: -1631.556,
        z: 30.18104
    },
    capturedAt: ISODate("2021-07-06T20:54:10.78Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de641"),
    owner: "bloods",
    position: {
        x: 499.1603,
        y: -1431.556,
        z: 30.18104
    },
    capturedAt: ISODate("2021-07-06T20:54:10.78Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de642"),
    owner: "bloods",
    position: {
        x: 399.1603,
        y: -1431.556,
        z: 30.18104
    },
    capturedAt: ISODate("2021-07-06T20:54:10.78Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de643"),
    owner: "bloods",
    position: {
        x: 399.1603,
        y: -1331.556,
        z: 30.18104
    },
    capturedAt: ISODate("2021-07-06T20:54:10.78Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60e4c2f238f5cb21819de644"),
    owner: "bloods",
    position: {
        x: 499.1603,
        y: -1331.556,
        z: 30.18104
    },
    capturedAt: ISODate("2022-04-28T13:47:52.808Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("gangzones").insert([ {
    _id: ObjectId("60ec6eb9b581bd6427180829"),
    position: {
        x: -200.8397,
        y: -1731.556,
        z: 30.18104
    },
    owner: "families",
    capturedAt: ISODate("2021-07-06T20:54:10.776Z")
} ]);

// ----------------------------
// Collection structure for houses
// ----------------------------
db.getCollection("houses").drop();
db.createCollection("houses");

// ----------------------------
// Documents of houses
// ----------------------------
db.getCollection("houses").insert([ {
    _id: ObjectId("601c6086f22df3670f86180e"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: 922.013916015625,
        y: -478.515472412109,
        z: 61.0817070007324
    },
    __v: NumberInt("0"),
    owner: null
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63605d79aa23a7164d92b981"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: 946.258056640625,
        y: -518.714050292969,
        z: 60.6254997253418
    },
    __v: NumberInt("0"),
    owner: null
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("6360fb31e39d854d1ba687f4"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1549.49230957031,
        y: -90.3814392089844,
        z: 54.9291763305664
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611805780e1c50af942570"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1337.53125,
        y: 606.107299804688,
        z: 134.379898071289
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("6361181f780e1c50af942572"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: -1366.91638183594,
        y: 610.897888183594,
        z: 133.90055847168
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611842780e1c50af942574"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1364.24182128906,
        y: 569.755432128906,
        z: 134.972839355469
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611866780e1c50af94257e"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1346.82275390625,
        y: 560.713745117188,
        z: 130.531585693359
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("6361188a780e1c50af942580"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1405.01599121094,
        y: 561.241882324219,
        z: 125.406181335449
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("636118aa780e1c50af942582"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: -1405.56237792969,
        y: 526.882751464844,
        z: 123.831260681152
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("636118ca780e1c50af942585"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1452.37951660156,
        y: 545.362976074219,
        z: 120.79948425293
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("6361190f780e1c50af942587"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1453.98852539063,
        y: 512.831665039063,
        z: 117.627723693848
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("6361192c780e1c50af942589"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1500.3134765625,
        y: 522.5087890625,
        z: 118.272125244141
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611959780e1c50af94258c"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: -1495.93127441406,
        y: 437.435424804688,
        z: 112.497619628906
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("6361197b780e1c50af94258e"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: -1539.69311523438,
        y: 421.014801025391,
        z: 110.003860473633
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611a36780e1c50af9425a5"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1386.24389648438,
        y: -593.454284667969,
        z: 74.4854736328125
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611a60780e1c50af9425a9"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1367.36608886719,
        y: -606.593200683594,
        z: 74.7108993530273
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611a80780e1c50af9425ab"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1389.02612304688,
        y: -569.628723144531,
        z: 74.4965362548828
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611a93780e1c50af9425ad"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: 1373.04931640625,
        y: -555.773620605469,
        z: 74.6856689453125
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611aad780e1c50af9425b7"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: 1341.63171386719,
        y: -597.341186523438,
        z: 74.7008209228516
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611ad2780e1c50af9425b9"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1348.16650390625,
        y: -547.310180664063,
        z: 73.8916473388672
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611af1780e1c50af9425bb"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1323.5390625,
        y: -582.900024414063,
        z: 73.2463760375977
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611b0f780e1c50af9425bd"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "average",
    position: {
        x: 1328.60791015625,
        y: -535.927856445313,
        z: 72.4408340454102
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611b27780e1c50af9425c0"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1301.0361328125,
        y: -574.229797363281,
        z: 71.7322540283203
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("63611b3e780e1c50af9425c2"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "premium",
    position: {
        x: 1303.06872558594,
        y: -527.592529296875,
        z: 71.4606781005859
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("636143310b75d3566f99ca92"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [ ],
    type: "low",
    position: {
        x: 29.6710472106934,
        y: -1854.560546875,
        z: 24.0688343048096
    },
    __v: NumberInt("0")
} ]);
db.getCollection("houses").insert([ {
    _id: ObjectId("636171b97e0c6c5a69c739b4"),
    locked: false,
    paid: NumberInt("1"),
    inventory: [
        {
            name: "12gauge",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("0")
        },
        {
            name: "carbinerifle",
            amount: NumberInt("1"),
            data: {
                faction: "sang"
            },
            cell: NumberInt("1")
        }
    ],
    type: "premium",
    position: {
        x: -819.466247558594,
        y: 696.693969726563,
        z: 148.109680175781
    },
    __v: NumberInt("0"),
    owner: ObjectId("63613e7635608555c2bc299e")
} ]);

// ----------------------------
// Collection structure for jobs
// ----------------------------
db.getCollection("jobs").drop();
db.createCollection("jobs");

// ----------------------------
// Documents of jobs
// ----------------------------
db.getCollection("jobs").insert([ {
    _id: ObjectId("5f9449b81b64542a584a2a0d"),
    name: "Building",
    checkpoints: {
        Mover: [
            {
                x: -442.898,
                y: -952.409,
                z: 38.684
            },
            {
                x: -460.33,
                y: -944.729,
                z: 38.688
            },
            {
                x: -468.102,
                y: -931.647,
                z: 38.684
            },
            {
                x: -454.062,
                y: -937.748,
                z: 29.393
            },
            {
                x: -444.691,
                y: -887.825,
                z: 29.393
            }
        ],
        Welder: [
            {
                x: -464.334,
                y: -880.176,
                z: 38.684
            },
            {
                x: -457.776,
                y: -883.596,
                z: 38.684
            },
            {
                x: -457.164,
                y: -887.797,
                z: 38.688
            },
            {
                x: -457.215,
                y: -897.313,
                z: 38.688
            },
            {
                x: -447.981,
                y: -879.446,
                z: 38.684
            },
            {
                x: -454.639,
                y: -934.741,
                z: 38.684
            },
            {
                x: -464.766,
                y: -956.973,
                z: 38.684
            },
            {
                x: -453.914,
                y: -934.775,
                z: 47.979
            },
            {
                x: -458.465,
                y: -953.546,
                z: 47.979
            },
            {
                x: -487.477,
                y: -986.847,
                z: 52.476
            },
            {
                x: -500.902,
                y: -986.826,
                z: 52.476
            }
        ],
        Driver: [
            {
                x: -511.102,
                y: -1001.254,
                z: 23.548
            },
            {
                x: 70.489,
                y: -382.186,
                z: 39.921
            },
            {
                x: 4.595,
                y: -426.572,
                z: 39.589
            },
            {
                x: 53.377,
                y: 6508.854,
                z: 31.429
            }
        ]
    },
    __v: NumberInt("0")
} ]);
db.getCollection("jobs").insert([ {
    _id: ObjectId("5f985231c6eb100cf8ebdfb3"),
    name: "Waterfront",
    checkpoints: {
        Mover: [
            {
                x: 1270.805,
                y: -3245.667,
                z: 5.902
            },
            {
                x: 1270.762,
                y: -3258.6,
                z: 5.902
            },
            {
                x: 1152.022,
                y: -3249.96,
                z: 5.901
            },
            {
                x: 1135.78,
                y: -3231.512,
                z: 5.898
            },
            {
                x: 1116.774,
                y: -3231.157,
                z: 5.896
            }
        ],
        Forklift: [
            {
                x: 1003.0579,
                y: -3280.109,
                z: 5.3501
            },
            {
                x: 930.694,
                y: -3276.931,
                z: 5.349
            },
            {
                x: 1112.282,
                y: -3263.344,
                z: 5.349
            },
            {
                x: 1081.053,
                y: -3280.349,
                z: 5.348
            },
            {
                x: 1177.349,
                y: -3315.186,
                z: 5.482
            }
        ],
        Handler: [
            {
                x: 1142.168,
                y: -3016.667,
                z: 5.901
            },
            {
                x: 1156.209,
                y: -2999.38,
                z: 5.901
            },
            {
                x: 1156.158,
                y: -3052.134,
                z: 5.902
            },
            {
                x: 1055.196,
                y: -3070.121,
                z: 5.901
            },
            {
                x: 1000.08,
                y: -3051.856,
                z: 5.901
            },
            {
                x: 945.172,
                y: -2998.439,
                z: 5.901
            },
            {
                x: 903.806,
                y: -3016.791,
                z: 5.902
            },
            {
                x: 822.621,
                y: -3070.857,
                z: 5.901
            },
            {
                x: 1055.844,
                y: -3048.307,
                z: 5.901
            },
            {
                x: 1182.065,
                y: -3000.539,
                z: 5.902
            }
        ]
    },
    __v: NumberInt("0")
} ]);
db.getCollection("jobs").insert([ {
    _id: ObjectId("5f9b26094c7ef03c5cee6174"),
    name: "Postal",
    checkpoints: {
        Courier: [
            {
                x: -604.226,
                y: -782.223,
                z: 25.017
            },
            {
                x: -580.582,
                y: -778.674,
                z: 25.022
            },
            {
                x: -741.943,
                y: -980.823,
                z: 17.052
            },
            {
                x: -805.494,
                y: -959.438,
                z: 18.208
            },
            {
                x: -1010.8,
                y: -1224.803,
                z: 5.813
            },
            {
                x: -1002.047,
                y: -1219.183,
                z: 5.755
            },
            {
                x: -1236.936,
                y: -1247.262,
                z: 7.031
            },
            {
                x: -1224.583,
                y: -1208.75,
                z: 8.257
            },
            {
                x: -1329.425,
                y: -938.171,
                z: 12.356
            },
            {
                x: -1316.238,
                y: -903.531,
                z: 11.313
            },
            {
                x: -29.807,
                y: -347.219,
                z: 46.117
            }
        ],
        Driver: [
            {
                x: 1302.63,
                y: -528.906,
                z: 71.452
            },
            {
                x: 1384.863,
                y: -592.359,
                z: 74.484
            },
            {
                x: 1265.985,
                y: -703.69,
                z: 64.55
            },
            {
                x: 1000.597,
                y: -594.261,
                z: 59.232
            },
            {
                x: -1058.32,
                y: -1539.766,
                z: 5.048
            },
            {
                x: -1086.44,
                y: -1530.585,
                z: 4.698
            },
            {
                x: -1113.21,
                y: -1577.618,
                z: 8.68
            },
            {
                x: -1220.639,
                y: -1241.838,
                z: 7.018
            },
            {
                x: -1104.541,
                y: -1059.059,
                z: 2.151
            },
            {
                x: -991.434,
                y: -1104.2,
                z: 2.15
            },
            {
                x: -977.35,
                y: -1091.799,
                z: 4.223
            },
            {
                x: -951.937,
                y: -1078.449,
                z: 2.15
            }
        ],
        Warehouse: [
            {
                x: 1735.309,
                y: -1614.266,
                z: 112.445
            },
            {
                x: 1180.619,
                y: -3310.306,
                z: 6.029
            },
            {
                x: -100.911,
                y: -2639.536,
                z: 6.045
            }
        ]
    },
    __v: NumberInt("0")
} ]);
db.getCollection("jobs").insert([ {
    _id: ObjectId("5fa6d7cca1c7e40ac7eda039"),
    name: "Car_Theft",
    checkpoints: {
        Cheap: [
            {
                x: 1540.768,
                y: 6336.02,
                z: 24.075
            },
            {
                x: 1263.526,
                y: -2564.208,
                z: 42.682
            },
            {
                x: 1977.913,
                y: 5171.548,
                z: 47.639
            }
        ],
        Middle: [
            {
                x: 1540.768,
                y: 6336.02,
                z: 24.075
            },
            {
                x: 1263.526,
                y: -2564.208,
                z: 42.682
            },
            {
                x: 1977.913,
                y: 5171.548,
                z: 47.639
            }
        ],
        Premium: [
            {
                x: 1540.768,
                y: 6336.02,
                z: 24.075
            },
            {
                x: 1263.526,
                y: -2564.208,
                z: 42.682
            },
            {
                x: 1977.913,
                y: 5171.548,
                z: 47.639
            }
        ]
    },
    __v: NumberInt("0")
} ]);
db.getCollection("jobs").insert([ {
    _id: ObjectId("60d50b6108a6c344bcbc4f67"),
    name: "Smuggling",
    checkpoints: {
        Courier: [
            {
                x: 620.063,
                y: 2800.206,
                z: 41.934
            },
            {
                x: 1320.751,
                y: 4314.671,
                z: 38.145
            },
            {
                x: 2427.228,
                y: 4971.384,
                z: 45.824
            },
            {
                x: 494.589,
                y: -570.996,
                z: 24.569
            },
            {
                x: 183.726,
                y: -1513.345,
                z: 29.142
            },
            {
                x: -1106.239,
                y: -1698.558,
                z: 4.564
            },
            {
                x: -3164.265,
                y: 1046.111,
                z: 20.854
            },
            {
                x: -38.165,
                y: 1908.296,
                z: 195.355
            }
        ]
    }
} ]);

// ----------------------------
// Collection structure for moneylogs
// ----------------------------
db.getCollection("moneylogs").drop();
db.createCollection("moneylogs");

// ----------------------------
// Collection structure for promos
// ----------------------------
db.getCollection("promos").drop();
db.createCollection("promos");

// ----------------------------
// Collection structure for reports
// ----------------------------
db.getCollection("reports").drop();
db.createCollection("reports");

// ----------------------------
// Collection structure for services
// ----------------------------
db.getCollection("services").drop();
db.createCollection("services");

// ----------------------------
// Documents of services
// ----------------------------
db.getCollection("services").insert([ {
    _id: ObjectId("5f22b508231b700ad13e3c52"),
    name: "gas",
    __v: NumberInt("1"),
    positions: [
        {
            x: -1798.696,
            y: 799.178,
            z: 138.519
        },
        {
            x: -66.213,
            y: -1767.642,
            z: 29.144
        },
        {
            x: -726.22,
            y: -939.445,
            z: 19.017
        },
        {
            x: 47.597,
            y: 2777.897,
            z: 57.884
        },
        {
            x: 262.637,
            y: 2608.623,
            z: 44.895
        },
        {
            x: 1208.867,
            y: -1399.51,
            z: 35.224
        },
        {
            x: 817.079,
            y: -1031.25,
            z: 26.301
        },
        {
            x: 1185.479,
            y: -332.08,
            z: 69.174
        },
        {
            x: -1430.763,
            y: -280.615,
            z: 46.208
        },
        {
            x: -528.729,
            y: -1211.457,
            z: 18.185
        },
        {
            x: 2576.207,
            y: 365.36,
            z: 108.457
        },
        {
            x: 2007.457,
            y: 3772.869,
            z: 32.181
        },
        {
            x: 618.794,
            y: 263.807,
            z: 103.089
        },
        {
            x: -98.75,
            y: 6418.319,
            z: 31.49
        },
        {
            x: -2099.279,
            y: -320.508,
            z: 13.026
        },
        {
            x: 176.99,
            y: 6603.606,
            z: 31.849
        },
        {
            x: 1700.704,
            y: 6414.314,
            z: 32.727
        },
        {
            x: -2558.815,
            y: 2336.882,
            z: 33.06
        },
        {
            x: 1207.451,
            y: 2663.695,
            z: 37.81
        },
        {
            x: 1786.517,
            y: 3332.609,
            z: 41.212
        },
        {
            x: -320.384,
            y: -1466.218,
            z: 30.546
        },
        {
            x: 2682.63,
            y: 3265.633,
            z: 55.241
        },
        {
            x: 173.164,
            y: -1566.842,
            z: 29.288
        },
        {
            x: 262.833,
            y: -1261.589,
            z: 29.143
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f24518a2d04d127dd882c19"),
    name: "supermarket",
    __v: NumberInt("1"),
    positions: [
        {
            x: -706.139,
            y: -914.512,
            z: 19.216
        },
        {
            x: 1959.209,
            y: 3741.392,
            z: 32.343
        },
        {
            x: 1728.645,
            y: 6416.73,
            z: 35.037
        },
        {
            x: -3243.97,
            y: 1000.162,
            z: 12.83
        },
        {
            x: -1221.398,
            y: -907.974,
            z: 12.326
        },
        {
            x: 549.373,
            y: 2669.619,
            z: 42.156
        },
        {
            x: 2676.482,
            y: 3280.2,
            z: 55.241
        },
        {
            x: -47.308,
            y: -1758.605,
            z: 29.421
        },
        {
            x: 1697.356,
            y: 4923.339,
            z: 42.064
        },
        {
            x: 2555.507,
            y: 380.914,
            z: 108.623
        },
        {
            x: 1165.305,
            y: 2710.862,
            z: 38.158
        },
        {
            x: -1819.536,
            y: 793.64,
            z: 138.082
        },
        {
            x: 1134.246,
            y: -983.167,
            z: 46.416
        },
        {
            x: 24.447,
            y: -1345.579,
            z: 29.497
        },
        {
            x: -1487.284,
            y: -379.174,
            z: 40.163
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f281122be30342ee75186b5"),
    name: "licenses",
    __v: NumberInt("1"),
    positions: [
        {
            x: 242.117,
            y: 226.861,
            z: 106.287
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f2b0ef9eb030a05637082e7"),
    name: "premium_carshop",
    __v: NumberInt("1"),
    positions: [
        {
            x: -31.551,
            y: -1113.841,
            z: 26.422
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f2b1b8561f9720baf5033db"),
    name: "mid_carshop",
    __v: NumberInt("1"),
    positions: [
        {
            x: -176.316,
            y: -1158.395,
            z: 23.814
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f305a5f0d674d02c0b8b80c"),
    name: "weapons",
    __v: NumberInt("1"),
    positions: [
        {
            x: -331.923,
            y: 6084.748,
            z: 31.455
        },
        {
            x: -662.477,
            y: -933.554,
            z: 21.829
        },
        {
            x: -1119.037,
            y: 2699.667,
            z: 18.554
        },
        {
            x: 22.539,
            y: -1105.513,
            z: 29.797
        },
        {
            x: -1304.126,
            y: -394.842,
            z: 36.696
        },
        {
            x: 253.946,
            y: -50.344,
            z: 69.941
        },
        {
            x: -3173.691,
            y: 1088.16,
            z: 20.839
        },
        {
            x: 2567.903,
            y: 292.547,
            z: 108.735
        },
        {
            x: 1692.136,
            y: 3760.908,
            z: 34.705
        },
        {
            x: 842.554,
            y: -1035.344,
            z: 28.195
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f47d9fe3a57150648e86c46"),
    name: "clothing_shop",
    __v: NumberInt("1"),
    positions: [
        {
            x: 9.067,
            y: 6518.122,
            z: 31.879
        },
        {
            x: -1105.79,
            y: 2704.935,
            z: 19.108
        },
        {
            x: 619.164,
            y: 2765.896,
            z: 42.088
        },
        {
            x: -706.517,
            y: -160.098,
            z: 37.415
        },
        {
            x: 120.193,
            y: -224.246,
            z: 54.558
        },
        {
            x: -827.408,
            y: -1078.186,
            z: 11.34
        },
        {
            x: 1691.375,
            y: 4829.583,
            z: 42.068
        },
        {
            x: 1190.079,
            y: 2708.617,
            z: 38.234
        },
        {
            x: -160.193,
            y: -295.657,
            z: 39.733
        },
        {
            x: -1456.097,
            y: -243.229,
            z: 49.81
        },
        {
            x: -1188.033,
            y: -771.073,
            z: 17.329
        },
        {
            x: -3176.336,
            y: 1043.558,
            z: 20.863
        },
        {
            x: 424.148,
            y: -800.214,
            z: 29.503
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5f6b8e6cd251bd6c5178ff1a"),
    name: "lscustoms",
    __v: NumberInt("1"),
    positions: [
        {
            x: -337.82,
            y: -136.53,
            z: 38.21
        },
        {
            x: -1155.36,
            y: -2006.26,
            z: 12.38
        },
        {
            x: 732.697,
            y: -1088.273,
            z: 21.787
        },
        {
            x: 1174.899,
            y: 2640.829,
            z: 37.378
        },
        {
            x: 111.081,
            y: 6626.288,
            z: 31.405
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5fa5e78d417b3767cda7d0e1"),
    name: "passport",
    __v: NumberInt("1"),
    positions: [
        {
            x: -563.716,
            y: -205.892,
            z: 38.145
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5fac21050ecfcde2a4d191d6"),
    name: "tattoo_shop",
    __v: NumberInt("1"),
    positions: [
        {
            x: 325.013,
            y: 180.723,
            z: 103.586
        },
        {
            x: -292.923,
            y: 6201.156,
            z: 31.487
        },
        {
            x: -3169.348,
            y: 1077.287,
            z: 20.829
        },
        {
            x: 1321.949,
            y: -1652.945,
            z: 52.275
        },
        {
            x: -1155.126,
            y: -1426.694,
            z: 4.954
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5fb2d613f957256f9e6fc67e"),
    name: "barbershop",
    __v: NumberInt("1"),
    positions: [
        {
            x: 138.155,
            y: -1707.401,
            z: 29.291
        },
        {
            x: -277.668,
            y: 6226.557,
            z: 31.696
        },
        {
            x: 1931.679,
            y: 3731.839,
            z: 32.844
        },
        {
            x: -34.132,
            y: -153.904,
            z: 57.076
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("5fb2d6a0f957256f9e6fc67f"),
    name: "surgeon",
    __v: NumberInt("1"),
    positions: [
        {
            x: 340.506,
            y: -1395.348,
            z: 32.509
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("600473fe9cccd197cff57d46"),
    name: "bank",
    __v: NumberInt("1"),
    positions: [
        {
            x: 149.417,
            y: -1042.156,
            z: 29.368
        },
        {
            x: -1211.891,
            y: -332.012,
            z: 37.781
        },
        {
            x: -2961.075,
            y: 482.812,
            z: 15.697
        },
        {
            x: -112.189,
            y: 6471.124,
            z: 31.627
        },
        {
            x: 1174.951,
            y: 2708.299,
            z: 38.088
        },
        {
            x: 313.695,
            y: -280.496,
            z: 54.165
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("601dbdf00bbb88ad00fb52ec"),
    name: "cheap_carshop",
    __v: NumberInt("1"),
    positions: [
        {
            x: -42.287,
            y: -1673.771,
            z: 29.492
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("601dbf650bbb88ad00fb52ed"),
    name: "bikeshop",
    __v: NumberInt("1"),
    positions: [
        {
            x: 976.141,
            y: -129.313,
            z: 74.106
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("6022f90bb2667aba7767d782"),
    name: "scooter_rent",
    positions: [
        {
            x: -1009.886,
            y: -2692.523,
            z: 13.987
        },
        {
            x: -476.442,
            y: -222.111,
            z: 36.482
        },
        {
            x: -558.76,
            y: -923.509,
            z: 23.877
        },
        {
            x: 819.106,
            y: -3017.118,
            z: 6.02
        },
        {
            x: 2008.305,
            y: 3791.016,
            z: 32.181
        },
        {
            x: 2744.751,
            y: 4411.146,
            z: 48.306
        },
        {
            x: 1681.805,
            y: 6432.014,
            z: 32.119
        },
        {
            x: -133.046,
            y: 6346.702,
            z: 31.491
        },
        {
            x: 289.762,
            y: -618.697,
            z: 43.501
        },
        {
            x: 1873.199,
            y: 2573.013,
            z: 45.672
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("6025c47cbbe9460986ab3a70"),
    name: "vehicle_dump",
    positions: [
        {
            x: -423.505,
            y: -1681.712,
            z: 19.029
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("62572bbe93aa71d8552b9321"),
    name: "boat_rent",
    positions: [
        {
            x: 1296.496,
            y: 4216.003,
            z: 33.909
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("62572c1693aa71d8552b9322"),
    name: "fish_sale",
    positions: [
        {
            x: -2193.621,
            y: 4290.101,
            z: 49.174
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("62572eb393aa71d8552b9323"),
    name: "boatshop",
    positions: [
        {
            x: -750.41,
            y: -1510.708,
            z: 5.003
        }
    ]
} ]);
db.getCollection("services").insert([ {
    _id: ObjectId("62572f0c93aa71d8552b9324"),
    name: "airshop",
    positions: [
        {
            x: -1084.116,
            y: -2859.828,
            z: 13.951
        }
    ]
} ]);

// ----------------------------
// Collection structure for tokens
// ----------------------------
db.getCollection("tokens").drop();
db.createCollection("tokens");
db.getCollection("tokens").createIndex({
    token: NumberInt("1")
}, {
    name: "token_1",
    background: true,
    unique: true
});

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Collection structure for vehicles
// ----------------------------
db.getCollection("vehicles").drop();
db.createCollection("vehicles");
db.getCollection("vehicles").createIndex({
    govNumber: NumberInt("1")
}, {
    name: "govNumber_1",
    background: true,
    unique: true
});
