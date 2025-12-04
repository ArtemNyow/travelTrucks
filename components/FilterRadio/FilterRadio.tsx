import { LocalFilters } from "@/app/catalog/filter/@sidebar/SideBarCatalog";
import styles from "./FilterRadio.module.css";
import { ChangeEvent } from "react";
const FilterRadio = ({
  name,
  value,
  label,
  icon,
  checked,
  onChange,
}: {
  name: keyof LocalFilters;
  value: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const className = `${styles.filterItem} ${styles.radioItemH24} ${
    checked ? styles.filterItem_checked : ""
  }`;
  return (
    <label className={className}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.filterHiddenInput}
      />
      <div className={styles.filterIcon}>{icon}</div>
      <span className={styles.filterLabel}>{label}</span>
    </label>
  );
};

export default FilterRadio;
