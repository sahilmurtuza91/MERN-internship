// Registration System
const prompt = require("prompt-sync")({ sigint: true });

// user Database
let users = [];

// Total bank balance
let bankBalance = 999999;

// accountNumber
let accountNumber = 10000;

// regex pattern
const nameRegex = /^[A-Za-z]{4,20}( [A-Za-z]{4,20})*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

// check duplicate
function isDuplicate(Phone, email) {
    return users.some(function (user) {
        return user.Phone === Phone || user.email === email;
    });
}

// create Account
function registerUsers() {
    console.clear();
    console.log("===== Create New Account =====");


    let name = prompt('Enter the name: ')
    while (!nameRegex.test(name)) {
        console.log("Invalid name Character must be in between 4-20 character");
        name = prompt("Enter valid name: ");
    }

    let email = prompt("Enter Email: ");
    while (!emailRegex.test(email)) {
        console.log("Invalid email");
        email = prompt("Enter Valid Email: ");
    }

    let Phone = prompt("Enter Number: ");
    while (!phoneRegex.test(Phone)) {
        console.log("Phone must be exactly 10 digits");
        Phone = prompt("Enter Number: ");
    }

    if (isDuplicate(Phone, email)) {
        console.log("User already exists with this email or phone");
        return;
    }

    // Generate account number
    accountNumber += 100;

    let newUser = {
        accountNumber: accountNumber,
        name: name,
        email: email,
        Phone: Phone,
        Balance: 0,
        loanTotals: [0, 0, 0],         // home lona, business loan, education loans
        emiCosts: [0, 0, 0],          // Stores monthly EMI amount
        emiCount: [0, 0, 0],        // cont the remaing EMI
        loanStatus: [false, false, false] // stores the loan activity
    };
    users.push(newUser);
    console.log("Account Created Successfully!");
    console.log(`Account Number: ${accountNumber}`)
}

// Login System
function loginUser() {
    console.clear();
    console.log("===== Login =====");

    let accNum = Number(prompt('Enter account number: '));
    let phoneNum = prompt("Enter Phone Number: ");

    let user = users.find(function (user) {
        return user.accountNumber === accNum && user.Phone === phoneNum;
    })

    if (!user) {
        console.log("Invalid credentials");
        return;
    }

    console.log("Login Successful!");
    console.log(`Welcome, ${user.name}`);

    // call the user Dashboard
    userDashboard(user);
}

// user Dashboard
function userDashboard(user) {
    while (true) {
        console.clear();
        console.log("\n===== USER DASHBOARD =====");
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Check Balance");
        console.log("4. Apply Loans")
        console.log("5. Pay EMI")
        console.log("6. Update Details")
        console.log("7. Account Details")
        console.log("8. Logout");

        let choice = prompt("Enter choice: ");

        switch (choice) {
            case "1": depositMoney(user);
                break;
            case "2": withdrawMoney(user);
                break;
            case "3": checkBalance(user);
                break;
            case "4": applyLoan(user);
                break;
            case "5": payEMI(user);
                break;
            case "6": updateUserDetails(user);
                break;
            case "7": accountDetails(user);
                break;
            case "8": console.log("Logging out...");
                return;
            default:
                console.log("Invalid choice");
                prompt("Press Enter to continue...");
        }
    }
}

// Deposite Money
function depositMoney(user) {
    let amount = Number(prompt("Enter amount to deposit: "));

    // check positive amount
    while (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount!");
        amount = Number(prompt("Enter valid amount to deposit: "));
    }
    user.Balance += amount; // update account balance

    console.log(`Deposited amount: ₹${amount}`);
    console.log(`Total balance: ₹${user.Balance}`);
    prompt("Press Enter to continue...");
}

// Withdraw money
function withdrawMoney(user) {
    let amount = Number(prompt('Entre amount to withdraw: '));

    // check amount is positive
    while(isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        amount = Number(prompt('Entre valid amount to withdraw: '));
    }

    if (user.Balance < amount) {
        console.log("Insuffucient fund to withdraw money!")
        prompt("Press Enter to continue...");
        return;
    }

    user.Balance -= amount;

    console.log("Withdraw amount: ₹", amount);
    console.log(`Total remaining balance: ₹${user.Balance}`);
    prompt("Press Enter to continue...");
}

// Check balance
function checkBalance(user) {
    console.log(`Total balance: ₹${user.Balance}`);
    prompt("Press Enter to continue...");
}

