'use client'

import "./globals.css";
import Header from "@/app/components/header/Header";
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {RepositoryProvider} from "@/app/RepositoryProvider";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] =  React.useState(() => new QueryClient());


    return (
        <QueryClientProvider client={queryClient}>
            <RepositoryProvider>
            <html lang="en">
                <body>
                    <Header/>
                    {children}
                <div id={"portal-here"}></div>
                </body>
            </html>
            </RepositoryProvider>
        </QueryClientProvider>
    );
}
