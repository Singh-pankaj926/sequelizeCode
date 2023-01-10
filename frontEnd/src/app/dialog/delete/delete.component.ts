import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompoundServiceService } from 'src/app/service/compound/compound-service.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private formBuilder: FormBuilder, private cs: CompoundServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {compoundId: any}, private router: Router){
  }

  deleteCompound(){
    this.cs.deleteCompound(this.data.compoundId).subscribe((response) => {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", response)
      this.router.navigate(['/'])
    })
  }
}
