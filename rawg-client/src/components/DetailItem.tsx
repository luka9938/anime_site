import React from "react";

interface DetailItemProps {
  label: string;
  value: string | number | null | undefined;
}

const DetailItem = ({ label, value }: DetailItemProps) => (
  <p className="animedetailsP">
    <strong>{label}:</strong> {value || "N/A"}
  </p>
);

export default DetailItem;
