export interface Decoration {
  icon: string;
  style: {
    top: number;
    left: number;
    transform?: string;
    opacity?: number;
  };
  classes?: string[];
}
