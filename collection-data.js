/* ============================================
   INNOVATIVE FURNITURE — Collection Data
   All product data scraped from source
   ============================================ */

const COLLECTIONS = {
    eco: {
        id: "eco",
        name: "Eco",
        number: "01",
        tagline: "Accessible Comfort, Sustainably Crafted",
        description: "The Eco collection delivers exceptional value without compromise. Designed for modern living spaces, each piece combines clean lines with enduring comfort — all proudly crafted in New Zealand.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/3_2_1_ottoman_68cf0b9b-e9f4-4f50-a10b-ed5382abc979.jpg?v=1767524933",
        products: [
            {
                name: "Eco Lounge Suite Collection",
                price: "$1,849",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3_2_1_ottoman_68cf0b9b-e9f4-4f50-a10b-ed5382abc979.jpg?v=1767524933",
                variant: "3+2+1+Ottoman Seater"
            },
            {
                name: "Eco 3 Seater Sofa",
                price: "$649",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3-seater-black.jpg?v=1767676881"
            },
            {
                name: "Eco 2 Seater Sofa",
                price: "$549",
                image: "https://furnitureworld.co.nz/cdn/shop/files/2-seater-black.jpg?v=1767675956"
            },
            {
                name: "Eco Sofa Chair",
                price: "$449",
                image: "https://furnitureworld.co.nz/cdn/shop/files/1-seater-black.jpg?v=1767675561"
            },
            {
                name: "Eco 6 Seater Corner Sofa",
                price: "$1,499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/nz-made-eco-6-seater-corner-sofa-black_bb588faa-9fa8-4d33-bc65-ebea26a41620.jpg?v=1767677710"
            },
            {
                name: "Eco 3+2 Seater Sofa",
                price: "$895",
                image: "https://furnitureworld.co.nz/cdn/shop/files/eco-3_2-seater-sofa.jpg?v=1769328958"
            },
            {
                name: "Eco Long-Arm with Chaise Corner Sofa",
                price: "$1,499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/eco-long-arm-leftside-chaise-corner-sofa-black.jpg?v=1768116975"
            },
            {
                name: "Eco 4 Seater with Chaise Corner Sofa",
                price: "$1,349",
                image: "https://furnitureworld.co.nz/cdn/shop/files/eco-4-seater-leftside-chaise-corner-sofa-black.jpg?v=1768035674"
            },
            {
                name: "Eco 3 Seater with Chaise Corner Sofa",
                price: "$1,075",
                image: "https://furnitureworld.co.nz/cdn/shop/files/eco-3-seater-leftside-chaise-corner-sofa-black.jpg?v=1767880597"
            },
            {
                name: "Eco Ottoman",
                price: "$329",
                image: "https://furnitureworld.co.nz/cdn/shop/files/eco-ottoman-black.jpg?v=1767969196"
            }
        ]
    },

    crown: {
        id: "crown",
        name: "Crown",
        number: "02",
        tagline: "Refined Elegance in Every Curve",
        description: "The Crown collection elevates everyday living with graceful forms and premium fabrics. Available in Grey, Black, Charcoal, and Beige — sophistication in every shade.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/crown-3_2_seater-black.jpg?v=1768123205",
        products: [
            {
                name: "Crown Lounge Suite Collection",
                price: "From $799",
                image: "https://furnitureworld.co.nz/cdn/shop/files/crown-3_2_seater-black.jpg?v=1768123205",
                colors: "Black, Charcoal, Grey, Beige"
            },
            {
                name: "Crown 6 Seater Corner Sofa",
                price: "$1,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/crown-6-seater-corner-sofa-black.jpg?v=1768301015",
                colors: "Black, Charcoal, Grey, Beige"
            },
            {
                name: "Crown 3 Seater Sofa",
                price: "$899",
                image: "https://furnitureworld.co.nz/cdn/shop/files/crown-3-seater-sofa-grey.jpg?v=1768201058",
                colors: "Grey, Black, Charcoal, Beige"
            },
            {
                name: "Crown 2 Seater Sofa",
                price: "$799",
                image: "https://furnitureworld.co.nz/cdn/shop/files/crown-2-seater-sofa-grey.jpg?v=1768125543",
                colors: "Grey, Black, Charcoal, Beige"
            },
            {
                name: "Crown Sofa Chair",
                price: "$699",
                image: "https://furnitureworld.co.nz/cdn/shop/files/eco-sofa-chair-grey.jpg?v=1768124688",
                colors: "Grey, Black, Charcoal, Beige"
            },
            {
                name: "Crown Ottoman",
                price: "From $399",
                image: "https://furnitureworld.co.nz/cdn/shop/files/crown-ottoman-black_ab3c7bea-bdb4-43f8-a1ae-1ddc6b4b578e.jpg?v=1768216752",
                colors: "Black, Charcoal, Grey, Beige"
            }
        ]
    },

    trendi: {
        id: "trendi",
        name: "Trendi",
        number: "03",
        tagline: "Contemporary Style, Bold Statement",
        description: "Trendi brings a modern edge to NZ-made furniture. Sharp silhouettes and generous proportions create pieces that command attention in any living space.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/trendi-3_2_1_ottoman-black.jpg?v=1768477080",
        products: [
            {
                name: "Trendi Lounge Suite Collection",
                price: "$2,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-3_2_1_ottoman-black.jpg?v=1768477080",
                variant: "3+2+1+Ottoman"
            },
            {
                name: "Trendi 6 Seater Corner Sofa",
                price: "$2,699",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-6-seater-corner-sofa-black.jpg?v=1768647232"
            },
            {
                name: "Trendi Long-Arm with Chaise Corner Sofa",
                price: "$2,149",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-long-arm-with-leftside-chaise-corner-sofa-black.jpg?v=1768895168"
            },
            {
                name: "Trendi 4 Seater Corner Chaise",
                price: "$1,879",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-4-seater-with-leftside-chaise-corner-sofa-black.jpg?v=1768642245"
            },
            {
                name: "Trendi 3 Seater with Chaise Corner Sofa",
                price: "$1,549",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-3-seater-with-leftside-chaise-corner-sofa-black.jpg?v=1768724648"
            },
            {
                name: "Trendi 3 Seater Sofa",
                price: "$1,149",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-3-seater-sofa-black_35ef3a79-84f0-405b-be7d-8f7f782f02df.jpg?v=1768570900"
            },
            {
                name: "Trendi 2 Seater Sofa",
                price: "$959",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-2-seater-sofa-black_b1dcdb2b-4565-4775-a1f1-c640027f30c9.jpg?v=1768562672"
            },
            {
                name: "Trendi Sofa Chair",
                price: "$759",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-sofa-chair-black_bf8f279d-b535-4b94-9d67-572efb5ed413.jpg?v=1768561405"
            },
            {
                name: "Trendi Ottoman",
                price: "$429",
                image: "https://furnitureworld.co.nz/cdn/shop/files/trendi-ottoman-black_b0ab9ccf-cc51-4674-af11-0e04b0b6f508.jpg?v=1768634445"
            }
        ]
    },

    deseo: {
        id: "deseo",
        name: "Deseo",
        number: "04",
        tagline: "15 Colours, Infinite Possibilities",
        description: "The Deseo collection offers unparalleled colour freedom with 15 stunning fabric options — from Atlas Espresso to Sapphire Teal. Express your personal style with NZ-crafted quality.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/deseo-3_2_1-seater-sofas-atlas-espresso.png?v=1768991022",
        products: [
            {
                name: "Deseo Lounge Suite Collection",
                price: "From $799",
                image: "https://furnitureworld.co.nz/cdn/shop/files/deseo-3_2_1-seater-sofas-atlas-espresso.png?v=1768991022",
                colors: "15 colours available"
            },
            {
                name: "Deseo 3 Seater Sofa",
                price: "$1,699",
                image: "https://furnitureworld.co.nz/cdn/shop/files/threeseater_48bf961d-dc0c-4da4-b7b9-a87228ab5727.png?v=1760413062",
                colors: "15 colours available"
            },
            {
                name: "Deseo 2 Seater Sofa",
                price: "$1,399",
                image: "https://furnitureworld.co.nz/cdn/shop/files/twoseater_f8d11b64-3418-4340-8afb-c036c34541c3.png?v=1760410566",
                colors: "15 colours available"
            },
            {
                name: "Deseo Sofa Chair",
                price: "$999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/oneseater_63f1ff75-a49d-49e1-a0e2-4c5af7494683.png?v=1760411352",
                colors: "15 colours available"
            }
        ]
    },

    "kiwi-comfort": {
        id: "kiwi-comfort",
        name: "Kiwi Comfort",
        number: "05",
        tagline: "True NZ Comfort in 15 Shades",
        description: "Born from the desire for genuine Kiwi comfort, this collection wraps you in softness. Available in 15 rich fabric tones from Anchor to Thistle, with configurations for every living space.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/3_2_1_ottman.jpg?v=1766219008",
        products: [
            {
                name: "Kiwi Comfort Lounge Suites",
                price: "$3,599",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3_2_1_ottman.jpg?v=1766219008",
                variant: "3+2+1 Seater + Ottoman",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort 6 Seater Corner Sofa",
                price: "$2,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/kiwi-comfort-6-seater-corner-sofa-anchor.jpg?v=1766727919",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort 4 Seater Corner Sofa with Chaise",
                price: "$2,299",
                image: "https://furnitureworld.co.nz/cdn/shop/files/chaise-left_14694623-7d6c-4ace-859d-c77a93cbedaf.jpg?v=1766569456",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort Long-Arm with Chaise Corner Sofa",
                price: "$2,199",
                image: "https://furnitureworld.co.nz/cdn/shop/files/kiwi-comfort-long-arm-lefttside-chaise-corner-sofa-anchor.jpg?v=1766843370",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort 3 Seater with Chaise Corner Sofa",
                price: "$1,899",
                image: "https://furnitureworld.co.nz/cdn/shop/files/kiwi-comfort-3-seater-leftside-chaise-anchor.jpg?v=1766744337",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort 3 Seater Sofa",
                price: "$1,529",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Anchor_80da79df-1940-484f-922c-1dae4e9c08a1.jpg?v=1766476031",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort 2 Seater Sofa",
                price: "$1,129",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Anchor_04834d7a-9016-4893-925b-59117a44ab1a.jpg?v=1766555780",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort Sofa Chair",
                price: "$769",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Anchor_26c48708-6fd7-4052-ae01-eb59f66b04af.jpg?v=1766483128",
                colors: "15 colours available"
            },
            {
                name: "Kiwi Comfort Chaise",
                price: "$499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/KiwiComfortOttoman.png?v=1747522452"
            },
            {
                name: "Kiwi Comfort Ottoman",
                price: "$429",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Anchor.jpg?v=1766410296",
                colors: "15 colours available"
            }
        ]
    },

    prisma: {
        id: "prisma",
        name: "Prisma",
        number: "06",
        tagline: "18 Fabrics, Pure Craftsmanship",
        description: "Prisma dazzles with the widest fabric selection in our range — 18 stunning options from Pushka Blush to Terracotta. Elegant proportions meet extraordinary choice.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/three_two_one_ottomonseater.png?v=1760564544",
        products: [
            {
                name: "Prisma Lounge Suite Collection",
                price: "$3,487",
                image: "https://furnitureworld.co.nz/cdn/shop/files/three_two_one_ottomonseater.png?v=1760564544",
                colors: "18 colours available"
            },
            {
                name: "Prisma 3 Seater Sofa",
                price: "$1,525",
                image: "https://furnitureworld.co.nz/cdn/shop/files/threeseater_2de2af79-9034-4a84-b5fc-fddeff77a846.png?v=1760564544",
                colors: "18 colours available"
            },
            {
                name: "Prisma 2 Seater Sofa",
                price: "$1,125",
                image: "https://furnitureworld.co.nz/cdn/shop/files/twoseater_ed12fa8f-67fd-4a3d-a9aa-5823faf6cfb7.png?v=1760564544",
                colors: "18 colours available"
            },
            {
                name: "Prisma Sofa Chair",
                price: "$725",
                image: "https://furnitureworld.co.nz/cdn/shop/files/oneseater_9147e640-14b5-4ae2-8195-6c1f052218a1.png?v=1760573647",
                colors: "18 colours available"
            },
            {
                name: "Prisma Ottoman",
                price: "$499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/ottomonseater.png?v=1760564544",
                colors: "18 colours available"
            }
        ]
    },

    cloudnine: {
        id: "cloudnine",
        name: "CloudNine",
        number: "07",
        tagline: "Sink Into Cloud-Like Luxury",
        description: "CloudNine lives up to its name — plush, sumptuous seating that envelops you in comfort. Available in Milano Evergreen, Dream Grey, and Starlight Coffee for a statement of refined indulgence.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/Cloudnine3_2.png?v=1765673790",
        products: [
            {
                name: "CloudNine Lounge Suite Collection",
                price: "From $1,299",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Cloudnine3_2.png?v=1765673790",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine 6 Seater Corner Sofa",
                price: "$3,799",
                image: "https://furnitureworld.co.nz/cdn/shop/files/NZMadeCloudNine6SeaterCornerSofa.png?v=1765677647",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine Long-Arm with Chaise Corner Sofa",
                price: "$2,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/CloudNineLong-ArmwithL-ChaiseCornerSofa.png?v=1765677500",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine 4 Seater with Chaise Corner Sofa",
                price: "$2,549",
                image: "https://furnitureworld.co.nz/cdn/shop/files/CloudNine4SeaterwithL-ChaiseCornerSofa_cff08961-a153-438b-8815-f97f1494e233.png?v=1765677074",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine 3 Seater with Chaise Corner Sofa",
                price: "$2,149",
                image: "https://furnitureworld.co.nz/cdn/shop/files/CloudNine3SeaterwithL-ChaiseCornerSofa_f4d0098c-097a-4fb7-b22c-a60c3a43d32e.png?v=1765676866",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine 3 Seater Sofa",
                price: "$1,599",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Cloudnine_3_Seater.png?v=1765673597",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine 2 Seater Sofa",
                price: "$1,299",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Clounine_2_Seater.png?v=1765673485",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine Sofa Chair",
                price: "$699",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Cloudnine1Seater.png?v=1765673517",
                colors: "Milano Evergreen, Dream Grey, Starlight Coffee"
            },
            {
                name: "CloudNine Ottoman",
                price: "$449",
                image: "https://furnitureworld.co.nz/cdn/shop/files/CloudnineOttoman.png?v=1765673639",
                colors: "Dream Grey"
            }
        ]
    },

    harbor: {
        id: "harbor",
        name: "Harbor",
        number: "08",
        tagline: "Premium Comfort, Timeless Design",
        description: "Harbor anchors any room with its commanding presence and superior comfort. A premium collection with generous proportions and exceptional build quality.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/harbor3_2_1_O_New.png",
        products: [
            {
                name: "Harbor Sofa Collection",
                price: "$5,349",
                image: "https://furnitureworld.co.nz/cdn/shop/files/harbor3_2_1_O_New.png",
                variant: "3+2+1 with Ottoman"
            },
            {
                name: "Harbor 6 Seater Corner Sofa",
                price: "$4,299",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Harbor_6_Seater_Corner_Sofa.png"
            },
            {
                name: "Harbor Long-Arm with Chaise Corner Sofa",
                price: "$3,299",
                image: "https://furnitureworld.co.nz/cdn/shop/files/HarborLong-ArmwithLeft-SideChaiseCornerSofa.png"
            },
            {
                name: "Harbor 4 Seater with Chaise Corner Sofa",
                price: "$2,899",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Harbor_4_Seater_with_Left-Side_Chaise_Corner_Sofa.png"
            },
            {
                name: "Harbor 3 Seater with Chaise Corner Sofa",
                price: "$2,449",
                image: "https://furnitureworld.co.nz/cdn/shop/files/Harbor3SeaterwithLeft-sideChaiseCornerSofa_fe252f63-52de-4735-97df-2cd89f809ea5.png"
            },
            {
                name: "Harbor 3 Seater Sofa",
                price: "$1,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3seater1_43d44b0f-fe39-479e-bf2e-608f47df685e.png"
            },
            {
                name: "Harbor 2 Seater Sofa",
                price: "$1,599",
                image: "https://furnitureworld.co.nz/cdn/shop/files/2seater1_eda336cb-9b03-4a16-adf8-b9f0d04586c1.png"
            },
            {
                name: "Harbor Sofa Chair",
                price: "$1,199",
                image: "https://furnitureworld.co.nz/cdn/shop/files/1seater1_c07003e6-b5fb-4bbd-910c-c167b554a46b.png"
            },
            {
                name: "Harbor Chaise",
                price: "$599",
                image: "https://furnitureworld.co.nz/cdn/shop/files/chaisetransparent1.png"
            },
            {
                name: "Harbor Ottoman",
                price: "$499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/ottomontransparent.png"
            }
        ]
    },

    evoque: {
        id: "evoque",
        name: "Evoque",
        number: "09",
        tagline: "Leather Luxury, Handcrafted Soul",
        description: "Evoque is our premium leather collection. Rich, supple hides in Tan, Ebony, Bison, Bordeaux, and Brunswick create an atmosphere of timeless sophistication.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/3_2_seater_5a466f71-8f10-4652-a644-c007ef25e1c6.jpg",
        products: [
            {
                name: "Evoque Lounge Suite",
                price: "From $2,199",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3_2_seater_5a466f71-8f10-4652-a644-c007ef25e1c6.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque Long-Arm with Chaise Corner Sofa",
                price: "$4,699",
                image: "https://furnitureworld.co.nz/cdn/shop/files/chaise-left_b88657ae-68ba-442a-93fb-c4d20cbcdeae.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque 4 Seater with Chaise Corner Sofa",
                price: "$3,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/chaise-left_87076f3a-510a-4530-a085-300491b04641.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque 3 Seater with Chaise Corner Sofa",
                price: "$3,499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/chaise-left_988e22c6-dcdc-478f-a092-49fe20df619f.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque 3 Seater Sofa",
                price: "$2,799",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3-tan.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque 2 Seater Sofa",
                price: "$2,199",
                image: "https://furnitureworld.co.nz/cdn/shop/files/2-tan.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque Sofa Chair",
                price: "$1,349",
                image: "https://furnitureworld.co.nz/cdn/shop/files/single-tan.jpg",
                colors: "Tan, Ebony, Bison, Bordeaux, Brunswick"
            },
            {
                name: "Evoque Ottoman",
                price: "$659",
                image: "https://furnitureworld.co.nz/cdn/shop/files/ottoman_1fc67a1f-610f-478e-90ce-e8c75071b620.jpg",
                colors: "Tan"
            }
        ]
    },

    vellora: {
        id: "vellora",
        name: "Vellora",
        number: "10",
        tagline: "Modular Mastery, Limitless Configurations",
        description: "Vellora is our flagship modular system. Build your perfect sofa from individual modules — corner pieces, chairs, chaises, and ottomans combine to create truly bespoke seating.",
        heroImage: "https://furnitureworld.co.nz/cdn/shop/files/corner_a5938366-3fc7-4dd5-8e7f-616509664f38.png?v=1768890145",
        products: [
            {
                name: "Vellora Lounge Suites",
                price: "From $449",
                image: "https://furnitureworld.co.nz/cdn/shop/files/corner_a5938366-3fc7-4dd5-8e7f-616509664f38.png?v=1768890145",
                variant: "Multiple configurations"
            },
            {
                name: "Vellora Corner Sofa",
                price: "$9,999",
                image: "https://furnitureworld.co.nz/cdn/shop/files/3_2_2_corner_2_corner_664f9b31-425c-4d68-8b71-359b38f0269c.png?v=1769408848"
            },
            {
                name: "Vellora 3+2 Seater Modular Sofa",
                price: "$4,395",
                image: "https://furnitureworld.co.nz/cdn/shop/files/vellora-3_2-seater-sofa_a4092cb4-243e-4d95-b0eb-85251d091fed.png?v=1769587258"
            },
            {
                name: "Vellora Corner Module",
                price: "$939",
                image: "https://furnitureworld.co.nz/cdn/shop/files/corner_48438c71-a7d8-47b7-95fa-a987168fcccd.png?v=1769580868"
            },
            {
                name: "Vellora Sofa Chair",
                price: "$639",
                image: "https://furnitureworld.co.nz/cdn/shop/files/vellora-sofa-chair.png?v=1769587321"
            },
            {
                name: "Vellora Chaise",
                price: "$499",
                image: "https://furnitureworld.co.nz/cdn/shop/files/vellora-chaise.png?v=1769586782"
            },
            {
                name: "Vellora Ottoman",
                price: "From $449",
                image: "https://furnitureworld.co.nz/cdn/shop/files/vellora-ottoman_0cec97ba-856d-43dc-bc92-f7c2ed5e042e.png?v=1769147836"
            }
        ]
    }
};
