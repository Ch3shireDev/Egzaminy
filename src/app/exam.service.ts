import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from './exam';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  url = 'https://ch3shiredev.github.io/Egzaminy/assets/exams';

  getExam(id: string) {
    return this.httpClient
      .get(`${this.url}/${id}.md`, { responseType: 'text' })
      .pipe(map((exam) => new Exam(id, exam)));
  }
  constructor(private httpClient: HttpClient) {}

  public getFile() {
    return this.httpClient
      .get(`${this.url}/egzamin-1.md`, {
        responseType: 'text',
      })
      .pipe(map((res) => new Exam('egzamin-1', res)));
  }

  public getExams(): Observable<Exam[]> {
    return this.httpClient
      .get(`${this.url}/egzamin-1.md`, { responseType: 'text' })
      .pipe(map((res: string) => [new Exam('egzamin-1', res)]));
  }
}
