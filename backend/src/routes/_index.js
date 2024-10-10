const express = require('express')
const router = express.Router()

const AccountRoutes = require('./AccountRoutes')
const AnswerRoutes = require('./AnswerRoutes')
const QuestionRoutes = require('./QuestionRoutes')
const MemberRoutes = require('./MemberRoutes')
const CommentRoutes = require('./CommentRoutes')
const BadgeRoutes = require('./BadgeRoutes')
const TagRoutes = require('./TagRoutes')

router.use('/account', AccountRoutes)
router.use('/member', MemberRoutes)
router.use('/question', QuestionRoutes)
router.use('/answer', AnswerRoutes)
router.use('/comment', CommentRoutes)
router.use('/badge', BadgeRoutes)
router.use('/tag', TagRoutes)

module.exports = router
