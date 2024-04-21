import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  userName: string = 'João Gomes';


}
