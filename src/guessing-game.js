class GuessingGame {
    constructor() {
         this.min       = 0;
         this.max       = 0 ;
         this.middle    = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min <= this.max) {
            this.middle = Math.round((this.min + this.max) / 2);
            console.log(" min=" + this.min + " middle=" + this.middle + " max=" + this.max);
        }
        return this.middle;
    }

    lower() {
        this.max =  this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;