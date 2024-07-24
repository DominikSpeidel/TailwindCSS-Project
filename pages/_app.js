import { ClerkProvider } from "@clerk/nextjs";
import Layout from "./components/Layout";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState, useEffect } from "react";

import "@/styles/globals.css";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [reversedRecipes, setReversedRecipes] = useState([]);

  const { data: recipes, isLoading, error } = useSWR("/api/recipes", fetcher);

  useEffect(() => {
    if (recipes) {
      const reversed = [...recipes].reverse();
      setReversedRecipes(reversed);
    }
  }, [recipes]); // Überwache recipes als Abhängigkeit

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
          <Component
            {...pageProps}
            recipes={reversedRecipes}
            isLoading={isLoading}
          />
        </Layout>
      </SWRConfig>
    </ClerkProvider>
  );
}
