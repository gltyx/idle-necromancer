var Resize, myStorage = localStorage,
    TimeInter = {},
    CL = [],
    CLDead = [],
    AutoPS = [],
    SaveInfo = null,
    MD = {
        Touch: !1,
        CoilNum: 0,
        CoilCard: !1,
        Blood: null,
        AppVersion: "1.0.1",
        Mobile: 0,
        MobileWork: !1,
        VX: [50, 20],
        VY: [25, 10],
        LXY: [0, 0],
        RestartCounter: 0,
        RestartCounter2: 0,
        RestartCounter_2: 0,
        RestartCounter2_2: 0,
        FullHarvest: !1,
        AutoPlay: !1,
        AutoC: 0,
        AutoCard: 0,
        RundC: 0,
        Rune: 0,
        Blocade: !1,
        Moves: 0,
        Power: 0,
        AcumulatedPower: 1,
        SoulPower: 0,
        CardCreated: 0,
        CardsOnBoard: 0,
        CardsSacrificed: 0,
        CardsMerge: 0,
        MaxBuiltUp: 0,
        Restarts: 0,
        Harvests: 0,
        Loaded: !1,
        WindowMove: null,
        Cell: null,
        Width: 0,
        Height: 0,
        PxW: 0,
        PxH: 0,
        TouchX: 0,
        TouchY: 0,
        DiffY: 0,
        DiffX: 0,
        AddCards: [null, null],
        MouseONCardCounter: [0, null],
        Cost: {
            0: 5,
            1: 100,
            2: 600
        },
        CostMulti: {
            0: {
                0: [0, 10, 5],
                1: [11, 18, 100],
                2: [19, 20, 25e4],
                3: [21, 25, 55e6],
                4: [26, 1e5, 15e7]
            },
            1: {
                0: [0, 5, 50],
                1: [6, 10, 1500],
                2: [11, 15, 25e5],
                3: [16, 20, 135e6],
                4: [21, 1e5, 25e8]
            }
        },
        Ranks: {
            0: [1, 0],
            1: [1, 0],
            2: [1, 0]
        },
        Rank2Cards: {
            lenght: 5,
            0: [!0, 0],
            1: [!1, 3],
            2: [!1, 5],
            3: [!1, 4],
            4: [!1, 6]
        },
        NomCost: {
            0: 0,
            1: 0
        },
        SpecCost: {
            0: 0,
            1: 600,
            2: 125e4,
            3: 8e7,
            4: 66666666666666
        },
        DemonEye: {
            PX: 0,
            PY: 0
        }
    },
    TextData = {
        0: {
            Size: 17,
            Spec: "normal",
            Color: "red",
            LWidth: 2,
            SColor: "red",
            LineJoin: "round",
            SPY: 0
        },
        1: {
            Size: 20,
            Spec: "bold",
            Color: "white"
        },
        100: {
            Size: 20,
            Spec: "bold",
            Color: "red"
        },
        2: {
            Size: 11,
            Enter: 15,
            Spec: "normal",
            Color: "white"
        },
        3: {
            Size: 16,
            Spec: "normal",
            Color: "white",
            LWidth: 8,
            SColor: "black",
            LineJoin: "round",
            SPY: 0
        },
        4: {
            Size: 30,
            Spec: "normal",
            Color: "white"
        },
        400: {
            Size: 30,
            Spec: "bold",
            Color: "red"
        },
        5: {
            Size: 30,
            Spec: "bold",
            Color: "white"
        },
        6: {
            Size: 20,
            Enter: 40,
            Spec: "normal",
            Color: "white"
        },
        7: {
            Size: 14,
            Spec: "normal",
            Color: "white",
            LWidth: 1,
            SColor: "white",
            LineJoin: "round",
            SPY: 0
        },
        700: {
            Size: 14,
            Spec: "bold",
            Color: "red"
        },
        7e3: {
            Size: 10,
            Spec: "bold",
            Color: "red"
        },
        7e4: {
            Size: 8,
            Spec: "bold",
            Color: "red"
        },
        8: {
            Size: 20,
            Spec: "normal",
            Color: "white"
        },
        9: {
            Size: 45,
            Spec: "normal",
            Color: "white"
        },
        10: {
            Size: 25,
            Spec: "bold",
            Color: "white"
        },
        11: {
            Size: 35,
            Spec: "bold",
            Color: "red"
        },
        12: {
            Size: 30,
            Spec: "bold",
            Color: "red"
        },
        Ver: {
            Size: 15,
            Spec: "normal",
            Color: "white"
        },
        13: {
            Size: 17,
            Spec: "bold",
            Color: "black",
            LWidth: 1,
            SColor: "black",
            LineJoin: "round",
            SPY: 0
        }
    },
    Ranks = {
        P0: {
            0: [3, 6, 0],
            1: [7, 9, 1],
            2: [10, 13, 2],
            3: [14, 500, 3]
        },
        P1: {
            0: [3, 6, 0],
            1: [7, 10, 1],
            2: [11, 14, 2],
            3: [15, 500, 3]
        }
    },
    CD = {
        Colors: "ffff000f000fff00fff0f",
        Colors_Hero: "ffff00fff0000007ff1cf",
        0: {
            StarPatern: 2,
            Skill: "*",
            NumberS: "",
            SkillSpec: 0,
            Rang: 3,
            Name: "NECROMANCER",
            Spec: 0,
            PX: 14,
            PY: 55,
            M: 6,
            S: 19,
            F: "@PRRRRRR@@@RRZ[RRB@@PR[[[[R@@@Z[kmm]B@@X]kRRR]@@@U[RRRRE@@PjSRRRR@@@RZSRRRB@@PR[RRRR@@@RjSRRRB@@PRZSRRR@@@RR]RRRB@@PRR[RRR@@@RRjSRRB@@PRRZSRR@@@RRR]RRB@@PRRR[RR@@@RRRZSRB@@PRRR]RR@@",
            Text: [
                ["收割 - 增加死亡能量当你"],
                ["右击卡牌可增加能量，增加数量"],
                ["取决于卡片的累积能量。"],
                ["复活所有卡片并保存游戏。"],
                ["死灵法师可以粉碎卡片."]
            ]
        },
        1: {
            StarPatern: 1,
            Skill: "*",
            NumberS: 2,
            Rang: 1,
            Name: "MOVING GRAVE",
            Spec: 1,
            PX: 33,
            PY: 57,
            M: 5,
            S: 15,
            F: "@@@HHH@@@@@AAAA@@IHIII@@HIIII@@@HIIIA@@@HIIA@@@@HIA@@@@HIA@@@@@II@@@@@II@@@@@HIA@@@@@IIA@@@BHIA@@@RJIJ@R@RRRRQRR@",
            Text: [
                ["死亡能量倍增器 - 倍增范围内"],
                ["卡牌的能量, 相框上的 < + > "],
                [" 表示能量倍增的方向,"],
                ["它可以与双卡合并"],
                ["(相同等级和卡名)."]
            ]
        },
        2: {
            StarPatern: 0,
            Skill: "+",
            NumberS: 1,
            Rang: 0,
            Name: "BONES",
            Spec: 2,
            PX: 33,
            PY: 55,
            M: 5,
            S: 15,
            F: "@@@@@@@@@HA@IHA@@IAHII@@II@HI@HIA@@IA@IA@AHI@@I@IAIA@@@IAIIA@@IAHAI@@@A@@@@@H@@A@@@HIIIAA@@IIIIHA@@A@H@HA@@@@@@@@",
            Text: [
                ["死亡能量转移 - 增加能量到"],
                ["范围内的卡牌, 相框上的 < + > "],
                ["表示能量的传递方向,"],
                ["它可以与双卡合并"],
                ["(相同等级和卡名)."]
            ]
        },
        Rank: {
            0: {
                0: {
                    Name: "SKELETON",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@@@@@@@@HI@@@@@@JB@@@@@HI@@@@@@H@@@@@HHIH@@@HHHHH@@@AIHAA@@HHHHH@@@AHI@A@@@H@H@@@@@A@A@@@@H@H@@@@@A@A@@@@I@HA@@"
                },
                1: {
                    Name: "CORPSES",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@@@@@@HJHI@@@@III@@@@HJIIIA@@@HIA@@@@@AHI@@@@H@@AIAIB@@@PQHI@I@@IAJIA@@@A@HIA@HIA@IIIAHI@AHA@@IAH@HI@IA@@@@@HI@"
                },
                2: {
                    Name: "UNDEADS",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@@@@@@@@HA@@@@@HJA@@@@@HI@IA@IHIAPQHAHHA@IA@AHI@@A@@IAIHIH@@IAAIIA@@HIHAI@@HI@HI@@@AI@AA@@I@IHH@@HAHAAA@HA@HIH@"
                },
                3: {
                    Name: "DEAD ARMY",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@IA@@@@@PQHI@HI@IAJB@JB@@HI@HI@@@@@@@@IA@IA@@PQ@PQ@IAIA@IAPQ@@@@A@IA@@AIA@A@@AAAAIAAHHAIAAAAAAAIAIHH@IAAAAA@A@A"
                }
            },
            1: {
                0: {
                    Name: "TOMB",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@@@@@@@@@B@@@@@@RB@@@@@@B@@@@@@IA@@@@@IIA@@@@IIIA@@@IIIIA@@IRRRJA@IB@@@JAHB@@@@J@B@@B@@BP@@JB@P@B@JIB@BP@PIQ@P@"
                },
                1: {
                    Name: "GRAVEYARD",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@@@@@@@@@@@@@@B@@@@B@RB@B@RB@B@RB@B@P@@B@P@@@BP@B@@@RB@RB@@@B@@B@@@P@BP@@@B@RB@B@RB@B@RB@B@P@@B@P@@@@P@@@@@@@@@"
                },
                2: {
                    Name: "BLACK CHURCH",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@@P@@@@@@@B@@@@@@RB@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@H@@@@@@PR@@@@@PRR@@@@PRRR@@@PRRRR@@"
                },
                3: {
                    Name: "DEAD CASTLE",
                    PX: 33,
                    PY: 55,
                    M: 5,
                    S: 15,
                    F: "@@A@@A@@@AIHAA@@HHHHH@@@AAAAA@@H@@@H@@@A@B@A@@HIIII@@@@@P@@@@@@@B@@@@@@R@@@@@@RB@@@@@RB@@@@@PRR@@@@@PRR@@@@@PRB@@"
                }
            }
        },
        3: {
            Eye: {
                PX: 53,
                PY: 85,
                M: 5,
                S: 7,
                F: "@RB@RRBRBRRRPRRBRBRRB@RB@"
            },
            DAdd: !0,
            StarPatern: 2,
            Skill: "*",
            NumberS: "",
            Rang: 3,
            Name: "%#$%@@#$",
            Spec: 0,
            SkillSpec: 1,
            PX: 34,
            PY: 66,
            M: 5,
            S: 15,
            F: "@PRRRR@@P@@@@P@P@@@@@PP@@@@@@PB@@@@@@R@@@@@@PB@@@@@@R@@@@@@PB@@@@@@R@@@@@@PB@@@@@@R@@@@@@PP@@@@@P@P@@@@P@@PRRRR@@",
            Text: [
                ["服务 - 恶魔观看并记住使用过的"],
                ["卡片, 他记性不好，"],
                ["所以移动卡片或睡觉会清除他的记忆."],
                ["恶魔必须看到完整的收割才能重复它"],
                ["(当他准备服务的时候，眼睛会抽动)."]
            ]
        },
        4: {
            BloodStains: {
                M: 8,
                S: 8,
                length: 6,
                0: {
                    PX: -1,
                    PY: -1,
                    F: "RRRRRRRRRRRBRR@@RB@@R@@@@R@@PR@@",
                    Star: 0
                },
                1: {
                    PX: 35,
                    PY: 56,
                    F: "@@@@@@@@@R@@@RB@@PR@@PR@@@@@@@@@",
                    Star: null
                },
                2: {
                    PX: -1,
                    PY: 137,
                    F: "@@@@@@PB@@RRB@PRRB@BRB@@RRR@RRRB",
                    Star: 2
                },
                3: {
                    PX: 78,
                    PY: 137,
                    F: "@@B@@RRP@RRR@PRR@@RR@PRRPRRR@RRR",
                    Star: 7
                },
                4: {
                    PX: 43,
                    PY: 76,
                    F: "@@@@@@P@@PR@@RR@@RR@@PB@@@@@@@@@",
                    Star: null
                },
                5: {
                    PX: 78,
                    PY: -1,
                    F: "RRR@@RRR@PRR@RRR@PRR@@PR@@@B@@@@",
                    Star: 5
                }
            },
            StarPatern: 3,
            Skill: "*",
            NumberS: "",
            DAdd: !0,
            Rang: 3,
            Name: "DEAD SINNER",
            SkillSpec: 4,
            Spec: 0,
            PX: 40,
            PY: 70,
            M: 5,
            S: 15,
            F: "@@@@@@@@@@@@IA@@@AHHI@@@IIIIA@@IIII@@@IIIII@@@AHIII@@@HIIIA@@HIIAI@@HIIIHA@IIHI@H@HI@IA@@@HAHI@@@@@HI@@@@@@I@@@@@",
            Text: [
                ["飞溅 — 罪人的身体充满了鲜血"],
                ["每次收获，使用卡片都会在卡片上"],
                ["溅上鲜血在 < + > 方向. 一张沾满鲜血的卡片提供"],
                [" 2 倍的死亡能量. 再次飞溅"],
                ["会清除之前的卡片."]
            ]
        },
        5: {
            StarPatern: 2,
            Skill: "*",
            NumberS: "",
            SkillSpec: 3,
            DAdd: !0,
            Spec: 0,
            Rang: 3,
            Name: ["DEAD RUNES"],
            Runs_0: [
                ["%%%#%#$&"],
                ["&#$%$%#&"],
                ["@*%%#%%&"],
                ["&%$%$#$&"],
                ["&#$%$%#&"],
                ["&#$%#$%#$"]
            ],
            Runs_1: [
                ["@&&$%#$%%"],
                ["&%$#%#$&"],
                ["&#$%#$%#&"],
                ["@&$%#$&%&"],
                ["&#$$@#$#$"],
                ["&%&#$%&#"]
            ],
            Runs_2: [
                ["&%@#$%#%"],
                ["&#$%#$%#$"],
                ["&$%%$$%&#"],
                ["&$%$%#$&"],
                ["&%$&#&#$"],
                ["&%&#$%&#"]
            ],
            PX: 22,
            PY: 65,
            Text: [
                ["死地 - 死符文允许死灵法师"],
                ["处理更大的收割场，"],
                ["卡牌被动工作."],
            ]
        },
        6: {
            Fire: {
                N: [0, 1, 3, 5, 5],
                0: [69, 69],
                1: [34, 89],
                2: [104, 89],
                3: [33, 130],
                4: [104, 130]
            },
            StarPatern: 2,
            Skill: "*",
            NumberS: "",
            DAdd: !0,
            Rang: 3,
            Name: "BLOOD RITUAL",
            SkillSpec: 5,
            Spec: 0,
            PX: 34,
            PY: 78,
            M: 5,
            S: 15,
            F: "@@@H@@@@@@@A@@@@@@P@@@@@@PP@@@A@@BB@@I@@B@B@HRRRRRRRBBB@@@BB@R@@@PB@@RB@RB@@B@RB@B@P@RPBP@QPB@@RPIR@@@@PJB@@@@@@B",
            Text: [
                ["牺牲 - 在所有蜡烛点燃后，"],
                ["举行仪式，牺牲除死灵法师以外的"],
                ["所有卡片. 卡牌每牺牲一级会"],
                ["增加灵魂能量，每次收获时"],
                ["累积能量乘以灵魂能量."]
            ]
        }
    },
    Web = {
        XY: [7, 4],
        PX: 685,
        PY: 114,
        List: [],
        List_2: [],
        Unlock: [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1]
    },
    Buttons = {
        0: {
            length: 4,
            0: {
                Rang: 0,
                Width: 550,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 71,
                PY: 753
            },
            1: {
                Rang: 1,
                Width: 266,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 71,
                PY: 898
            },
            2: {
                Rang: 2,
                Width: 266,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 355,
                PY: 898
            },
            3: {
                Width: 90,
                Height: 90,
                MouseOn: !1,
                Clicked: !1,
                PX: 15,
                PY: 15
            }
        },
        1: {
            length: 5,
            0: {
                Rang: 0,
                Width: 266,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 71,
                PY: 753
            },
            1: {
                Rang: 1,
                Width: 266,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 355,
                PY: 753
            },
            2: {
                Rang: 2,
                Width: 266,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 355,
                PY: 898
            },
            3: {
                Width: 90,
                Height: 90,
                MouseOn: !1,
                Clicked: !1,
                PX: 15,
                PY: 15
            },
            4: {
                Width: 266,
                Height: 117,
                MouseOn: !1,
                Clicked: !1,
                PX: 71,
                PY: 898
            }
        }
    },
    StarsMap = {
        0: {
            length: 4,
            0: {
                0: [0, 0, 1, 0, 0, 0, 0, 1],
                1: [1, 0, 0, 0, 0, 1, 0, 0],
                2: [1, 0, 1, 0, 0, 0, 0, 0],
                3: [0, 0, 0, 0, 0, 1, 0, 1]
            },
            1: {
                0: [0, 0, 1, 0, 1, 0, 0, 1],
                1: [1, 0, 0, 1, 0, 1, 0, 0],
                2: [1, 1, 1, 0, 0, 0, 0, 0],
                3: [0, 0, 0, 0, 0, 1, 1, 1]
            },
            2: {
                0: [1, 0, 1, 0, 1, 1, 0, 1],
                1: [1, 0, 1, 1, 0, 1, 0, 1],
                2: [1, 1, 1, 0, 0, 1, 0, 1],
                3: [1, 0, 1, 0, 0, 1, 1, 1]
            },
            3: {
                0: [1, 1, 1, 0, 1, 1, 1, 1],
                1: [1, 1, 1, 1, 0, 1, 1, 1],
                2: [1, 1, 1, 1, 1, 1, 0, 1],
                3: [1, 0, 1, 1, 1, 1, 1, 1]
            },
            4: {
                0: [1, 1, 1, 1, 1, 1, 1, 1],
                1: [1, 1, 1, 1, 1, 1, 1, 1],
                2: [1, 1, 1, 1, 1, 1, 1, 1],
                3: [1, 1, 1, 1, 1, 1, 1, 1]
            }
        },
        1: {
            length: 4,
            0: {
                0: [0, 0, 0, 1, 0, 0, 0, 0],
                1: [0, 1, 0, 0, 0, 0, 0, 0],
                2: [0, 0, 0, 0, 1, 0, 0, 0],
                3: [0, 0, 0, 0, 0, 0, 1, 0]
            },
            1: {
                0: [0, 0, 0, 1, 0, 0, 1, 0],
                1: [0, 1, 0, 0, 0, 0, 1, 0],
                2: [0, 1, 0, 0, 1, 0, 0, 0],
                3: [0, 1, 0, 0, 0, 0, 1, 0]
            },
            2: {
                0: [0, 1, 0, 1, 0, 0, 1, 0],
                1: [0, 1, 0, 1, 0, 0, 1, 0],
                2: [0, 1, 0, 0, 1, 0, 1, 0],
                3: [0, 1, 0, 0, 1, 0, 1, 0]
            },
            3: {
                0: [0, 1, 0, 1, 1, 0, 1, 0],
                1: [0, 1, 0, 1, 1, 0, 1, 0],
                2: [0, 1, 0, 1, 1, 0, 1, 0],
                3: [0, 1, 0, 1, 1, 0, 1, 0]
            },
            4: {
                0: [0, 1, 1, 1, 1, 0, 1, 1],
                1: [1, 1, 0, 1, 1, 1, 1, 0],
                2: [1, 1, 0, 1, 1, 0, 1, 1],
                3: [0, 1, 1, 1, 1, 1, 1, 0]
            }
        },
        2: {
            length: 1,
            0: {
                0: [1, 1, 1, 1, 1, 1, 1, 1]
            }
        },
        3: {
            length: 1,
            0: {
                0: [1, 0, 1, 0, 0, 1, 0, 1]
            }
        }
    },
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    pixelRatio = window.devicePixelRatio || 1,
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

