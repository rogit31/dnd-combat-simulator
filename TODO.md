# TODO: D&D 5e Combat Simulator

## 🚨 Critical/High Priority

### Data Modeling
- [ ] **Complete types to have an extensible, customizable system to base our simulations off of**
    - [ ] Our types need to fit a shape that we can: 
      - work with easily
      - extensible 
      - customizable
      - Fits with the dnd 5e api
      - informative
      - documented
    - [ ] How do characters 'decide' what action they take? We used to have a static priority list, which works ok.
    - Is there a better way, maybe by inferring what action does the most damage or healing? 

### Core Combat Mechanics
- [ ] **Implement remaining action types**
    - [ ] "spell" action type (currently only attack/heal)
    - [ ] "item" action type
    - [ ] "feature" action type
- [ ] **Add missing targeting behaviors**
    - [ ] "highestHP" targeting
    - [ ] "highestLVL" / "lowestLVL" targeting
    - [ ] "highestDPM" targeting
- [ ] **Bonus Action system**
    - [ ] Implement bonus action usage in combat loop
    - [ ] Add bonus action prioritization
- [ ] **Legendary Actions**
    - [ ] Add legendary action support for monsters
    - [ ] Implement legendary action timing
- [ ] **Reactions**
    - [ ] Opportunity attacks
    - [ ] Spell reactions (Shield, Counterspell, etc.)
    - [ ] Reaction timing and triggers

### Combat Resolution Bugs/Improvements
- [ ] **Fix action type inference**
    - Current code has `action.actionType` but type system shows different field names
    - Reconcile `Action` interface with actual usage
- [ ] **Improve attack roll system**
    - [ ] Add critical hit mechanics (nat 20)
    - [ ] Add critical failure mechanics (nat 1)
    - [ ] Implement advantage/disadvantage
- [ ] **Enhanced spell save system**
    - [ ] Add all saving throw types
    - [ ] Implement spell save DC calculation
    - [ ] Add spell resistance
- [ ] **Damage type interactions**
    - [ ] Resistance/immunity/vulnerability
    - [ ] Damage type effectiveness

## 🎯 Medium Priority

### AI & Strategy Improvements
- [ ] **Smarter action selection**
    - [ ] Consider target AC when choosing attacks
    - [ ] Factor in damage potential vs resource cost
    - [ ] Implement basic spell conservation
- [ ] **Formation & positioning**
    - [ ] Add basic range/positioning logic
    - [ ] Implement area of effect targeting
    - [ ] Tank/DPS/Healer role recognition
- [ ] **Condition-based decisions**
    - [ ] React to status effects appropriately
    - [ ] Prioritize healing when low HP
    - [ ] Use buffs/debuffs strategically

### Advanced Mechanics
- [ ] **Concentration mechanics**
    - [ ] Concentration saves on damage
    - [ ] Only one concentration spell at a time
    - [ ] Concentration break conditions
- [ ] **Area of Effect spells**
    - [ ] Implement AOE targeting
    - [ ] Multiple target resolution
    - [ ] Friendly fire considerations
- [ ] **Complex conditions**
    - [ ] Implement all condition effects on combat
    - [ ] Condition interaction systems
    - [ ] Duration tracking and removal
- [ ] **Death saving throws**
    - [ ] Implement stabilization mechanics
    - [ ] Add unconscious/dying states
    - [ ] Healing word vs full heal optimization

### Resource Management
- [ ] **Short/Long rest mechanics**
    - [ ] Resource recovery between encounters
    - [ ] Hit dice healing
    - [ ] Spell slot recovery
- [ ] **Spell slot upcasting**
    - [ ] Damage scaling with spell level
    - [ ] Smart upcasting decisions
    - [ ] Warlock pact slot mechanics
- [ ] **Class-specific resources**
    - [ ] Rage (Barbarian)
    - [ ] Ki points (Monk)
    - [ ] Sorcery points (Sorcerer)
    - [ ] Bardic inspiration

## 📊 Analytics & Reporting

### Statistical Improvements
- [ ] **Enhanced metrics**
    - [ ] Average damage per round
    - [ ] Resource utilization rates
    - [ ] Action economy efficiency
    - [ ] Critical hit/miss rates
