import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'crx-users-filters',
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    templateUrl: './users-filters.component.html',
    styleUrl: './users-filters.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFiltersComponent implements OnInit {

    private destroyRef = inject(DestroyRef);
    private formBuilder = inject(FormBuilder);
    nameChange = output<string>();
    nameControl = this.formBuilder.nonNullable.control('');

    ngOnInit () {

        this.nameControl.valueChanges.pipe(
            takeUntilDestroyed(this.destroyRef),
            debounceTime(250),
            distinctUntilChanged()
        ).subscribe((value) => {

            this.nameChange.emit(value);

        });

    }

}
