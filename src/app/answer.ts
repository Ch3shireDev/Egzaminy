export class Answer {
  public content: string;
  public correct = false;
  public picked = false;

  constructor(text: string) {
    const data = text.match(/\-\s*\[([\sx]*)\] (.*)/);
    this.content = data[2];
    this.correct = data[1] === 'x';
  }
}
