"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// /join was the application URL before the redesign. A static export can't send a
// server redirect, so this page forwards to /apply in the browser (with a link fallback).
export default function JoinRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/apply");
  }, [router]);

  return (
    <main id="main" className="mx-auto max-w-[1200px] section-pad py-24">
      <p className="text-lg">
        Applications have moved to{" "}
        <Link href="/apply" className="font-semibold underline underline-offset-4 hover:text-primary">
          /apply
        </Link>
        .
      </p>
    </main>
  );
}
