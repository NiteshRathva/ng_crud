import { Injectable} from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class DataService{
    constructor(private http:HttpClient){}
    getData(): Observable<any>{
        return this.http.get("http://localhost:3000/api/heroes/");
    }
}