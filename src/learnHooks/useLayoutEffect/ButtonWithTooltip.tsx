import { useState, useRef } from 'react';
import Tooltip from './Tooltip';

interface ButtonWithTooltipProps {
  tooltipContent: React.ReactNode;
   [key: string]: any 
}

interface TargetRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  x: number;
  y: number;
   // ... existing properties ...
   toJSON: () => any;
}
export default function ButtonWithTooltip({ tooltipContent, ...rest }: ButtonWithTooltipProps) {
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setTargetRect({
              left: rect.left,
              top: rect.top,
              right: rect.right,
              bottom: rect.bottom,
              width: rect.width,
              height: rect.height,
              x: rect.x,
              y: rect.y,
              toJSON: rect.toJSON,

            });
          }
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>
          {tooltipContent}
        </Tooltip>
      )
    }
    </>
  );
}