function LoadEngine() {
    SaveInfo = JSON.parse(JSON.stringify(MD)), PixelRatio(), WebCreate(), TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen)
}

function LoadGame() {
    if ("true" == localStorage.getItem("CFG_IdleN_S")) {
        var c = null;
        MD.Loaded = !0;
        for (var a = 0; a < Number(localStorage.getItem("CFG_IdleN_CLlen")); a++) {
            if (CreateCard(Number(localStorage.getItem("CFG_IdleN_Card_Num_" + a)), !1, Number(localStorage.getItem("CFG_IdleN_Cell_" + a)), Number(localStorage.getItem("CFG_IdleN_PaternNum_" + a)), Number(localStorage.getItem("CFG_IdleN_Level_" + a))), 5 == Number(localStorage.getItem("CFG_IdleN_Card_Num_" + a)))
                for (var d = 0; d < Web.List.length; d++) Web.List[d].Unlock = !0;
            4 == Number(localStorage.getItem("CFG_IdleN_Card_Num_" + a)) && (c = CL[a]), null != CL[a].Data.SkillSpec && 0 != Number(localStorage.getItem("CFG_IdleN_Card_Num_" + a)) && MD.Ranks[2][0]++
        }
        if (null != c) {
            for (var e = [
                    [0, 1, 1, 0, 0, 0, 1],
                    [1, 0, 1, 0, 0, 0, 2],
                    [0, 0, 0, 1, 0, 1, 1],
                    [0, 0, 0, 0, 1, 1, 2],
                    [0, 1, 0, 1, 0, 0, 2],
                    [1, 0, 0, 0, 0, 1, 2],
                    [0, 0, 1, 0, 1, 0, 2],
                ], a = 0; a < CL.length; a++)
                if ("true" == localStorage.getItem("CFG_IdleN_Blood_" + a) && 4 != Number(localStorage.getItem("CFG_IdleN_Card_Num_" + a))) {
                    var f = Math.floor(7 * Math.random());
                    for (let b = 0; b < 6; b++) e[f][b] && (CL[a].Blood.push(c.Blood[b]), CL[a].BloodL++, null != c.Blood[b].StarN && "+" == CL[a].Stars[c.Blood[b].StarN] && (CL[a].BloodStars[c.Blood[b].StarN] = "+"))
                }
        }
        MD.Power = Number(localStorage.getItem("CFG_IdleN_Power")), MD.SoulPower = Number(localStorage.getItem("CFG_IdleN_SoulPower")), MD.CardCreated = Number(localStorage.getItem("CFG_IdleN_CardCreated")), MD.CardsSacrificed = Number(localStorage.getItem("CFG_IdleN_CardsSacrificed")), MD.CardsMerge = Number(localStorage.getItem("CFG_IdleN_CardsMerge")), MD.MaxBuiltUp = Number(localStorage.getItem("CFG_IdleN_MaxBuiltUp")), MD.Restarts = Number(localStorage.getItem("CFG_IdleN_Restarts")), MD.Harvests = Number(localStorage.getItem("CFG_IdleN_Harvests")), "true" == localStorage.getItem("CFG_IdleN_CoilCard") ? MD.CoilCard = !0 : MD.CoilCard = !1;
        for (var a = 0; a < 2; a++) MD.Ranks[a][0] = Number(localStorage.getItem("CFG_IdleN_Ranks_0_" + a)), MD.Ranks[a][1] = Number(localStorage.getItem("CFG_IdleN_Ranks_1_" + a));
        for (var a = 0; a < 2; a++) MD.NomCost[a] = Number(localStorage.getItem("CFG_IdleN_NomCost_" + a));
        for (var a = 0; a < MD.Rank2Cards.lenght; a++) "true" == localStorage.getItem("CFG_IdleN_R2C_" + a) ? MD.Rank2Cards[a][0] = !0 : MD.Rank2Cards[a][0] = !1;
        CostH()
    } else MD.Loaded || (CreateCard(0), CoilCheck())
}

