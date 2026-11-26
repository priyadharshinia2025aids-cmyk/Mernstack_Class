import z from "zod";

export const registerschema = z.object({
    name:z.string().min(3,"Name must contain 3 letters"),
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8,"password should contain 8 chars"),
    age:z.coerce.number().min(18,"Age should contain min 18 years")
    
    
})