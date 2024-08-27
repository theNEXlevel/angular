import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressDetailsComponent } from './address-details.component';
import { Address } from '@angular-task/users-util';
import { signal } from '@angular/core';

describe('AddressDetailsComponent', () => {

    let component: AddressDetailsComponent;
    let fixture: ComponentFixture<AddressDetailsComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [AddressDetailsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AddressDetailsComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput(
            'data',
            signal<Address>({
                street: 'User Street',
                suite: 'User Suite',
                city: 'User City',
                zipcode: 'User Zipcode',
                geo: {
                    lat: 'User Lat',
                    lng: 'User Lng',
                },
            })
        );
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
