import { Subject } from "rxjs";

const loading$  = new Subject

export const loadingSercice = {
    showLoading: () => loading$.next(true),
    hideLoading: () => loading$.next(false),
    loadingStatus$: loading$.asObservable()
}