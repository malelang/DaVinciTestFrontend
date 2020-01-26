import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  titulo = '';
  isOpenSidenav = false;

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickMenu() {
    this.isOpenSidenav = !this.isOpenSidenav;
    this.menuClick.emit();
  }

}
