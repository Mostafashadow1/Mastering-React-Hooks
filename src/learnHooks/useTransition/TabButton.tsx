import { useTransition,  } from 'react';

interface TabButtonProps {
    isActive: boolean,
    onClick: () => void,
    children: React.ReactNode
}
export default function TabButton({ children, isActive, onClick } : TabButtonProps) {
const [isPending , startTransition] = useTransition();

if(isActive) {
  return <b style={{color:"green"}}>{children}</b>
}

if(isPending) {
  return <b style={{color:"gray"}}>loading</b>
}
  return (
    <button onClick={() => {
      startTransition(() => {
        onClick();
      });
    }}>
      {children}
    </button>
  );
}
