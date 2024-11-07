export enum Belt {
    WHITE=1,
    BLUE=2,
    PURPLE=3,
    BROWN=4,
    BLACK=5,
    RED_AND_BLACK=6,
    


}
export function getBeltFromValue(value: number){
    const entry = Object.entries(Belt).find(([key, val]) => val === value);
    return entry ? entry[1] : null
    
}
