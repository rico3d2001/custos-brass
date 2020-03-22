import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples$: Observable<Person[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.peoples$ = this.mainService.getPeople();
  }

}
