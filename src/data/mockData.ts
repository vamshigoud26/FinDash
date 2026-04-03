export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: TransactionType;
}

export const categories = {
  income: ["Salary", "Freelance", "Investments", "Refunds"],
  expense: ["Food & Dining", "Transportation", "Shopping", "Entertainment", "Utilities", "Healthcare", "Education", "Travel"],
};

export const allCategories = [...categories.income, ...categories.expense];

export const mockTransactions: Transaction[] = [
  { id: "1", date: "2025-03-28", description: "Monthly Salary", amount: 5200, category: "Salary", type: "income" },
  { id: "2", date: "2025-03-27", description: "Grocery Store", amount: 84.50, category: "Food & Dining", type: "expense" },
  { id: "3", date: "2025-03-26", description: "Uber Ride", amount: 22.30, category: "Transportation", type: "expense" },
  { id: "4", date: "2025-03-25", description: "Netflix Subscription", amount: 15.99, category: "Entertainment", type: "expense" },
  { id: "5", date: "2025-03-24", description: "Freelance Project", amount: 1200, category: "Freelance", type: "income" },
  { id: "6", date: "2025-03-23", description: "Electric Bill", amount: 95.00, category: "Utilities", type: "expense" },
  { id: "7", date: "2025-03-22", description: "New Shoes", amount: 129.99, category: "Shopping", type: "expense" },
  { id: "8", date: "2025-03-21", description: "Restaurant Dinner", amount: 67.80, category: "Food & Dining", type: "expense" },
  { id: "9", date: "2025-03-20", description: "Stock Dividend", amount: 340, category: "Investments", type: "income" },
  { id: "10", date: "2025-03-19", description: "Gas Station", amount: 45.00, category: "Transportation", type: "expense" },
  { id: "11", date: "2025-03-18", description: "Online Course", amount: 49.99, category: "Education", type: "expense" },
  { id: "12", date: "2025-03-17", description: "Doctor Visit", amount: 120.00, category: "Healthcare", type: "expense" },
  { id: "13", date: "2025-03-15", description: "Amazon Refund", amount: 34.99, category: "Refunds", type: "income" },
  { id: "14", date: "2025-03-14", description: "Coffee Shop", amount: 12.50, category: "Food & Dining", type: "expense" },
  { id: "15", date: "2025-03-12", description: "Weekend Trip", amount: 350.00, category: "Travel", type: "expense" },
  { id: "16", date: "2025-03-10", description: "Phone Bill", amount: 55.00, category: "Utilities", type: "expense" },
  { id: "17", date: "2025-03-08", description: "Gym Membership", amount: 40.00, category: "Healthcare", type: "expense" },
  { id: "18", date: "2025-03-05", description: "Freelance Work", amount: 800, category: "Freelance", type: "income" },
  { id: "19", date: "2025-02-28", description: "Monthly Salary", amount: 5200, category: "Salary", type: "income" },
  { id: "20", date: "2025-02-25", description: "Groceries", amount: 112.30, category: "Food & Dining", type: "expense" },
  { id: "21", date: "2025-02-22", description: "Movie Tickets", amount: 28.00, category: "Entertainment", type: "expense" },
  { id: "22", date: "2025-02-18", description: "Internet Bill", amount: 65.00, category: "Utilities", type: "expense" },
  { id: "23", date: "2025-02-15", description: "Clothing", amount: 89.99, category: "Shopping", type: "expense" },
  { id: "24", date: "2025-02-10", description: "Freelance Design", amount: 950, category: "Freelance", type: "income" },
  { id: "25", date: "2025-02-05", description: "Taxi", amount: 18.50, category: "Transportation", type: "expense" },
  { id: "26", date: "2025-01-28", description: "Monthly Salary", amount: 5200, category: "Salary", type: "income" },
  { id: "27", date: "2025-01-20", description: "Dentist", amount: 200.00, category: "Healthcare", type: "expense" },
  { id: "28", date: "2025-01-15", description: "Books", amount: 35.00, category: "Education", type: "expense" },
  { id: "29", date: "2025-01-10", description: "Concert Tickets", amount: 75.00, category: "Entertainment", type: "expense" },
  { id: "30", date: "2025-01-05", description: "Stock Dividend", amount: 280, category: "Investments", type: "income" },
];

export const monthlyData = [
  { month: "Oct", income: 5800, expenses: 3200, balance: 2600 },
  { month: "Nov", income: 6100, expenses: 3800, balance: 2300 },
  { month: "Dec", income: 7200, expenses: 4500, balance: 2700 },
  { month: "Jan", income: 5480, expenses: 3100, balance: 2380 },
  { month: "Feb", income: 6150, expenses: 3400, balance: 2750 },
  { month: "Mar", income: 6774.99, expenses: 3088.07, balance: 3686.92 },
];
