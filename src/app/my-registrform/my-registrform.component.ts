import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-my-registrform',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './my-registrform.component.html',
  styleUrl: './my-registrform.component.css'
})
export class MyRegistrformComponent {
  constructor(private RegiterService:RegisterService){}
    submitData(form:NgForm){
        if(form.valid){
          this.RegiterService.sendData(form.value).subscribe((response) =>{
            alert("Regiter")
          },err =>{
            alert("Error")
            console.log('Error:',err);
          })
        }
    }
}
