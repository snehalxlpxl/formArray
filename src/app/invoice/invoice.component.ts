import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,FormGroup,FormControl, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormsModule,MatButtonModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
rectform=new FormGroup({
  name:new FormControl('',Validators.required),
  comment:new FormControl('',Validators.required),
});
save(){
  console.log(this.rectform.value);
}
}
