// import { Injectable } from '@angular/core';
// import { Actions, ofType } from '@ngrx/effects';

// import { filter } from 'rxjs/operators';
// import { EntityAction, ofEntityOp, OP_ERROR, OP_SUCCESS, EntityCacheAction } from '@ngrx/data';
// import { ToastController } from '@ionic/angular';
// import { UserActionTypes } from './actions/user.actions';

// /** Report ngrx-data success/error actions as toast messages **/
// @Injectable({ providedIn: 'root' })
// export class EntityToastService {
//   constructor(actions$: Actions, public toastController: ToastController) {
//     actions$
//         .pipe(
//             ofEntityOp(),
//             filter(
//                 (ea: EntityAction) => ea.payload.entityOp.endsWith(OP_SUCCESS) || ea.payload.entityOp.endsWith(OP_ERROR),
//             ),
//         )
//         .subscribe((action) =>
//           this.presentToast(`Success`), // `${action.payload.entityName} action - ${action.payload.entityOp}`),
//         );

//     actions$
//         .pipe(ofType(EntityCacheAction.SAVE_ENTITIES_SUCCESS, EntityCacheAction.SAVE_ENTITIES_ERROR))
//         .subscribe((action: any) =>
//           this.presentToast(`Success`), // `SaveEntities ${action.type} - url: ${action.payload.url}`),
//         );

//     actions$
//         .pipe(ofType(UserActionTypes.LoginFail))
//         .subscribe((action: any) => this.presentToast(`Wrong credentials`));

//     actions$
//         .pipe(ofType(UserActionTypes.UpdateUserFail))
//         .subscribe((action: any) => this.presentToast(`Update error`));

//     actions$
//         .pipe(ofType(UserActionTypes.RemoveCompanyFail))
//         .subscribe((action: any) => this.presentToast(`Remove Company error`));

//     actions$
//         .pipe(ofType(UserActionTypes.RemoveCompanySuccess))
//         .subscribe((action: any) => this.presentToast(`Company successful removed`));
//   }

//   async presentToast(message: string) {
//     const toast = await this.toastController.create({
//       message,
//       duration: 1000,
//     });
//     toast.present();
//   }
// }
