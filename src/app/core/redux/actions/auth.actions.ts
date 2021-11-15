import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/features/models/Activity';
import { User } from '../../../features/models/User';



interface IAuthPropsResponse {
    success: boolean,
    data: User,
    token: string
}

export const login        = createAction('[Authentication] Login', props<{email: string, password: string}>() );
export const logout       = createAction('[Authentication] Logout');

export const register     = createAction('[Authentication] Register', props<{name: string, email: string, password: string}>() );

export const setAuthState = createAction('[Authentication] Auth State Modified', props<IAuthPropsResponse>() );


export const findAllActivities        = createAction('[ Activity ] Find All Activities');
export const findAllActivitiesSuccess = createAction('[ Activity ] Find All Activities Success', props<{ payloadActivity: Array<Activity> }>());
export const findAllActivitiesError = createAction('[ Activity ] Find All Activities Error',props<{ error: any }>());


//export const loginError = createAction('[Authentication] Auth State Error', props<any>());
