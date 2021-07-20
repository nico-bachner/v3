type Shades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type ColorShades = Exclude<Shades, 0 | 8>;

type Color =
    | 'primary'
    | 'secondary'
    | `neutral-${Shades}`
    | `blue-${ColorShades}`
    | `cyan-${ColorShades}`;
