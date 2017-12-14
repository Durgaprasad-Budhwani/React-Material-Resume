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

export const GetExperience = async () => {
    let response = await fetch("experience.json");
    try{
        return await response.json();
    }
    catch(error){
        return [];
    }
};


export const GetEducation = async () => {
    let response = await fetch("education.json");
    try{
        return await response.json();
    }
    catch(error){
        return [];
    }
};

export const GetSkills = async () => {
    let response = await fetch("skills.json");
    try{
        return await response.json();
    }
    catch(error){
        return [];
    }
};

