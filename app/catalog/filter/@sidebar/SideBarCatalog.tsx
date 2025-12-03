"use client";
import { useState, ChangeEvent } from "react";
import {
  LucideMapPin,
  LucideWind,
  LucideTv,
  LucideShowerHead,
  LucideUtensils,
  LucideGrid,
  LucideSettings,
} from "lucide-react";

import styles from "./SideBarCatalog.module.css";
import { useCamperStore } from "@/lib/store/campersStore";
import { Filters } from "@/types/camper";

// Типи
interface LocalFilters {
  location: string;
  form: string;
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;
  transmission: string;
}

interface FilterCheckboxProps {
  name: keyof LocalFilters | "automatic";
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface FilterRadioProps {
  name: keyof LocalFilters;
  value: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Компонент Checkbox
const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  name,
  label,
  icon,
  checked,
  onChange,
}) => {
  const className = `${styles.filterItem} ${
    checked ? styles.filterItem_checked : ""
  }`;
  return (
    <label className={className}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.filterHiddenInput}
      />
      <div className={styles.filterIcon}>{icon}</div>
      <span className={styles.filterLabel}>{label}</span>
    </label>
  );
};

// Компонент Radio
const FilterRadio: React.FC<FilterRadioProps> = ({
  name,
  value,
  label,
  icon,
  checked,
  onChange,
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

// Головний компонент Sidebar
const SideBarCatalog: React.FC = () => {
  const setGlobalFilters = useCamperStore((state) => state.setFilters);

  const [localFilters, setLocalFilters] = useState<LocalFilters>({
    location: "",
    form: "",
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
    transmission: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "automatic") {
        setLocalFilters((prev) => ({
          ...prev,
          transmission: checked ? "automatic" : "",
        }));
      } else {
        setLocalFilters((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (type === "radio") {
      setLocalFilters((prev) => ({ ...prev, [name]: value }));
    } else {
      setLocalFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSearch = () => {
    setGlobalFilters(localFilters as unknown as Filters);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Location input */}
      <div className={styles.mb6}>
        <label className={styles.sidebarLabel}>Location</label>
        <div className={styles.sidebarInputWrapper}>
          <input
            type="text"
            name="location"
            value={localFilters.location}
            onChange={handleChange}
            placeholder="Kyiv, Ukraine"
            className={styles.sidebarInput}
          />
          <LucideMapPin className={styles.sidebarIconInside} />
        </div>
      </div>

      {/* Filters */}
      <div className={styles.mb6}>
        <h3 className={styles.sidebarSectionTitle}>Filters</h3>
        <h4 className={styles.sidebarBlockTitle}>Vehicle equipment</h4>
        <div className={styles.filterGrid}>
          <FilterCheckbox
            name="AC"
            label="AC"
            icon={<LucideWind className={styles.filterIconSvg} />}
            checked={localFilters.AC}
            onChange={handleChange}
          />
          <FilterCheckbox
            name="automatic"
            label="Automatic"
            icon={<LucideSettings className={styles.filterIconSvg} />}
            checked={localFilters.transmission === "automatic"}
            onChange={handleChange}
          />
          <FilterCheckbox
            name="kitchen"
            label="Kitchen"
            icon={<LucideUtensils className={styles.filterIconSvg} />}
            checked={localFilters.kitchen}
            onChange={handleChange}
          />
          <FilterCheckbox
            name="TV"
            label="TV"
            icon={<LucideTv className={styles.filterIconSvg} />}
            checked={localFilters.TV}
            onChange={handleChange}
          />
          <FilterCheckbox
            name="bathroom"
            label="Bathroom"
            icon={<LucideShowerHead className={styles.filterIconSvg} />}
            checked={localFilters.bathroom}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Vehicle type */}
      <div className={styles.mb8}>
        <h4 className={styles.sidebarBlockTitle}>Vehicle type</h4>
        <div className={styles.radioGrid}>
          <FilterRadio
            name="form"
            value="panelTruck"
            label="Van"
            icon={<LucideGrid className={styles.filterIconSvg} />}
            checked={localFilters.form === "panelTruck"}
            onChange={handleChange}
          />
          <FilterRadio
            name="form"
            value="fullyIntegrated"
            label="Fully Integrated"
            icon={<LucideGrid className={styles.filterIconSvg} />}
            checked={localFilters.form === "fullyIntegrated"}
            onChange={handleChange}
          />
          <FilterRadio
            name="form"
            value="alcove"
            label="Alcove"
            icon={<LucideGrid className={styles.filterIconSvg} />}
            checked={localFilters.form === "alcove"}
            onChange={handleChange}
          />
        </div>
      </div>

      <button onClick={handleSearch} className={styles.sidebarBtn}>
        Search
      </button>
    </aside>
  );
};

export default SideBarCatalog;
