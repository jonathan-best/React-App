import React from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';

class AppController extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    const DefaultLayout = ({ children }) => {
      return (
        <div className={`controller`}
          key="globalWrapper"
        >
          Header
          {children}
        </div>
      )
    };

    return (
      <Switch>
        <Route exact
          path='/'
        >
          <DefaultLayout>I think this works</DefaultLayout>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(AppController);
