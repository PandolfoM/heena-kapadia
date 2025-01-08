declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    RECAPTCHA_SECRET: string;
  }
}
