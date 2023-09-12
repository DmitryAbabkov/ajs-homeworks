import Undead from '../Undead';

describe('Undead', () => {
  let undead;

  beforeEach(() => {
    undead = new Undead('Dracula');
  });

  it('should create an Undead character with the correct name and type', () => {
    expect(undead.name).toEqual('Dracula');
    expect(undead.type).toEqual('Undead');
  });

  it('should have default health, level, attack, and defence values', () => {
    expect(undead.health).toEqual(100);
    expect(undead.level).toEqual(1);
    expect(undead.attack).toEqual(25);
    expect(undead.defence).toEqual(25);
  });

  it('should increase level and reset health when levelUp() is called', () => {
    const initialHealth = undead.health;
    undead.levelUp();

    expect(undead.level).toEqual(2);
    expect(undead.health).toEqual(100);
    expect(undead.attack).toBeGreaterThan(25);
    expect(undead.defence).toBeGreaterThan(25);
    expect(undead.health).toBeGreaterThan(initialHealth);
  });

  it('should throw an error when trying to levelUp a character with 0 health', () => {
    undead.health = 0;

    expect(() => undead.levelUp()).toThrow();
    expect(() => undead.levelUp()).toThrowError('Нельзя повысить level умершего');
  });

  it('should deduct the correct amount of health points when damage() is called', () => {
    const damageAmount = 30;
    const expectedHealth = undead.health - damageAmount;
    undead.damage(damageAmount);

    expect(undead.health).toEqual(expectedHealth);
  });
});
