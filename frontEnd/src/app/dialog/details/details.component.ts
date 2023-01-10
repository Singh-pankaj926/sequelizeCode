import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  compoundDetails:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {compound: any}){
    this.compoundDetails = this.data.compound;
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.compoundDetails)
  }

}
