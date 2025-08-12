import { GradientText } from "@/components/ui/gradient-text";

export function GradientTextDemo() {
  return (
    <h1 
      className="text-center font-quantico font-bold text-5xl tracking-widest md:text-6xl lg:text-7xl xl:text-8xl"
      style={{ fontFamily: "var(--font-quantico) !important" }}
    >
       <GradientText> AI DEVELOPER</GradientText>
    </h1>
  );
}
