# omp-a2a-demo

A tiny fixture repository for the A2A pair-3 direct run.

The rate limiter in `src/limiter.ts` allows 20 requests per minute per caller,
using a sliding window of timestamps.
