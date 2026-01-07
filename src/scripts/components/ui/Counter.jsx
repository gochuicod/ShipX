import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  style,
  decimals = 0,
  decimal = ".",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const formattedSuffix =
    suffix && /^[a-zA-Z]/.test(suffix) ? ` ${suffix}` : suffix;

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={formattedSuffix}
          decimals={decimals}
          decimal={decimal}
          style={style}
        />
      ) : (
        `${prefix}0${formattedSuffix}`
      )}
    </span>
  );
}
