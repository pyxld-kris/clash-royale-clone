// Holds a history of the game world, based on:
//  actors and the actions they take

export default class EventLog {
  constructor() {
    this.eventEntries = [];
  }
}

class EventEntry {
  constructor() {
    this.actor = null;
    this.action = null;
  }
}

export class EventActor {
  constructor() {
    this.name = null;
    this.gender = null;
    this.age = null;
    this.skills = [];
    /*
    this.skills = [
      {skillType, level}
    ]
    */
  }

  // <Setters>
  setAge(age) {
    this.age = age;
  }
  // </Setters>

  getSkillIndex(skillType) {
    for (let i = 0; i < this.skills.length; i++) {
      const skill = this.skills[i];
      if (skill.type === skillType) {
        return i;
      }
    }
    return -1;
  }

  addSkill(skillType) {
    let skillIndex = this.getSkillIndex(skillType);
    console.log(skillIndex);
    if (skillIndex !== -1) {
      // Insert a new skill entry for this Actor
      this.skills[skillIndex].level++;
    } else {
      // Insert a new skill entry for this Actor
      this.skills.push({ type: skillType, level: 1 });
    }
  }

  toString() {
    let returnString = "\n" + this.age + "\n\n";
    this.skills.forEach((skill, index) => {
      returnString += skill.type + ": " + skill.level;
      returnString += "\n";
    });

    return returnString;
  }
}
EventActor.generateRandomActor = function() {
  let thisActor = new EventActor();

  let age = 5 + parseInt(Math.random() * 60);
  for (let i = 0; i < age; i++) {
    // Every year of this actor's life:
    //  80% chance of becoming more proficient in an existing skill they have
    //  20% chance of acquiring a random new skill

    if (Math.random() < 0.8 && thisActor.skills.length > 0) {
      // Existing skill
      let existingSkill =
        thisActor.skills[parseInt(Math.random() * thisActor.skills.length)];
      let existingSkillType = existingSkill.type;

      thisActor.addSkill(existingSkillType);
    } else {
      // New skill
      let newSkill = skillTypes[parseInt(Math.random() * skillTypes.length)];
      let newSkillType = newSkill.skillType;

      thisActor.addSkill(newSkillType);
    }
  }

  thisActor.setAge(age);

  console.log(thisActor.toString());
};

class EventAction {}
class EventLocation {}

class ActionType {}

const skillTypes = [
  { skillType: "Acrobatics", difficulty: 1 },
  { skillType: "Alchemy", difficulty: 1 },
  { skillType: "Animal Call", difficulty: 1 },
  { skillType: "Astrology", difficulty: 1 },
  { skillType: "Armorer", difficulty: 1 },
  { skillType: "Artistry", difficulty: 1 },
  { skillType: "Barter", difficulty: 1 },
  { skillType: "Blackmail", difficulty: 1 },
  { skillType: "Blacksmith", difficulty: 1 },
  { skillType: "Bluff", difficulty: 1 },
  { skillType: "Boating", difficulty: 1 },
  { skillType: "Brewing", difficulty: 1 },
  { skillType: "Bribe", difficulty: 1 },
  { skillType: "Camping", difficulty: 1 },
  { skillType: "Cartography", difficulty: 1 },
  { skillType: "Cooking", difficulty: 1 },
  { skillType: "Dancing", difficulty: 1 },
  { skillType: "Deceit", difficulty: 1 },
  { skillType: "Diplomacy", difficulty: 1 },
  { skillType: "Disguise", difficulty: 1 },
  { skillType: "Empathy", difficulty: 1 },
  { skillType: "Enchanting", difficulty: 1 },
  { skillType: "Engineering", difficulty: 1 },
  { skillType: "Etiquette", difficulty: 1 },
  { skillType: "Farming", difficulty: 1 },
  { skillType: "First Aid", difficulty: 1 },
  { skillType: "Fishing", difficulty: 1 },
  { skillType: "Flirting", difficulty: 1 },
  { skillType: "Folklore", difficulty: 1 },
  { skillType: "Fortune Telling", difficulty: 1 },
  { skillType: "Gambling", difficulty: 1 },
  { skillType: "Haggling", difficulty: 1 },
  { skillType: "Healing", difficulty: 1 },
  { skillType: "Hunting", difficulty: 1 },
  { skillType: "Intimidation", difficulty: 1 },
  { skillType: "Investigation", difficulty: 1 },
  { skillType: "Language", difficulty: 1 },
  { skillType: "Literacy", difficulty: 1 },
  { skillType: "Marksman", difficulty: 1 },
  { skillType: "Merchant", difficulty: 1 },
  { skillType: "Mining", difficulty: 1 },
  { skillType: "Mountaineering", difficulty: 1 },
  { skillType: "Mythology", difficulty: 1 },
  { skillType: "Pickpocket", difficulty: 1 },
  { skillType: "Public Speaking", difficulty: 1 },
  { skillType: "Scribe", difficulty: 1 },
  { skillType: "Sculpting", difficulty: 1 },
  { skillType: "Seamanship", difficulty: 1 },
  { skillType: "Seduction", difficulty: 1 },
  { skillType: "Sewing", difficulty: 1 },
  { skillType: "Slight of Hand", difficulty: 1 },
  { skillType: "Spell Craft", difficulty: 1 },
  { skillType: "Soldiering", difficulty: 1 },
  { skillType: "Spelunking", difficulty: 1 },
  { skillType: "Stealth", difficulty: 1 },
  { skillType: "Streetwise", difficulty: 1 },
  { skillType: "Stonemasonry", difficulty: 1 },
  { skillType: "Storytelling", difficulty: 1 },
  { skillType: "Survival", difficulty: 1 },
  { skillType: "Swimming", difficulty: 1 },
  { skillType: "Tailor", difficulty: 1 },
  { skillType: "Teaching", difficulty: 1 },
  { skillType: "Tracking", difficulty: 1 },
  { skillType: "Trapping", difficulty: 1 },
  { skillType: "Unarmed Combat", difficulty: 1 },
  { skillType: "Weapons Master", difficulty: 1 },
  { skillType: "Weapon Smithing", difficulty: 1 },
  { skillType: "Weaving", difficulty: 1 },
  { skillType: "Woodworking", difficulty: 1 }
];

