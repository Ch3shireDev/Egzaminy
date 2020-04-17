import { Exercise } from './exercise';

export class Exam {
  public id: string;
  public name: string;
  public exercises: Exercise[];

  constructor(id: string, text: string) {
    this.id = id;
    this.name = text.match(/^\#\s*(.+)\s*/)[1];
    this.exercises = [...text['matchAll'](/(\#\# [\s\S]+?)(?=\#\#)/g)].map(
      (data) => new Exercise(data[1].trim())
    );
  }
}
