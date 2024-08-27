import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

type Geo = {
    lat: string;
    lng: string;
};

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

    users$ = this.http.get<User[]>(this.baseUrl);

}
