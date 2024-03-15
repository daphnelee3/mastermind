export type Color = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | '';
export type Guess = [Color, Color, Color, Color];

export interface Feedback {
  exactMatch: number;
  partialMatch: number;
}
