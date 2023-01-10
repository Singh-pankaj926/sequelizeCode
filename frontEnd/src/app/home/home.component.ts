import { Component, OnInit, ViewChild } from '@angular/core';
import { CompoundServiceService } from '../service/compound/compound-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCompoundComponent } from '../add-compound/add-compound.component';
import { DetailsComponent } from '../dialog/details/details.component';
import { EditComponent } from '../dialog/edit/edit.component';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  compoundList: any;
  compoundId: any;
  public isReadMore:boolean = true;
  showMore: boolean = false;
  // skip: number = 0;
  // limit: number = 8;
  length: number = 0;
  pageSize: number = 8;
  pageIndex: number = 0;

  constructor(private cs: CompoundServiceService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.cs.getCompoundList(this.pageIndex,this.pageSize).subscribe((response)=>{
      this.compoundList = response.data.rows;
      this.length = response.data.count;
    });
  }

  openDialogDetailsCompound(compoundDetails:any){
    this.dialog.open(DetailsComponent, {
      data: { compound: compoundDetails },
      height: '450px',
      width: '650px',
    });
  }

  openDialogEditCompound(compoundDetail:any){
    this.dialog.open(EditComponent, {
      data: { compound: compoundDetail },
      height: '440px',
      width: '600px',
    });

  }

  openDialogDeleteCompound(compoundDetail:any){
    this.dialog.open(DeleteComponent, {
      data: { compoundId: compoundDetail.id },
      height: '150px',
      width: '400px',
    });
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log(this.length, this.pageSize, this.pageIndex);
    this.cs.getCompoundList(this.pageIndex,this.pageSize).subscribe((response)=>{
      this.compoundList = response.data.rows;
      this.length = response.data.count;
    });
  }
}
