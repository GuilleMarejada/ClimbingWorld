// globals.d.ts

/// <reference types="astro/client" />

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }

    var dataLayer: any[];
    var gtag: (...args: any[]) => void;
}

// Need this to make it a module
export { };