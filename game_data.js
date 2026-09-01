"use strict";

/*
 * World data and helpers shared by road_events.html and town_events.html.
 * Loaded as a classic script (not a module) so the pages still work when
 * opened directly from disk over file://.
 */

const nodes = {
  mount_arbora:[684,274], land_of_hot_water:[1223,271],
  gift_of_shuritashi:[274,719], gale_fields:[689,911],
  coastal_highlands:[1147,1253], brackwater_wetlands:[1369,669],
  shallows:[93,1122], mountain_approach:[656,541]
};

const displayNames = {
  mount_arbora:"Mount Arbora", land_of_hot_water:"Land of Hot Water",
  gift_of_shuritashi:"Gift of Shuritashi", gale_fields:"Gale Fields",
  coastal_highlands:"Coastal Highlands", brackwater_wetlands:"Brackwater Wetlands",
  shallows:"Shallows", mountain_approach:"Mountain Approach"
};

const edges = [
  ["shallows","gift_of_shuritashi"],["shallows","gale_fields"],
  ["gift_of_shuritashi","gale_fields"],["gift_of_shuritashi","mountain_approach"],
  ["gale_fields","mountain_approach"],["gale_fields","brackwater_wetlands"],
  ["gale_fields","coastal_highlands"],["mountain_approach","mount_arbora"],
  ["mountain_approach","brackwater_wetlands"],["coastal_highlands","brackwater_wetlands"],
  ["coastal_highlands","land_of_hot_water"],["brackwater_wetlands","land_of_hot_water"]
];

const edgeEnvironments = {
  "shallows|gift_of_shuritashi":["Coastal","Grasslands"],
  "shallows|gale_fields":["Grasslands"],
  "gift_of_shuritashi|gale_fields":["Grasslands","Forest","Coastal"],
  "gift_of_shuritashi|mountain_approach":["Mountain","Grasslands","Forest"],
  "gale_fields|mountain_approach":["Grasslands"],
  "gale_fields|brackwater_wetlands":["Forest","Swamp","Grasslands"],
  "gale_fields|coastal_highlands":["Forest","Grasslands","Coastal"],
  "mountain_approach|mount_arbora":["Mountain"],
  "mountain_approach|brackwater_wetlands":["Swamp","Forest"],
  "coastal_highlands|brackwater_wetlands":["Coastal","Swamp","Forest"],
  "coastal_highlands|land_of_hot_water":["Coastal","Swamp","Forest"],
  "brackwater_wetlands|land_of_hot_water":["Swamp","Forest"]
};

