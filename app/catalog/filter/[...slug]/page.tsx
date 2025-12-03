"use client";
import styles from "./CatalogPage.module.css";
import SideBarCatalog from "../@sidebar/SideBarCatalog";

export default function CatalogPage() {
  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogLayout}>
        <SideBarCatalog />

        {/* <main className={styles.camperListMain}>
          <div className={styles.camperListWrapper}>
            {campers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>

          {isLoading && <p>Loading...</p>}

          {!isLoading && hasMore && (
            <button onClick={loadMore} className={styles.loadMoreBtn}>
              Load more
            </button>
          )}
        </main> */}
      </div>
    </div>
  );
}
