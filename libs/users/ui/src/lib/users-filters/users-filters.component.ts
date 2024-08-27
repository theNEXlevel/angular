import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'crx-users-filters',
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
    templateUrl: './users-filters.component.html',
    styleUrl: './users-filters.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFiltersComponent implements OnInit {

    private destroyRef = inject(DestroyRef);
    private formBuilder = inject(FormBuilder);
    filterChange = output<Partial<{ name: string, favorite: boolean }>>();
    filtersForm = this.formBuilder.nonNullable.group({
        name: [''],
        favorite: [false]
    });

    ngOnInit () {

        this.filtersForm.valueChanges.pipe(
            takeUntilDestroyed(this.destroyRef),
            debounceTime(250),
            distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
        ).subscribe((value) => {

            this.filterChange.emit(value);

        });

    }

}
