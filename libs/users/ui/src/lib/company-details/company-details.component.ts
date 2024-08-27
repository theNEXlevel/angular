import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Company } from '@angular-task/users-util';

@Component({
    selector: 'crx-company-details',
    standalone: true,
    host: {
        class: 'rounded overflow-hidden shadow-lg flex flex-col gap-3'
    },
    templateUrl: './company-details.component.html',
    styleUrl: './company-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailsComponent {

    data = input.required<Company>();

}
