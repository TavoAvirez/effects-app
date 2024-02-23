import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from "../actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "../../services/usuario.service";



@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) {

    }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            // tap(data => console.log('effect tap ', data)),
            mergeMap(
                () => this.usuariosService.getUsers()
                .pipe(
                    map( users => usuariosActions.cargarUsuariosSuccess({usuarios: users})),  
                    catchError( err => of(usuariosActions.cargarUsuariosError({payload: err})))
                )
            )
        )
    );

}
