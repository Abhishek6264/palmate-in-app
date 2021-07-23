import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

export class USER {
  $key: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserfireService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router,
    private afd: AngularFireDatabase
  ) { }

  createUser(user: USER) {
    // return this.ngFirestore.collection('details').add(user);
    return this.afd.object('details').set(user);
  }

  getUsers() {
    return this.ngFirestore.collection('details').snapshotChanges();
  }

  getUser(id) {
    return this.ngFirestore.collection('details').doc(id).valueChanges();
  }

  // update(id, user: USER) {
  //   this.ngFirestore.collection('details').doc(id).update(user)
  //     .then(() => {
  //       this.router.navigate(['/']);
  //     }).catch(error => console.log(error));;
  // }

  // delete(id: string) {
  //   this.ngFirestore.doc('details/' + id).delete();
  // }

}
