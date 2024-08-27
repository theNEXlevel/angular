import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'crx-user',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {}
