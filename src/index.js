module.exports = function toReadable (number) {
    let str = number.toString();
    let map1 = new Map([
      [0, 'zero'],
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
      [7, 'seven'],
      [8, 'eight'],
      [9, 'nine']
    ]);
    let map2 = new Map([
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen']
    ]);
    let map3 = new Map([
        [2, 'twenty'],
        [3, 'thirty'],
        [4, 'forty'],
        [5, 'fifty'],
        [6, 'sixty'],
        [7, 'seventy'],
        [8, 'eighty'],
        [9, 'ninety']
    ]);
    let map4 = new Map([
        [1, 'one hundred'],
        [2, 'two hundred'],
        [3, 'three hundred'],
        [4, 'four hundred'],
        [5, 'five hundred'],
        [6, 'six hundred'],
        [7, 'seven hundred'],
        [8, 'eight hundred'],
        [9, 'nine hundred']
    ]);
    if(str.length==1){
      return map1.get(number);
    }
    else if(str.length==2 && str.charAt(0)==='1'){
      return map2.get(number);
    }
    else if(str.length==2 && str.charAt(1)==='0'){
      return map3.get(parseInt(str.charAt(0)));
    }
    else if(str.length==2){
        return map3.get(parseInt(str.charAt(0))) + ' ' + map1.get(parseInt(str.charAt(1)));
    }
    else if(str.length==3 && str.charAt(1)==='0' && str.charAt(2)==='0'){
        return map4.get(parseInt(str.charAt(0)));
    }
    else if(str.length==3 && str.charAt(1)==='0'){
        return map4.get(parseInt(str.charAt(0))) + ' ' + map1.get(parseInt(str.charAt(2)));
    }
    else if(str.length==3 && str.charAt(1)==='1'){
        return map4.get(parseInt(str.charAt(0))) + ' ' + map2.get(parseInt(str.substr(1)));
    }
    else if(str.length==3 && str.charAt(2)==='0'){
        return map4.get(parseInt(str.charAt(0))) + ' ' + map3.get(parseInt(str.charAt(1)));
    }
    else if(str.length==3){
        return map4.get(parseInt(str.charAt(0))) + ' ' + map3.get(parseInt(str.charAt(1))) + ' ' + map1.get(parseInt(str.charAt(2)));
    }
}
