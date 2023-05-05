import React from "react";
import { useSnapshot } from "valtio";
import { loadingStore } from "../../store";

const Loading = () => {
  const { loading } = useSnapshot(loadingStore);
  if (loading === false) return null;
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
