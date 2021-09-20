import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/types/Restaurant';
import { APIService } from '../API.service';

@Component({
  selector: 'app-root',
  templateUrl: './amplifystart.component.html',
  styleUrls: ['./amplifystart.component.css']
})
export class AmplifystartComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm!: FormGroup;
  restaurants!: Array<Restaurant>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });
    this.api.ListRestaurants().then(event => {
      this.restaurants = <Array<Restaurant>>event.items;
    });

    /* subscribe to new restaurants being created */
//? had to hard code to listen on only events created by me
    this.api.OnCreateRestaurantListener("bmccann").subscribe((event: any) => {
      const newRestaurant = event.value.data.onCreateRestaurant;
      this.restaurants = [newRestaurant, ...this.restaurants];
    });
  }

  public onCreate(restaurant: Restaurant) {
    this.api.CreateRestaurant(restaurant).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
      .catch(e => {
        console.log('error creating restaurant...', e);
      });
  }
}