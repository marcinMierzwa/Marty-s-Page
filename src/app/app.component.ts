import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationTopComponent } from "../navigation-top/navigation-top.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationSideComponent } from "../navigation-side/navigation-side.component";
import { ContentComponent } from "../content/content.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavigationTopComponent, HeaderComponent, NavigationSideComponent, ContentComponent, FooterComponent]
})
export class AppComponent {
  title = 'next-route';
}
