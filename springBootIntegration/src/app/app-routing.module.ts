import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';


const routes: Routes = [

  {path:'accounts', component: AccountComponent},
  {path:'create-account', component: CreateAccountComponent},
  {path:'update-account/:id', component: UpdateAccountComponent},
  {path:'account-details/:id', component: AccountDetailsComponent},
  {path:'', redirectTo:'accounts', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
