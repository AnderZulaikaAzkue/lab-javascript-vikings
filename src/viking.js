// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;                                                // remove "damage" from health property
    }
}

// Viking
  class Viking extends Soldier {                                              // "to link" the Soldier father with Viking    
     constructor(name, health, strength) {
      super(health, strength);
      this.name = name                                                       //insert the new argument "name" for viking
     }  
  
     receiveDamage(damage){
      this.health -= damage; 
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;                      // if 0, is dead
      }
     }
 
     battleCry(){
      return "Odin Owns You All!"
     }
}

 


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`;
        } else {
          return `A Saxon has died in combat`;                       // if 0, is dead
        }
    
      }
    }

// War
class War {}
