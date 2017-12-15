import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  recipeObserver = new BehaviorSubject([]);
  result;
  chef: string;
  constructor(private _http: HttpClient) { }

  createUser(chef) {
    this.chef = chef;
  }

  getUser() {
    return this.chef;
  }

  createRecipe(recipe: any) {
    console.log("in service")
    this._http.post('/create', recipe).subscribe(
      (response) => this.getAll(),
      errorResponse => console.log(errorResponse)
    );
  }
  getAll() {
    this._http.get('/all').subscribe(
      (response: any) => {
        this.recipeObserver.next(response);
      },
      (errorResponse) => console.log(errorResponse)
    );
  }

  getRecipe(id: string) {
    return this._http.get('/note/' + id)
  }

  updateRating(recipe: any) {
    console.log("in service");
    console.log(recipe._id);
    this._http.put('/recipe/' + recipe._id, recipe).subscribe(
      (response) => this.getAll(),
      errorResponse => console.log(errorResponse)
    )
  }

  // getNote(id: string) {
  //   return this._http.get('/note/' + id)    
  // }

  // updateNote(note: any) {
  //   console.log("in service");
  //   console.log(note);
  //   return this._http.put('/note/'+note._id, note)
  // }

  // deleteNote(id: string){
  //   console.log("in service"+id);
  //   return this._http.delete('/note/'+id).subscribe(
  //     (result : any) => this.getAll()
  //   )
  // }


}