function SaveVal() {
    localStorage.setItem("CFG_IdleN_S", !0), localStorage.setItem("CFG_IdleN_Power", MD.Power), localStorage.setItem("CFG_IdleN_SoulPower", MD.SoulPower), localStorage.setItem("CFG_IdleN_CardCreated", MD.CardCreated), localStorage.setItem("CFG_IdleN_CardsSacrificed", MD.CardsSacrificed), localStorage.setItem("CFG_IdleN_CardsMerge", MD.CardsMerge), localStorage.setItem("CFG_IdleN_MaxBuiltUp", MD.MaxBuiltUp), localStorage.setItem("CFG_IdleN_Restarts", MD.Restarts), localStorage.setItem("CFG_IdleN_Harvests", MD.Harvests)
}

function SaveMain() {
    localStorage.setItem("CFG_IdleN_S", !0);
    for (var b = 0, a = 0; a < CL.length; a++) null != CL[a] && (localStorage.setItem("CFG_IdleN_Card_Num_" + b, CL[a].Card_Num), localStorage.setItem("CFG_IdleN_Cell_" + b, CL[a].Cell), localStorage.setItem("CFG_IdleN_Level_" + b, CL[a].Level), localStorage.setItem("CFG_IdleN_PaternNum_" + b, CL[a].PaternNum), CL[a].Blood.length > 0 ? localStorage.setItem("CFG_IdleN_Blood_" + b, !0) : localStorage.setItem("CFG_IdleN_Blood_" + b, !1), b++);
    for (var a = 0; a < 2; a++) localStorage.setItem("CFG_IdleN_Ranks_0_" + a, MD.Ranks[a][0]), localStorage.setItem("CFG_IdleN_Ranks_1_" + a, MD.Ranks[a][1]);
    for (var a = 0; a < 2; a++) localStorage.setItem("CFG_IdleN_NomCost_" + a, MD.NomCost[a]);
    for (var a = 0; a < MD.Rank2Cards.lenght; a++) localStorage.setItem("CFG_IdleN_R2C_" + a, MD.Rank2Cards[a][0]);
    localStorage.setItem("CFG_IdleN_CLlen", b), SaveVal()
}

function PixelRatio() {
    windowWidth = window.innerWidth;
    var a = (windowHeight = window.innerHeight) * (pixelRatio = window.devicePixelRatio || 1),
        b = windowWidth * pixelRatio;
    if (canvas.width = windowWidth * pixelRatio, canvas.height = windowHeight * pixelRatio, canvas.style.width = windowWidth + "px", canvas.style.height = windowHeight + "px", Math.floor(windowHeight / (windowWidth + windowHeight) * 100) > 36)
        for (; 36 != Math.floor(windowHeight / (windowWidth + windowHeight) * 100);) windowHeight = Math.round(36 * ((windowWidth + windowHeight) / 100));
    if (Math.floor(windowWidth / (windowWidth + windowHeight) * 100) > 64)
        for (; 64 != Math.floor(windowWidth / (windowWidth + windowHeight) * 100);) windowWidth = Math.round(64 * ((windowWidth + windowHeight) / 100));
    MD.PxW = windowWidth * pixelRatio / 1920, MD.PxH = windowHeight * pixelRatio / 1080, MD.DiffY = (a - windowHeight * pixelRatio) / 2, MD.DiffX = (b - windowWidth * pixelRatio) / 2, MD.Width = 1920 * MD.PxW, MD.Height = 1080 * MD.PxH, NoUpdateScreen()
}

function WebCreate() {
    for (var a = 0; a < Web.XY[1]; a++) {
        Web.List_2.push([]);
        for (var b = 0; b < Web.XY[0]; b++) Web.List.push({
            X: b,
            Y: a,
            PX: Web.PX + 168 * b,
            PY: Web.PY + 228 * a,
            CardIn: null,
            Unlock: !1
        }), Web.Unlock[Web.List.length - 1] || (Web.List[Web.List.length - 1].Unlock = !0), Web.List_2[a].push(Web.XY[0] * a + b)
    }
    LoadGame()
}

