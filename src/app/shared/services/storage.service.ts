import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocal(storeItem: string, data: string) {
    localStorage.setItem(storeItem, JSON.stringify(data));
  }

  getLocal(storeItem: string): string {
    //TODO: fast example
    const data =  localStorage.getItem(storeItem);
    return data || 'error';
  }

  removeLocal(storeItem: string) {
    localStorage.removeItem(storeItem);
  }
}
