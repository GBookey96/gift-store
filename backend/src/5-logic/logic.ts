import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import GiftModel from "../4-models/gift-model"
import TargetAudienceModel from "../4-models/target-audience-model"

async function getAllTargetAudience(): Promise<TargetAudienceModel[]> {
    const sql = "SELECT * FROM targetAudience"
    const targetAudience = await dal.execute(sql)
    return targetAudience
}

async function getGiftsByTargetAudience(id: number): Promise<GiftModel[]> {
    const sql = `
        SELECT G.*, T.targetAudienceName
        FROM gifts AS G JOIN targetAudience AS T
        ON G.targetAudienceId = T.targetAudienceId
        WHERE G.targetAudienceId = ${id}
    `
    const gifts = await dal.execute(sql)
    return gifts
}

async function addNewGift(gift: GiftModel): Promise<GiftModel> {
    const sql = `
    INSERT INTO gifts VALUES (
        DEFAULT,
        '${gift.targetAudienceId}',
        '${gift.name}',
        '${gift.description}',
        '${gift.price}',
        '${gift.discount}'
        )`
        const info: OkPacket = await dal.execute(sql)
        gift.giftId = info.insertId

    return gift
}

export default {
    getAllTargetAudience,
    getGiftsByTargetAudience,
    addNewGift
}