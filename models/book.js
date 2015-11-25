
module.exports = {
    identity: 'book',
    connection: 'default',
    attributes: {
        date: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },
            required: true,
        },
        status: {
            type: 'string',
            enum: ['new', 'reading', 'ready', 'giving', 'pending'],
            required: true,
        },
        cim: {
            type: 'string',
            required: true,
        },
        iro: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },

        user: {
            model: 'user',
        },
    }
}

