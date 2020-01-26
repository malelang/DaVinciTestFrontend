import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  itemsMenu: MenuItem[] = [
    {
      icono: 'house', titulo: 'Inicio', ruta: '/home'
    },
    {
      icono: 'people', titulo: 'Perfil', ruta: '/registro'
    },
    {
      icono: 'create_new_folder', titulo: 'Subir información', ruta: '/crear'
    },
    {
      icono: 'info', titulo: 'Acerca de nosotros', ruta: '/info'
    }
  ];

  constructor() { }

  getItemsMenu(): MenuItem[] {
    return this.itemsMenu;
  }
}

export interface MenuItem {
  icono?: string;
  titulo: string;
  ruta?: string;
}
