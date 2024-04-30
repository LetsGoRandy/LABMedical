import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { sidebarComponent } from './components/Sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import {MatMenuModule} from '@angular/material/menu';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        DashboardComponent,
        MatSidenavModule,
        sidebarComponent,
        ToolbarComponent,
        MatMenuModule,
    ]
})
export class AppComponent {
  title = 'LABMedical';
}

