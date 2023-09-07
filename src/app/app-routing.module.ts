import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {path:"", redirectTo: 'contact', pathMatch:'full'},
  {path:"create-contact", component: CreateContactComponent},
  {path:"edit/:id", component: EditContactComponent},
  {path:"contacts", component: ContactListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
