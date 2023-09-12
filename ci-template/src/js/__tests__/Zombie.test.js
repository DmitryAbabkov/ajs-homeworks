import Zombie from '../Zombie';

describe('Zombie', () => {
  let zombie;

  beforeEach(() => {
    zombie = new Zombie('Brain Eater');
  });

  it('should create a Zombie character with the correct name and type', () => {
    expect(zombie.name).toEqual('Brain Eater');
    expect(zombie.type).toEqual('Zombie');
  });

  it('should have default health, level, attack, and defence values', () => {
    expect(zombie.health).toEqual(100);
    expect(zombie.level).toEqual(1);
    expect(zombie.attack).toEqual(40);
    expect(zombie.defence).toEqual(10);
  });

  it('should increase level and reset health when levelUp() is called', () => {
    const initialHealth = zombie.health;
    zombie.levelUp();

    expect(zombie.level).toEqual(2);
    expect(zombie.health).toEqual(100);
    expect(zombie.attack).toBeGreaterThan(40);
    expect(zombie.defence).toBeGreaterThan(10);
    expect(zombie.health).toBeGreaterThan(initialHealth);
  });

  it('should throw an error when trying to levelUp a character with 0 health', () => {
    zombie.health = 0;

    expect(() => zombie.levelUp()).toThrow();
    expect(() => zombie.levelUp()).toThrowError('Нельзя повысить level умершего');
  });

  it('should deduct the correct amount of health points when damage() is called', () => {
    const damageAmount = 30;
    const expectedHealth = zombie.health - damageAmount;
    zombie.damage(damageAmount);

    expect(zombie.health).toEqual(expectedHealth);
  });
});
