import { handleNewExperienceDetailsPosting,handleGetExperienceDetailsById,handleUpdateExperienceDetailsById,handleDeleteExperienceDetailsById,handleFetchAllExperienceDetailsAdmin } from '../controllers/userProfileExperienceCont';
import isAuthenticated from '../middlewares/auth';

export default (router : any) => {
    router.post("/auth/postExperience",handleNewExperienceDetailsPosting,isAuthenticated) ;
    router.put("/auth/updateExperience",handleUpdateExperienceDetailsById,isAuthenticated) ;
    router.get("/auth/getExperience",handleGetExperienceDetailsById,isAuthenticated) ;
    router.delete("/auth/deleteExperience",handleDeleteExperienceDetailsById,isAuthenticated) ;
}