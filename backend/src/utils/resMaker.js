const createResData = (status, data) => {
    return { status, success: status - 200 < 100, data };
}

export default createResData