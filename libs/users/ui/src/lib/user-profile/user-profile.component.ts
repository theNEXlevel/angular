import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { User, USER_PROFILE_PLACEHOLDER } from '@angular-task/users-util';
import { AddressDetailsComponent } from '../address-details';
import { CompanyDetailsComponent } from '../company-details';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'crx-user-profile',
    standalone: true,
    host: {
        class: 'block max-w-3xl mx-auto'
    },
    imports: [NgOptimizedImage, AddressDetailsComponent, CompanyDetailsComponent, MatIconModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {

    data = input.required<User>();
    favorite = output<number>();

    imgUrl = USER_PROFILE_PLACEHOLDER;

}
