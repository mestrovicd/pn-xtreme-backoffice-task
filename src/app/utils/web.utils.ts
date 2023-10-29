import {Observable, of, delay, throwError} from 'rxjs';

export class WebUtils {

  private static readonly MinDelay = 500;
  private static readonly MaxDelay = 3000;

  public static mockSuccess(method: string, request: any | any[], response: any | any[]): Observable<any | any[]> {
    const generatedDelay = this.generateDelay();
    console.log(`Success on method: ${method} with delay: ${generatedDelay}`, request, response);
    return of(response).pipe(delay(generatedDelay));
  }

  public static mockError(method: string, request: any | any[], errorResponse: string): Observable<any> {
    const generatedDelay = this.generateDelay();
    console.log(`Error on method: ${method} with delay: ${generatedDelay}`, request, errorResponse);
    return throwError(() => new Error(errorResponse)).pipe(delay(generatedDelay))
  }

  private static generateDelay(): number {
    return Math.random() * (WebUtils.MaxDelay - WebUtils.MinDelay) + WebUtils.MinDelay;
  }
}
