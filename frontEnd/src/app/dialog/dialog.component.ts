import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {msg: string}, private location: Location, private router: Router){
  }

  goToLocation(){
    console.log("getting here")
    // this.router.navigateByUrl(" ")
    // this.location.back()
  }
}
