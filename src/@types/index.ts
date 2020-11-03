export interface routes {
    title: string;
    address: string;
    method: "get" | "put" | "post" | "del" | string;
    isProtected: boolean;
    protectType: string | null | undefined | any;
    description: string;
    input: {
        body: {
            title: string;
            required: boolean;
            description: string;
            type: string;
            hasChildren: boolean;
        }[] | null;
        params: {
            title: string;
            required: boolean;
            description: string;
        }[] | null;
        query: {
            title: string;
            required: boolean;
            description: string;
        }[] | null;
        headers: {
            title: string;
            required: boolean;
            description: string;
        }[] | null;
    },
    output: {
        200: {
            data: any;
        } | undefined;
        400: {
            data: any;
        } | undefined;
        401: {
            data: any;
        } | undefined;
        404: {
            data: any;
        } | undefined;
        500: {
            data: any;
        } | undefined;
    },
    codeExample: {
        languagueName: string | null,
        requestExample: string | null,
        responseExample: string | null
    }[] | null | undefined
}

export default routes