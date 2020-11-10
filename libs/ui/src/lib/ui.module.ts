import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, RouterModule],
  declarations: [SideNavComponent, MainMenuComponent],
  exports: [
    SideNavComponent,
    MatSidenavModule,
    MatToolbarModule,
    MainMenuComponent,
    MatIconModule,
  ],
})
export class UiModule {}
