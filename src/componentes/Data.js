import React from "react"

function cartaGC(){
	return {comidas:  {
						menuDelDia: "Nuestro menu diario ofrece tres alternativas, desde una pasta con su respectiva salsa, una proteina acompañada por guarnicion y un menu integramente vegetariano para que siempre tengas opciones a la hora de comer. Consulta con tu mozo los menus disponibles",
						desayunoMerienda:{
            tostadas: {
                ingredientes:["pan a elexion", "queso crema", "mermelada"],
                precio: 470, 
                vegano: false,
                celiaco: false,
            },
            ensaladaDeFrutas: {
                ingredientes:["frutas de estacion", "opcional agregado de jugo de naranja"],
                precio: 510, 
                vegano: true,
                celiaco: true,
            },
            bowlVegano: {
                ingredientes:["cereales", "avena", "frutos secos", "leche de almendras"],
                precio: 570, 
                vegano: true,
                celiaco: false,
            },
            bowlDeCereales:{
                ingredientes:["avena", "cereales", "frutos secos", "yogurt de la casa"],
                precio: 770, 
                vegano: false,
                celiaco: false,
            },
            revuelto:{
                ingredientes:["huevos rotos", "toston de pan de campo"],
                precio: 480, 
                vegano: false,
                celiaco: true,
            },
            revueltoFull: {
                ingredientes:["huevos rotos", "jamon", "queso", "toston de pan de campo"],
                precio: 520, 
                vegano: false,
                celiaco: false,
            },
            revueltoHeavy: {
                ingredientes:["huevos rotos", "panceta dorada", "toston de pan de campo"],
                precio: 530, 
                vegano: false,
                celiaco: false,
            },
            americanBreakfast: {
                ingredientes:["panceta dorada", "tomates asados", "huevo a la plancha", "pan de molde"],
                precio: 830, 
                vegano: false,
                celiaco: true,
            },
            avocadoToast: {
                precio: 690, 
                vegano: false,
                celiaco: false,
                ingredientes:["pasta de palta", "huevo poché", "pan de molde"],
            },
            classicOmelette: {
                ingredientes:["omelette", "jamon", "queso"],
                precio: 670, 
                vegano: false,
                celiaco: false,
            },
            omeletteCapresse: {
                ingredientes:["omelette", "tomate", "queso", "albahaca"],
                precio: 670, 
                vegano: false,
                celiaco: false,
            }
        },
        nuestraPasteleria: {
            descripcion: "En el afán de presentar productos frescos, rotamos constantemente nuestras preparaciones. Consulte a su mozo cuales se encuentran disponibles.",
            productos: ["lemon pie", "selva negra", "choco cake", "tiramisú", "marquise de chocolate", "cheesecake", "kinder bomb", "red velvet", "carrot cake"],
            sinTACC: ["tiramisú", "chocotorta", "brownie"],
            precio: 570 + "/" + 600, 
            vegano: false,
            celiaco: true,
        },
        tostados: {
            clasicos: {
                descripcion: "presentacion en pan de miga",
                cJamonQueso: {
                    ingredientes:["jamon", "queso"],
                    precio: 580, 
                    vegano: false,
                    celiaco: false,
                },
                cPrimavera: {
                    ingredientes:["jamon", "queso", "tomate", "lechuga"],
                    precio: 620, 
                    vegano: false,
                    celiaco: false,
                },
                quesoTomate: {
                    ingredientes:["provolone", "tomate"],
                    precio: 620, 
                    vegano: false,
                    celiaco: false,
                }
            },
            deLaCasa: {
                descripcion: "presentacion en pan de molde",
                jamonQueso: {
                    ingredientes:["jamon", "queso"],
                    precio: 660, 
                    vegano: false,
                    celiaco: false,
                },
                primavera: {
                    ingredientes:["jamon", "queso", "tomate", "lechuga"],
                    precio: 660, 
                    vegano: false,
                    celiaco: false,
                },
                americano: {
                    ingredientes:["panceta", "queso chedar"],
                    precio: 700, 
                    vegano: false,
                    celiaco: false,
                },
                capresse: {
                    ingredientes:["queso", "tomate", "albahaca"],
                    precio: 700, 
                    vegano: false,
                    celiaco: false,
                },
                crudo: {
                    ingredientes:["jamon crudo", "queso"],
                    precio: 710, 
                    vegano: false,
                    celiaco: false,
                }
            }
        },
        croassaint:{
            clasico: {
                ingredientes:["croassaint"],
                precio: 570, 
                vegano: false,
                celiaco: false,
            },
            conJamonQueso: {
                ingredientes:["croassaint", "jamon", "queso"],
                precio: 615, 
                vegano: false,
                celiaco: false,
            },
            conDDL: {
                ingredientes:["croassaint", "dulce de leche"],
                precio: 615, 
                vegano: false,
                celiaco: false,
            }
        },  
        pasteleriaClasica: {
            budinDeLimon: {
                ingredientes:["budin de limon"],
                precio: 350, 
                vegano: false,
                celiaco: false,
            },
            budinDeBanana: {
                ingredientes:["budin de banana"],
                precio: 350, 
                vegano: false,
                celiaco: false,
            },
            alfajorDeChocolate: {
                ingredientes:["alfajor de chocolate"],
                precio: 300, 
                vegano: false,
                celiaco: false,
            },
            alfajorDeMaicena: {
                ingredientes:["alfajor de maicena"],
                precio: 280, 
                vegano: false,
                celiaco: true,
            }
        },
        cookies: {
            vainillaChocoChips: {
                ingredientes:["vainilla", "chips de chocolate"],
                precio: 230, 
                vegano: false,
                celiaco: false,
            },
            chocolateCookie: {
                ingredientes:["chocolate", "chips de chocolate blanco"],
                precio: 230, 
                vegano: false,
                celiaco: false,
            },
            veganCookie: {
                ingredientes:["avena", "manzana", "canela"],
                precio: 230, 
                vegano: true,
                celiaco: false,
            }
        },
        cupcakes: {
            vainillaCupcake: {
                ingredientes:["muffin de vainilla", "chips de chocolate"],
                precio: 320, 
                vegano: false,
                celiaco: false,
            },
            fullChocolate: {
                ingredientes:["muffin de chocolate", "chips de chocolate blanco"],
                precio: 320, 
                vegano: false,
                celiaco: false,
            },
            medialunasDeLaCasa:{
                ingredientes:["medialuna"],
                tipo:["dulce", "salada"],
                opcional: "jamon y queso",
                precio: 100, 
                vegano: false,
                celiaco: true, 
            },
            alfajoresSinGluten:{
                ingredientes: "consultar opciones",
                precio: 310, 
                vegano: false,
                celiaco: true, 
            },
            galletasChipChocolateSinGluten: {
                ingredientes:["galletas con chips de chotolate sin gluten"],
                precio: 310, 
                vegano: false,
                celiaco: true, 
            }
        },
        espacioSaludable: {
            mananaTarde: {
                classicCombo: {
                    ingredientes:["cortado", ["leche descremada", "leche de almendras"],    "tostada integral", "huevos rotos", "cortes de frutas frescas"],
                    precio: 870, 
                    vegano: false,
                    celiaco: false, 
                },
                bowlFrutal: {
                    ingredientes:["yogurt", "avena", "frutas frescas", "uvas pasas", "frutos    secos"],
                    precio: 630, 
                    vegano: false,
                    celiaco: false, 
                },
                mediterraneo: {
                    ingredientes:["jugo de naranja", ["tostada integral", "palta", "tomates     cherry", "huevo poche"]],
                    precio: 810, 
                    vegano: false,
                    celiaco: false, 
                }
            },
            mediodiaNoche: {
                lowCarb: {
                    ingredientes:["medallon de lomo a la plancha", "verduras asadas",   "tomates cherry", "mix de hojas verdes"],
                    precio: 1100, 
                    vegano: false,
                    celiaco: false, 
                },
                proteinSalad: {
                    ingredientes:["mix de hojas verdes", "tomates cherry", "lentejas",  "pollo", "huevo duro", "arroz yamani", "zanahoria", "frutos secos"],
                    precio: 900, 
                    vegano: false,
                    celiaco: false, 
                },
                preWork: {
                    ingredientes:["wok de pollo", "arroz yamani", "vegetales", "salsa de    soja"],
                    precio: 900, 
                    vegano: false,
                    celiaco: false, 
                }
            }
        },
        especialidades: {
            pastas:{
                sorrentinosDeVerdura: {
                    ingredientes:["sorrentinos de verdura"],
                    precio: 1030, 
                    vegano: false,
                    celiaco: false,
                },
                cintasAlHuevo: {
                    ingredientes:["cintas al huevo"],
                    precio: 900, 
                    vegano: false,
                    celiaco: false,
                },
                salsas: {
                    ingredientes:["fileto", "crema", "hongos", "bolognesa"],
                    precio: "gratis", 
                    vegano: true,
                    celiaco: false,
                    }
            }, 
            carnes: {
                    bifeDeChorizoConGremolatta: {
                        ingredientes:["bife de chorizo", ["papas fritas", "pure de papas",  "pure de calabaza", "mixto", "ensalada mixta"]],
                        precio: 1440, 
                        vegano: false,
                        celiaco: true,
                    },
                    medallonDeLomoAlVinoTinto: {
                        ingredientes:["medallon de lomo", "vino tinto", "papa aplastada a la    chapa"],
                        precio: 1570, 
                        vegano: false,
                        celiaco: false,
                    },
                    pechugaGrille:{
                        ingredientes:["pechuga grille", ["papas fritas", "pure de papas",   "pure de calabaza", "pure mixto", "ensalada mixta"], ["con limon",    "con crema de puerros"]],
                        precio: 1270, 
                        vegano: false,
                        celiaco: true,
                    }
            },
            pescas: {
                    salmonRosado: {
                        ingredientes:["salmon rosado", "crema citrica", "vegetales asados"],
                        precio: 1700, 
                        vegano: false,
                        celiaco: true,
                    }
            },
            salteados: {
                    wokDePollo: {
                        ingredientes:["salteado de pollo", "arroz yamani", "vegetales",     "salsa de soja"],
                        precio: 1170, 
                        vegano: false,
                        celiaco: true,
                    },
                    wokDeLangostinos:{
                        ingredientes:["salteado de langostinos", "arroz yamani", "vegetales",   "salsa de soja"],
                        precio: 1320, 
                        vegano: false,
                        celiaco: true,
                    },
                    chowMainVegetariano: {
                        ingredientes:["salteado de vegetales", "fideos de arroz", "salsa de     soja"],
                        precio: 1170, 
                        vegano: true,
                        celiaco: true,
                    }
            },
            ensaladas: {
                    caesar: {
                        ingredientes:["mix de hojas verdes", "pollo grillado", "croutons",  "aderezo caesar", "lonjas de queso sardo"],
                        precio: 820, 
                        vegano: false,
                        celiaco: false,
                    },
                    lomitosDeAtun: {
                        ingredientes:["mix de hojas verdes", "atun en lomitos", "zanahoria",    "arroz yamani","huevo duro", "tomates cherrys", "vinagreta de limon"],
                        precio: 830, 
                        vegano: false,
                        celiaco: false,
                    },
                    pumpkin: {
                        ingredientes:["mix de hojas verdes", "calabaza grillada", "queso    azul", "tomates cherrys", "frutos secos", "reduccion de aceto",    "miel"],
                        precio: 830, 
                        vegano: false,
                        celiaco: false,
                    },
                    yamani: {
                        ingredientes:["mix de hojas verdes", "arroz yamani", "cherrys   salteados", "escamas de sardo", "zanahoria", "salsa de soja",     "aderezo de hummus"],
                        precio: 830, 
                        vegano: false,
                        celiaco: false,
                    },
                    chicken: {
                        ingredientes:["mix de hojas verdes", "escamas de sardo", "tomate    cherry", "cebolla morada confitada", "pollo frito", "vinagreta de  mostaza dulce"],
                        precio: 850, 
                        vegano: false,
                        celiaco: false,
                    },
                    proteinSalad: {
                        ingredientes:["mix de hojas verdes", " cherrys", "lentejas", "pollo",   "huevo duro", "arroz yamani", "zanahoria", "frutos secos"],
                        precio: 860, 
                        vegano: false,
                        celiaco: false,
                    },
                    scampi: {
                        ingredientes:["mix de hojas verdes", "rucula", "tomates cherry",    "palta", "langostinos salteados", "croutons", "vinagreta de limon"],
                        precio: 860, 
                        vegano: false,
                        celiaco: false,
                    },
                    salmonSalad: {
                        ingredientes:["mix de hojas verdes", "rucula", "tomates cherry",    "palta", "gravlax", "frutos secos", "vinagreta de limon"],
                        precio: 930, 
                        vegano: false,
                        celiaco: false,
                    },
                    armalaATuGusto: {
                        descripcion: "Hasta 4 ingredientes",
                        ingredientes:["mix de hojas verdes", "rucula", "tomates",   "zanahoria", "huevo duro", "cebolla morada confitada", "aderezo   favorito"],
                        precio: 800, 
                        vegano: false,
                        celiaco: false,
                    }
            },
            tapeos: {
                    papasGC: {
                        ingredientes:["papas fritas", "cheddar", "salchichas", "queso crema",   "verdeo"],
                        precio: 660, 
                        vegano: false,
                        celiaco: false,
                    },
                    papasClasicas: {
                        ingredientes:["papas baston"],
                        precio: 590, 
                        vegano: false,
                        celiaco: false,
                    },
                    papasConAlioli: {
                        ingredientes:["papas baston", "emulsion de ajo y aceite"],
                        precio: 720, 
                        vegano: false,
                        celiaco: false,
                    },
                    polloFrito: {
                        ingredientes:["basatones de pollo rebozados", ["barbacoa casera",   "salsa de mostaza y miel"]],
                        precio: 660, 
                        vegano: false,
                        celiaco: false,
                    },
                    rabas: {
                        ingredientes:["aros de calamar apanados", "limon", "alioli"],
                        precio: 920, 
                        vegano: false,
                        celiaco: false,
                    }
            },
            tortillas: {
                tClasica: {
                    ingredientes:["papas", "huevos"],
                    precio: 790, 
                    vegano: false,
                    celiaco: false, 
                },
                espanola:{
                    ingredientes:["papas", "cebolla", "huevos", "chorizo español", "alioli"],
                    precio: 920, 
                    vegano: false,
                    celiaco: false, 
                }
            },
            milanesas: {
                simple: {
                    ingredientes:["milanesa"],
                    precio: 940, 
                    tipo: ["ternera", "pollo", "cerdo", "calabaza", "berenjena", "soja", "merluza"],
                    guarnicion: ["papas fritas", "pure de papas", "pure de calabaza", "pure mixto", "ensalada mixta"],
                    vegano: false,
                    celiaco: false, 
                },
                napolitana: {
                    ingredientes:["milanesa", "salsa", "jamon", "queso", "tomates en rodajas"],
                    precio: 1150, 
                    tipo: ["ternera", "pollo", "cerdo", "calabaza", "berenjena", "soja", "merluza"],
                    guarnicion: ["papas fritas", "pure de papas", "pure de calabaza", "pure mixto", "ensalada mixta"],
                    vegano: false,
                    celiaco: false, 
                },
                aCaballo: {
                    ingredientes:["milanesa", "dos huevos a la plancha"],
                    precio: 1100, 
                    tipo: ["ternera", "pollo", "cerdo", "calabaza", "berenjena", "soja", "merluza"],
                    guarnicion: ["papas fritas", "pure de papas", "pure de calabaza", "pure mixto", "ensalada mixta"],
                    vegano: false,
                    celiaco: false, 
                },
                fugazzeta: {
                    ingredientes:["milanesa", "cebolla confitada", "queso"],
                    precio: 1170, 
                    tipo: ["ternera", "pollo", "cerdo", "calabaza", "berenjena", "soja", "merluza"],
                    guarnicion: ["papas fritas", "pure de papas", "pure de calabaza", "pure mixto", "ensalada mixta"],
                    vegano: false,
                    celiaco: false, 
                }
            },
            pizzas: {
                muzzarella: {
                    ingredientes:["masa", "muzzarella"],
                    precio4: 800, 
                    precio8: 1020,
                    vegano: false,
                    celiaco: false, 
                },
                napolitana: {
                    ingredientes:["masa", "salsa", "jamon", "muzzarella", "aceite de ajo", "tomate en rodajas"],
                    precio4: 870,
                    precio8: 1100, 
                    vegano: false,
                    celiaco: false, 
                },
                fugazzeta: {
                    ingredientes:["masa", "salsa", "cebolla confitada", "muzzarella"],
                    precio4: 870,
                    precio8: 1100, 
                    vegano: false,
                    celiaco: false, 
                },
                cuatroQuesos: {
                    ingredientes:["masa", "salsa", "muzzarella", "tybo", "queso azul", "sardo"],
                    precio4: 870,
                    precio8: 1100, 
                    vegano: false,
                    celiaco: false, 
                },
                capresse: {
                    ingredientes:["masa", "salsa", "muzzarella", "tomates en rodajas", "albahaca"],
                    precio4: 870,
                    precio8: 1100, 
                    vegano: false,
                    celiaco: false, 
                },
                patagonica: {
                    ingredientes:["masa", "salsa", "rucula", "jamon crudo", "pesto de tomates secos"],
                    precio: 320, 
                    vegano: false,
                    celiaco: false, 
                }
            },
            sandwicheriaCaliente: {
                comentario: "acompañada con guarnicion de papas fritas",
                burgerGC: {
                    ingredientes:["pan de papa", "doble medallon de carne", "panceta", "cheddar", "cebolla"],
                    precio: 1050, 
                    vegano: false,
                    celiaco: false, 
                },
                burgerCompleta: {
                    ingredientes:["pan de papa", "doble medallon de carne", "jamon", "queso", "tomate", "lechuga", "huevo a la plancha"],
                    precio: 1030, 
                    vegano: false,
                    celiaco: false, 
                },
                desmechadoGC: {
                    ingredientes:["pan baguetin", "ternera desmechada", "queso", "pasta de palta", "tomate en rodajas"],
                    precio: 1150, 
                    vegano: false,
                    celiaco: false, 
                },
                desmechadoQueso: {
                    ingredientes:["pan baguetin", "ternera desmechada", "cebolla confitada", "queso azul"],
                    precio: 1120, 
                    vegano: false,
                    celiaco: false, 
                },
                polloEntrePanes: {
                    ingredientes:["pan baguetin", "pòllo desmenuzado", "cebolla confitada", "morrones asados"],
                    precio: 1120, 
                    vegano: false,
                    celiaco: false, 
                },
                sandwichVegetariano: {
                    ingredientes:["pan baguetin", "salteado de vegetales", "huevo revuelto", "mayonesa de zanahoria", "reduccion de aceto"],
                    precio: 1080, 
                    vegano: false,
                    celiaco: false, 
                },
                veganSandwich: {
                    ingredientes:["pan de campo tostado con oliva", "rucula", "pasta de palta", "tomates cherry salteados", "zanahoria", "salsa de soja"],
                    precio: 10800, 
                    vegano: true,
                    celiaco: false, 
                }
            },
            sandwicheriaFria: {
                atunEntrePanes: {
                    ingredientes:["pan de molde", "atun", "mayonesa", "zanahoria", "queso", "lechuga"],
                    precio: 900, 
                    vegano: false,
                    celiaco: false, 
                },
                clubSandwich: {
                    ingredientes:["pan de molde", "pollo desmechado", "queso", "jamon", "tomate", "lechuga", "mayonesa de zanahoria"],
                    precio: 930, 
                    vegano: false,
                    celiaco: false, 
                },
                crudoQueso: {
                    ingredientes:["pan baguetin", "jamon crudo", "queso", "rucula", "pesto de tomates secos"],
                    precio: 970, 
                    vegano: false,
                    celiaco: false, 
                }
            },
            postres: {
                flan: {
                    ingredientes:["flan", ["dulce de leche", "crema", "mixto"]],
                    precio: 400, 
                    vegano: false,
                    celiaco: false, 
                },
                dosBochasDeHelado: {
                    ingredientes:["dos bochas de helado", ["americana", "dulce de leche", "chocolate", "frutos del mosque"]],
                    precio: 360, 
                    vegano: false,
                    celiaco: false, 
                },
                tiramisu: {
                    ingredientes:["tiramisu"],
                    precio: 480, 
                    vegano: false,
                    celiaco: false, 
                }
            },
        }
    },
    bebidas: {
        cafeteria: {
            espresso:{
                corto: 200,
                mediano: 260,
                doble: 300,
            },
            americano: {
                descripcion: "espresso diluido",
                mediano: 260,
                doble: 300
            },
            cortadoMacchiato: {
                corto: 200,
                mediano: 260,
                doble: 300
            },
            cafeConLeche: {
                mediano: 260,
                doble: 300
            },
            lagrima: {
                mediana: 260,
                doble: 300
            },
            moka: {
                descripcion: "chocolate fundido en espresso, con leche",
                mediano: 300,
                doble: 340
            },
            cappuccino: {
                ingredientes:["leche", "espresso", "espuma de leche", "ralladura de chocolate", "canela"],
                precio: 490, 
                vegano: false,
                celiaco: true, 
            },
            irlandes: {
                ingredientes:["medida de whisky", "expresso"],
                precio: 480, 
                vegano: false,
                celiaco: false, 
            },
            submarino: {
                ingredientes:["leche caliente", "barrita de chocolate semiamargo"],
                precio: 440, 
                vegano: false,
                celiaco: true, 
            },
            chocolatada: {
                descripcion: ["fria", "caliente"],
                ingredientes:["leche", "nesquik"],
                precio: 340, 
                vegano: false,
                celiaco: true, 
            },
            adicionalLecheDeAlmendras: 200,
            adicionalCrema: 200,
            grandCentral: {
                ingredientes:["leche condensada", "nutella", "cafe", "leche", "crema", "ralladura de chocolate"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            ohKinder: {
                ingredientes:["chocolate kinder", "leche", "espresso"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            ddl4ever: {
                ingredientes:["dulce de leche fundido", "espresso", "leche"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            hazelnutBay: {
                ingredientes:["syrup de avellanas", "espresso", "leche"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            caramel: {
                ingredientes:["syrup de caramelo", "espresso", "leche"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            vainillaLatte: {
                ingredientes:["syrup de vainilla", "espresso", "leche"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            coconut: {
                ingredientes:["syrup de coco", "espresso", "leche", "coco rallado"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            sinCity: {
                ingredientes:["rodajas de lima", "naranja", "almibar", "cold brew"],
                precio: 460, 
                vegano: false,
                celiaco: true, 
            },
            chelsea: {
                ingredientes:["leche de almendras texturizada", "syrup de vainilla", "cold brew"],
                precio: 480, 
                vegano: false,
                celiaco: true, 
            }
        },
        teInfusiones: {
            brand: "Tealosophy by Ines Berton.",
            descripcion:"Blends especialmente seleccionados para Grand Central.",
            blendGranCentral: {
                ingredientes:["Te negro en hebras", "clavo de olor", "clementinas", "naranjas", "gengibres"],
                precio: 360, 
                vegano: true,
                celiaco: true, 
            },
            chai: {
                ingredientes:["te negro en hebras", "clavo de olor", "canela", "cardamomo", "jengibre"],
                precio: 360, 
                vegano: true,
                celiaco: true, 
            },
            vainilla: {
                ingredientes:["te negro de Sri Lanka", "vainilla"],
                precio: 360, 
                vegano: true,
                celiaco: true, 
            },
            darjeelingImperial: {
                ingredientes:["te negro en hebras del Himalaya"],
                precio: 360, 
                vegano: true,
                celiaco: true, 
            },
            greenBerry: {
                ingredientes:["te verde", "frutillas"],
                precio: 360, 
                vegano: true,
                celiaco: true,
            },
            calm: {
                ingredientes:["verbena", "cascara de naranja", "clementina"],
                precio: 360, 
                vegano: true,
                celiaco: true, 
            },
            monsoonWedding: {
                ingredientes:["verbena", "lemongrass", "manzanilla", "menta", "petalos"],
                precio: 360, 
                vegano: true,
                celiaco: true, 
            }
        },
        smoothiesLicuadosFrutales: {
            descripcion: "arma tu combinacion. Hasta 3 frutas. Con agua, leche, o jugo de naranja",
            ingredientes:["frutilla", "banana", "durazno"],
            precio: 500, 
            vegano: true,
            celiaco: true, 
        },
        milkshakes: {
            dulceDeLeche: {
                ingredientes:["leche", "helado de dulce de leche", "hielo", "dulce de leche"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            chocolate: {
                ingredientes:["leche", "helado de chocolate", "hielo", "chocolate"],
                precio: 590, 
                vegano: false,
                celiaco: true, 
            },
            banana: {
                ingredientes:["leche", "helado de americana", "bananas", "hielo", "dulce de leche"],
                precio: 660, 
                vegano: false,
                celiaco: true, 
            }
        },
        sinAlcohol: {
            aguaMineral: {
                opciones: ["con gas", "sin gas"],
                precio: 270
            },
            gaseosasLineaCocaCola: {
                opciones: ["schweppes", "coca cola", "sprite", "fanta"],
                precio: 300
            },
            aguaSaborizadaAquarius: {
                opciones: ["naranja", "manzana", "pera", "pomelo"],
                precio: 250
            },
            exprimidoDeNaranja: {
                precio: 400
            },
            pomelada: {
                opciones: ["vaso", "jarra"],
                ingredientes: ["pomelo", "menta", "jugo de limon", "azucar", "jengibre"],
                precioVaso: 470,
                precioJarra: 750,
                vegano: true,
                celiaco: true
            },
            limonada: {
                opciones: ["vaso", "jarra"],
                ingredientes: ["limon", "menta", "jugo de limon", "azucar", "jengibre"],
                precioVaso: 470,
                precioJarra: 750,
                vegano: true,
                celiaco: true
            },
            pepinada: {
                opciones: ["vaso", "jarra"],
                ingredientes: ["pepino", "menta", "limon", "almibar", "hielo"],
                precioVaso: 470,
                precioJarra: 750,
                vegano: true,
                celiaco: true
            },
            julepDeMaracuya: {
                ingredientes:["menta", "limon", "almibar", "pulpa de maracuya", "jugo de naranja"],
                precio: 500, 
                vegano: true,
                celiaco: true, 
            }
        },
        conAlcohol: {
            lataHeinekenMiller: 450,
            porronHeinekenMiller: 450
        },
        cervezaArtesanal: {
            descripcion: "Cerveza artesanal bx brewing co. Consulra nuestra disponibilidad",
            latas: {
                ipa: {
                    descripcion: ["rubia", "lupulada", "frutal"],
                    precio: 450
                },
                dobleIpa: {
                    descripcion: ["rubia", "resinosa", "extra lupulada"],
                    precio: 450
                },
                neipa: {
                    descripcion: ["tropical", "intensa"],
                    precio: 450
                },
                cream: {
                    descripcion: ["rubia", "liviana", "refrescante"],
                    precio: 430
                },
                scottish: {
                    descripcion: ["roja", "caramelos", "frutos secos"],
                    precio: 430
                },
                apa: {
                    descripcion: ["rubia", "citrica", "refrescante"],
                    precio: 430
                },
                redForest: {
                    descripcion: ["roja", "frutos rojos", "caramelo"],
                    precio: 430
                },
                honey: {
                    descripcion: ["rubia", "miel", "liviana"],
                    precio: 430
                }
            },
            pets: {
                opciones: ["cream", "acottish", "porter", "ipa", "apa", "red forest"],
                precio: 780
            }
        }
    }
}
}

export default cartaGC