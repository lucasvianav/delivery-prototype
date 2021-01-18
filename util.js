export const emailRegex = /[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}/
export const phoneRegex = /\+55 \d{2} 9\d{4}\-\d{4}/
export const priceRegex = /^R\$ \d+,\d{2}$/
export const dateRegex = /\d{2}\/\d{2}\/\d{4}/
export const timeRegex = /\d{2}:\d{2}/
export const cepRegex = /\d{5}-\d{3}/

export class CPF {
    constructor() {
        "user_strict"; function r(r) {
            for (var t = null, n = 0; 9 > n; ++n)
                t += r.toString().charAt(n) * (10 - n); var i = t % 11; return i = 2 > i ? 0 : 11 - i;
        } function t(r) {
            for (var t = null, n = 0; 10 > n; ++n)
                t += r.toString().charAt(n) * (11 - n); var i = t % 11; return i = 2 > i ? 0 : 11 - i;
        } var n = false, i = true; 
        
        this.isValid = o => {
            for (var a = o.replace(/\D/g, ""), u = a.substring(0, 9), f = a.substring(9, 11), v = 0; 10 > v; v++)
                if ("" + u + f === "" + v + v + v + v + v + v + v + v + v + v + v)
                    return n; var c = r(u), e = t(u + "" + c); return f.toString() === c.toString() + e.toString() ? i : n;
        };
    }
}
