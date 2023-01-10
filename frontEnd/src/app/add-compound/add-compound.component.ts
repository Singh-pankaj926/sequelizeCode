import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CompoundServiceService } from '../service/compound/compound-service.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-compound',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css']
})
export class AddCompoundComponent {
  // mode: String = '';
  constructor(private formBuilder: FormBuilder, private cs: CompoundServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {mode: string}){
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
      console.log("<<<<<<<<<<<<<<", responseObj);
    })
  }
}
