
import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente} from '../models/docente';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ){

  }

  agregarDocente (docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl+'api/Institucion', docente, httpOptions).pipe(
    tap((newTask: Docente) => this.log(`added NewTask w/ id=${newTask.id}`)),
    catchError(this.handleError<Docente>('addTask'))
    );
    }


    getAll():Observable<Docente[]>
    {
    return this.http.get<Docente[]>(this.baseUrl+'api/Institucion').pipe(
    tap(_=>this.log('Se Consulta la información')),
    catchError(this.handleError<Docente[]>('getAll',[]))
    );
    }


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
      };
      }
      /** Log a HeroService message with the MessageService */
      private log(message: string) {
      alert(`TaskService: ${message}`);
      }
}
