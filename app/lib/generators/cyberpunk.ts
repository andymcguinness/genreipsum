export const cyberpunkGrammar = {
  origin: ['#sentence.capitalize#'],
  sentence: [
    '#protagonist# #action# the #location#, #gerund# #object#',
    'the #adjective# #noun# #verb# through #location#',
    '#protagonist# #observe# the #adjective# #tech# in the #location#',
    'neon #plural_noun# #verb# across the #adjective# #atmosphere#',
    '#corporation# #corporate_action# the #market_item#, #consequence#',
    '#adjective# #tech# #malfunction# in the #location#, #consequence#',
    '#slang_phrase#, #protagonist# #past_action# into the #location#',
    'the #hacker_type# jacked into #matrix_space#, hunting for #valuable#',
    '#street_slang#: #observation# in the #time_period#',
    '#body_mod# dealers hawked their wares near the #landmark#',
    'through #weather# and #urban_decay#, #protagonist# made the drop',
    '#ai_entity# #ai_action# across the #network_location#',
    '#gang# controlled the #district# with #weapon_plural# and #intimidation#',
    'chrome dreams and #substance# promises filled the #seedy_location#',
    '#transaction# went down in the #hidden_spot#, no questions asked',
  ],
  protagonist: [
    'the netrunner', 'the edgerunner', 'the solo', 'the razorgirl', 'the decker',
    'the console cowboy', 'the chiphead', 'the street samurai', 'the fixer',
    'the gonk', 'the corpo', 'the ripperdoc', 'the techie', 'the rockerboy'
  ],
  hacker_type: ['console cowboy', 'cyberjockey', 'decker', 'netrunner', 'code monkey', 'ghost in the machine'],
  action: [
    'flatlined', 'jacked into', 'ghosted through', 'breached', 'slotted into',
    'zero-ed', 'dusted', 'fragged', 'geeked', 'wiped', 'cracked', 'hijacked'
  ],
  past_action: ['flatlined their way', 'jacked', 'ghost-walked', 'phased', 'slid', 'punched'],
  observe: ['eyeballed', 'scoped', 'clocked', 'pinged', 'scanned', 'tagged', 'traced'],
  gerund: [
    'slinging', 'running', 'pushing', 'fencing', 'jacking', 'slotting',
    'smuggling', 'boosting', 'ripping', 'ghosting', 'bleeding'
  ],
  object: [
    'hot data', 'black ICE', 'stolen RAM', 'military-grade wetware', 'corp secrets',
    'bootleg chips', 'preem tech', 'contraband cyberware', 'encrypted paydata',
    'illegal bioware', 'zero-day exploits', 'designer stimchips'
  ],
  valuable: ['credsticks', 'paydata', 'corp secrets', 'zero-day exploits', 'prototype wetware', 'black market chrome'],
  location: [
    'the sprawl', 'the undercity', 'the megacity', 'the Beltway', 'the Zone',
    'the arcology', 'the Coffin Hotels', 'the Stacks', 'Old Town', 'sector seven'
  ],
  district: ['red light district', 'corporate zone', 'combat zone', 'slums', 'undercity', 'tech district'],
  matrix_space: ['the matrix', 'cyberspace', 'the grid', 'the net', 'virtual space', 'the datasphere'],
  network_location: ['corporate mainframes', 'encrypted databases', 'neural networks', 'data havens', 'dark nets'],
  adjective: [
    'glitching', 'jacked-in', 'chrome-plated', 'neon-soaked', 'rain-slicked',
    'bootleg', 'military-grade', 'jury-rigged', 'bleeding-edge', 'black-market',
    'zero-g', 'street-level', 'high-rise', 'preem', 'nova'
  ],
  noun: [
    'runner', 'construct', 'AI daemon', 'security spider', 'black ICE', 'proxy',
    'agent', 'bot', 'neural link', 'meatpuppet', 'droid'
  ],
  tech: [
    'cyberdecks', 'neural jacks', 'reflex boosters', 'smart weapons', 'braindances',
    'optic implants', 'dermal plating', 'subdermal pouches', 'interface plugs', 'chipware'
  ],
  body_mod: [
    'cyberware', 'bioware', 'wetware', 'chrome', 'augments', 'implants', 'mods', 'enhancements'
  ],
  verb: ['flatline', 'glitch out', 'crash', 'spark', 'fritz', 'burn out', 'overload', 'short'],
  plural_noun: [
    'holographic ads', 'data streams', 'signal bursts', 'neon signs', 'corp logos',
    'surveillance drones', 'flying cars', 'digital ghosts'
  ],
  atmosphere: ['acid rain', 'neon haze', 'smog-choked air', 'electric fog', 'toxic drizzle'],
  weather: ['the toxic rain', 'acidic drizzle', 'neon-lit fog', 'electromagnetic storms', 'smog'],
  urban_decay: ['crumbling concrete', 'rusted infrastructure', 'abandoned megablocks', 'flickering streetlights'],
  corporation: [
    'OmniCorp', 'NexTech', 'SovOil', 'Petrochem', 'SynthCorp', 'DataMax',
    'CyberDyne', 'WorldSat', 'IEC', 'MedTech Global', 'the zaibatsu'
  ],
  corporate_action: [
    'squeezed out', 'bought up', 'liquidated', 'hostile-takeovered',
    'monopolized', 'crushed', 'asset-stripped', 'strong-armed'
  ],
  market_item: [
    'street trade', 'black market', 'underground economy', 'data brokering',
    'wetware market', 'neural modification scene', 'chrome trade'
  ],
  consequence: [
    'drawing corp attention', 'alerting the badges', 'triggering ICE countermeasures',
    'starting a gang war', 'flatining the grid', 'burning their cover'
  ],
  malfunction: ['glitches', 'crashes', 'flatlines', 'fries', 'burns out', 'shorts', 'corrupts'],
  slang_phrase: [
    'slot and run', 'jack in, break out', 'zero hour', 'flatline protocol',
    'ghost in the shell', 'chrome or die', 'input/output complete'
  ],
  street_slang: [
    'delta preem', 'nova as hell', 'so wizard', 'totally preem', 'absolutely gonk',
    'chippin\' in', 'zeroed out', 'credits well spent'
  ],
  observation: [
    'the tech was bleeding-edge', 'security was compromised', 'the deal went sideways',
    'ICE started burning', 'badges showed up', 'the fixer got geeked'
  ],
  time_period: ['neon night', 'early shift', 'dead hours', 'rush hour chaos', 'graveyard slot'],
  landmark: ['the club', 'meat market', 'street clinic', 'data terminal', 'drop point', 'no-tell motel'],
  seedy_location: ['dive bars', 'coffin hotels', 'basement clinics', 'back alleys', 'chop shops'],
  hidden_spot: ['dead drop', 'safe house', 'encrypted node', 'abandoned server farm', 'underground bunker'],
  ai_entity: ['rogue AI', 'neural construct', 'digital ghost', 'emergent intelligence', 'corporate daemon'],
  ai_action: ['hunted', 'evolved', 'fragmented', 'replicated', 'infected', 'awakened'],
  gang: ['the Chrome Collective', 'the Neon Syndicate', 'the Street Lords', 'the Ghost Network', 'street gangs'],
  weapon_plural: ['mono-blades', 'smart guns', 'plasma rifles', 'blade implants', 'thermal katanas'],
  intimidation: ['neural torture', 'cyberpsychosis', 'raw violence', 'data blackmail'],
  substance: ['synthetic highs', 'neuro-stimulants', 'black lace', 'braindance addiction'],
  transaction: ['the deal', 'the exchange', 'the handoff', 'the buy', 'the score'],
};

export const cyberpunkConfig = {
  name: 'Cyberpunk',
  description: 'Jack into cyberspace with neon-soaked placeholder text',
  gradientFrom: 'from-cyan-600 dark:from-cyan-400',
  gradientTo: 'to-purple-600 dark:to-purple-500',
  accentColor: 'cyan',
  borderColor: 'border-cyan-500/30',
  secondaryBorderColor: 'border-purple-500/30',
};
