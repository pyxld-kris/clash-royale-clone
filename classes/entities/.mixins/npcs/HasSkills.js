import Phaser from "phaser";

class HasSkills {
  constructor() {
    var attributes = {
      skills: []
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasSkills.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  // <Getters>
  getSkills() {
    return this.skills;
  },

  getSkillString() {
    let returnString = "\n" + this.age + "\n\n";
    this.skills.forEach((skill, index) => {
      returnString += skill.type + ": " + skill.level;
      returnString += "\n";
    });

    return returnString;
  },
  // </Getters>

  // <Setters>
  setSkills(skills) {
    this.skills = skills;
  },
  // </Setters>

  getSkillIndex(skillType) {
    for (let i = 0; i < this.skills.length; i++) {
      const skill = this.skills[i];
      if (skill.type === skillType) {
        return i;
      }
    }
    return -1;
  },

  addSkill(skillType) {
    let skillIndex = this.getSkillIndex(skillType);
    if (skillIndex !== -1) {
      // Insert a new skill entry for this Actor
      this.skills[skillIndex].level++;
    } else {
      // Insert a new skill entry for this Actor
      this.skills.push({ type: skillType, level: 1 });
    }
  },

  // TODO: "why not add in multipliers for different races so you could have less skills as older things"
  populateSkills() {
    for (let i = 0; i < this.getAge(); i++) {
      // Every year of this actor's life:
      //  80% chance of becoming more proficient in an existing skill they have
      //  20% chance of acquiring a random new skill

      if (Math.random() < 0.8 && this.skills.length > 0) {
        // Existing skill
        let existingSkill = this.skills[
          parseInt(Math.random() * this.skills.length)
        ];
        let existingSkillType = existingSkill.type;

        this.addSkill(existingSkillType);
      } else {
        // New skill
        let newSkill = skillTypes[parseInt(Math.random() * skillTypes.length)];
        let newSkillType = newSkill.skillType;

        this.addSkill(newSkillType);
      }
    }
  }
};

export default HasSkills;

/*
 *Holds a dictionary of all of our possible skills
 */
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
