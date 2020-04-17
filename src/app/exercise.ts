import { Answer } from './answer';

export class Exercise {
  public name: string;
  public question = '';
  public answers: Answer[] = [];
  public first:boolean;
  public last:boolean;
  constructor(text: string) {
    this.name = text.match('## (.+)')[1];
    const questionLines = [];
    text.split('\n').forEach((line) => {
      if (line.match(/^\#\#/)) {
        return;
      }
      if (line.match(/^\-\s*\[[\sx]\].+/)) {
        this.answers.push(new Answer(line));
        return;
      }
      if (line.match(/^\s*$/)) {
        return;
      }
      questionLines.push(line.trim());
    });

    this.question = questionLines.join('\n');
  }
}
