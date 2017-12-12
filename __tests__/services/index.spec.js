/**
 * Created by Durgaprasad Budhwani on 12/8/2017.
 */
/* global expect,it, describe, afterEach */
import {GetBlogs, GetExperience, GetEducation} from '../../src/services';
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
    
    it('GetExperience should return list of experience', async () => {
        fetchMock.mock('experience.json', [{id: 1}, {id:2}]);
        let experiences = await GetExperience();
        expect.arrayContaining(experiences);
        expect(experiences).toHaveLength(2);
    });
    
    it('GetExperience should return empty list if services return error code', async () => {
        fetchMock.mock('experience.json', 301);
        let experiences = await GetExperience();
        expect.arrayContaining(experiences);
        expect(experiences).toHaveLength(0);
    });
    
    it('GetEducation should return list of education', async () => {
        fetchMock.mock('education.json', [{id: 1}, {id:2}]);
        let educations = await GetEducation();
        expect.arrayContaining(educations);
        expect(educations).toHaveLength(2);
    });
    
    it('GetEducation should return empty list if services return error code', async () => {
        fetchMock.mock('education.json', 301);
        let educations = await GetEducation();
        expect.arrayContaining(educations);
        expect(educations).toHaveLength(0);
    });
});
