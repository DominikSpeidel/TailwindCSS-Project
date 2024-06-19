import { ClerkProvider } from "@clerk/nextjs";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "hover:bg-slate-400 text-sm normal-case",
        },
        signIn: {
          variables: { colorPrimary: "blue" },
        },
        signUp: {
          variables: { colorPrimary: "blue" },
        },
      }}
      {...pageProps}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