function WebDraw() {
    for (var a = 0; a < Web.List.length; a++) {
        var b = Web.List[a];
        ctx.save(), ctx.translate(b.PX * MD.PxW, b.PY * MD.PxH), a == MD.AddCards[2] && "NECROMANCER" == MD.AddCards[0] && (ctx.beginPath(), rectDrawer(2, "white", 0, 0, 168, 228), ctx.fillStyle = "red", ctx.fill(), rectDrawer(8, "black", 0, 0, 168, 228), ctx.closePath()), ctx.beginPath(), a == MD.Cell && (ctx.globalAlpha = .55, ctx.strokeStyle = "White"), a == MD.AddCards[2] && (ctx.strokeStyle = "Red"), ctx.lineWidth = 2 * MD.PxW, (a == MD.Cell || a == MD.AddCards[2]) && ctx.rect(0, 0, 168 * MD.PxW, 228 * MD.PxH), ctx.stroke(), ctx.closePath(), ctx.restore(), ctx.save(), ctx.translate(b.PX * MD.PxW, b.PY * MD.PxH), ctx.beginPath(), a == MD.Cell ? ctx.globalAlpha = .3 : ctx.globalAlpha = .1, Web.List[a].Unlock || (ctx.globalAlpha = .04), rectDrawer(2, "White", 13, 13, 142, 202), ctx.fillStyle = "White", ctx.fill(), ctx.closePath(), ctx.globalAlpha = .4, Web.List[a].Unlock && TextDrawer(["+"], 4, 85, 120), ctx.restore()
    }
    MD.AutoPlay && (MD.AutoC <= 0 ? (CL[AutoPS[MD.AutoCard].Card].Used || SpecFunction(CL[AutoPS[MD.AutoCard].Card]), MD.AutoCard++, MD.AutoCard > AutoPS.length - 1 && (MD.AutoCard = 0), MD.AutoC = 10) : MD.AutoC--)
}

function CreateCard(b, m, j, k, f) {
    MD.CardsOnBoard++;
    for (var g = [], a = 0; a < Web.List.length; a++) null == Web.List[a].CardIn && Web.List[a].Unlock && g.push(a);
    var d = g[Math.floor(Math.random() * g.length)],
        l = !1,
        c = 0;
    0 == b ? d = 10 : MD.CardCreated++, null != j && (d = j);
    var c = Math.floor(Math.random() * StarsMap[CD[b].StarPatern].length);
    null != k && (c = k);
    for (var h = StarsMap[CD[b].StarPatern][0][c], i = {
            Card_Num: b,
            TN: 0,
            Blood: [],
            BloodL: 0,
            Merged: !1,
            Restart: !1,
            Level: 1,
            Data: CD[b],
            Draw: !1,
            Function: null,
            PX: Web.List[d].PX + 13.5,
            PY: Web.List[d].PY + 13.5,
            Cell: d,
            Skill: CD[b].Skill,
            NumberS: CD[b].NumberS,
            AddedNumber: CD[b].NumberS,
            SkillText: CD[b].Skill + CD[b].NumberS,
            Shadow: 0,
            Counter: 0,
            UseCounter: 0,
            Scale: 1,
            ScaleM: .85,
            ScaleAdd: 0,
            PX_2: 0,
            PY_2: 0,
            PX_2_M: 0,
            PY_2_M: 0,
            MadeCounter: 200,
            Start_Stars_Patern: CD[b].StarPatern,
            PaternNum: c,
            StarsTab: h,
            Stars: {
                0: " ",
                1: " ",
                2: " ",
                3: " ",
                4: " ",
                5: " ",
                6: " ",
                7: " "
            },
            BloodStars: {
                0: " ",
                1: " ",
                2: " ",
                3: " ",
                4: " ",
                5: " ",
                6: " ",
                7: " "
            }
        }, a = 0; a < h.length; a++) h[a] && (i.Stars[a] = "+");
    if (CL.length > 1)
        for (var a = 0; a < CL.length; a++) null == CL[a] && (l = !0, c = a);
    var a = 0;
    if (l ? (CL[c] = JSON.parse(JSON.stringify(i)), a = c) : (CL.push(JSON.parse(JSON.stringify(i))), a = CL.length - 1), Web.List[d].CardIn = a, CL[a].TN = a, CL[a].Function = function () {
            CardDraw(CL[a])
        }, null != f && f > 1) {
        CL[a].Level = f, CL[a].NumberS = CD[b].NumberS;
        for (var e = 0; e < CL[a].Level - 1; e++) CL[a].NumberS += CL[a].NumberS;
        CL[a].AddedNumber = CL[a].NumberS, CL[a].SkillText = CL[a].Skill + CL[a].NumberS
    }
    if (m && CL[a].Data.Rang < 3 && CL[a].Level != MD.Ranks[CL[a].Data.Rang][0]) {
        CL[a].Level = MD.Ranks[CL[a].Data.Rang][0], CL[a].NumberS = CD[b].NumberS;
        for (var e = 0; e < CL[a].Level - 1; e++) CL[a].NumberS += CL[a].NumberS;
        CL[a].AddedNumber = CL[a].NumberS, CL[a].SkillText = CL[a].Skill + CL[a].NumberS
    }
    4 == CL[a].Data.SkillSpec && BloodAdd(CL[a]), AppRank(CL[a])
}

function CardDraw(a) {
    if (ctx.save(), 0 == a.Shadow && a.Draw && (a.Shadow = 1, a.Counter = 5, a.ScaleAdd = (a.ScaleM - 1) / 5), a.Counter > 0 && 1 == a.Shadow && (a.Scale += a.ScaleAdd, a.PX_2 += 2.5, a.PY_2 += 3, a.Counter--), a.Counter > 0 && 2 == a.Shadow && (a.Scale -= a.ScaleAdd, a.PX_2 -= a.PX_2_M, a.PY_2 -= a.PY_2_M, a.Counter--, a.Counter <= 0 && (a.Shadow = 0, a.Scale = 1, a.PX_2 = 0, a.PY_2 = 0, a.PX = Web.List[a.Cell].PX + 13.5, a.PY = Web.List[a.Cell].PY + 13.5)), ctx.translate((a.PX_2 + a.PX) * MD.PxW, (a.PY_2 + a.PY) * MD.PxH), a.MadeCounter > 0) {
        if (ctx.translate(Math.floor(Math.random() * (a.MadeCounter / 12) - a.MadeCounter / 25) * MD.PxW, Math.floor(Math.random() * (a.MadeCounter / 12) - a.MadeCounter / 25) * MD.PxH), a.MadeCounter > 9)
            for (var b = 0; b < MD.VX[MD.Mobile]; b++) ctx.save(), ctx.beginPath(), ctx.rect(Math.floor(140 * Math.random()) * MD.PxW, (207 - a.MadeCounter + Math.floor(5 * Math.random())) * MD.PxH, 4 * MD.PxW, 4 * MD.PxH), 1 == Math.floor(2 * Math.random()) ? ctx.fillStyle = "white" : ctx.fillStyle = "black", ctx.fill(), ctx.closePath(), ctx.restore();
        ctx.rect(-5 * MD.PxW, -5 * MD.PxH, 150 * MD.PxW, (210 - a.MadeCounter) * MD.PxH), ctx.clip(), a.MadeCounter -= 9, a.MadeCounter <= 0 && (a.MadeCounter = 0)
    }
    a.UseCounter > 0 && (ctx.translate(Math.floor(5 * Math.random() - 2.5) * MD.PxW, Math.floor(5 * Math.random() - 2.5) * MD.PxH), a.UseCounter--, a.UseCounter <= 0 && (a.ShadowUse = !1, a.Restart || 3 == a.Data.Rang ? (a.Used = !1, a.Restart = !1) : a.Used = !0)), a.Shadow > 0 && ctx.scale(a.Scale, a.Scale), MainCardDrew(a), ctx.restore()
}

function DeadDraw(a) {
    if (a.MadeCounter <= 0) {
        a.MadeCounter = 0;
        return
    }
    a.MadeCounter -= 15, ctx.save(), ctx.translate(a.PX * MD.PxW, a.PY * MD.PxH), ctx.save(), ctx.beginPath(), fillrectDrawer(1, "black", 0, 0, 140, -20, "black"), ctx.closePath(), ctx.restore(), a.DesAnim -= .01, ctx.globalAlpha = a.DesAnim;
    for (var b = 0; b < MD.VY[MD.Mobile]; b++) ctx.save(), ctx.beginPath(), ctx.rect(Math.floor(140 * Math.random()) * MD.PxW, (7 + a.MadeCounter + Math.floor(15 * Math.random())) * MD.PxH, 4 * MD.PxW, 4 * MD.PxH), 1 == a.DesType ? 1 == Math.floor(2 * Math.random()) ? ctx.fillStyle = "white" : ctx.fillStyle = "black" : ctx.fillStyle = "red", ctx.fill(), ctx.closePath(), ctx.restore();
    ctx.rect(-5 * MD.PxW, -5 * MD.PxH, 150 * MD.PxW, (10 + a.MadeCounter) * MD.PxH), ctx.clip(), 1 != a.DesType && ctx.translate(Math.floor(5 * Math.random() - 2.5) * MD.PxW, Math.floor(5 * Math.random() - 2.5) * MD.PxH), MainCardDrew(a), ctx.restore()
}

