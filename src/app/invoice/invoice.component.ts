import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule,FormGroup,FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormsModule,MatButtonModule,ReactiveFormsModule,MatIconModule,MatFormFieldModule, MatInputModule,CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
  
})
export class InvoiceComponent implements OnInit {
  ngOnInit(): void {
    this.addnewRow();
  }

  items!:FormArray;
  rectform=new FormGroup({
    name:new FormControl('',Validators.required),
    comment:new FormControl('',Validators.required),
    getaddrr:new FormArray([]),
  });
  save(){
    console.log(this.rectform.value);
  }
  addnewRow(){
    this.items=this.rectform.get('getaddrr') as FormArray;
    this.items.push(this.genrow());
  }
  get getaddrr(){
    return this.rectform.get('getaddrr') as FormArray;
  }
  genrow():FormGroup
  {
    return new FormGroup({
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),

    });

  }
  Removeitem(index:any){
    this.items=this.rectform.get('getaddrr') as FormArray;
    this.items.removeAt(index);
  }
}
