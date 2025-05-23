"use client";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { ReactNode, useState } from "react";
import { makeQueryClient } from "@/trpc/query-client";
import type { AppRouter } from "@/trpc/routers/_app";
import superjson from "superjson";
export const trpc = createTRPCReact<AppRouter>();
let clientQueryClientSingleton: QueryClient;

function getQueryClient() {
    if (typeof window === "undefined") {
        return makeQueryClient();
    }

    return (clientQueryClientSingleton ??= makeQueryClient());
}

function getUrl() {
    const base = (() => {
        if (typeof window !== "undefined") return "";

        if (process.env.NEXT_PUBLIC_APP_URL)
            return `http://${process.env.NEXT_PUBLIC_APP_URL}`;

        return "http://localhost:3000";
    })();
    return `${base}/api/trpc`;
}

export function TRPCProvider(
    props: Readonly<{
        children: ReactNode;
    }>
) {
    const queryClient = getQueryClient();
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    transformer: superjson,
                    url: getUrl(),
                    async headers() {
                        const headers = new Headers();
                        headers.set("x-trpc-source", "nexttjs-react");
                        return headers;
                    },
                }),
            ],
        })
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {props.children}
            </QueryClientProvider>
        </trpc.Provider>
    );
}
