import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);  

  const logged = sessionStorage.getItem('userLogged');
  debugger
  if (logged != null) {
    return true;
  } else {
    router.navigate(['login'])
    return false;
  }
};