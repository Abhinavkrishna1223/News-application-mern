import Encryption from "./Encryption";

class Cookies extends Encryption {

    constructor() {
        super()
        this.cokConfig = {
            type: {
                string: "string", // default
                json: "json",
                bool: "bool"
            },
            // host: this.getCookieHost()
        }
    }

    set(name, value, type) {
        switch (type) {
            case this.cokConfig.type.json:
                this.setJson(name, value);
                break;
            case this.cokConfig.type.bool:
                this.setBool(name, value);
                break;
            default:
                this.setString(name, value);
                break;
        }
    }

    get(name, type = this.cokConfig.type.string) {

        switch (type) {
            case this.cokConfig.type.json:
                return this.getJson(name);
            case this.cokConfig.type.bool:
                return this.getBool(name);
            default:
                return this.getString(name);
        }
    }

    update(name, value, type = this.cokConfig.type.string) {
        switch (type) {
            case this.cokConfig.type.json:
                this.updateCookies(name, this.encodeJson(value))
                break;
            case this.cokConfig.type.bool:
                this.updateCookies(name, value)
                break;
            default:
                this.updateCookies(name, this.encode(value))
                break;
        }
    }

    getJson(name) {
        let encJson = this.getCookies(name);
        return this.decodeJson(encJson);
    }

    setJson(name, jsonVal) {
        this.setCookies(name, this.encodeJson(jsonVal));
    }

    setBool(name, boolVal) {
        this.setCookies(name, boolVal);
    }

    getBool(name) {
        return this.getCookies(name);
    }

    setString(name, strVal) {
        this.setCookies(name, this.encode(strVal))
    }

    getString(name) {
        let encText = this.getCookies(name);
        return this.decodeString(encText);
    }

    setCookies(name, value) {
        let myDate = new Date();
        myDate.setMonth(myDate.getMonth() + 3);
        // document.cookie = `${name}=${value};expires=${myDate};path=/;domain=${this.cokConfig.host};`;
        document.cookie = `${name}=${value};expires=${myDate};path=/;`;
    }

    updateCookies(name, value) {
        this.remove(name);
        let myDate = new Date();
        myDate.setMonth(myDate.getMonth() + 3);
        // document.cookie = `${name}=${value};expires=${myDate};path=/;domain=${this.cokConfig.host};`;
        document.cookie = `${name}=${value};expires=${myDate};path=/;`;
        // document.cookie =  `${name}=${value};`;
    }
    updateNoExpiryCookies(name, value) {
        this.remove(name);
        let myDate = new Date();
        document.cookie = `${name}=${value};expires=${myDate};path=/;`;
        // document.cookie =  `${name}=${value};`;
    }

    getCookies(name) {
        let allCookies = document.cookie.split(';');
        let matchedItemVal = undefined;
        allCookies.forEach(cookiesItem => {
            let cookiesItemParts = cookiesItem.split('=');
            if (cookiesItemParts[0].trim().localeCompare(name) === 0) {
                matchedItemVal = cookiesItemParts[1];
            }
        });
        return matchedItemVal;
    }
    remove(name) {
        let expireTime = new Date();
        expireTime.setMonth(expireTime.getMonth() - 12);
        document.cookie = `${name}=;expires=${expireTime};path=/;`;
    }
    removeNoExpiry(name) {
        let expireTime = new Date();
        document.cookie = `${name}=;expires=${expireTime};path=/;`;
    }

    has(name) {

        let allCookies = document.cookie.split(';');
        let matchedItemVal = undefined;
        allCookies.forEach(cookiesItem => {
            let cookiesItemParts = cookiesItem.split('=');

            if (cookiesItemParts[0].trim().localeCompare(name) === 0) {


                return matchedItemVal = cookiesItemParts[1];
            }

            // if(cookiesItemParts[0].trim().localeCompare(name)>-1){
            //     return matchedItemVal = cookiesItemParts[1];
            // }

        });
        return matchedItemVal;
    }

    alive(name) {
        return this.has(name) ? this.getBool(name) : false;
    }

}

export default new Cookies();