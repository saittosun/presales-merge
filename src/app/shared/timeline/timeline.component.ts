import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnChanges {

  @Input() resolutionArray = [];
  @Input() activeResolution;
  @Input() statusArray = [];
  @Input() activeStatus;
  activeStatusIndex = 0;
  activeResolutionClass;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.activeStatus || changes.statusArray) {
      this.activeStatusIndex = this.statusArray.indexOf(this.activeStatus)
    }
    if (changes.activeResolution || changes.resolutionArray) {
      this.activeResolutionClass = this.activeResolution
    }
  }

}
