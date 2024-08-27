import { User } from '@angular-task/users-util';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UserCardComponent } from '../user-card';

@Component({
    selector: 'crx-users-list',
    standalone: true,
    host: {
        class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
    },
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UserCardComponent],
})
export class UsersListComponent {

    data = input.required<User[]>();

}
