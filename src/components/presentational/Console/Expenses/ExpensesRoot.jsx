import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
`;

const Expenses = (props) => {
  const { match: { path } } = props;

  return (
    <Wrapper>
      <Switch>
        <Route path={`${path}/list`} render={() => <div>List All Expenses</div>} />
        <Route path={`${path}/add`} render={() => <div>Add Expense</div>} />
        <Route path={`${path}/edit`} render={() => <div>Edit Expense</div>} />
        <Redirect from={path} to={`${path}/list`} />
      </Switch>
    </Wrapper>
  );
};

Expenses.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Expenses;
