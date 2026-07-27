export type MeetingStatus =
  | "open"
  | "limited"
  | "waitlist"
  | "closed"
  | "confirmed";

export type Meeting = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  time?: string;
  timezone?: string;
  status: MeetingStatus;
  invitationUrl?: string;
  description?: string;
  notes?: string[];
};

const meetingData: Meeting[] = [
  {
    slug: "july-2026",
    title: "July W.I.S.H. Meeting",
    date: "2026-07-31",
    displayDate: "Friday, July 31, 2026",
    time: "Log in at 9:45 a.m.",
    timezone: "PDT",
    status: "confirmed",
    description:
      "A monthly gathering centered on meaningful connection, trusted resources and genuine support.",
    notes: ["Come prepared with one Five-Star Vendor recommendation."],
  },
  {
    slug: "august-2026",
    title: "August W.I.S.H. Meeting",
    date: "2026-08-28",
    displayDate: "Friday, August 28, 2026",
    status: "confirmed",
    description:
      "Continue building relationships and sharing trusted personal and professional resources.",
    notes: ["Meeting details will be shared directly with attendees."],
  },
];

export const meetings = meetingData.sort((a, b) =>
  a.date.localeCompare(b.date),
);
