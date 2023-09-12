import Daemon from '../Daemon';

describe('Daemon', () => {
  let daemon;

  beforeEach(() => {
    daemon = new Daemon('Lucifer');
  });

  it('should create a Daemon character with the correct name and type', () => {
    expect(daemon.name).toEqual('Lucifer');
    expect(daemon.type).toEqual('Daemon');
  });

  it('should have default health, level, attack, and defence values', () => {
    expect(daemon.health).toEqual(100);
    expect(daemon.level).toEqual(1);
    expect(daemon.attack).toEqual(10);
    expect(daemon.defence).toEqual(40);
  });

  it('should increase level and reset health when levelUp() is called', () => {
    const initialHealth = daemon.health;
    daemon.levelUp();

    expect(daemon.level).toEqual(2);
    expect(daemon.health).toEqual(100);
    expect(daemon.attack).toBeGreaterThan(10);
    expect(daemon.defence).toBeGreaterThan(40);
    expect(daemon.health).toBeGreaterThan(initialHealth);
  });

  it('should throw an error when trying to levelUp a character with 0 health', () => {
    daemon.health = 0;

    expect(() => daemon.levelUp()).toThrow();
    expect(() => daemon.levelUp()).toThrowError('Нельзя повысить level умершего');
  });

  it('should deduct the correct amount of health points when damage() is called', () => {
    const damageAmount = 30;
    const expectedHealth = daemon.health - damageAmount;
    daemon.damage(damageAmount);

    expect(daemon.health).toEqual(expectedHealth);
  });
});
