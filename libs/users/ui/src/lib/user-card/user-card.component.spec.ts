import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { signal } from '@angular/core';
import { User } from '@angular-task/users-util';
import { ActivatedRoute } from '@angular/router';

describe('UserCardComponent', () => {

    let component: UserCardComponent;
    let fixture: ComponentFixture<UserCardComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UserCardComponent],
            providers: [
                { provide: ActivatedRoute, useValue: {} }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserCardComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput(
            'data',
            signal<User>({
                id: 1,
                name: 'User Name',
                username: 'User Username',
                email: 'User Email',
                phone: 'User Phone',
                website: 'User Website',
                address: {
                    street: 'User Street',
                    suite: 'User Suite',
                    city: 'User City',
                    zipcode: 'User Zipcode',
                    geo: {
                        lat: 'User Lat',
                        lng: 'User Lng',
                    },
                },
                company: {
                    name: 'Company Name',
                    catchPhrase: 'Company Catch Phrase',
                    bs: 'Company BS',
                }
            })
        );
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
