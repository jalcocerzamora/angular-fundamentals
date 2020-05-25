import { TestBed } from '@angular/core/testing';
import { GitSearchService } from './git-search.service';
describe('GitSearchService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GitSearchService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=git-search.service.spec.js.map