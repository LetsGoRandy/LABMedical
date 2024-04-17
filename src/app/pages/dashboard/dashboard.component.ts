import { Component } from '@angular/core';
// Angular Material
import {MatIconModule} from '@angular/material/icon';
// Components
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MenuLateralComponent,
    ToolbarComponent,
    MatIconModule,    
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
