import { MoreIcon } from "../icons";

const DiyaItems = [
  {
    id: 1,
    title: "Mint Meadow",
    price: 200,
    pieces: 6,
    description:
      "A refreshing blend of cool mint and soft meadow greens that instantly brightens any space.",
    sellData: { sold: 114, total: 200 },
    image: "https://m.media-amazon.com/images/I/714WLj2xEnL.jpg",
    unit: "pcs.",
  },
  {
    id: 2,
    title: "Lavender Drift",
    price: 250,
    pieces: 4,
    description:
      "Soft lavender notes with a calming floral breeze perfect for unwinding after a long day.",
    sellData: { sold: 168, total: 250 },
    image:
      "https://content.instructables.com/FBA/PU1J/HX69QEIE/FBAPU1JHX69QEIE.jpg?auto=webp",
    unit: "pcs.",
  },
  {
    id: 3,
    title: "Citrus Grove",
    price: 180,
    pieces: 8,
    description:
      "A bright burst of orange zest and lemon peel that energizes and uplifts any environment.",
    sellData: { sold: 92, total: 180 },
    image:
      "https://www.hobbycraft.co.uk/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw5a29bbb6/images/Ideas/kids/main/Ideas_main_diwali-diya-lamp.jpg",
    unit: "pcs.",
  },
  {
    id: 4,
    title: "Vanilla Ember",
    price: 300,
    pieces: 3,
    description:
      "Warm vanilla bean infused with soft smoky undertones for a cozy, comforting aura.",
    sellData: { sold: 201, total: 300 },
    image:
      "https://m.media-amazon.com/images/I/810LtnVH3jL._AC_UF894,1000_QL80_.jpg",
    unit: "pcs.",
  },
  {
    id: 5,
    title: "Ocean Whisper",
    price: 220,
    pieces: 5,
    description:
      "Cool sea breeze mixed with driftwood notes to create a soothing coastal escape.",
    sellData: { sold: 150, total: 220 },
    image:
      "https://www.fevicreate.com/o/commerce-media/accounts/-1/images/673695598?download=false",
    unit: "pcs.",
  },
  {
    id: 6,
    title: "Berry Bloom",
    price: 200,
    pieces: 7,
    description:
      "A sweet blend of ripe berries and gentle floral tones that spark joy instantly.",
    sellData: { sold: 132, total: 200 },
    image:
      "https://www.soosi.co.in/cdn/shop/products/54bd3e64-ee45-4bf9-837c-a82a7ad84769_580x.jpg?v=1602248663",
    unit: "pcs.",
  },
  {
    id: 7,
    title: "Amber Forest",
    price: 160,
    pieces: 9,
    description:
      "Deep amber layered with earthy woods to create a warm and grounding presence.",
    sellData: { sold: 97, total: 160 },
    image:
      "https://praahilifestyle.in/cdn/shop/files/Ceramic_diya_for_puja_multicolour.jpg?v=1759749344&width=1445",
    unit: "pcs.",
  },
  {
    id: 8,
    title: "Blossom Breeze",
    price: 240,
    pieces: 4,
    description:
      "Delicate petals and soft spring air combined for a gentle, refreshing aroma.",
    sellData: { sold: 188, total: 240 },
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/diya/k/a/c/6-5488746-bindian-2-original-imagthpkahf6nvph.jpeg?q=90",
    unit: "pcs.",
  },
  {
    id: 9,
    title: "Cocoa Rustic",
    price: 190,
    pieces: 6,
    description:
      "Rich cocoa paired with hints of cinnamon to create a warm and rustic charm.",
    sellData: { sold: 110, total: 190 },
    image:
      "https://archati.com/cdn/shop/files/615V5QLf3NL._SX679___82270.1750830546.1280.1280.jpg?v=1759466236",
    unit: "pcs.",
  },
  {
    id: 10,
    title: "Herbal Mist",
    price: 210,
    pieces: 5,
    description:
      "A cooling herbal blend with eucalyptus and sage that revitalizes the senses.",
    sellData: { sold: 143, total: 210 },
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/10/25160730/Handmade-diya-10.jpg",
    unit: "pcs.",
  },
];

