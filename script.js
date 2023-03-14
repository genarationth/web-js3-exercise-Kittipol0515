// Exercise 1

const numTransactions = 10;
const totalAmountSpent = 500;


const transactionFees = numTransactions * 3;
const interestFees = totalAmountSpent * 0.01;


const totalCost = transactionFees + interestFees;


console.log(`Maria should be paying $${totalCost.toFixed(2)}.`);




// Exercise 2
// part 1

const name1 = 'Add';
const name2 = 'sub';
const name3 = 'divide';
console.log(`welcome ${name1} ${name2} ${name3}`);

// part 2
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
const birthYear = 1990;
const age = calculateAge(birthYear);
console.log(age);

// part 3
function greeting(name1 , age1 , name2 , age2 , name3 , age3 ) {
    console.log('Welcome' + name1 +  ", you are" + age1 + ".Welcome" + name2 + ", you are" + age2 + ".Welcome" + name3 + ", you are" + age3);
}
greeting("Kitti" , 25 , "hosing" , 27 , "goodie" , 28);