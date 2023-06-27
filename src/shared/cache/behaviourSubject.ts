
export class BehaviorSubject<T> {
  private value: T;
  private observers: ((value: T) => void)[] = [];

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  next(value: T): void {
    this.value = value;
    this.notifyObservers();
  }

  subscribe(key: string, observer: (value: T) => void): void {
    this.observers.push(observer);
    observer(this.value); // Immediately notify the observer with the current value
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer(this.value);
    }
  }
}