const nodeIngredients = {
  mount_arbora:["Black Cinnamon","Bottle Cap","Dawn Petal","Essence of Glumbug","Forge Slag","Gargoyle Powder","Mountain Snail","Noodle Eel","Opu Opu Spring Water","Petrified Alligator","Spark Plug","Spring","Vinyl Record","Wolfenite","Hand of Eryo","Irimbi Chrysalis","Sage carol’s beetle","Amber","Blue Back Salmon","Boom Beri","Bora Bug","Bundle of Driko Twigs","Clay Snake Tail","Earwax","Fish Head","Hakuma Sapwood","Howler Fur","Mandrake Root","Nobblewort","Oporion Glass","Peeping Willow","Poison","Queen's Dilemma","Raka Paste","Spirit Root","Windbloom","Yugi Sap","Yuma Shrub"],
  land_of_hot_water:["Bottle Cap","Crackling Jasper","Gargoyle Powder","Kojobi Fruit","Molted Lizard Skin","Noodle Eel","Petrified Alligator","Spark Plug","Spirit Tea","Spring","Vinyl Record","Yellow Slime","Fairy willow","Saint Koi Fish scale","Ronin neko Figurine","Bashu Powder","Blue Back Salmon","Boom Beri","Brush Reed","Bundle of Driko Twigs","Chicken Egg","Clay Snake Tail","Earwax","Fish Folk Tooth","Fish Head","Flash Paper","Gohaku Rice","Jumping Bonfire","Oporion Glass","Origami Crane","Pink Candle Wax","Poison","Raka Paste","Sea Water","Seashell","Varrow","Windbloom","Amber","Bamboo"],
  gift_of_shuritashi:["Bottle Cap","Dawn Petal","Fizzing Green","Happy Joy Cake","Kojobi Fruit","Laughing Moss","Munchanka Root","Nakudama Spice","Noodle Eel","Petrified Alligator","Shadowroot","Spark Plug","Spring","Toka Truffle","Vinyl Record","Wychwood","Octopus Ink","Spirit coal","Plumage of a Running Kirio","Apper Carrot","Bamboo","Bashu Powder","Blue Back Salmon","Boom Beri","Bora Bug","Bundle of Driko Twigs","Camp Mite","Chicken Egg","Cloud Horn","Creeping Bolete","Earwax","Fish Folk Tooth","Fish Head","Flash Paper","Green Slime","Hakuma Sapwood","Jumping Bonfire","Jack-o'-Lantern Bits","Knobble Leaf Seaweed","Lovers Vine","Mellowort","Narutomaki","Nobblewort","Pink Candle Wax","Queen's Dilemma","Scalefruit Rind","Sea Water","Seashell","Spindle-Leg Spider Webs","Varrow","Yugi Sap","Blue Back Salmon","Brush Reed","Fish Folk Tooth","Fish Head","Knobble Leaf Seaweed","Oporion Glass","Pungent Sea Foam"],
  gale_fields:["Bottle Cap","Dragon Root","Feather Rock","Glow Worms of the Vale","Kojobi Fruit","Living Spud","Noodle Eel","Petrified Alligator","Spark Plug","Spring","Sun Shroom","Vinyl Record","Wolfenite","Dragon Fang of Yutro","Bubble Gum","Orange Slime","Apper Carrot","Blue Back Salmon","Bora Bug","Bundle of Driko Twigs","Camp Mite","Chicken Egg","Clay Snake Tail","Cloud Horn","Earwax","Fish Head","Green Slime","Hakuma Sapwood","Hill Dragon Egg","Howler Fur","Itchi Beri","Jumping Bonfire","Jack-o'-Lantern Bits","Monkey's Coil","Nobblewort","Poison","Pyramid Melon","Rattle Shoot","Sheep Dragon Wool","Spindle-Leg Spider Webs","Ube","Windbloom","Witch's Broom","Yugi Sap"],
  coastal_highlands:["Bottle Cap","Essence of Glumbug","Kojobi Fruit","Lion's Blume","Nakudama Spice","Noodle Eel","Petrified Alligator","Spark Plug","Spring","Vinyl Record","Blossom of Spirit vine","Bottled Lightning","Ota lantern oil","Wufu Whiskey","Blue Back Salmon","Boom Beri","Bora Bug","Bundle of Driko Twigs","Chicken Egg","Creeping Bolete","Earwax","Fish Head","Flash Paper","Green Slime","Jumping Bonfire","Jack-o'- Lantern Bits","Kojo Root","Mountain Ox Dung","Mouse Tree","Pink Candle Wax","Poison","Sheep Dragon Wool","Snap Vine Sap","Spindle-Leg Spider Webs","Venus Fly Rat","Yuma Shrub","Rust Crab","Sea Water","Seashell","Squid Ink","Tangle Weed","Witch's Eye Coral"],
  brackwater_wetlands:["Bottle Cap","Corrupted Seawater","Corrupted Slime","Hakumon's Ramen Broth","Laughing Moss","Mournshade","Night Thistle","Noodle Eel","Petrified Alligator","Scumweed","Shadowroot","Spark Plug","Spring","Vinyl Record","Wolfenite","Golden Root","Lionfish Poison","Nokumai’s Frozen Breath","Starstone","Tears of the moon","Bamboo","Blue Back Salmon","Bora Bug","Brush Reed","Bundle of Driko Twigs","Camp Mite","Chicken Egg","Clay Snake Tail","Creeping Bolete","Earwax","Fish Folk Tooth","Fish Head","Green Slime","Gohaku Rice","Howler Fur","Kloth Leech","Knobble Leaf Seaweed","Lovers Vine","Mellowort","Narutomaki","Poison","Queen's Dilemma","Raka Paste","Ribbon Rot","Scalefruit Rind","Sea Water","Seashell","Varrow"],
  shallows:[], mountain_approach:[]
};

