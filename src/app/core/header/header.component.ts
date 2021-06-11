import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = []

  activeItem: MenuItem = {}

  constructor() { }

  ngOnInit() {
      this.items = [
        { icon: 'pi pi-fw pi-th-large'},
          {label: 'Home', icon: 'pi pi-fw pi-home'},
          {label: 'Arists', icon: 'pi pi-fw pi-user'},
          {label: 'Albums', icon: 'pi pi-fw pi-clone'},
          {label: 'Songs', icon: 'pi pi-fw pi-folder-open'},
          {label: 'Favorites', icon: 'pi pi-fw pi-star-o'},
          {label: 'Playlists', icon: 'pi pi-fw pi-bookmark'},
          {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];

      this.activeItem = this.items[0];
  }

}
