import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </Auth0Provider>
);
