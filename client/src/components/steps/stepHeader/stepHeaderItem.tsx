import React from 'react';

import type { StepHeaderItemType } from 'types';

interface StepHeaderItemProps extends StepHeaderItemType {
  currentIndex: number;
  activeIndex: number;
}

const StepHeaderItem = React.forwardRef<HTMLDivElement, StepHeaderItemProps>(
  ({ currentIndex, title, activeIndex }, ref) => {
    const isActive = currentIndex <= activeIndex;
    return (
      <div
        className={`rounded-full w-12 h-12 flex items-center justify-center relative z-10 ${
          isActive
            ? 'bg-primary-600 border-none text-white'
            : 'border border-gray-200 text-gray-600 bg-white cursor-not-allowed'
        }`}
        ref={ref}
      >
        {title || currentIndex}
      </div>
    );
  }
);

export default StepHeaderItem;
