import { ClerkProvider } from "@clerk/nextjs";
import Layout from "./components/Layout";
import { SWRConfig } from "swr";

import "@/styles/globals.css";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

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
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ClerkProvider>
  );
}