const potions = [
    "Rabbits Speed", "Spirit of Salyri", "Displacement Field", "Shepherd’s bane", "Bottled Bomb", "Wonder juice",
    "Candlecap", "Eagle Vision", "Paranoia", "Static shock", "Incoming", "Lightning Breath", "Heroism", "Slugskin",
    "Thunderbelch", "Seeking smoke", "Dancing Juice", "Tiny Bubbles", "Keening voice", "Kinetic Pop",
    "Healing Gas", "Gargoyle Hooch", "Elixir of Jipampa", "Catspeed", "Durability", "Tunnel Vision",
    "Ratatam’s Glowskin Elixir", "Don’t Hit me Juice", "Invulnerability", "Bottled Bind", "Respiratory Distress",
    "Sheep Dragon Brew", "Enhanced static shock", "Enhance lightning Breath", "Enhanced Bottle Bomb",
    "Wrathful Spirit", "Rapid Withdrawal", "Life-steal", "Withered will", "Astounding vigor", "Many Hands",
    "Epic Bottle Bomb", "Bottle Torch", "Essence of Great Rivers", "Carla cackle tooth’s Corruption Cocktail",
    "Hunter speed", "Severed Reaction", "Dragon frog Transmutation", "Weapon Master Elixir", "Beast Hide",
    "Spirit Armor", "Prickleskin", "Claws of the crab king", "Rubberskin", "Cinderskin", "Iron Mind",
    "Fire shield", "Pumpkin Patch Guard", "Demonskin", "Hero blade",
];

const equipment = [
    // weapons
    "Boomerang", "Butterfly Staff", "Fan", "Frying Pan", "Umbrella", "Chef's Knife", "Oyster Shucker",
    "Fancy Fishbone Remover", "Bench Scraper", "Potato Ricer", "Scimitar", "Bubble Road", "Vertebrae Sword",
    // clothing
    "Alpaca Winter Coat", "Yellow Striped Summer Romper", "Beekeeper's Suit", "Hoka Shoes", "Red Bandana",
    "Star Spangled Banner Thong", "Tie-Dye T-Shirt", "Swimsuit", "Girlscout Vial Vest", "Treat Pouch", "Fedora",
    // Other
    "Refrigerator Advanced Sling Bag", "Basic Tent", "Advanced Tent", "Cat Toys", "Dog Toys",
    "Large Fuzzy Blanket",
];

