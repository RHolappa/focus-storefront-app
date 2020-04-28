import * as React from "react";
//import * as _ from 'lodash';

interface AppState {}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      //projects: contents,
    };
  }

  public render() {
    return (
      <div className="app container-fluid">
        <header className="row app-header">
          <div className="col">
            <h1 className="app-title">Storefront</h1>
          </div>
        </header>
        <div className="app-container"></div>
        <div className="row justify-content-center">
          <div className="col col-lg-10 col-xl-8"></div>
        </div>
        <div className="row justify-content-center">
          <footer className="app-footer col"></footer>
        </div>
      </div>
    );
  }
}

export default App;
