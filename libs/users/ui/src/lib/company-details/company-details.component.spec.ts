import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsComponent } from './company-details.component';
import { signal } from '@angular/core';
import { Company } from '@angular-task/users-util';

describe('CompanyDetailsComponent', () => {

    let component: CompanyDetailsComponent;
    let fixture: ComponentFixture<CompanyDetailsComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [CompanyDetailsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CompanyDetailsComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput(
            'data',
            signal<Company>({ name: 'Company Name', bs: 'Company BS', catchPhrase: 'Company Catch Phrase' })
        );
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
