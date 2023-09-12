import Swordsman from '../Swordsman';

describe('Swordsman', () => {
  let swordsman;

  beforeEach(() => {
    swordsman = new Swordsman('Arthur');
  });

  it('should create a Swordsman character with the correct name and type', () => {
    expect(swordsman.name).toEqual('Arthur');
    expect(swordsman.type).toEqual('Swordsman');
  });

  it('should have default health, level, attack, and defence values', () => {
    expect(swordsman.health).toEqual(100);
    expect(swordsman.level).toEqual(1);
    expect(swordsman.attack).toEqual(40);
    expect(swordsman.defence).toEqual(10);
  });

  it('should increase level and reset health when levelUp() is called', () => {
    const initialHealth = swordsman.health;
    swordsman.levelUp();

    expect(swordsman.level).toEqual(2);
    expect(swordsman.health).toEqual(100);
    expect(swordsman.attack).toBeGreaterThan(40);
    expect(swordsman.defence).toBeGreaterThan(10);
    expect(swordsman.health).toBeGreaterThan(initialHealth);
  });

  it('should throw an error when trying to levelUp a character with 0 health', () => {
    swordsman.health = 0;

    expect(() => swordsman.levelUp()).toThrow();
    expect(() => swordsman.levelUp()).toThrowError('Нельзя повысить level умершего');
  });

  it('should deduct the correct amount of health points when damage() is called', () => {
    const damageAmount = 30;
    const expectedHealth = swordsman.health - damageAmount;
    swordsman.damage(damageAmount);

    expect(swordsman.health).toEqual(expectedHealth);
  });
});