function MainCardDrew(a) {
    if (ctx.save(), ctx.beginPath(), ctx.strokeStyle = "White", ctx.lineWidth = 2 * MD.PxW, ctx.rect(0, 0, 140 * MD.PxW, 200 * MD.PxH), ctx.fillStyle = "Black", a.Draw ? (ctx.beginPath(), ctx.shadowColor = "white", ctx.shadowBlur = 10, ctx.shadowOffsetX = 0, ctx.shadowOffsetY = 0, ctx.strokeStyle = "white", ctx.rect(0, 0, 140 * MD.PxW, 200 * MD.PxH), ctx.stroke(), ctx.closePath()) : a.MouseON && rectDrawer(1, "red", -2, -2, 144, 204), a.ShadowUse && (fillrectDrawer(1, "red", -2, -2, 144, 204, "red"), "*" == a.SkillText && 1 == a.Data.SkillSpec && (PixelDraw(a.Data.Eye, !0, 100), PixelDraw(a.Data, !0, 100))), ctx.fill(), ctx.stroke(), ctx.closePath(), ctx.restore(), a.ShadowUse ? (TextDrawer([a.Stars[0] + "     " + a.Stars[3] + "     " + a.Stars[5]], 13, 70, 18), TextDrawer([a.Stars[1] + "           " + a.Stars[6]], 13, 70, 100), TextDrawer([a.Stars[2] + "     " + a.Stars[4] + "     " + a.Stars[7]], 13, 70, 192)) : (TextDrawer([a.Stars[0] + "     " + a.Stars[3] + "     " + a.Stars[5]], 0, 70, 18), TextDrawer([a.Stars[1] + "           " + a.Stars[6]], 0, 70, 100), TextDrawer([a.Stars[2] + "     " + a.Stars[4] + "     " + a.Stars[7]], 0, 70, 192)), ctx.save(), ctx.beginPath(), TextDrawer([a.Data.Name], 2, 71, 45), "*" == a.SkillText) {
        if (0 == a.Data.SkillSpec) fillrectDrawer(5, "red", 31, 55, 80, 114, "red"), PixelDraw(a.Data, !0, a.Data.SkillSpec);
        else if (1 == a.Data.SkillSpec) a.ShadowUse || (ctx.save(), ctx.translate(0, 3 * MD.PxH), PixelDraw(a.Data, !0, 101), ctx.restore(), ctx.save(), MD.AutoPlay ? (ctx.save(), ctx.translate(.8 * AutoPS[MD.AutoCard].Mpx * MD.PxW, .8 * AutoPS[MD.AutoCard].Mpy * MD.PxH), PixelDraw(a.Data.Eye, !0, 101), ctx.restore(), ctx.translate(AutoPS[MD.AutoCard].Mpx * MD.PxW, AutoPS[MD.AutoCard].Mpy * MD.PxH)) : (DemonEye(a), ctx.save(), ctx.translate(.8 * MD.DemonEye.PX * MD.PxW, .8 * MD.DemonEye.PY * MD.PxH), PixelDraw(a.Data.Eye, !0, 101), ctx.restore(), ctx.translate(MD.DemonEye.PX * MD.PxW, MD.DemonEye.PY * MD.PxH)), PixelDraw(a.Data.Eye, !0, a.Data.SkillSpec), ctx.restore(), ctx.save(), (MD.AutoPlay || MD.FullHarvest) && ctx.translate(-2 + Math.floor(4 * Math.random()) * MD.PxW, -2 + Math.floor(4 * Math.random()) * MD.PxH), PixelDraw(a.Data, !0, a.Data.SkillSpec), ctx.restore());
        else if (3 == a.Data.SkillSpec) TextDrawer(a.Data["Runs_" + MD.Rune], 2, 71, 70), MD.RundC <= 0 ? (MD.RundC = 2, MD.Rune = Math.floor(3 * Math.random())) : MD.RundC--;
        else if (5 == a.Data.SkillSpec) {
            PixelDraw(a.Data, !0, a.Data.SkillSpec), ctx.save();
            for (var d = 0; d < a.Data.Fire.N[MD.RestartCounter_2]; d++)
                for (var b = 0; b < 10; b++) ctx.save(), ctx.beginPath(), ctx.rect((a.Data.Fire[d][0] + Math.floor(4 * Math.random())) * MD.PxW, (a.Data.Fire[d][1] + Math.floor(7 * Math.random())) * MD.PxH, 2 * MD.PxW, 2 * MD.PxH), ctx.fillStyle = "red", ctx.fill(), ctx.closePath(), ctx.restore();
            ctx.restore()
        } else a.Data.F && PixelDraw(a.Data, !0, a.Data.SkillSpec)
    } else PixelDraw(a.Data), a.Merged ? a.SkillText.length < 7 ? TextDrawer([a.SkillText], 100, 70, 160) : a.SkillText.length < 12 ? TextDrawer([a.SkillText], 700, 70, 160) : a.SkillText.length < 15 ? TextDrawer([a.SkillText], 7e3, 70, 160) : TextDrawer([a.SkillText], 7e4, 70, 160) : a.SkillText.length < 7 ? TextDrawer([a.SkillText], 1, 70, 160) : TextDrawer([a.SkillText], 7, 70, 160), TextDrawer([cinTRoman(a.Level)], 3, 70, 5);
    ctx.save(), ctx.beginPath(), ctx.strokeStyle = "White", ctx.lineWidth = 1 * MD.PxW;
    for (var c = 0; c < a.Data.Rang + 1; c++) ctx.rect((28 - 3 * c) * MD.PxW, (28 - 3 * c) * MD.PxH, (86 + 6 * c) * MD.PxW, (144 + 6 * c) * MD.PxH);
    if (ctx.stroke(), ctx.closePath(), ctx.restore(), ctx.closePath(), ctx.restore(), a.BloodL > 0) {
        for (var b = 0; b < a.BloodL; b++) PixelDraw(a.Blood[b], !1);
        TextDrawer([a.BloodStars[0] + "     " + a.BloodStars[3] + "     " + a.BloodStars[5]], 13, 70, 18), TextDrawer([a.BloodStars[1] + "           " + a.BloodStars[6]], 13, 70, 100), TextDrawer([a.BloodStars[2] + "     " + a.BloodStars[4] + "     " + a.BloodStars[7]], 13, 70, 192)
    }
    a.Used && (ctx.save(), ctx.beginPath(), ctx.globalAlpha = .6, fillrectDrawer(1, "Black", -12, -12, 164, 224, "Black"), ctx.closePath(), ctx.restore())
}

function AddCards() {
    if ("NECROMANCER" == MD.AddCards[0]) {
        "*" == CL[MD.AddCards[1]].Skill ? MD.AcumulatedPower *= CL[MD.AddCards[1]].AddedNumber : "+" == CL[MD.AddCards[1]].Skill && (MD.AcumulatedPower += CL[MD.AddCards[1]].AddedNumber), CostH(), DeleteCard(MD.AddCards[1], 2);
        return
    }
    MD.CardsMerge++, CL[MD.AddCards[0]].Level++, CL[MD.AddCards[0]].NumberS += CL[MD.AddCards[1]].AddedNumber, CL[MD.AddCards[0]].AddedNumber = CL[MD.AddCards[0]].NumberS, CL[MD.AddCards[0]].SkillText = CL[MD.AddCards[0]].Skill + CL[MD.AddCards[0]].NumberS, MD.Ranks[CL[MD.AddCards[0]].Data.Rang][0] + 2 == CL[MD.AddCards[0]].Level && (MD.Ranks[CL[MD.AddCards[0]].Data.Rang][1]++, MD.Ranks[CL[MD.AddCards[0]].Data.Rang][1] > 2 && (MD.Ranks[CL[MD.AddCards[0]].Data.Rang][0]++, MD.Ranks[CL[MD.AddCards[0]].Data.Rang][1] = 0)), AppRank(CL[MD.AddCards[0]]), DeleteCard(MD.AddCards[1], 1, MD.AddCards[0]), ClearCards(), AutoPlayClear()
}

function BuyCard(b) {
    if ((MD.CardsOnBoard != Web.List.length || !MD.Rank2Cards[2][0]) && (MD.CardsOnBoard != Web.List.length - 8 || MD.Rank2Cards[2][0])) {
        var d = [2, 1, 0];
        if (CoilCheck(), MD.Power >= MD.Cost[b]) {
            if (d[b] > 0) MD.NomCost[b]++, CreateCard(d[b], !0), MD.Power -= MD.Cost[b], CostH();
            else
                for (var a = 0; a < MD.Rank2Cards.lenght; a++)
                    if (!MD.Rank2Cards[a][0]) {
                        if (CreateCard(MD.Rank2Cards[a][1]), MD.Power -= MD.Cost[b], MD.Ranks[2][0]++, MD.CoilCard && 2 == a && MD.Ranks[2][0]++, 2 == a)
                            for (var c = 0; c < Web.List.length; c++) Web.List[c].Unlock = !0;
                        MD.Rank2Cards[a][0] = !0, CostH();
                        return
                    }
        }
    }
}

function AppRank(a) {
    if (a.Data.Rang < 3) {
        for (var b = 0; b < 4; b++)
            if (Ranks["P" + a.Data.Rang][b][0] <= a.Level && Ranks["P" + a.Data.Rang][b][1] >= a.Level) {
                var c = CD.Rank[a.Data.Rang][Ranks["P" + a.Data.Rang][b][2]];
                a.Data.Name = c.Name, a.Data.F = c.F, a.Data.PX = c.PX, a.Data.PY = c.PY, a.Data.M = c.M, a.Data.S = c.S;
                var d = StarsMap[a.Start_Stars_Patern][Ranks["P" + a.Data.Rang][b][2] + 1][a.PaternNum];
                a.StarsTab = d;
                for (var b = 0; b < d.length; b++) d[b] ? a.Stars[b] = "+" : a.Stars[b] = " "
            }
    }
}

function BloodAdd(b) {
    for (var a = 0; a < CD[4].BloodStains.length; a++) b.Blood.push({
        StarN: null,
        M: CD[4].BloodStains.M,
        S: CD[4].BloodStains.S,
        PX: CD[4].BloodStains[a].PX,
        PY: CD[4].BloodStains[a].PY,
        F: CD[4].BloodStains[a].F
    }), null != CD[4].BloodStains[a].Star && "+" == b.Stars[CD[4].BloodStains[a].Star] && (b.BloodStars[CD[4].BloodStains[a].Star] = "+", b.Blood[b.Blood.length - 1].StarN = CD[4].BloodStains[a].Star), b.BloodL++
}

