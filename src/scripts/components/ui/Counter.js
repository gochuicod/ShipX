// components/Counter.jsx
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  style,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate the first time
    threshold: 0.5, // start when 50% is visible
  });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          style={style}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
