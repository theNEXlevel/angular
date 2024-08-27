import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { User } from '@angular-task/users-util';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

    users$ = this.http.get<User[]>(this.baseUrl);

}