// amount validity
function amountValidity(amount) {
    // amount and its type validation
    while (amount <= 0 || isNaN(amount)) {
        console.log("Invalid Amount");
        amount = Number(prompt("Enter loan amount: "));
    }
    // check bank has sufficient fund to give loan
    while (bankBalance < amount) {
        console.log(" Bank has insufficient funds");
        amount = Number(prompt("Enter smaller loan amount: "));
        while (amount <= 0 || isNaN(amount)) {
            console.log("Invalid Amount");
            amount = Number(prompt("Enter loan amount: "));
        }
    }
    return amount;
}

// Intrest rate calculation
function getInterest(month, lonType) {
    let baseRate = 0;
    if (month >= 1 && month <= 3) { baseRate = 10 }
    else if (month <= 6) { baseRate = 12 }
    else if (month <= 12) { baseRate = 15 }
    else if (month <= 36) { baseRate = 20 }

    let additionalRate = 0;
    if (lonType === 0) { additionalRate = 2 } // home loan
    else if (lonType === 1) { additionalRate = 5 } //business loan

    return baseRate + additionalRate;
}


// Apply Loans
function applyLoan(user) {
    console.clear();

    console.log("\n===== Apply Loan =====");
    console.log("1. Home Loan");
    console.log("2. Business Loan");
    console.log("3. Education Loan");
    console.log("4. Back")

    let choice = Number(prompt("Select loan type: "));
    if(choice === 4){
        return;
    }
    let type = choice -1;
    while (type < 0 || type > 2) {
        console.log("Select a valid loan: ");
        type = Number(prompt("Select loan type: ")) - 1;

    }

    // check active loan
    if (user.loanStatus[type]) {
        console.log("You already have this loan active");
        prompt("Press Enter to continue...")
        return;
    }
    let amount = amountValidity(Number(prompt("Enter loan amount: ")));

    let month = Number(prompt("Entre the month (1-36): "));
    while (month < 1 || month > 36 || isNaN(month)) {
        console.log("Please enter the valid months: ")
        month = Number(prompt("Entre the month (1-36): "));
    }

    // intrest calculation
    let rate = getInterest(month, type);
    let intrest = (amount * rate) / 100;
    let totalAmount = amount + intrest;
    let emi = Number((totalAmount / month).toFixed(2)); // because toFind() return string

    // update user
    user.loanTotals[type] = totalAmount;
    user.emiCosts[type] = emi;
    user.emiCount[type] = month;
    user.loanStatus[type] = true;

    // money ternsfer
    user.Balance += amount;
    bankBalance -= amount;

    console.log("Loan approved successfully");
    console.log(`Total payable amount: ${totalAmount}`);
    console.log(`EMI ${emi} for ${month} months`);
    prompt("Press Enter to continue...")
}

// Pay EMI
function payEMI(user) {
    console.clear();
    console.log("\n===== Pay EMI =====");
    console.log("1. Home Loan");
    console.log("2. Business Loan");
    console.log("3. Education Loan");

    let type = Number(prompt("Select loan type: ")) - 1;

    while (type < 0 || type > 2) {
        console.log("Select a valid loan: ");
        type = Number(prompt("Select loan type: ")) - 1;
    }

    if (!user.loanStatus[type]) {
        console.log("No active loan");
        prompt("Press Enter to continue...");
        return;
    }

    let emi = user.emiCosts[type];
    if (user.Balance < emi) {
        console.log("Insufficient Balance to pay EMI!");
        prompt("Press Enter to continue...");
        return;
    }
    // update the user

    user.Balance = Number((user.Balance - emi).toFixed(2));
    bankBalance += emi;
    user.loanTotals[type] = Number((user.loanTotals[type] - emi).toFixed(2));
    user.emiCount[type]--;

    console.log(`EMI paid ₹${emi}`);

    // check that the loan is completed or not
    if (user.emiCount[type] === 0) {
        user.loanStatus[type] = false;
        user.emiCosts[type] = 0;
        user.loanTotals[type] = 0;
        console.log("Loan is fully completed, no remaining loan left.")
    }
    else {
        console.log(`Remainig Amount: ${user.loanTotals[type].toFixed(2)}`);
        console.log(`Remainig EMI: ${user.emiCount[type]}`);
    }
    prompt("Press Enter to continue...");
}

