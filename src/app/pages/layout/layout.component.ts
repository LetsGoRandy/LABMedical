import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { sidebarComponent } from "../../components/Sidebar/sidebar.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        DashboardComponent,
        MatSidenavModule,
        sidebarComponent
    ]
})
export class LayoutComponent {

}
