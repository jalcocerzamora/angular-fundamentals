import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitSearchService } from './../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  inputs: ['searchQuery'],
  // providers: [GitSearchService]
  // entryComponents: []
})
export class GitSearchComponent implements OnInit {
  title: string;
  searchQuery: string;
  searchResults: GitSearch;

  constructor(
    private GitSearchService: GitSearchService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (result) => { this.title = result.title }
    )

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.GitSearchService.gitSearch('angular').then(
      (response) => { this.searchResults = response; console.log(response) },
      (error) => { console.error(`Error: ${this} ${error.statusText}`) }
    )
  }

  // ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  // }

  // ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  // }

  /**
   * @description Declare behaviors to use
   */
  gitSearch = () => {
    let promise = this.GitSearchService.gitSearch(this.searchQuery).then(
      (response) => { this.searchResults = response },
      (error) => { console.error(`Error: ${this} ${error.statusText}`) }
    )
  }
}
