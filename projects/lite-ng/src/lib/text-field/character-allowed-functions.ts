export var chrAllowedNumbersOnly : Function = (chr:any) => "0123456789".includes(chr);
export var chrAllowedLettersOnly : Function = (chr:any) => "qwertyuiopasdfghjklzxcvbnm".toUpperCase().includes(chr?.toUppercase());
