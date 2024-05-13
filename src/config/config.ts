import developmentEnv from './environments/development';
import productionEnv from './environments/production';

export default process.env.NODE_ENV === 'prod' ? productionEnv : developmentEnv