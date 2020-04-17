import { Component, OnInit, Input } from '@angular/core';
import { ExamService } from '../exam.service';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../exam';
import { Exercise } from '../exercise';
import { Answer } from '../answer';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  get currentExercise(): Exercise {
    return this.exam.exercises[this.index];
  }

  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  get picked(): boolean {
    return this._picked[this.index];
  }

  set picked(value: boolean) {
    this._picked[this.index] = value;
  }
  id: string;
  exam: Exam;
  // currentExercise: Exercise;
  index = 0;

  _picked: boolean[];

  get currentTitle(): string {
    return `Zadanie ${this.index + 1}`;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.examService.getExam(this.id).subscribe((exam) => {
      this.exam = exam;
      this._picked = new Array(this.exam.exercises.length);
      this.exam.exercises[0].first = true;
      this.exam.exercises[this.exam.exercises.length - 1].last = true;
    });
  }

  setAnswer(answer: Answer) {
    if (this.picked) {
      return;
    }
    this.picked = true;
    answer.picked = true;
  }

  next() {
    this.index += 1;
  }

  previous() {
    this.index -= 1;
  }
}
