import React from 'react';

import { StepHeaderItemType } from 'types';

import StepHeaderItem from 'components/steps/stepHeader/stepHeaderItem';

interface StepHeaderProps {
  items: StepHeaderItemType[];
  activeIndex: number;
  className?: string;
}

const StepHeader: React.FC<StepHeaderProps> = ({
  items,
  activeIndex,
  className,
}) => {
  const [progress, setProgress] = React.useState('0px');

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const stepItemsRef = React.useRef<HTMLDivElement[]>([]);

  const getOffset = React.useCallback((active: number, length: number) => {
    if (active === length - 1) return '100%';
    const wrapperEl = wrapperRef.current;
    const stepItemsEl = stepItemsRef.current;

    if (wrapperEl && stepItemsEl[active] && stepItemsEl[active + 1]) {
      const wrapperLeft = wrapperEl.getBoundingClientRect().left;
      const { right, left, width } =
        stepItemsEl[active].getBoundingClientRect();
      const nextIemLeft = stepItemsEl[active + 1]?.getBoundingClientRect().left;

      return `${-wrapperLeft + left + width + (nextIemLeft - right) / 2}px`;
    }
    return '0px';
  }, []);

  React.useEffect(() => {
    setProgress(getOffset(activeIndex, items.length));
  }, [activeIndex, items, getOffset]);

  return (
    <div
      className={`flex justify-between relative max-w-[400px] mx-auto ${className}`}
      ref={wrapperRef}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1"
        style={{
          background: `linear-gradient(to right,var(--color-primary-600) ${progress}, var(--color-gray-100)  ${progress}, var(--color-gray-100)  100%)`,
        }}
      />
      {items.map(({ title, onClick }, index) => (
        <StepHeaderItem
          key={title}
          title={title}
          currentIndex={index}
          activeIndex={activeIndex}
          onClick={onClick}
          ref={(el) => {
            if (el) {
              stepItemsRef.current[index] = el;
            }
          }}
        />
      ))}
    </div>
  );
};

StepHeader.defaultProps = {
  className: '',
};

export default StepHeader;
