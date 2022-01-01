import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  allMusic$:any;


  constructor(private db: AngularFireDatabase) { 

    this.allMusic$ = this.db.list('/music').valueChanges();
  }

}
