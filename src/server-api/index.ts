import * as express from 'express';
import {UserRouter} from './user';
import {SitRouter} from './sit';
import {OrgRouter} from './organization';
import {CountryRouter} from './country';
import {OrderRouter} from './order';

export const ApiRouter = express.Router();

ApiRouter.use('/user', UserRouter);
ApiRouter.use('/org', OrgRouter);
ApiRouter.use('/sit', SitRouter);
ApiRouter.use('/country', CountryRouter);
ApiRouter.use('/order', OrderRouter);
