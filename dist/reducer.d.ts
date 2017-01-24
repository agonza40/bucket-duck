import { Action } from './actions';
import { State } from './types';
export declare const INITIAL_STATE: State<any>;
export default function reducer<T>(state: State<T>, action: Action<T>): State<T>;
