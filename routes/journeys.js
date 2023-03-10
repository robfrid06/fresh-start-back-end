import { Router } from 'express'
import * as journeysCtrl from '../controllers/journeys.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', journeysCtrl.index)
router.get('/:id', journeysCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, journeysCtrl.create)
router.put('/:id/add-photo', checkAuth, journeysCtrl.addPhoto)

router.post('/:id/subscribers', checkAuth, journeysCtrl.addSubscriber)
router.delete('/:id/subscribers', checkAuth, journeysCtrl.removeSubscriber)

router.post('/:id/reviews', checkAuth, journeysCtrl.createReview)
router.delete('/:id/reviews/:reviewId', checkAuth, journeysCtrl.deleteReview)


export { router }