function CostH() {
    for (var a = 0; a < 5; a++) MD.NomCost[0] >= MD.CostMulti[0][a][0] && MD.NomCost[0] <= MD.CostMulti[0][a][1] && (MD.Cost[0] = MD.CostMulti[0][a][2] * (MD.NomCost[0] + 1));
    for (var a = 0; a < 5; a++) MD.NomCost[1] >= MD.CostMulti[1][a][0] && MD.NomCost[1] <= MD.CostMulti[1][a][1] && (MD.Cost[1] = MD.CostMulti[1][a][2] * (MD.NomCost[1] + 1));
    MD.Ranks[2][0] > 1 && (MD.Cost[2] = MD.SpecCost[MD.Ranks[2][0]])
}

function DeleteCard(a, b, c) {
    MD.CardsOnBoard--, DeadAnimMake(a, b, c), Web.List[CL[a].Cell].CardIn = null, CL[a] = null, AutoPlayClear()
}

function DeadAnimMake(d, e, c) {
    for (var f = !0, a = 0, b = 0; b < CLDead.length; b++) null == CLDead[b] && (CLDead[b] = CL[d], f = !1, a = b, b = CLDead.length);
    f && (CLDead.push(CL[d]), a = CLDead.length - 1), CLDead[a].Function = function () {
        DeadDraw(CLDead[a])
    }, CLDead[a].MadeCounter = 200, CLDead[a].DesType = e, CLDead[a].DesAnim = 1, 0 != e && (CLDead[a].PX = MD.LXY[0], CLDead[a].PY = MD.LXY[1]), null != c && (CLDead[a].PX = CL[c].PX, CLDead[a].PY = CL[c].PY)
}

function DemonEye(b) {
    for (var a = 0; a < 10; a++) MD.TouchX / MD.PxW > MD.DiffX + b.PX + 70 + 50 * a ? MD.DemonEye.PX = a : MD.TouchX / MD.PxW <= MD.DiffX + b.PX + 100 - 50 * a && (MD.DemonEye.PX = -a), MD.TouchY / MD.PxH > MD.DiffY + b.PY + 100 + 50 * a ? MD.DemonEye.PY = a : MD.TouchY / MD.PxH <= MD.DiffY + b.PY + 100 - 50 * a && (MD.DemonEye.PY = -a)
}

function SpecFunction(a) {
    if (a.UseCounter <= 0) {
        switch (a.Data.Spec) {
            case 0:
                switch (a.Data.SkillSpec) {
                    case 0:
                        MD.Blocade = !1, MD.Harvests++;
                        var h = 0;
                        h = MD.SoulPower > 0 ? MD.AcumulatedPower * MD.SoulPower : MD.AcumulatedPower, MD.Power += h, h > MD.MaxBuiltUp && (MD.MaxBuiltUp = h), MD.AcumulatedPower = 1;
                        for (var b = 0; b < CL.length; b++) null == CL[b] || CL[b].Data.Name == a.Data.Name || CL[b].Data.DAdd || (CL[b].UseCounter = 10, CL[b].Restart = !0, CL[b].Merged = !1, CL[b].AddedNumber = CL[b].NumberS, CL[b].SkillText = CL[b].Skill + CL[b].NumberS);
                        !MD.AutoPlay && MD.Rank2Cards[1][0] && (MD.FullHarvest = !0), null != MD.Blood && (CL[MD.Blood].BloodL = 6, MD.Blood = null), SaveMain();
                        break;
                    case 1:
                        !MD.AutoPlay && MD.FullHarvest ? MD.AutoPlay = !0 : MD.AutoPlay = !1, MD.AutoCard = 0, MD.AutoC = 8;
                        break;
                    case 4:
                        if (null == MD.Blood) {
                            for (var i = [
                                    [0, 1, 1, 0, 0, 0, 1],
                                    [1, 0, 1, 0, 0, 0, 2],
                                    [0, 0, 0, 1, 0, 1, 1],
                                    [0, 0, 0, 0, 1, 1, 2],
                                    [0, 1, 0, 1, 0, 0, 2],
                                    [1, 0, 0, 0, 0, 1, 2],
                                    [0, 0, 1, 0, 1, 0, 2],
                                ], c = 0; c < CL.length; c++) null != CL[c] && CL[c].BloodL > 0 && (a.TN != c && (CL[c].Blood = []), CL[c].BloodL = 0, CL[c].BloodStars = {
                                0: " ",
                                1: " ",
                                2: " ",
                                3: " ",
                                4: " ",
                                5: " ",
                                6: " ",
                                7: " "
                            });
                            a.BloodL = 6;
                            var e = BoardFind(a, 3);
                            if (e.length > 0)
                                for (let f = 0; f < e.length; f++) {
                                    var j = Math.floor(7 * Math.random());
                                    for (let d = 0; d < 6; d++) i[j][d] && (CL[e[f]].Blood.push(a.Blood[d]), CL[e[f]].BloodL++, null != a.Blood[d].StarN && "+" == CL[e[f]].Stars[a.Blood[d].StarN] && (CL[e[f]].BloodStars[a.Blood[d].StarN] = "+"))
                                }
                            for (let g = 0; g < a.BloodL; g++) null != a.Blood[g].StarN && "+" == a.Stars[a.Blood[g].StarN] && (a.BloodStars[a.Blood[g].StarN] = "+");
                            a.BloodL = 0, MD.Blood = a.TN
                        }
                        break;
                    case 5:
                        MD.RestartCounter_2++, MD.RestartCounter2_2 = 80, MD.RestartCounter_2 > 3 && (RestartGame(!0), MD.RestartCounter_2 = 0)
                }
                break;
            case 1:
                BoardFind(a, 1);
                break;
            case 2:
                BoardFind(a, 2)
        }
        if (MD.Mobile)
            for (var b = 0; b < CL.length; b++) null != CL[b] && 1 == CL[b].Data.SkillSpec && DemonEye(CL[b]);
        MD.AutoPlay || !MD.Rank2Cards[1][0] || 1 == a.Data.SkillSpec || a.Data.DAdd || AutoPS.push({
            Mpx: MD.DemonEye.PX,
            Mpy: MD.DemonEye.PY,
            Card: a.TN
        }), a.SkillText = a.Skill + a.NumberS, a.ShadowUse = !0, a.UseCounter = 20
    }
}

function BoardFind(a, c) {
    if (3 == c) var f = [];
    for (var d = -1, g = 0; d < 2; d++)
        for (var e = -1; e < 2; e++)
            if (0 != d || 0 != e) {
                if (Web.List[a.Cell].Y + e > -1 && Web.List[a.Cell].X + d > -1 && Web.List[a.Cell].Y + e < Web.XY[1] && Web.List[a.Cell].X + d < Web.XY[0]) {
                    var b = Web.List[Web.List_2[Web.List[a.Cell].Y + e][Web.List[a.Cell].X + d]].CardIn;
                    null == b || 1 != a.StarsTab[g] || (CL[b].Used || !(CL[b].UseCounter <= 0)) && "NECROMANCER" != CL[b].Data.Name || CL[b].Data.DAdd || (1 == c && ("NECROMANCER" == CL[b].Data.Name ? a.Blood.length > 0 ? MD.AcumulatedPower *= 2 * a.AddedNumber : MD.AcumulatedPower *= a.AddedNumber : (a.Blood.length > 0 ? CL[b].AddedNumber *= 2 * a.AddedNumber : CL[b].AddedNumber *= a.AddedNumber, CL[b].SkillText = CL[b].Skill + CL[b].AddedNumber)), 2 == c && ("NECROMANCER" == CL[b].Data.Name ? a.Blood.length > 0 ? MD.AcumulatedPower += 2 * a.AddedNumber : MD.AcumulatedPower += a.AddedNumber : (a.Blood.length > 0 ? CL[b].AddedNumber += 2 * a.AddedNumber : CL[b].AddedNumber += a.AddedNumber, CL[b].SkillText = CL[b].Skill + CL[b].AddedNumber)), 3 == c && "NECROMANCER" != CL[b].Data.Name && f.push(b), 3 == c || (CL[b].Merged = !0))
                }
                g++
            } if (3 == c) return f;
    a.Merged = !1, MD.Blocade = !0
}

function ClearCards() {
    null != MD.WindowMove && (CL[MD.WindowMove].PX = Web.List[CL[MD.WindowMove].Cell].PX + 13.5, CL[MD.WindowMove].PY = Web.List[CL[MD.WindowMove].Cell].PY + 13.5, CL[MD.WindowMove].Draw = !1, CL[MD.WindowMove].Shadow = 0, CL[MD.WindowMove].Counter = 0, CL[MD.WindowMove].Scale = 1, CL[MD.WindowMove].PX_2 = 0, CL[MD.WindowMove].PY_2 = 0, MD.WindowMove = null, MD.Cell = null), MD.AddCards = [null, null]
}

function AutoPlayClear() {
    AutoPS = [], MD.AutoCard = 0, MD.FullHarvest = !1, MD.AutoPlay = !1
}

