import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Password from './pages/password/Password';
import Language from './pages/language/Language';
import RechargeRecord from './pages/recharge-record/RechargeRecord';
import WithdrawRecord from './pages/withdraw-record/WithdrawRecord';
import Notification from './pages/notification/Notification';
import AccountDetails from './pages/account-details/AccountDetails';
import Tabs from './pages/tabs/Tabs';
import Invite from './pages/invite/Invite';
import Shipping from './pages/shipping/Shipping';
import Withdraw from './pages/withdraw/Withdraw';
import TeamReport from './pages/team-report/TeamReport';
import Bank from './pages/bank/Bank';

const App = () => (
	< IonApp >
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path="/signup">
					<Signup />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/password">
					<Password />
				</Route>
				<Route exact path="/language">
					<Language />
				</Route>
				<Route exact path="/recharge-record">
					<RechargeRecord />
				</Route>
				<Route exact path="/withdraw-record">
					<WithdrawRecord />
				</Route>
				<Route exact path="/notification">
					<Notification />
				</Route>
				<Route exact path="/invite">
					<Invite />
				</Route>
				<Route exact path="/account-details">
					<AccountDetails />
				</Route>
				<Route exact path="/shipping">
					<Shipping />
				</Route>
				<Route exact path="/withdraw">
					<Withdraw />
				</Route>
				<Route exact path="/team-report">
					<TeamReport />
				</Route>
				<Route exact path="/bank">
					<Bank />
				</Route>
				<Route exact path="/">
					<Redirect to="/signup" />
				</Route>
				<Route
					path="/app"
					render={() => (
						<Tabs />
					)}
				/>
			</IonRouterOutlet>

		</IonReactRouter>
	</IonApp >
);

export default App;
