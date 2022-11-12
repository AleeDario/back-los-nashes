const Show = require('../models/Show');

const controller = {

    read: async (req, res) => {

        let query = {};
        if (req.query.hotelId) {
            query = {
                hotelId: req.query.hotelId
            };
        }

        try {
            let allShows = await Show.find(query);
            if (allShows) {
                res.status(200).json({
                    success: true,
                    message: 'All Shows',
                    data: allShows,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No Shows found',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
}

module.exports = controller