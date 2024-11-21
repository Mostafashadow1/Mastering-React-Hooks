import { useRef,  useState, ReactNode, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer';

interface TooltipProps {
    children: ReactNode;
    targetRect: DOMRect ;
}


export default function Tooltip({ children, targetRect } : TooltipProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const [tooltipHeight, setTooltipHeight] = useState(0);

  // This artificially slows down rendering
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Do nothing for a bit...
  }

  useLayoutEffect(() => {
    const height = ref.current?.getBoundingClientRect().height ?? 0;
    setTooltipHeight(height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}
