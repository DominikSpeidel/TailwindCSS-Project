import { ClerkProvider } from "@clerk/nextjs";
import Layout from "./components/Layout";
import { SWRConfig } from "swr";
import useSWR from "swr";

import "@/styles/globals.css";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: recipes, error } = useSWR("/api/recipes", fetcher);

  if (error) {
    return <h1>Entschuldigung, etwas muss schief gelaufen sein!</h1>;
  }

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
          <Component {...pageProps} recipes={recipes} />
        </Layout>
      </SWRConfig>
    </ClerkProvider>
  );
}
