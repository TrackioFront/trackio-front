// eventBus.ts
type EventCallback = (payload?: any) => void;

class EventBus {
  private events: { [key: string]: EventCallback[] } = {};

  on(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event: string, callback: EventCallback) {
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit(event: string, payload?: any) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(payload));
    }
  }
}

const eventBus = new EventBus();
export default eventBus;
