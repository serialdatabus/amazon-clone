import React, { useEffect, useState /*useState*/ } from "react";
import { HistoryItem } from "./HistoryItem";
import "../../styles/BrowsingHistory.css";

export default function BrowsingHistory() {
  const [items, setItems] = useState([2343324, 213213, 21321, 3, 43345]);

  useEffect(() => {
    return () => {};
  }, []);

  const thereisItems = items.length > 0;
  const itemsAreEmpty = items.length === 0;

  return (
    <>
      {thereisItems && (
        <div className="browsing-history">
          {items.map((item, index) => (
            <HistoryItem
              hideDate={index > 0}
              onDelete={() => setItems(items.slice(0, -1))}
            />
          ))}

          <HistoryItem fullhistory />

          <div class="history-grey-bar"></div>
        </div>
      )}

      {itemsAreEmpty && (
        <>
          {" "}
          <h4 className="no-items-first-text">
            Your shopping history is empty
          </h4>
          <p className="no-items-second-text">
            Check back here to see items you shop for on any device.
          </p>
        </>
      )}
    </>
  );
}
