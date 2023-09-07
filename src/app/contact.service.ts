import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private backendBaseUrl = 'http://localhost:8080/api/contact';

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<string> {
    return this.httpClient.post(`${this.backendBaseUrl}/save`, contact, { responseType: "text" })
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.backendBaseUrl)
  }

  findContactById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.backendBaseUrl}/${id}`)
  }

  deleteById(id: number): Observable<string> {
    return this.httpClient.delete(`${this.backendBaseUrl}/${id}`, { responseType: "text"})
  }
}
