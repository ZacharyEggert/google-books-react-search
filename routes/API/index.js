const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message:'Hello API!'})
})

module.exports = router;