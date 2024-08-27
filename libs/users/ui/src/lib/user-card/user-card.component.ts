import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { User, USER_PROFILE_PLACEHOLDER } from '@angular-task/users-util';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ClickStopPropogationDirective } from '../click-stop-propogation';

@Component({
    selector: 'crx-user-card',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink, MatIconModule, ClickStopPropogationDirective],
    host: {
        class: 'rounded overflow-hidden shadow-lg'
    },
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {

    data = input.required<User>();
    favorite = output<number>();

    imgUrl = USER_PROFILE_PLACEHOLDER;

}
