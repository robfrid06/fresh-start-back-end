import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', postsCtrl.index)
router.post('/', checkAuth, postsCtrl.create)
router.get('/:id', checkAuth, postsCtrl.show)
router.put('/:id', checkAuth, postsCtrl.update)
router.delete('/:id', checkAuth, postsCtrl.delete)
router.put('/:id/add-photo', checkAuth, postsCtrl.addPhoto)

router.post('/:id/likes', checkAuth, postsCtrl.addLike)
router.delete('/:id/likes', checkAuth, postsCtrl.removeLike)

router.post('/:id/comments', checkAuth, postsCtrl.createComment)
router.delete('/:id/comments/:commentId', checkAuth, postsCtrl.deleteComment)

export { router }
