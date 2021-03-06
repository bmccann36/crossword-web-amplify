import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmplifystartComponent } from './amplifystart/amplifystart.component';
import { PairDeviceComponent } from './pair-device/pairDevice.component';



const routes: Routes = [
  { path: 'amplifystart', component: AmplifystartComponent },
  { path: 'app-stepper', component: PairDeviceComponent },
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
