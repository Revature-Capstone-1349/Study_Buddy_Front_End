import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  portNumber:number = 8080;

  constructor(private http: HttpClient) { }

  // notes by 
}
