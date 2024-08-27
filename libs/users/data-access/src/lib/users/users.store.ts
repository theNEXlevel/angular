import { User } from '@angular-task/users-util';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { UsersService } from './users.service';
import { HttpErrorResponse } from '@angular/common/http';

type UsersState = {
    user: User | null;
    users: User[];
    error?: HttpErrorResponse;
};

const usersState = {
    user: null,
    users: []
};

export const UsersStore = signalStore(
    { providedIn: 'root' },
    withState<UsersState>(usersState),
    withMethods((store, usersService = inject(UsersService)) => ({

        getUsers: rxMethod<void>(pipe(switchMap(() => usersService.users$.pipe(tapResponse({
            next: (users) => patchState(store, { users }),
            error: ({ message }) => patchState(store, { error: message })
        }))))),

        getUser: rxMethod<number>(pipe(switchMap((id) => usersService.getUser$(id).pipe(tapResponse({
            next: (user) => patchState(store, { user }),
            error: ({ message }) => patchState(store, { error: message })
        }))))),

    }))
);
