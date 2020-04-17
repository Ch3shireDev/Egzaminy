import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Exam } from '../exam';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  exams: Exam[];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.getExams().subscribe((exams) => {
      this.exams = exams;
    });
  }
}
