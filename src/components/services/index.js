/**
 * Created by durgaprasad on 10/3/17.
 */
import fetch from 'isomorphic-fetch'

export const GetBlogs = async () => {
  let response = await fetch("blogs.json");
  try{
    let data = await response.json();
    return data;
  }
  catch(error){
    return [];
  }
};

