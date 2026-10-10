export class SlidingWindowLimiter {
  private readonly hits = new Map<string, number[]>();
  constructor(private readonly limit = 20, private readonly windowMs = 60_000) {}

  allow(caller: string, now = Date.now()): boolean {
    const recent = (this.hits.get(caller) ?? []).filter((t) => t > now - this.windowMs);
    if (recent.length >= this.limit) {
      this.hits.set(caller, recent);
      return false;
    }
    recent.push(now);
    this.hits.set(caller, recent);
    return true;
  }
}
