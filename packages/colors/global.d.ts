type Shades = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ColorShades = Exclude<Shades, 1 | 9>;

type Color =
    | `neutral-${Shades}`
    | `blue-${ColorShades}`
    | `cyan-${ColorShades}`;
