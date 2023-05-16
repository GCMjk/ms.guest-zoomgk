export enum RabbitMQ {
    GuestQueue = 'guests'
}

export enum GuestMSG {
    CREATE = 'CREATE_GUEST',
    FIND_ALL = 'FIND_GUESTS',
    FIND_ONE = 'FIND_GUEST',
    FIND_BY_USER_ID = 'FIND_GUESTS_BY_USER_ID',
    UPDATE = 'UPDATE_GUEST',
    DELETE = 'DELETE_GUEST',
    CONFIRMED = 'CONFIRMED'
}