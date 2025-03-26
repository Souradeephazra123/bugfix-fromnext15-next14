import { FC } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";

interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  max: number;
  id?: string;
  step: number;
  className?: string;
  props: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;
}

export const Slider: FC<SliderProps> = ({
  value,
  onValueChange,
  max,
  step,
  className,
  id,
  props,
}) => {
  return (
    <SliderPrimitive.Root
      {...props}
      className={twMerge(
        "relative flex items-center select-none touch-none w-full h-5",
        className
      )}
      id={id}
      value={value}
      onValueChange={onValueChange}
      max={max}
      step={step}
    >
      <SliderPrimitive.Track className="bg-gray-200 relative flex-grow rounded-full h-1">
        <SliderPrimitive.Range className="absolute bg-brand-gold rounded-full h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-brand-gold rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-75" />
    </SliderPrimitive.Root>
  );
};
