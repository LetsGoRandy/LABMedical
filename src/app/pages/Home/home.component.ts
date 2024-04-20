import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { sidebarComponent } from "../../components/Sidebar/sidebar.component";

@Component({
    selector: 'app-Home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        DashboardComponent,
        MatSidenavModule,
        sidebarComponent
    ]
})
export class HomeComponent {
    collapsed = signal(false);

    sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')
}
