import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

export class ProjectsGuard implements CanActivate {
    canActivate(): Observable<boolean> | boolean {
        return confirm('Вы уверены, что хотите перейти?');
    }
}
