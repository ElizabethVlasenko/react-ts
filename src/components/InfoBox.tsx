import { ReactNode } from "react";

//discriminated unions
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxType = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxType;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
