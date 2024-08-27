import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Address } from '@angular-task/users-util';

@Component({
    selector: 'crx-address-details',
    standalone: true,
    templateUrl: './address-details.component.html',
    styleUrl: './address-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressDetailsComponent {

    data = input.required<Address>();
    addressString = computed(() => {

        const { street, suite, city, zipcode } = this.data();
        return `${street}, ${suite}, ${city}, ${zipcode}`;

    });

}
