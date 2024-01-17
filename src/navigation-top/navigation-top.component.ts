import { Component } from '@angular/core';
import { NavlistComponent } from "../app/navlist/navlist.component";
import { NavsidelistComponent } from "../app/navsidelist/navsidelist.component";

@Component({
    selector: 'app-navigation-top',
    standalone: true,
    templateUrl: './navigation-top.component.html',
    styleUrl: './navigation-top.component.css',
    imports: [NavlistComponent, NavsidelistComponent]
})
export class NavigationTopComponent {
}
