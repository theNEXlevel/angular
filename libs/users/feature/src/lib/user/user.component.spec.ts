import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { signal } from '@angular/core';
import { UsersStore } from '@angular-task/users-data-access';
import { ActivatedRoute } from '@angular/router';

describe('UserComponent', () => {

    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [UserComponent],
            providers: [
                { provide: UsersStore, useValue: { getUser: jest.fn() } },
                { provide: ActivatedRoute, useValue: {} }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('id', signal<number>(1));
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
