import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/publishReplay';
let GitSearchService = class GitSearchService {
    constructor(http) {
        this.http = http;
        this.cachedValues = [];
        this.gitSearch = (query) => {
            let promise = new Promise((_resolve, _reject) => {
                if (this.cachedValues[query]) {
                    _resolve(this.cachedValues[query]);
                }
                else {
                    this.http.get(`https://api.github.com/search/repositories?q=${query}`)
                        .toPromise()
                        .then((response) => { _resolve(response); }, (error) => { _reject(error); });
                }
            });
            return promise;
        };
    }
};
GitSearchService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GitSearchService);
export { GitSearchService };
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
//# sourceMappingURL=git-search.service.js.map