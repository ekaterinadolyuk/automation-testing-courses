const validator = require('jsonschema');
const cartSchema = require('./schemas/cart.json');
const searchResultsSchema = require('./schemas/searchResults.json');

describe('Testing of Reserved website API', () => {
    it('should add product to a cart', async () => {
        let response = await fetch('https://www.reserved.com/pl/pl/ajx/checkoutcart/add/', {
            method: 'POST',
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "referrer": "https://www.reserved.com/pl/pl/",
            },
            body: "products%5B0%5D%5Bproduct_id%5D=7747943&products%5B0%5D%5Bsuper_attribute%5D%5B327%5D=1037&products%5B0%5D%5Bqty%5D=1&products%5B0%5D%5Bversion%5D=1&products%5B0%5D%5Bsku%5D=564GC-00X-M&_dyid=7651616722130641339&_dyjsession=",
        });
        let body = await response.json();
        let validatorResult = validator.validate(body, cartSchema);
        
        expect(response.status).toBe(200);
        expect(validatorResult.valid).toBeTruthy();
        expect(body.status).toBeTruthy();
        expect(body.count).toBe(1);
        expect(body.products[0].sku).toBe("564GC-00X-M");
    })

    it('should return relevant search results', async () => {
        const searchString = 'Wzorzysta bluzka z lnem'
        let response = await fetch('https://4dblbfmejv-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.7.0)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.56.5)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.33.0)%3B%20react-instantsearch-hooks%20(6.33.0)%3B%20JS%20Helper%20(3.20.0)&x-algolia-api-key=e97ce435b768f0fa7048e25a7cf3752e&x-algolia-application-id=4DBLBFMEJV', {
            method: 'POST',
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "referrer": "https://www.reserved.com/pl/pl/",
            },
            body: `{\"requests\":[{\"indexName\":\"PRODUCT_RES_PL_PL\",\"params\":\"clickAnalytics=true&facets=%5B%22color%22%2C%22final_price%22%2C%22price_range_point%22%2C%22promotion%22%2C%22sex%22%2C%22sizes%22%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&maxValuesPerFacet=40&page=0&query=${searchString}&tagFilters=&userToken=GA1_1_1368741447_1745428067\"},{\"indexName\":\"PRODUCT_RES_PL_PL_query_suggestions\",\"params\":\"clickAnalytics=true&facets=%5B%22color%22%2C%22final_price%22%2C%22price_range_point%22%2C%22promotion%22%2C%22sex%22%2C%22sizes%22%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&maxValuesPerFacet=40&page=0&query=${searchString}&tagFilters=&userToken=GA1_1_1368741447_1745428067&facetFilters=%5B%5D&numericFilters=%5B%5D\"}]}`,
        });
        let body = await response.json();
        let validatorResult = validator.validate(body, searchResultsSchema);
        
        expect(response.status).toBe(200);
        console.log(JSON.stringify(validatorResult.errors))
        expect(validatorResult.valid).toBeTruthy();
        expect(body.results[0].hits.length).toBe(4);
        expect(body.results[0].hits[0].name).toBe(searchString);
    })

    it('should return nothing for irrelevant search string', async () => {
        const searchString = 'Sobaka'
        let response = await fetch('https://4dblbfmejv-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.7.0)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.56.5)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.33.0)%3B%20react-instantsearch-hooks%20(6.33.0)%3B%20JS%20Helper%20(3.20.0)&x-algolia-api-key=e97ce435b768f0fa7048e25a7cf3752e&x-algolia-application-id=4DBLBFMEJV', {
            method: 'POST',
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "referrer": "https://www.reserved.com/pl/pl/",
            },
            body: `{\"requests\":[{\"indexName\":\"PRODUCT_RES_PL_PL\",\"params\":\"clickAnalytics=true&facets=%5B%22color%22%2C%22final_price%22%2C%22price_range_point%22%2C%22promotion%22%2C%22sex%22%2C%22sizes%22%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&maxValuesPerFacet=40&page=0&query=${searchString}&tagFilters=&userToken=GA1_1_1368741447_1745428067\"},{\"indexName\":\"PRODUCT_RES_PL_PL_query_suggestions\",\"params\":\"clickAnalytics=true&facets=%5B%22color%22%2C%22final_price%22%2C%22price_range_point%22%2C%22promotion%22%2C%22sex%22%2C%22sizes%22%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&maxValuesPerFacet=40&page=0&query=${searchString}&tagFilters=&userToken=GA1_1_1368741447_1745428067&facetFilters=%5B%5D&numericFilters=%5B%5D\"}]}`,
        });
        let body = await response.json();
        let validatorResult = validator.validate(body, searchResultsSchema);
        
        expect(response.status).toBe(200);
        console.log(JSON.stringify(validatorResult.errors))
        expect(validatorResult.valid).toBeTruthy();
        expect(body.results[0].hits.length).toBe(0);
    })
})