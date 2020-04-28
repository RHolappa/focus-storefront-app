import * as React from "react";
import ImageModal from "./components/ImageModal";
// import { } from './content/contents';

//import * as _ from 'lodash';

interface AppState {
  showImage: string;
}

export interface AppProps {
}

class App extends  React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      showImage: '',
    };
  }
  private hideImage = () => {
    this.setState({ showImage: '' });
  }
  public render() {

    return (
      <div className="app container-fluid">
        <header className="row app-header">
          <div className="col">
            <h1 className="app-title">Storefront</h1>
          </div>
        </header>
        <div className="app-container">
        <ImageModal imagePath={`./images/`} hideImage={this.hideImage} />


        </div>
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
