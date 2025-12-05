export const fantasyGrammar = {
  origin: ['#sentence.capitalize#'],
  sentence: [
    'the #hero# ventured into the #location# seeking #quest_object#',
    '#creature_plural# roamed the #terrain# under the #sky_condition#',
    'a #magic_user# cast #spell_type# upon the #target#',
    'the #artifact# glowed with #magic_descriptor# energy in the #time_of_day#',
    'ancient #structure_plural# dotted the landscape, remnants of #ancient_civilization#',
    '#villain# commanded an army of #creature_plural# from the #evil_location#',
    'the prophecy spoke of #hero# who would #heroic_deed#',
    'deep within the #dungeon#, #treasure# lay hidden behind #obstacle#',
    '#companion# and #hero# traveled the #path# toward #destination#',
    'the #magical_item# possessed the power to #magical_effect#',
    'legends told of #mythical_creature# dwelling in the #remote_location#',
    '#royal# ruled the #kingdom# with #ruling_style# and #virtue#',
    'the #celebration# commenced as the #celestial_event# appeared overhead',
    '#weather_magic# swept across the #terrain#, summoned by #magic_user#',
    'merchants traded #trade_good# in the bustling #settlement#',
    'the #religious_figure# blessed the #hero# before the journey to #dangerous_location#',
    'shadows of #creature_plural# moved through the #atmospheric_location#',
    'a #natural_phenomenon# revealed the entrance to #hidden_place#',
    'the #faction# sought to control #power_source# for their own ends',
    '#hero# wielded #weapon# forged from #magical_material# and #rare_element#',
    'the #magic_school# required years of study to master #advanced_magic#',
    'during the #festival#, villagers honored the #deity# with offerings of #offering#',
    'the curse could only be broken by #solution# before the #deadline#',
    '#shapeshifter# took the form of #animal# to escape the #pursuer#',
    'whispers of #rumor# spread throughout the #settlement# like wildfire',
  ],
  hero: [
    'the wanderer', 'the chosen one', 'the warrior', 'the ranger', 'the knight',
    'the champion', 'the defender', 'the seeker', 'the adventurer', 'the guardian',
    'the blade master', 'the pathfinder', 'the huntress', 'the protector'
  ],
  companion: [
    'the faithful companion', 'the wise mentor', 'the skilled archer', 'the brave squire',
    'the loyal friend', 'the mysterious stranger', 'the exiled prince', 'the cunning rogue',
    'the gentle healer', 'the grizzled veteran', 'the young apprentice'
  ],
  magic_user: [
    'powerful sorcerer', 'wandering enchanter', 'village witch', 'court mage',
    'hermit conjurer', 'battle mage', 'arcane scholar', 'elementalist',
    'wise sage', 'dark warlock', 'mystical channeler', 'spell weaver'
  ],
  villain: [
    'the dark lord', 'the corrupted king', 'the necromancer', 'the warlord',
    'the shadow master', 'the tyrant', 'the usurper', 'the fallen hero',
    'the cult leader', 'the demon summoner', 'the power-hungry sorcerer'
  ],
  creature_plural: [
    'dire wolves', 'giant spiders', 'cave trolls', 'forest spirits', 'undead warriors',
    'wild griffons', 'frost giants', 'fire drakes', 'shadow beasts', 'stone guardians',
    'swamp creatures', 'mountain wyrms', 'spectral wraiths', 'corrupted beings'
  ],
  mythical_creature: [
    'an ancient dragon', 'a phoenix', 'a sea serpent', 'a chimera', 'a basilisk',
    'a hydra', 'a celestial being', 'an earth titan', 'a frost wyrm', 'a thunder bird'
  ],
  location: [
    'Whispering Woods', 'Shadowfell Mountains', 'Crystal Caverns', 'Misty Marshlands',
    'Crimson Desert', 'Frozen Wastes', 'Emerald Valley', 'Obsidian Peaks',
    'Starfall Plains', 'Thornwood Forest', 'Ashen Badlands', 'Silver Coast'
  ],
  terrain: [
    'rolling hills', 'dense forests', 'barren wastelands', 'rocky highlands',
    'windswept plains', 'treacherous mountains', 'dark woodlands', 'coastal cliffs',
    'volcanic badlands', 'frozen tundra', 'misty moorlands', 'sun-scorched dunes'
  ],
  settlement: [
    'village', 'trading post', 'fortress city', 'riverside town', 'mountain hold',
    'port city', 'capital', 'border outpost', 'market town', 'temple city'
  ],
  kingdom: [
    'realm', 'empire', 'dominion', 'principality', 'confederation', 'territory',
    'lands', 'nation', 'duchy', 'sovereign state', 'united provinces'
  ],
  dungeon: [
    'forgotten crypt', 'abandoned mine', 'cursed temple', 'underground labyrinth',
    'ancient tomb', 'ruined fortress', 'dark catacomb', 'sealed vault',
    'haunted keep', 'lost sanctuary', 'buried city', 'forbidden chamber'
  ],
  structure_plural: [
    'stone circles', 'ruined towers', 'crumbling castles', 'sacred shrines',
    'ancient monuments', 'weathered statues', 'mystical obelisks', 'forgotten temples'
  ],
  evil_location: [
    'Dark Citadel', 'Shadow Realm', 'Blighted Lands', 'Cursed Fortress',
    'Obsidian Tower', 'Nether Keep', 'Doom Mountain', 'Abyss Gate'
  ],
  dangerous_location: [
    'the Forbidden Zone', 'the Cursed Ruins', 'the Monster\'s Lair', 'the Dark Portal',
    'the Demon\'s Gate', 'the Void Chasm', 'the Death Peaks', 'the Blighted Grove'
  ],
  remote_location: [
    'the World\'s Edge', 'the Deepest Caverns', 'the Highest Peak', 'the Endless Ocean',
    'the Primordial Forest', 'the Eternal Glacier', 'the Bottomless Chasm'
  ],
  hidden_place: [
    'a secret chamber', 'a lost sanctuary', 'an ancient vault', 'a hidden grove',
    'a mystical portal', 'a forgotten library', 'a concealed passage', 'a sacred spring'
  ],
  atmospheric_location: [
    'fog-shrouded valleys', 'moonlit clearings', 'shadow-draped ruins',
    'mist-covered lakes', 'twilight forests', 'storm-battered coasts'
  ],
  destination: [
    'the Sacred Mountain', 'the Oracle\'s Temple', 'the End of the World',
    'the Eternal City', 'the Healing Springs', 'the Tower of Knowledge',
    'the Royal Palace', 'the Great Library', 'the Ancient Battlefield'
  ],
  path: [
    'King\'s Road', 'mountain pass', 'forest trail', 'ancient highway',
    'pilgrim\'s path', 'merchant route', 'hidden way', 'perilous route'
  ],
  quest_object: [
    'the lost crown', 'ancient knowledge', 'a cure for the plague', 'the stolen relic',
    'the enchanted blade', 'the sacred scroll', 'the crystal of power', 'redemption',
    'the fountain of life', 'the imprisoned spirit', 'the celestial key'
  ],
  artifact: [
    'enchanted amulet', 'mystic orb', 'runic blade', 'crown of kings',
    'staff of power', 'ancient tome', 'crystal shard', 'blessed chalice',
    'legendary bow', 'dragon stone', 'phoenix feather', 'celestial compass'
  ],
  magical_item: [
    'enchanted ring', 'flying carpet', 'cloak of shadows', 'boots of speed',
    'bag of holding', 'crystal ball', 'wand of light', 'helm of wisdom',
    'potion of strength', 'scroll of teleportation', 'mirror of truth'
  ],
  weapon: [
    'a longsword', 'a war axe', 'a mighty hammer', 'twin daggers',
    'a legendary spear', 'an enchanted bow', 'a crystal staff', 'a sacred mace',
    'a rune blade', 'a crescent scythe', 'a blessed crossbow'
  ],
  treasure: [
    'piles of gold', 'ancient artifacts', 'precious gemstones', 'magical weapons',
    'enchanted armor', 'royal jewels', 'arcane tomes', 'dragon\'s hoard',
    'lost relics', 'cursed treasures', 'holy relics'
  ],
  trade_good: [
    'exotic spices', 'enchanted silk', 'rare herbs', 'precious metals',
    'mystical stones', 'fine weapons', 'ancient maps', 'magical components',
    'healing potions', 'blessed oils', 'dragon scales'
  ],
  offering: [
    'harvest grain', 'crafted jewelry', 'sacred wine', 'blessed candles',
    'incense and flowers', 'gold coins', 'handwoven tapestries', 'fresh bread'
  ],
  spell_type: [
    'a protection charm', 'a healing spell', 'a fire incantation', 'an illusion',
    'a binding curse', 'a summoning ritual', 'a transformation hex', 'a divination',
    'a lightning bolt', 'an ice blast', 'a mind charm', 'a banishment'
  ],
  advanced_magic: [
    'elemental control', 'time manipulation', 'dimensional travel', 'life restoration',
    'matter transformation', 'weather command', 'spirit summoning', 'true sight'
  ],
  magic_school: [
    'art of elemental magic', 'school of divination', 'path of healing',
    'way of transformation', 'discipline of enchantment', 'craft of illusion'
  ],
  target: [
    'the fortress gates', 'the attacking horde', 'the ancient seal',
    'the cursed artifact', 'the wounded soldiers', 'the corrupted land',
    'the possessed villager', 'the magic barrier', 'the enemy champion'
  ],
  magic_descriptor: [
    'ethereal', 'radiant', 'pulsing', 'shimmering', 'crackling', 'swirling',
    'blazing', 'frozen', 'shadowy', 'celestial', 'arcane', 'primordial'
  ],
  magical_effect: [
    'control the elements', 'see the future', 'heal any wound', 'grant immortality',
    'summon storms', 'transform shape', 'speak with spirits', 'bend minds',
    'open portals', 'freeze time', 'raise the dead', 'command nature'
  ],
  magical_material: [
    'starlight', 'moonstone', 'dragon bone', 'celestial iron', 'shadow steel',
    'phoenix ash', 'crystal essence', 'blessed silver', 'eternal ice', 'living wood'
  ],
  rare_element: [
    'enchanted emeralds', 'pure diamonds', 'blood rubies', 'sky sapphires',
    'dark opals', 'soul crystals', 'sun gold', 'ghost silver', 'void obsidian'
  ],
  sky_condition: [
    'crimson sunset', 'full moon', 'stormy skies', 'twin moons', 'blood-red eclipse',
    'aurora lights', 'starless night', 'lightning-split clouds', 'dawning sun'
  ],
  time_of_day: [
    'witching hour', 'breaking dawn', 'high noon', 'twilight hour', 'dead of night',
    'first light', 'eventide', 'midnight', 'golden hour', 'darkest hour'
  ],
  celestial_event: [
    'eclipse', 'meteor shower', 'alignment of planets', 'blood moon', 'aurora',
    'falling star', 'comet', 'twin moons', 'crimson sun', 'celestial convergence'
  ],
  natural_phenomenon: [
    'earthquake', 'lightning strike', 'rainbow', 'sudden flood', 'rockslide',
    'whirlwind', 'aurora', 'tidal wave', 'volcanic eruption', 'solar eclipse'
  ],
  weather_magic: [
    'conjured blizzard', 'summoned thunderstorm', 'arcane fog', 'magical tempest',
    'enchanted winds', 'mystical rain', 'sorcerous lightning', 'hex-born tornado'
  ],
  obstacle: [
    'magical wards', 'ancient puzzles', 'guardian spirits', 'deadly traps',
    'cursed doors', 'riddle locks', 'elemental barriers', 'guardian beasts',
    'enchanted chains', 'shifting mazes', 'spectral sentries'
  ],
  heroic_deed: [
    'unite the kingdoms', 'defeat the darkness', 'restore balance', 'break the curse',
    'save the realm', 'awaken the ancients', 'seal the portal', 'reclaim the throne',
    'end the war', 'lift the plague', 'vanquish evil', 'bring peace'
  ],
  royal: [
    'the benevolent king', 'the wise queen', 'the young prince', 'the fierce princess',
    'the regent', 'the emperor', 'the high lord', 'the sovereign', 'the monarch'
  ],
  religious_figure: [
    'village priest', 'high priestess', 'temple elder', 'wandering monk',
    'oracle', 'prophet', 'shrine keeper', 'blessed cleric', 'holy sage'
  ],
  ruling_style: [
    'wisdom', 'strength', 'justice', 'mercy', 'cunning', 'honor',
    'an iron fist', 'compassion', 'tradition', 'ancient law'
  ],
  virtue: [
    'courage', 'honor', 'wisdom', 'compassion', 'justice', 'loyalty',
    'temperance', 'humility', 'fortitude', 'grace', 'nobility'
  ],
  celebration: [
    'harvest festival', 'victory feast', 'royal wedding', 'solstice ceremony',
    'coronation', 'midsummer celebration', 'coming of age ritual', 'memorial rites'
  ],
  festival: [
    'Spring Awakening', 'Harvest Moon', 'Winter Solstice', 'Summer Festival',
    'Day of the Ancestors', 'Festival of Lights', 'Warrior\'s Commemoration'
  ],
  deity: [
    'sun god', 'moon goddess', 'earth mother', 'war deity', 'harvest spirit',
    'sea lord', 'sky father', 'forest guardian', 'storm bringer', 'fire keeper'
  ],
  ancient_civilization: [
    'the Elder Race', 'the First Kingdom', 'the Star People', 'the Giant Kings',
    'the Dragon Lords', 'the Ancient Empire', 'the Celestial Dynasty', 'the Titan Builders'
  ],
  faction: [
    'the Mage Circle', 'the Warrior Guild', 'the Thieves Confederation', 'the Holy Order',
    'the Merchant League', 'the Assassin Brotherhood', 'the Druid Council', 'the Knight Order'
  ],
  power_source: [
    'the Elemental Nexus', 'the World Tree', 'the Crystal Core', 'the Sacred Flame',
    'the Ancient Well', 'the Star Forge', 'the Dragon\'s Heart', 'the Eternal Spring'
  ],
  shapeshifter: [
    'the druid', 'the cursed noble', 'the skin-walker', 'the enchanted one',
    'the were-beast', 'the polymorphed mage', 'the blessed shaman'
  ],
  animal: [
    'a raven', 'a wolf', 'a bear', 'an eagle', 'a stag', 'a serpent',
    'a hawk', 'a fox', 'a panther', 'an owl', 'a lion', 'a deer'
  ],
  pursuer: [
    'royal guard', 'bounty hunters', 'dark knights', 'vengeful spirits',
    'shadow assassins', 'enemy soldiers', 'hired mercenaries', 'corrupted rangers'
  ],
  rumor: [
    'an approaching army', 'a hidden treasure', 'a royal scandal', 'dark omens',
    'a coming plague', 'dragons awakening', 'a pretender to the throne', 'magical disturbances'
  ],
  solution: [
    'true love\'s kiss', 'a noble sacrifice', 'the tears of innocence', 'ancient words of power',
    'royal bloodline', 'three impossible tasks', 'the light of dawn', 'forgiveness granted'
  ],
  deadline: [
    'next full moon', 'winter solstice', 'the king\'s death', 'the eclipse',
    'the seventh day', 'first snowfall', 'harvest moon', 'coming of age'
  ],
};

export const fantasyConfig = {
  name: 'Fantasy',
  description: 'Embark on an epic quest with magical placeholder text',
  gradientFrom: 'from-purple-600 dark:from-purple-400',
  gradientTo: 'to-pink-600 dark:to-pink-500',
  accentColor: 'purple',
  borderColor: 'border-purple-500/30',
  secondaryBorderColor: 'border-pink-500/30',
};
