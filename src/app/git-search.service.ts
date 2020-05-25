import { Injectable } from '@angular/core';

import { GitSearch } from './git-search';
import { GitUsers } from './git-users';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/publishReplay';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];

  cachedUsers: Array<{
    [query: string]: GitUsers
  }> = [];

  constructor(private http: HttpClient) {}

  gitSearch = (query: string): Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((_resolve, _reject) => {
      if (this.cachedValues[query]){
        _resolve(this.cachedValues[query])
      }
      else{
        this.http.get(`https://api.github.com/search/repositories?q=${query}`)
        .toPromise()
        .then(
          (response) => {
            this.cachedValues[query] = response;
            _resolve(response as GitSearch);
          },
          (error) => { _reject(error); }
        )
      }
    })
    return promise;
  }

  gitUsers= (query: string): Promise<GitUsers> => {
    let promise = new Promise<GitUsers>((_resolve, _reject) => {
      if(this.cachedUsers[query]){
        _resolve()
      } else{
        this.http.get(`https://api.github.com/search/users?q=${query}`)
        .toPromise()
        .then(
          (response) => { _resolve(response as GitUsers) },
          (error) => { _reject(error) }
        )
      }
    })

    return promise;
  }
}

  // Function = (query: string): Observable<GitSearch> => {
  //   if (!this.search) {
  //     this.search = this.http.get<GitSearch>(')
  //       .publishReplay(1) // Cache most recent value
  //       .refCount();   // Keeps observable alive while (subscribers)
  //     this.cachedValue = query;
  //   }
  //   else if (this.cachedValue !== query) {
  //     this.search = null;
  //     this.gitSearch(query);
  //   }
  //   return this.search;

  // gitUsers = (query: string): Promise<GitUsers> => {
  //   const promise = new Promise<GitUsers>((resolve, reject) => {
  //     if (this.cachedUsers[query]){
  //       resolve(this.cachedUsers[query]);
  //     }else {
  //       this.http.get('https://api.github.com/search/users?q=' + query)
  //       .toPromise()
  //       .then((response) => {
  //         resolve(response as GitUsers);
  //       }, (error) => {
  //         reject(error);
  //       });
  //     }
  //   });
  //   return promise;
  // }
