"use client";

import { useRouter } from "next/navigation";

export function useNavigate() {
  const router = useRouter();

  const navigate = (href: string) => {
    router.push(href);
    // Ensure scroll to top happens immediately
    window.scrollTo(0, 0);
  };

  return navigate;
}
