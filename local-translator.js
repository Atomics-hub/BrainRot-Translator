const BRAINROT_DICT = {
  // ===== NOUNS =====
  'person': 'SIGMA', 'people': 'SIGMAS', 'man': 'GIGACHAD', 'men': 'GIGACHADS',
  'woman': 'STACY', 'women': 'STACYS', 'guy': 'CHAD', 'guys': 'CHADS',
  'boy': 'LIL SIGMA', 'girl': 'GYATT', 'baby': 'MINI SIGMA', 'kid': 'BETA SPAWN',
  'child': 'SPAWN', 'children': 'SPAWNS', 'teenager': 'PRE-SIGMA',
  'friend': 'DAY ONE', 'friends': 'DAY ONES', 'enemy': 'OPP', 'enemies': 'OPPS',
  'stranger': 'UNKNOWN NPC', 'neighbor': 'ADJACENT NPC', 'partner': 'RIZZ PARTNER',
  'boss': 'ALPHA', 'leader': 'PACK LEADER', 'king': 'SIGMA KING', 'queen': 'AURA QUEEN',
  'hero': 'MAIN CHARACTER', 'villain': 'FINAL BOSS', 'celebrity': 'FAMOUS SIGMA',
  'father': 'SIGMA PATRIARCH', 'mother': 'MATRIARCH', 'dad': 'THE OG SIGMA',
  'mom': 'MAMA BEAR', 'brother': 'BRO', 'sister': 'SIS',
  'husband': 'LOCKED IN PARTNER', 'wife': 'PERMANENT RIZZ TARGET',
  'family': 'THE BLOODLINE', 'couple': 'RIZZ DUO',

  'money': 'RIZZ CURRENCY', 'dollar': 'AURA COIN', 'dollars': 'AURA COINS',
  'cash': 'LIQUID AURA', 'salary': 'GRIND PAYOUT', 'wealth': 'STACKED AURA',
  'debt': 'NEGATIVE AURA BALANCE', 'tax': 'GOVERNMENT FANUM TAX',
  'house': 'SIGMA LAIR', 'home': 'SIGMA DEN', 'apartment': 'COMPACT LAIR',
  'room': 'CHAMBER', 'bedroom': 'RECOVERY CHAMBER', 'bathroom': 'HYGIENEMAXX ZONE',
  'kitchen': 'GAINS PREP STATION', 'office': 'GRIND HQ',
  'car': 'WHIP', 'truck': 'BIG BODY WHIP', 'bus': 'PEASANT SHUTTLE',
  'train': 'IRON SERPENT', 'plane': 'SKY WHIP', 'bike': 'TWO-WHEEL SIGMA RIDE',
  'phone': 'AURA DEVICE', 'laptop': 'PORTABLE GRIND STATION',
  'food': 'GAINS FUEL', 'water': 'HYDRATION ELIXIR', 'coffee': 'GRINDSET JUICE',
  'breakfast': 'MORNING GAINS', 'lunch': 'MIDDAY REFUEL', 'dinner': 'EVENING FEAST',
  'pizza': 'ITALIAN GAINS', 'burger': 'AMERICAN GAINS DISC',
  'beer': 'LIQUID CONFIDENCE', 'drink': 'POTION', 'alcohol': 'AURA DAMPENER',
  'school': 'KNOWLEDGE DOJO', 'college': 'ADVANCED KNOWLEDGE DOJO',
  'university': 'ELITE BRAIN CAMP', 'class': 'LORE SESSION',
  'work': 'THE GRIND', 'job': 'GRINDSET', 'career': 'LIFETIME GRIND ARC',
  'meeting': 'YAP SESSION', 'interview': 'AURA CHECK',
  'life': 'THIS SIMULATION', 'world': 'THIS TIMELINE', 'earth': 'THE REALM',
  'universe': 'THE INFINITE TIMELINE', 'reality': 'THE SIMULATION',
  'nature': 'OUTSIDE DLC', 'space': 'THE VOID',
  'time': 'THE CLOCK', 'day': 'ROTATION', 'night': 'DARK MODE',
  'morning': 'EARLY GRIND', 'evening': 'LATE ROTATION', 'afternoon': 'MID ROTATION',
  'year': 'CYCLE', 'month': 'MINI CYCLE', 'week': 'SEVEN ROTATIONS',
  'today': 'THIS ROTATION', 'tomorrow': 'NEXT ROTATION', 'yesterday': 'LAST ROTATION',
  'minute': 'MICRO ROTATION', 'hour': 'ROTATION SEGMENT', 'second': 'NANO ROTATION',
  'weekend': 'RECOVERY ARC', 'holiday': 'REST DAY BUFF',
  'face': 'FACIAL STRUCTURE', 'body': 'FRAME', 'head': 'CRANIUM',
  'eyes': 'HUNTER EYES', 'eye': 'HUNTER EYE', 'hair': 'FOLLICLES',
  'brain': 'CRANIAL PROCESSOR', 'mouth': 'YAP HOLE', 'nose': 'NASAL RIDGE',
  'teeth': 'BITE BONES', 'skin': 'OUTER LAYER', 'muscle': 'GAINS',
  'heart': 'AURA CORE', 'hand': 'GRIP', 'hands': 'GRIPPERS',
  'arm': 'UPPER LIMB', 'arms': 'UPPER LIMBS', 'leg': 'STRIDER', 'legs': 'STRIDERS',
  'feet': 'GROUND CONTACT UNITS', 'foot': 'GROUND CONTACT UNIT',
  'shoulder': 'FRAME COMPONENT', 'shoulders': 'THE FRAME',
  'chest': 'PECTORAL REGION', 'stomach': 'GAINS STORAGE',
  'jaw': 'JAWLINE', 'chin': 'CHIN PROJECTION',
  'problem': 'L', 'problems': 'Ls', 'mistake': 'MASSIVE L', 'error': 'CRITICAL L',
  'issue': 'AURA DISTURBANCE', 'bug': 'GLITCH IN THE MATRIX',
  'win': 'W', 'success': 'FAT W', 'victory': 'GIGA W', 'achievement': 'UNLOCKED W',
  'loss': 'L', 'failure': 'CATASTROPHIC L', 'defeat': 'TOTAL MOG',
  'idea': 'BRAINROT VISION', 'plan': 'SIGMA SCHEME', 'goal': 'END GAME',
  'dream': 'SIGMA VISION', 'hope': 'COPIUM', 'wish': 'COPIUM REQUEST',
  'truth': 'NO CAP FACTS', 'lie': 'CAP', 'lies': 'STRAIGHT CAP',
  'fact': 'CERTIFIED NO CAP', 'opinion': 'PERSONAL LORE',
  'secret': 'HIDDEN LORE', 'story': 'LORE', 'history': 'ANCIENT LORE',
  'internet': 'THE GRID', 'website': 'DIGITAL TERRITORY', 'app': 'DIGITAL TOOL',
  'computer': 'BATTLE STATION', 'game': 'RANKED MATCH', 'video': 'CONTENT',
  'email': 'DIGITAL PIGEON', 'password': 'SECRET CIPHER', 'data': 'RAW LORE',
  'social media': 'THE ALGORITHM', 'tiktok': 'BRAINROT HQ',
  'dog': 'LOYAL SIGMA PET', 'cat': 'INDEPENDENT SIGMA PET',
  'animal': 'CREATURE', 'animals': 'CREATURES', 'bird': 'SKY NPC',
  'fish': 'WATER NPC', 'horse': 'FOUR-LEGGED SIGMA',
  'music': 'AURA SOUNDTRACK', 'song': 'BANGER', 'movie': 'KINO',
  'show': 'CONTENT', 'book': 'KNOWLEDGE SCROLL', 'news': 'LORE DROP',
  'art': 'VISUAL AURA', 'picture': 'CAPTURED AURA', 'photo': 'FRAME DOCUMENTATION',
  'door': 'PORTAL', 'wall': 'BARRIER', 'window': 'OBSERVATION PANEL',
  'floor': 'GROUND LEVEL', 'roof': 'TOP BARRIER', 'stairs': 'ELEVATION DEVICE',
  'table': 'FLAT SURFACE', 'chair': 'SITTING THRONE', 'bed': 'RECOVERY POD',
  'city': 'CONCRETE JUNGLE', 'town': 'SMALL REALM', 'village': 'MINI REALM',
  'country': 'REALM', 'state': 'SUB-REALM', 'place': 'LOCATION',
  'street': 'PUBLIC PATHWAY', 'road': 'TRAVEL LANE', 'park': 'OUTSIDE ZONE',
  'store': 'LOOT LOCATION', 'shop': 'LOOT SPOT', 'mall': 'MEGA LOOT ZONE',
  'restaurant': 'GAINS REFUELING STATION', 'hospital': 'HEALTH RESPAWN POINT',
  'church': 'SPIRITUAL DOJO', 'gym': 'THE TEMPLE', 'library': 'LORE ARCHIVE',
  'weather': 'ATMOSPHERIC AURA', 'rain': 'SKY TEARS', 'snow': 'FROZEN SKY TEARS',
  'sun': 'THE LIGHT SOURCE', 'cloud': 'SKY FLUFF', 'clouds': 'SKY FLUFFS',
  'wind': 'AIR CURRENT', 'storm': 'ATMOSPHERIC RAGE', 'thunder': 'SKY BASS DROP',
  'fire': 'LITERAL FIRE', 'power': 'AURA LEVEL', 'energy': 'SIGMA ENERGY',
  'light': 'PHOTON EMISSION', 'dark': 'VOID MODE', 'shadow': 'DARK AURA',
  'love': 'RIZZ CONNECTION', 'hate': 'ANTI-AURA', 'fear': 'LOW AURA MOMENT',
  'anger': 'RAGE BUFF', 'joy': 'AURA PEAK', 'pain': 'DAMAGE TAKEN',
  'peace': 'ZERO CONFLICT ARC', 'war': 'FULL MOG WARFARE',
  'hope': 'COPIUM', 'respect': 'AURA RECOGNITION', 'trust': 'VERIFIED AURA',
  'chance': 'AURA WINDOW', 'luck': 'RNG BLESSING', 'risk': 'AURA GAMBLE',
  'price': 'AURA TAX', 'cost': 'FANUM TAX', 'profit': 'NET AURA GAIN',
  'team': 'THE SQUAD', 'group': 'THE PACK', 'company': 'THE SYNDICATE',
  'government': 'THE REGIME', 'police': 'AURA ENFORCEMENT', 'army': 'MOG SQUAD',
  'teacher': 'KNOWLEDGE SIGMA', 'student': 'GRIND APPRENTICE',
  'doctor': 'HEALTH SIGMA', 'lawyer': 'LEGAL SIGMA', 'scientist': 'LAB SIGMA',
  'engineer': 'BUILD SIGMA', 'artist': 'CREATIVE SIGMA', 'athlete': 'PHYSICAL SIGMA',
  'president': 'TOP G', 'manager': 'MID-TIER ALPHA',
  'god': 'THE ULTIMATE SIGMA', 'death': 'PERMANENT LOG OFF',
  'language': 'COMMUNICATION PROTOCOL', 'word': 'VERBAL UNIT', 'words': 'VERBAL UNITS',
  'name': 'TAG', 'question': 'INQUIRY', 'answer': 'RESPONSE LORE',
  'reason': 'LOGIC ARC', 'example': 'EXHIBIT', 'result': 'OUTCOME',
  'part': 'SEGMENT', 'percent': 'PERCENT', 'number': 'DIGIT',
  'nothing': 'ABSOLUTE VOID', 'everything': 'THE WHOLE TIMELINE',
  'something': 'SOME ENTITY', 'everyone': 'ALL SIGMAS',
  'nobody': 'ZERO ENTITIES', 'someone': 'AN NPC',
  'thing': 'ENTITY', 'things': 'ENTITIES', 'stuff': 'MISC LOOT',

  // ===== VERBS =====
  'is': 'be HITTIN', 'are': 'be HITTIN', 'was': 'was DEADASS', 'were': 'were DEADASS',
  'been': 'been STRAIGHT UP', 'being': 'currently EXISTING AS',
  'have': 'POSSESS', 'has': 'POSSESSES', 'had': 'POSSESSED',
  'do': 'EXECUTE', 'does': 'EXECUTES', 'did': 'EXECUTED', 'done': 'COMPLETED',
  'can': 'got the ABILITY to', 'could': 'POTENTIALLY could',
  'will': 'SHALL', 'would': 'THEORETICALLY would',
  'should': 'BETTER', 'must': 'ABSOLUTELY MUST', 'might': 'POTENTIALLY might',
  'get': 'SECURE', 'got': 'SECURED', 'getting': 'SECURING', 'gets': 'SECURES',
  'said': 'YAPPED', 'says': 'YAPS', 'say': 'YAP', 'saying': 'YAPPING',
  'think': 'LOOKSMAX MY THOUGHTS', 'thinking': 'BRAINMAXXING', 'thought': 'BRAINMAXXED',
  'know': 'am LOCKED IN on', 'knew': 'was LOCKED IN on', 'known': 'LOCKED IN on',
  'want': 'CRAVE', 'wanted': 'CRAVED', 'wants': 'CRAVES',
  'need': 'DESPERATELY REQUIRE', 'needs': 'DESPERATELY REQUIRES', 'needed': 'DESPERATELY REQUIRED',
  'like': 'VIBE WITH', 'liked': 'VIBED WITH', 'likes': 'VIBES WITH',
  'love': 'am OBSESSED WITH', 'loved': 'was OBSESSED WITH',
  'hate': 'am ANTI-AURA toward', 'hated': 'was ANTI-AURA toward',
  'go': 'MOBILIZE', 'going': 'MOBILIZING', 'went': 'STRIDEMAXXED', 'gone': 'FULLY MOBILIZED',
  'come': 'PULL UP', 'came': 'PULLED UP', 'coming': 'PULLING UP',
  'walk': 'STRIDEMAXX', 'walked': 'STRIDEMAXXED', 'walking': 'STRIDEMAXXING',
  'run': 'SPEEDMAXX', 'running': 'SPEEDMAXXING', 'ran': 'SPEEDMAXXED',
  'move': 'REPOSITION', 'moved': 'REPOSITIONED', 'moving': 'REPOSITIONING',
  'sit': 'POST UP', 'sitting': 'POSTED UP', 'sat': 'POSTED UP',
  'stand': 'ASSERT PRESENCE', 'standing': 'ASSERTING PRESENCE', 'stood': 'ASSERTED PRESENCE',
  'turn': 'ROTATE', 'turned': 'ROTATED', 'turning': 'ROTATING',
  'open': 'UNLOCK', 'opened': 'UNLOCKED', 'opening': 'UNLOCKING',
  'close': 'SEAL', 'closed': 'SEALED', 'closing': 'SEALING',
  'look': 'MIRE', 'looking': 'MIRIN', 'looked': 'MIRED', 'looks': 'MIRES',
  'see': 'CLOCK', 'saw': 'CLOCKED', 'seen': 'CLOCKED', 'seeing': 'CLOCKING',
  'show': 'REVEAL', 'showed': 'REVEALED', 'showing': 'REVEALING', 'shown': 'REVEALED',
  'hear': 'DETECT AUDIO', 'heard': 'DETECTED AUDIO', 'hearing': 'DETECTING AUDIO',
  'listen': 'TUNE IN', 'listened': 'TUNED IN', 'listening': 'TUNING IN',
  'eat': 'CONSUME GAINS', 'eating': 'GAINSMAXXING', 'ate': 'CONSUMED GAINS',
  'sleep': 'RECOVERYMAXX', 'sleeping': 'RECOVERYMAXXING', 'slept': 'RECOVERYMAXXED',
  'wake': 'ACTIVATE', 'woke': 'ACTIVATED', 'waking': 'ACTIVATING',
  'work': 'GRIND', 'working': 'GRINDING', 'worked': 'GRINDED',
  'build': 'CONSTRUCT', 'built': 'CONSTRUCTED', 'building': 'CONSTRUCTING',
  'create': 'MANIFEST', 'created': 'MANIFESTED', 'creating': 'MANIFESTING',
  'try': 'ATTEMPT TO MAXX', 'trying': 'MAXXING', 'tried': 'ATTEMPTED TO MAXX',
  'use': 'DEPLOY', 'used': 'DEPLOYED', 'using': 'DEPLOYING',
  'help': 'CARRY', 'helped': 'CARRIED', 'helping': 'CARRYING',
  'give': 'BESTOW', 'gave': 'BESTOWED', 'giving': 'BESTOWING', 'given': 'BESTOWED',
  'take': 'FANUM TAX', 'took': 'FANUM TAXED', 'taking': 'FANUM TAXING', 'taken': 'FANUM TAXED',
  'put': 'PLACE', 'putting': 'PLACING',
  'bring': 'SUMMON', 'brought': 'SUMMONED', 'bringing': 'SUMMONING',
  'send': 'DISPATCH', 'sent': 'DISPATCHED', 'sending': 'DISPATCHING',
  'leave': 'DIP', 'left': 'DIPPED', 'leaving': 'DIPPING',
  'keep': 'MAINTAIN', 'kept': 'MAINTAINED', 'keeping': 'MAINTAINING',
  'hold': 'GRIP', 'held': 'GRIPPED', 'holding': 'GRIPPING',
  'set': 'CONFIGURE', 'setting': 'CONFIGURING',
  'make': 'FORGE', 'made': 'FORGED', 'making': 'FORGING',
  'start': 'INITIATE GRIND', 'started': 'INITIATED GRIND', 'starting': 'INITIATING GRIND',
  'stop': 'CEASE ALL OPERATIONS', 'stopped': 'CEASED ALL OPERATIONS',
  'follow': 'TAIL', 'followed': 'TAILED', 'following': 'TAILING',
  'talk': 'YAP', 'talked': 'YAPPED', 'talking': 'YAPPING',
  'speak': 'VOCALIZE', 'spoke': 'VOCALIZED', 'speaking': 'VOCALIZING',
  'tell': 'DROP LORE', 'told': 'DROPPED LORE', 'telling': 'DROPPING LORE',
  'ask': 'INQUIRE', 'asked': 'INQUIRED', 'asking': 'INQUIRING',
  'call': 'SUMMON', 'called': 'SUMMONED', 'calling': 'SUMMONING',
  'fight': 'MOG BATTLE', 'fighting': 'MOG BATTLING', 'fought': 'MOG BATTLED',
  'hit': 'STRIKE', 'hitting': 'STRIKING',
  'win': 'SECURE THE W', 'won': 'SECURED THE W', 'winning': 'W COLLECTING',
  'lose': 'CATCH AN L', 'lost': 'CAUGHT AN L', 'losing': 'L FARMING',
  'die': 'GET MOGGED TO DEATH', 'died': 'GOT MOGGED FATALLY', 'dying': 'GETTING MOGGED FATALLY',
  'kill': 'AURA DELETE', 'killed': 'AURA DELETED', 'killing': 'AURA DELETING',
  'live': 'EXIST IN THE SIMULATION', 'lived': 'EXISTED', 'living': 'EXISTING',
  'pay': 'DROP AURA COINS', 'paid': 'DROPPED AURA COINS', 'paying': 'DROPPING AURA COINS',
  'spend': 'BURN AURA', 'spent': 'BURNED AURA', 'spending': 'BURNING AURA',
  'buy': 'SECURE THE BAG', 'bought': 'SECURED THE BAG', 'buying': 'SECURING THE BAG',
  'sell': 'LIQUIDATE', 'sold': 'LIQUIDATED', 'selling': 'LIQUIDATING',
  'learn': 'KNOWLEDGEMAXX', 'learned': 'KNOWLEDGEMAXXED', 'learning': 'KNOWLEDGEMAXXING',
  'study': 'LORE GRIND', 'studied': 'LORE GRINDED', 'studying': 'LORE GRINDING',
  'teach': 'DROP KNOWLEDGE', 'taught': 'DROPPED KNOWLEDGE', 'teaching': 'DROPPING KNOWLEDGE',
  'read': 'LORE ABSORB', 'reading': 'LORE ABSORBING',
  'write': 'INSCRIBE', 'writing': 'INSCRIBING', 'wrote': 'INSCRIBED', 'written': 'INSCRIBED',
  'play': 'GAME', 'playing': 'GAMING', 'played': 'GAMED',
  'watch': 'SPECTATE', 'watching': 'SPECTATING', 'watched': 'SPECTATED',
  'wait': 'HOLD POSITION', 'waiting': 'HOLDING POSITION', 'waited': 'HELD POSITION',
  'remember': 'RECALL LORE', 'remembered': 'RECALLED LORE',
  'forget': 'LORE WIPE', 'forgot': 'LORE WIPED', 'forgotten': 'LORE WIPED',
  'believe': 'am PILLED on', 'believed': 'was PILLED on',
  'happen': 'DROP', 'happened': 'DROPPED', 'happening': 'DROPPING',
  'change': 'GLOW UP', 'changed': 'GLOWED UP', 'changing': 'GLOWING UP',
  'feel': 'SENSE THE AURA', 'feeling': 'SENSING THE AURA', 'felt': 'SENSED THE AURA',
  'fall': 'FACEPLANT', 'fell': 'FACEPLANTED', 'falling': 'FACEPLANTING',
  'break': 'SHATTER', 'broke': 'SHATTERED', 'broken': 'ABSOLUTELY SHATTERED',
  'grow': 'ASCEND', 'grew': 'ASCENDED', 'growing': 'ASCENDING', 'grown': 'ASCENDED',
  'become': 'TRANSFORM INTO', 'became': 'TRANSFORMED INTO', 'becoming': 'TRANSFORMING INTO',
  'seem': 'APPEAR TO BE', 'seemed': 'APPEARED TO BE',
  'understand': 'GET THE LORE', 'understood': 'GOT THE LORE',
  'decide': 'LOCK IN', 'decided': 'LOCKED IN', 'deciding': 'LOCKING IN',
  'choose': 'SELECT', 'chose': 'SELECTED', 'chosen': 'SELECTED',
  'agree': 'CO-SIGN', 'agreed': 'CO-SIGNED',
  'refuse': 'REJECT', 'refused': 'REJECTED',
  'fail': 'CATCH AN L', 'failed': 'CAUGHT AN L', 'failing': 'L CATCHING',
  'succeed': 'SECURE THE W', 'succeeded': 'SECURED THE W',
  'add': 'STACK ON', 'added': 'STACKED ON',
  'remove': 'PURGE', 'removed': 'PURGED',
  'join': 'LINK UP WITH', 'joined': 'LINKED UP WITH',
  'explain': 'DROP THE LORE ON', 'explained': 'DROPPED THE LORE ON',
  'suggest': 'PROPOSE', 'suggested': 'PROPOSED',
  'expect': 'ANTICIPATE', 'expected': 'ANTICIPATED',
  'allow': 'PERMIT', 'allowed': 'PERMITTED',
  'enjoy': 'VIBE WITH', 'enjoyed': 'VIBED WITH',
  'miss': 'WHIFF', 'missed': 'WHIFFED',
  'share': 'DISTRIBUTE', 'shared': 'DISTRIBUTED',
  'worry': 'STRESS', 'worried': 'STRESSED', 'worrying': 'STRESSING',
  'care': 'INVEST AURA IN', 'cared': 'INVESTED AURA IN',
  'wear': 'DRIP', 'wore': 'DRIPPED', 'wearing': 'DRIPPING',
  'drive': 'PILOT', 'drove': 'PILOTED', 'driving': 'PILOTING',
  'travel': 'TRAVERSE', 'traveled': 'TRAVERSED', 'traveling': 'TRAVERSING',
  'arrive': 'TOUCH DOWN', 'arrived': 'TOUCHED DOWN',
  'return': 'RESPAWN', 'returned': 'RESPAWNED', 'returning': 'RESPAWNING',
  'check': 'SCOPE OUT', 'checked': 'SCOPED OUT', 'checking': 'SCOPING OUT',
  'pull': 'YANK', 'pulled': 'YANKED', 'pulling': 'YANKING',
  'push': 'SHOVE', 'pushed': 'SHOVED', 'pushing': 'SHOVING',
  'throw': 'YEET', 'threw': 'YEETED', 'throwing': 'YEETING', 'thrown': 'YEETED',
  'catch': 'SNAG', 'caught': 'SNAGGED', 'catching': 'SNAGGING',
  'pick': 'GRAB', 'picked': 'GRABBED', 'picking': 'GRABBING',
  'drop': 'RELEASE', 'dropped': 'RELEASED', 'dropping': 'RELEASING',
  'save': 'PRESERVE', 'saved': 'PRESERVED', 'saving': 'PRESERVING',
  'spend': 'BURN AURA ON', 'fix': 'PATCH', 'fixed': 'PATCHED',
  'clean': 'PURIFY', 'cleaned': 'PURIFIED', 'cleaning': 'PURIFYING',
  'destroy': 'OBLITERATE', 'destroyed': 'OBLITERATED',
  'discover': 'UNLOCK NEW LORE', 'discovered': 'UNLOCKED NEW LORE',
  'develop': 'ENGINEER', 'developed': 'ENGINEERED',
  'support': 'BOOST', 'supported': 'BOOSTED',
  'include': 'INCORPORATE', 'included': 'INCORPORATED',
  'provide': 'SUPPLY', 'provided': 'SUPPLIED',
  'require': 'DEMAND', 'required': 'DEMANDED',
  'continue': 'KEEP THE GRIND GOING', 'continued': 'KEPT THE GRIND GOING',
  'consider': 'EVALUATE', 'considered': 'EVALUATED',
  'claim': 'ALLEGE NO CAP', 'claimed': 'ALLEGED NO CAP',
  'announce': 'BROADCAST', 'announced': 'BROADCASTED',
  'laugh': 'CACKLE', 'laughed': 'CACKLED', 'laughing': 'CACKLING',
  'cry': 'LEAK OPTIC FLUID', 'cried': 'LEAKED OPTIC FLUID', 'crying': 'LEAKING OPTIC FLUID',
  'smile': 'EMIT POSITIVE AURA', 'smiled': 'EMITTED POSITIVE AURA',
  'scream': 'AURA BLAST', 'screamed': 'AURA BLASTED',

  // ===== ADJECTIVES =====
  'good': 'BUSSIN', 'great': 'GOATED', 'best': 'MOST GOATED',
  'bad': 'NO AURA', 'worst': 'LOWEST AURA', 'terrible': 'NEGATIVE AURA',
  'better': 'MORE GOATED', 'worse': 'EVEN LESS AURA',
  'amazing': 'ABSOLUTELY GOATED', 'wonderful': 'PEAK', 'fantastic': 'ELITE TIER',
  'awful': 'BOTTOM TIER', 'horrible': 'AURA VOID', 'excellent': 'S-TIER',
  'perfect': 'FLAWLESS AURA', 'incredible': 'INSANE AURA', 'terrible': 'NEGATIVE AURA',
  'big': 'GIGACHAD-TIER', 'small': 'MANLET-TIER', 'huge': 'ABSOLUTELY MASSIVE',
  'tiny': 'MICROSCOPIC', 'large': 'MEGA-SIZED', 'little': 'SMOL',
  'tall': 'HEIGHT-BLESSED', 'short': 'HEIGHTMOGGED',
  'wide': 'FRAMEMAXXED', 'thin': 'LANKLET', 'thick': 'STURDY FRAME',
  'fat': 'BULKMAXXED', 'skinny': 'NEEDS GAINS',
  'beautiful': 'PSL 10', 'ugly': 'PSL 1', 'pretty': 'PSL 8',
  'handsome': 'CHADLIKE', 'attractive': 'HIGH PSL', 'cute': 'PSL 7',
  'gorgeous': 'PSL 9.5', 'stunning': 'ABSOLUTE PSL DESTROYER',
  'smart': 'CRANIUMMAXXED', 'stupid': 'BRAINLET', 'dumb': 'ZERO IQ',
  'intelligent': 'GALAXY BRAINED', 'clever': 'HIGH IQ PLAY', 'wise': 'ELDER SIGMA',
  'rich': 'STACKED', 'poor': 'BROKECEL', 'expensive': 'PREMIUM AURA',
  'cheap': 'BUDGET TIER', 'free': 'ZERO FANUM TAX', 'valuable': 'HIGH VALUE',
  'fast': 'SPEEDMAXXED', 'slow': 'LAG DETECTED', 'quick': 'BLITZ MODE',
  'strong': 'BUILT DIFFERENT', 'weak': 'UNFRAMEMAXXED', 'powerful': 'OVERPOWERED',
  'safe': 'PROTECTED', 'dangerous': 'HIGH RISK',
  'old': 'OG', 'new': 'FRESHLY DROPPED', 'young': 'BETA STAGE',
  'modern': 'CURRENT META', 'ancient': 'PREHISTORIC LORE',
  'happy': 'AURA BOOSTED', 'sad': 'AURA DEPLETED', 'angry': 'RAGE MODE',
  'excited': 'HYPED', 'scared': 'FEAR DEBUFF', 'nervous': 'ANXIETY ARC',
  'confident': 'FULL AURA', 'proud': 'AURA MAXED', 'ashamed': 'AURA BANKRUPT',
  'lonely': 'SOLO QUEUE', 'bored': 'UNSTIMULATED',
  'funny': 'COMEDY SIGMA', 'boring': 'NPC BEHAVIOR', 'interesting': 'LORE-HEAVY',
  'strange': 'OHIO ENERGY', 'normal': 'NPC-CODED', 'unusual': 'NON-META',
  'important': 'CRITICAL AURA', 'easy': 'NO DIFF', 'hard': 'IMPOSSIBLE DIFF',
  'difficult': 'EXTREME DIFF', 'simple': 'TUTORIAL MODE', 'complex': 'GALAXY BRAIN TIER',
  'real': 'LEGIT NO CAP', 'fake': 'FRAUD', 'true': 'NO CAP',
  'false': 'STRAIGHT CAP', 'wrong': 'ANTI-SIGMA', 'right': 'VALID',
  'correct': 'FACTUAL', 'fair': 'BALANCED META',
  'cool': 'VALID', 'hot': 'PSL 9', 'cold': 'ICE COLD AURA',
  'warm': 'COZY AURA', 'dry': 'ZERO MOISTURE', 'wet': 'MOISTURE DETECTED',
  'long': 'EXTENDED', 'short': 'HEIGHTMOGGED',
  'deep': 'PROFOUND AURA', 'high': 'ELEVATED', 'low': 'BOTTOM TIER',
  'many': 'MAD', 'much': 'HELLA', 'few': 'BARELY ANY', 'several': 'MULTIPLE',
  'enough': 'SUFFICIENT', 'more': 'ADDITIONAL', 'less': 'REDUCED',
  'first': 'ALPHA POSITION', 'last': 'FINAL BOSS', 'next': 'UPCOMING',
  'only': 'SOLE', 'own': 'PERSONAL', 'other': 'ALTERNATE',
  'main': 'PRIMARY', 'full': 'MAXED OUT', 'empty': 'VOID',
  'different': 'BUILT DIFFERENT', 'same': 'TWINNING', 'similar': 'COMPARABLE',
  'possible': 'WITHIN THE AURA', 'impossible': 'BEYOND THE AURA',
  'available': 'ON DECK', 'ready': 'LOCKED AND LOADED',
  'busy': 'ON THE GRIND', 'quiet': 'STEALTH MODE', 'loud': 'MAX VOLUME',
  'dead': 'MOGGED TO EXTINCTION', 'alive': 'STILL IN THE GAME',
  'tired': 'ENERGY DEPLETED', 'sick': 'DEBUFFED', 'healthy': 'HEALTH MAXXED',
  'crazy': 'UNHINGED SIGMA', 'weird': 'OHIO BEHAVIOR',
  'nice': 'VALID', 'mean': 'TOXIC AURA', 'kind': 'WHOLESOME SIGMA',
  'serious': 'NOT PLAYING', 'popular': 'FAMOUS', 'famous': 'LEGENDARY',
  'common': 'STANDARD ISSUE', 'rare': 'LEGENDARY DROP', 'special': 'LIMITED EDITION',
  'certain': 'LOCKED IN', 'sure': 'ON GOD',
  'afraid': 'FEAR-PILLED', 'worried': 'STRESS-PILLED',
  'fresh': 'CRISPY', 'clean': 'IMMACULATE', 'dirty': 'GRIMY',
  'dark': 'VOID-CODED', 'bright': 'LUMINOUS', 'clear': 'CRYSTAL',
  'heavy': 'DENSE', 'light': 'FEATHER-TIER',
  'open': 'ACCESSIBLE', 'closed': 'SEALED',
  'public': 'BROADCAST', 'private': 'STEALTH',
  'entire': 'THE WHOLE', 'whole': 'THE ENTIRE', 'complete': 'FULLY LOADED',
  'recent': 'FRESHLY DROPPED', 'early': 'AHEAD OF SCHEDULE', 'late': 'BEHIND SCHEDULE',
  'positive': 'W ENERGY', 'negative': 'L ENERGY',

  // ===== ADVERBS / FILLER =====
  'very': 'FR FR', 'really': 'DEADASS', 'actually': 'NO CAP',
  'extremely': 'MEGA', 'absolutely': 'ON GOD', 'completely': 'FULLY',
  'totally': 'STRAIGHT UP', 'literally': 'LITERALLY', 'basically': 'ESSENTIALLY',
  'seriously': 'NO CAP FR', 'honestly': 'REAL TALK',
  'simply': 'JUST STRAIGHT UP', 'exactly': 'PRECISELY',
  'obviously': 'CLEARLY FR', 'apparently': 'ALLEGEDLY',
  'almost': 'NEARLY', 'already': 'ALREADY FR',
  'always': 'ON GOD ALWAYS', 'never': 'NOT ONCE IN THIS TIMELINE',
  'often': 'MAD OFTEN', 'usually': 'TYPICALLY FR',
  'sometimes': 'OCCASIONALLY FR', 'rarely': 'BARELY EVER',
  'maybe': 'POSSIBLY NO CAP', 'perhaps': 'POTENTIALLY',
  'probably': 'HIGH KEY', 'definitely': 'ON GOD', 'certainly': 'WITHOUT A DOUBT FR',
  'just': 'LITERALLY JUST', 'only': 'STRICTLY',
  'here': 'IN THIS SPOT', 'there': 'OVER YONDER',
  'everywhere': 'ALL OVER THE MAP', 'somewhere': 'AT SOME COORDINATES',
  'nowhere': 'IN THE VOID', 'anywhere': 'WHEREVER',
  'now': 'RN', 'then': 'BACK IN THE DAY', 'soon': 'ANY MOMENT NOW',
  'ago': 'IN THE PAST', 'later': 'SUBSEQUENTLY',
  'still': 'STILL FR', 'yet': 'AS OF YET',
  'also': 'AND GET THIS', 'too': 'AS WELL FR', 'again': 'ONCE MORE',
  'enough': 'SUFFICIENTLY', 'together': 'AS A UNIT',
  'away': 'INTO THE DISTANCE', 'back': 'IN REVERSE',
  'up': 'UPWARD', 'down': 'DOWNWARD', 'off': 'DEACTIVATED', 'out': 'OUTWARD',
  'well': 'PROPERLY', 'badly': 'TERRIBLY', 'quickly': 'AT MACH SPEED',
  'slowly': 'AT SNAIL PACE', 'hard': 'WITH MAX EFFORT',
  'especially': 'PARTICULARLY FR', 'finally': 'AT LONG LAST',
  'suddenly': 'OUT OF NOWHERE', 'carefully': 'WITH PRECISION',
  'recently': 'NOT LONG AGO', 'immediately': 'INSTANTLY',
  'instead': 'ALTERNATIVELY', 'however': 'BUT GET THIS',
  'therefore': 'THUS FR', 'otherwise': 'OR ELSE',
  'according': 'BASED ON THE LORE',

  // ===== INTERJECTIONS / COMMON WORDS =====
  'yes': 'BET', 'no': 'NAH', 'not': 'ABSOLUTELY NOT',
  'please': 'I BEG', 'thanks': 'GOOD LOOKS', 'thank': 'SALUTE',
  'sorry': 'MY BAD G', 'hello': 'YO', 'hey': 'AYO', 'hi': 'SUP',
  'goodbye': 'PEACE OUT', 'bye': 'DEUCES', 'ok': 'BET', 'okay': 'BET',
  'wow': 'SHEESH', 'oh': 'BRUH', 'well': 'AIGHT SO',
  'because': 'CUZ', 'since': 'GIVEN THAT', 'although': 'EVEN THO',
  'though': 'THO', 'but': 'BUT PEEP THIS', 'and': 'AND', 'or': 'OR',
  'the': 'the', 'a': 'a', 'an': 'an',
  'this': 'THIS', 'that': 'THAT', 'these': 'THESE', 'those': 'THOSE',
  'my': 'MY', 'your': 'YOUR', 'his': 'HIS', 'her': 'HER',
  'our': 'OUR', 'their': 'THEIR', 'its': 'ITS',
  'i': 'I', 'me': 'ME', 'we': 'WE', 'you': 'YOU',
  'he': 'THIS SIGMA', 'she': 'THIS QUEEN', 'they': 'THEY', 'it': 'IT',
  'who': 'WHICH SIGMA', 'what': 'WHAT', 'where': 'WHERE', 'when': 'WHEN',
  'why': 'FOR WHAT REASON', 'how': 'BY WHAT MEANS',
  'if': 'IF', 'so': 'SO', 'than': 'THAN',
  'about': 'REGARDING', 'after': 'FOLLOWING', 'before': 'PRIOR TO',
  'between': 'AMID', 'during': 'THROUGHOUT', 'without': 'LACKING',
  'against': 'VERSUS', 'through': 'VIA', 'into': 'INTO',
  'under': 'BENEATH', 'over': 'ABOVE', 'around': 'SURROUNDING',
  'until': 'UNTIL', 'while': 'WHILST', 'across': 'SPANNING',
  'toward': 'IN THE DIRECTION OF', 'within': 'INSIDE OF',

  // ===== MULTI-WORD PHRASES (checked first) =====
  'a lot': 'MAD', 'a lot of': 'HELLA',
  'of course': 'OBVIOUSLY FR', 'in fact': 'NO CAP',
  'for example': 'PEEP THIS', 'on the other hand': 'FLIP SIDE THO',
  'at least': 'MINIMUM', 'right now': 'RN RN',
  'by the way': 'ALSO REAL QUICK', 'as well': 'FR FR',
  'so far': 'UP TO THIS POINT IN THE TIMELINE',
  'each other': 'ONE ANOTHER FR',
  'i think': 'I RECKON NO CAP', 'i believe': 'I AM PILLED ON THE FACT',
  'to be honest': 'TBH NO CAP', 'in my opinion': 'IMO FR',
  'at the same time': 'SIMULTANEOUSLY', 'in the end': 'WHEN THE DUST SETTLED',
  'at first': 'INITIALLY FR', 'at last': 'FINALLY THO',
  'on time': 'PUNCTUAL FR', 'all the time': 'NONSTOP',
  'more or less': 'ROUGHLY FR', 'step by step': 'ONE MOVE AT A TIME',
  'as soon as': 'THE MOMENT', 'even though': 'DESPITE THE FACT THAT',
  'no one': 'ZERO SIGMAS', 'a little': 'A SMIDGE',
  'a few': 'LIKE TWO OR THREE', 'used to': 'BACK IN THE DAY would',
  'kind of': 'LOWKEY', 'sort of': 'KINDA FR',
  'a bit': 'SLIGHTLY', 'not really': 'NOT EVEN FR',
  'too much': 'WAY TOO MUCH FR', 'so much': 'INSANE AMOUNTS OF',
  'as if': 'LIKE BRO', 'such as': 'LIKE FOR INSTANCE',
  'due to': 'BECAUSE OF', 'in order to': 'SO THAT',
  'according to': 'BASED ON THE SACRED TEXTS OF',
  'on top of': 'STACKED ON', 'in front of': 'FACING',
  'instead of': 'RATHER THAN', 'in spite of': 'DESPITE',
  'no longer': 'NOT ANYMORE FR', 'once again': 'YET AGAIN',
  'over and over': 'ON REPEAT', 'little by little': 'GRADUALLY FR',
  'sooner or later': 'EVENTUALLY FR', 'more and more': 'INCREASINGLY',
};