const monsters = [
  ["Powerful Animated Object","Any"],["Aquatic Beast Sprits","Any"],["Powerful Aquatic Beast Spirts","Any"],
  ["Beast Spirts","Any"],["Powerful Beast Spirts","Any"],["Flying Beast Spirit","Any"],
  ["Powerful Flying Beast Spirit","Any"],["Elemental Spirit","Any"],["Powerful Elemental Spirit","Any"],
  ["Spectral Spirits","Any"],["Power Spectral Spirit","Any"],["Flora Spirits","Any"],
  ["Powerful Flora Spirits","Any"],["Acorn Crab","Forest"],["Akaobata","Any"],["Bearracuda","Mountain"],
  ["Cat of Prodigious","Forest,Grassland"],["Clone of Valentina","Any"],["Corrupted Bernard","Coastal,Swamp"],
  ["Crawler","Forest, Swamp"],["Cuddle Bug","Forest,Swamp"],["Deep Angler","Coastal"],["Demon","Any"],
  ["Dragon","Any"],["Dragon Poodle","Any"],["Elder Dragon Frog","Any"],["Dustbunny","Grassland"],
  ["Field Giant","Grassland"],["Fish Folk","Coastal"],["Giant Blueberry Jelly Fish","Any"],["Giant Koi","Any"],
  ["Goro Goro","Forest"],["Hammer Gull","Coastal,Mountain"],["Hill Dragon","Grasslands"],["Howlers","Forest,Grasslands"],
  ["Howler Yipper","Forest,Grasslands"],["Howler Snarlers","Forest,Grasslands"],["Howler Stalkers","Forest,Grasslands"],
  ["The Hunter","Any"],["Kafuka","Forest,Swamp"],["Lion Blume","Forest,Grassland,Mountain"],
  ["Mosslings","Forest,Grassland,Mountain"],["Pixies","Forest,Grassland,Mountain"],["Postal Knight","Any"],
  ["Rubble Golem","Any"],["Seaweed Elemental","Coastal"],["Sheep Dragon","Grassland"],["Skeletal Fish","Coastal,Swamp"],
  ["SHY KING","Any"],["THE SKY SALAMANDER","Any"],["SLAGGER","Any"],["Slimes","Any"],
  ["Green Slimes","Forest,Mountain,Swamp"],["Yellow Slimes","Forest,Mountain,Swamp"],
  ["Orange Slimes","Forest,Mountain,Swamp"],["Corrupted Slime","Forest,Mountain,Swamp"],["Soda Slime","ANY"],
  ["Bongkia Spirit","ANY"],["Animalistic Spirt","ANY"],["Pest Spirt","ANY"],["SnowBall Spirts","Mountains"],
  ["STONE WHALE","Any"],["Stul","Forest"],["Urugama","Forest"],["Vespoma","Coastland,Forest,Swamp"],
  ["Vile Corruption","Coastland,Forest,Swamp"],["Wandering Door","ANY"],["Yokario","Any"]
];

const monsterEnvs = Object.fromEntries(monsters.map(([name,envs]) => [name, envs.split(",")]));
const envMonsters = {};
for (const [name, envs0] of monsters) {
  const envs = envs0.toLowerCase() === "any"
    ? ["Coastal","Forest","Swamp","Mountains","Grasslands"] : envs0.split(",");
  for (const e of envs) (envMonsters[e] ??= []).push(name);
}

const randomChoice = a => a[Math.floor(Math.random()*a.length)];
const sample = (a,n) => Array.from({length:n}, () => randomChoice(a));

const randInt = (l,r) => Math.round(Math.random()*(r-l) + l);

function chooseEquipment() {
  return sample(equipment,1);
}

function choosePotions() {
  return sample(potions,2);
}

function monsterForEnv(env) {
  // Normalize the environment spellings used inconsistently in the source data.
  if (!env) return "Unknown";
  const normalized = {
    "Grassland": "Grasslands",
    "Coastland": "Coastal",
    "ANY": "Coastal"
  }[env] || env;

  const list = envMonsters[normalized] || envMonsters[env] || [];
  return list.length ? randomChoice(list) : "Unknown";
}

function pretty(s) {
  return displayNames[s] || s.replaceAll("_"," ").replace(/\b\w/g,c=>c.toUpperCase());
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

// Renders the shared "Equipment / Potions / Ingredients" body used by both
// road vending machines and town shops. Only the ingredient pool differs.
function stockDetail(ingredients) {
  return "Equipment: " + chooseEquipment().join(", ") +
         "\nPotions: " + choosePotions().join(", ") +
         "\nIngredients: " + (ingredients.length ? ingredients.join(", ") : "None available here");
}

// Fills the select with every location, in map-definition order.
function populateLocationSelect(select) {
  for (const n of Object.keys(nodes)) select.add(new Option(pretty(n),n));
}
