import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
// const not_fount = require('../../assets/404.png') 
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule,NgOptimizedImage,CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  imagePath: string = 'assets/image/example.png';
}
