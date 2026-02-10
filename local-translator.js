const BRAINROT_DICT = {
  // Nouns
  'person': 'SIGMA', 'people': 'SIGMAS', 'man': 'GIGACHAD', 'men': 'GIGACHADS',
  'woman': 'STACY', 'women': 'STACYS', 'guy': 'CHAD', 'guys': 'CHADS',
  'boy': 'LIL SIGMA', 'girl': 'GYATT', 'baby': 'MINI SIGMA', 'kid': 'BETA SPAWN',
  'friend': 'DAY ONE', 'friends': 'DAY ONES', 'enemy': 'OPP', 'enemies': 'OPPS',
  'boss': 'ALPHA', 'leader': 'PACK LEADER', 'king': 'SIGMA KING', 'queen': 'AURA QUEEN',
  'money': 'RIZZ CURRENCY', 'dollar': 'AURA COIN', 'dollars': 'AURA COINS',
  'house': 'SIGMA LAIR', 'home': 'SIGMA DEN', 'car': 'WHIP', 'phone': 'AURA DEVICE',
  'food': 'GAINS FUEL', 'water': 'HYDRATION ELIXIR', 'coffee': 'GRINDSET JUICE',
  'school': 'KNOWLEDGE DOJO', 'work': 'THE GRIND', 'job': 'GRINDSET',
  'life': 'THIS SIMULATION', 'world': 'THIS TIMELINE', 'earth': 'THE REALM',
  'time': 'THE CLOCK', 'day': 'ROTATION', 'night': 'DARK MODE',
  'morning': 'EARLY GRIND', 'year': 'CYCLE', 'today': 'THIS ROTATION',
  'face': 'FACIAL STRUCTURE', 'body': 'FRAME', 'head': 'CRANIUM',
  'eyes': 'HUNTER EYES', 'hair': 'FOLLICLES', 'brain': 'CRANIAL PROCESSOR',
  'heart': 'AURA CORE', 'hand': 'GRIP', 'hands': 'GRIPPERS',
  'problem': 'L', 'problems': 'Ls', 'mistake': 'MASSIVE L',
  'win': 'W', 'success': 'FAT W', 'victory': 'GIGA W',
  'loss': 'L', 'failure': 'CATASTROPHIC L', 'idea': 'BRAINROT VISION',
  'truth': 'NO CAP FACTS', 'lie': 'CAP', 'lies': 'STRAIGHT CAP',
  'internet': 'THE GRID', 'computer': 'BATTLE STATION', 'game': 'RANKED MATCH',
  'dog': 'LOYAL SIGMA PET', 'cat': 'INDEPENDENT SIGMA PET',
  'music': 'AURA SOUNDTRACK', 'song': 'BANGER', 'movie': 'KINO',
  'book': 'KNOWLEDGE SCROLL', 'news': 'LORE DROP',
  'door': 'PORTAL', 'wall': 'BARRIER', 'window': 'OBSERVATION PANEL',
  'city': 'CONCRETE JUNGLE', 'country': 'REALM', 'place': 'LOCATION',
  'weather': 'ATMOSPHERIC AURA', 'rain': 'SKY TEARS', 'sun': 'THE LIGHT SOURCE',
  'fire': 'LITERAL FIRE', 'power': 'AURA LEVEL', 'energy': 'SIGMA ENERGY',
  'love': 'RIZZ CONNECTION', 'hate': 'ANTI-AURA', 'fear': 'LOW AURA MOMENT',
  'chance': 'AURA WINDOW', 'price': 'AURA TAX', 'cost': 'FANUM TAX',
  'team': 'THE SQUAD', 'group': 'THE PACK', 'company': 'THE SYNDICATE',
  'teacher': 'KNOWLEDGE SIGMA', 'student': 'GRIND APPRENTICE',
  'doctor': 'HEALTH SIGMA', 'president': 'TOP G',

  // Verbs
  'is': 'be HITTIN', 'are': 'be HITTIN', 'was': 'was DEADASS',
  'said': 'YAPPED', 'says': 'YAPS', 'say': 'YAP', 'saying': 'YAPPING',
  'think': 'LOOKSMAX MY THOUGHTS', 'thinking': 'BRAINMAXXING',
  'know': 'am LOCKED IN on', 'knew': 'was LOCKED IN on',
  'want': 'CRAVE', 'wanted': 'CRAVED', 'need': 'DESPERATELY REQUIRE',
  'like': 'VIBE WITH', 'liked': 'VIBED WITH', 'love': 'am OBSESSED WITH',
  'hate': 'am ANTI-AURA toward',
  'go': 'MOBILIZE', 'going': 'MOBILIZING', 'went': 'STRIDEMAXXED',
  'walk': 'STRIDEMAXX', 'walked': 'STRIDEMAXXED', 'walking': 'STRIDEMAXXING',
  'run': 'SPEEDMAXX', 'running': 'SPEEDMAXXING', 'ran': 'SPEEDMAXXED',
  'look': 'MIRE', 'looking': 'MIRIN', 'looked': 'MIRED',
  'see': 'CLOCK', 'saw': 'CLOCKED', 'seen': 'CLOCKED',
  'eat': 'CONSUME GAINS', 'eating': 'GAINSMAXXING', 'ate': 'CONSUMED GAINS',
  'sleep': 'RECOVERYMAXX', 'sleeping': 'RECOVERYMAXXING', 'slept': 'RECOVERYMAXXED',
  'work': 'GRIND', 'working': 'GRINDING', 'worked': 'GRINDED',
  'try': 'ATTEMPT TO MAXX', 'trying': 'MAXXING', 'tried': 'ATTEMPTED TO MAXX',
  'help': 'CARRY', 'helped': 'CARRIED', 'helping': 'CARRYING',
  'give': 'BESTOW', 'gave': 'BESTOWED', 'giving': 'BESTOWING',
  'take': 'FANUM TAX', 'took': 'FANUM TAXED', 'taking': 'FANUM TAXING',
  'make': 'FORGE', 'made': 'FORGED', 'making': 'FORGING',
  'start': 'INITIATE GRIND', 'started': 'INITIATED GRIND',
  'stop': 'CEASE ALL OPERATIONS', 'stopped': 'CEASED ALL OPERATIONS',
  'talk': 'YAP', 'talked': 'YAPPED', 'talking': 'YAPPING',
  'tell': 'DROP LORE', 'told': 'DROPPED LORE', 'telling': 'DROPPING LORE',
  'fight': 'MOG BATTLE', 'fighting': 'MOG BATTLING', 'fought': 'MOG BATTLED',
  'win': 'SECURE THE W', 'won': 'SECURED THE W', 'winning': 'W COLLECTING',
  'lose': 'CATCH AN L', 'lost': 'CAUGHT AN L', 'losing': 'L FARMING',
  'die': 'GET MOGGED TO DEATH', 'died': 'GOT MOGGED FATALLY',
  'kill': 'AURA DELETE', 'killed': 'AURA DELETED',
  'pay': 'DROP AURA COINS', 'paid': 'DROPPED AURA COINS',
  'buy': 'SECURE THE BAG', 'bought': 'SECURED THE BAG',
  'sell': 'LIQUIDATE', 'sold': 'LIQUIDATED',
  'learn': 'KNOWLEDGEMAXX', 'learned': 'KNOWLEDGEMAXXED',
  'read': 'LORE ABSORB', 'reading': 'LORE ABSORBING',
  'write': 'INSCRIBE SIGMA TEXTS', 'writing': 'INSCRIBING SIGMA TEXTS',
  'play': 'GAME', 'playing': 'GAMING', 'played': 'GAMED',
  'watch': 'SPECTATE', 'watching': 'SPECTATING', 'watched': 'SPECTATED',
  'wait': 'HOLD POSITION', 'waiting': 'HOLDING POSITION',
  'believe': 'am PILLED on', 'believed': 'was PILLED on',
  'happen': 'DROP', 'happened': 'DROPPED', 'happening': 'DROPPING',
  'change': 'GLOW UP', 'changed': 'GLOWED UP',
  'feel': 'SENSE THE AURA', 'feeling': 'SENSING THE AURA', 'felt': 'SENSED THE AURA',
  'fall': 'FACEPLANT', 'fell': 'FACEPLANTED', 'falling': 'FACEPLANTING',
  'break': 'SHATTER', 'broke': 'SHATTERED', 'broken': 'ABSOLUTELY SHATTERED',
  'grow': 'ASCEND', 'grew': 'ASCENDED', 'growing': 'ASCENDING',
  'understand': 'GET THE LORE', 'understood': 'GOT THE LORE',

  // Adjectives
  'good': 'BUSSIN', 'great': 'GOATED', 'best': 'MOST GOATED',
  'bad': 'NO AURA', 'worst': 'LOWEST AURA', 'terrible': 'NEGATIVE AURA',
  'big': 'GIGACHAD-TIER', 'small': 'MANLET-TIER', 'huge': 'ABSOLUTELY MASSIVE',
  'beautiful': 'PSL 10', 'ugly': 'PSL 1', 'pretty': 'PSL 8',
  'handsome': 'CHADLIKE', 'attractive': 'HIGH PSL',
  'smart': 'CRANIUMMAXXED', 'stupid': 'BRAINLET', 'dumb': 'ZERO IQ',
  'rich': 'STACKED', 'poor': 'BROKECEL', 'expensive': 'PREMIUM AURA',
  'cheap': 'BUDGET TIER', 'free': 'ZERO FANUM TAX',
  'fast': 'SPEEDMAXXED', 'slow': 'LAG DETECTED', 'quick': 'BLITZ MODE',
  'strong': 'BUILT DIFFERENT', 'weak': 'UNFRAMEMAXXED',
  'old': 'OG', 'new': 'FRESHLY DROPPED', 'young': 'BETA STAGE',
  'happy': 'AURA BOOSTED', 'sad': 'AURA DEPLETED', 'angry': 'RAGE MODE',
  'funny': 'COMEDY SIGMA', 'boring': 'NPC BEHAVIOR', 'interesting': 'LORE-HEAVY',
  'important': 'CRITICAL AURA', 'easy': 'NO DIFF', 'hard': 'IMPOSSIBLE DIFF',
  'difficult': 'EXTREME DIFF', 'simple': 'TUTORIAL MODE',
  'real': 'LEGIT NO CAP', 'fake': 'FRAUD', 'true': 'NO CAP',
  'false': 'STRAIGHT CAP', 'wrong': 'ANTI-SIGMA',
  'cool': 'VALID', 'hot': 'PSL 9', 'cold': 'ICE COLD AURA',
  'long': 'EXTENDED', 'short': 'HEIGHTMOGGED',
  'many': 'MAD', 'much': 'HELLA', 'few': 'BARELY ANY',
  'first': 'ALPHA POSITION', 'last': 'FINAL BOSS',
  'different': 'BUILT DIFFERENT', 'same': 'TWINNING',
  'possible': 'WITHIN THE AURA', 'impossible': 'BEYOND THE AURA',
  'dead': 'MOGGED TO EXTINCTION', 'alive': 'STILL IN THE GAME',
  'tired': 'ENERGY DEPLETED', 'sick': 'DEBUFFED',
  'crazy': 'UNHINGED SIGMA', 'weird': 'OHIO BEHAVIOR',
  'nice': 'VALID', 'mean': 'TOXIC AURA', 'kind': 'WHOLESOME SIGMA',

  // Adverbs / Filler
  'very': 'FR FR', 'really': 'DEADASS', 'actually': 'NO CAP',
  'always': 'ON GOD ALWAYS', 'never': 'NOT ONCE IN THIS TIMELINE',
  'sometimes': 'OCCASIONALLY FR', 'maybe': 'POSSIBLY NO CAP',
  'probably': 'HIGH KEY', 'definitely': 'ON GOD',
  'just': 'LITERALLY JUST', 'only': 'STRICTLY',
  'here': 'IN THIS SPOT', 'there': 'OVER YONDER',
  'now': 'RN', 'then': 'BACK IN THE DAY', 'soon': 'ANY MOMENT NOW',
  'also': 'AND GET THIS', 'too': 'AS WELL FR',
  'yes': 'BET', 'no': 'NAH', 'not': 'ABSOLUTELY NOT',
  'please': 'I BEG', 'thanks': 'GOOD LOOKS', 'thank': 'SALUTE',
  'sorry': 'MY BAD G', 'hello': 'YO', 'hey': 'AYO',
  'goodbye': 'PEACE OUT', 'ok': 'BET', 'okay': 'BET',

  // Common phrases (checked first as multi-word)
  'a lot': 'MAD', 'a lot of': 'HELLA',
  'of course': 'OBVIOUSLY FR', 'in fact': 'NO CAP',
  'for example': 'PEEP THIS', 'on the other hand': 'FLIP SIDE THO',
  'at least': 'MINIMUM', 'right now': 'RN RN',
  'by the way': 'ALSO REAL QUICK', 'as well': 'FR FR',
  'so far': 'UP TO THIS POINT IN THE TIMELINE',
  'each other': 'ONE ANOTHER FR',
};

const SUFFIXES = ['MAXXED', 'MOGGED', 'PILLED', 'MAXXING', 'CEL'];
const EMOJIS = ['💀', '🔥', '💯', '😳', '👀', '🧠', '🗿', '☠️', '⚡', '🦴'];

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

  result = result.replace(/\b[a-zA-Z]+\b/g, (word) => {
    const lower = word.toLowerCase();
    if (BRAINROT_DICT[lower]) {
      return BRAINROT_DICT[lower];
    }

    if (word.length > 3 && rand() < 0.25) {
      const suffix = SUFFIXES[Math.floor(rand() * SUFFIXES.length)];
      return word.toUpperCase() + suffix;
    }

    if (rand() < 0.3) {
      return word.toUpperCase();
    }

    return word;
  });

  const sentences = result.split(/(?<=[.!?])\s+/);
  result = sentences.map(s => {
    if (rand() < 0.4) {
      const emoji = EMOJIS[Math.floor(rand() * EMOJIS.length)];
      return s + ' ' + emoji;
    }
    return s;
  }).join(' ');

  if (rand() < 0.3 && !result.match(/[💀🔥💯😳👀🧠🗿☠️⚡🦴]$/)) {
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
