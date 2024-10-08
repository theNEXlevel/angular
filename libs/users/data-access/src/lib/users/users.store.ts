import type { User } from '@angular-task/users-util';
import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { UsersService } from './users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

const FAVORITE_USERS_STORAGE_KEY = 'crxFavoriteUsers';
type UsersState = {
    user: User | null;
    users: User[];
    favorites: Record<number, boolean>;
    error?: HttpErrorResponse;
    name: string;
    favorite: boolean;
};

const usersState = {
    user: null,
    users: [],
    favorite: false,
    favorites: {},
    name: ''
};

export const UsersStore = signalStore(
    { providedIn: 'root' },
    withState<UsersState>(usersState),
    withComputed(({ name, users, user, favorite, favorites }) => ({
        filteredUsers: computed(() => {

            const usersListWithNameFilter = users().reduce<User[]>((acc, user) =>
                user.name.toLowerCase().includes(name().toLowerCase())
                    ? [...acc, { ...user, isFavorite: favorites()[user.id] }] : acc, []);
            const isFavoriteFilters = !!favorite();
            return isFavoriteFilters
                ? usersListWithNameFilter.filter(({ isFavorite }) => isFavorite) : usersListWithNameFilter;

        }),
        userProfile: computed(() => {

            const selectedUser = user();
            return selectedUser ? { ...selectedUser, isFavorite: favorites()[selectedUser.id] } : null;

        })
    })),
    withMethods((store, usersService = inject(UsersService), document = inject(DOCUMENT)) => ({

        getUsers: rxMethod<void>(pipe(switchMap(() => usersService.users$.pipe(tapResponse({
            next: (users) => patchState(store, { users }),
            error: ({ message }) => patchState(store, { error: message })
        }))))),

        getUser: rxMethod<number>(pipe(switchMap((id) => usersService.getUser$(id).pipe(tapResponse({
            next: (user) => patchState(store, { user }),
            error: ({ message }) => patchState(store, { error: message })
        }))))),

        setFilters: (filters: Partial<{ name: string, favorite: boolean }>) => patchState(
            store,
            { name: filters.name, favorite: filters.favorite }
        ),

        setFavorites: (favorites: Record<number, boolean>) => patchState(store, { favorites }),

        toggleFavorite: (id: number) => {

            patchState(
                store,
                { favorites: store.favorites()[id]
                    ? { ...store.favorites(), [id]: false } : { ...store.favorites(), [id]: true } },
            );
            if (document.defaultView) {

                document.defaultView.localStorage.setItem(
                    FAVORITE_USERS_STORAGE_KEY,
                    JSON.stringify(store.favorites())
                );

            }

        } })),
    withHooks({
        onInit (store, document = inject(DOCUMENT)) {

            if (document.defaultView?.localStorage) {

                const favoriteUsersFromStorage = document.defaultView.localStorage.getItem(FAVORITE_USERS_STORAGE_KEY);
                if (favoriteUsersFromStorage) {

                    store.setFavorites(JSON.parse(favoriteUsersFromStorage));

                }

            }

        },
    }),
);
