import { useEffect, useRef} from "react"
import type {ReactNode} from 'react'

type Props = {
    children: ReactNode;
}

// TO DO: figure out why this isn't working 
const RevealOnScroll = ({children}: Props ) => {
    const ref=useRef<HTMLDivElement | null>(null) 

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && ref.current) {
                ref.current.classList.add("visible");
            }
        }, {threshold: 0.2, rootMargin: "0px 0px -50px 0px"});

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    });

    return <div ref={ref} className="reveal"> 
        {children}
    </div>
}

export default RevealOnScroll;