import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import configureStore from "./store/configureStore";

import ImagePreloader from "./components/ImagePreloader";
import IntroScreen from "./components/IntroScreen";
import MainContainer from "./containers/MainContainer";
import SelectSkillsContainer from "./containers/SelectSkillsContainer";

const store = configureStore();

class App extends React.Component {
	constructor() {
		super();
		this.state =
			{
				imagesLoaded: false
			};

		this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
	}

	handleImagesLoaded() {
		this.setState({
			imagesLoaded: true
		});
	}

	render() {
		const routes = [
			// Disabling Intro Screen for now.
			// { path: '/', name: 'Intro', Component: IntroScreen },
			{ path: '/magicTypes', name: 'MainContainer', Component: MainContainer },
			{ path: '/', name: 'MainContainer', Component: MainContainer },
			{ path: '/selectSkills', name: 'SelectSkillsContainer', Component: SelectSkillsContainer },
		];

		return (
			
			<Provider store={store} >
				<Router>
					<>
						<div className="container-fluid app-container">
							<ImagePreloader ImagesLoaded={this.handleImagesLoaded} />
							{routes.map(({ path, Component }) => (
								<Route key={path} exact path={path}>
									{({ match }) => (
										<CSSTransition
											in={match != null}
											timeout={1200}
											classNames="page"
											unmountOnExit
											>
											<div className="page">
												{this.state.imagesLoaded === true && <Component />}
											</div>
										</CSSTransition>
									)}
								</Route>
							))}
						</div>
					</>
				</Router>
			</Provider>
		  
    )
  }
}

export default App;