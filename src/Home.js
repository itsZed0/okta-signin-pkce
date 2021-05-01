import React from "react";

import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Home;

/* export default withOktaAuth(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
    }

    async login() {
      this.props.oktaAuth.signInWithRedirect({ originalUri: "/profile" });
    }

    render() {
      if (this.props.authState.isPending) {
        return <div>Loading authentication...</div>;
      } else if (!this.props.authState.isAuthenticated) {
        return (
          <div>
            <a onClick={this.login}>Login</a>
          </div>
        );
      }
    }
  }
); */
