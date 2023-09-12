import Magician from "../Magician";

describe('Magician', () => {
    it('should create magician character with correct name and type', () => {
      const magician = new Magician('Merlin');
      
      expect(magician.name).toEqual('Merlin');
      expect(magician.type).toEqual('Magician');
      expect(magician.health).toEqual(100);
      expect(magician.level).toEqual(1);
      expect(magician.attack).toEqual(10);
      expect(magician.defence).toEqual(40);
    });
  
    it('should increase level and reset health when levelUp is called', () => {
      const magician = new Magician('Merlin');
      magician.health = 50;
      magician.levelUp();
  
      expect(magician.level).toEqual(2);
      expect(magician.attack).toEqual(12);
      expect(magician.defence).toEqual(48);
      expect(magician.health).toEqual(100);
    });
  
    it('should throw an error when trying to levelUp a character with 0 health', () => {
      const magician = new Magician('Merlin');
      magician.health = 0;
  
      expect(() => magician.levelUp()).toThrow('Нельзя повысить level умершего');
    });
  
    it('should deduct correct amount of health points when damage is called', () => {
      const magician = new Magician('Merlin');
      magician.damage(30);
  
      expect(magician.health).toEqual(82);
    });
  });
  