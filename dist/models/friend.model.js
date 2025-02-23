import { FRIEND_MODEL, REF_ID, USER_MODEL, } from '@constants/global.constant.js';
import mongoose from "mongoose";
const FriendSchema = new mongoose.Schema({
    user1: {
        type: REF_ID,
        ref: USER_MODEL
    },
    user2: {
        type: REF_ID,
        ref: USER_MODEL
    }
}, { timestamps: true });
export const Friend = mongoose.model(FRIEND_MODEL, FriendSchema);
//# sourceMappingURL=friend.model.js.map