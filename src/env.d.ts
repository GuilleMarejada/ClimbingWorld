/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly NEXT_PUBLIC_SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }