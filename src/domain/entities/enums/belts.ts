export enum Belt {
    WHITE="white",
    BLUE="blue",
    PURPLE="purple",
    BROWN="brown",
    BLACK="black"


}
export function getBeltFromValue(value: string){
    const entry = Object.entries(Belt).find(([key, val]) => val === value);
    return entry ? entry[1] : null
    
}
