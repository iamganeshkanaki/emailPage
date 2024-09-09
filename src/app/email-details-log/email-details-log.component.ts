import { Component } from '@angular/core';
import { ComponentService } from '../component.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-email-details-log',
  standalone: true,
  imports: [FormsModule,CommonModule,MatInputModule,MatSelectModule,MatAutocompleteModule],
  templateUrl: './email-details-log.component.html',
  styleUrl: './email-details-log.component.css'
})
export class EmailDetailsLogComponent {
  constructor(public emailService: ComponentService,
              public location: Location
  ){}
  to:any;
  from:any;
  subject:any;
  body:any;
  bcc:any;
  cc:any;
  ngOnInit(){
    console.log("Execited");
    const data = this.emailService.getEmailData()
    this.to = data.to;
    this.from = data.from;
    this.subject = data.subject;
    this.body = data.body;
    this.bcc = data.bcc;
    this.cc = data.cc;
  }

  back(): void {
    this.location.back();
  }
}
