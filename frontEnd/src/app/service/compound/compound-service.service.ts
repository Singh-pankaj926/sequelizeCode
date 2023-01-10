import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompoundServiceService {
  constructor(private httpClient: HttpClient) {
  }

  getCompoundList(skip:number,limit:number){
    return this.httpClient.get<any>(`http://127.0.0.1:7000/getCompoundList?skip=${skip}&limit=${limit}`);
  }

  saveCompound(compundDetails:any){
    return this.httpClient.post<any>('http://127.0.0.1:7000/insertNewCompound',compundDetails);
  }

  getCompoundDetails(compoundId:any){
    return this.httpClient.get<any>(`http://127.0.0.1:7000/getCompoundDetails?id=${compoundId}`);
  }

  updateCompoundDetails(compoundDetail:any){
    return this.httpClient.patch<any>(`http://127.0.0.1:7000/editCompundDetails?id=${compoundDetail.id}`, compoundDetail);
  }

  deleteCompound(compoundId:any){
    return this.httpClient.delete<any>(`http://127.0.0.1:7000/deleteCompound?id=${compoundId}`);
  }
}
