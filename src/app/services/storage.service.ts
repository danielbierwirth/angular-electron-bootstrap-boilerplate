import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
// StorageService to persist data in local json store
// Class uses electron-store module from https://github.com/sindresorhus/electron-store
@Injectable()
export class StorageService {
  // The electron store object.
  private store;
  // Creates new store object and initialize JSON store with given storeName
  // at data path by default.
  // By default, JSON store will be created if no file found at given location
  constructor(@Inject('storeName') storeName: string) {
    if (this.isElectron()) {
      const Store = window.require('electron-store');
      this.store = new Store({'name': storeName});
      // Log store location.
      console.log('initialized store at path ' + this.store.path);
    } else {
      console.log('persistent store cannot be created outside electron environment');
    }
  }

  // Check if app is run as electron app
  isElectron = () => {
    return window && window.process && window.process.type;
  }

  // Returns true if key exists in JSON store.
  has(key) {
    return this.store.has(key);
  }

  // Set key value pair. In case key exists, value will be updated in store
  // You can use dot-notation in a key to access nested properties.
  set(key, value) {
    this.store.set(key, value);
  }

  // Get the value for a given key from store.
  // You can use dot-notation in a key to access nested properties.
  get(key) {
    return this.store.get(key);
  }

  // Deletes given key-value-pair
  del(key) {
    this.store.delete(key);
  }

  // Get the store object.
  getStore() {
    return this.store.store;
  }

  // Clear all items in JSON store
  // Note: be careful as whole JSON content will be dismissed
  clear() {
    this.store.clear();
  }
}
