export default class Character {
  #type;

  constructor(name, type) {
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else { throw new Error('Имя должно быть от 2 до 10 символов'); }
    if (types.includes(type)) {
      this.#type = type;
    } else { throw new Error('Не верный класс персонажа'); }

    this.health = 50;
    this.level = 1;
    this.attack = 40;
    this.defense = 10;
  }

  get getType() {
    return this.#type;
  }
}
