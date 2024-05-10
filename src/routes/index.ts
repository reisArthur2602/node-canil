import { Router } from 'express';
import * as home from '../controllers/home';
import * as search from '../controllers/search';

const router = Router();

router.get('/', home.all);
router.get('/dogs', home.dogs);
router.get('/cats', home.cats);
router.get('/fishes', home.fishes);
router.get('/search', search.search);

export default router;
