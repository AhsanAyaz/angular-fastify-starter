import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  /**
   * @author Ahsan Ayaz
   * The function fetches the users from the node server
   */
  getUsers() {
    return this.http.get('/api/v1/user')
      .map(res => res.json());
  }

  /**
   * @author Ahsan Ayaz
   * The function sends a delete user request to the server based on user Id
   * @param params {userId for now}
   */
  deleteUser(params) {
    return this.http.delete(`/api/v1/user/${params.userId}`)
      .map(res => res.json());
  }

  /**
   * @author Ahsan Ayaz
   * Sends an add user call to server which in result adds a user in the database
   * @param params {email and password for now}
   */
  addUser(params) {
    return this.http.post('/api/v1/user', params)
      .map(res => res.json());
  }

}