const SUFFIXES = ['MAXXED', 'MOGGED', 'PILLED', 'MAXXING', 'CEL', 'FRAUD'];
const PREFIX_COMBOS = ['GIGA', 'MEGA', 'ULTRA', 'HYPER', 'TURBO'];
const EMOJIS = ['💀', '🔥', '💯', '😳', '👀', '🧠', '🗿', '☠️', '⚡', '🦴', '😤', '🫡', '💪'];
const PSL_INSERTS = ['PSL 3', 'PSL 5', 'PSL 7', 'PSL 8', 'PSL 9', 'PSL 10'];
const FILLER_INSERTS = ['no cap', 'fr fr', 'on god', 'deadass', 'lowkey', 'highkey', 'ngl'];

const MULTI_WORD_KEYS = Object.keys(BRAINROT_DICT)
  .filter(k => k.includes(' '))
  .sort((a, b) => b.length - a.length);

function seededRandom(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return () => {
    h = (h * 1664525 + 1013904223) | 0;
    return ((h >>> 0) / 4294967296);
  };
}

function translateLine(line) {
  const rand = seededRandom(line);
  let result = line;

  for (const phrase of MULTI_WORD_KEYS) {
    const regex = new RegExp('\\b' + phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
    result = result.replace(regex, BRAINROT_DICT[phrase]);
  }

  let wordCount = 0;
  result = result.replace(/\b[a-zA-Z]+\b/g, (word) => {
    wordCount++;
    const lower = word.toLowerCase();

    if (BRAINROT_DICT[lower]) {
      return BRAINROT_DICT[lower];
    }

    if (word.length > 4 && rand() < 0.3) {
      const suffix = SUFFIXES[Math.floor(rand() * SUFFIXES.length)];
      if (rand() < 0.2) {
        const prefix = PREFIX_COMBOS[Math.floor(rand() * PREFIX_COMBOS.length)];
        return prefix + word.toUpperCase() + suffix;
      }
      return word.toUpperCase() + suffix;
    }

    if (rand() < 0.35) {
      return word.toUpperCase();
    }

    return word;
  });

  if (wordCount > 5 && rand() < 0.3) {
    const filler = FILLER_INSERTS[Math.floor(rand() * FILLER_INSERTS.length)];
    const words = result.split(' ');
    const insertAt = Math.floor(rand() * (words.length - 2)) + 2;
    words.splice(insertAt, 0, filler);
    result = words.join(' ');
  }

  if (rand() < 0.15) {
    const psl = PSL_INSERTS[Math.floor(rand() * PSL_INSERTS.length)];
    const words = result.split(' ');
    const insertAt = Math.floor(rand() * (words.length - 1)) + 1;
    words.splice(insertAt, 0, psl);
    result = words.join(' ');
  }

  const sentences = result.split(/(?<=[.!?])\s+/);
  result = sentences.map(s => {
    if (rand() < 0.45) {
      const emoji = EMOJIS[Math.floor(rand() * EMOJIS.length)];
      return s + ' ' + emoji;
    }
    return s;
  }).join(' ');

  if (rand() < 0.4 && !result.match(/[\u{1F000}-\u{1FFFF}]/u)) {
    const emoji = EMOJIS[Math.floor(rand() * EMOJIS.length)];
    result += ' ' + emoji;
  }

  return result;
}

function translateLocal(batchText) {
  const lines = batchText.split('\n');
  const translated = [];

  for (const line of lines) {
    const match = line.match(/^\[(\d+)\]\s*(.+)/);
    if (match) {
      const num = match[1];
      const text = match[2];
      translated.push(`[${num}] ${translateLine(text)}`);
    }
  }

  return translated.join('\n');
}
