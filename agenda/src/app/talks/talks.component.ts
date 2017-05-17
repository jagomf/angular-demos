import { Component, OnInit } from '@angular/core';

enum TalkType {
  TALK, WORKSHOP
}

const TALKS: any[] = [
  {title: 'Angular 5 is released!', time: '09:00', type: TalkType.TALK},
  {title: 'RxJS is pretty cool :D', time: '10:00', type: TalkType.TALK},
  {title: 'Learn ionic3', time: '11:00', type: TalkType.WORKSHOP},
];

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any>;


  constructor() {
  }

  ngOnInit() {
    this.talks = TALKS;
  }

  color(type) {
    return type === TalkType.TALK ? 'red' : 'yellow';
  }

  onClick() {
    console.log('click!');
  }

  onKeyUp(value) {
    this.talks = TALKS.filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
  }
}