- [ ] **Encounter analysis**
    - [ ] Difficulty spike detection
    - [ ] Snowball effect measurement
    - [ ] Comeback potential analysis
- [ ] **Comparative studies**
    - [ ] Party composition effectiveness
    - [ ] Equipment impact analysis
    - [ ] Level scaling validation

### Logging & Debug
- [ ] **Configurable log levels**
    - [ ] Detailed/summary modes
    - [ ] JSON output option
    - [ ] Combat replay system
- [ ] **Performance monitoring**
    - [ ] Simulation speed optimization
    - [ ] Memory usage tracking
    - [ ] Battle timeout adjustment

## 🏗️ Architecture & Code Quality

### Type System Improvements
- [ ] **Reconcile type inconsistencies**
    - [ ] Action interface vs implementation
    - [ ] Character constructor args vs interface
    - [ ] Resource system type safety
- [ ] **Add validation**
    - [ ] Character creation validation
    - [ ] Action constraint validation
    - [ ] Combat state validation
- [ ] **Improve error handling**
    - [ ] Graceful failure modes
    - [ ] Better error messages
    - [ ] Recovery mechanisms

### Code Organization
- [ ] **Split large files**
    - [ ] Separate combat logic from simulation
    - [ ] Extract AI decision making
    - [ ] Create utility modules
- [ ] **Add documentation**
    - [ ] JSDoc comments
    - [ ] Usage examples
    - [ ] API documentation
- [ ] **Testing infrastructure**
    - [ ] Unit tests for core mechanics
    - [ ] Integration tests for combat flows
    - [ ] Performance benchmarks

## 🎮 User Experience

### Input/Output
- [ ] **Character import/export**
    - [ ] JSON character format
    - [ ] D&D Beyond integration
    - [ ] Roll20 compatibility
- [ ] **Encounter builder**
    - [ ] Drag-and-drop interface
    - [ ] Preset encounter library
    - [ ] Custom monster creation
- [ ] **Results visualization**
    - [ ] Charts and graphs
    - [ ] Combat timeline
    - [ ] Statistical breakdowns

### Configuration
- [ ] **Simulation settings**
    - [ ] House rules toggle
    - [ ] Variant rules support
    - [ ] Custom mechanics
- [ ] **Difficulty adjustment**
    - [ ] Dynamic encounter scaling
    - [ ] Milestone leveling impact
    - [ ] Magic item integration

## 🚀 Future Features (Long-term)

### Frontend Development
- [ ] **Web application**
    - [ ] React-based UI
    - [ ] Real-time simulation
    - [ ] Mobile responsiveness
- [ ] **Character builder**
    - [ ] Full D&D 5e character creation
    - [ ] Multiclassing support
    - [ ] Equipment management
- [ ] **Monster builder**
    - [ ] Custom creature creation
    - [ ] Balanced CR calculation
    - [ ] Art/token integration

### Advanced Simulation
- [ ] **Multi-encounter days**
    - [ ] Resource attrition modeling
    - [ ] Rest timing optimization
    - [ ] Adventure day simulation
- [ ] **Environmental effects**
    - [ ] Terrain impact
    - [ ] Weather conditions
    - [ ] Hazards and traps
- [ ] **Social encounters**
    - [ ] Skill challenge simulation
    - [ ] Roleplay scenario modeling
    - [ ] Investigation mechanics

### Integration & APIs
- [ ] **Third-party integration**
    - [ ] VTT platform support
    - [ ] Character sheet imports
    - [ ] Streaming/content creation tools
- [ ] **AI enhancement**
    - [ ] Machine learning for better tactics
    - [ ] Natural language encounter descriptions
    - [ ] Adaptive difficulty systems

---

## 🏆 Immediate Next Steps (This Sprint)

1. **Fix action type system** - Reconcile interface with implementation
2. **Add critical hit mechanics** - Essential for realistic combat
3. **Implement bonus actions** - Required for accurate action economy
4. **Add more targeting options** - Improve AI decision making
5. **Create basic test suite** - Ensure code quality as we expand

## 📝 Notes

- Priority should be on making the core simulation as accurate as possible to real D&D 5e
- Focus on features that have the biggest impact on statistical accuracy
- Consider which features are essential vs nice-to-have for MVP
- Keep performance in mind - simulations need to run quickly for good UX