// user Details Update
function updateUserDetails(user) {
    console.clear();
    console.log("\n===== UPDATE DETAILS =====");

    // phone Verificateion
    console.log("Identity Verification Required");
    let phoneVerify = prompt("Enter your registered phone number to continue: ");
    while (phoneVerify != user.Phone) {
        console.log("Verification failed");
        phoneVerify = prompt("Enter correct phone number (or type '0' to cancel): ");
        if (phoneVerify === "0") return;
    }

    while (true) {
        console.clear();
        console.log("\n-------Update processing-------")
        console.log("\n1. Update Name");
        console.log("2. update Email");
        console.log("3. Update Number");
        console.log("4. Back");

        let choice = prompt("Enter choice: ");

        switch (choice) {
            case "1":
                let newName = prompt('Enter the new name: ');
                if (!nameRegex.test(newName)) {
                    console.log("Invaliid Name");
                    prompt("Press Enter to continue...");
                    break;
                }
                if (user.name === newName) {
                    console.log('New name cannot be the same as the current name.')
                    prompt("Press Enter to continue...");
                    break;
                }
                user.name = newName;
                console.log("Name updated successfully")
                prompt("Press Enter to continue...")
                break;
            case "2":
                let newEmail = prompt("Entre the new email: ");

                if (!emailRegex.test(newEmail)) {
                    console.log("Invalid Email");
                    prompt("Press Enter to continue...");
                    break;
                }

                // check duplicate
                let existEmail = users.some(u => u.email === newEmail);
                if (existEmail) {
                    console.log("Email already exists");
                    prompt("Press Enter to continue...");
                    break;
                }
                user.email = newEmail;
                console.log("Email updated successfully")
                prompt("Press Enter to continue...")
                break;
            case "3":
                let newNumber = prompt('Entre the number: ');

                if (!phoneRegex.test(newNumber)) {
                    console.log("Invalid Number");
                    prompt("Press Enter to continue...");
                    return;
                }

                // check duplicate
                let existNumber = users.some(u => u.Phone === newNumber);
                if (existNumber) {
                    console.log("Number already exist");
                    prompt("Press Enter to continue...");
                    break;
                }
                user.Phone = newNumber;
                console.log("Number updated successfully");
                prompt("Press Enter to continue...")
                break;
            case "4": return;
            default:
                console.log("Invalid choice");
                prompt("Press Enter to continue...");
        }
    }
}

// Account Details
function accountDetails(user) {
    console.log("\n===== ACCOUNT DETAILS =====");

    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone number: ${user.Phone}`);
    console.log(`Account Number: ${user.accountNumber}`)

    // balance
    console.log(`Total Balance: ${user.Balance}`);

    // Loans details
    console.log("\n--- Active Loans ---");
    const loanTypes = ["Home Loan", "Business Loan", "Education Loan"];

    let presentLoan = false;
    for (let i = 0; i < 3; i++) {
        console.log();
        console.log(loanTypes[i]);
        if (user.loanStatus[i] === true) {
            presentLoan = true;

            let emi = user.emiCount[i];
            console.log("pending loans: ", user.loanTotals[i]);
            console.log("Remaining EMIs: ", emi);

            let year = Math.floor(emi / 12);
            let month = emi % 12;
            console.log(`Timi Remaining: ${year} years ${month} months`)
        }
        else{
            console.log("NO active loans");
        }
    }
    prompt("Press Enter to continue...")
}

// show Accounts
function showAccounts() {
    console.log("\nAccound users: ")
    if (users.length === 0) {
        console.log("No record found!");
        return;
    }
    else {
        for (let i = 0; i < users.length; i++) {
            console.log(`${users[i].name} | Account number: ${users[i].accountNumber}`)
        }
    }
}

// main menue
function mainMenu() {
    while (true) {
        console.log(`
        ╔══════════════════════════════╗
        ║         BANK SYSTEM          ║
        ╚══════════════════════════════╝
        `);
        console.log("1. Register");
        console.log("2. login")
        console.log("3. Show Acccounts")
        console.log("4. Exit");

        let choice = prompt("Enter choice: ");

        switch (choice) {
            case "1": registerUsers();
                break;
            case "2": loginUser();
                break;
            case "3": showAccounts();
                break;
            case "4": console.log("Exit");
                return;
            default:
                console.log("Invalid choice");
        }
    }
}
// Start App
mainMenu();