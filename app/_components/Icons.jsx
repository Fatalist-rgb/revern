export const Arrow = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowL = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);
export const ArrowR = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Chevron = (p) => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const Plus = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Search = (p) => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...p}>
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
  </svg>
);
export const User = (p) => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...p}>
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
  </svg>
);
export const Heart = (p) => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 20s-7-4.6-9.2-9.1C1.3 7.7 3 4.8 6 4.8c1.9 0 3.2 1.1 4 2.3.8-1.2 2.1-2.3 4-2.3 3 0 4.7 2.9 3.2 6.1C19 15.4 12 20 12 20z" />
  </svg>
);
export const Cart = (p) => (
  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 4h2l2.2 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 8H6" />
    <circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" />
  </svg>
);
export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const social = {
  Instagram: (p) => (<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>),
  Facebook: (p) => (<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" {...p}><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.8c0-.5.4-.8 1-.8z" /></svg>),
  YouTube: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M22 12c0-2-.2-3-.6-3.8-.4-.7-1-1-1.7-1.1C18 6.8 12 6.8 12 6.8s-6 0-7.7.3c-.7.1-1.3.4-1.7 1.1C2.2 9 2 10 2 12s.2 3 .6 3.8c.4.7 1 1 1.7 1.1 1.7.3 7.7.3 7.7.3s6 0 7.7-.3c.7-.1 1.3-.4 1.7-1.1.4-.8.6-1.8.6-3.8zM10 15V9l5 3z" /></svg>),
  Vimeo: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M22 7.4c-.1 2-1.5 4.7-4.2 8.2-2.8 3.6-5.2 5.4-7.1 5.4-1.2 0-2.2-1.1-3-3.3l-1.6-6C2.4 9.4 1.8 8.3 1.2 8.3c-.1 0-.6.3-1.2.8L0 8c1.3-1.1 2.5-2.3 3.7-3.5 1.6-1.4 2.9-2.2 3.7-2.3 1.9-.2 3.1 1.1 3.6 4 .5 3 .8 4.9 1 5.6.5 2.2 1 3.3 1.6 3.3.5 0 1.2-.7 2.1-2.2.9-1.5 1.4-2.6 1.5-3.4.1-1-.3-1.5-1.1-1.5-.4 0-.8.1-1.3.3.9-2.9 2.5-4.3 4.9-4.2 1.8.05 2.6 1.3 2.5 3.6z" /></svg>),
};
