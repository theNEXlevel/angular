import { User } from '@angular-task/users-util';
import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { UsersService } from './users.service';
import { HttpErrorResponse } from '@angular/common/http';

type UsersState = {
    user: User | null;
    users: User[];
    error?: HttpErrorResponse;
    name: string;
};

const usersState = {
    user: null,
    users: [],
    name: ''
};

export const UsersStore = signalStore(
    { providedIn: 'root' },
    withState<UsersState>(usersState),
    withComputed(({ name, users }) => ({
        filteredUsers: computed(() => users().filter((user) => user.name.toLowerCase().includes(name().toLowerCase())))
    })),
    withMethods((store, usersService = inject(UsersService)) => ({

        getUsers: rxMethod<void>(pipe(switchMap(() => usersService.users$.pipe(tapResponse({
            next: (users) => patchState(store, { users }),
            error: ({ message }) => patchState(store, { error: message })
        }))))),

        getUser: rxMethod<number>(pipe(switchMap((id) => usersService.getUser$(id).pipe(tapResponse({
            next: (user) => patchState(store, { user }),
            error: ({ message }) => patchState(store, { error: message })
        }))))),

        setNameFilter: (name: string) => patchState(store, { name })

    }))
);
