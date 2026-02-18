import type { CSSProperties } from "react";

import { theme } from "../../styles/theme";
import { Checkbox } from "../atoms/Checkbox";
import { IconButton } from "../atoms/IconButton";

interface EditToolbarProps {
  isEditMode: boolean;
  totalItems: number;
  selectedCount: number;
  areAllSelected: boolean;
  onSelectAllChange: (checked: boolean) => void;
  onDuplicateSelected: () => void;
  onDeleteSelected: () => void;
}

const wrapperStyle: CSSProperties = {
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.border}`,
  display: "flex",
  flexWrap: "wrap",
  gap: "14px",
  justifyContent: "space-between",
  minHeight: "64px",
  padding: "8px 24px",
};

const leftStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "14px",
};

const actionsStyle: CSSProperties = {
  alignItems: "center",
  display: "inline-flex",
  gap: "8px",
};

const countStyle: CSSProperties = {
  color: theme.colors.text,
  fontSize: "16px",
  fontWeight: 600,
  margin: 0,
};

const helperStyle: CSSProperties = {
  color: theme.colors.mutedText,
  fontSize: "13px",
  fontWeight: 500,
  margin: 0,
};

function CopyIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="4"
        width="12"
        height="14"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="8"
        width="12"
        height="14"
        rx="1.8"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 7V4h6v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="6.5"
        y="7"
        width="11"
        height="13"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 11v6M14 11v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EditToolbar({
  isEditMode,
  totalItems,
  selectedCount,
  areAllSelected,
  onSelectAllChange,
  onDuplicateSelected,
  onDeleteSelected,
}: EditToolbarProps) {
  const hasUsers = totalItems > 0;
  const canRunActions = hasUsers && selectedCount > 0;

  if (!isEditMode) {
    return (
      <section style={wrapperStyle}>
        {" "}
        <p style={helperStyle}>
          Activez le mode édition pour afficher les checkboxes, la sélection
          globale, la duplication et la suppression.
        </p>
      </section>
    );
  }

  return (
    <section style={wrapperStyle}>
      <div style={leftStyle}>
        <Checkbox
          label="Tout sélectionner"
          checked={areAllSelected}
          disabled={!hasUsers}
          hideLabel
          onChange={onSelectAllChange}
        />
        <p style={countStyle}>{selectedCount} elements selected</p>
      </div>
      <div style={actionsStyle}>
        <IconButton
          aria-label="Dupliquer"
          title="Dupliquer"
          disabled={!canRunActions}
          onClick={onDuplicateSelected}
        >
          <CopyIcon />
        </IconButton>
        <IconButton
          aria-label="Supprimer"
          title="Supprimer"
          disabled={!canRunActions}
          onClick={onDeleteSelected}
        >
          <TrashIcon />
        </IconButton>
      </div>
    </section>
  );
}
