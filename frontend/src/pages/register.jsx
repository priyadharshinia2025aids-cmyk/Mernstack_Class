import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formSchema/registerschema";
import {zodResolver} from "@hookform/resolvers/zod";

/*import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formSchema/registerschema";
import {zodResolver} from "@hookform/resolvers/zod";

function Register(){
    const navigate = useNavigate();
    const{register,handleSubmit,formState:{errors}} = useForm({
        resolver :zodResolver(registerschema)

    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/")
    }
    return(
        <>
           <form onSubmit={handleSubmit(onSubmit1)}>
           <input type="text" placeholder="Enter your name" {...register("name")}/>
           <p>{errors.name?.message}</p>
           <input type="email" placeholder="Enter your email" {...register("email")}/>
           <p>{errors.email?.message}</p>
           <input type="password" placeholder="Enter your Password" {...register("password")}/>
           <p>{errors.name?.message}</p>
           <input type="number" placeholder="Enter your age" {...register("age")}/>
           <p>{errors.age?.message}</p>
           <button type="submit">Submit</button>
           </form>
        </>
    )
}
export default Register;
*/


function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("register success");
        navigate("/", {
            state: data
        });
    }

    return (
        <div className="min-h-screen max-w-screen flex items-center justify-center bg-linear-to-br from-pink-200 via-indigo-300 to-purple-400 p-4">
            <div className="w-full max-w-md bg-grey  p-8 rounded-2xl shadow-2xl">

                <h1 className="text-3xl font-bold text-center text-black -700 mb-2">
                    Create Account
                </h1>

                <p className="text-gray-500 text-center mb-8">
                    Register to get started
                </p>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" placeholder="Enter your name" {...register("name")} className="w-full px-4 py-3 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                    <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" placeholder="Enter your email" {...register("email")} className="w-full px-4 py-3 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                        <p className="text-red-500 text-sm mt-1">{errors.email?.message}                        </p>
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Password </label>
                    <input type="password" placeholder="Enter your password" {...register("password")} className="w-full px-4 py-3 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
                    <p className="text-red-500 text-sm mt-1"> {errors.password?.message} </p>
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-2"> Age </label>
                    <input type="number" placeholder="Enter your age" {...register("age", { valueAsNumber: true })} className="w-full px-4 py-3 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
                    <p className="text-red-500 text-sm mt-1"> {errors.age?.message} </p>
                </div>
                <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md" >Register
                </button>
            </form>
            </div>
        </div>
        
    );
}

export default Register;

