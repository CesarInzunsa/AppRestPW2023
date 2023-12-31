import { Router } from 'express';
import config from '../../../config/config'
//Esta parte de imports crece por cada nuevo router que agregues.
import labelsRoutes from './labels.routes';

const routerAPI = (app) => {

    const router = Router();
    const api = config.API_URL;

    app.use(api, router);

    // Por cada nueva API que agreguemos, esta parte crece. 
    router.use('/pwa2/labels', labelsRoutes);

    return router;
};

module.exports = routerAPI;