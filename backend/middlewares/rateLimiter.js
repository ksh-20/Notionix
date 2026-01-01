import { Ratelimit } from "@upstash/ratelimit";
import ratelimit from "../src/config/upstash.js";

const rateLimiter = async(req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key"); //usually with authentication we put user with their id inside this limit function

        if(!success)
            return res.status(429).json({message: "Too Many Requests. Please try again later"});

        next();
    } catch (error) {
        console.error("Rate Limit Error", error);
        next(error);
    }
}

export default rateLimiter;