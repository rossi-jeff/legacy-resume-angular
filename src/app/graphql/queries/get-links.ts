export const GET_LINKS_QUERY = `
    query GetLinksQuery {
        getLinks {
            Id
            Url
            Title
            Description
            Type
            Parameters {
                Id
                Key
                Value
                Created
                Updated
                Version
            }
            Created
            Version
        }
    }
`;