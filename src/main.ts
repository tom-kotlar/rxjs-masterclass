import './style.css';

import { from, fromEvent, mergeMap, of, shareReplay } from 'rxjs';
import { ajax } from 'rxjs/ajax';


const observer = {
  next: (val: any) => console.log('next', val),
  error: (err: any) => console.log('error', err),
  complete: () => console.log('complete')
};

const click$ = fromEvent(document, 'click');
const ajax$ = ajax('https://api.github.com/users/octocat');

/*
 * shareReplay turns a unicast observable into multicasted
 * observable, utilizing a ReplaySubject behind the scenes.
 * 
 * In this example, we are mapping any clicks to an ajax
 * request, sharing the response.
 */
const sharedClick$ = click$.pipe(
  mergeMap(() => ajax$),
  /*
   * By default shareReplay shares all old values, like
   * a standard ReplaySubject. In this case, we only want
   * to share the most recent response.
   */
  shareReplay(1)
);

sharedClick$.subscribe(observer)

/*
 * Late subscribers will be replayed old value(s).
 */
setTimeout(() => {
  console.log('subscribing');
  sharedClick$.subscribe(observer);
}, 5000);