/*

  "Acrobatics",
  "Alchemy",
  "Anatomy",
  "Ancient History",
  "Ancient Language",
  "Animal Call",
  "Animal Handling",
  "Animal Training",
  "Animal Lore",
  "Anthropology",
  "Appraising",
  "Arcane Lore",
  "Astrology",
  "Armorer",
  "Artistry",
  "Balancing",
  "Barter",
  "Blackmail",
  "Berserk",
  "Blacksmith",
  "Blind Fighting",
  "Bluff",
  "Boating",
  "Body Language",
  "Boxing",
  "Breath Control",
  "Brewing",
  "Bribe",
  "Bullfighting",
  "Calligraphy",
  "Camping",
  "Camouflage",
  "Carpentry",
  "Cartography",
  "Cobbling",
  "Computer Operation",
  "Climbing",
  "Concealment",
  "Contortion",
  "Cooking",
  "Counterfeiting",
  "Cryptography",
  "Dancing",
  "Dead Language",
  "Deceit",
  "Demolition",
  "Detect Lie",
  "Diagnosis",
  "Disarm Traps",
  "Detect Traps",
  "Detect Vice",
  "Detect Lie",
  "Diplomacy",
  "Disarm Opponent",
  "Disguise",
  "Double-Handed Combat",
  "Driving",
  "Electronics",
  "Empathy",
  "Enchanting",
  "Engineering",
  "Escape",
  "Etiquette",
  "Falconry",
  "Farming",
  "Fencing",
  "Fire Breathing",
  "Fire-Making",
  "First Aid",
  "Fishing",
  "Fletcher",
  "Flirting",
  "Folklore",
  "Fortune Telling",
  "Gambling",
  "General Knowledge",
  "Gesture",
  "Gibberish",
  "Gymnastics",
  "Hacking",
  "Haggling",
  "Healing",
  "Heraldry",
  "Herbalism",
  "Herding",
  "Hibernate",
  "Hide (In Shadows)",
  "Hunting",
  "Hypnotism",
  "Impersonation",
  "Interrogation",
  "Intimidation",
  "Investigation",
  "Jargon",
  "Juggling",
  "Jumping",
  "Language",
  "Lasso",
  "Leather Working",
  "Lifting",
  "Literacy",
  "Marksman",
  "Mechanics",
  "Mediation",
  "Merchant",
  "Mining",
  "Mountaineering",
  "Mythology",
  "Native Language",
  "FocusNavigationEvent",
  "Occultism",
  "Pilot",
  "Photography",
  "Pickpocket",
  "Predict Weather",
  "Psychology",
  "Public Speaking",
  "Quick-Draw",
  "Read Lips",
  "Rescue",
  "Research",
  "Reverse Engineering",
  "Rope Use",
  "Riding",
  "Rigging",
  "Scribe",
  "SCUBA Diving",
  "Scrounging",
  "Sculpting",
  "Seamanship",
  "Secret Language",
  "Security Systems",
  "Seduction",
  "Set Snares",
  "Sewing",
  "Signaling",
  "Sign Language",
  "Slight of Hand",
  "Snake Charming",
  "Sniper",
  "Spell Craft",
  "Sociology",
  "Soldiering",
  "Speed-Load",
  "Spelunking",
  "Shadowing",
  "Stealth",
  "Steganography",
  "Streetwise",
  "Stonemasonry",
  "Storytelling",
  "Stunt Driver",
  "Survival",
  "Swimming",
  "Tailor",
  "Teaching",
  "Throw Voice",
  "Tightrope Walking",
  "Torture",
  "Toxicology",
  "Tracking",
  "Trapping",
  "Unarmed Combat",
  "Ventriloquism",
  "Weapons Master",
  "Weapon Smithing",
  "Weaving",
  "Woodworking",
  "Wrestling",
  "Zero-Gravity"
*/
