class Calculator {
        constructor() {
            this.result = 0;
        }
        add(value) {
            this.result += value
            return this

        }
        less(value) {
            this.result -= value
            return this
        }
        compute() {
            return this.result
        }
}

const c = new Calculator

console.log(c.add(6).add(3).less(7).compute())