function RestartGame(c) {
    if (c) {
        for (var b = MD.SoulPower - 5, a = 0; a < CL.length; a++) null != CL[a] && (CL[a].Start_Stars_Patern < 2 ? b += CL[a].Level : b += 5, MD.CardsSacrificed++);
        MD.CardsSacrificed--;
        var d = MD.CardCreated,
            e = MD.CardsSacrificed,
            f = MD.CardsMerge,
            g = MD.MaxBuiltUp,
            h = MD.Restarts,
            i = MD.Harvests
    }
    MD = JSON.parse(JSON.stringify(SaveInfo)), (navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad|Android|Touch/i)) && (MD.Mobile = 1);
    for (var a = 0; a < CL.length; a++) null != CL[a] && DeleteCard(a, 0);
    CreateCard(0);
    for (var a = 0; a < Web.List.length; a++) Web.Unlock[a] ? Web.List[a].Unlock = !1 : Web.List[a].Unlock = !0;
    MD.CardsOnBoard = 1, AutoPlayClear(), CoilCheck(), PixelRatio(), CostH(), c ? (MD.CardCreated = d, MD.CardsSacrificed = e, MD.CardsMerge = f, MD.MaxBuiltUp = g, MD.Harvests = i, MD.Restarts = h + 1, MD.SoulPower += b) : MD.SoulPower = 0
}

function ButtonDraw() {
    for (var a = 0; a < Buttons[MD.Mobile].length; a++) ctx.save(), ctx.translate(Buttons[MD.Mobile][a].PX * MD.PxW, Buttons[MD.Mobile][a].PY * MD.PxH), ctx.beginPath(), ctx.strokeStyle = "white", ctx.lineWidth = 2 * MD.PxW, ctx.rect(0, 0, Buttons[MD.Mobile][a].Width * MD.PxW, Buttons[MD.Mobile][a].Height * MD.PxH), ctx.fillStyle = "Black", ctx.fill(), 3 != a && Buttons[MD.Mobile][a].MouseOn && rectDrawer(2, "red", -4, -4, 8 + Buttons[MD.Mobile][a].Width, 8 + Buttons[MD.Mobile][a].Height), Buttons[MD.Mobile][a].Clicked && rectDrawer(2, "red", 0, 0, Buttons[MD.Mobile][a].Width, Buttons[MD.Mobile][a].Height), 3 != a && ctx.stroke(), ctx.closePath(), 4 == a && (MD.MobileWork ? (rectDrawer(4, "red", 5, 5, Buttons[MD.Mobile][a].Width - 10, Buttons[MD.Mobile][a].Height - 10), TextDrawer(["使用卡牌"], 12, Buttons[MD.Mobile][a].Width / 2, 65)) : TextDrawer(["移动卡牌"], 4, Buttons[MD.Mobile][a].Width / 2, 63)), a < 3 && (MD.Cost[a] ? (TextDrawer(["等级 " + cinTRoman(Buttons[MD.Mobile][a].Rang + 1) + " 卡牌"], 8, Buttons[MD.Mobile][a].Width / 2, 40), MD.Cost[a] <= MD.Power ? TextDrawer([MD.Cost[a]], 4, Buttons[MD.Mobile][a].Width / 2, 80) : TextDrawer([MD.Cost[a]], 400, Buttons[MD.Mobile][a].Width / 2, 80)) : TextDrawer(["最大"], 4, Buttons[MD.Mobile][a].Width / 2, 63)), a < 3 ? 2 == a ? TextDrawer([cinTRoman(MD.Ranks[a][0] + MD.CoilNum)], 3, Buttons[MD.Mobile][a].Width / 2, 5) : TextDrawer([cinTRoman(MD.Ranks[a][0])], 3, Buttons[MD.Mobile][a].Width / 2, 5) : MD.RestartCounter > 0 && 3 == a && TextDrawer(["!" + MD.RestartCounter + "!"], 11, Buttons[MD.Mobile][a].Width / 2, 50), ctx.restore()
}

function PixelDraw(a, d, b) {
    ctx.save(), ctx.beginPath(), ctx.translate(a.PX * MD.PxW, a.PY * MD.PxH);
    var c = [];
    for (a.F.replace(/./g, a => {
            z = a.charCodeAt(), c.push(7 & z), c.push(z >> 3 & 7)
        }), j = 0; j < a.S; j++)
        for (i = 0; i < a.S; i++) c[j * a.S + i] && (ctx.save(), d ? 0 == b || 2 == b ? (ctx.translate(Math.floor(2 * Math.random()) * MD.PxW, Math.floor(2 * Math.random()) * MD.PxH), ctx.fillStyle = "#" + CD.Colors_Hero.substr(3 * (c[j * a.S + i] - 1), 3)) : 1 == b ? ctx.fillStyle = "#" + CD.Colors.substr(3 * (c[j * a.S + i] - 1), 3) : 100 == b ? ctx.fillStyle = "Black" : 101 == b ? ctx.fillStyle = "White" : ctx.fillStyle = "#" + CD.Colors.substr(3 * (c[j * a.S + i] - 1), 3) : ctx.fillStyle = "#" + CD.Colors.substr(3 * (c[j * a.S + i] - 1), 3), ctx.fillRect((i * a.M - .5) * MD.PxW, (j * a.M - .5) * MD.PxH, (a.M + 1) * MD.PxW, (a.M + 1) * MD.PxH), ctx.restore());
    ctx.closePath(), ctx.restore()
}

function rectDrawer(a, b, c, d, e, f) {
    ctx.beginPath(), ctx.lineWidth = a * MD.PxW, ctx.strokeStyle = b, ctx.rect(c * MD.PxW, d * MD.PxH, e * MD.PxW, f * MD.PxH), ctx.stroke(), ctx.closePath()
}

function fillrectDrawer(a, b, c, d, e, f, g) {
    ctx.strokeStyle = b, ctx.lineWidth = a * MD.PxW, ctx.rect(c * MD.PxW, d * MD.PxH, e * MD.PxW, f * MD.PxH), ctx.fillStyle = g, ctx.stroke(), ctx.fill()
}

function TextDrawer(c, g, e, f) {
    for (var a = TextData[g], b = 0; b < c.length; b++) {
        if (ctx.save(), b > 0) var d = f + a.Enter * b;
        else var d = f;
        ctx.font = a.Spec + " " + a.Size * MD.PxW + "px Courier New", ctx.textAlign = "center", a.SColor && (ctx.lineWidth = a.LWidth * MD.PxW, ctx.strokeStyle = a.SColor, ctx.lineJoin = a.LineJoin, ctx.strokeText(c[b], e * MD.PxW, (d + a.SPY) * MD.PxH)), ctx.fillStyle = a.Color, ctx.fillText(c[b], e * MD.PxW, d * MD.PxH), ctx.restore()
    }
}

function AbD(a) {
    TextDrawer(["能力"], 10, 340, 470), TextDrawer(a, 6, 340, 510)
}

function cinTRoman(c) {
    var a = {
            M: 1e3,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        d = "";
    for (var b of Object.keys(a)) {
        var e = Math.floor(c / a[b]);
        c -= e * a[b], d += b.repeat(e)
    }
    return d
}

function CoilCheck() {}

function UpdateScreen() {
    MainDraw(), ctx.closePath(), ctx.restore(), TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen)
}

function NoUpdateScreen() {
    MainDraw(), TextDrawer(["点击屏幕继续游戏"], 3, 960, 1050), ctx.closePath(), ctx.restore()
}

function MainDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.save(), ctx.beginPath(), MD.RestartCounter > 0 && (0 == MD.RestartCounter2 ? MD.RestartCounter = 0 : MD.RestartCounter2--), MD.RestartCounter_2 > 0 && (0 == MD.RestartCounter2_2 ? (MD.RestartCounter_2--, MD.RestartCounter2_2 = 80) : MD.RestartCounter2_2--), ctx.translate(MD.DiffX, MD.DiffY), ctx.rect(0, 0, MD.Width, MD.Height), ctx.clip(), ctx.save(), fillrectDrawer(1, "Black", 0, 0, 1920, 1080, "Black"), rectDrawer(2, "White", 0, 0, 1920, 1080), rectDrawer(2, "White", 5, 5, 1910, 1070), ctx.restore(), WebDraw(), TextDrawer(["死亡能量"], 5, 1272, 55), TextDrawer([MD.Power], 5, 1272, 95), null != MD.WindowMove ? AbD(CL[MD.WindowMove].Data.Text) : null != MD.MouseONCard && (MD.MouseONCardCounter[0] <= 0 ? AbD(CL[MD.MouseONCard].Data.Text) : MD.MouseONCardCounter[0]--), TextDrawer(["积累的能量"], 8, 998, 59), 1 == MD.AcumulatedPower ? MD.SoulPower > 0 ? TextDrawer([MD.AcumulatedPower * MD.SoulPower], 8, 998, 90) : TextDrawer([MD.AcumulatedPower], 8, 998, 90) : MD.SoulPower > 0 ? TextDrawer([MD.AcumulatedPower * MD.SoulPower], 100, 998, 90) : TextDrawer([MD.AcumulatedPower], 100, 998, 90), TextDrawer(["灵魂能量"], 8, 1547, 59), TextDrawer([MD.SoulPower], 8, 1547, 90), TextDrawer(["死灵法师放置"], 9, 340, 70), TextDrawer(["最大积累"], 8, 190, 160), TextDrawer([MD.MaxBuiltUp], 8, 190, 190), TextDrawer(["召唤卡牌"], 8, 190, 260), TextDrawer([MD.CardCreated], 8, 190, 290), TextDrawer(["牺牲的卡牌"], 8, 490, 160), TextDrawer([MD.CardsSacrificed], 8, 490, 190), TextDrawer(["合并卡牌"], 8, 490, 260), TextDrawer([MD.CardsMerge], 8, 490, 290), TextDrawer(["鲜血仪式"], 8, 190, 360), TextDrawer([MD.Restarts], 8, 190, 390), TextDrawer(["收割"], 8, 490, 360), TextDrawer([MD.Harvests], 8, 490, 390), TextDrawer([MD.AppVersion], "Ver", 50, 1050), MD.Blocade && 0 == MD.Moves && (ctx.save(), rectDrawer(3, "Red", 684, 113, 1178, 914), ctx.restore(), ctx.save(), rectDrawer(1, "Red", 680, 109, 1186, 922), ctx.restore()), ButtonDraw();
    for (var a = 0; a < CL.length; a++) null == CL[a] || CL[a].Draw || CL[a].Function();
    for (var a = 0; a < CLDead.length; a++) null != CLDead[a] && (CLDead[a].Function(), CLDead[a].MadeCounter <= 0 && (CLDead[a] = null));
    null != MD.WindowMove && CL[MD.WindowMove].Function()
}

