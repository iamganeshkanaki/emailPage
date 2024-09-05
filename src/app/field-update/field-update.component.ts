// field-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { FieldListService } from './services/field-list.service';
import { RegisterService } from '../services/register.service';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-field-update',
  templateUrl: './field-update.component.html',
  imports:[CommonModule,RouterModule,FormsModule],
  styleUrl: './field-update.component.css'
})
export class FieldUpdateComponent implements OnInit {
  field: any = {}; // Initialize an empty field object

  constructor(
    private route: ActivatedRoute,
    private fieldListService: RegisterService // Ensure this service is correctly set up
  ) {}

  ngOnInit(): void {
    // Get the ID from the route
    const id = this.route.snapshot.paramMap.get('id');
    console.log("This is Id:",id) // Get the;
    // Convert the ID to a number
    if (id) {
      const numericId = Number(id);
      if (!isNaN(numericId)) {
        // Fetch the data for the given ID
        this.fieldListService.get(numericId).subscribe(
          (data) => {
            this.field = data.data; // Populate the field object with fetched data
            console.log('One Data:',this.field)
          },
          (error) => {
            console.error('Error fetching field data', error);
          }
        );
      } else {
        console.error('Invalid ID format');
      }
    }
  }

  
  updateField(): void {
    // Get the ID from the route
    const id = this.route.snapshot.paramMap.get('id');

    // Convert the ID to a number
    if (id) {
      const numericId = Number(id);
      if (!isNaN(numericId)) {
        // Update the field with the given ID
        this.fieldListService.update(numericId, this.field).subscribe(
          (response) => {
            console.log('Field updated successfully', response);
            // You may want to navigate away or show a success message here
          },
          (error) => {
            console.error('Error updating field', error);
          }
        );
      } else {
        console.error('Invalid ID format');
      }
    }
  }
}
