export const LocalStorage = {
  get: (key: string): Promise<string | null> =>
    Promise.resolve(localStorage.getItem(key)),
  set: (key: string, value: string): Promise<void> =>
    Promise.resolve(localStorage.setItem(key, value)),
  hasKey: (key: string): boolean =>
    Object.prototype.hasOwnProperty.call(localStorage, key),
  remove: (key: string): Promise<void> =>
    Promise.resolve(localStorage.removeItem(key)),
};
