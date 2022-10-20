export const SessionStorage = {
  set: (key: string, value: string): Promise<void> =>
    Promise.resolve(sessionStorage.setItem(key, value)),
  get: (key: string): Promise<string | null> =>
    Promise.resolve(sessionStorage.getItem(key)),
  hasKey: (key: string): boolean =>
    Object.prototype.hasOwnProperty.call(sessionStorage, key),
  remove: (key: string): Promise<void> =>
    Promise.resolve(sessionStorage.removeItem(key)),
};
