import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@angular-task/users-feature').then((m) => m.USER_ROUTES)
    }
];
