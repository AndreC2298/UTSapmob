import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface data{
  judul : string,
  isi : string
  tanggal : string,
  nilai : string
}
var isiData : Observable<data[]>;
var isiDataColl : AngularFirestoreCollection<data>;
var Judul : string;
var Isi : string;
var Tanggal : string;
var Nilai : string;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isiDataColl: AngularFirestoreCollection<unknown>;
  isiData: Observable<unknown[]>;
  Judul: string;
  Isi: string;
  Tanggal: string;
  Nilai: string;
  

  constructor(
    afs : AngularFirestore
  ) {
    this.isiDataColl = afs.collection('dataCoba');
    this.isiData = this.isiDataColl.valueChanges();
  }
    simpan() {
      this.isiDataColl.doc (this.Judul).set({
        judul : this.Judul,
        isi: this.Isi,
        tanggal: this.Tanggal,
        nilai: this.Nilai
      });
    }
    uploadFoto() {
      
    }

}