const BakeryItems = [
  {
    id: 1,
    title: "Chocolate Fudge Brownie",
    price: 45,
    pieces: 1,
    description:
      "Rich, dense chocolate brownie with a fudgy center and a crackly top that melts in your mouth.",
    sellData: { sold: 187, total: 250 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwzBhb6klyB4BUby3mitNxqt4wxFWNhP-n1BneCQKZpY19llRWCHKySo2jBWdev8lL5o&usqp=CAU",
    unit: "piece",
  },
  {
    id: 2,
    title: "Blueberry Muffin",
    price: 35,
    pieces: 1,
    description:
      "Fluffy golden muffin bursting with fresh blueberries and a hint of vanilla sweetness.",
    sellData: { sold: 203, total: 300 },
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2022/03/vegan-blueberry-muffins-1-1.jpg",
    unit: "piece",
  },
  {
    id: 3,
    title: "Croissant",
    price: 50,
    pieces: 1,
    description:
      "Buttery, flaky layers of golden pastry with a light, airy texture perfect for breakfast.",
    sellData: { sold: 156, total: 200 },
    image:
      "https://loveandcheesecake.com/cdn/shop/files/buttercroissant2.jpg?v=1711088930&width=480",
    unit: "piece",
  },
  {
    id: 4,
    title: "Red Velvet Cupcake",
    price: 55,
    pieces: 1,
    description:
      "Moist red velvet cake topped with smooth cream cheese frosting and a dusting of cocoa.",
    sellData: { sold: 221, total: 280 },
    image:
      "https://www.livewellbakeoften.com/wp-content/uploads/2021/06/Red-Velvet-Cupcakes-3-New-copy.jpg",
    unit: "piece",
  },
  {
    id: 5,
    title: "Cinnamon Roll",
    price: 60,
    pieces: 1,
    description:
      "Warm swirls of cinnamon sugar wrapped in soft dough and drizzled with cream cheese glaze.",
    sellData: { sold: 178, total: 220 },
    image:
      "https://thatbreadlady.com/wp-content/uploads/2022/04/cinnamon-rolls-4-2.jpg",
    unit: "piece",
  },
  {
    id: 6,
    title: "Chocolate Chip Cookie",
    price: 25,
    pieces: 1,
    description:
      "Classic chewy cookie loaded with chocolate chips, crispy edges and a soft center.",
    sellData: { sold: 289, total: 350 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7c6iXmcsZE1rfn57BEfx4tnl-S1D8ANjkA&s",
    unit: "piece",
  },
  {
    id: 7,
    title: "Banana Bread Slice",
    price: 40,
    pieces: 1,
    description:
      "Moist, tender banana bread made with ripe bananas and a hint of nutmeg warmth.",
    sellData: { sold: 134, total: 180 },
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-02-banana-bread%2Fbanana-bread-1034",
    unit: "slice",
  },
  {
    id: 8,
    title: "Almond Danish",
    price: 65,
    pieces: 1,
    description:
      "Flaky pastry filled with sweet almond cream and topped with toasted almond slices.",
    sellData: { sold: 145, total: 200 },
    image:
      "https://www.allrecipes.com/thmb/4BimDpMCAc9DfDez24TX0SUBER4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6199819-danish-almond-puff-DIZ9829-4x3-1-ea822501c1cd4bb9a78fdb9e20a72163.jpg",
    unit: "piece",
  },
  {
    id: 9,
    title: "Lemon Pound Cake",
    price: 70,
    pieces: 1,
    description:
      "Dense, buttery cake infused with fresh lemon zest and glazed with tangy lemon icing.",
    sellData: { sold: 98, total: 150 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboekxaFYHGMF_ffBliJ4eWFI7cwxVGZAzCQ&s",
    unit: "slice",
  },
  {
    id: 10,
    title: "Strawberry Tart",
    price: 80,
    pieces: 1,
    description:
      "Crisp pastry shell filled with vanilla custard and topped with fresh glazed strawberries.",
    sellData: { sold: 167, total: 210 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl70PkMogbLXrRRRe3CkelvOZzhcWWXBBCMw&s",
    unit: "piece",
  },
];

// HANDLOOM ITEMS LIST;
const HandloomItems = [
  {
    id: 1,
    title: "Silk Banarasi Saree",
    price: 3500,
    pieces: 1,
    description:
      "Exquisite handwoven Banarasi silk saree with intricate zari work and traditional motifs.",
    sellData: { sold: 114, total: 200 },
    image:
      "https://banarasishagun.com/cdn/shop/files/WhatsApp_Image_2024-11-19_at_12.06.53_PM_grande.jpg?v=1732000076",
    unit: "pcs.",
  },
  {
    id: 2,
    title: "Pashmina Shawl",
    price: 4200,
    pieces: 1,
    description:
      "Luxurious handwoven Kashmiri pashmina shawl with delicate embroidery and soft texture.",
    sellData: { sold: 168, total: 250 },
    image:
      "https://shahkaar.com/cdn/shop/articles/10-Ways-to-Style-a-Jamawar-Pashmina-Shawl-with-Everyday-Outfits-Shahkaar-15670331.jpg?crop=center&height=1200&v=1748353220&width=1200",
    unit: "pcs.",
  },
  {
    id: 3,
    title: "Cotton Khadi Kurta",
    price: 850,
    pieces: 1,
    description:
      "Handspun and handwoven khadi cotton kurta with natural dyes and comfortable fit.",
    sellData: { sold: 92, total: 180 },
    image:
      "https://www.ekadwi.com/cdn/shop/files/5_4cf0bb63-82f9-4685-b27e-fe88ba372195.jpg?v=1740991024",
    unit: "pcs.",
  },
  {
    id: 4,
    title: "Chanderi Silk Dupatta",
    unit: "pcs.",
    price: 1800,
    pieces: 1,
    description:
      "Elegant handloom Chanderi silk dupatta with golden zari border and lightweight drape.",
    sellData: { sold: 201, total: 300 },
    image:
      "https://craftsandlooms.com/cdn/shop/products/WhatsAppImage2021-09-21at12.48.09PM.jpg?v=1632485466",
  },
  {
    id: 5,
    title: "Ikat Cotton Stole",
    unit: "pcs.",
    price: 950,
    pieces: 1,
    description:
      "Vibrant handwoven ikat cotton stole with geometric patterns and fringed edges.",
    sellData: { sold: 150, total: 220 },
    image:
      "https://itokri.com/cdn/shop/files/X2A0763_440382c8-4f5d-49d9-9f61-59bf5be5e8ef.jpg?v=1705479319",
  },
  {
    id: 6,
    title: "Tussar Silk Saree",
    unit: "pcs.",
    price: 2800,
    pieces: 1,
    description:
      "Natural tussar silk saree with handblock prints and earthy tones for elegant wear.",
    sellData: { sold: 132, total: 200 },
    image:
      "https://loomslegacy.com/cdn/shop/files/20240705-103602.jpg?v=1720160239&width=1200",
  },
  {
    id: 7,
    title: "Pochampally Ikat Fabric",
    unit: "pcs.",
    price: 1200,
    pieces: 2,
    description:
      "Traditional Pochampally ikat fabric with double ikat weaving and vibrant color combinations.",
    sellData: { sold: 97, total: 160 },
    image: "https://goswadeshi.in/cdn/shop/products/dsc00117.jpg?v=1736937299",
  },
  {
    id: 8,
    title: "Kanchipuram Silk Saree",
    unit: "pcs.",
    price: 5500,
    pieces: 1,
    description:
      "Premium Kanchipuram silk saree with pure zari work and traditional temple border design.",
    sellData: { sold: 188, total: 240 },
    image:
      "https://pashudh.com/cdn/shop/files/5_73_7415436e-9226-4442-9a42-d47387d04730.jpg?v=1736141151&width=1080",
  },
  {
    id: 9,
    title: "Bhagalpuri Silk Stole",
    unit: "pcs.",
    price: 1100,
    pieces: 1,
    description:
      "Handwoven Bhagalpuri silk stole with natural texture and contemporary prints.",
    sellData: { sold: 110, total: 190 },
    image:
      "https://www.luxurionworld.com/cdn/shop/articles/bhagalpuri-dress-code-from-the-silk-city-itself-898465.jpg?v=1673066752",
  },
  {
    id: 10,
    title: "Maheshwari Cotton Saree",
    unit: "pcs.",
    price: 1650,
    pieces: 1,
    description:
      "Lightweight Maheshwari cotton saree with reversible border and traditional zari accents.",
    sellData: { sold: 143, total: 210 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgMrf00Keq0c3-dsbVXQb1w-zrI0sIU06D6ul_tmIjx0FFkwM_8n_6hmKNRjbnylpUFc&usqp=CAU",
  },
];

// HOME FURNISHING ITEMS LIST;
const HomeFurnishingItems = [
  {
    id: 1,
    title: "Velvet Cushion Cover Set",
    unit: "set",
    price: 899,
    pieces: 5,
    description:
      "Luxurious velvet cushion covers with golden embroidery and hidden zipper closure.",
    sellData: { sold: 114, total: 200 },
    image:
      "https://m.media-amazon.com/images/I/71Q22-AK1WL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Cotton Bedsheet Set",
    unit: "set",
    price: 1499,
    pieces: 1,
    description:
      "Premium cotton bedsheet with two pillow covers, breathable fabric and vibrant prints.",
    sellData: { sold: 168, total: 250 },
    image:
      "https://www.jaipurfabric.com/cdn/shop/files/dbs8177-230404_l.jpg?v=1739269733",
  },
  {
    id: 3,
    title: "Blackout Window Curtains",
    unit: "set",
    price: 1899,
    pieces: 2,
    description:
      "Thermal insulated blackout curtains with elegant drape and noise reduction properties.",
    sellData: { sold: 92, total: 180 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gxfXKZo14TVYbtHsiGN8bk8LxqBnWUfIzA&s",
  },
  {
    id: 4,
    title: "Decorative Table Runner",
    unit: "set",
    price: 649,
    pieces: 1,
    description:
      "Handwoven table runner with tassel details and contemporary geometric patterns.",
    sellData: { sold: 201, total: 300 },
    image:
      "https://www.nilkamalhomes.com/cdn/shop/files/767A9336.jpg?v=1736245007&width=1214",
  },
  {
    id: 5,
    title: "Throw Blanket",
    unit: "set",
    price: 1299,
    pieces: 1,
    description:
      "Cozy fleece throw blanket with reversible design perfect for sofas and beds.",
    sellData: { sold: 150, total: 220 },
    image:
      "https://images-cdn.ubuy.ae/634ea281a5eae54842343984-lvylov-solid-thick-fuzzy-faux-fur-throw.jpg",
  },
  {
    id: 6,
    title: "Bath Towel Set",
    unit: "set",
    price: 1199,
    pieces: 4,
    description:
      "Highly absorbent cotton bath towels with quick-dry technology and fade-resistant colors.",
    sellData: { sold: 132, total: 200 },
    image:
      "https://hamptonandastley.com/cdn/shop/files/egyptian-cotton-7-piece-luxury-bath-towel-set-subtle-grey-986366_dbd07e31-f56b-4e5e-b3c1-34ce12523952.jpg?v=1752675128",
  },
  {
    id: 7,
    title: "Floor Carpet",
    unit: "set",
    price: 2499,
    pieces: 1,
    description:
      "Soft pile carpet with anti-slip backing and stain-resistant finish for living areas.",
    sellData: { sold: 97, total: 160 },
    image:
      "https://www.handmakers.in/cdn/shop/products/jute_multicolor_rectangal_carpet_3.jpg?v=1654411672&width=1500",
  },
  {
    id: 8,
    title: "Quilted Comforter",
    unit: "set",
    price: 2899,
    pieces: 1,
    description:
      "All-season microfiber comforter with box stitching and hypoallergenic filling.",
    sellData: { sold: 188, total: 240 },
    image: "https://m.media-amazon.com/images/I/81nxDfYLdQL.jpg",
  },
  {
    id: 9,
    title: "Kitchen Linen Set",
    unit: "set",
    price: 499,
    pieces: 6,
    description:
      "Cotton kitchen towels and apron set with modern prints and hanging loops.",
    sellData: { sold: 110, total: 190 },
    image:
      "https://5.imimg.com/data5/SJ/XX/MY-624414/kitchen-apron-set-500x500.jpg",
  },
  {
    id: 10,
    title: "Decorative Wall Tapestry",
    unit: "set",
    price: 1799,
    pieces: 1,
    description:
      "Bohemian style wall tapestry with intricate mandala design for bedroom or living room.",
    sellData: { sold: 143, total: 210 },
    image:
      "https://i5.walmartimages.com/seo/ONETECH-Boho-Tapestry-Mountain-Sun-Tapestry-Mid-Century-Abstract-Landscape-Wall-Hanging-Tapestries-Sunrise-Nature-Scenery-Minimalist-Decor-Bedroom-Li_f3666365-b11c-4745-98b6-a4790f7578d5.61c9d390613fc7d6e997870f810ed310.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
];

const AgarbattiItems = [
  {
    id: 1,
    title: "Sandalwood Incense Sticks",
    unit: "pcs",
    price: 120,
    pieces: 100,
    description:
      "Premium sandalwood agarbatti with authentic fragrance for meditation and daily puja.",
    sellData: { sold: 114, total: 200 },
    image:
      "https://cdn.shopify.com/s/files/1/0632/2526/6422/files/0_49c18f64-4b1c-40b1-85be-86271bab4deb.jpg?v=1764302152",
  },
  {
    id: 2,
    title: "Rose Incense Sticks",
    unit: "pcs",
    price: 80,
    pieces: 100,
    description:
      "Aromatic rose agarbatti with long-lasting fragrance perfect for home and office spaces.",
    sellData: { sold: 168, total: 250 },
    image: "https://garuda.one/storage/product/84700/DSAVV6LCINQR.webp",
  },
  {
    id: 3,
    title: "Lavender Incense Sticks",
    unit: "pcs",
    price: 95,
    pieces: 100,
    description:
      "Calming lavender agarbatti for relaxation and stress relief with soothing aroma.",
    sellData: { sold: 92, total: 180 },
    image:
      "https://wild-berry.com/cdn/shop/files/WILD_BERRY-Citronella_Lavender-Lifestyle_1079x.jpg?v=1754494890",
  },
  {
    id: 4,
    title: "Jasmine Incense Sticks",
    unit: "pcs",
    price: 85,
    pieces: 100,
    description:
      "Sweet jasmine agarbatti with natural floral essence for evening prayers and ambiance.",
    sellData: { sold: 201, total: 300 },
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512399939/NW/KX/OC/68827188/jasmine-incense-sticks-500x500.png",
  },
  {
    id: 5,
    title: "Mogra Incense Sticks",
    unit: "pcs",
    price: 90,
    pieces: 100,
    description:
      "Traditional mogra agarbatti with enchanting fragrance ideal for spiritual practices.",
    sellData: { sold: 150, total: 220 },
    image:
      "https://swadbazaar.com/cdn/shop/files/F-2.jpg?v=1720265041&width=720",
  },
  {
    id: 6,
    title: "Nag Champa Incense Sticks",
    unit: "pcs",
    price: 110,
    pieces: 100,
    description:
      "Classic Nag Champa agarbatti with earthy scent for yoga and meditation sessions.",
    sellData: { sold: 132, total: 200 },
    image:
      "https://incensesticks.com/cdn/shop/files/nag-champa-incense-8-50-sticks-special-incense-263383.jpg?v=1703164174",
  },
  {
    id: 7,
    title: "Patchouli Incense Sticks",
    unit: "pcs",
    price: 100,
    pieces: 100,
    description:
      "Exotic patchouli agarbatti with woody fragrance for creating peaceful atmosphere.",
    sellData: { sold: 97, total: 160 },
    image:
      "https://alltet.co/cdn/shop/files/UllasOrganico02946_2048x.jpg?v=1713704170",
  },
  {
    id: 8,
    title: "Guggal Dhoop Incense",
    unit: "pcs",
    price: 150,
    pieces: 50,
    description:
      "Pure guggal dhoop sticks for traditional rituals with purifying and aromatic smoke.",
    sellData: { sold: 188, total: 240 },
    image:
      "https://www.mypoojabox.in/cdn/shop/products/IMG_8437_b48bc396-a4c8-4ab4-853a-edca422ff513_900x.jpg?v=1660897787",
  },
  {
    id: 9,
    title: "Chandan Incense Cones",
    unit: "pcs",
    price: 75,
    pieces: 50,
    description:
      "Compact chandan incense cones with rich sandalwood aroma for quick fragrance boost.",
    sellData: { sold: 110, total: 190 },
    image:
      "https://m.media-amazon.com/images/I/51+obcd337L._AC_UF894,1000_QL80_.jpg",
  },
];

const GroceryItems = [
  {
    id: 1,
    title: "Basmati Rice",
    unit: "pkts",
    price: 185,
    pieces: 1,
    description:
      "Premium long-grain basmati rice with aromatic fragrance, perfect for biryanis and daily meals.",
    sellData: { sold: 114, total: 200 },
    image:
      "https://www.kolkatarice.com/wp-content/uploads/2024/10/bg-rice-basmati-03.jpg",
  },
  {
    id: 2,
    title: "Whole Wheat Atta",
    unit: "pkts",
    price: 420,
    pieces: 1,
    description:
      "Stone-ground whole wheat flour rich in fiber and nutrients for healthy rotis and parathas.",
    sellData: { sold: 168, total: 250 },
    image:
      "https://cdnasd.countrydelight.in/cdproductimg/new-website/WHOLEWEATATTA-PDP-3.jpg_1724233965284.jpg",
  },
  {
    id: 3,
    title: "Toor Dal",
    unit: "pkts",
    price: 145,
    pieces: 1,
    description:
      "Premium quality toor dal with high protein content, ideal for traditional dal preparations.",
    sellData: { sold: 92, total: 180 },
    image:
      "https://www.greendna.in/cdn/shop/files/toor-dal2_1024x1024@2x.jpg?v=1747065927",
  },
  {
    id: 4,
    title: "Refined Sunflower Oil",
    unit: "pkts",
    price: 165,
    pieces: 1,
    description:
      "Heart-healthy refined sunflower oil with vitamin E, perfect for cooking and frying.",
    sellData: { sold: 201, total: 300 },
    image:
      "https://ases.in/cdn/shop/files/1_7c9cf6f2-d570-4f62-9a2f-8bdcbb84927a.jpg?v=1714507689",
  },
  {
    id: 5,
    title: "Organic Jaggery",
    unit: "pkts",
    price: 95,
    pieces: 1,
    description:
      "Pure organic jaggery made from sugarcane juice, natural sweetener rich in iron and minerals.",
    sellData: { sold: 150, total: 220 },
    image:
      "https://www.health.com/thmb/BV9pE9QUUKIlKT00r4_oZUvzW-c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-2185398044-78d583abd4cc492aaef1c55a3a403a5f.jpg",
  },
  {
    id: 6,
    title: "Masoor Dal",
    unit: "pkts",
    price: 120,
    pieces: 1,
    description:
      "Red lentils packed with protein and fiber, quick-cooking dal for everyday meals.",
    sellData: { sold: 132, total: 200 },
    image:
      "https://www.greendna.in/cdn/shop/products/masoor2_550x.jpg?v=1561996173",
  },
  {
    id: 7,
    title: "Turmeric Powder",
    unit: "pkts",
    price: 85,
    pieces: 1,
    description:
      "Pure turmeric powder with anti-inflammatory properties for cooking and health benefits.",
    sellData: { sold: 97, total: 160 },
    image:
      "https://m.media-amazon.com/images/I/51MV9JUTOIL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 9,
    title: "Rock Salt",
    unit: "pkts",
    price: 45,
    pieces: 1,
    description:
      "Natural rock salt with essential minerals, healthier alternative to regular table salt.",
    sellData: { sold: 110, total: 190 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MwQUdIJ4MQaTVC9ng-VNSmV84XKZ1rX5D9UYcgkvWnAc11HEG9v-RCLh6uqVWaGOVrQ&usqp=CAU",
  },
  {
    id: 10,
    title: "Garam Masala",
    unit: "pkts",
    price: 75,
    pieces: 1,
    description:
      "Authentic blend of aromatic spices for authentic Indian curries and gravies.",
    sellData: { sold: 143, total: 210 },
    image:
      "https://www.allrecipes.com/thmb/b6Rab3PSMtgQS9Kjpw0yGdzAmj4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-RM-142967-easy-garam-masala-ddmfs-3x4-5ecfc3a6b289496ea57d000853ad31fd.jpg",
  },
];

const VeggieItems = [
  {
    id: 1,
    title: "Fresh Tomatoes",
    unit: "kgs",
    price: 40,
    pieces: 1,
    description:
      "Farm-fresh ripe tomatoes rich in lycopene and vitamin C, perfect for curries and salads.",
    sellData: { sold: 114, total: 200 },
    image: "https://ww2.kqed.org/app/uploads/sites/24/2012/10/IMG_5485.jpg",
  },
  {
    id: 2,
    title: "Green Capsicum",
    unit: "kgs",
    price: 60,
    pieces: 1,
    description:
      "Crisp bell peppers loaded with antioxidants, ideal for stir-fries and pizza toppings.",
    sellData: { sold: 168, total: 250 },
    image:
      "https://m.media-amazon.com/images/I/61TPd3H3nfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Onions",
    unit: "kgs",
    price: 35,
    pieces: 1,
    description:
      "Premium quality onions essential for Indian cooking, adds flavor to every dish.",
    sellData: { sold: 92, total: 180 },
    image:
      "https://zamaorganics.com/cdn/shop/files/madras_onion_1000_x_1000_px_1_1.png?v=1752752494",
  },
  {
    id: 4,
    title: "Potatoes",
    unit: "kgs",
    price: 30,
    pieces: 1,
    description:
      "Fresh potatoes rich in potassium and carbohydrates, versatile vegetable for various recipes.",
    sellData: { sold: 201, total: 300 },
    image:
      "https://www.jiomart.com/images/product/original/590003516/potato-1-kg-product-images-o590003516-p590003516-0-202509221825.jpg?im=Resize=(420,420)",
  },
  {
    id: 5,
    title: "Spinach (Palak)",
    unit: "kgs",
    price: 25,
    pieces: 1,
    description:
      "Organic spinach leaves packed with iron and vitamins for healthy palak paneer and soups.",
    sellData: { sold: 150, total: 220 },
    image:
      "https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg",
  },
  {
    id: 6,
    title: "Cauliflower (Phool Gobi)",
    unit: "kgs",
    price: 45,
    pieces: 1,
    description:
      "Fresh cauliflower florets high in fiber and vitamin C, great for aloo gobi and parathas.",
    sellData: { sold: 132, total: 200 },
    image:
      "https://www.neoflam.com.au/cdn/shop/articles/cauliflower_image_a7647855-dc53-427b-9c64-4a6f23762733.jpg?v=1744344281",
  },
  {
    id: 7,
    title: "Carrots",
    unit: "kgs",
    price: 50,
    pieces: 1,
    description:
      "Crunchy carrots loaded with beta-carotene for healthy eyes, perfect for salads and halwa.",
    sellData: { sold: 97, total: 160 },
    image:
      "https://www.jiomart.com/images/product/original/590000186/carrot-orange-500-g-product-images-o590000186-p590000186-0-202409171905.jpg?im=Resize=(420,420)",
  },
  {
    id: 8,
    title: "Lady Finger (Bhindi)",
    unit: "kgs",
    price: 55,
    pieces: 1,
    description:
      "Tender okra rich in dietary fiber, ideal for bhindi masala and dry sabzi preparations.",
    image:
      "https://img.freepik.com/premium-photo/okra-ladys-finger-bhindi-fresh-green-vegetable-arranged-basket-with-wooden-textured-backgroundisolated-selective-focustop-view_527904-3158.jpg",
  },
  {
    id: 9,
    title: "Green Peas",
    unit: "kgs",
    price: 70,
    pieces: 1,
    description:
      "Sweet green peas full of protein and vitamins, essential for matar paneer and pulao.",
    sellData: { sold: 110, total: 190 },
    image:
      "https://www.bbassets.com/media/uploads/p/xl/40005817_5-fresho-green-peas-peeled.jpg",
  },
  {
    id: 10,
    title: "Brinjal (Baingan)",
    unit: "kgs",
    price: 38,
    pieces: 1,
    description:
      "Purple eggplant rich in antioxidants, perfect for baingan bharta and curry dishes.",
    sellData: { sold: 143, total: 210 },
    image:
      "https://www.bbassets.com/media/uploads/p/l/10000053_20-fresho-brinjal-bottle-shape.jpg",
  },
];

const homeData = [
  {
    id: 1,
    title: "Diyas & Candles",
    data: DiyaItems,
    background: "bg-gray-100",
  },
  {
    id: 2,
    title: "Bakery Items",
    data: BakeryItems,
    background: "bg-white",
  },
  {
    id: 3,
    title: "Handlooms",
    data: HandloomItems,
    background: "bg-gray-100",
  },
  {
    id: 4,
    title: "Home Furnishing",
    data: HomeFurnishingItems,
    background: "bg-white",
  },
  {
    id: 5,
    title: "Incense Sticks",
    data: AgarbattiItems,
    background: "bg-gray-100",
  },
  {
    id: 6,
    title: "Grocery",
    data: GroceryItems,
    background: "bg-white",
  },
  {
    id: 7,
    title: "Vegetables",
    data: VeggieItems,
    background: "bg-gray-100",
  },
];

const categoryData = [
  {
    id: 1,
    image:
      "https://www.satvikstore.in/cdn/shop/files/DSC0129copy_1.jpg?v=1702895460",
    title: "Diyas & Candles",
    icon: MoreIcon,
  },
  {
    id: 2,
    image:
      "https://www.fnp.com/images/pr/l/v20221205202818/cream-drop-chocolate-cake-1-kg_1.jpg",
    title: "Bakery",
    icon: MoreIcon,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13gQSfzZqvbjBsZbtlbJSpak-JJ38pmjd5T6Td9JqAVIHhpIrSZKvu6BC_4A-i9RJMig&usqp=CAU",
    title: "Handlooms",
    icon: MoreIcon,
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0632/2526/6422/products/cushion-covers-wayfarer-cushion-cover-1.jpg?v=1763548512",
    title: "Home Furnishing",
    icon: MoreIcon,
  },
  {
    id: 5,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/5/511467421/CP/GC/QW/241789346/floral-incense-sticks-500x500.jpeg",
    title: "Incense Sticks",
    icon: MoreIcon,
  },
  {
    id: 6,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/XP/HK/UQ/113167197/grocery-items-500x500.jpg",
    title: "Grocery",
    icon: MoreIcon,
  },
  {
    id: 7,
    image:
      "https://cavemanorganics.pk/cdn/shop/articles/pixelcut-export_fb8a1cef-ce02-40b5-ae4d-1cb42965945b.jpg?v=1713979861",
    title: "Organic Food",
    icon: MoreIcon,
  },
  {
    id: 8,
    image: "",
    title: "All Category",
    icon: MoreIcon,
  },
];

export { homeData, categoryData };
