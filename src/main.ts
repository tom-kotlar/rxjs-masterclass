import { Subject, interval, tap } from 'rxjs';
import './style.css'
import { loadingSercice } from "./loadingService";

const loadingOverlay = document.getElementById('loading-overlay')

// const loading$ = new Subject();

// loading$.subscribe(isLoading => {
//   if(isLoading) {    
//     loadingOverlay.classList.add('open');    
//   } else {    
//     loadingOverlay.classList.remove('open')
//   }
// });

// loading$.next(true);

// setTimeout(() => loading$.next(false), 1500);


loadingSercice.loadingStatus$.subscribe(
  (  isLoading: any) => {
    if (isLoading){
      loadingOverlay?.classList.add('open')
    }
    else {
      loadingOverlay?.classList.remove('open')
    }
  }
)

// loading$.next(true)
loadingSercice.showLoading()

setTimeout(() => loadingSercice.hideLoading(), 1500)