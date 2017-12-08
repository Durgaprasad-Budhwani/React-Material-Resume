/**
 * Created by Durgaprasad Budhwani on 12/8/2017.
 */
/* global expect,it, describe, afterEach */
import {GetBlogs} from '../../src/services';
import fetchMock from 'fetch-mock'

describe("Services", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    
    it('GetBlogs should return list of blogs', async () => {
        fetchMock.mock('blogs.json', [{id: 1}, {id:2}]);
        let blogs = await GetBlogs();
        expect.arrayContaining(blogs);
        expect(blogs).toHaveLength(2);
    });
    
    it('GetBlogs should return empty list if services return error code', async () => {
        fetchMock.mock('blogs.json', 301);
        let blogs = await GetBlogs();
        expect.arrayContaining(blogs);
        expect(blogs).toHaveLength(0);
    });
});
