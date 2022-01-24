import BudgetFormExpenses from "./BudgetComponents/BudgetFormExpenses";
import BudgetFormIncomes from "./BudgetComponents/BudgetFormIncomes";
import ExpensesList from "./BudgetComponents/ExpensesList";
import IncomesList from "./BudgetComponents/IncomesList";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { PageWrapper } from "../../common/page-wrapper/page-wrapper";
import { Button } from "@mui/material";


export const Budget = () => {
    const theme = useTheme();
    console.log(theme)

    const [expenses, setExpenses] = useState([

    ]);
    const handleExpenseSubmit = (expense) => {
        setExpenses([...expenses, expense])
    }

    const [incomes, setIncomes] = useState([

    ]);
    const handleIncomesSubmit = (income) => {
        setIncomes([...incomes, income])
    }

    const [chosenMoneyOperations, setChosenMoneyOperations] = useState(
        "expenses"
    )

    return (
        <PageWrapper>

            <h1>Budżet domowy</h1>
            <div>
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                        margin: "1rem",
                        height: "3rem",
                        color: theme.palette.primary,
                        backgroundColor: theme.palette.secondary.contrastText,
                        ":hover": { backgroundColor: theme.palette.primary.contrastText },
                    }}
                    onClick={() => setChosenMoneyOperations("expenses")}>
                    Wydatki
                </Button>
                <button className={`button incomes ${chosenMoneyOperations === "incomes" ? "chosen" : ""}`} onClick={() => setChosenMoneyOperations("incomes")}>
                    Przychody
                </button>
            </div>
            {
                chosenMoneyOperations === "expenses" ? (
                    <>
                        <BudgetFormExpenses onSubmit={handleExpenseSubmit} />
                        <ExpensesList expenses={expenses} />
                    </>
                ) : (
                    <>
                        <BudgetFormIncomes onSubmit={handleIncomesSubmit} />
                        <IncomesList incomes={incomes} />
                    </>
                )
            }


        </PageWrapper>
    )
}