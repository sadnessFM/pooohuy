export function  GetRandColor() {
    return "#" + ((1<<24)*Math.random() | 0).toString(16)
}

export function GetRGBAColor() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
