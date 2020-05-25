import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(GitSearchService) {
        this.GitSearchService = GitSearchService;
        this.title = 'Angular Fundamentals';
    }
    ngOnInit() {
        this.GitSearchService.gitSearch('angular').then((response) => { alert(`Total Libraries Found: ${response.total_count}`); }, (error) => { alert(`Error: ${error.statusText}`); });
        throw new Error("Method not implemented.");
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map