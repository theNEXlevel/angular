import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '@angular-task/users-util';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

const USER_PROFILE_PLACEHOLDER = '/assets/images/blank-user-profile.png';

@Component({
    selector: 'crx-user-card',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    host: {
        class: 'rounded overflow-hidden shadow-lg'
    },
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {

    data = input.required<User>();

    imgUrl = USER_PROFILE_PLACEHOLDER;

}
