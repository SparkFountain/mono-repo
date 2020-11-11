export interface CollectableObject {
  name: string;
  icon: string;
  style: {
    top: number;
    left: number;
    transform?: string;
    opacity?: number;
  };
  classes?: string[];
}
