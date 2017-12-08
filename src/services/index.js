/**
 * Created by durgaprasad on 10/3/17.
 */

export const GetBlogs = async () => {
  let response = await fetch("blogs.json");
  try{
    return await response.json();
  }
  catch(error){
    return [];
  }
};

