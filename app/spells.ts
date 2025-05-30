export const spells = {
  "Acid Arrow": {
    "name": "Acid Arrow",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 4
            }
          ],
          "damageType": "Acid"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 5,
                "d": 4
              }
            ],
            "damageType": "Acid"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Acid Splash": {
    "name": "Acid Splash",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 6
            }
          ],
          "damageType": "Acid"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 6
              }
            ],
            "damageType": "Acid"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Aid": {
    "name": "Aid",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Alarm": {
    "name": "Alarm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Alter Self": {
    "name": "Alter Self",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Animal Friendship": {
    "name": "Animal Friendship",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Animal Messenger": {
    "name": "Animal Messenger",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Animal Shapes": {
    "name": "Animal Shapes",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Animate Dead": {
    "name": "Animate Dead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Animate Objects": {
    "name": "Animate Objects",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Antilife Shell": {
    "name": "Antilife Shell",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Antimagic Field": {
    "name": "Antimagic Field",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Antipathy/Sympathy": {
    "name": "Antipathy/Sympathy",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Arcane Eye": {
    "name": "Arcane Eye",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Arcane Hand": {
    "name": "Arcane Hand",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Arcane Lock": {
    "name": "Arcane Lock",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Arcane Sword": {
    "name": "Arcane Sword",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 10
            }
          ],
          "damageType": "Force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 10
              }
            ],
            "damageType": "Force"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Arcanist's Magic Aura": {
    "name": "Arcanist's Magic Aura",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Astral Projection": {
    "name": "Astral Projection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Augury": {
    "name": "Augury",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Awaken": {
    "name": "Awaken",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Bane": {
    "name": "Bane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Banishment": {
    "name": "Banishment",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Barkskin": {
    "name": "Barkskin",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Beacon of Hope": {
    "name": "Beacon of Hope",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Bestow Curse": {
    "name": "Bestow Curse",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Black Tentacles": {
    "name": "Black Tentacles",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 6
            }
          ],
          "damageType": "Bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 6
              }
            ],
            "damageType": "Bludgeoning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Blade Barrier": {
    "name": "Blade Barrier",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 6,
              "d": 10
            }
          ],
          "damageType": "Slashing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 6,
                "d": 10
              }
            ],
            "damageType": "Slashing"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Bless": {
    "name": "Bless",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Blight": {
    "name": "Blight",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 8,
              "d": 8
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 9,
                "d": 8
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Blindness/Deafness": {
    "name": "Blindness/Deafness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Blink": {
    "name": "Blink",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Blur": {
    "name": "Blur",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Branding Smite": {
    "name": "Branding Smite",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 6
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 6
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Burning Hands": {
    "name": "Burning Hands",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Call Lightning": {
    "name": "Call Lightning",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 10
            }
          ],
          "damageType": "Lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 10
              }
            ],
            "damageType": "Lightning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Calm Emotions": {
    "name": "Calm Emotions",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Chain Lightning": {
    "name": "Chain Lightning",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 10,
              "d": 8
            }
          ],
          "damageType": "Lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 10,
                "d": 8
              }
            ],
            "damageType": "Lightning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Charm Person": {
    "name": "Charm Person",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Chill Touch": {
    "name": "Chill Touch",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 8
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
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
      "baseDamage": [
        {
          "damage": [
            {
              "n": 8,
              "d": 6
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 10,
                "d": 6
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Clairvoyance": {
    "name": "Clairvoyance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "1 mile",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Clone": {
    "name": "Clone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Cloudkill": {
    "name": "Cloudkill",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 5,
              "d": 8
            }
          ],
          "damageType": "Poison"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 6,
                "d": 8
              }
            ],
            "damageType": "Poison"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Color Spray": {
    "name": "Color Spray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Command": {
    "name": "Command",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Commune": {
    "name": "Commune",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Commune With Nature": {
    "name": "Commune With Nature",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Comprehend Languages": {
    "name": "Comprehend Languages",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Compulsion": {
    "name": "Compulsion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Cone of Cold": {
    "name": "Cone of Cold",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 8,
              "d": 8
            }
          ],
          "damageType": "Cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 9,
                "d": 8
              }
            ],
            "damageType": "Cold"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Confusion": {
    "name": "Confusion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Conjure Animals": {
    "name": "Conjure Animals",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Conjure Celestial": {
    "name": "Conjure Celestial",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Conjure Elemental": {
    "name": "Conjure Elemental",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Conjure Fey": {
    "name": "Conjure Fey",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Conjure Minor Elementals": {
    "name": "Conjure Minor Elementals",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Conjure Woodland Beings": {
    "name": "Conjure Woodland Beings",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Contact Other Plane": {
    "name": "Contact Other Plane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Contagion": {
    "name": "Contagion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Contingency": {
    "name": "Contingency",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Continual Flame": {
    "name": "Continual Flame",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Control Water": {
    "name": "Control Water",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 8
            }
          ],
          "damageType": "Bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Bludgeoning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Control Weather": {
    "name": "Control Weather",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Counterspell": {
    "name": "Counterspell",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Create Food and Water": {
    "name": "Create Food and Water",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Create or Destroy Water": {
    "name": "Create or Destroy Water",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Create Undead": {
    "name": "Create Undead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Creation": {
    "name": "Creation",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Cure Wounds": {
    "name": "Cure Wounds",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dancing Lights": {
    "name": "Dancing Lights",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Darkness": {
    "name": "Darkness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Darkvision": {
    "name": "Darkvision",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Daylight": {
    "name": "Daylight",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Death Ward": {
    "name": "Death Ward",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Delayed Blast Fireball": {
    "name": "Delayed Blast Fireball",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 12,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 13,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Demiplane": {
    "name": "Demiplane",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Detect Evil and Good": {
    "name": "Detect Evil and Good",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Detect Magic": {
    "name": "Detect Magic",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Detect Poison and Disease": {
    "name": "Detect Poison and Disease",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Detect Thoughts": {
    "name": "Detect Thoughts",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dimension Door": {
    "name": "Dimension Door",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "500 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 6
            }
          ],
          "damageType": "Force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 6
              }
            ],
            "damageType": "Force"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Disguise Self": {
    "name": "Disguise Self",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Disintegrate": {
    "name": "Disintegrate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 10,
              "d": 6
            },
            {
              "n": 0,
              "d": 0,
              "flatBonus": 40
            }
          ],
          "damageType": "Force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 10,
                "d": 6
              },
              {
                "n": 0,
                "d": 0,
                "flatBonus": 40
              }
            ],
            "damageType": "Force"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dispel Evil and Good": {
    "name": "Dispel Evil and Good",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dispel Magic": {
    "name": "Dispel Magic",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Divination": {
    "name": "Divination",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Divine Favor": {
    "name": "Divine Favor",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 4
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 1,
                "d": 4
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Divine Word": {
    "name": "Divine Word",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dominate Beast": {
    "name": "Dominate Beast",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dominate Monster": {
    "name": "Dominate Monster",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dominate Person": {
    "name": "Dominate Person",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Dream": {
    "name": "Dream",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Special",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 6
            }
          ],
          "damageType": "Psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 6
              }
            ],
            "damageType": "Psychic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Druidcraft": {
    "name": "Druidcraft",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Eldritch Blast": {
    "name": "Eldritch Blast",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 10
            }
          ],
          "damageType": "Force"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 1,
                "d": 10
              }
            ],
            "damageType": "Force"
          }
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Enlarge/Reduce": {
    "name": "Enlarge/Reduce",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Entangle": {
    "name": "Entangle",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Enthrall": {
    "name": "Enthrall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Etherealness": {
    "name": "Etherealness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Expeditious Retreat": {
    "name": "Expeditious Retreat",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Eyebite": {
    "name": "Eyebite",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fabricate": {
    "name": "Fabricate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Faerie Fire": {
    "name": "Faerie Fire",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Faithful Hound": {
    "name": "Faithful Hound",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 8
            }
          ],
          "damageType": "Piercing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 8
              }
            ],
            "damageType": "Piercing"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "False Life": {
    "name": "False Life",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fear": {
    "name": "Fear",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Feather Fall": {
    "name": "Feather Fall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Feeblemind": {
    "name": "Feeblemind",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 6
            }
          ],
          "damageType": "Psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 6
              }
            ],
            "damageType": "Psychic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Find Familiar": {
    "name": "Find Familiar",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Find Steed": {
    "name": "Find Steed",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Find the Path": {
    "name": "Find the Path",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Find Traps": {
    "name": "Find Traps",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Finger of Death": {
    "name": "Finger of Death",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 7,
              "d": 8
            },
            {
              "n": 0,
              "d": 0,
              "flatBonus": 30
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 7,
                "d": 8
              },
              {
                "n": 0,
                "d": 0,
                "flatBonus": 30
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fire Bolt": {
    "name": "Fire Bolt",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 10
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 10
              }
            ],
            "damageType": "Fire"
          }
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
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 8
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fire Storm": {
    "name": "Fire Storm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 7,
              "d": 10
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 7,
                "d": 10
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fireball": {
    "name": "Fireball",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 8,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 9,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Flame Blade": {
    "name": "Flame Blade",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Flame Strike": {
    "name": "Flame Strike",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 6
            },
            {
              "n": 4,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 6
              },
              {
                "n": 5,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Flaming Sphere": {
    "name": "Flaming Sphere",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Flesh to Stone": {
    "name": "Flesh to Stone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Floating Disk": {
    "name": "Floating Disk",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fly": {
    "name": "Fly",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Fog Cloud": {
    "name": "Fog Cloud",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Forbiddance": {
    "name": "Forbiddance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Forcecage": {
    "name": "Forcecage",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "100 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Foresight": {
    "name": "Foresight",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Freedom of Movement": {
    "name": "Freedom of Movement",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Freezing Sphere": {
    "name": "Freezing Sphere",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 10,
              "d": 6
            }
          ],
          "damageType": "Cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 10,
                "d": 6
              }
            ],
            "damageType": "Cold"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Gaseous Form": {
    "name": "Gaseous Form",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Gate": {
    "name": "Gate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Geas": {
    "name": "Geas",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Gentle Repose": {
    "name": "Gentle Repose",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Giant Insect": {
    "name": "Giant Insect",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Glibness": {
    "name": "Glibness",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Globe of Invulnerability": {
    "name": "Globe of Invulnerability",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Glyph of Warding": {
    "name": "Glyph of Warding",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Goodberry": {
    "name": "Goodberry",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Grease": {
    "name": "Grease",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Greater Invisibility": {
    "name": "Greater Invisibility",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Greater Restoration": {
    "name": "Greater Restoration",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Guardian of Faith": {
    "name": "Guardian of Faith",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 0,
              "d": 0,
              "flatBonus": 20
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 0,
                "d": 0,
                "flatBonus": 20
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Guards and Wards": {
    "name": "Guards and Wards",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Guidance": {
    "name": "Guidance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Guiding Bolt": {
    "name": "Guiding Bolt",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 6
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 5,
                "d": 6
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Gust of Wind": {
    "name": "Gust of Wind",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hallow": {
    "name": "Hallow",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hallucinatory Terrain": {
    "name": "Hallucinatory Terrain",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Harm": {
    "name": "Harm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 14,
              "d": 6
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 14,
                "d": 6
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Haste": {
    "name": "Haste",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Heal": {
    "name": "Heal",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Healing Word": {
    "name": "Healing Word",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Heat Metal": {
    "name": "Heat Metal",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 8
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 8
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hellish Rebuke": {
    "name": "Hellish Rebuke",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 10
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 10
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Heroes' Feast": {
    "name": "Heroes' Feast",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Heroism": {
    "name": "Heroism",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hideous Laughter": {
    "name": "Hideous Laughter",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hold Monster": {
    "name": "Hold Monster",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hold Person": {
    "name": "Hold Person",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Holy Aura": {
    "name": "Holy Aura",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hunter's Mark": {
    "name": "Hunter's Mark",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Hypnotic Pattern": {
    "name": "Hypnotic Pattern",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Ice Storm": {
    "name": "Ice Storm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 8
            },
            {
              "n": 4,
              "d": 6
            }
          ],
          "damageType": "Bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 8
              },
              {
                "n": 4,
                "d": 6
              }
            ],
            "damageType": "Bludgeoning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Identify": {
    "name": "Identify",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Illusory Script": {
    "name": "Illusory Script",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Imprisonment": {
    "name": "Imprisonment",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Incendiary Cloud": {
    "name": "Incendiary Cloud",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 10,
              "d": 8
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 10,
                "d": 8
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Inflict Wounds": {
    "name": "Inflict Wounds",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 10
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 10
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Insect Plague": {
    "name": "Insect Plague",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 10
            }
          ],
          "damageType": "Piercing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 5,
                "d": 10
              }
            ],
            "damageType": "Piercing"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Instant Summons": {
    "name": "Instant Summons",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Invisibility": {
    "name": "Invisibility",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Irresistible Dance": {
    "name": "Irresistible Dance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Jump": {
    "name": "Jump",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Knock": {
    "name": "Knock",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Legend Lore": {
    "name": "Legend Lore",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Lesser Restoration": {
    "name": "Lesser Restoration",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Levitate": {
    "name": "Levitate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Light": {
    "name": "Light",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Lightning Bolt": {
    "name": "Lightning Bolt",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 8,
              "d": 6
            }
          ],
          "damageType": "Lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 9,
                "d": 6
              }
            ],
            "damageType": "Lightning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Locate Animals or Plants": {
    "name": "Locate Animals or Plants",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Locate Creature": {
    "name": "Locate Creature",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Locate Object": {
    "name": "Locate Object",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Longstrider": {
    "name": "Longstrider",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mage Armor": {
    "name": "Mage Armor",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mage Hand": {
    "name": "Mage Hand",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Magic Jar": {
    "name": "Magic Jar",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Magic Missile": {
    "name": "Magic Missile",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 4
            },
            {
              "n": 0,
              "d": 0,
              "flatBonus": 1
            }
          ],
          "damageType": "Force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 1,
                "d": 4
              },
              {
                "n": 0,
                "d": 0,
                "flatBonus": 1
              }
            ],
            "damageType": "Force"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Magic Mouth": {
    "name": "Magic Mouth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Magic Weapon": {
    "name": "Magic Weapon",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Magnificent Mansion": {
    "name": "Magnificent Mansion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "300 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Major Image": {
    "name": "Major Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mass Cure Wounds": {
    "name": "Mass Cure Wounds",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mass Heal": {
    "name": "Mass Heal",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mass Healing Word": {
    "name": "Mass Healing Word",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mass Suggestion": {
    "name": "Mass Suggestion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Maze": {
    "name": "Maze",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Meld Into Stone": {
    "name": "Meld Into Stone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mending": {
    "name": "Mending",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
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
      "baseDamage": [
        {
          "damage": [
            {
              "n": 20,
              "d": 6
            },
            {
              "n": 20,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 20,
                "d": 6
              },
              {
                "n": 20,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mind Blank": {
    "name": "Mind Blank",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Minor Illusion": {
    "name": "Minor Illusion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mirror Image": {
    "name": "Mirror Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Mislead": {
    "name": "Mislead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Misty Step": {
    "name": "Misty Step",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Modify Memory": {
    "name": "Modify Memory",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Moonbeam": {
    "name": "Moonbeam",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 10
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 10
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Move Earth": {
    "name": "Move Earth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Nondetection": {
    "name": "Nondetection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Pass Without Trace": {
    "name": "Pass Without Trace",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Passwall": {
    "name": "Passwall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Phantasmal Killer": {
    "name": "Phantasmal Killer",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 4,
              "d": 10
            }
          ],
          "damageType": "Psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 10
              }
            ],
            "damageType": "Psychic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Phantom Steed": {
    "name": "Phantom Steed",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Planar Ally": {
    "name": "Planar Ally",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Planar Binding": {
    "name": "Planar Binding",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Plane Shift": {
    "name": "Plane Shift",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Plant Growth": {
    "name": "Plant Growth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Poison Spray": {
    "name": "Poison Spray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 12
            }
          ],
          "damageType": "Poison"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 12
              }
            ],
            "damageType": "Poison"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Polymorph": {
    "name": "Polymorph",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Power Word Kill": {
    "name": "Power Word Kill",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Power Word Stun": {
    "name": "Power Word Stun",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Prayer of Healing": {
    "name": "Prayer of Healing",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Prestidigitation": {
    "name": "Prestidigitation",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
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
      "baseDamage": [
        {
          "damage": [
            {
              "n": 10,
              "d": 6
            }
          ],
          "damageType": "unknown"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 10,
                "d": 6
              }
            ],
            "damageType": "unknown"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Prismatic Wall": {
    "name": "Prismatic Wall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Private Sanctum": {
    "name": "Private Sanctum",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Produce Flame": {
    "name": "Produce Flame",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 8
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Project Image": {
    "name": "Project Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "500 miles",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Protection From Energy": {
    "name": "Protection From Energy",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Protection from Evil and Good": {
    "name": "Protection from Evil and Good",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Protection from Poison": {
    "name": "Protection from Poison",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Purify Food and Drink": {
    "name": "Purify Food and Drink",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Raise Dead": {
    "name": "Raise Dead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Ray of Enfeeblement": {
    "name": "Ray of Enfeeblement",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Ray of Frost": {
    "name": "Ray of Frost",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 8
            }
          ],
          "damageType": "Cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Cold"
          }
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Reincarnate": {
    "name": "Reincarnate",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Remove Curse": {
    "name": "Remove Curse",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Resilient Sphere": {
    "name": "Resilient Sphere",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Resistance": {
    "name": "Resistance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Resurrection": {
    "name": "Resurrection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Reverse Gravity": {
    "name": "Reverse Gravity",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "100 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Revivify": {
    "name": "Revivify",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Rope Trick": {
    "name": "Rope Trick",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sacred Flame": {
    "name": "Sacred Flame",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 8
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sanctuary": {
    "name": "Sanctuary",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Scorching Ray": {
    "name": "Scorching Ray",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 6
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 6
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Scrying": {
    "name": "Scrying",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Secret Chest": {
    "name": "Secret Chest",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "See Invisibility": {
    "name": "See Invisibility",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Seeming": {
    "name": "Seeming",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sending": {
    "name": "Sending",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Unlimited",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sequester": {
    "name": "Sequester",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Shapechange": {
    "name": "Shapechange",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Shatter": {
    "name": "Shatter",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 8
            }
          ],
          "damageType": "Thunder"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 8
              }
            ],
            "damageType": "Thunder"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Shield": {
    "name": "Shield",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Shield of Faith": {
    "name": "Shield of Faith",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Shillelagh": {
    "name": "Shillelagh",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
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
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 8
            }
          ],
          "damageType": "Lightning"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 8
              }
            ],
            "damageType": "Lightning"
          }
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Silent Image": {
    "name": "Silent Image",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Simulacrum": {
    "name": "Simulacrum",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sleep": {
    "name": "Sleep",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 5,
              "d": 8
            }
          ],
          "damageType": "unknown"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 5,
                "d": 8
              }
            ],
            "damageType": "unknown"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sleet Storm": {
    "name": "Sleet Storm",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Slow": {
    "name": "Slow",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Spare the Dying": {
    "name": "Spare the Dying",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
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
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Speak with Dead": {
    "name": "Speak with Dead",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Speak with Plants": {
    "name": "Speak with Plants",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Spider Climb": {
    "name": "Spider Climb",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Spike Growth": {
    "name": "Spike Growth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Spirit Guardians": {
    "name": "Spirit Guardians",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Spiritual Weapon": {
    "name": "Spiritual Weapon",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 8
            }
          ],
          "damageType": "Force"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 1,
                "d": 8
              }
            ],
            "damageType": "Force"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Stinking Cloud": {
    "name": "Stinking Cloud",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "90 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Stone Shape": {
    "name": "Stone Shape",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Stoneskin": {
    "name": "Stoneskin",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Storm of Vengeance": {
    "name": "Storm of Vengeance",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Sight",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 6
            }
          ],
          "damageType": "Thunder"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 6
              }
            ],
            "damageType": "Thunder"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Suggestion": {
    "name": "Suggestion",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sunbeam": {
    "name": "Sunbeam",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 6,
              "d": 8
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 6,
                "d": 8
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Sunburst": {
    "name": "Sunburst",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "150 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 12,
              "d": 6
            }
          ],
          "damageType": "Radiant"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 12,
                "d": 6
              }
            ],
            "damageType": "Radiant"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Symbol": {
    "name": "Symbol",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Telekinesis": {
    "name": "Telekinesis",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Telepathic Bond": {
    "name": "Telepathic Bond",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Teleport": {
    "name": "Teleport",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Teleportation Circle": {
    "name": "Teleportation Circle",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Thaumaturgy": {
    "name": "Thaumaturgy",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
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
      "baseDamage": [
        {
          "damage": [
            {
              "n": 2,
              "d": 8
            }
          ],
          "damageType": "Thunder"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 8
              }
            ],
            "damageType": "Thunder"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Time Stop": {
    "name": "Time Stop",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Tiny Hut": {
    "name": "Tiny Hut",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Tongues": {
    "name": "Tongues",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Transport via Plants": {
    "name": "Transport via Plants",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "10 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Tree Stride": {
    "name": "Tree Stride",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "True Polymorph": {
    "name": "True Polymorph",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "True Resurrection": {
    "name": "True Resurrection",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "True Seeing": {
    "name": "True Seeing",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "True Strike": {
    "name": "True Strike",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Unseen Servant": {
    "name": "Unseen Servant",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Vampiric Touch": {
    "name": "Vampiric Touch",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 6
            }
          ],
          "damageType": "Necrotic"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 4,
                "d": 6
              }
            ],
            "damageType": "Necrotic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Vicious Mockery": {
    "name": "Vicious Mockery",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 1,
              "d": 4
            }
          ],
          "damageType": "Psychic"
        }
      ],
      "scaling": {
        "scalingOrigin": "characterLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 2,
                "d": 4
              }
            ],
            "damageType": "Psychic"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wall of Fire": {
    "name": "Wall of Fire",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 5,
              "d": 8
            }
          ],
          "damageType": "Fire"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 5,
                "d": 8
              }
            ],
            "damageType": "Fire"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wall of Force": {
    "name": "Wall of Force",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wall of Ice": {
    "name": "Wall of Ice",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 10,
              "d": 6
            }
          ],
          "damageType": "Cold"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 12,
                "d": 6
              }
            ],
            "damageType": "Cold"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wall of Stone": {
    "name": "Wall of Stone",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wall of Thorns": {
    "name": "Wall of Thorns",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 7,
              "d": 8
            }
          ],
          "damageType": "Piercing"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 8,
                "d": 8
              }
            ],
            "damageType": "Piercing"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Warding Bond": {
    "name": "Warding Bond",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Touch",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Water Breathing": {
    "name": "Water Breathing",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Water Walk": {
    "name": "Water Walk",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Web": {
    "name": "Web",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Weird": {
    "name": "Weird",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wind Walk": {
    "name": "Wind Walk",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "30 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wind Wall": {
    "name": "Wind Wall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "120 feet",
    "damageRoll": {
      "baseDamage": [
        {
          "damage": [
            {
              "n": 3,
              "d": 8
            }
          ],
          "damageType": "Bludgeoning"
        }
      ],
      "scaling": {
        "scalingOrigin": "spellSlotLevel",
        "scalingValue": {
          "base": {
            "damage": [
              {
                "n": 3,
                "d": 8
              }
            ],
            "damageType": "Bludgeoning"
          }
        }
      }
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Wish": {
    "name": "Wish",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "Self",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Word of Recall": {
    "name": "Word of Recall",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "5 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  },
  "Zone of Truth": {
    "name": "Zone of Truth",
    "actionTime": "action",
    "actionType": "spell",
    "targetingBehaviour": "lowestHP",
    "range": "60 feet",
    "damageRoll": {
      "baseDamage": [],
      "scaling": false
    },
    "duration": "Instantaneous",
    "concentration": false,
    "level": 0
  }
} as const;