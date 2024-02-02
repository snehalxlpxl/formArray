import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,InvoiceComponent,HeaderComponent]
})
export class AppComponent {
  title = 'formarrayDemo';
}
