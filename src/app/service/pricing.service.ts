import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  prices$: any;

  constructor(private db: AngularFireDatabase) { 
    this.prices$ = this.db.list('/pricing').valueChanges();

  }
}
