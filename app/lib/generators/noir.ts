export const noirGrammar = {
  origin: ['#sentence.capitalize#'],
  sentence: [
    '#detective# took a drag from #possession# and considered the #case_element#',
    '#femme_fatale# walked into the office wearing #clothing# and #suspicious_behavior#',
    'rain #rain_action# against the windows of the #location# that #time_of_day#',
    '#victim# was found in the #crime_scene# with #evidence# nearby',
    '#authority# wanted answers, but #detective# had only #detective_has#',
    'the case #case_descriptor# like #simile# in this godforsaken city',
    '#antagonist# ran this town, and everybody knew it except #innocent_party#',
    'a #mysterious_object# sat on the desk, #object_state# in the #lighting#',
    '#location# was the kind of place where #noir_observation#',
    '#dialogue_tag#, #character# said, #dialogue_descriptor#',
    'following the #clue# led straight to the #shady_location# on #street_name#',
    '#detective# had seen enough #crime_type# to know #detective_knowledge#',
    '#informant# had information, but it would cost #payment# and #additional_cost#',
    'somewhere a #sound# echoed through the #atmospheric_location#',
    'the #vehicle# rolled through streets slick with #weather# and #urban_grime#',
    '#time_period#, this city had a way of #city_action#',
    'the truth was #truth_descriptor#, buried under layers of #corruption#',
    '#character# disappeared into the #transition#, leaving only #remnant#',
    'the #item# was the key to everything, or so #source# claimed',
    'between #faction# and #faction#, this town was #town_state#',
    '#detective# knew #detective_realization#, but proving it was another story',
    '#evidence# told a story, if you knew how to read it',
    'in this line of work, you learn that #noir_wisdom#',
    '#suspect# had an alibi that was #alibi_quality#, like everything else in this case',
    '#establishment# was a front for #criminal_activity#, everyone knew but nobody talked',
  ],
  detective: [
    'the private eye', 'the gumshoe', 'the detective', 'the investigator',
    'the shamus', 'the private dick', 'the sleuth', 'the flatfoot'
  ],
  femme_fatale: [
    'the dame', 'the broad', 'the woman', 'she', 'the mysterious stranger',
    'the lady', 'the client', 'the blonde', 'the redhead', 'the brunette'
  ],
  character: [
    'the dame', 'the informant', 'the cop', 'the witness', 'the suspect',
    'the partner', 'the boss', 'the client', 'the stranger', 'the doorman',
    'the bartender', 'the secretary', 'the chauffeur', 'the widow'
  ],
  antagonist: [
    'the crime boss', 'the syndicate', 'the organization', 'the outfit',
    'the big man', 'the kingpin', 'the racketeer', 'the mob'
  ],
  authority: [
    'the captain', 'the chief', 'the DA', 'the commissioner', 'the lieutenant',
    'the brass', 'city hall', 'the boys downtown', 'the department'
  ],
  victim: [
    'the stiff', 'the body', 'the deceased', 'the dead man', 'the corpse',
    'the unfortunate soul', 'the mark', 'the poor sap'
  ],
  suspect: [
    'the suspect', 'the prime suspect', 'the accused', 'the alleged perpetrator',
    'the person of interest', 'the accused party', 'the defendant'
  ],
  informant: [
    'the stool pigeon', 'the snitch', 'the informant', 'the canary',
    'the rat', 'the tipster', 'the contact', 'the source'
  ],
  innocent_party: [
    'the honest cops', 'the straight shooters', 'the clean ones',
    'the naive newcomers', 'the innocent bystanders', 'the law-abiding citizens'
  ],
  possession: [
    'a cigarette', 'a cigar', 'the whiskey glass', 'a coffee mug',
    'the case file', 'yesterday\'s paper', 'the photograph'
  ],
  clothing: [
    'a red dress', 'dark sunglasses', 'a fur coat', 'pearls', 'too much perfume',
    'a tailored suit', 'a feathered hat', 'silk stockings', 'expensive jewelry'
  ],
  mysterious_object: [
    'manila envelope', 'leather briefcase', 'locked box', 'old photograph',
    'unsigned letter', 'gold lighter', 'bloodstained handkerchief', 'torn ticket stub'
  ],
  item: [
    'photograph', 'ledger', 'key', 'letter', 'weapon', 'witness statement',
    'shipping manifest', 'insurance policy', 'missing persons report'
  ],
  case_element: [
    'angles', 'facts', 'leads', 'suspects', 'motives', 'evidence',
    'timeline', 'contradictions', 'missing pieces', 'loose ends'
  ],
  clue: [
    'trail', 'tip', 'lead', 'hunch', 'evidence', 'witness account',
    'anonymous letter', 'overlooked detail', 'pattern', 'connection'
  ],
  evidence: [
    'a spent shell casing', 'fresh tire marks', 'lipstick-stained glass',
    'muddy footprints', 'torn fabric', 'a cryptic note', 'matchbook from a nightclub',
    'pawn ticket', 'telegram', 'unsigned check'
  ],
  location: [
    'office', 'precinct', 'apartment', 'hotel room', 'diner', 'train station',
    'taxi', 'courthouse', 'morgue', 'penthouse', 'warehouse', 'jazz club'
  ],
  crime_scene: [
    'alley', 'hotel room', 'docks', 'abandoned warehouse', 'parking garage',
    'penthouse suite', 'back room', 'empty lot', 'river bank', 'basement'
  ],
  shady_location: [
    'speakeasy', 'gambling den', 'pawn shop', 'boxing gym', 'pool hall',
    'back-alley clinic', 'seedy motel', 'waterfront bar', 'underground casino'
  ],
  atmospheric_location: [
    'rain-soaked streets', 'empty corridors', 'fog-shrouded alleys',
    'smoke-filled rooms', 'abandoned buildings', 'darkened stairwells'
  ],
  establishment: [
    'the nightclub', 'the restaurant', 'the import business', 'the taxi company',
    'the accounting firm', 'the shipping company', 'the boxing gym', 'the social club'
  ],
  street_name: [
    'Fifth Street', 'Harbor Boulevard', 'Sunset Avenue', 'Main Street',
    'Broadway', 'the waterfront', 'Skid Row', 'the east side', 'downtown'
  ],
  transition: [
    'shadows', 'the fog', 'the crowd', 'the night', 'the alley',
    'the back door', 'the darkness', 'the rain'
  ],
  vehicle: [
    'sedan', 'cab', 'coupe', 'black car', 'unmarked police car',
    'delivery truck', 'limousine', 'roadster'
  ],
  rain_action: [
    'hammered', 'beat', 'drummed', 'pounded', 'tapped', 'streaked',
    'slashed', 'pelted', 'rattled'
  ],
  suspicious_behavior: [
    'a story that didn\'t add up', 'trouble written all over her face',
    'eyes that had seen too much', 'a nervous habit of checking the door',
    'the kind of smile that spelled danger', 'secrets she wasn\'t sharing'
  ],
  object_state: [
    'gleaming', 'collecting dust', 'catching the light', 'sitting crooked',
    'seemingly ordinary', 'out of place', 'deliberately positioned'
  ],
  case_descriptor: [
    'smelled', 'felt', 'looked', 'sounded', 'seemed', 'came across', 'played out'
  ],
  simile: [
    'week-old fish', 'a rigged game', 'a bad hand of cards', 'a setup',
    'yesterday\'s news', 'a frame job', 'three-dollar bills', 'a cover-up'
  ],
  noir_observation: [
    'trouble walked in twice a day and stayed for drinks',
    'questions were answered with lead instead of words',
    'everybody had a secret and a price',
    'the law was just a suggestion',
    'money talked louder than conscience',
    'nobody asked questions they didn\'t want answered'
  ],
  detective_knowledge: [
    'when someone was lying', 'this wasn\'t going to end pretty',
    'the real story was buried deeper', 'follow the money',
    'there were no coincidences', 'everybody had an angle'
  ],
  detective_realization: [
    'who was pulling the strings', 'where the bodies were buried',
    'how deep the corruption went', 'who stood to gain',
    'what everyone was trying to hide', 'the missing connection'
  ],
  noir_wisdom: [
    'everyone\'s got a past they\'re running from',
    'the truth rarely sets anyone free',
    'trust is the first thing that gets you killed',
    'money and blood mix too easily in this town',
    'the innocent never stay that way for long',
    'some questions are better left unasked'
  ],
  detective_has: [
    'questions', 'theories', 'hunches', 'suspicions', 'dead ends',
    'a bad feeling', 'more problems than solutions', 'pieces that didn\'t fit'
  ],
  dialogue_tag: [
    '"forget it"', '"beat it"', '"spill it"', '"talk"', '"start talking"',
    '"I\'m listening"', '"try again"', '"the truth this time"', '"keep going"'
  ],
  dialogue_descriptor: [
    'voice flat as yesterday\'s beer', 'words dripping with insincerity',
    'not meeting my eyes', 'like it was rehearsed', 'voice shaking',
    'too quickly', 'after a long pause', 'lighting another cigarette'
  ],
  time_of_day: [
    'night', 'evening', 'twilight', 'late hour', 'early morning',
    'ungodly hour', 'dead of night', 'witching hour', 'closing time'
  ],
  time_period: [
    'these days', 'lately', 'after the war', 'in recent months',
    'since the reforms', 'in this economy', 'nowadays'
  ],
  lighting: [
    'neon glow', 'street light', 'desk lamp', 'moonlight', 'flickering fluorescent',
    'dim overhead bulb', 'shaft of sunlight', 'amber light', 'shadows'
  ],
  weather: [
    'rain', 'fog', 'mist', 'drizzle', 'evening damp', 'coastal haze',
    'cigarette smoke', 'steam from the sewers'
  ],
  urban_grime: [
    'yesterday\'s garbage', 'broken promises', 'oil stains', 'crushed dreams',
    'shattered glass', 'dirty secrets', 'accumulated sin', 'moral decay'
  ],
  sound: [
    'siren wailed', 'gunshot cracked', 'foghorn moaned', 'train whistle blew',
    'church bell tolled', 'bottle shattered', 'car backfired', 'door slammed'
  ],
  city_action: [
    'chewing people up and spitting them out', 'taking more than it gave',
    'swallowing hope whole', 'turning saints into sinners',
    'making everyone dirty', 'erasing the difference between right and wrong'
  ],
  truth_descriptor: [
    'uglier than anyone wanted to admit', 'buried deep', 'worth killing for',
    'expensive', 'complicated', 'dangerous', 'simple and sordid',
    'exactly what I suspected', 'worse than the lies'
  ],
  corruption: [
    'lies', 'payoffs', 'cover-ups', 'blackmail', 'dirty money',
    'fixed games', 'bought badges', 'cooked books', 'false alibis'
  ],
  criminal_activity: [
    'money laundering', 'bootlegging', 'racketeering', 'gambling operations',
    'smuggling', 'the numbers racket', 'protection schemes', 'loan sharking'
  ],
  crime_type: [
    'murders', 'double-crosses', 'frame jobs', 'shake-downs', 'heists',
    'betrayals', 'cover-ups', 'dirty deals', 'fixed fights'
  ],
  faction: [
    'mob', 'police', 'politicians', 'union', 'old money', 'new money',
    'waterfront bosses', 'city council', 'crime families'
  ],
  town_state: [
    'a powder keg', 'eating itself alive', 'ready to explode',
    'drowning in corruption', 'beyond saving', 'a war zone', 'past redemption'
  ],
  remnant: [
    'a trail of smoke', 'unanswered questions', 'a cold cup of coffee',
    'the smell of perfume', 'footprints in the dust', 'a lingering threat'
  ],
  source: [
    'informant', 'witness', 'anonymous tip', 'dying confession',
    'old newspaper clipping', 'police report', 'street talk'
  ],
  payment: [
    'fifty bucks', 'a Benjamin', 'a C-note', 'cash up front',
    'double the usual rate', 'more than I had', 'what I could scrape together'
  ],
  additional_cost: [
    'a promise to keep names out of it', 'guaranteed protection',
    'a one-way ticket out of town', 'selective amnesia about where it came from',
    'insurance that the source stayed buried'
  ],
  alibi_quality: [
    'too clean', 'full of holes', 'suspiciously convenient', 'airtight',
    'rehearsed', 'paper-thin', 'backed up by bought witnesses'
  ],
};

export const noirConfig = {
  name: 'Film Noir',
  description: 'Generate hard-boiled placeholder text in a rain-soaked city',
  gradientFrom: 'from-gray-600 dark:from-gray-400',
  gradientTo: 'to-slate-600 dark:to-slate-500',
  accentColor: 'gray',
  borderColor: 'border-gray-500/30',
  secondaryBorderColor: 'border-slate-500/30',
  seo: {
    title: 'Film Noir Lorem Ipsum Generator - Hard-Boiled Detective Placeholder Text',
    description: 'Generate film noir placeholder text with private eyes, femme fatales, and rain-soaked streets for mystery design projects.',
    keywords: [
      'film noir lorem ipsum',
      'noir placeholder text',
      'detective text generator',
      'hard-boiled placeholder',
      'mystery lorem ipsum',
      'private eye text',
      'noir mockup text',
      'detective story placeholder',
      'pulp fiction generator',
      'crime noir text'
    ],
    ogTitle: 'Film Noir Lorem Ipsum - Hard-Boiled Placeholder Text',
    ogDescription: 'Generate film noir placeholder text with private eyes, femme fatales, and rain-soaked streets for mystery design projects.'
  }
};
