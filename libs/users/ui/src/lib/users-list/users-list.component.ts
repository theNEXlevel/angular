import { User } from '@angular-task/users-util';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'crx-users-list',
    standalone: true,
    host: {
        class: 'grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4',
    },
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {

    data = input.required<User[]>();

}
