import { BehaviorSubject, Subject } from "rxjs";

const loading$  = new BehaviorSubject(true)

export const loadingSercice = {
    showLoading: () => loading$.next(true),
    hideLoading: () => loading$.next(false),
    loadingStatus$: loading$.asObservable()
}