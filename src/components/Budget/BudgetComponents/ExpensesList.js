import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/material';
import styled from 'styled-components';
import { Theme } from "../../../common/theme/theme";
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const NewExpenseContainer = styled.div`
  display: flex;
  min-height: 1rem;
  margin: 10px;
  padding: 10px;
  background-color: grey;
  color: ${Theme.palette.secondary.contrastText};
  `;

const ListItemElement = styled.span`
padding: 10px;
`

function ExpensesList(props) {


    return (
        <div className="expenses-container">
            <List>
                {
                    props.expenses.map((expense) => {
                        return <NewExpenseContainer>

                            <ListItem className="expenses" key={expense.id}>
                                <ListItemElement>{expense.amount} zł </ListItemElement>
                                <ListItemElement>{expense.category}</ListItemElement>
                                <ListItemElement>{expense.date}</ListItemElement>

                                <DeleteIcon onClick={() => props.onDelete(expense.id)} />
                            </ListItem>

                        </NewExpenseContainer>
                    })
                }
            </List>

        </div >
    )
}


export default ExpensesList;