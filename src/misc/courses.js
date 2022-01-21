const courses = [
    {
        "code": "MBBM-P-BUP1-17",
        "name": "Businessplan Principles 1",
        "period": "A, B, C",
        "active": true,
        "ec_course": 5,
        "tests": [
            {
                "name": "TOETS1 - MC tentamen Principles",
                "weight": 100,
                "ec_test": 5
            }
        ],
        "replacement": [
            {
                "code": "MBBU-P-MAVE-18",
                "name": "Marktverkenning",
                "ec_course": 5,
                "tests": [
                    {
                        "name": "TOETS1 - MC tentamen ",
                        "weight": 100,
                        "ec_test": 5
                    },
                    {
                        "name": "TOETS2 - MC tentamen ",
                        "weight": 100,
                        "ec_test": 5
                    }
                ]
            }
        ]
    },
    {
        "code": "MBBM-P-PP-17",
        "name": "Persoonlijke professionalisering",
        "period": "A,B,C",
        "active": true,
        "ec_course": 5,
        "tests": [
            {
                "name": "TOETS1 - Tentamen Communicatieve Vaardigheden",
                "weight": 50,
                "ec_test": 2.5
            },
            {
                "name": "TOETS2 - Assessment Professionalisering",
                "weight": 50,
                "ec_test": 2.5
            }
        ],
        "replacement": [
            {
                "code": "MBBU-P-PRVA-20",
                "name": "Professionele vaardigheden A",
                "ec_course": 5,
                "tests": [
                    {
                        "name": "TOETS1 - Tentamen Spelling & Grammatica",
                        "weight": 50,
                        "ec_test": 2.5
                    }
                ]
            },
            {
                "code": "MBBU-P-PRVB-18",
                "name": "Professionele vaardigheden B",
                "ec_course": 5,
                "tests": [
                    {
                        "name": "TOETS2 - verslag / dossier Loopbaanleren",
                        "weight": 50,
                        "ec_test": 2.5
                    }
                ]
            }
        ]
    },
    {
        "code": "MBBM-P-BUP2-17",
        "name": "Businessplan Principles 2",
        "period": "B,C,D",
        "active": true,
        "ec_course": 5,
        "tests": [
            {
                "name": "TOETS1 - MC tentamen Principles 2",
                "weight": 100,
                "ec_test": 5
            }
        ],
        "replacement": [
            {
                "code": "MBBU-P-ORIN-18",
                "name": "Organisatieinrichting",
                "ec_course": 5,
                "tests": [
                    {
                        "name": "TOETS1 - MC tentamen ",
                        "weight": 100,
                        "ec_test": 5
                    }
                ]
            }
        ]
    }
];

export { courses };





