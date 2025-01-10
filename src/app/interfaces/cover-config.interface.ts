export default interface CoverConfig {
  src: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  shape: "circle" | "square";
  classList: string[];
}
