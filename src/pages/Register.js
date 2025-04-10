// // // İmport Alanı:

// // import { useState } from "react";
// // import { register } from "../firebase";



// // export default function Register() {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault()
// //         const user = await register(email, password);
// //         console.log(user);

// //     }
// //     return (
// //         <form className="max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>

// //         <div>
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700 rounded-md ">
// //                 E-posta
// //             </label>
// //             <div className="mt-1">
// //                 <input
// //                 type="email"
// //                 className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500 rounded-md "
// //                 placeholder="you@example.com"
// //                 value={email} onChange={e => setEmail(e.target.value)}
// //                 />
// //             </div>
// //         </div>

// //         <div>
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700 rounded-md ">
// //                 Parola
// //             </label>
// //             <div className="mt-1">
// //                 <input
// //                 type="password"
// //                 className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500 rounded-md "
// //                 placeholder="******"
// //                 value={password} onChange={e => setPassword(e.target.value)}
// //                 />
// //             </div>
// //         </div>

// //     <div>
// //     <button disabled={!email || !password} className="bg-blue-500 text-white disabled:opacity-60 cursor-pointer px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300" type="submit" >Kayıt ol</button>
// //     </div>
// //   </form>
// //     )
// // }

//_______________________________________________________________________________________________________________


import { useState } from "react";
import { register } from "../firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await register(email, password);
            console.log(user);

            toast.success("Kayıt başarılı! 🎉");
            
            // Toast'ı görmeleri için kısa bir bekleme sonrası yönlendiriyoruz
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.error("Kayıt hatası:", error.message);
            toast.error("Kayıt başarısız. Lütfen tekrar deneyin.");
        }
    }

    return (
        <form className="max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 rounded-md ">
                    E-posta
                </label>
                <div className="mt-1">
                    <input
                        type="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500 rounded-md "
                        placeholder="you@example.com"
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 rounded-md ">
                    Parola
                </label>
                <div className="mt-1">
                    <input
                        type="password"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-500 rounded-md "
                        placeholder="******"
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <button disabled={!email || !password} className="bg-blue-500 text-white disabled:opacity-60 cursor-pointer px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300" type="submit">
                    Kayıt ol
                </button>
            </div>
        </form>
    )
}


// ______________________________________________________________________________________________________________
