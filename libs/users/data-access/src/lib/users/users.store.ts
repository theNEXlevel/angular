import { User } from '@angular-task/users-util';
import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { UsersService } from './users.service';
import { HttpErrorResponse } from '@angular/common/http';

type UsersState = {
    users: User[];
    error?: HttpErrorResponse;
};

const usersState = {
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

    })),
    withHooks({
        onInit (store) {

            store.getUsers();

        }
    })
);
