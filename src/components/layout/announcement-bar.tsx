import Link from "next/link";
import { announcement } from "@/lib/community";

/** Deadline bar shown on every page while a cohort is open (set in community.ts). */
export function AnnouncementBar() {
  if (!announcement) return null;
  return (
    <Link
      href="/apply"
      className="block bg-primary px-4 py-2.5 text-center text-[15px] font-semibold text-white transition-colors hover:bg-[#e65c00]"
    >
      Applications for the {announcement.label} Build cohort close {announcement.deadline}. Apply now →
    </Link>
  );
}
