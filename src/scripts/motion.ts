// Single source of truth for "may things move?".
// The inline script in Base.astro sets <html data-motion> before first paint.
// This module keeps it in sync and broadcasts a "motionchange" event.
const KEY = "kl-motion";
const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
let sessionPaused: boolean | null = null; // used when storage is blocked

export function systemReduced(): boolean {
  return mq.matches;
}

export function userPaused(): boolean {
  if (sessionPaused !== null) return sessionPaused;
  try {
    return window.localStorage.getItem(KEY) === "off";
  } catch {
    return false;
  }
}

export function motionOn(): boolean {
  return document.documentElement.dataset.motion === "on";
}

function apply(): void {
  const state = !systemReduced() && !userPaused() ? "on" : "off";
  const root = document.documentElement;
  if (root.dataset.motion === state) return;
  root.dataset.motion = state;
  window.dispatchEvent(new CustomEvent("motionchange", { detail: { on: state === "on" } }));
}

export function setUserPaused(paused: boolean): void {
  try {
    if (paused) window.localStorage.setItem(KEY, "off");
    else window.localStorage.removeItem(KEY);
    sessionPaused = null;
  } catch {
    sessionPaused = paused; // storage blocked: remember for this page view only
  }
  apply();
}

mq.addEventListener("change", apply);
