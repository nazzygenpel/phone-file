class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index > -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyObservers(phoneNumber);
        } else {
            console.log('Phone number not found');
        }
    }
    
// For the observer Pattern 

    add(observer) {
        this.observers.push(observer);
    }

    remove(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(phoneNumber) {
        this.observers.forEach(observer => observer.notify(phoneNumber));
    }
}

class TelephoneObserver {
    constructor(name) {
        this.name = name;
    }

    notify(phoneNumber) {
        console.log('${this.name} received phone number: ${phoneNumber}');
    }
}

const phone = new Telephone();

const observer1 = new TelephoneObserver('Phone Number Printer');
const observer2 = new TelephoneObserver('Now Dialler');

phone.addObserver(observer1);
phone.addObserver(observer2);

phone.addPhoneNumber('2347023232');
phone.addPhoneNumber('0987654321');

phone.dialPhoneNumber('1234567890'); // 'Phone Number Printer received phone number: 2347023232' , 'Now Dialler received phone number: 2347023232'

phone.dialPhoneNumber('2345678901'); //  'Phone number not found'

phone.removePhoneNumber('2347023232');

phone.dialPhoneNumber('2347023232'); // This Should print 'Phone number not found'