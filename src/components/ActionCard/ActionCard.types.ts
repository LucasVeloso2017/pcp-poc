import { ElementType } from "react";

export interface ActionCardProps {
  icon: ElementType;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
  iconColor?: string;
  isActive?: boolean;
}
