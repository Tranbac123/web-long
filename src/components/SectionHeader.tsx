import "./SectionHeader.css";

interface SectionHeaderProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: string;
  /** Optional right-aligned action (e.g. "View all"). */
  action?: React.ReactNode;
  as?: "h2" | "h3";
}

/** Eyebrow + large heading row used to open most sections. */
export default function SectionHeader({
  eyebrow,
  title,
  action,
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <p className="eyebrow section-header__eyebrow">{eyebrow}</p>}
        <Tag className="section-header__title">{title}</Tag>
      </div>
      {action && <div className="section-header__action">{action}</div>}
    </div>
  );
}
