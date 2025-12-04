"use client";
import { useEffect } from "react";
import styles from "./CatalogPage.module.css";
import SideBarCatalog from "../@sidebar/SideBarCatalog";
import CamperCard from "@/components/CamperCard/CamperCard";
import { useCatalogStore } from "@/lib/store/campersStore";

export default function CatalogPage() {
  const { campers, loading, error, page, total, fetchCampers } =
    useCatalogStore();

  useEffect(() => {
    fetchCampers(1, false);
  }, [fetchCampers]);

  const handleLoadMore = () => {
    fetchCampers(page + 1, true);
  };

  const hasMore = campers.length < total;

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogLayout}>
        <SideBarCatalog />
        <main className={styles.camperListMain}>
          <div className={styles.camperListWrapper}>
            {/* Error Handling */}
            {error && campers.length === 0 && (
              <div className={styles.error}>{error}</div>
            )}

            {/* Loading initial state */}
            {loading && campers.length === 0 && (
              <div className={styles.loading}>Loading campers...</div>
            )}

            {/* List */}
            {campers.length > 0 && (
              <div className={styles.camperGrid}>
                {campers.map((camper) => (
                  <CamperCard
                    key={`${camper.id}-${camper.name}`}
                    camper={camper}
                  />
                ))}
              </div>
            )}

            {/* No Results */}
            {!loading && campers.length === 0 && !error && (
              <div className={styles.noCampers}>
                No campers found. Try adjusting your filters.
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className={styles.loadMoreContainer}>
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className={styles.loadMoreButton}
                >
                  {loading ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
