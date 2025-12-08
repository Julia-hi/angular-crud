import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  constructor(private router: Router){}


  /**
   * redirect to link
   * @param link 
   */
  goto(link:string){
    this.router.navigate([link])
  }

}
