import express, {Request, Response, NextFunction} from "express"
import logic from "../5-logic/logic"
import GiftModel from "../4-models/gift-model"

const router = express.Router()

router.get("/target-audience", async(request: Request, response: Response, next: NextFunction)=> {
    try {
        const targetAudience = await logic.getAllTargetAudience()
        response.json(targetAudience)
    }
    catch(err:any) {
        next(err)
    }
})

router.get("/gifts-per-target-audience/:id", async(request: Request, response: Response, next: NextFunction)=> {
    try {
        const targetAudienceId = +request.params.id
        const gifts = await logic.getGiftsByTargetAudience(targetAudienceId)
        
        response.json(gifts)
    }
    catch(err:any) {
        next(err)
    }
})

router.post("/gifts", async(request: Request, response: Response, next: NextFunction)=> {
    try {
        const gift = new GiftModel(request.body)
        const addedGift = await logic.addNewGift(gift)
        response.status(201).json(addedGift)
    }
    catch(err:any) {
        next(err)
    }
})

export default router;