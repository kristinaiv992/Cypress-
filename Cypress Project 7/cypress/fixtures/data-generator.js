class DataGenerator {
    generateID () {
        let data = ''
        let characters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
        let charactersLength = characters.length
        for (let i = 0; i < charactersLength; i++) {
            data +=characters.charAt(Math.floor(Math.random() * charactersLength))
            
        }
        return data
    }

    generateEmail() {
        let values = '`abcdefghijklmnopqrstuvwxyz0123456789'
        let email = ''
        let temp

        for (let i = 0; i < 10; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email+=temp            
        }
         email += '@'

         for (let i = 0; i < 8; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email+=temp 
         }

         email +='.com'
         return email
    }

    generateNumbers(){
        let numbers = Math.floor(Math.random() * 9000000000) + 100000000
        return numbers.toString()
    }
}