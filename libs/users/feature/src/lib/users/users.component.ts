import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'crx-users',
    standalone: true,
    imports: [],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {}
