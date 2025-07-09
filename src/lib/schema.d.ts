export type paths = {
    "/": {
        get: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: string;
                        };
                    };
                };
            };
        };
    };
};
