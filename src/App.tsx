import * as React from "react";
import ImageModal from "./components/ImageModal";

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

  private showImage = (event: any) => {
    this.setState({ showImage: event.target.getAttribute('data-img') });
  }

  private hideImage = () => {
    this.setState({ showImage: '' });
  }

  public render() {
    const { showImage } = this.state;

    const imageName = 'app.png';

    return (
      <div className="app container-fluid">
        <header className="row app-header">
          <div className="col">
            <h1 className="app-title">Storefront</h1>
          </div>
        </header>
        <div className="app-container">


        </div>
        <div className="row justify-content-center">
          <div className="col col-lg-10 col-xl-8">
          <img
              //className={classNames({ 'keep-original-size': true })}
              src={`./images/${imageName}`}
              alt="logo"
              data-img={imageName}
              onClick={this.showImage}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <footer className="app-footer col"></footer>
        </div>
        {showImage !== '' &&
            <ImageModal imagePath={`./images/${showImage}`} hideImage={this.hideImage} />
          }
      </div>
    );
  }
}

export default App;
