const express = require('express')
const router = express.Router()

const AccountRoutes = require('./AccountAdmin.route')
const MemberRoutes = require('./MemberAdmin.route')
const QuestionRoutes = require('./QuestionAdmin.route')
const CommentRoutes = require('./CommentAdmin.route')
const TagRoutes = require('./TagAdmin.route')

router.use('/account', AccountRoutes)
router.use('/member', MemberRoutes)
router.use('/question', QuestionRoutes)
router.use('/comment', CommentRoutes)
router.use('/tag', TagRoutes)

module.exports = router
