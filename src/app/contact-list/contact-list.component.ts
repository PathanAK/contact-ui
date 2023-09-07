import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private service: ContactService, private router: Router) { }

  contacts: Contact[] = [];
  delmsg: string = "";


  ngOnInit(): void {
    this.getContacts();
  }


  getContacts() {
    this.service.getContacts().subscribe(response => {
      this.contacts = response;
    });
  }

  editContact(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteContact(id: number) {
    this.service.deleteById(id).subscribe(response => {
      this.delmsg = response;
      this.getContacts();
    });

  }
}
