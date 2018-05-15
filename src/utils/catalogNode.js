export default class {
  constructor(text, level) {
    this.text = text;
    this.level = level;
  }
  get lv() {
    return this.level;
  }
  get content() {
    return this.text;
  }
};

