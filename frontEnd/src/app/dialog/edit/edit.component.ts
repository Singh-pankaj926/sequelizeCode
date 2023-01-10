import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { CompoundServiceService } from 'src/app/service/compound/compound-service.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private formBuilder: FormBuilder, private cs: CompoundServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {compound: any}, private router: Router, private dialog: MatDialog){
  }

  addCompoundForm = this.formBuilder.group({
    // name: ['', Validators.required, Validators.minLength(2)],
    // description: ['', Validators.required, Validators.minLength(4)],
    // imageLink: ['', Validators.required, Validators.minLength(4)]
    id: [this.data.compound.id],
    name: [this.data.compound.name],
    description: [this.data.compound.description],
    imageLink: [this.data.compound.imageLink]
  });

  onSubmit(){
    this.cs.updateCompoundDetails(this.addCompoundForm.value).subscribe((responseObj) => {
      this.dialog.open(DialogComponent, {
        data: { msg: "Success" },
        height: '200px',
        width: '300px',
      });
    })
  }

}
