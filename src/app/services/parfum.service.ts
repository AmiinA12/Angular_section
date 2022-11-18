import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Parfum } from '../model/parfum.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { MarqueWrapper } from '../model/MarqueWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  
  apiURLMrq: string = 'http://localhost:8008/parfum/mrq';


  consulterMarque(newIdPrf: number): Marque {
    throw new Error('Method not implemented.');
  }
  
  
  
  parfum!: Parfum;
  marques! : Marque[];
  
  parfums! : Parfum[]; 
  constructor(private http : HttpClient) { /*this.marques= [ {idMrq : 1, nomMrq : "Dior"},
  {idMrq : 2, nomMrq : "Zara"}]; 
     this.parfums = [
    { idParfum : 1, nomParfum : "channel", prixParfum : 3000.600, dateCreation
    : new Date("01/14/2011"),marque : {idMrq : 1, nomMrq: "Dior"}},
    { idParfum : 2, nomParfum : "good girl", prixParfum: 450, dateCreation : new Date("12/17/2010"),marque: {idMrq: 2, nomMrq : "Zara"}},
    { idParfum : 3, nomParfum :"la vie est belle", prixParfum: 900.123, dateCreation : new Date("02/20/2020"),marque : {idMrq : 1, nomMrq: "Dior"}}
    ];*/}
    supprimerParfum(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

listeParfum(): Observable<Parfum[]>{
  return this.http.get<Parfum[]>(apiURL);
  }

  ajouterParfum( prf: Parfum):Observable<Parfum>{
    return this.http.post<Parfum>(apiURL, prf, httpOptions);
    }
    consulterParfum( id: number):Observable<Parfum> {
      const url = `${apiURL}/${id}`;
      return this.http.get<Parfum>(url);
  }

     updateParfum(prf:Parfum):Observable<Parfum>
     {
       return this.http.put<Parfum>(apiURL, prf, httpOptions);
      }
      listeMarques():Observable<MarqueWrapper>{
        return this.http.get<MarqueWrapper>(this.apiURLMrq);
        }
        rechercherParMarque(idMrq: number):Observable< Parfum[]> {
          const url = `${apiURL}/prfumsmrq/${idMrq}`;
          return this.http.get<Parfum[]>(url);
          }
          rechercherParNom(nom: string):Observable< Parfum[]> {
            const url = `${apiURL}/prfsByName/${nom}`;
            return this.http.get<Parfum[]>(url);
            }
            
            ajouterMarque( mrq: Marque):Observable<Marque>{
              return this.http.post<Marque>(this.apiURLMrq, mrq, httpOptions);
              }
        
 

     
    }

function trierParfums(this: any) {
  this.parfums= this.produits.sort((n1: { idParfum: number; },n2: { idParfum: number; }) => {
    if (n1.idParfum > n2.idParfum) {
    return 1;
    }
    if (n1.idParfum < n2.idParfum)
      {
        return -1;
    }
    return 0;
    });
    
      

    


}


 




