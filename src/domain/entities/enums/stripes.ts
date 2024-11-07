export enum Stripes {
    None = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five=5,
    Six=6
}

export function getStripesFromValue(value: number):string{
    const entry = Object.entries(Stripes).find(([key, val]) => val === value);
    return entry ? entry[0] : null
    
}
