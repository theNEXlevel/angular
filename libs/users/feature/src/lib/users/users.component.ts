import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UsersListComponent, UsersFiltersComponent } from '@angular-task/users-ui';
import { UsersStore } from '@angular-task/users-data-access';

@Component({
    selector: 'crx-users',
    standalone: true,
    imports: [UsersListComponent, UsersFiltersComponent],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {

    store = inject(UsersStore);

    ngOnInit () {

        this.store.getUsers();

    }

}
