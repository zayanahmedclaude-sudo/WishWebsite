import { CalendarDays, Clock3 } from "lucide-react";
import type { Meeting } from "@/data/meetings";

export function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <article className="meeting-card">
      <div className="meeting-date-block" aria-hidden="true">
        <strong>{new Date(`${meeting.date}T12:00:00`).getDate()}</strong>
        <span>
          {new Date(`${meeting.date}T12:00:00`).toLocaleDateString("en-US", {
            month: "short",
          })}
        </span>
      </div>
      <div className="meeting-content">
        <div className="meeting-title-row">
          <h2>{meeting.title}</h2>
          <span className={`status status-${meeting.status}`}>
            {meeting.status}
          </span>
        </div>
        <p>{meeting.description}</p>
        <div className="meeting-meta">
          <span>
            <CalendarDays size={18} aria-hidden="true" />
            {meeting.displayDate}
          </span>
          {meeting.time ? (
            <span>
              <Clock3 size={18} aria-hidden="true" />
              {meeting.time} {meeting.timezone}
            </span>
          ) : null}
        </div>
        {meeting.notes?.length ? (
          <ul>
            {meeting.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
        {meeting.invitationUrl ? (
          <a className="text-link" href={meeting.invitationUrl}>
            Download invitation
          </a>
        ) : null}
      </div>
    </article>
  );
}
