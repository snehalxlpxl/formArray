import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from '../app.component';
import { InvoiceComponent } from '../invoice/invoice.component';
// import { InvoiceComponent } from '../invoice/invoice.component';




@NgModule({
  declarations: [],
  imports: [
    FormsModule,MatButtonModule,ReactiveFormsModule,MatIconModule,MatFormFieldModule, MatInputModule
  ],
  bootstrap: [],
  // exports: [InvoiceComponent] 
})
export class AppModule { }
