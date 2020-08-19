//Describe, It, Test, Expect
//two ways to define the describe block function or arrow function
describe("Arrow function", () => {
    describe('Nested function', function () {
        it('Should open some website', function () {
            
        });

        it('Go to the login section', async function () {
            
        });

        test('User can fill login form', () => {
            
            //the expect function, expects two values, compares to values. It's like an assertion
            expect(getFruit()).toBe('apple')
        })
    })

})

//async await examples

async function multiply(a, b) {
    return a * b
}

async function foo(){
    let result = await multiply(5,10)
    return result
}

(async function () {
    let result = await foo()
    console.log(result)
})()