import classList from "@/utils/classList";
import "../common.css";
import css from "./Icon.module.css";

export type IconName = (typeof ICONS)[number];
export type IconColor = (typeof ICON_COLORS)[number];

export const ICONS = ["logo", "transmission", "star", "map", "fuel", "error", "car"] as const;

export const ICON_COLORS = ["inherit", "gray", "gray-light", "button", "button-hover", "rating", "grey-green", "olive", "green-hover", "error"] as const;

const DEFAULT_ICON_SIZES: {
  [key in IconName]: {
    width: number;
    height: number;
  };
} = {
  logo: {
    width: 136,
    height: 16,
  },
  map: {
    width: 20,
    height: 20,
  },
  transmission: {
    width: 20,
    height: 20,
  },
  star: {
    width: 16,
    height: 16,
  },
  fuel: {
    width: 20,
    height: 20,
  },
  error: {
    width: 24,
    height: 24,
  },
  car: {
    width: 20,
    height: 20,
  },
};

const DEFAULT_ICON_COLOR: {
  [key in IconName]: IconColor;
} = {
  logo: "inherit",
  map: "inherit",
  transmission: "inherit",
  star: "gray-light",
  fuel: "inherit",
  error: "error",
  car: "inherit",
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  color?: IconColor;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({ name, color = DEFAULT_ICON_COLOR[name], width = DEFAULT_ICON_SIZES[name].width, height = DEFAULT_ICON_SIZES[name].height, className, ...props }: IconProps): React.ReactNode {
  return (
    <svg width={width} height={height} className={classList(className, css[`icon--${color}`])} {...props}>
      <use href={`/icons/sprite.svg#${name}`}></use>
    </svg>
  );
}
