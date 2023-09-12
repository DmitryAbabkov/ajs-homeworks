import Bowerman from '../Bowerman';

describe('Bowerman', () => {
  let bowerman;

  beforeEach(() => {
    bowerman = new Bowerman('Robin');
  });

  it('should create a Bowerman character with the correct name and type', () => {
    expect(bowerman.name).toEqual('Robin');
    expect(bowerman.type).toEqual('Bowerman');
  });

  it('should have default health, level, attack, and defence values', () => {
    expect(bowerman.health).toEqual(100);
    expect(bowerman.level).toEqual(1);
    expect(bowerman.attack).toEqual(25);
    expect(bowerman.defence).toEqual(25);
  });

  it('should increase level and reset health when levelUp() is called', () => {
    const initialHealth = bowerman.health;
    bowerman.levelUp();

    expect(bowerman.level).toEqual(2);
    expect(bowerman.health).toEqual(100);
    expect(bowerman.attack).toBeGreaterThan(25);
    expect(bowerman.defence).toBeGreaterThan(25);
    expect(bowerman.health).toBeGreaterThan(initialHealth);
  });

  it('should throw an error when trying to levelUp a character with 0 health', () => {
    bowerman.health = 0;

    expect(() => bowerman.levelUp()).toThrow();
    expect(() => bowerman.levelUp()).toThrowError('Нельзя повысить level умершего');
  });

  it('should deduct the correct amount of health points when damage() is called', () => {
    const damageAmount = 30;
    const expectedHealth = bowerman.health - damageAmount;
    bowerman.damage(damageAmount);

    expect(bowerman.health).toEqual(expectedHealth);
  });
});
