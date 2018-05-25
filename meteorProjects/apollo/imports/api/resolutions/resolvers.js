import Resolutions from './resolutions';

// Resolutions.insert({
//     name: "Test Res"
// });

 //Select *

//console.log(res);//[

export default {
    Query:{
        resolutions(obj, args, {userId}){
            // console.log(context);
            console.log(userId);  
            const res = Resolutions.find({userId}).fetch();
            console.log(res);
            return res;
        }
    },

    Mutation: {
        createResolution(obj, {name}, {userId}){
            console.log(name);

            const resolutionsId = Resolutions.insert({
                name,
                userId
            });
            console.log("somethig");
            return Resolutions.findOne(resolutionsId);
        }
    }
};