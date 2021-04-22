import React from "react";
import ContentLoader from "react-content-loader";

function LoaderBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={3}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#fafafa"
      foregroundColor="#fe5f1e"
    >
      <circle cx="146" cy="76" r="69" />
      <rect x="0" y="159" rx="9" ry="9" width="280" height="24" />
      <rect x="0" y="210" rx="9" ry="9" width="280" height="84" />
      <rect x="0" y="314" rx="9" ry="9" width="90" height="44" />
      <rect x="133" y="315" rx="9" ry="9" width="150" height="44" />
    </ContentLoader>
  );
}

export default LoaderBlock;