function onPause() {
    ClearCards(), MD.AutoPlay || (cancelAnimationFrame(TimeInter.UpdateScreen), NoUpdateScreen())
}

function onResume() {
    cancelAnimationFrame(TimeInter.UpdateScreen), TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen)
}

function backButton() {
    return !1
}

function MTUpEnd() {
    ButtonHitBox(2), null != MD.WindowMove && (MD.LXY[0] = CL[MD.WindowMove].PX, MD.LXY[1] = CL[MD.WindowMove].PY, CL[MD.WindowMove].Draw = !1, CL[MD.WindowMove].Shadow = 2, CL[MD.WindowMove].Counter = 5, null != MD.Cell ? (Web.List[CL[MD.WindowMove].Cell].CardIn = null, CL[MD.WindowMove].PX_2_M = (CL[MD.WindowMove].PX - Web.List[MD.Cell].PX + 13.5) / CL[MD.WindowMove].Counter, CL[MD.WindowMove].PY_2_M = (CL[MD.WindowMove].PY - Web.List[MD.Cell].PY + 13.5) / CL[MD.WindowMove].Counter, CL[MD.WindowMove].Cell = MD.Cell, Web.List[CL[MD.WindowMove].Cell].CardIn = MD.WindowMove, MD.WindowMove = null, AutoPlayClear()) : (CL[MD.WindowMove].PX = Web.List[CL[MD.WindowMove].Cell].PX + 13.5, CL[MD.WindowMove].PY = Web.List[CL[MD.WindowMove].Cell].PY + 13.5, CL[MD.WindowMove].PX_2_M = 2.5, CL[MD.WindowMove].PY_2_M = 3, MD.WindowMove = null)), null == MD.AddCards[0] || MD.Blocade || 0 == CL[MD.AddCards[1]].Data.Spec || AddCards(), MD.Cell = null, MD.AddCards = [null, null], CardsHitBox(2);
    for (var a = 0; a < Buttons[MD.Mobile].length; a++) Buttons[MD.Mobile][a].Clicked = !1, MD.Mobile && (Buttons[MD.Mobile][a].MouseOn = !1)
}

function MTDownStart(b, a) {
    (0 != b.button || !a) && (MD.MobileWork || a) ? (MD.Mobile && ButtonHitBox(1), CardsHitBox(0), ClearCards()) : ((!MD.Blocade || MD.Moves > 0) && CardsHitBox(1), ButtonHitBox(1), null != MD.WindowMove && BoardHitBox())
}

function MTMove(b) {
    if (MD.AddCards = [null, null], CardsHitBox(2), null != MD.WindowMove) {
        var a = CL[MD.WindowMove];
        MD.TouchX > MD.DiffX && MD.TouchY > MD.DiffY && MD.TouchX < MD.DiffX + MD.Width && MD.TouchY < MD.DiffY + MD.Height ? (a.PX = (MD.TouchX - MD.DiffX) / MD.PxW - a.MPX, a.PY = (MD.TouchY - MD.DiffY) / MD.PxH - a.MPY, MD.Cell = null, BoardHitBox()) : ClearCards()
    }
    null == MD.WindowMove && ButtonHitBox(0)
}

function ButtonHitBox(b) {
    if (!MD.AutoPlay)
        for (var a = 0; a < Buttons[MD.Mobile].length; a++) MD.TouchX > MD.DiffX + Buttons[MD.Mobile][a].PX * MD.PxW && MD.TouchY > MD.DiffY + Buttons[MD.Mobile][a].PY * MD.PxH && MD.TouchX < MD.DiffX + Buttons[MD.Mobile][a].PX * MD.PxW + Buttons[MD.Mobile][a].Width * MD.PxW && MD.TouchY < MD.DiffY + Buttons[MD.Mobile][a].PY * MD.PxH + Buttons[MD.Mobile][a].Height * MD.PxH ? ((0 == b || MD.Mobile) && (Buttons[MD.Mobile][a].MouseOn = !0), 1 == b && (Buttons[MD.Mobile][a].Clicked = !0), 2 == b && Buttons[MD.Mobile][a].Clicked && (a < 3 ? BuyCard(a) : 4 == a ? MD.Blocade || (MD.MobileWork ? MD.MobileWork = !1 : MD.MobileWork = !0) : (MD.RestartCounter++, MD.RestartCounter2 = 50, MD.RestartCounter > 3 && (RestartGame(), MD.RestartCounter = 0)))) : (Buttons[MD.Mobile][a].MouseOn = !1, Buttons[MD.Mobile][a].Clicked = !1)
}

function BoardHitBox() {
    for (var a = 0; a < Web.List.length; a++) Web.List[a].Unlock && MD.TouchX > MD.DiffX + Web.List[a].PX * MD.PxW && MD.TouchY > MD.DiffY + Web.List[a].PY * MD.PxH && MD.TouchX < MD.DiffX + Web.List[a].PX * MD.PxW + 168 * MD.PxW && MD.TouchY < MD.DiffY + Web.List[a].PY * MD.PxH + 228 * MD.PxH && (null == Web.List[a].CardIn || a == CL[MD.WindowMove].Cell ? MD.Cell = a : CL[Web.List[a].CardIn].Data.Name != CL[MD.WindowMove].Data.Name || CL[Web.List[a].CardIn].Level != CL[MD.WindowMove].Level || CL[Web.List[a].CardIn].Used || CL[Web.List[a].CardIn].Merged || CL[MD.WindowMove].Merged ? "NECROMANCER" == CL[Web.List[a].CardIn].Data.Name && 0 != CL[MD.WindowMove].Data.Spec && (MD.AddCards = [CL[Web.List[a].CardIn].Data.Name, MD.WindowMove, a]) : MD.AddCards = [Web.List[a].CardIn, MD.WindowMove, a])
}

function CardsHitBox(c) {
    for (var d = !1, a = 0; a < CL.length; a++)
        if (null != CL[a] && (CL[a].MouseON = !1, MD.TouchX > MD.DiffX + CL[a].PX * MD.PxW && MD.TouchY > MD.DiffY + CL[a].PY * MD.PxH && MD.TouchX < MD.DiffX + CL[a].PX * MD.PxW + 140 * MD.PxW && MD.TouchY < MD.DiffY + CL[a].PY * MD.PxH + 200 * MD.PxH && (d = !0, null == MD.WindowMove))) {
            if (0 != c || CL[a].Used || 3 == CL[a].Data.SkillSpec) {
                if (1 != c || CL[a].Used || MD.Blocade && !(MD.Moves > 0) || MD.AutoPlay) 2 == c && (CL[a].MouseON = !0, MD.MouseONCard = a, MD.MouseONCardCounter[1] != a && (MD.MouseONCardCounter[0] = 6, MD.MouseONCardCounter[1] = a));
                else {
                    MD.WindowMove = a;
                    var b = CL[a];
                    b.Draw = !0, b.MPX = Math.abs(b.PX - (MD.TouchX - MD.DiffX) / MD.PxW), b.MPY = Math.abs(b.PY - (MD.TouchY - MD.DiffY) / MD.PxH)
                }
            } else 1 != CL[a].Data.SkillSpec && MD.AutoPlay || SpecFunction(CL[a])
        } if (d || (MD.MouseONCard = null), MD.Mobile && 2 == c)
        for (var a = 0; a < CL.length; a++) null != CL[a] && (CL[a].MouseON = !1, MD.MouseONCard = null)
}
canvas.width = windowWidth * pixelRatio, canvas.height = windowHeight * pixelRatio, canvas.style.width = windowWidth + "px", canvas.style.height = windowHeight + "px", window.addEventListener("load", function () {
    LoadEngine(), navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad|Android|Touch/i) ? (MD.Mobile = 1, window.addEventListener("touchmove", function (a) {
        a.preventDefault(), 1 == a.targetTouches.length && (MD.TouchX = a.targetTouches[0].pageX * pixelRatio, MD.TouchY = a.targetTouches[0].pageY * pixelRatio, MTMove(a))
    }, {
        passive: !1
    }), window.addEventListener("touchstart", function (a) {
        1 == a.targetTouches.length && (MD.TouchX = a.targetTouches[0].pageX * pixelRatio, MD.TouchY = a.targetTouches[0].pageY * pixelRatio, MTDownStart(a, !1))
    }, !1), window.addEventListener("touchend", function (a) {
        0 == a.targetTouches.length && MTUpEnd()
    }, !1)) : (window.oncontextmenu = function (a) {
        return !1
    }, window.addEventListener("mousemove", function (a) {
        MD.TouchX = a.clientX * pixelRatio, MD.TouchY = a.clientY * pixelRatio, MTMove(a)
    }, !1), window.addEventListener("mousedown", function (a) {
        MD.TouchX = a.clientX * pixelRatio, MD.TouchY = a.clientY * pixelRatio, MTDownStart(a, !0)
    }, !1), window.addEventListener("mouseup", function (a) {
        MTUpEnd()
    }, !1)), window.addEventListener("blur", onPause), window.addEventListener("focus", onResume)
}), window.addEventListener("resize", function (a) {
    clearTimeout(Resize), Resize = setTimeout(PixelRatio, 500)
})