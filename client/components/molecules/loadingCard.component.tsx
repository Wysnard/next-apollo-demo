import React, { FunctionComponent } from "react";

import Card from "../atoms/card.component";

interface LoadingCardProps {}

const LoadingCard: FunctionComponent<LoadingCardProps> = ({}) => {
  return (
    <Card>
      <div className="max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-blue-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LoadingCard;
