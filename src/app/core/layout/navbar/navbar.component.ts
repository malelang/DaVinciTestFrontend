import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { MenuService, MenuItem } from '../menu.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titulo='TextilArt';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  

  menuItems: MenuItem[] = [];
  isOpenSidenav = false;
  
  constructor(public menuService: MenuService,
    private breakpointObserver: BreakpointObserver) { 
      this.menuItems = this.menuService.getItemsMenu();
    }

  ngOnInit() {
  }

  cambiarVisibilidad() {
    this.isOpenSidenav = !this.isOpenSidenav;
  }

}
