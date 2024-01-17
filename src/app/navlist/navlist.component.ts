import { Component, inject } from '@angular/core';
import { Skill } from '../../models/skill';
import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-navlist',
  standalone: true,
  imports: [],
  templateUrl: './navlist.component.html',
  styleUrl: './navlist.component.css'
})
export class NavlistComponent {
  
  private store:StoreService = inject(StoreService);
  
  public skillsList:Skill[] = this.store.getSkillsList;


}
