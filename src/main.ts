
import { } from 'rxjs';
import './style.css'


import { loadingSercice } from "./loadingService";

const loadingOverlay = document.getElementById('loading-overlay')


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



setTimeout(() => loadingSercice.hideLoading(), 1500)