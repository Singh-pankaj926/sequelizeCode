import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CompoundServiceService } from '../../service/compound/compound-service.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private formBuilder: FormBuilder, private cs: CompoundServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {mode: string}, private router: Router, public dialog: MatDialog){
  }

  addCompoundForm = this.formBuilder.group({
    // name: ['', Validators.required, Validators.minLength(2)],
    // description: ['', Validators.required, Validators.minLength(4)],
    // imageLink: ['', Validators.required, Validators.minLength(4)]
    name: [''],
    description: [''],
    imageLink: ['']
  });

  onSubmit(){
    this.cs.saveCompound(this.addCompoundForm.value).subscribe((responseObj) => {
      this.dialog.open(DialogComponent, {
        data: { msg: "Success" },
        height: '450px',
        width: '650px',
      });
    })
  }

}
