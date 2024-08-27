import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { UsersStore } from '@angular-task/users-data-access';
import { UserProfileComponent } from '@angular-task/users-ui';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'crx-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UserProfileComponent, RouterLink],
})
export class UserComponent implements OnInit {

    readonly store = inject(UsersStore);
    id = input.required<number>();

    ngOnInit () {

        this.store.getUser(this.id());

    }

}
