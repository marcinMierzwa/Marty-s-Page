import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private skillsList: Skill[] = [
    {    
      id: 1,
      name: "about me"
    },
    {    
      id: 2,
      name: "skills"
    },
    {    
      id: 3,
      name: "carrer planning"
    },
    {    
      id: 4,
      name: "other passions"
    },
    {    
      id: 5,
      name: "contact"
    },




  ]

  constructor() { }

  get getSkillsList (){
    return this.skillsList as Skill[]
  }
}
