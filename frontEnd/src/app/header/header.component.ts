import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { AddCompoundComponent } from '../add-compound/add-compound.component';
import { AddComponent } from '../dialog/add/add.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddComponent, {
      height: '440px',
      width: '600px',
    });
  }
}
