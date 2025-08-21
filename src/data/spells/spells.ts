import {SpellAction} from "@/types";

export const spells: Record<string, SpellAction> = {
  "Acid Arrow": {
    "name": "Acid Arrow",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 4
          },
          "effectType": "acid"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 5,
                "d": 4
              },
              "effectType": "acid"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Acid Splash": {
    "name": "Acid Splash",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 6
          },
          "effectType": "acid"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 6
              },
              "effectType": "acid"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Aid": {
    "name": "Aid",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 2
  },
  "Alarm": {
    "name": "Alarm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 20
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 1
  },
  "Alter Self": {
    "name": "Alter Self",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Animal Friendship": {
    "name": "Animal Friendship",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Animal Messenger": {
    "name": "Animal Messenger",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 2
  },
  "Animal Shapes": {
    "name": "Animal Shapes",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 24 hours",
    "concentration": true,
    "level": 8
  },
  "Animate Dead": {
    "name": "Animate Dead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Animate Objects": {
    "name": "Animate Objects",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5
  },
  "Antilife Shell": {
    "name": "Antilife Shell",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 5
  },
  "Antimagic Field": {
    "name": "Antimagic Field",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 8
  },
  "Antipathy/Sympathy": {
    "name": "Antipathy/Sympathy",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 200
    },
    "duration": "10 days",
    "concentration": false,
    "level": 8
  },
  "Arcane Eye": {
    "name": "Arcane Eye",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 4
  },
  "Arcane Hand": {
    "name": "Arcane Hand",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5
  },
  "Arcane Lock": {
    "name": "Arcane Lock",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 2
  },
  "Arcane Sword": {
    "name": "Arcane Sword",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 10
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 10
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 7
  },
  "Arcanist's Magic Aura": {
    "name": "Arcanist's Magic Aura",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 2
  },
  "Astral Projection": {
    "name": "Astral Projection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Special",
    "concentration": false,
    "level": 9
  },
  "Augury": {
    "name": "Augury",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Awaken": {
    "name": "Awaken",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Bane": {
    "name": "Bane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Banishment": {
    "name": "Banishment",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Barkskin": {
    "name": "Barkskin",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Beacon of Hope": {
    "name": "Beacon of Hope",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3
  },
  "Bestow Curse": {
    "name": "Bestow Curse",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Black Tentacles": {
    "name": "Black Tentacles",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 6
          },
          "effectType": "bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 6
              },
              "effectType": "bludgeoning"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cube",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Blade Barrier": {
    "name": "Blade Barrier",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 6,
            "d": 10
          },
          "effectType": "slashing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 6,
                "d": 10
              },
              "effectType": "slashing"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "line",
      "size": 100
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 6,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Bless": {
    "name": "Bless",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1
  },
  "Blight": {
    "name": "Blight",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 8,
            "d": 8
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 9,
                "d": 8
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Blindness/Deafness": {
    "name": "Blindness/Deafness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 2,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Blink": {
    "name": "Blink",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 3
  },
  "Blur": {
    "name": "Blur",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2
  },
  "Branding Smite": {
    "name": "Branding Smite",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 6
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 6
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2
  },
  "Burning Hands": {
    "name": "Burning Hands",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cone",
      "size": 15
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Call Lightning": {
    "name": "Call Lightning",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 10
          },
          "effectType": "lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 10
              },
              "effectType": "lightning"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 5
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 3
  },
  "Calm Emotions": {
    "name": "Calm Emotions",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Chain Lightning": {
    "name": "Chain Lightning",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 10,
            "d": 8
          },
          "effectType": "lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 10,
                "d": 8
              },
              "effectType": "lightning"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Charm Person": {
    "name": "Charm Person",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Chill Touch": {
    "name": "Chill Touch",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 8
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "duration": "1 round",
    "concentration": false,
    "level": 0
  },
  "Circle of Death": {
    "name": "Circle of Death",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 8,
            "d": 6
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 10,
                "d": 6
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 60
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Clairvoyance": {
    "name": "Clairvoyance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "1 mile",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 3
  },
  "Clone": {
    "name": "Clone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 8
  },
  "Cloudkill": {
    "name": "Cloudkill",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 5,
            "d": 8
          },
          "effectType": "poison"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 6,
                "d": 8
              },
              "effectType": "poison"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Color Spray": {
    "name": "Color Spray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cone",
      "size": 15
    },
    "duration": "1 round",
    "concentration": false,
    "level": 1
  },
  "Command": {
    "name": "Command",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 round",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Commune": {
    "name": "Commune",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 5
  },
  "Commune With Nature": {
    "name": "Commune With Nature",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Comprehend Languages": {
    "name": "Comprehend Languages",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1
  },
  "Compulsion": {
    "name": "Compulsion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Cone of Cold": {
    "name": "Cone of Cold",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 8,
            "d": 8
          },
          "effectType": "cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 9,
                "d": 8
              },
              "effectType": "cold"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cone",
      "size": 60
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Confusion": {
    "name": "Confusion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Conjure Animals": {
    "name": "Conjure Animals",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 3
  },
  "Conjure Celestial": {
    "name": "Conjure Celestial",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 7
  },
  "Conjure Elemental": {
    "name": "Conjure Elemental",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 10
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 5
  },
  "Conjure Fey": {
    "name": "Conjure Fey",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 6
  },
  "Conjure Minor Elementals": {
    "name": "Conjure Minor Elementals",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 4
  },
  "Conjure Woodland Beings": {
    "name": "Conjure Woodland Beings",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 4
  },
  "Contact Other Plane": {
    "name": "Contact Other Plane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "intelligence",
      "dcSuccess": "no effect"
    }
  },
  "Contagion": {
    "name": "Contagion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "7 days",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Contingency": {
    "name": "Contingency",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "10 days",
    "concentration": false,
    "level": 6
  },
  "Continual Flame": {
    "name": "Continual Flame",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 2
  },
  "Control Water": {
    "name": "Control Water",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 8
          },
          "effectType": "bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "bludgeoning"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cube",
      "size": 100
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "strength",
      "dcSuccess": "half damage"
    }
  },
  "Control Weather": {
    "name": "Control Weather",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 8 hours",
    "concentration": true,
    "level": 8
  },
  "Counterspell": {
    "name": "Counterspell",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Create Food and Water": {
    "name": "Create Food and Water",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Create or Destroy Water": {
    "name": "Create or Destroy Water",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 30
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Create Undead": {
    "name": "Create Undead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6
  },
  "Creation": {
    "name": "Creation",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 5
    },
    "duration": "Special",
    "concentration": false,
    "level": 5
  },
  "Cure Wounds": {
    "name": "Cure Wounds",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Dancing Lights": {
    "name": "Dancing Lights",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 0
  },
  "Darkness": {
    "name": "Darkness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 15
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 2
  },
  "Darkvision": {
    "name": "Darkvision",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 2
  },
  "Daylight": {
    "name": "Daylight",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 60
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 3
  },
  "Death Ward": {
    "name": "Death Ward",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 4
  },
  "Delayed Blast Fireball": {
    "name": "Delayed Blast Fireball",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 12,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 13,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 7,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Demiplane": {
    "name": "Demiplane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 8
  },
  "Detect Evil and Good": {
    "name": "Detect Evil and Good",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Detect Magic": {
    "name": "Detect Magic",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Detect Poison and Disease": {
    "name": "Detect Poison and Disease",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Detect Thoughts": {
    "name": "Detect Thoughts",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2
  },
  "Dimension Door": {
    "name": "Dimension Door",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "500 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 6
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 6
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4
  },
  "Disguise Self": {
    "name": "Disguise Self",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1
  },
  "Disintegrate": {
    "name": "Disintegrate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 10,
            "d": 6
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 10,
                "d": 6
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cube",
      "size": 10
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Dispel Evil and Good": {
    "name": "Dispel Evil and Good",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Dispel Magic": {
    "name": "Dispel Magic",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Divination": {
    "name": "Divination",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4
  },
  "Divine Favor": {
    "name": "Divine Favor",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 4
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 1,
                "d": 4
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1
  },
  "Divine Word": {
    "name": "Divine Word",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Dominate Beast": {
    "name": "Dominate Beast",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Dominate Monster": {
    "name": "Dominate Monster",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 8,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Dominate Person": {
    "name": "Dominate Person",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Dream": {
    "name": "Dream",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Special",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 6
          },
          "effectType": "psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 6
              },
              "effectType": "psychic"
            }
          ]
        }
      }
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Druidcraft": {
    "name": "Druidcraft",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Earthquake": {
    "name": "Earthquake",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "500 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 100
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 8
  },
  "Eldritch Blast": {
    "name": "Eldritch Blast",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 10
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 1,
                "d": 10
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Enhance Ability": {
    "name": "Enhance Ability",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Enlarge/Reduce": {
    "name": "Enlarge/Reduce",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Entangle": {
    "name": "Entangle",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1,
    "dc": {
      "dcSaveType": "strength",
      "dcSuccess": "no effect"
    }
  },
  "Enthrall": {
    "name": "Enthrall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 2,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Etherealness": {
    "name": "Etherealness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 7
  },
  "Expeditious Retreat": {
    "name": "Expeditious Retreat",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Eyebite": {
    "name": "Eyebite",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 6,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Fabricate": {
    "name": "Fabricate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4
  },
  "Faerie Fire": {
    "name": "Faerie Fire",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Faithful Hound": {
    "name": "Faithful Hound",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 8
          },
          "effectType": "piercing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 8
              },
              "effectType": "piercing"
            }
          ]
        }
      }
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 4
  },
  "False Life": {
    "name": "False Life",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1
  },
  "Fear": {
    "name": "Fear",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cone",
      "size": 30
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Feather Fall": {
    "name": "Feather Fall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 1
  },
  "Feeblemind": {
    "name": "Feeblemind",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 6
          },
          "effectType": "psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 6
              },
              "effectType": "psychic"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 8,
    "dc": {
      "dcSaveType": "intelligence",
      "dcSuccess": "no effect"
    }
  },
  "Find Familiar": {
    "name": "Find Familiar",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Find Steed": {
    "name": "Find Steed",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Find the Path": {
    "name": "Find the Path",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 24 hours",
    "concentration": true,
    "level": 6
  },
  "Find Traps": {
    "name": "Find Traps",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Finger of Death": {
    "name": "Finger of Death",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 7,
            "d": 8
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 7,
                "d": 8
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Fire Bolt": {
    "name": "Fire Bolt",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 10
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 10
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fire Shield": {
    "name": "Fire Shield",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 8
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 5
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 4
  },
  "Fire Storm": {
    "name": "Fire Storm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 7,
            "d": 10
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 7,
                "d": 10
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cube",
      "size": 100
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Fireball": {
    "name": "Fireball",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 8,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 9,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Flame Blade": {
    "name": "Flame Blade",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 2
  },
  "Flame Strike": {
    "name": "Flame Strike",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 40
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Flaming Sphere": {
    "name": "Flaming Sphere",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2
  },
  "Flesh to Stone": {
    "name": "Flesh to Stone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 6,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Floating Disk": {
    "name": "Floating Disk",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1
  },
  "Fly": {
    "name": "Fly",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 3
  },
  "Fog Cloud": {
    "name": "Fog Cloud",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 1
  },
  "Forbiddance": {
    "name": "Forbiddance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 40000
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 6
  },
  "Forcecage": {
    "name": "Forcecage",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "100 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 20
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 7
  },
  "Foresight": {
    "name": "Foresight",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 9
  },
  "Freedom of Movement": {
    "name": "Freedom of Movement",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 4
  },
  "Freezing Sphere": {
    "name": "Freezing Sphere",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 10,
            "d": 6
          },
          "effectType": "cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 10,
                "d": 6
              },
              "effectType": "cold"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 60
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Gaseous Form": {
    "name": "Gaseous Form",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 3
  },
  "Gate": {
    "name": "Gate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 9
  },
  "Geas": {
    "name": "Geas",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "30 days",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Gentle Repose": {
    "name": "Gentle Repose",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "10 days",
    "concentration": false,
    "level": 2
  },
  "Giant Insect": {
    "name": "Giant Insect",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 4
  },
  "Glibness": {
    "name": "Glibness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 8
  },
  "Globe of Invulnerability": {
    "name": "Globe of Invulnerability",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 6
  },
  "Glyph of Warding": {
    "name": "Glyph of Warding",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 3
  },
  "Goodberry": {
    "name": "Goodberry",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Grease": {
    "name": "Grease",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 10
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Greater Invisibility": {
    "name": "Greater Invisibility",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4
  },
  "Greater Restoration": {
    "name": "Greater Restoration",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Guardian of Faith": {
    "name": "Guardian of Faith",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 0,
            "d": 0,
            "flatBonus": 20
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 0,
                "d": 0,
                "flatBonus": 20
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 10
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 4,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Guards and Wards": {
    "name": "Guards and Wards",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 2500
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 6
  },
  "Guidance": {
    "name": "Guidance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 0
  },
  "Guiding Bolt": {
    "name": "Guiding Bolt",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 6
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 5,
                "d": 6
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "duration": "1 round",
    "concentration": false,
    "level": 1
  },
  "Gust of Wind": {
    "name": "Gust of Wind",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "line",
      "size": 60
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "strength",
      "dcSuccess": "no effect"
    }
  },
  "Hallow": {
    "name": "Hallow",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 60
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Hallucinatory Terrain": {
    "name": "Hallucinatory Terrain",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 150
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 4
  },
  "Harm": {
    "name": "Harm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 14,
            "d": 6
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 14,
                "d": 6
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Haste": {
    "name": "Haste",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3
  },
  "Heal": {
    "name": "Heal",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6
  },
  "Healing Word": {
    "name": "Healing Word",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Heat Metal": {
    "name": "Heat Metal",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 8
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 8
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Hellish Rebuke": {
    "name": "Hellish Rebuke",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 10
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 10
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Heroes' Feast": {
    "name": "Heroes' Feast",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6
  },
  "Heroism": {
    "name": "Heroism",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1
  },
  "Hideous Laughter": {
    "name": "Hideous Laughter",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 1,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Hold Monster": {
    "name": "Hold Monster",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Hold Person": {
    "name": "Hold Person",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Holy Aura": {
    "name": "Holy Aura",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 8
  },
  "Hunter's Mark": {
    "name": "Hunter's Mark",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 1
  },
  "Hypnotic Pattern": {
    "name": "Hypnotic Pattern",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Ice Storm": {
    "name": "Ice Storm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 8
          },
          "effectType": "bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 8
              },
              "effectType": "bludgeoning"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 20
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Identify": {
    "name": "Identify",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Illusory Script": {
    "name": "Illusory Script",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "10 days",
    "concentration": false,
    "level": 1
  },
  "Imprisonment": {
    "name": "Imprisonment",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 9,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Incendiary Cloud": {
    "name": "Incendiary Cloud",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 10,
            "d": 8
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 10,
                "d": 8
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 8,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Inflict Wounds": {
    "name": "Inflict Wounds",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 10
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 10
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Insect Plague": {
    "name": "Insect Plague",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 10
          },
          "effectType": "piercing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 5,
                "d": 10
              },
              "effectType": "piercing"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Instant Summons": {
    "name": "Instant Summons",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 6
  },
  "Invisibility": {
    "name": "Invisibility",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Irresistible Dance": {
    "name": "Irresistible Dance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 6
  },
  "Jump": {
    "name": "Jump",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 1
  },
  "Knock": {
    "name": "Knock",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Legend Lore": {
    "name": "Legend Lore",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Lesser Restoration": {
    "name": "Lesser Restoration",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Levitate": {
    "name": "Levitate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 2
  },
  "Light": {
    "name": "Light",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 0,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Lightning Bolt": {
    "name": "Lightning Bolt",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 8,
            "d": 6
          },
          "effectType": "lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 9,
                "d": 6
              },
              "effectType": "lightning"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "line",
      "size": 100
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Locate Animals or Plants": {
    "name": "Locate Animals or Plants",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Locate Creature": {
    "name": "Locate Creature",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 4
  },
  "Locate Object": {
    "name": "Locate Object",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 2
  },
  "Longstrider": {
    "name": "Longstrider",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1
  },
  "Mage Armor": {
    "name": "Mage Armor",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 1
  },
  "Mage Hand": {
    "name": "Mage Hand",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 0
  },
  "Magic Circle": {
    "name": "Magic Circle",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 10
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 3,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Magic Jar": {
    "name": "Magic Jar",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Magic Missile": {
    "name": "Magic Missile",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 4
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 1,
                "d": 4
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Magic Mouth": {
    "name": "Magic Mouth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 2
  },
  "Magic Weapon": {
    "name": "Magic Weapon",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Magnificent Mansion": {
    "name": "Magnificent Mansion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 5
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 7
  },
  "Major Image": {
    "name": "Major Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 3
  },
  "Mass Cure Wounds": {
    "name": "Mass Cure Wounds",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Mass Heal": {
    "name": "Mass Heal",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 9
  },
  "Mass Healing Word": {
    "name": "Mass Healing Word",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Mass Suggestion": {
    "name": "Mass Suggestion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 6,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Maze": {
    "name": "Maze",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 8
  },
  "Meld Into Stone": {
    "name": "Meld Into Stone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 3
  },
  "Mending": {
    "name": "Mending",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Message": {
    "name": "Message",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 round",
    "concentration": false,
    "level": 0
  },
  "Meteor Swarm": {
    "name": "Meteor Swarm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "1 mile",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 20,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 20,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 40
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 9,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Mind Blank": {
    "name": "Mind Blank",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 8
  },
  "Minor Illusion": {
    "name": "Minor Illusion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 0
  },
  "Mirage Arcane": {
    "name": "Mirage Arcane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Sight",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 5280
    },
    "duration": "10 days",
    "concentration": false,
    "level": 7
  },
  "Mirror Image": {
    "name": "Mirror Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 2
  },
  "Mislead": {
    "name": "Mislead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 5
  },
  "Misty Step": {
    "name": "Misty Step",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Modify Memory": {
    "name": "Modify Memory",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Moonbeam": {
    "name": "Moonbeam",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 10
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 10
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 5
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Move Earth": {
    "name": "Move Earth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cone",
      "size": 40
    },
    "duration": "Up to 2 hours",
    "concentration": true,
    "level": 6
  },
  "Nondetection": {
    "name": "Nondetection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 3
  },
  "Pass Without Trace": {
    "name": "Pass Without Trace",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Passwall": {
    "name": "Passwall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 5
  },
  "Phantasmal Killer": {
    "name": "Phantasmal Killer",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 4,
            "d": 10
          },
          "effectType": "psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 10
              },
              "effectType": "psychic"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Phantom Steed": {
    "name": "Phantom Steed",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 3
  },
  "Planar Ally": {
    "name": "Planar Ally",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6
  },
  "Planar Binding": {
    "name": "Planar Binding",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 5,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Plane Shift": {
    "name": "Plane Shift",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7,
    "dc": {
      "dcSaveType": "charisma",
      "dcSuccess": "no effect"
    }
  },
  "Plant Growth": {
    "name": "Plant Growth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Poison Spray": {
    "name": "Poison Spray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 12
          },
          "effectType": "poison"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 12
              },
              "effectType": "poison"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Polymorph": {
    "name": "Polymorph",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Power Word Kill": {
    "name": "Power Word Kill",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 9
  },
  "Power Word Stun": {
    "name": "Power Word Stun",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 8
  },
  "Prayer of Healing": {
    "name": "Prayer of Healing",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Prestidigitation": {
    "name": "Prestidigitation",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 0
  },
  "Prismatic Spray": {
    "name": "Prismatic Spray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 10,
            "d": 6
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 10,
                "d": 6
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cone",
      "size": 60
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Prismatic Wall": {
    "name": "Prismatic Wall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "line",
      "size": 90
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 9
  },
  "Private Sanctum": {
    "name": "Private Sanctum",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 100
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 4
  },
  "Produce Flame": {
    "name": "Produce Flame",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 8
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 0
  },
  "Programmed Illusion": {
    "name": "Programmed Illusion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 30
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 6
  },
  "Project Image": {
    "name": "Project Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "500 miles",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 24 hours",
    "concentration": true,
    "level": 7
  },
  "Protection From Energy": {
    "name": "Protection From Energy",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 3
  },
  "Protection from Evil and Good": {
    "name": "Protection from Evil and Good",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Protection from Poison": {
    "name": "Protection from Poison",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 2
  },
  "Purify Food and Drink": {
    "name": "Purify Food and Drink",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1
  },
  "Raise Dead": {
    "name": "Raise Dead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Ray of Enfeeblement": {
    "name": "Ray of Enfeeblement",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Ray of Frost": {
    "name": "Ray of Frost",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 8
          },
          "effectType": "cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "cold"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Regenerate": {
    "name": "Regenerate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 7
  },
  "Reincarnate": {
    "name": "Reincarnate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 5
  },
  "Remove Curse": {
    "name": "Remove Curse",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Resilient Sphere": {
    "name": "Resilient Sphere",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Resistance": {
    "name": "Resistance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 0
  },
  "Resurrection": {
    "name": "Resurrection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7
  },
  "Reverse Gravity": {
    "name": "Reverse Gravity",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "100 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 50
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 7,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Revivify": {
    "name": "Revivify",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 3
  },
  "Rope Trick": {
    "name": "Rope Trick",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 2
  },
  "Sacred Flame": {
    "name": "Sacred Flame",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 8
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "no effect"
    }
  },
  "Sanctuary": {
    "name": "Sanctuary",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 1
  },
  "Scorching Ray": {
    "name": "Scorching Ray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 6
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 6
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2
  },
  "Scrying": {
    "name": "Scrying",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 5,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Secret Chest": {
    "name": "Secret Chest",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4
  },
  "See Invisibility": {
    "name": "See Invisibility",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 2
  },
  "Seeming": {
    "name": "Seeming",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 5
  },
  "Sending": {
    "name": "Sending",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Unlimited",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 round",
    "concentration": false,
    "level": 3
  },
  "Sequester": {
    "name": "Sequester",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 7
  },
  "Shapechange": {
    "name": "Shapechange",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 9
  },
  "Shatter": {
    "name": "Shatter",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 8
          },
          "effectType": "thunder"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 8
              },
              "effectType": "thunder"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 2,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Shield": {
    "name": "Shield",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 round",
    "concentration": false,
    "level": 1
  },
  "Shield of Faith": {
    "name": "Shield of Faith",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Shillelagh": {
    "name": "Shillelagh",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 0
  },
  "Shocking Grasp": {
    "name": "Shocking Grasp",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 8
          },
          "effectType": "lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 8
              },
              "effectType": "lightning"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Silence": {
    "name": "Silence",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 2
  },
  "Silent Image": {
    "name": "Silent Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 15
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 1
  },
  "Simulacrum": {
    "name": "Simulacrum",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 7
  },
  "Sleep": {
    "name": "Sleep",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 5,
            "d": 8
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 5,
                "d": 8
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 1
  },
  "Sleet Storm": {
    "name": "Sleet Storm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 40
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3
  },
  "Slow": {
    "name": "Slow",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 40
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Spare the Dying": {
    "name": "Spare the Dying",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Speak with Animals": {
    "name": "Speak with Animals",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 1
  },
  "Speak with Dead": {
    "name": "Speak with Dead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 3
  },
  "Speak with Plants": {
    "name": "Speak with Plants",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 3
  },
  "Spider Climb": {
    "name": "Spider Climb",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Spike Growth": {
    "name": "Spike Growth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 20
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 2
  },
  "Spirit Guardians": {
    "name": "Spirit Guardians",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 3
  },
  "Spiritual Weapon": {
    "name": "Spiritual Weapon",
    "actionTime": "bonusAction",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 8
          },
          "effectType": "force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 1,
                "d": 8
              },
              "effectType": "force"
            }
          ]
        }
      }
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 2
  },
  "Stinking Cloud": {
    "name": "Stinking Cloud",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 20
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Stone Shape": {
    "name": "Stone Shape",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 4
  },
  "Stoneskin": {
    "name": "Stoneskin",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 4
  },
  "Storm of Vengeance": {
    "name": "Storm of Vengeance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Sight",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 6
          },
          "effectType": "thunder"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 6
              },
              "effectType": "thunder"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 360
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 9,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "no effect"
    }
  },
  "Suggestion": {
    "name": "Suggestion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 8 hours",
    "concentration": true,
    "level": 2,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Sunbeam": {
    "name": "Sunbeam",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 6,
            "d": 8
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 6,
                "d": 8
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "line",
      "size": 60
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 6,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Sunburst": {
    "name": "Sunburst",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 12,
            "d": 6
          },
          "effectType": "radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 12,
                "d": 6
              },
              "effectType": "radiant"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cylinder",
      "size": 60
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 8,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Symbol": {
    "name": "Symbol",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 10
    },
    "duration": "Until dispelled",
    "concentration": false,
    "level": 7
  },
  "Telekinesis": {
    "name": "Telekinesis",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 5
  },
  "Telepathic Bond": {
    "name": "Telepathic Bond",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 5
  },
  "Teleport": {
    "name": "Teleport",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 10
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 7
  },
  "Teleportation Circle": {
    "name": "Teleportation Circle",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "1 round",
    "concentration": false,
    "level": 5
  },
  "Thaumaturgy": {
    "name": "Thaumaturgy",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 minute",
    "concentration": false,
    "level": 0
  },
  "Thunderwave": {
    "name": "Thunderwave",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 2,
            "d": 8
          },
          "effectType": "thunder"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 8
              },
              "effectType": "thunder"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "cube",
      "size": 15
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 1,
    "dc": {
      "dcSaveType": "constitution",
      "dcSuccess": "half damage"
    }
  },
  "Time Stop": {
    "name": "Time Stop",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 9
  },
  "Tiny Hut": {
    "name": "Tiny Hut",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 3
  },
  "Tongues": {
    "name": "Tongues",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 3
  },
  "Transport via Plants": {
    "name": "Transport via Plants",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 round",
    "concentration": false,
    "level": 6
  },
  "Tree Stride": {
    "name": "Tree Stride",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 5
  },
  "True Polymorph": {
    "name": "True Polymorph",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 9
  },
  "True Resurrection": {
    "name": "True Resurrection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 9
  },
  "True Seeing": {
    "name": "True Seeing",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 6
  },
  "True Strike": {
    "name": "True Strike",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 1 round",
    "concentration": true,
    "level": 0
  },
  "Unseen Servant": {
    "name": "Unseen Servant",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 1
  },
  "Vampiric Touch": {
    "name": "Vampiric Touch",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 6
          },
          "effectType": "necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 4,
                "d": 6
              },
              "effectType": "necrotic"
            }
          ]
        }
      }
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3
  },
  "Vicious Mockery": {
    "name": "Vicious Mockery",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 1,
            "d": 4
          },
          "effectType": "psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 2,
                "d": 4
              },
              "effectType": "psychic"
            }
          ]
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Wall of Fire": {
    "name": "Wall of Fire",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 5,
            "d": 8
          },
          "effectType": "fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 5,
                "d": 8
              },
              "effectType": "fire"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "line",
      "size": 60
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 4,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Wall of Force": {
    "name": "Wall of Force",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 5
  },
  "Wall of Ice": {
    "name": "Wall of Ice",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 10,
            "d": 6
          },
          "effectType": "cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 12,
                "d": 6
              },
              "effectType": "cold"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 10
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 6,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Wall of Stone": {
    "name": "Wall of Stone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 5
  },
  "Wall of Thorns": {
    "name": "Wall of Thorns",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 7,
            "d": 8
          },
          "effectType": "piercing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 8,
                "d": 8
              },
              "effectType": "piercing"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "line",
      "size": 60
    },
    "duration": "Up to 10 minutes",
    "concentration": true,
    "level": 6,
    "dc": {
      "dcSaveType": "dexterity",
      "dcSuccess": "half damage"
    }
  },
  "Warding Bond": {
    "name": "Warding Bond",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 2
  },
  "Water Breathing": {
    "name": "Water Breathing",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "24 hours",
    "concentration": false,
    "level": 3
  },
  "Water Walk": {
    "name": "Water Walk",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "1 hour",
    "concentration": false,
    "level": 3
  },
  "Web": {
    "name": "Web",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "cube",
      "size": 20
    },
    "duration": "Up to 1 hour",
    "concentration": true,
    "level": 2
  },
  "Weird": {
    "name": "Weird",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 30
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 9,
    "dc": {
      "dcSaveType": "wisdom",
      "dcSuccess": "no effect"
    }
  },
  "Wind Walk": {
    "name": "Wind Walk",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "8 hours",
    "concentration": false,
    "level": 6
  },
  "Wind Wall": {
    "name": "Wind Wall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseEffect": [
        {
          "effect": {
            "n": 3,
            "d": 8
          },
          "effectType": "bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": [
            {
              "effect": {
                "n": 3,
                "d": 8
              },
              "effectType": "bludgeoning"
            }
          ]
        }
      }
    },
    "area_of_effect": {
      "type": "line",
      "size": 50
    },
    "duration": "Up to 1 minute",
    "concentration": true,
    "level": 3,
    "dc": {
      "dcSaveType": "strength",
      "dcSuccess": "half damage"
    }
  },
  "Wish": {
    "name": "Wish",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 9
  },
  "Word of Recall": {
    "name": "Word of Recall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "5 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 5
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 6
  },
  "Zone of Truth": {
    "name": "Zone of Truth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseEffect": [],
      "scaling": false
    },
    "area_of_effect": {
      "type": "sphere",
      "size": 15
    },
    "duration": "10 minutes",
    "concentration": false,
    "level": 2
  }
}